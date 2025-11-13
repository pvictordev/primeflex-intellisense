import {
  CompletionItem,
  ExtensionContext,
  languages as Languages,
  Range,
  CancellationToken,
  TextDocument,
  Position,
} from "vscode";
import { LANG } from "../env";
import { createCompletionSnippet } from "../helpers/createCompletionSnippet";
import { extractClassNames } from "../helpers/extractClassNames";
import { primeflexSnippets } from "../lib/snippets";
import { primeflexBreakpoints, primeflexPseudoStates } from "../lib/variants";
import { ExtensionManager } from "./ExtensionManager";

export class CompletionProvider {
  private manager: ExtensionManager;

  constructor(manager: ExtensionManager) {
    this.manager = manager;
  }

  register(context: ExtensionContext) {
    const provider = Languages.registerCompletionItemProvider(
      LANG,
      {
        provideCompletionItems: (document, position, token) => {
          return this.provideCompletions(document, position, token);
        },
      },
      // Trigger characters for higher priority and better Vue compatibility
      '"',
      "'",
      " ",
      "-",
      ":",
      "s"
    );

    this.manager.addDisposable(provider);
    context.subscriptions.push(provider);
  }

  private provideCompletions(
    document: TextDocument,
    position: Position,
    token: CancellationToken
  ): CompletionItem[] | null {
    const completions: CompletionItem[] = [];
    const offset = document.offsetAt(position);
    const content = document.getText();

    const isVue =
      document.languageId === "vue" ||
      document.languageId === "vue-html" ||
      document.fileName.endsWith(".vue");

    // For Vue files, ensure we're in a class attribute
    if (isVue) {
      const lineText = document.lineAt(position.line).text;
      const beforeCursor = lineText.substring(0, position.character);

      if (!beforeCursor.match(/(?:class|:class)=["'][^"']*$/)) {
        return null;
      }
    }

    const classNames = extractClassNames(content);

    const classNameIndex = classNames.findIndex((className) => {
      return (
        offset >= className.startQuoteIndex &&
        offset < className.closeQuoteIndex
      );
    });

    if (classNameIndex === -1) {
      return null;
    }

    const wordRange = document.getWordRangeAtPosition(
      position,
      /[a-zA-Z0-9-\:]+/
    );
    const prefix = wordRange ? document.getText(wordRange) : "";
    const parts = prefix.split(/\:/);

    if (parts.length >= 2) {
      const [rawPrefix, className] = parts;
      const prefixWithColon = rawPrefix.concat(":");

      const classNameRange = document.getWordRangeAtPosition(
        position,
        /[a-zA-Z0-9-]+/
      );

      // Responsive breakpoints
      if (primeflexBreakpoints.includes(prefixWithColon)) {
        return this.getVariantCompletions(
          className,
          classNameRange,
          token,
          "responsive"
        );
      }

      // Pseudo states
      if (primeflexPseudoStates.includes(prefixWithColon)) {
        return this.getVariantCompletions(
          className,
          classNameRange,
          token,
          "pseudoState"
        );
      }
    }

    // Global completions
    const workspaceColors = this.manager.getWorkspaceColors();
    let index = 0;

    while (index < primeflexSnippets.length && !token.isCancellationRequested) {
      const snippet = primeflexSnippets[index];

      if (!prefix || snippet.class.startsWith(prefix)) {
        const completion = createCompletionSnippet(snippet, workspaceColors);
        if (prefix) {
          completion.range = wordRange;
        }

        completions.push(completion);
      }

      index++;
    }

    return completions;
  }

  private getVariantCompletions(
    className: string,
    classNameRange: Range | undefined,
    token: CancellationToken,
    variantType: "responsive" | "pseudoState"
  ): CompletionItem[] {
    const completions: CompletionItem[] = [];
    const workspaceColors = this.manager.getWorkspaceColors();
    let index = 0;

    while (index < primeflexSnippets.length && !token.isCancellationRequested) {
      const snippet = primeflexSnippets[index];
      const matchesVariant =
        variantType === "responsive" ? snippet.responsive : snippet.pseudoState;

      if (matchesVariant && snippet.class.startsWith(className)) {
        const completion = createCompletionSnippet(snippet, workspaceColors);
        completion.range = classNameRange;
        completions.push(completion);
      }

      index++;
    }

    return completions;
  }
}

import { CompletionItem, CompletionItemKind, MarkdownString } from "vscode";
import { Snippet, SnippetKind } from "../lib/snippets";
import { primeflexColors } from "../lib/colors";

export function createCompletionSnippet(
  snippet: Snippet,
  workspaceColors: Record<string, string>
) {
  const completion = new CompletionItem(snippet.class);

  completion.documentation = new MarkdownString("\n");
  completion.documentation.appendCodeblock(snippet.style, "css");

  if (snippet.kind === SnippetKind.FixedColor) {
    completion.kind = CompletionItemKind.Color;
    completion.detail = primeflexColors[snippet.colorVariableName];
  }

  if (snippet.kind === SnippetKind.DynamicColor) {
    completion.kind = CompletionItemKind.Color;
    completion.detail = workspaceColors[snippet.colorVariableName];
  }

  return completion;
}

import { existsSync as existsFileSync, readFileSync } from "fs";
import { join as joinPath } from "path";
import { Range, TextEditor } from "vscode";
import { createDecorationColor } from "../helpers/createDecorationColor";
import { extractClassNameColors } from "../helpers/extractClassNameColors";
import { extractCssRootColors } from "../helpers/extractCssRootColors";
import { primeflexColors, primeflexSnippetColorsMap } from "../lib/colors";
import { ExtensionManager } from "./ExtensionManager";

export class ColorDecorationManager {
  private manager: ExtensionManager;

  constructor(manager: ExtensionManager) {
    this.manager = manager;
  }

  render(editor: TextEditor) {
    const content = editor.document.getText();
    const classes = extractClassNameColors(content);
    const ranges: Record<string, Range[]> = {};

    let index = 0;
    while (index < classes.length) {
      const className = classes[index];
      const snippet: any = primeflexSnippetColorsMap.get(className.value);

      if (snippet) {
        const startPosition = editor.document.positionAt(className.index);
        const endPosition = editor.document.positionAt(
          className.index + className.value.length
        );

        const range = new Range(startPosition, endPosition);
        ranges[snippet.colorVariableName] = [
          ...(ranges[snippet.colorVariableName] ?? []),
          range,
        ];
      }

      index++;
    }

    const colorDecorations = this.manager.getColorDecorations();
    for (const variableName of Object.keys(colorDecorations)) {
      const decoration = colorDecorations[variableName];
      editor.setDecorations(decoration, ranges[variableName] ?? []);
    }
  }

  syncDecorations() {
    const workspaceConfig = this.manager.getWorkspaceConfig();
    const currentWorkspace = this.manager.getCurrentWorkspace();

    const customTheme = workspaceConfig.get(
      "customTheme",
      "./src/styles/index.css"
    );
    const customThemePath = joinPath(currentWorkspace.uri.path, customTheme);

    // Reset colors
    const colorDecorations: Record<string, any> = {};
    let workspaceColors: Record<string, string> = {};

    if (existsFileSync(customThemePath)) {
      const file = readFileSync(customThemePath);
      const content = file.toString("utf-8");

      workspaceColors = extractCssRootColors(content);

      for (const variableName of Object.keys(workspaceColors)) {
        colorDecorations[variableName] = createDecorationColor(
          workspaceColors[variableName]
        );
      }
    }

    for (const variableName of Object.keys(primeflexColors)) {
      colorDecorations[variableName] = createDecorationColor(
        primeflexColors[variableName]
      );
    }

    this.manager.setColorDecorations(colorDecorations);
    this.manager.setWorkspaceColors(workspaceColors);
  }
}

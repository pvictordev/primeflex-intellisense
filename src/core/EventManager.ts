import {
  ExtensionContext,
  window as Window,
  workspace as Workspace,
} from "vscode";
import { LANG } from "../env";
import { ExtensionManager } from "./ExtensionManager";

export class EventManager {
  private manager: ExtensionManager;

  constructor(manager: ExtensionManager) {
    this.manager = manager;
  }

  register(context: ExtensionContext) {
    this.registerActiveEditorChange(context);
    this.registerTextDocumentChange(context);
  }

  private registerActiveEditorChange(context: ExtensionContext) {
    const event = Window.onDidChangeActiveTextEditor((editor) => {
      if (!editor || !LANG.includes(editor.document.languageId)) {
        return;
      }

      const documentWorkspace = Workspace.getWorkspaceFolder(
        editor.document.uri
      );
      const currentWorkspace = this.manager.getCurrentWorkspace();

      if (documentWorkspace && documentWorkspace !== currentWorkspace) {
        this.manager.updateWorkspace(documentWorkspace);
      }

      const colorManager = this.manager["colorManager"];
      if (colorManager) {
        colorManager.render(editor);
      }
    });

    this.manager.addDisposable(event);
    context.subscriptions.push(event);
  }

  private registerTextDocumentChange(context: ExtensionContext) {
    const event = Workspace.onDidChangeTextDocument((event) => {
      if (LANG.includes(event.document.languageId)) {
        if (event.contentChanges.length) {
          const editor = Window.activeTextEditor;
          if (editor) {
            const colorManager = this.manager["colorManager"];
            if (colorManager) {
              colorManager.render(editor);
            }
          }
        }
      }
    });

    this.manager.addDisposable(event);
    context.subscriptions.push(event);
  }
}

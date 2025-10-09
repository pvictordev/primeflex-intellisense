import { commands as Commands, ExtensionContext } from "vscode";
import { ExtensionManager } from "./ExtensionManager";
import * as vscode from "vscode";

export class CommandManager {
  private manager: ExtensionManager;

  constructor(manager: ExtensionManager) {
    this.manager = manager;
  }

  register(context: ExtensionContext) {
    const command = Commands.registerCommand("primeflex.restart", () => {
      this.manager.restart();
    });

    context.subscriptions.push(command);
  }
}

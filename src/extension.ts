import { ExtensionContext, workspace as Workspace } from "vscode";
import { CONFIG } from "./env";
import { getRelativeConfiguration } from "./helpers/getRelativeConfiguration";
import { ExtensionManager } from "./core/ExtensionManager";

let manager: ExtensionManager;

export const activate = (context: ExtensionContext) => {
  const workspaceConfig = getRelativeConfiguration(CONFIG);
  const isEnabled = workspaceConfig.get("enabled", true);

  manager = new ExtensionManager(context);

  const onChangeConfig = Workspace.onDidChangeConfiguration((event) => {
    if (event.affectsConfiguration("primeflex.enabled")) {
      const config = getRelativeConfiguration(CONFIG);
      const enabled = config.get("enabled", true);

      enabled ? manager.start() : manager.deactivate();
    }
  });

  context.subscriptions.push(onChangeConfig);
  isEnabled ? manager.start() : manager.deactivate();
};

export const deactivate = () => {
  if (manager) {
    manager.deactivate();
  }
};

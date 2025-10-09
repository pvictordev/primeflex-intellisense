import {
  Disposable,
  ExtensionContext,
  TextEditorDecorationType,
  window as Window,
  workspace as Workspace,
  WorkspaceConfiguration,
  WorkspaceFolder,
} from "vscode";
import { CONFIG } from "../env";
import { getRelativeConfiguration } from "../helpers/getRelativeConfiguration";
import { CommandManager } from "./CommandManager";
import { CompletionProvider } from "./CompletionProvider";
import { ColorDecorationManager } from "./ColorDecorationManager";
import { EventManager } from "./EventManager";

export class ExtensionManager {
  private context: ExtensionContext;
  private isEnabled: boolean = false;
  private workspaceConfig?: WorkspaceConfiguration;
  private currentWorkspace?: WorkspaceFolder;
  private colorDecorations: Record<string, TextEditorDecorationType> = {};
  private workspaceColors: Record<string, string> = {};
  private disposables: Disposable[] = [];

  private commandManager?: CommandManager;
  private completionProvider?: CompletionProvider;
  private colorManager?: ColorDecorationManager;
  private eventManager?: EventManager;

  constructor(context: ExtensionContext) {
    this.context = context;
    this.workspaceConfig = getRelativeConfiguration(CONFIG);
    this.isEnabled = this.workspaceConfig.get("enabled", true);

    this.commandManager = new CommandManager(this);
    this.commandManager.register(context);
  }

  start() {
    const editor = Window.activeTextEditor;

    if (editor) {
      const workspace = Workspace.getWorkspaceFolder(editor.document.uri);
      if (workspace) {
        this.updateWorkspace(workspace);
      }
    }

    this.completionProvider = new CompletionProvider(this);
    this.completionProvider.register(this.context);

    this.colorManager = new ColorDecorationManager(this);

    this.eventManager = new EventManager(this);
    this.eventManager.register(this.context);

    if (editor) {
      this.colorManager.render(editor);
    }
  }

  deactivate() {
    this.workspaceConfig = undefined;
    this.currentWorkspace = undefined;
    this.colorDecorations = {};
    this.workspaceColors = {};

    for (const disposable of this.disposables) {
      disposable.dispose();
    }

    this.disposables = [];
  }

  restart() {
    if (!this.isEnabled) {
      Window.showInformationMessage("Primeflex workspace is disabled!");
      return;
    }

    const editor = Window.activeTextEditor;

    if (editor) {
      const newWorkspace = Workspace.getWorkspaceFolder(editor.document.uri);
      if (newWorkspace) {
        this.currentWorkspace = newWorkspace;
      }
    }

    this.workspaceConfig = getRelativeConfiguration(CONFIG);

    if (editor) {
      for (const key of Object.keys(this.colorDecorations)) {
        editor.setDecorations(this.colorDecorations[key], []);
      }
    }

    this.colorManager?.syncDecorations();

    if (editor) {
      this.colorManager?.render(editor);
    }

    const customTheme = this.workspaceConfig!.get(
      "customTheme",
      "./src/styles/primeflex.css"
    );
    Window.showInformationMessage(`Restarted colors, path: ${customTheme}`);
  }

  updateWorkspace(workspace: WorkspaceFolder) {
    this.currentWorkspace = workspace;
    this.workspaceConfig = getRelativeConfiguration(CONFIG);
    this.colorManager?.syncDecorations();
  }

  getWorkspaceConfig(): WorkspaceConfiguration {
    return this.workspaceConfig!;
  }

  getCurrentWorkspace(): WorkspaceFolder {
    return this.currentWorkspace!;
  }

  getColorDecorations(): Record<string, TextEditorDecorationType> {
    return this.colorDecorations;
  }

  setColorDecorations(decorations: Record<string, TextEditorDecorationType>) {
    this.colorDecorations = decorations;
  }

  getWorkspaceColors(): Record<string, string> {
    return this.workspaceColors;
  }

  setWorkspaceColors(colors: Record<string, string>) {
    this.workspaceColors = colors;
  }

  addDisposable(disposable: Disposable) {
    this.disposables.push(disposable);
  }
}

import process from "process";
import {
  Executable,
  ExtensionContext,
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  workspace,
} from "coc.nvim";

import registerCommand from "./commands";
import { extensionName, lspName } from "./constants";

let languageClient: LanguageClient;

export function activate(context: ExtensionContext) {
  const config = workspace.getConfiguration(extensionName);

  if (!config.get("enabled", true)) {
    return;
  }

  const cl: Executable = {
    command: config.get("serverPath", "cl-lsp"),
    args: config.get("serverArguments", []),
  };

  const toolchain = config.get("toolchainPath", "");
  if (toolchain) {
    cl.options = { env: { ...process.env, CL_LSP_TOOLCHAIN_PATH: toolchain } };
  }

  const serverOptions: ServerOptions = cl;

  const clientOptions: LanguageClientOptions = {
    documentSelector: ["lisp"],
  };

  languageClient = new LanguageClient(
    lspName,
    "Common Lisp Language Server",
    serverOptions,
    clientOptions
  );

  context.subscriptions.push(
    languageClient.start(),
    registerCommand("interrupt", () => {
      languageClient.sendNotification("cl/interrupt", {});
    })
  );
}

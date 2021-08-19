import {
  workspace,
  ExtensionContext,
  commands,
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  Executable,
} from 'coc.nvim'

let languageClient: LanguageClient

function activate(context: ExtensionContext) {
  const config = workspace.getConfiguration('cl-lsp')

  if (!config.get<boolean>('enable', true)) {
    return
  }

  const cl: Executable = {
    command: config.get<string>('serverPath', 'cl-lsp'),
    args: config.get<string[]>('serverArguments', []),
  }

  const toolchain = config.get<string>('toolchainPath', '')
  if (toolchain) {
    cl.options = { env: { ...process.env, CL_LSP_TOOLCHAIN_PATH: toolchain } }
  }

  const serverOptions: ServerOptions = cl

  const clientOptions: LanguageClientOptions = {
    documentSelector: ['lisp'],
  }

  languageClient = new LanguageClient('cl-lsp', 'Common Lisp Language Server', serverOptions, clientOptions)

  context.subscriptions.push(languageClient.start())

  context.subscriptions.push(
    commands.registerCommand('lisp.interrupt', () => languageClient.sendNotification('lisp/interrupt', {}))
  )
}

export default activate

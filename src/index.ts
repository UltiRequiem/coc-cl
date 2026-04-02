import process from 'node:process';
import {
	type Executable,
	type ExtensionContext,
	LanguageClient,
	type LanguageClientOptions,
	type ServerOptions,
	workspace,
} from 'coc.nvim';
import registerCommand from './commands.js';
import {extensionName, lspName} from './constants.js';

let languageClient: LanguageClient;

export function activate(context: ExtensionContext) {
	const config = workspace.getConfiguration(extensionName);

	if (!config.get('enabled', true)) {
		return;
	}

	const cl: Executable = {
		command: config.get('serverPath', 'cl-lsp'),
		args: config.get('serverArguments', []),
	};

	const toolchain = config.get('toolchainPath', '');
	if (toolchain) {
		cl.options = {env: {...process.env, CL_LSP_TOOLCHAIN_PATH: toolchain}};
	}

	const serverOptions: ServerOptions = cl;

	const clientOptions: LanguageClientOptions = {
		documentSelector: ['lisp'],
	};

	languageClient = new LanguageClient(
		lspName,
		'Common Lisp Language Server',
		serverOptions,
		clientOptions,
	);

	void languageClient.start();

	context.subscriptions.push(
		registerCommand('interrupt', () => {
			void languageClient.sendNotification('cl/interrupt', {});
		}),
	);
}

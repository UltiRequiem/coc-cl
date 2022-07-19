import process from 'node:process';
import {
	commands,
	Executable,
	ExtensionContext,
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	workspace,
} from 'coc.nvim';

import {extensionName, lspName} from './constants';

let languageClient: LanguageClient;

export function activate(context: ExtensionContext) {
	const config = workspace.getConfiguration(extensionName);

	if (!config.get('enable', true)) {
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

	context.subscriptions.push(
		languageClient.start(),
		commands.registerCommand('lisp.interrupt', () => {
			languageClient.sendNotification('lisp/interrupt', {});
		}),
	);
}

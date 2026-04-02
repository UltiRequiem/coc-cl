import {commands, type Disposable} from 'coc.nvim';

function registerCommand(command: string, implementation: (...arguments_: any[]) => void): Disposable {
	return commands.registerCommand(`cl.${command}`, implementation);
}

export default registerCommand;

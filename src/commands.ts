import { commands } from "coc.nvim";

function registerCommand(command: string, impl: (...args: any[]) => void) {
  commands.registerCommand(`cl.${command}`, impl);
}

export default registerCommand;

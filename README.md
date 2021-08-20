# Coc Common Lisp

[Coc.nvim](https://github.com/neoclide/coc.nvim) wrapper for the [Common Lisp LSP](https://github.com/cxxxr/cl-lsp).

## Configuration

If your `coc-settings`:

```json
  "lisp.enabled": true,
  "lisp.serverPath": "cl-lsp",
  "lisp.serverArguments": [],
  "lisp.toolchain": "",
  "lisp.maxNumberOfProblems": 100,
  "lisp.trace.server": "",
```

## Install

In you Neovim run:

`:CocInstall coc-l`

Or using Packer:

```lua
use {'UltiRequiem/coc-cl', run='yarn install --frozen-lockfile && yarn build'}
```

## License

coc-cl is licensed under the [MIT License](./LICENSE)

---

> This extension is built with [create-coc-extension](https://github.com/fannheyward/create-coc-extension)

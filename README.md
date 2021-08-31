# Coc Common Lisp

[Coc.nvim](https://github.com/neoclide/coc.nvim) wrapper for the [Common Lisp LSP](https://github.com/cxxxr/cl-lsp).

## Configuration

In your `coc-settings`:

```json
  "lisp.enabled": true,
  "lisp.serverPath": "cl-lsp",
  "lisp.serverArguments": [],
  "lisp.toolchain": "",
  "lisp.maxNumberOfProblems": 100,
  "lisp.trace.server": "",
```

## Install

In Neovim run:

`:CocInstall coc-cl`

Or using Packer:

```lua
use {'UltiRequiem/coc-cl', run='yarn install --frozen-lockfile && yarn build'}
```

## License

coc-cl is licensed under the [MIT License](./LICENSE)

---

> This extension is built with [create-coc-extension](https://github.com/fannheyward/create-coc-extension)

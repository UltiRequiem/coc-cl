# Coc Common Lisp

[Coc.nvim](https://github.com/neoclide/coc.nvim) extension for the
[Common Lisp LSP](https://github.com/cxxxr/cl-lsp).

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

In you Neovim run 🚀

```
:CocInstall coc-cl
```

Using an external plugin manager 👇

> ⚠ This is not recommended by the coc.nvim team

Packer example 📦

```lua
use {'UltiRequiem/coc-cl', run='yarn install --frozen-lockfile && yarn build'}
```

## Licence

Licensed under the MIT License 📄

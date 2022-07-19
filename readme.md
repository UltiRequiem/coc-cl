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

## Support

Open an Issue, I will check it a soon as possible 👀

If you want to hurry me up a bit
[send me a tweet](https://twitter.com/UltiRequiem) 😆

Consider [supporting me on Patreon](https://patreon.com/UltiRequiem) if you like
my work 🙏

Don't forget to star the repo ⭐

## Licence

Licensed under the MIT License 📄

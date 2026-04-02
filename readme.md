# coc-cl

[![CI](https://github.com/UltiRequiem/coc-cl/actions/workflows/ci.yaml/badge.svg)](https://github.com/UltiRequiem/coc-cl/actions/workflows/ci.yaml)
[![npm version](https://img.shields.io/npm/v/coc-cl.svg)](https://www.npmjs.com/package/coc-cl)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](license)

[coc.nvim](https://github.com/neoclide/coc.nvim) extension for Common Lisp, powered by [cl-lsp](https://github.com/cxxxr/cl-lsp). Provides LSP features (completions, diagnostics, go-to-definition, hover) plus snippets for Common Lisp buffers.

## Prerequisites

Install [cl-lsp](https://github.com/cxxxr/cl-lsp) and ensure it is on your `PATH`, or set `cl.serverPath` to its absolute location.

## Install

Inside Neovim:

```
:CocInstall coc-cl
```

Using [packer.nvim](https://github.com/wbthomason/packer.nvim):

```lua
use { "UltiRequiem/coc-cl", run = "npm ci && npm run build" }
```

Using [lazy.nvim](https://github.com/folke/lazy.nvim):

```lua
{
  "UltiRequiem/coc-cl",
  build = "npm ci && npm run build",
}
```

## Configuration

Add any of these to your `coc-settings.json` (`:CocConfig`):

| Key | Type | Default | Description |
|---|---|---|---|
| `cl.enabled` | boolean | `true` | Enable/disable the extension |
| `cl.serverPath` | string | `"cl-lsp"` | Path to the cl-lsp binary |
| `cl.serverArguments` | string[] | `[]` | Extra arguments passed to cl-lsp |
| `cl.toolchainPath` | string | `""` | Optional path to the Lisp toolchain |
| `cl.maxNumberOfProblems` | number | `100` | Max diagnostics shown |
| `cl.trace.server` | `"off"` \| `"messages"` \| `"verbose"` | `"off"` | LSP protocol tracing |

Example:

```json
{
  "cl.serverPath": "/usr/local/bin/cl-lsp",
  "cl.trace.server": "verbose"
}
```

## Commands

| Command | Description |
|---|---|
| `cl.interrupt` | Send an interrupt signal to the running cl-lsp process |

## Development

```sh
git clone https://github.com/UltiRequiem/coc-cl
cd coc-cl
npm ci
npm run build   # outputs lib/index.js
npm run watch   # rebuild on file changes
npm run lint    # run xo linter
```

## License

MIT — see [license](license).

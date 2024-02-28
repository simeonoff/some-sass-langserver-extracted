# vscode-langservers-extracted

The Some Sass Language Server extracted from [Some Sass for Visual Studio Code](https://github.com/wkillerud/vscode-scss).


# Why?

- The language server provided by Some Sass adds extra capabilites when working with Sass files and modules.

# Usage

You can install this via `npm i -g some-sass-language-server`.

After that, you can execute the language server:

- `some-sass-language-server`

# Build

### Commands

```bash
npm ci
npm update
```

After that you can use the binary:

### Usage
```bash
cd bin/
./some-sass-language-server --stdio
```

# LICENSE

This package licensed under the MIT.

See the [LICENSE](./LICENSE)

# THIRD-PARTY LICENSE

- https://github.com/wkillerud/vscode-scss

# @martylouis/eslint-config

[ESLint](https://eslint.org) and [Prettier](https://prettier.io) config.

## Installation

To use this config, install this package as a development dependency of your project.

```sh
npm i -D @martylouis/eslint-config
```

Next add this to your `.eslintrc`

```json
{
  "extends": "@martylouis/eslint-config"
}
```

## ESLint With VS Code and Prettier

Edit your VS Code `settings.json`:

```json
{
  "editor.formatOnSave": true,
  "[javascript]": {
    "editorformatOnSave": false
  },
  "eslint.autoFixOnSave": true,
  // If you have prettier extenstion installed on VS Code
  "prettier.disableLanguages": ["javascript"]
}
```

------
Credit to [Wes Bos]([https://](https://github.com/wesbos/eslint-config-wesbos)) and [10up](https://github.com/10up/eslint-config) for their eslint configs.
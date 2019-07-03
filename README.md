# @martylouis/eslint-config

[ESLint](https://eslint.org) and [Prettier](https://prettier.io) config.

## Installation

To use this config, install this package and it’s peer dependencies to your project. 

#### Install with [`npx`](https://github.com/zkat/npx#readme):

```sh
npx install-peerdeps --dev @martylouis/eslint-config
```

#### Install with [`yarn`](https://yarnpkg.com/)

```sh
yarn add -D @martylouis/eslint-config \
babel-eslint \
eslint \
eslint-config-prettier \
eslint-config-standard \
eslint-plugin-html \
eslint-plugin-import \
eslint-plugin-node \
eslint-plugin-prettier \
eslint-plugin-promise \
eslint-plugin-standard \
prettier
```

#### Install with [`install-peerdeps`](https://github.com/nathanhleung/install-peerdeps#readme):

```sh
install-peerdeps @martylouis/estling-config -d
```
Add the `-Y` flag to automatically install with [Yarn](https://yarnpkg.com/).

## Extend this config

Add to your `package.json`:
```json
{
  "eslintConfig": {
    "extends": "@martylouis/eslint-config"
  },
}
```

OR add to your add `.eslintrc`

```json
{
  "extends": "@martylouis/eslint-config"
}
```

## ESLint With VS Code

We want eslint to format our JS on save, edit your VS Code `settings.json`

```json
{
  "editor.formatOnSave": true,
  "[javascript]": {
    "editorformatOnSave": false
  },
  "eslint.autoFixOnSave": true,
}
```

### With the Prettier extension

If you have the prettier extension enabled for other languages like CSS and HTML, turn it off for JS since we are doing it through Eslint already

```json
{
  "prettier.disableLanguages": ["javascript"]
}
```

------
Credit to [Wes Bos](https://github.com/wesbos/eslint-config-wesbos) and [10up](https://github.com/10up/eslint-config) for their eslint configs.
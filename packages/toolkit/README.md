# `@functionary/toolkit`

Tooling set for functionary applications

## Usage

Install as a dependency

```bash
# if you use yarn
yarn add -D @functionary/toolkit
# or if you use npm
npm i --save-dev @functionary/toolkit
```

### CLI

A binary executable can be invoked as an npm script: `functionary-toolkit`.

#### create-dotenv-file

Create a local `.env` file based on an example file

`functionary-toolkit create-dotenv-file --example .env.example`

### Exports

This package also provides some centralised default configurations for e.g. webpack and babel.

```js
// webpack.config.babel.js
import { getWebpack4Configuration } from '@functionary/toolkit';

export default getWebpack4Configuration(
  'production', // or 'development'
  {
    buildFolder: path.resolve(__dirname, 'build'), // generated build folder
    htmlTemplate: path.resolve(__dirname, 'public/index.html'), // entry point for HtmlWebpackPlugin
  },
  {
    // any custom configuration that will be merged using webpack-merge
  },
);
```

# dectalk-tts

[![API Status](https://img.shields.io/github/actions/workflow/status/JstnMcBrd/dectalk-tts/api-status.yml?logo=github&label=API%20Status)](https://github.com/JstnMcBrd/dectalk-tts/actions/workflows/api-status.yml)
[![CI](https://img.shields.io/github/actions/workflow/status/JstnMcBrd/dectalk-tts/ci.yml?logo=github&label=CI)](https://github.com/JstnMcBrd/dectalk-tts/actions/workflows/ci.yml)
<br />
[![NPM Version](https://img.shields.io/npm/v/dectalk-tts)](https://www.npmjs.com/package/dectalk-tts)
[![NPM License](https://img.shields.io/npm/l/dectalk-tts)](./LICENSE)
![NPM Type Definitions](https://img.shields.io/npm/types/dectalk-tts)
![NPM Downloads](https://img.shields.io/npm/dt/dectalk-tts)
<br />
![Node version](https://img.shields.io/node/v/dectalk-tts)

## About

**dectalk-tts** is a simple package to interact with the **aeiou** Dectalk web API. It is developed in [TypeScript](https://www.typescriptlang.org/) and transpiles to JavaScript (ESM).

[Dectalk](https://github.com/dectalk/dectalk) is a text-to-speech engine originally created in the 1980s. Today, it is best known for [viral videos](https://www.youtube.com/watch?v=Hv6RbEOlqRo) of the game [Moonbase Alpha](https://store.steampowered.com/app/39000/Moonbase_Alpha/).

[aeiou](https://github.com/calzoneman/aeiou) is a third-party web API that makes interacting with Dectalk much easier.

> <img alt="Warning" src="https://raw.githubusercontent.com/Mqxx/GitHub-Markdown/main/blockquotes/badge/dark-theme/warning.svg">
>
> This package sends all input to a third-party API, which could be a possible privacy concern!
> By using this package, you acknowledge and agree to not hold the author of this package liable for how the third party uses your data.
>
> Please read the [usage guidelines](https://github.com/calzoneman/aeiou/blob/master/docs/usage-guidelines.md) of the API.

## Prerequesites

This package has no production dependencies, and works with Node (`>=18`) or the browser.

## Installation

`npm install dectalk-tts`

## Usage

If the API returns a non-200 response, an error will be thrown.
None of the examples below include error handling, but don't forget it!

### ES Modules

```js
import dectalk from 'dectalk-tts';
import { Buffer } from 'node:buffer';
import { writeFileSync } from 'node:fs';

const output = await dectalk('aeiou');
writeFileSync('output.wav', Buffer.from(output));
```

### CommonJS

```js
const dectalk = require('dectalk-tts');
const { Buffer } = require('node:buffer');
const { writeFileSync } = require('node:fs');

(async () => {
	const output = await dectalk('John Madden');
	writeFileSync('output.wav', Buffer.from(output));
})();

// or

dectalk('uuuuuuuuuu').then((output) => writeFileSync('output.wav', Buffer.from(output)));
```

### Options

Please see Chapter 2 of the [Dectalk guide PDF](docs/dtk_reference_guide.pdf) for details on how to customize your requests. You can choose different voices, have Dectalk sing, and more!

None of these options are hard-coded into this package, so you must format the request string yourself.

(The Dectalk guide PDF was copied from the Dectalk 4.61 release download, which can be found [here](https://web.archive.org/web/20240226085720/https://theflameofhope.co/dectalkreader1/).)

## Development

When a merge request is created, the changes must pass linting, building, and unit tests. These checks are run automatically by GitHub. You can run them manually using `npm run lint`, `npm run build`, and `npm test`.

GitHub will also periodically run a test to confirm the API is still working. You can run this test manually with `npm run test-api`.

When a new [Release](https://github.com/JstnMcBrd/dectalk-tts/releases) is created, GitHub will automatically deploy the new version to the [npm registry](https://npmjs.com/package/dectalk-tts).

This project abides by [Semantic Versioning](https://semver.org/) and [Keep A Changelog](https://keepachangelog.com/). To see a list of changes for each update, check the description of [releases on GitHub](https://github.com/JstnMcBrd/dectalk-tts/releases).

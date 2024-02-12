# dectalk-tts

[![API status](https://github.com/JstnMcBrd/dectalk-tts/actions/workflows/api.yml/badge.svg)](https://github.com/JstnMcBrd/dectalk-tts/actions/workflows/api.yml)
[![npm package](https://badge.fury.io/js/dectalk-tts.svg)](https://badge.fury.io/js/dectalk-tts)

## About

**dectalk-tts** is a simple [Node](https://nodejs.org/) package to interact with the **aeiou** Dectalk web API. It is developed in [TypeScript](https://www.typescriptlang.org/) and transpiles to JavaScript (ESM).

[Dectalk](https://github.com/dectalk/dectalk) is a text-to-speech engine originally created in the 1980s. Today, it is best known for [viral videos](https://www.youtube.com/watch?v=Hv6RbEOlqRo) of the game [Moonbase Alpha](https://store.steampowered.com/app/39000/Moonbase_Alpha/).

[aeiou](https://github.com/calzoneman/aeiou) is a third-party web API that makes interacting with Dectalk much easier.

## Prerequesites

This package has no production dependencies!

However, it does require Node 18 or higher. Use `node --version` to check your node version.

## Installation

`npm install dectalk-tts`

## Usage

If the API returns a non-200 response, an error will be thrown.
None of the examples below include error handling, but don't forget it!

### ES Modules

```js
import dectalk from 'dectalk-tts';
import { writeFileSync } from 'node:fs';

const output = await dectalk('aeiou');
writeFileSync('output.wav', output);
```

### CommonJS

```js
const dectalk = require('dectalk-tts');
const { writeFileSync } = require('node:fs');

(async () => {
	const output = await dectalk('John Madden');
	writeFileSync('output.wav', output);
})();

// or

dectalk('uuuuuuuuuu').then((output) => writeFileSync('output.wav', output));
```

## Development

When a merge request is created, the changes must pass linting, building, and unit tests. These checks are run automatically by GitHub. You can run them manually using `npm run lint`, `npm run build`, and `npm test`.

GitHub will also periodically run a test to confirm the API is still working. You can run this test manually with `npm run test-api`.

When a new [Release](https://github.com/JstnMcBrd/dectalk-tts/releases) is created, GitHub will automatically deploy the new version to the [npm registry](https://npmjs.com/package/dectalk-tts).

This project abides by [Semantic Versioning](https://semver.org/) and [Keep A Changelog](https://keepachangelog.com/). To see a list of changes for each update, check the description of [releases on GitHub](https://github.com/JstnMcBrd/dectalk-tts/releases).

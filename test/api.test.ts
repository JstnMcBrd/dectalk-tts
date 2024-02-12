import { readFileSync } from 'node:fs';
import { basename } from 'node:path';

import { describe, expect, it } from 'vitest';

import dectalk from '../src/index.js';

describe(basename(import.meta.url), () => {
	it('should succeed', async () => {
		const actual = await dectalk('test');
		const expected = readFileSync('./test/test.wav');
		expect(actual).toEqual(expected);
	});
});

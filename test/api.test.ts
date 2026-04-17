import { Buffer } from 'node:buffer';
import { readFile } from 'node:fs/promises';

import { describe, expect, test } from 'vitest';

import dectalk from '../src/index.js';

describe('api', () => {
	test('should succeed', async () => {
		const actual = Buffer.from(
			await dectalk('test'),
		);
		const expected = await readFile('./test/test.wav');
		expect(actual).toEqual(expected);
	});
});

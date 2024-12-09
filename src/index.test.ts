import { basename } from 'node:path';

import { afterAll, describe, expect, it, vi } from 'vitest';

import dectalk from './index.js';

describe(basename(import.meta.url), () => {
	const fetchMock = vi.fn<typeof fetch>();
	vi.stubGlobal('fetch', fetchMock);

	const goodResponseBuffer = new ArrayBuffer(0);
	const goodResponse = {
		ok: true,
		arrayBuffer: () => Promise.resolve(goodResponseBuffer),
	} as Response;

	const badResponse = {
		ok: false,
		status: 404,
		statusText: 'Not Found',
	} as Response;

	afterAll(() => {
		vi.restoreAllMocks();
	});

	it('should throw an error if given an empty or whitespace-only prompt', async () => {
		await expect(dectalk('')).rejects.toThrowError();
		await expect(dectalk(' ')).rejects.toThrowError();
		await expect(dectalk('\t')).rejects.toThrowError();
		await expect(dectalk('\n')).rejects.toThrowError();
	});

	it('should return the buffer if it receives a good response', async () => {
		fetchMock.mockResolvedValue(goodResponse);
		const output = await dectalk('test');
		expect(output).toEqual(goodResponseBuffer);
	});

	it('should throw an error if it receives a bad response', async () => {
		fetchMock.mockResolvedValue(badResponse);
		await expect(dectalk('test')).rejects.toThrowError();
	});
});

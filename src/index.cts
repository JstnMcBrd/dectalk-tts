import type { Buffer } from 'node:buffer';

/**
 * @param text The text to send to the aeiou Dectalk API
 * @returns A buffer containing wav-encoded binary output
 * @throws If `text` is empty or only whitespace
 * @throws If the API returns a non-200 response
 */
export = async function dectalk(input: string): Promise<Buffer> {
	const dectalkESM = (await import('./index.js')).default;
	return await dectalkESM(input);
};

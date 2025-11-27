/**
 * @param text The text to send to the aeiou Dectalk API
 * @returns An array buffer containing wav-encoded binary output
 * @throws If `text` is empty or only whitespace
 * @throws If the API returns a non-200 response
 */
export = async function dectalk(input: string): Promise<ArrayBuffer> {
	const dectalkEsm = (await import('./index.js')).default;
	return await dectalkEsm(input);
};

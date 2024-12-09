/**
 * @param text The text to send to the aeiou Dectalk API
 * @returns An array buffer containing wav-encoded binary output
 * @throws If `text` is empty or only whitespace
 * @throws If the API returns a non-200 response
 */
export default async function dectalk(text: string): Promise<ArrayBuffer> {
	// The API does not like empty prompts
	text = text.trim();
	if (text.length === 0) {
		throw new TypeError('Text cannot be empty or only whitespace');
	}

	// Format request URL
	const url = new URL('https://tts.cyzon.us/tts');
	url.searchParams.append('text', text);

	// Send request
	const response = await fetch(url);

	// TODO look into custom behavior for aeiou's error codes
	// https://github.com/calzoneman/aeiou/blob/master/docs/usage-guidelines.md
	if (!response.ok) {
		throw new Error(`${response.status} ${response.statusText}`, { cause: response });
	}

	// Parse and return response
	return await response.arrayBuffer();
}

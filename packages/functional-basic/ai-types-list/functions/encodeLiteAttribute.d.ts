// md5:e2377d32b546dc73b1d8c05e81701ac4 true
/**
 * Encodes basic HTML special characters (<, >, &) while preserving quotes.
 * @keywords html, encode, escape, sanitize, lite attribute
 * @example
 * encodeLiteAttribute('Tom & Jerry') // => 'Tom &amp; Jerry'
 * encodeLiteAttribute('<title> "Hello" </title>') // => '&lt;title&gt; "Hello" &lt;/title&gt;'
 * encodeLiteAttribute(undefined) // => ''
 * @remarks
 * Does not encode quotes (" and '). For untrusted attribute values, use `encodeAttribute` to prevent injection vulnerabilities.
 */
export declare function encodeLiteAttribute(text?: unknown): string;
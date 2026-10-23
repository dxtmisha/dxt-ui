// md5:b09bd431d36e0616f12db8098e205380 true
/**
 * Converts a Uint8Array to a base64 encoded string across Node.js, modern ECMAScript, and browsers.
 * @keywords uint8array, base64, encode, binary, buffer, btoa
 * @example
 * uint8ArrayToBase64(new Uint8Array([72, 101, 108, 108, 111])) // "SGVsbG8="
 */
export declare function uint8ArrayToBase64(bytes?: Uint8Array | null): string;
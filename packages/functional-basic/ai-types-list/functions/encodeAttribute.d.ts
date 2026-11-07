// md5:ad4f2518e4177bec48f0555c0342cea8 true
/**
 * Encodes special characters in a string for safe use in HTML attributes.
 * @keywords html attribute escape encode sanitize
 * @example
 * encodeAttribute('<div class="box">') // => '&lt;div class=&quot;box&quot;&gt;'
 * encodeAttribute(undefined) // => ''
 */
export declare function encodeAttribute(text?: unknown): string;
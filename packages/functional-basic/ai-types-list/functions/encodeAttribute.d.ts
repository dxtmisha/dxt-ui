// md5:e0426c0519c7f16347679aa718709287 true
/**
 * Encodes special characters for safe use in HTML attributes.
 * @keywords html, attribute, encode, escape, sanitize
 * @example
 * 
 * encodeAttribute('<div class="box">') // => '&lt;div class=&quot;box&quot;&gt;'
 * encodeAttribute(undefined) // => ''
 * 
 */
export declare function encodeAttribute(text?: string | number | null): string;
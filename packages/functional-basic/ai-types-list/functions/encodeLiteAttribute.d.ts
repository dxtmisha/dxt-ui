// md5:0feb7fba9ded3bb4c94e7769c66c9792 true
/**
 * Encodes basic HTML characters (<, >, &) while preserving quotes.
 * @remarks Does NOT encode quotes; use `encodeAttribute` for untrusted attribute values.
 * @keywords html, encode, escape, lite attribute, sanitize
 */
export declare function encodeLiteAttribute(text: string): string;
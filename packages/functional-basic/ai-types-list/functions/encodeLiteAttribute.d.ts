// md5:b086fb53dd67d318c40dd69e550456b7 true
/**
 * Encodes basic HTML special characters (<, >, &) while preserving quotes.
 * @keywords html encode, escape html, lite attribute, html entities, title encode
 * @example
 * encodeLiteAttribute('Tom & Jerry') // => 'Tom &amp; Jerry'
 * encodeLiteAttribute('<title> "Hello" </title>') // => '&lt;title&gt; "Hello" &lt;/title&gt;'
 * encodeLiteAttribute(undefined) // => ''
 * @remarks Does NOT encode quotes (" and '). For untrusted input inside HTML attributes, use `encodeAttribute`.
 */
export declare function encodeLiteAttribute(text?: string | number | null): string;
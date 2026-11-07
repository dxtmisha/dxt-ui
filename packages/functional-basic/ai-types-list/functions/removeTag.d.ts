// md5:0b3aacf353f89c556d38743dd233dcd0 true
export interface RemoveTagOptions {
    tag?: string | string[];
    replacement?: string;
    removeContent?: boolean | string | string[];
}
/**
 * Removes all HTML/XML tags or specified tags from a string.
 * @remarks
 * When `removeContent` is true (or a list of tags is provided),
 * executable and styling tags (`<script>`, `<style>`, `<noscript>`) or specified content tags
 * are silently removed along with their inner content without applying `replacement`.
 * Other formatting and layout tags preserve their text content, and their tag syntax
 * is replaced with `replacement`.
 * @example
 * removeTag('<p>Hello <b>world</b>!</p>') // => 'Hello world!'
 * removeTag('<b>Hello</b> <p>world</p>', { tag: 'b' }) // => 'Hello <p>world</p>'
 * removeTag('<b>Hello</b> <p>world</p>', { tag: ['b', 'p'] }) // => 'Hello world'
 * removeTag('<p>Hello</p><p>world</p>', { replacement: ' ' }) // => ' Hello  world '
 * removeTag('<p>Hello</p><script>alert(1)</script>') // => 'Hello'
 * removeTag('<p>Hello</p><script>alert(1)</script>', { removeContent: false }) // => 'Helloalert(1)'
 * removeTag('<div>Text</div><script>alert(1)</script>', { tag: 'script', removeContent: false }) // => '<div>Text</div>alert(1)'
 * @keywords html, xml, strip tags, sanitize, remove tag, strip html
 */
export declare function removeTag(value?: unknown, options?: RemoveTagOptions): string;
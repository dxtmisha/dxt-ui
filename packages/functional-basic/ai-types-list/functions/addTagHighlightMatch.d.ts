// md5:269e8d50235683217cc26334dd61a018 true
export interface AddTagHighlightMatchOptions {
    className?: string;
    shouldEscape?: boolean;
    shouldRemoveTag?: boolean;
}
/**
 * Wraps matched search substrings in an HTML tag for highlighting.
 * @remarks Enable shouldEscape when rendering untrusted text as HTML.
 * @keywords highlight, match, search, mark, html tag, text formatting
 */
export declare function addTagHighlightMatch(value?: unknown, search?: unknown, options?: AddTagHighlightMatchOptions): string;
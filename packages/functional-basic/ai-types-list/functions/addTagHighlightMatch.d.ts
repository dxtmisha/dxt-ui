// md5:34a88c041bc9c1b3e4dad04168047bf5 true
export interface AddTagHighlightMatchOptions {
    className?: string;
    shouldEscape?: boolean;
    shouldRemoveTag?: boolean;
}
/** Wraps matched substrings in an HTML tag for visual search highlighting. @keywords highlight, search, match, tag, mark, html */
export declare function addTagHighlightMatch(value?: string | number | null, search?: string | RegExp, options?: AddTagHighlightMatchOptions): string;
// md5:f91cd02deacebbc41130703a6732d137 true
/** Checks if an element is an input, textarea, select, or editable content (excludes disabled/readOnly by default). @keywords input, textarea, select, editable, form element */
export declare function isInput(element?: unknown, includeDisabled?: boolean): element is HTMLElement;
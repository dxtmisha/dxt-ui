// md5:3571743bb489a4bfdaee9a00503d2165 true
import { ShallowRef } from 'vue';
export declare class TextInclude {
    /** Get request-isolated TextIncludeInstance. @keywords getObject, instance, textIncludeInstance */
    static getObject(): TextIncludeInstance;
    /** Global list of texts for all components. @keywords list, shallowRef, texts */
    static get list(): ShallowRef<TextList>;
    /** Initialize global texts. @keywords initText, texts, global */
    static initText(texts: TextList): void;
    readonly texts: Record<string, () => (string | undefined)>;
    /** Create TextInclude instance. @keywords constructor, textInclude, props */
    constructor(props: TextAllPropsInclude);
    /** Breadcrumb navigation text. @keywords breadcrumb, text */
    get breadcrumb(): string | undefined;
    /** Cancel text. @keywords cancel, text */
    get cancel(): string | undefined;
    /** Character limit exceeded text. @keywords characterLimit, limit, text */
    get characterLimit(): string | undefined;
    /** Remaining characters text. @keywords characterRemaining, remaining, text */
    get characterRemaining(): string | undefined;
    /** Close text. @keywords close, text */
    get close(): string | undefined;
    /** Copied to clipboard text. @keywords copiedClipboard, clipboard, text */
    get copiedClipboard(): string | undefined;
    /** Decrement value text. @keywords decrement, decrease, text */
    get decrement(): string | undefined;
    /** Entries match text. @keywords entriesMatch, match, text */
    get entriesMatch(): string | undefined;
    /** First page text. @keywords first, page, text */
    get first(): string | undefined;
    /** Hide text. @keywords hide, text */
    get hide(): string | undefined;
    /** Increment value text. @keywords increment, increase, text */
    get increment(): string | undefined;
    /** Range info text. @keywords info, range, text */
    get info(): string | undefined;
    /** Last page text. @keywords last, page, text */
    get last(): string | undefined;
    /** Loading text. @keywords loading, text */
    get loading(): string | undefined;
    /** More text. @keywords more, text */
    get more(): string | undefined;
    /** More previous text. @keywords morePrev, previous, text */
    get morePrev(): string | undefined;
    /** Next text. @keywords next, text */
    get next(): string | undefined;
    /** Nothing found text. @keywords notFound, empty, text */
    get notFound(): string | undefined;
    /** Notifications text. @keywords notifications, text */
    get notifications(): string | undefined;
    /** OK confirmation text. @keywords ok, confirm, text */
    get ok(): string | undefined;
    /** Page text. @keywords page, text */
    get page(): string | undefined;
    /** Previous text. @keywords previous, text */
    get previous(): string | undefined;
    /** Rows per page text. @keywords rowsPerPage, pagination, text */
    get rowsPerPage(): string | undefined;
    /** Show text. @keywords show, text */
    get show(): string | undefined;
    /** Symbol text. @keywords symbol, text */
    get symbol(): string | undefined;
    /** Get text by name. @keywords get, text, name */
    get(name: keyof TextAllPropsInclude): string | undefined;
}
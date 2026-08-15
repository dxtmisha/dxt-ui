// md5:fac3439e55b407b4fd458b83ae69810a true
import { ShallowRef } from 'vue';
/** Manages text-related properties and localized UI strings. @keywords text, localization, strings */
export declare class TextInclude {
    /** Returns a request-isolated instance of TextIncludeInstance. @keywords instance, isolated */
    static getObject(): TextIncludeInstance;
    /** Global list of texts for all components. @keywords list, global, texts */
    static get list(): ShallowRef<TextList>;
    /** Initialize global texts. @keywords init, global, texts */
    static initText(texts: TextList): void;
    readonly texts: Record<string, () => (string | undefined)>;
    /** Creates an instance of TextInclude. @keywords constructor, text */
    constructor(props: TextAllPropsInclude);
    /** Breadcrumb navigation text. @keywords breadcrumb, navigation */
    get breadcrumb(): string | undefined;
    /** Cancel text. @keywords cancel, button */
    get cancel(): string | undefined;
    /** Character limit exceeded text. @keywords character, limit, error */
    get characterLimit(): string | undefined;
    /** Remaining characters text. @keywords character, remaining, count */
    get characterRemaining(): string | undefined;
    /** Close text. @keywords close, button */
    get close(): string | undefined;
    /** Copied to the clipboard text. @keywords copied, clipboard */
    get copiedClipboard(): string | undefined;
    /** Text for decreasing value. @keywords decrement, decrease */
    get decrement(): string | undefined;
    /** Dropzone default text. @keywords dropzone, upload */
    get dropzone(): string | undefined;
    /** Entries match text. @keywords entries, match */
    get entriesMatch(): string | undefined;
    /** First page text. @keywords first, page, pagination */
    get first(): string | undefined;
    /** Hide text. @keywords hide, toggle */
    get hide(): string | undefined;
    /** Text for increasing value. @keywords increment, increase */
    get increment(): string | undefined;
    /** Info text. @keywords info, range */
    get info(): string | undefined;
    /** Last page text. @keywords last, page, pagination */
    get last(): string | undefined;
    /** Loading text. @keywords loading, spinner */
    get loading(): string | undefined;
    /** More text. @keywords more, show */
    get more(): string | undefined;
    /** More previous text. @keywords more, previous */
    get morePrev(): string | undefined;
    /** Next text. @keywords next, pagination */
    get next(): string | undefined;
    /** Nothing found text. @keywords notFound, empty */
    get notFound(): string | undefined;
    /** Notifications text. @keywords notifications, alerts */
    get notifications(): string | undefined;
    /** OK text. @keywords ok, confirm */
    get ok(): string | undefined;
    /** Page text. @keywords page, pagination */
    get page(): string | undefined;
    /** Previous text. @keywords previous, pagination */
    get previous(): string | undefined;
    /** Rows per page text. @keywords rowsPerPage, table */
    get rowsPerPage(): string | undefined;
    /** Show text. @keywords show, toggle */
    get show(): string | undefined;
    /** Symbol text. @keywords symbol, character */
    get symbol(): string | undefined;
    /** Get the text by its name. @keywords get, text, name */
    get(name: keyof TextAllPropsInclude): string | undefined;
}
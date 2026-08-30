// md5:1fb57229f69b8cbb1bae14a67ca9581f true
export type ScrollbarPropsToken = {
    visible?: boolean;
    divider?: boolean;
    dividerTop?: boolean;
    dividerBottom?: boolean;
    dividerHide?: boolean;
    inverse?: boolean;
    standard?: boolean;
};
export type ScrollbarPropsBasic = ClientOnlyPropsInclude & {
    /** HTML tag for the scrollbar element. */
    tag?: string;
};
/** Scrollbar component properties. @keywords scrollbar, props */
export type ScrollbarProps = ScrollbarPropsBasic & ScrollbarPropsToken;
/** Default property values for Scrollbar. @keywords scrollbar, defaults */
export declare const defaultsScrollbar: {
    clientOnly: boolean;
    tag: string;
};
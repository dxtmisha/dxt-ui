// md5:036470c099de17ee2ceee231876d1233 true
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
    /** HTML element tag for the scrollbar @keywords tag element html */
    tag?: string;
};
/** Incoming properties for the scrollbar component @keywords scrollbar properties props */
export type ScrollbarProps = ScrollbarPropsBasic & ScrollbarPropsToken;
/** Default property values for the scrollbar component @keywords defaults default values scrollbar */
export declare const defaultsScrollbar: {
    clientOnly: boolean;
    tag: string;
};
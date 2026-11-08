// md5:1e6a1e37ad7d55800213954931649c4c true
export type ScrollbarPropsToken = {
    visible?: boolean;
    divider?: boolean;
    dividerTop?: boolean;
    dividerBottom?: boolean;
    dividerHide?: boolean;
    inverse?: boolean;
    standard?: boolean;
};

export type ScrollbarPropsBasic = {
    tag?: string;
};

export type ScrollbarProps = ScrollbarPropsBasic & ScrollbarPropsToken;

/** Default scrollbar property values. @keywords scrollbar, defaults */
export declare const defaultsScrollbar: {
    tag: string;
};
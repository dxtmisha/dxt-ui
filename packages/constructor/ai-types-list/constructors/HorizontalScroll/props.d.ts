// md5:9bc8656769a2dc8282dc4d7db50cac50 true
type HorizontalScrollPropsToken = {
    bleed?: boolean;
    align?: 'block' | 'center' | 'left' | 'right';
};
export type HorizontalScrollPropsBasic = {
    /** Whether the scroll area is flush with the edges @keywords bleed, edge, layout */
    bleed?: boolean;
    /** HTML tag for the scroll element @keywords tag, html, container */
    tag?: string;
};
/** Horizontal scroll properties combining basic and token settings @keywords horizontal, scroll, props */
export type HorizontalScrollProps = HorizontalScrollPropsBasic & HorizontalScrollPropsToken;
/** Default properties for horizontal scroll component @keywords horizontal, scroll, defaults */
export declare const defaultsHorizontalScroll: {
    bleed: boolean;
    align: string;
    tag: string;
};
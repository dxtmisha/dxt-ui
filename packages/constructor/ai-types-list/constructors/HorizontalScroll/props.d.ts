// md5:9bc8656769a2dc8282dc4d7db50cac50 true
type HorizontalScrollPropsToken = {
    bleed?: boolean;
    align?: 'block' | 'center' | 'left' | 'right';
};
export type HorizontalScrollPropsBasic = {
    /** Whether the scroll area is flush with the edges @keywords bleed scroll flush edge */
    bleed?: boolean;
    /** HTML tag for the scroll element @keywords tag element html */
    tag?: string;
};
export type HorizontalScrollProps = HorizontalScrollPropsBasic & HorizontalScrollPropsToken;
/** Default values for horizontal scroll properties @keywords default defaults horizontal scroll */
export declare const defaultsHorizontalScroll: {
    bleed: boolean;
    align: string;
    tag: string;
};
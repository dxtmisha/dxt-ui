// md5:1f8b43fef588a02a184c9f80b878fbf3 true
type CarouselPaginationPropsToken = {
    type?: 'bullets' | 'dots' | 'lines' | 'fraction' | 'progressbar';
    vertical?: boolean;
    dynamic?: boolean;
};
export type CarouselPaginationPropsBasic = ModelPropsSelected<number | string> & TextPaginationPropsInclude & ControlProps & {
    /** Current active slide. */
    selected?: number | string;
    /** Total item count. */
    count?: number | string;
    /** Number of visible bullets in dynamic mode. */
    visible?: number | string;
    /** Whether to hide pagination if only one slide exists. */
    hideIfOne?: boolean;
    /** HTML tag for the container. */
    tag?: string;
    /** Template for formatting fraction display (e.g. '[active] / [total]'). */
    template?: string;
};
/** Carousel pagination component properties. @keywords carousel, pagination, props */
export type CarouselPaginationProps = CarouselPaginationPropsBasic & CarouselPaginationPropsToken;
/** Default property values for carousel pagination. @keywords carousel, pagination, defaults */
export declare const defaultsCarouselPagination: {
    type: string;
    tag: string;
    count: number;
    visible: number;
    hideIfOne: boolean;
    template: string;
    control: boolean;
};
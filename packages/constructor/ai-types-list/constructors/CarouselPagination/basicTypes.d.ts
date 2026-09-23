// md5:7b452b9351a264335ef74d788b79ad9b true
import type { ConstrBind, ConstrClass, ConstrStyles, NumberOrString } from '@dxtmisha/functional';
/** Pagination bullet item state and attributes. @keywords carousel, pagination, bullet */
export type CarouselPaginationItem = {
    index: number;
    selected: boolean;
    scale?: number;
    style?: ConstrStyles;
    tabindex?: number;
    aria?: AriaList;
    binds?: CarouselPaginationItemBinds;
};
/** Element bindings for a pagination bullet button. @keywords carousel, pagination, button, binds */
export type CarouselPaginationItemBinds = AriaList & {
    'key'?: number | string;
    'type'?: string;
    'data-index'?: number;
    'class'?: ConstrClass;
    'style'?: ConstrStyles;
    'tabindex'?: NumberOrString;
    'onClick'?: (event: MouseEvent) => void;
};
export type CarouselPaginationFractionBinds = AriaList & {
    key?: string;
    class?: string;
};
export type CarouselPaginationProgressBinds = AriaList & {
    key?: string;
    class?: string;
};
export type CarouselPaginationComponentInclude = {
    carouselPagination?: object;
};
/** CarouselPagination attributes for parent component props. @keywords carousel, pagination, props */
export type CarouselPaginationPropsInclude<CarouselPagination extends CarouselPaginationPropsBasic = CarouselPaginationPropsBasic> = {
    carouselPaginationAttrs?: ConstrBind<CarouselPagination>;
};
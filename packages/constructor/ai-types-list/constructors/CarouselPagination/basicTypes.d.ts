// md5:7b204fd3e71c4c5c3085bfe769eca3c7 true
import type { ConstrBind, ConstrClass, ConstrStyles, NumberOrString } from '@dxtmisha/functional';

/** Describes an individual carousel pagination bullet item. @keywords carousel pagination bullet item */
export type CarouselPaginationItem = {
    /** 1-based item index. */
    index: number;
    /** Whether the item is active. */
    selected: boolean;
    /** Relative scale factor for dynamic bullets. */
    scale?: number;
    /** Item styles. */
    style?: ConstrStyles;
    /** Tab index. */
    tabindex?: number;
    /** ARIA attributes. */
    aria?: AriaList;
    /** Item button binds. */
    binds?: CarouselPaginationItemBinds;
};

/** Attributes and handlers bound to a pagination bullet element. @keywords pagination bullet binds attributes */
export type CarouselPaginationItemBinds = AriaList & {
    /** Item key. */
    key?: number | string;
    /** Button element type. */
    type?: string;
    /** Item index data attribute. */
    'data-index'?: number;
    /** Item classes. */
    class?: ConstrClass;
    /** Item styles. */
    style?: ConstrStyles;
    /** Tab index. */
    tabindex?: NumberOrString;
    /** Click event handler. */
    onClick?: (event: MouseEvent) => void;
};

/** Attributes bound to a pagination fraction container. @keywords pagination fraction binds */
export type CarouselPaginationFractionBinds = AriaList & {
    /** Fraction container key. */
    key?: string;
    /** Fraction container class. */
    class?: string;
};

/** Attributes bound to a pagination progress bar container. @keywords pagination progress binds */
export type CarouselPaginationProgressBinds = AriaList & {
    /** Progress container key. */
    key?: string;
    /** Progress container class. */
    class?: string;
};

/** Dependency registration type for embedding CarouselPagination in parent components. @keywords pagination component include */
export type CarouselPaginationComponentInclude = {
    /** CarouselPagination component configuration. */
    carouselPagination?: object;
};

/** Props for embedding CarouselPagination attributes inside another component. @keywords pagination props include */
export type CarouselPaginationPropsInclude<CarouselPagination extends CarouselPaginationPropsBasic = CarouselPaginationPropsBasic> = {
    /** Bound attributes passed directly to CarouselPagination. */
    carouselPaginationAttrs?: ConstrBind<CarouselPagination>;
};
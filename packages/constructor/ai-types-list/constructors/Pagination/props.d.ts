// md5:179817c8099a03ed31fd8009d0d70191 true
import type { ConstrBind } from '@dxtmisha/functional';

type PaginationPropsToken = {
    adaptive?: 'lineAlways';
    adaptiveMore?: 'lineAlways';
    adaptiveMorePrev?: 'lineAlways';
};

/** Pagination component basic properties interface @keywords pagination, props */
export type PaginationPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Button extends ButtonPropsBasic = ButtonPropsBasic, Menu extends MenuPropsBasic = MenuPropsBasic> = TextFirstPropsInclude & TextLastPropsInclude & TextMorePropsInclude & TextMorePrevPropsInclude & TextRowsPerPagePropsInclude & TextInfoPropsInclude & TextPreviousPropsInclude & TextNextPropsInclude & AreaPropsInclude & ModelProps<number | string> & {
    /** Current active page number or identifier */
    'value'?: number | string;
    /** Total item count across all pages */
    'count'?: number | string;
    /** Number of rows or items per page */
    'rows'?: number | string;
    /** Select options list for rows per page count */
    'menuRows'?: number[];
    /** Number of visible page links */
    'visible'?: number;
    /** Number of buttons for the first and last pages */
    'ends'?: number;
    /** Ellipsis separator text */
    'ellipsis'?: string;
    /** Hide pagination if only one page exists */
    'hideIfOne'?: boolean;
    /** Display the page navigation buttons */
    'showPagination'?: boolean;
    /** Display the previous and next arrow buttons */
    'showArrows'?: boolean;
    /** Display the first and last page buttons */
    'showFirstLast'?: boolean;
    /** Display first and last page numbers with ellipsis between */
    'showEnds'?: boolean;
    /** Display the "Show more" button */
    'showMore'?: boolean;
    /** Display the "Show previous" button */
    'showMorePrev'?: boolean;
    /** Display page range information label */
    'showInfo'?: boolean;
    /** Display the rows-per-page text label */
    'showRowsPerPageLabel'?: boolean;
    /** Icon configuration for the down arrow */
    'iconArrowDown'?: IconValue<Icon>;
    /** Icon configuration for the first page arrow */
    'iconArrowFirst'?: IconValue<Icon>;
    /** Icon configuration for the last page arrow */
    'iconArrowLast'?: IconValue<Icon>;
    /** Icon configuration for the left/previous arrow */
    'iconArrowLeft'?: IconValue<Icon>;
    /** Icon configuration for the right/next arrow */
    'iconArrowRight'?: IconValue<Icon>;
    /** Custom attributes bound to button components */
    'buttonAttrs'?: ConstrBind<Button>;
    /** Custom attributes bound to the more button component */
    'buttonMoreAttrs'?: ConstrBind<Button>;
    /** Custom attributes bound to the previous more button component */
    'buttonMorePrevAttrs'?: ConstrBind<Button>;
    /** Custom attributes bound to the menu trigger button */
    'buttonMenuAttrs'?: ConstrBind<Button>;
    /** Custom attributes bound to the menu component */
    'menuAttrs'?: ConstrBind<Menu>;
    /** Model binding for rows count */
    'modelRows'?: number | string;
    /** Callback triggered when rows count updates */
    'onUpdate:rows'?: (value: number | string) => void;
    /** Callback triggered when model rows count updates */
    'onUpdate:modelRows'?: (value: number | string) => void;
};

/** Properties for the pagination component @keywords pagination, props */
export type PaginationProps = PaginationPropsBasic & PaginationPropsToken;

/** Default property values for pagination @keywords pagination, defaults */
export declare const defaultsPagination: {
    value: number;
    visible: number;
    ends: number;
    ellipsis: string;
    hideIfOne: boolean;
    showPagination: boolean;
    showArrows: boolean;
    showFirstLast: boolean;
    showRowsPerPageLabel: boolean;
};
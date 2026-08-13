// md5:4170d3f6b8290fd034ed447abe49ef30 true
import { ConstrBind } from '@dxtmisha/functional';
type PaginationPropsToken = {
    adaptive?: 'lineAlways';
    adaptiveMore?: 'lineAlways';
    adaptiveMorePrev?: 'lineAlways';
};
export type PaginationPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Button extends ButtonPropsBasic = ButtonPropsBasic, Menu extends MenuPropsBasic = MenuPropsBasic> = TextFirstPropsInclude & TextLastPropsInclude & TextMorePropsInclude & TextMorePrevPropsInclude & TextRowsPerPagePropsInclude & TextInfoPropsInclude & TextPreviousPropsInclude & TextNextPropsInclude & AreaPropsInclude & ModelProps<number | string> & {
    /** Current page @keywords pagination, value, page */
    'value'?: number | string;
    /** Total item count @keywords pagination, count, total */
    'count'?: number | string;
    /** Number of rows per page @keywords pagination, rows, limit */
    'rows'?: number | string;
    /** Option list for rows count select @keywords pagination, menuRows, options */
    'menuRows'?: number[];
    /** Number of visible page links @keywords pagination, visible, links */
    'visible'?: number;
    /** Number of buttons for first and last pages @keywords pagination, ends */
    'ends'?: number;
    /** Ellipsis text separator @keywords pagination, ellipsis, separator */
    'ellipsis'?: string;
    /** Whether to hide pagination if only one page exists @keywords pagination, hideIfOne */
    'hideIfOne'?: boolean;
    /** Whether to show page navigation buttons @keywords pagination, showPagination */
    'showPagination'?: boolean;
    /** Whether to show next and back buttons @keywords pagination, showArrows */
    'showArrows'?: boolean;
    /** Whether to show first and last page buttons @keywords pagination, showFirstLast */
    'showFirstLast'?: boolean;
    /** Whether to show first/last pages as numbers and ellipsis @keywords pagination, showEnds */
    'showEnds'?: boolean;
    /** Whether to show show more button @keywords pagination, showMore */
    'showMore'?: boolean;
    /** Whether to show show previous button @keywords pagination, showMorePrev */
    'showMorePrev'?: boolean;
    /** Whether to show page range information @keywords pagination, showInfo */
    'showInfo'?: boolean;
    /** Whether to show text rows per page label @keywords pagination, showRowsPerPageLabel */
    'showRowsPerPageLabel'?: boolean;
    /** Icon for down arrow @keywords pagination, iconArrowDown */
    'iconArrowDown'?: IconValue<Icon>;
    /** Icon for first arrow @keywords pagination, iconArrowFirst */
    'iconArrowFirst'?: IconValue<Icon>;
    /** Icon for last arrow @keywords pagination, iconArrowLast */
    'iconArrowLast'?: IconValue<Icon>;
    /** Icon for left arrow @keywords pagination, iconArrowLeft */
    'iconArrowLeft'?: IconValue<Icon>;
    /** Icon for right arrow @keywords pagination, iconArrowRight */
    'iconArrowRight'?: IconValue<Icon>;
    /** Custom attributes for button components @keywords pagination, buttonAttrs */
    'buttonAttrs'?: ConstrBind<Button>;
    /** Custom attributes for more button component @keywords pagination, buttonMoreAttrs */
    'buttonMoreAttrs'?: ConstrBind<Button>;
    /** Custom attributes for more previous button component @keywords pagination, buttonMorePrevAttrs */
    'buttonMorePrevAttrs'?: ConstrBind<Button>;
    /** Custom attributes for menu button component @keywords pagination, buttonMenuAttrs */
    'buttonMenuAttrs'?: ConstrBind<Button>;
    /** Custom attributes for menu component @keywords pagination, menuAttrs */
    'menuAttrs'?: ConstrBind<Menu>;
    /** Model rows prop @keywords pagination, modelRows */
    'modelRows'?: number | string;
    /** Update rows handler @keywords pagination, onUpdate:rows */
    'onUpdate:rows'?: (value: number | string) => void;
    /** Update model rows handler @keywords pagination, onUpdate:modelRows */
    'onUpdate:modelRows'?: (value: number | string) => void;
};
/** Pagination properties @keywords pagination, props */
export type PaginationProps = PaginationPropsBasic & PaginationPropsToken;
/** Default values for pagination component @keywords pagination, defaults */
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
export {};
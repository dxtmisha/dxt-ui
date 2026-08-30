// md5:c3808d25787aa984b5a6895338ee8c25 true
import type { ConstrClass } from '@dxtmisha/functional';
/** Components required for pagination functionality. @keywords components, dependencies */
export type PaginationComponents = ButtonComponentInclude & MenuComponentInclude;
/** Events emitted by the pagination component. @keywords emits, events */
export type PaginationEmits = EventClickEmits & ModelEmits<number> & {
    'update:rows': [value: number];
    'update:modelRows': [value: number];
    'more': [event: MouseEvent, options?: EventClickValue];
    'moreLite': [options?: EventClickValue];
    'morePrev': [event: MouseEvent, options?: EventClickValue];
    'morePrevLite': [options?: EventClickValue];
    'rows': [event: MouseEvent, options?: EventClickValue];
    'rowsLite': [options?: EventClickValue];
};
export interface PaginationExpose {}
/** Available slots for the pagination component. @keywords slots */
export interface PaginationSlots {
    /** Slot at the start of the component. */
    leading?(): any;
    /** Slot in the middle before the spacer. */
    info?(): any;
    /** Slot at the end of the component. */
    trailing?(): any;
}
/** Class names structure for pagination sub-elements. @keywords classes, styles */
export type PaginationClasses = {
    main: ConstrClass;
    button: string;
    navigation: string;
    more: string;
    morePrev: string;
    info: string;
    menuRows: string;
    menuRowsLabel: string;
    ellipsis: string;
    spacer: string;
};
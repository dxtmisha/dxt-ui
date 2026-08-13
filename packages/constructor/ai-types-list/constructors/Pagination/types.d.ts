// md5:741bf3471af4cf38477aab08789dac53 true
import { ConstrClass } from '@dxtmisha/functional';
export type PaginationComponents = ButtonComponentInclude & MenuComponentInclude;
export type PaginationEmits = EventClickEmits & ModelEmits<number> & {
    'update:rows': [value: number];
    'update:modelRows': [value: number];
    'more': [
        event: MouseEvent,
        options?: EventClickValue
    ];
    'moreLite': [options?: EventClickValue];
    'morePrev': [
        event: MouseEvent,
        options?: EventClickValue
    ];
    'morePrevLite': [options?: EventClickValue];
    'rows': [
        event: MouseEvent,
        options?: EventClickValue
    ];
    'rowsLite': [options?: EventClickValue];
};
export interface PaginationExpose {
}
export interface PaginationSlots {
    /** Slot at the beginning of the component @keywords slot leading start */
    leading?(): any;
    /** Slot in the middle before the spacer @keywords slot info middle spacer */
    info?(): any;
    /** Slot at the end of the component @keywords slot trailing end */
    trailing?(): any;
}
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
// md5:3b1c57e3d6c0d29eb9203b7ce9d3aaf0 true
import type { ConstrClass, ListSelectedList } from '@dxtmisha/functional';

export type ChipGroupComponents = ChipComponentInclude;

export type ChipGroupEmits = EventClickEmits & ModelEmitsSelected<ListSelectedList>;

export interface ChipGroupExpose {
}

export interface ChipGroupSlots {
    /** Default slot for displaying a custom list of chips. @keywords default, slot, chips */
    default?(props: any): any;
}

export type ChipGroupClasses = {
    main: ConstrClass;
    item: string;
};
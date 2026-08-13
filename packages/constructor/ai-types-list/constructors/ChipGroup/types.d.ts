// md5:9ae3ef5fe35ef14da131ab0ed51e67f9 true
import { ConstrClass, ListSelectedList } from '@dxtmisha/functional';

export type ChipGroupComponents = ChipComponentInclude;

export type ChipGroupEmits = EventClickEmits & ModelEmitsSelected<ListSelectedList>;

export interface ChipGroupExpose {
}

/** Chip group slots configuration @keywords slots, chip group, custom list */
export interface ChipGroupSlots {
    default?(props: any): any;
}

export type ChipGroupClasses = {
    main: ConstrClass;
    item: string;
};
// md5:95603fd8efd8fc728af58ede005858b6 true
import type { ConstrClass, ListList, ListNames } from '@dxtmisha/functional';

export type ListComponents = ListItemComponentInclude & ListGroupComponentInclude & ListMenuComponentInclude & InputComponentInclude;

export type ListEmits = EventClickEmits & {
    close: [];
};

/** List component expose methods. @keywords list, expose, api */
export interface ListExpose {
    /** Checks whether at least one item is selected. @keywords isSelected, selection, check */
    isSelected(): boolean;
    /** Returns list of selected elements. @keywords getSelectedList, selected, items */
    getSelectedList(): ListList;
    /** Returns names of selected elements. @keywords getSelectedNames, names, labels */
    getSelectedNames(): ListNames;
    /** Returns values of selected elements. @keywords getSelectedValues, values */
    getSelectedValues(): any[];
}

export type ListSlots = Record<string, (props: any) => any>;

export type ListClasses = {
    main: ConstrClass;
    space: string;
    line: string;
    subtitle: string;
    html: string;
    management: string;
    group: string;
    menu: string;
    filterInput: string;
    none: string;
};
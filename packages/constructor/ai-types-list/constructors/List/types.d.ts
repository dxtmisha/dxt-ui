// md5:62725fc34c7d46a670a585541f8d61c3 true
import { ConstrClass, ListList, ListNames } from '@dxtmisha/functional';
export type ListComponents = ListItemComponentInclude & ListGroupComponentInclude & ListMenuComponentInclude & InputComponentInclude;
export type ListEmits = EventClickEmits & {
    close: [];
};
/** Interface describing exposed component properties and methods. @keywords expose methods state */
export interface ListExpose {
    /** Checks if at least one item is selected. @keywords isSelected check selected */
    isSelected(): boolean;
    /** Returns the list of selected elements. @keywords getSelectedList selected elements */
    getSelectedList(): ListList;
    /** Returns the names of selected elements. @keywords getSelectedNames selected names */
    getSelectedNames(): ListNames;
    /** Returns the values of selected elements. @keywords getSelectedValues selected values */
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
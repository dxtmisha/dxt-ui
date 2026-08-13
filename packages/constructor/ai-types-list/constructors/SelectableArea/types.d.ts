// md5:54ca0db5ee5cfbfee354ad5a1acaa401 true
import { ConstrClass } from '@dxtmisha/functional';
export type SelectableAreaComponents = {};
export type SelectableAreaEmits = ModelEmitsSelected & {
    selected: [parameters: SelectableAreaEventParameters];
};
/** Interface exposing selectable area controls @keywords expose, methods */
export interface SelectableAreaExpose {
    /** Resets the selection @keywords reset, clear */
    reset: () => void;
    /** Selects items programmatically @keywords select, set */
    setSelected: (value: string | string[]) => void;
}
export interface SelectableAreaSlots {
    default?(props: SelectableAreaControl): any;
}
export type SelectableAreaClasses = {
    main: ConstrClass;
    item: string;
    square: string;
};
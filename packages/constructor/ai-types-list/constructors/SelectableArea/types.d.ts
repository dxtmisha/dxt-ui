// md5:4d014e21a705122b8859b98c71fa73fa true
import type { ConstrClass } from '@dxtmisha/functional';

export type SelectableAreaComponents = {};

export type SelectableAreaEmits = ModelEmitsSelected & {
    /** Event triggered when items are selected @keywords selected, emit */
    selected: [
        parameters: SelectableAreaEventParameters
    ];
};

export interface SelectableAreaExpose {
    /** Resets the selection state @keywords reset, clear */
    reset: () => void;
    /** Selects items programmatically @keywords set-selected, select */
    setSelected: (value: string | string[]) => void;
}

export interface SelectableAreaSlots {
    /** Default slot containing selectable elements @keywords slot, default */
    default?(props: SelectableAreaControl): any;
}

export type SelectableAreaClasses = {
    main: ConstrClass;
    item: string;
    square: string;
};
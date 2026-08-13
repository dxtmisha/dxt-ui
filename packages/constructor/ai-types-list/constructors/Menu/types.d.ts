// md5:dc91e79e95bbff65b3e00ebb15e9d711 true
import { ConstrClass, NumberOrStringOrBoolean } from '@dxtmisha/functional';

export type MenuComponents = ListComponentInclude & BarsComponentInclude & WindowComponentInclude;

export type MenuEmits = BarsEmitsInclude & EventClickEmits & WindowEmitsInclude & ModelEmitsSelected & {
    updateValue: [value?: NumberOrStringOrBoolean];
    clickSlot: [value?: string];
};

export interface MenuExpose extends WindowExposeInclude, ListExpose {
    /** Checks loading state @keywords loading, state */
    loading(): boolean;
    /** Switches to the previous item @keywords previous, item, navigation */
    previous(): NumberOrStringOrBoolean | undefined;
    /** Switches to the next item @keywords next, item, navigation */
    next(): NumberOrStringOrBoolean | undefined;
}

export type MenuSlots = ListSlots & MenuSlotInclude & {
    /** Control slot for window management @keywords control, slot, window */
    control?(props: MenuControlItem): any;
};

export type MenuClasses = {
    main: ConstrClass;
    bars: string;
    list: string;
};
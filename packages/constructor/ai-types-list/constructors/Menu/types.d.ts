// md5:717419afd5f0117262791aa7a45b5250 true
import type { ConstrClass, NumberOrStringOrBoolean } from '@dxtmisha/functional';

/** Components required for menu operation. @keywords menu, components, include */
export type MenuComponents = ListComponentInclude & BarsComponentInclude & WindowComponentInclude;

/** Available menu events. @keywords menu, emits, events */
export type MenuEmits = BarsEmitsInclude & EventClickEmits & WindowEmitsInclude & ModelEmitsSelected & {
    /** Emitted on value update. @keywords update, value, change */
    updateValue: [
        value?: NumberOrStringOrBoolean
    ];
    /** Emitted on slot click. @keywords click, slot, trigger */
    clickSlot: [
        value?: string
    ];
};

/** Public methods and properties exposed by the menu component. @keywords menu, expose, methods */
export interface MenuExpose extends WindowExposeInclude, ListExpose {
    /** Returns the loading state of the menu. @keywords loading, state, status */
    loading(): boolean;
    /** Switches to the previous menu item. @keywords previous, navigate, back */
    previous(): NumberOrStringOrBoolean | undefined;
    /** Switches to the next menu item. @keywords next, navigate, forward */
    next(): NumberOrStringOrBoolean | undefined;
}

/** Available menu slot templates. @keywords menu, slots */
export type MenuSlots = ListSlots & MenuSlotInclude & {
    /** Window management control slot. @keywords control, slot, window */
    control?(props: MenuControlItem): any;
};

/** CSS classes for menu sub-elements. @keywords menu, classes, style */
export type MenuClasses = {
    main: ConstrClass;
    bars: string;
    list: string;
};
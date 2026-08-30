// md5:4c58de4b3396bbe96f60411b36934642 true
import type { Ref } from 'vue';
import type { ConstrBind, NumberOrStringOrBoolean } from '@dxtmisha/functional';

/** Basic control state and navigation methods for menu @keywords menu, control, navigation */
export type MenuControlBasic = ListSlotsInclude & {
    loading: Ref<boolean>;
    /** Navigates to the previous menu item @keywords menu, previous, navigation */
    previous(): NumberOrStringOrBoolean | undefined;
    /** Navigates to the next menu item @keywords menu, next, navigation */
    next(): NumberOrStringOrBoolean | undefined;
};

export type MenuControlItem = MenuControlBasic & WindowControlItem;

export type MenuComponentInclude = {
    menu?: object;
};

/** Menu expose interface providing access to the menu DOM or component reference @keywords menu, expose, element */
export interface MenuExposeInclude extends MenuExpose {
    /** Gets the reactive menu element reference @keywords menu, element, instance, ref */
    getMenuElement(): Ref<ConstrBind<MenuExpose> | undefined>;
}

export type MenuSlotInclude = {
    title?(props: MenuControlItem): any;
    footer?(props: MenuControlItem): any;
    contextTop?(props: MenuControlItem): any;
    contextBottom?(props: MenuControlItem): any;
};

export type MenuPropsInclude<Menu extends MenuPropsBasic = MenuPropsBasic> = {
    disabled?: boolean;
    menuAttrs?: ConstrBind<Menu>;
};
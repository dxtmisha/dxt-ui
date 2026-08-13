// md5:8a768ef292d4e9d65e66a1ab43cb97c5 true
import { Ref } from 'vue';
import { ConstrBind, NumberOrStringOrBoolean } from '@dxtmisha/functional';
export type MenuControlBasic = ListSlotsInclude & {
    /** Current loading state @keywords loading state menu */
    loading: Ref<boolean>;
    /** Switches to the previous item @keywords previous item switch menu */
    previous(): NumberOrStringOrBoolean | undefined;
    /** Switches to the next item @keywords next item switch menu */
    next(): NumberOrStringOrBoolean | undefined;
};
export type MenuControlItem = MenuControlBasic & WindowControlItem;
export type MenuComponentInclude = {
    /** Menu component configuration @keywords menu component configuration */
    menu?: object;
};
/** Menu expose functionality @keywords menu expose interface */
export interface MenuExposeInclude extends MenuExpose {
    /** Reference to the menu element @keywords get menu element ref */
    getMenuElement(): Ref<ConstrBind<MenuExpose> | undefined>;
}
export type MenuSlotInclude = {
    /** Title slot for window title @keywords title slot window */
    title?(props: MenuControlItem): any;
    /** Footer slot for window bottom @keywords footer slot window */
    footer?(props: MenuControlItem): any;
    /** Context slot for top area @keywords context top slot */
    contextTop?(props: MenuControlItem): any;
    /** Context slot for bottom area @keywords context bottom slot */
    contextBottom?(props: MenuControlItem): any;
};
export type MenuPropsInclude<Menu extends MenuPropsBasic = MenuPropsBasic> = {
    /** Whether the menu is disabled @keywords menu disabled prop */
    disabled?: boolean;
    /** Additional attributes for the Menu component @keywords menu attributes props */
    menuAttrs?: ConstrBind<Menu>;
};
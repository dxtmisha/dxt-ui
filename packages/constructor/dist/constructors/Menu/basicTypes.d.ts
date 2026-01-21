import { ComputedRef, Ref } from 'vue';
import { ConstrBind, NumberOrStringOrBoolean } from '@dxtmisha/functional';
import { WindowControlItem } from '../Window';
import { ListExpose } from '../List';
import { MenuExpose } from './types';
import { MenuPropsBasic } from './props';
export type MenuControlBasic = ListExpose & {
    loading: Ref<boolean>;
    previous(): NumberOrStringOrBoolean | undefined;
    next(): NumberOrStringOrBoolean | undefined;
};
export type MenuControlItem = MenuControlBasic & WindowControlItem;
export type MenuComponentInclude = {
    menu?: object;
};
/** Type for menu expose functionality/ Тип для функциональности экспорта меню */
export interface MenuExposeInclude {
    open: ComputedRef<boolean>;
    setOpen(open: boolean): Promise<void>;
    toOpen: MenuExpose['toOpen'];
    toClose: MenuExpose['toClose'];
    toggle(): Promise<void>;
    menuElement: Ref<ConstrBind<MenuExpose> | undefined>;
}
export type MenuSlotInclude = {
    /** Title slot for window title/ Слот заголовка для заголовка окна */
    title?(props: MenuControlItem): any;
    /** Footer slot for window bottom/ Слот подвала для низа окна */
    footer?(props: MenuControlItem): any;
    /** Context slot for top area / Слот контекстной области сверху */
    contextTop?(props: MenuControlItem): any;
    /** Context slot for bottom area / Слот контекстной области снизу */
    contextBottom?(props: MenuControlItem): any;
};
/** Interface for menu include props/ Интерфейс для свойств включения меню */
export type MenuPropsInclude<Menu extends MenuPropsBasic = MenuPropsBasic> = {
    disabled?: boolean;
    menuAttrs?: ConstrBind<Menu>;
};

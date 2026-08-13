// md5:a2217a36f7ca09a70dfd8a82b883d73c true
import { Ref } from 'vue';
import { ConstrBind } from '@dxtmisha/functional';

/** MenuCountry components configuration requirement @keywords MenuCountryComponentInclude, menu, country */
export type MenuCountryComponentInclude = {
    menuCountry?: object;
};

/** Menu country expose functionality contract @keywords MenuCountryExposeInclude, expose, menu, country */
export interface MenuCountryExposeInclude extends MenuExposeInclude {
    /** Returns reference to the menu country element @keywords getMenuCountryElement, ref */
    getMenuCountryElement(): Ref<ConstrBind<MenuCountryExpose> | undefined>;
}

/** Menu country include properties type @keywords MenuCountryPropsInclude, props, menu, country */
export type MenuCountryPropsInclude<MenuCountry extends MenuCountryPropsBasic = MenuCountryPropsBasic> = {
    disabled?: boolean;
    menuCountryAttrs?: ConstrBind<MenuCountry>;
};
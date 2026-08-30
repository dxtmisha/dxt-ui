// md5:184603ab2a89dd59148c9f59bbfa42bf true
import type { Ref } from 'vue';
import type { ConstrBind } from '@dxtmisha/functional';

export type MenuCountryComponentInclude = {
    menuCountry?: object;
};

export interface MenuCountryExposeInclude extends MenuExposeInclude {
    /** Returns reference to the menu country element. @keywords menu country, element, ref */
    getMenuCountryElement(): Ref<ConstrBind<MenuCountryExpose> | undefined>;
}

export type MenuCountryPropsInclude<MenuCountry extends MenuCountryPropsBasic = MenuCountryPropsBasic> = {
    disabled?: boolean;
    menuCountryAttrs?: ConstrBind<MenuCountry>;
};
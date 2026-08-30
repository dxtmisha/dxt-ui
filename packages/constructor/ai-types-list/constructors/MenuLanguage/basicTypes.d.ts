// md5:665f05e8f10339dca6381ef8b71ce77e true
import type { Ref } from 'vue';
import type { ConstrBind } from '@dxtmisha/functional';

export type MenuLanguageComponentInclude = {
    menuLanguage?: object;
};

export interface MenuLanguageExposeInclude extends MenuExposeInclude {
    /** Returns reference to the menu language element. @keywords menu, language, element, ref */
    getMenuLanguageElement(): Ref<ConstrBind<MenuLanguageExpose> | undefined>;
}

export type MenuLanguagePropsInclude<MenuLanguage extends MenuLanguagePropsBasic = MenuLanguagePropsBasic> = {
    disabled?: boolean;
    menuLanguageAttrs?: ConstrBind<MenuLanguage>;
};
// md5:403a445771b64d7d5764c3316f36b7a1 true
import { Ref } from 'vue';
import { ConstrBind } from '@dxtmisha/functional';

/** MenuLanguage component include configuration @keywords menuLanguage, component, include */
export type MenuLanguageComponentInclude = {
    menuLanguage?: object;
};

/** Menu language expose functionality @keywords menuLanguage, expose, element */
export interface MenuLanguageExposeInclude extends MenuExposeInclude {
    /** Get menu language element reference @keywords getMenuLanguageElement, ref */
    getMenuLanguageElement(): Ref<ConstrBind<MenuLanguageExpose> | undefined>;
}

/** Menu language props include configuration @keywords menuLanguage, props, disabled, attrs */
export type MenuLanguagePropsInclude<MenuLanguage extends MenuLanguagePropsBasic = MenuLanguagePropsBasic> = {
    disabled?: boolean;
    menuLanguageAttrs?: ConstrBind<MenuLanguage>;
};
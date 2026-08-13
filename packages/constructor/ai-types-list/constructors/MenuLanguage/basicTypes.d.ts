// md5:403a445771b64d7d5764c3316f36b7a1
import { Ref } from 'vue';
import { ConstrBind } from '@dxtmisha/functional';
import { MenuExposeInclude } from '../Menu';
import { MenuLanguageExpose } from './types';
import { MenuLanguagePropsBasic } from './props';
/**
 * Interface for describing which components need to be connected for MenuLanguage work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы MenuLanguage.
 */
export type MenuLanguageComponentInclude = {
    /** MenuLanguage component configuration / Конфигурация компонента MenuLanguage */
    menuLanguage?: object;
};
/**
 * Type for menu language expose functionality.
 *
 * Тип для функциональности экспорта menu language.
 */
export interface MenuLanguageExposeInclude extends MenuExposeInclude {
    /** Reference to the menu language element / Ссылка на элемент menu language */
    getMenuLanguageElement(): Ref<ConstrBind<MenuLanguageExpose> | undefined>;
}
/**
 * Interface for menu language include props.
 *
 * Интерфейс для свойств включения menu language.
 */
export type MenuLanguagePropsInclude<MenuLanguage extends MenuLanguagePropsBasic = MenuLanguagePropsBasic> = {
    /** Whether the menu language is disabled / Отключено ли menu language */
    disabled?: boolean;
    /** Additional attributes for the MenuLanguage component / Дополнительные атрибуты для компонента MenuLanguage */
    menuLanguageAttrs?: ConstrBind<MenuLanguage>;
};

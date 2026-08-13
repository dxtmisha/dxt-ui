// md5:a2217a36f7ca09a70dfd8a82b883d73c
import { Ref } from 'vue';
import { ConstrBind } from '@dxtmisha/functional';
import { MenuExposeInclude } from '../Menu';
import { MenuCountryExpose } from './types';
import { MenuCountryPropsBasic } from './props';
/**
 * Interface for describing which components need to be connected for MenuCountry work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы MenuCountry.
 */
export type MenuCountryComponentInclude = {
    /** MenuCountry component configuration / Конфигурация компонента MenuCountry */
    menuCountry?: object;
};
/**
 * Type for menu country expose functionality.
 *
 * Тип для функциональности экспорта menu country.
 */
export interface MenuCountryExposeInclude extends MenuExposeInclude {
    /** Reference to the menu country element / Ссылка на элемент menu country */
    getMenuCountryElement(): Ref<ConstrBind<MenuCountryExpose> | undefined>;
}
/**
 * Interface for menu country include props.
 *
 * Интерфейс для свойств включения menu country.
 */
export type MenuCountryPropsInclude<MenuCountry extends MenuCountryPropsBasic = MenuCountryPropsBasic> = {
    /** Whether the menu country is disabled / Отключено ли menu country */
    disabled?: boolean;
    /** Additional attributes for the MenuCountry component / Дополнительные атрибуты для компонента MenuCountry */
    menuCountryAttrs?: ConstrBind<MenuCountry>;
};

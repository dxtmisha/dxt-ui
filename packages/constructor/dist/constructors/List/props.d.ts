import { ConstrBind, ListRecord, ListSelectedItem, ListSelectedList } from '@dxtmisha/functional';
import { RoleType } from '../../types/roleTypes';
import { AriaMultiselectablePropsInclude, AriaRolePropsInclude } from '../../types/ariaTypes';
import { IconPropsBasic, IconValue } from '../Icon';
import { ListItemPropsBasic } from '../ListItem';
export type ListPropsToken = {
    axis?: 'x' | 'y';
    divider?: boolean;
};
export type ListPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, ListItem extends ListItemPropsBasic = ListItemPropsBasic> = AriaRolePropsInclude & AriaMultiselectablePropsInclude & {
    /** Status/ Статус */
    /** Currently focused item/ Элемент, на котором установлен фокус */
    focus?: ListSelectedItem;
    /** List of selected items/ Список выбранных элементов */
    selected?: ListSelectedList;
    /** Whether the list is disabled/ Отключен ли список */
    disabled?: boolean;
    /** Whether to use the simplified list mode/ Использовать ли упрощенный режим списка */
    lite?: boolean;
    /** Value/ Значения */
    /** Data list/ Список данных */
    list?: ListRecord<ListItem>;
    /** Threshold for enabling lite mode/ Порог для включения упрощенного режима */
    liteThreshold?: number;
    /** Search string for highlighting/ Строка поиска для подсветки */
    highlight?: string;
    /** Starting length for search highlighting/ Начальная длина для подсветки поиска */
    highlightLengthStart?: number;
    /** Whether to enable filtering mode/ Включен ли режим фильтрации */
    filterMode?: boolean;
    /** Key for the label in the data object/ Ключ для заголовка в объекте данных */
    keyLabel?: string;
    /** Key for the value in the data object/ Ключ для значения в объекте данных */
    keyValue?: string;
    /** Maximum number of items/ Максимальное количество элементов */
    max?: string | number;
    /** Style/ Стили */
    /** HTML tag for the list/ HTML-тег для списка */
    tag?: 'div' | 'button' | 'a' | 'span' | string;
    /** Layout axis/ Ось размещения */
    axis?: 'x' | 'y';
    /** Whether to show dividers between items/ Показывать ли разделители между элементами */
    divider?: boolean;
    /** Additional attributes for list items/ Дополнительные атрибуты для элементов списка */
    itemAttrs?: ConstrBind<ListItem>;
    /** Attributes for the item management component/ Атрибуты для компонента управления элементом */
    itemManagementAttrs?: ConstrBind<ListItem>;
    /** Attributes for the item group component/ Атрибуты для компонента группы элементов */
    itemGroupAttrs?: ConstrBind<ListItem>;
    /** Attributes for the item menu component/ Атрибуты для компонента меню элемента */
    itemMenuAttrs?: ConstrBind<ListItem>;
    /** Icon for the down arrow/ Иконка для стрелки вниз */
    iconArrowDown?: IconValue<Icon>;
    /** Icon for the right arrow/ Иконка для стрелки вправо */
    iconArrowRight?: IconValue<Icon>;
    /** ARIA/ ARIA */
    /** ARIA role for items/ ARIA-роль для элементов */
    roleItem?: RoleType;
    /** Tab index for keyboard navigation/ Индекс табуляции для навигации с клавиатуры */
    tabindex?: string | number;
    /** Technical/ Технические свойства */
    /** Whether to enable external control/ Включено ли внешнее управление */
    control?: boolean;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type ListProps = ListPropsBasic & ListPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsList: {
    axis: string;
    keyLabel: string;
    keyValue: string;
    tag: string;
    role: string;
    tabindex: number;
};

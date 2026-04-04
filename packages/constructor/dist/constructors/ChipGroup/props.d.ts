import { ConstrBind, ListSelectedList } from '@dxtmisha/functional';
import { ChipPropsBasic } from '../Chip';
import { ChipGroupData } from './basicTypes';
import { ModelPropsSelected } from '../../types/modelTypes';
export type ChipGroupPropsToken = {};
export type ChipGroupPropsBasic<Chip extends ChipPropsBasic = ChipPropsBasic> = ModelPropsSelected<ListSelectedList> & {
    /** Status/ Статус */
    /** Whether the group is read-only/ Находится ли группа в режиме «только для чтения» */
    readonly?: boolean;
    /** List of selected values/ Список выбранных значений */
    selected?: ListSelectedList;
    /** Values/ Значения */
    /** Data list for generating chips/ Список данных для генерации чипов */
    list?: ChipGroupData;
    /** Styles/ Стили */
    /** Whether to show an icon when a chip is selected/ Показывать ли иконку при выборе чипа */
    iconWhenSelected?: boolean;
    /** Key for the label in the data object/ Ключ для заголовка в объекте данных */
    keyLabel?: string;
    /** Key for the value in the data object/ Ключ для значения в объекте данных */
    keyValue?: string;
    /** Additional attributes for the Chip component/ Дополнительные атрибуты для компонента чипа */
    chipAttrs?: ConstrBind<Chip>;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type ChipGroupProps = ChipGroupPropsBasic & ChipGroupPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsChipGroup: {
    readonly: boolean;
};

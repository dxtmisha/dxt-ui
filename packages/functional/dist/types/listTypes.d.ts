import { ConstrBind } from './constructorTypes';
import { NumberOrString, NumberOrStringOrBoolean } from './basicTypes';
/** Type of list item/ Тип элемента списка */
export type ListType = 'item' | 'space' | 'line' | 'subtitle' | 'html' | 'menu' | 'menu-group' | 'group';
/** Basic data structure for list item/ Базовая структура данных для элемента списка */
export type ListDataBasic = {
    /** Optional display label/ Опциональная отображаемая метка */
    label?: NumberOrString;
    /** Any value associated with the item/ Любое значение, связанное с элементом */
    value?: any;
    /** Search text for filtering/ Текст поиска для фильтрации */
    search?: string;
};
/** Extended list item with type and index/ Расширенный элемент списка с типом и индексом */
export type ListDataItem<Item extends ListDataBasic = ListDataBasic> = ConstrBind<Item & {
    /** Parent item identifier/ Идентификатор родительского элемента */
    parent?: string;
    /** Type of list item/ Тип элемента списка */
    type: ListType;
    /** Unique item identifier/ Уникальный идентификатор элемента */
    index: string;
}>;
/** Array of list data items/ Массив элементов данных списка */
export type ListList<Item extends ListDataBasic = ListDataBasic> = ListDataItem<Item>[];
/**
 * List or record structure for list data/
 * Структура списка или записи для данных списка
 */
export type ListRecord<Item extends ListDataBasic = ListDataBasic> = ListList<Item> | Record<string, any>;
/**
 * Extended list item with additional state properties/
 * Расширенный элемент списка с дополнительными свойствами состояния
 */
export type ListDataFullItem<Item extends ListDataBasic = ListDataBasic> = ListDataItem<Item> & {
    /** Whether the item has focus/ Имеет ли элемент фокус */
    focus: boolean;
    /** Highlighted text portion/ Выделенная часть текста */
    highlight?: string;
    /** Whether the item is selected/ Выбран ли элемент */
    selected: boolean;
};
/**
 * Array of extended list items with state/
 * Массив расширенных элементов списка с состоянием
 */
export type ListDataFull<Item extends ListDataBasic = ListDataBasic> = ListDataFullItem<Item>[];
/** Input item for list creation/ Входной элемент для создания списка */
export type ListListInputItem<Item extends ListDataBasic = ListDataBasic> = ConstrBind<Item>;
/**
 * Various input formats for list creation/
 * Различные форматы входных данных для создания списка
 */
export type ListListInput<Item extends ListDataBasic = ListDataBasic> = ListListInputItem<Item>[] | string[] | Record<string, ListListInputItem<Item>> | Record<string, string>;
/** Single selected item identifier/ Идентификатор одного выбранного элемента */
export type ListSelectedItem = NumberOrStringOrBoolean;
/** Single or multiple selected items/ Один или несколько выбранных элементов */
export type ListSelectedList = ListSelectedItem | ListSelectedItem[];
/** Name of selected list item/ Название выбранного элемента списка */
export type ListName = string | number | undefined;
/** Array of list item names/ Массив названий выбранных элементов списка */
export type ListNames = ListName[];

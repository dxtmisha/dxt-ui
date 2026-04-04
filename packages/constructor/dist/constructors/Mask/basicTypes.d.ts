import { ConstrBind, GeoDate } from '@dxtmisha/functional';
import { FieldPatternItemOrFunction, FieldValidationItem } from '../../types/fieldTypes';
import { MaskPropsBasic } from './props';
/** Mask type options/ Опции типа маски */
export type MaskTypeItem = GeoDate | 'text' | 'number' | 'number-format' | 'currency';
/** Mask element input type/ Тип элемента ввода с маской */
export type MaskElementInput = HTMLInputElement | undefined;
/** Mask match item type (Regex or string)/ Тип элемента совпадения маски (регулярное выражение или строка) */
export type MaskMatchItem = RegExp | string;
/** Mask fraction item type/ Тип элемента дробной части маски */
export type MaskFractionItem = string | boolean | number;
/** Type describing a special mask item/ Тип, описывающий специальный элемент маски */
export type MaskSpecialItem = {
    /** Default value/ Значение по умолчанию */
    defaultValue?: string;
    /** Whether the item is flexible (rubber)/ Является ли элемент гибким («резиновым») */
    rubber?: boolean;
    /** Characters for transition/ Символы для перехода */
    transitionChar?: string | string[];
    /** Minimum length/ Минимальная длина */
    minLength?: number;
    /** Maximum length/ Максимальная длина */
    maxLength?: number;
    /** Matching rule/ Правило совпадения */
    match?: MaskMatchItem;
    /** Pattern for validation/ Шаблон для валидации */
    pattern?: FieldPatternItemOrFunction;
    /** View representation/ Вид представления */
    view?: string;
};
/** Type describing special mask info/ Тип, описывающий информацию о специальном элементе маски */
export type MaskSpecialInfo = {
    /** Item index/ Индекс элемента */
    index: number;
    /** Item key/ Ключ элемента */
    key: number;
    /** Item character/ Символ элемента */
    char: string;
};
/** List of special mask items/ Список специальных элементов маски */
export type MaskSpecialList = Record<string, MaskSpecialItem>;
/** Property for special mask items/ Свойство для специальных элементов маски */
export type MaskSpecialProp = string | string[] | MaskSpecialList;
/** Type describing a mask view item/ Тип, описывающий элемент отображения маски */
export type MaskViewItem = {
    /** CSS class name/ Имя CSS-класса */
    className: string;
    /** Mask character value/ Значение символа маски */
    value: string;
};
/** List of mask view items/ Список элементов отображения маски */
export type MaskViewList = MaskViewItem[];
/** Mask list type/ Тип списка масок */
export type MaskList = string | string[];
/** Mask event data type/ Тип данных события маски */
export type MaskEventData = FieldValidationItem;
/** Mask event selection type/ Тип данных выделения события маски */
export type MaskEventSelection = {
    /** Target input element/ Целевой элемент ввода */
    target: HTMLInputElement;
    /** Selection start position/ Начальная позиция выделения */
    start: number;
    /** Selection end position/ Конечная позиция выделения */
    end: number;
    /** Selection length/ Длина выделения */
    length: number;
};
/** Interface for including a mask component/ Интерфейс для включения компонента маски */
export type MaskComponentInclude = {
    /** Mask component configuration/ Конфигурация компонента маски */
    mask?: object;
};
/** Interface for including mask properties/ Интерфейс для включения свойств маски */
export type MaskPropsInclude<Mask extends MaskPropsBasic = MaskPropsBasic> = {
    /** Field name/ Имя поля */
    name?: string;
    /** Mask value or attributes/ Значение или атрибуты маски */
    mask?: string | ConstrBind<Mask>;
    /** Whether the mask is visible/ Видима ли маска */
    maskVisible?: boolean;
    /** Whether to disable the mask/ Отключена ли маска */
    maskNone?: boolean;
    /** Currency code/ Код валюты */
    currency?: string;
    /** Whether to hide the currency symbol/ Скрыт ли символ валюты */
    currencyHide?: boolean;
    /** Fraction part of the mask/ Дробная часть маски */
    fraction?: MaskFractionItem;
    /** Additional attributes for the mask/ Дополнительные атрибуты для маски */
    maskAttrs?: ConstrBind<Mask>;
};
/** Special character for deleting mask items/ Спецсимвол для удаления элементов маски */
export declare const MASK_CHAR_DELETE = "~";
/** Default view character for the mask/ Символ отображения маски по умолчанию */
export declare const MASK_VIEW_DEFAULT = "_";

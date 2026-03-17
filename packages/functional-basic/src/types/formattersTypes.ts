import type { ArrayToItem } from './basicTypes'
import type { GeoDate } from './geoTypes'

/**
 * Enumeration of available formatter types.
 *
 * Перечисление доступных типов форматировщиков.
 */
export enum FormattersType {
  /** Currency formatting / Форматирование валюты. */
  currency = 'currency',
  /** Date formatting / Форматирование даты. */
  date = 'date',
  /** Name formatting / Форматирование имени. */
  name = 'name',
  /** Number formatting / Форматирование чисел. */
  number = 'number',
  /** Plural forms formatting / Форматирование форм множественного числа. */
  plural = 'plural',
  /** Unit formatting (e.g., meters, kilograms) / Форматирование единиц измерения (например, метры, килограммы). */
  unit = 'unit'
}

/**
 * Options for currency formatting.
 *
 * Параметры для форматирования валюты.
 */
export type FormattersOptionsCurrency = {
  /** The name of the property in the data item that contains the currency code / Имя свойства в элементе данных, которое содержит код валюты. */
  currencyPropName?: string
  /** Currency code or international number format options / Код валюты или международные параметры форматирования чисел. */
  options?: string | Intl.NumberFormatOptions
  /** If true, only the numeric value will be returned / Если true, будет возвращено только числовое значение. */
  numberOnly?: boolean
}

/**
 * Options for date formatting.
 *
 * Параметры для форматирования даты.
 */
export type FormattersOptionsDate = {
  /** The type of date representation / Тип представления даты. */
  type?: GeoDate
  /** International date-time format options / Междунар. параметры форматирования даты и времени. */
  options?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions
  /** Use 24-hour format if true / Использовать 24-часовой формат, если true. */
  hour24?: boolean
}

/**
 * Options for name formatting.
 *
 * Параметры для форматирования имени.
 */
export type FormattersOptionsName = {
  /** Property name for the last name / Имя свойства для фамилии. */
  lastPropName?: string
  /** Property name for the first name / Имя свойства для имени. */
  firstPropName?: string
  /** Property name for the middle name / Имя свойства для отчества. */
  surname?: string
  /** If true, returns a short version of the name / Если true, возвращает сокращенную версию имени. */
  short?: boolean
}

/**
 * Options for number formatting.
 *
 * Параметры для форматирования чисел.
 */
export type FormattersOptionsNumber = {
  /** International number format options / Междунар. параметры форматирования чисел. */
  options?: Intl.NumberFormatOptions
}

/**
 * Options for plural forms formatting.
 *
 * Параметры для форматирования форм множественного числа.
 */
export type FormattersOptionsPlural = {
  /** A string containing plural forms / Строка, содержащая формы множественного числа. */
  words: string
  /** International plural rules options / Междунар. параметры правил множественного числа. */
  options?: Intl.PluralRulesOptions
  /** International number format options for the numeric part / Междунар. параметры форматирования чисел для числовой части. */
  optionsNumber?: Intl.NumberFormatOptions
}

/**
 * Options for unit formatting.
 *
 * Параметры для форматирования единиц измерения.
 */
export type FormattersOptionsUnit = {
  /** The unit to format or international number format options / Ед. изм. для форматирования или междунар. параметры форматирования чисел. */
  unit: string | Intl.NumberFormatOptions
}

/**
 * Mapping of formatter types to their respective option types.
 *
 * Соответствие типов форматировщиков их типам параметров.
 *
 * @template Type - The formatter type / Тип форматировщика.
 */
export type FormattersOptionsInformation<
  Type extends FormattersType
>
  = Type extends FormattersType.currency
  ? FormattersOptionsCurrency
  : Type extends FormattersType.date
  ? FormattersOptionsDate
  : Type extends FormattersType.name
  ? FormattersOptionsName
  : Type extends FormattersType.number
  ? FormattersOptionsNumber
  : Type extends FormattersType.plural
  ? FormattersOptionsPlural
  : Type extends FormattersType.unit
  ? FormattersOptionsUnit
  : Record<string, any>

/**
 * Configuration for a single property formatter.
 *
 * Конфигурация для форматировщика одного свойства.
 *
 * @template Type - The type of formatter / Тип форматировщика.
 * @template R - The return type / Возвращаемый тип.
 */
export type FormattersOptionsItem<
  Type extends FormattersType = FormattersType,
  R = string
> = {
  /** The type of formatter / Тип форматировщика. */
  type?: Type
  /** Custom transformation function / Пользовательская функция преобразования. */
  transformation?: (
    valueOriginal: any,
    item: any,
    options?: FormattersOptionsInformation<Type>
  ) => R
  /** Options for the specified formatter type / Параметры для указанного типа форматировщика. */
  options?: FormattersOptionsInformation<Type>
}

/**
 * A dictionary mapping property paths to their formatting configurations.
 *
 * Словарь, сопоставляющий пути к свойствам с их конфигурациями форматирования.
 */
export type FormattersOptionsList = Record<string, FormattersOptionsItem>

/**
 * Represents a single data item as a key-value record.
 *
 * Представляет один элемент данных как запись "ключ-значение".
 */
export type FormattersListItem = Record<string, any>

/**
 * An array of data items to be formatted.
 *
 * Массив элементов данных для форматирования.
 *
 * @template Item - The type of data items / Тип элементов данных.
 */
export type FormattersList<Item extends FormattersListItem> = Item[]

/**
 * Utility type to capitalize a camelCase or dot-notated string.
 *
 * Вспомогательный тип для капитализации строки.
 *
 * @template K - The string to capitalize / Строка для капитализации.
 */
export type FormattersCapitalize<K extends string> = K extends `${infer First}.${infer Rest}`
  ? `${First}${Capitalize<FormattersCapitalize<Rest>>}`
  : K

/**
 * Utility type to extract column keys from formatting options.
 *
 * Вспомогательный тип для извлечения ключей столбцов.
 *
 * @template T - The formatting options list type / Тип списка параметров форматирования.
 */
export type FormattersColumns<T extends FormattersOptionsList> = (keyof T & string)[]

/**
 * Utility type to generate a formatted property key.
 *
 * Вспомогательный тип для генерации ключа отформатированного свойства.
 *
 * @template K - The original property key / Ключ исходного свойства.
 * @template A - The suffix to add / Суффикс.
 */
export type FormattersKey<K, A extends string = 'Format'> = K extends string ? `${FormattersCapitalize<K>}${A}` : never

/**
 * Represents a data item with additional formatted properties.
 *
 * Представляет элемент данных с доп. отформатированными свойствами.
 *
 * @template T - The original item type / Исходный тип элемента.
 * @template KT - Array of property keys / Массив ключей свойств.
 */
export type FormattersDataItem<T extends FormattersListItem, KT extends string[]> = {
  [K in keyof T | FormattersKey<KT[number]>]: K extends keyof T ? T[K] : string
}

/**
 * An array of data items with additional formatted properties.
 *
 * Массив элементов данных с доп. отформатированными свойствами.
 *
 * @template T - The original item type / Исходный тип элемента.
 * @template K - Array of property keys / Массив ключей свойств.
 */
export type FormattersListFormat<T extends FormattersListItem, K extends string[]> = FormattersDataItem<T, K>[]

/**
 * A single data item formatted based on the provided options list.
 *
 * Один элемент данных, отформатированный на основе параметров.
 *
 * @template T - The original item type / Исходный тип элемента.
 * @template O - The formatting options / Параметры форматирования.
 */
export type FormattersListColumnItem<T extends FormattersListItem, O extends FormattersOptionsList> = FormattersDataItem<T, FormattersColumns<O>>

/**
 * A list of data items formatted based on the provided options list.
 *
 * Список элементов данных, отформатированных на основе параметров.
 *
 * @template T - The original item type / Исходный тип элемента.
 * @template O - The formatting options / Параметры форматирования.
 */
export type FormattersListColumns<T extends FormattersListItem, O extends FormattersOptionsList> = FormattersListFormat<T, FormattersColumns<O>>

/**
 * Possible formats for input data: either a single item or a list of items.
 *
 * Возможные форматы входных данных: либо один элемент, либо список элементов.
 */
export type FormattersListProp = FormattersList<FormattersListItem> | FormattersListItem

/**
 * Extracts the single item type from a single item or a list of items.
 *
 * Извлекает тип одного элемента из одного элемента или из списка элементов.
 *
 * @template List - The type of the input data / Тип входных данных.
 */
export type FormattersItemProp<List extends FormattersListProp> = ArrayToItem<List>

/**
 * The return type of the formatter, matching the structure of the input data.
 *
 * Возвращаемый тип форматировщика, соответствующий структуре входных данных.
 *
 * @template List - The input data type / Тип входных данных.
 * @template Options - The formatting options / Параметры форматирования.
 * @template Item - The type of a single item / Тип одного элемента.
 */
export type FormattersReturn<
  List extends FormattersListProp,
  Options extends FormattersOptionsList = FormattersOptionsList,
  Item extends FormattersItemProp<List> = FormattersItemProp<List>
> = List extends any[]
  ? FormattersListColumns<Item, Options>
  : (FormattersListColumnItem<Item, Options> | undefined)

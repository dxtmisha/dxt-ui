/** Search item type/ Тип элемента поиска */
export type SearchItem = Record<string, any>

/** Type for generating a column path / Тип для генерации пути к колонке */
export type SearchColumnPath<K, P> = K extends string
  ? P extends string
    ? `${K}.${P}`
    : never
  : never

/** Type for getting a column / Тип для получения колонки */
export type SearchColumn<T extends SearchItem> = {
  [K in keyof T]-?: NonNullable<T[K]> extends object ? K | SearchColumnPath<K, keyof NonNullable<T[K]>> : K
}[keyof T]

/** Type for a list of columns / Тип для списка колонок */
export type SearchColumns<T extends SearchItem> = (SearchColumn<T> & string)[]

/** Type for formatting the key / Тип для форматирования ключа */
export type SearchFormatCapitalize<K extends string> = K extends `${infer First}.${infer Rest}`
  ? `${First}${Capitalize<SearchFormatCapitalize<Rest>>}`
  : K

/** Type for generating a search key / Тип для генерации ключа поиска */
export type SearchFormatKey<K> = K extends string ? `${SearchFormatCapitalize<K>}Search` : never

/** Type for a formatted search item / Тип для отформатированного элемента поиска */
export type SearchFormatItem<T extends SearchItem, KT extends string[]>
  = {
    [K in keyof T | SearchFormatKey<KT[number]>]: K extends keyof T ? T[K] : string
  }
  & {
    searchActive?: boolean
  }

/** Type for a list of formatted search items / Тип для списка отформатированных элементов поиска */
export type SearchFormatList<T extends SearchItem, K extends string[]> = SearchFormatItem<T, K>[]

/** Search list value / Значение списка поиска */
export type SearchListValue<T extends SearchItem> = T[] | undefined

/** Search options / Опции поиска */
export type SearchOptions = {
  /** Limit of output values / Лимит выводимых значений */
  limit?: number

  /** Whether to return all items even if no match / Возвращать ли все элементы, даже если совпадений нет */
  returnEverything?: boolean

  /** Delay before searching / Задержка перед поиском */
  delay?: number

  /** Find exact match / Найти точное совпадение */
  findExactMatch?: boolean

  /** CSS class for matches / CSS класс для совпадений */
  classSearchName?: string
}

/** Search cache item / Элемент кэша поиска */
export type SearchCacheItem<T extends SearchItem> = {
  /** Original item / Исходный элемент */
  item: T
  /** Search string value / Строковое значение для поиска */
  value: string
}

/** Search cache list / Список кэша поиска */
export type SearchCache<T extends SearchItem> = SearchCacheItem<T>[]

/** Highlight match item type / Тип элемента подсветки совпадения */
export type HighlightMatchItem = {
  /** Text segment / Текстовый сегмент */
  text: string
  /** Whether the segment matches the search query / Соответствует ли сегмент поисковому запросу */
  isMatch: boolean
}

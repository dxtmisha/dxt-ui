import type { PropertyItem } from './propertyTypes'

/** Item for design flags / Элемент флагов дизайна */
export type DesignFlagsItem = {
  /** Flag name / Название флага */
  name: string
  /** X coordinate / Координата X */
  x: number
  /** Y coordinate / Координата Y */
  y: number
}
/** List of design flags items / Список элементов флагов дизайна */
export type DesignFlagsList = DesignFlagsItem[]

/** Design structure state with hierarchy and property information / Состояние структуры дизайна с иерархией и информацией о свойствах */
export type DesignStructureState = {
  /** Element index identifier / Идентификатор индекса элемента */
  index: string
  /** Element type / Тип элемента */
  type: string
  /** Property item data / Данные элемента свойства */
  item: PropertyItem
  /** CSS class name / Название CSS класса */
  className?: string
  /** Nested state array / Массив вложенных состояний */
  state: DesignStructureState[]
}

/** List of design structure states / Список состояний структуры дизайна */
export type DesignStructureStateList = DesignStructureState['state']

/** Design structure classes item with index, name and full flag / Элемент классов структуры дизайна с индексом, именем и флагом полноты */
export type DesignStructureClassesItem = {
  /** Class index identifier / Идентификатор индекса класса */
  index: string
  /** CSS class name / Название CSS класса */
  className: string
  /** Full class flag / Флаг полного класса */
  full: boolean
}

/** List of design structure classes / Список классов структуры дизайна */
export type DesignStructureClassesList = DesignStructureClassesItem[]

/** Design structure sub-item with nested state / Подэлемент структуры дизайна с вложенным состоянием */
export type DesignStructureItemSub = {
  /** Sub-item name / Название подэлемента */
  name: string
  /** Sub-item index / Индекс подэлемента */
  index: string
  /** Array of values / Массив значений */
  value: (string | boolean)[]
  /** Nested sub-items / Вложенные подэлементы */
  state: DesignStructureItemSub[]
}

/** Main design structure item with complete information / Основной элемент структуры дизайна с полной информацией */
export type DesignStructureItem = {
  /** Item name / Название элемента */
  name: string
  /** Item index identifier / Идентификатор индекса элемента */
  index: string
  /** Item type / Тип элемента */
  type: string
  /** CSS class name / Название CSS класса */
  className?: string
  /** Current values array / Массив текущих значений */
  value: (string | boolean)[]
  /** All possible values array / Массив всех возможных значений */
  valueAll: (string | boolean)[]
  /** Nested sub-items / Вложенные подэлементы */
  state: DesignStructureItemSub[]
  /** Style flag / Флаг стиля */
  style?: boolean
  /** Default value / Значение по умолчанию */
  default?: string | number | boolean
  /** Item category / Категория элемента */
  category?: string
}

/** Record of design structure items by key / Запись элементов структуры дизайна по ключу */
export type DesignStructureList = Record<string, DesignStructureItem>

/** TypeScript property description with type and options / Описание TypeScript свойства с типом и опциями */
export type DesignTypescriptProp = {
  /** Property name / Название свойства */
  name: string
  /** Property type / Тип свойства */
  type: string
  /** Array of possible options / Массив возможных опций */
  option?: string[]
  /** Property description / Описание свойства */
  description?: string
}

/** List of TypeScript properties / Список TypeScript свойств */
export type DesignTypescriptProps = DesignTypescriptProp[]

/** TypeScript item containing name and properties / TypeScript элемент содержащий имя и свойства */
export type DesignTypescriptItem = {
  /** TypeScript item name / Название TypeScript элемента */
  name: string
  /** Array of properties / Массив свойств */
  props: DesignTypescriptProps
}

/** List of TypeScript items / Список TypeScript элементов */
export type DesignTypescriptList = DesignTypescriptItem[]

/** Design types item / Элемент типов дизайна */
export type DesignTypesItem = {
  /** Relative file path / Относительный путь к файлу */
  path: string
  /** File content / Содержимое файла */
  content: string
  /** MD5 hash string / Строка MD5 хэша */
  md5?: string
}

/** List of design types items / Список элементов типов дизайна */
export type DesignTypesList = DesignTypesItem[]

/** Design types prompt cache item / Элемент кэша промпта типов дизайна */
export type DesignTypesPromptCacheItem = {
  /** Relative file path / Относительный путь к файлу */
  path: string
  /** MD5 hash string / Строка MD5 хэша */
  md5: string
  /** Document title / Название документа */
  name: string
  /** Document description / Описание документа */
  description: string
}

/** List of design types prompt cache items / Список элементов кэша промптов типов дизайна */
export type DesignTypesPromptCacheList = DesignTypesPromptCacheItem[]

/** Design types prompt data item / Элемент данных промпта типов дизайна */
export type DesignTypesPromptData = {
  /** Document title / Название документа */
  name?: string
  /** Document description / Описание документа */
  description?: string
}

/** Design types prompt item result / Результат обработки элемента промпта типов дизайна */
export type DesignTypesPromptResult = {
  /** Formatted prompt rule string / Отформатированная строка правила промпта */
  prompt?: string
  /** Flag indicating whether the cache was changed / Флаг указывающий был ли изменен кэш */
  isChanged: boolean
}

/** Design MCP resource item / Элемент ресурса MCP дизайна */
export type DesignMcpResourceItem = {
  /** Resource URI / URI ресурса */
  uri: string
  /** Resource name / Название ресурса */
  name: string
  /** Resource MIME type / MIME-тип ресурса */
  mimeType: string
  /** Resource description / Описание ресурса */
  description: string
}

/** Design MCP resources container / Контейнер ресурсов MCP дизайна */
export type DesignMcpResources = DesignMcpResourceItem[]

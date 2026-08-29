import type { PropertyItem } from './propertyTypes'

/**
 * Design flag item containing flag name and 2D canvas coordinates.
 *
 * Элемент флага дизайна, содержащий имя флага и 2D-координаты на холсте.
 */
export type DesignFlagsItem = {
  /** Flag name / Название флага */
  name: string

  /** X coordinate on the canvas / Координата X на холсте */
  x: number

  /** Y coordinate on the canvas / Координата Y на холсте */
  y: number
}

/**
 * List of design flag items.
 *
 * Список элементов флагов дизайна.
 */
export type DesignFlagsList = DesignFlagsItem[]

/**
 * Design structure state node with hierarchy, CSS class name, and property data.
 *
 * Узел состояния структуры дизайна с иерархией, CSS-классом и данными свойства.
 */
export type DesignStructureState = {
  /** Element index identifier / Идентификатор индекса элемента */
  index: string

  /** Element type / Тип элемента */
  type: string

  /** Property item data / Данные элемента свойства */
  item: PropertyItem

  /** CSS class name / Название CSS-класса */
  className?: string

  /** Nested state array / Массив вложенных состояний */
  state: DesignStructureState[]
}

/**
 * List of design structure state nodes.
 *
 * Список узлов состояния структуры дизайна.
 */
export type DesignStructureStateList = DesignStructureState['state']

/**
 * Design structure class item containing class index, CSS class name, and completeness flag.
 *
 * Элемент класса структуры дизайна, содержащий индекс класса, CSS-класс и флаг полноты.
 */
export type DesignStructureClassesItem = {
  /** Class index identifier / Идентификатор индекса класса */
  index: string

  /** CSS class name / Название CSS-класса */
  className: string

  /** Full class selector flag / Флаг полного селектора класса */
  full: boolean
}

/**
 * List of design structure class items.
 *
 * Список элементов классов структуры дизайна.
 */
export type DesignStructureClassesList = DesignStructureClassesItem[]

/**
 * Design structure sub-item representing a branch with nested states.
 *
 * Подэлемент структуры дизайна, представляющий ветвь с вложенными состояниями.
 */
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

/**
 * Main design structure descriptor with complete property, styling, and variation information.
 *
 * Основной дескриптор структуры дизайна с полной информацией о свойствах, стилизации и вариациях.
 */
export type DesignStructureItem = {
  /** Item name / Название элемента */
  name: string

  /** Item index identifier / Идентификатор индекса элемента */
  index: string

  /** Item type / Тип элемента */
  type: string

  /** CSS class name / Название CSS-класса */
  className?: string

  /** Current active values array / Массив текущих активных значений */
  value: (string | boolean)[]

  /** All possible values array / Массив всех возможных значений */
  valueAll: (string | boolean)[]

  /** Nested sub-items / Вложенные подэлементы */
  state: DesignStructureItemSub[]

  /** Style generation flag / Флаг генерации стилей */
  style?: boolean

  /** Default property value / Значение свойства по умолчанию */
  default?: string | number | boolean

  /** Item category / Категория элемента */
  category?: string
}

/**
 * Dictionary of design structure items keyed by property path.
 *
 * Словарь элементов структуры дизайна, индексированный по пути свойства.
 */
export type DesignStructureList = Record<string, DesignStructureItem>

/**
 * TypeScript property descriptor with type definition, options, and documentation.
 *
 * Дескриптор свойства TypeScript с определением типа, опциями и документацией.
 */
export type DesignTypescriptProp = {
  /** Property name / Название свойства */
  name: string

  /** TypeScript property type string / Строка TypeScript-типа свойства */
  type: string

  /** Array of possible option values / Массив возможных вариантов значений */
  option?: string[]

  /** Property description / Описание свойства */
  description?: string
}

/**
 * List of TypeScript property descriptors.
 *
 * Список дескрипторов свойств TypeScript.
 */
export type DesignTypescriptProps = DesignTypescriptProp[]

/**
 * TypeScript module item containing type name and property definitions.
 *
 * Элемент модуля TypeScript, содержащий имя типа и определения свойств.
 */
export type DesignTypescriptItem = {
  /** TypeScript item or interface name / Имя элемента или интерфейса TypeScript */
  name: string

  /** Array of properties / Массив свойств */
  props: DesignTypescriptProps
}

/**
 * List of TypeScript module items.
 *
 * Список элементов модулей TypeScript.
 */
export type DesignTypescriptList = DesignTypescriptItem[]

/**
 * Design types cache file entry with path, code content, and MD5 hash.
 *
 * Запись файла кэша типов дизайна с путем, содержимым кода и хэшем MD5.
 */
export type DesignTypesItem = {
  /** Relative file path / Относительный путь к файлу */
  path: string

  /** File content string / Строка содержимого файла */
  content: string

  /** MD5 hash checksum / Контрольная сумма хэша MD5 */
  md5?: string
}

/**
 * List of design types file entries.
 *
 * Список записей файлов типов дизайна.
 */
export type DesignTypesList = DesignTypesItem[]

/**
 * Design types prompt cache item for AI document generation.
 *
 * Элемент кэша промптов типов дизайна для генерации AI-документации.
 */
export type DesignTypesPromptCacheItem = {
  /** Relative file path / Относительный путь к файлу */
  path: string

  /** MD5 hash checksum / Контрольная сумма хэша MD5 */
  md5: string

  /** Document title / Название документа */
  name: string

  /** Document description / Описание документа */
  description: string
}

/**
 * List of design types prompt cache items.
 *
 * Список элементов кэша промптов типов дизайна.
 */
export type DesignTypesPromptCacheList = DesignTypesPromptCacheItem[]

/**
 * Prompt data payload containing document title and description.
 *
 * Объект данных промпта, содержащий заголовок и описание документа.
 */
export type DesignTypesPromptData = {
  /** Document title / Название документа */
  name?: string

  /** Document description / Описание документа */
  description?: string
}

/**
 * Result of design types prompt generation with prompt string and cache status.
 *
 * Результат генерации промпта типов дизайна со строкой промпта и статусом кэша.
 */
export type DesignTypesPromptResult = {
  /** Formatted prompt rule string / Отформатированная строка правила промпта */
  prompt?: string

  /** Flag indicating whether the cache was modified / Флаг, указывающий, был ли изменен кэш */
  isChanged: boolean
}

/**
 * Design MCP resource item descriptor for Model Context Protocol servers.
 *
 * Дескриптор ресурса MCP дизайна для серверов Model Context Protocol.
 */
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

/**
 * List of design MCP resource items.
 *
 * Список элементов ресурсов MCP дизайна.
 */
export type DesignMcpResources = DesignMcpResourceItem[]

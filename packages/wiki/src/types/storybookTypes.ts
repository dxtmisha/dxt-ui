/**
 * Types for Storybook/ Типы для Storybook
 */
export enum StorybookControl {
  text = 'text',
  string = 'string',
  number = 'number',
  boolean = 'boolean',
  select = 'select',
  array = 'array',
  object = 'object'
}

/**
 * Categories for Storybook controls/ Категории для элементов управления Storybook
 */
export enum StorybookCategory {
  adaptive = 'Adaptive',
  status = 'Status',
  value = 'Values',
  style = 'Styles'
}

/**
 * Type for Storybook controls/ Типы для элементов управления Storybook
 */
export type StorybookArgsItemSummary = {
  summary: string
  detail?: string
}

/**
 * Type for Storybook arguments/ Типы для аргументов Storybook
 */
export type StorybookArgsItem = {
  /** Control type for Storybook value/ Тип водимого значения для Storybook */
  control?: StorybookControl | ({ type: StorybookControl } & Record<string, any>)

  /** Options for selection in Storybook/ Опции для выбора в Storybook */
  options?: any[] | Record<string, any>

  /** Table with metadata for Storybook/ Таблица с метаданными для Storybook */
  table?: {
    /** Category in Storybook table/ Категория в таблице Storybook */
    category?: string
    /** Default value in Storybook table/ Значение по умолчанию в таблице Storybook */
    defaultValue?: StorybookArgsItemSummary
    /** Type in Storybook table/ Тип значения в таблице Storybook */
    type?: StorybookArgsItemSummary
  }

  /** Description for Storybook/ Описание для Storybook */
  description?: string
}
export type StorybookArgs = Record<string, StorybookArgsItem | undefined>
export type StorybookArgsValue = Record<string, any>
export type StorybookArgsProp = (
  defaultValue?: any,
  props?: string[]
) => StorybookArgsItem
export type StorybookArgsProps = Record<string, StorybookArgsProp>

/**
 * Description of a component/ Описание компонента
 */
export type StorybookArgsToDescription = string | Record<string, string>
export type StorybookArgsToDescriptionMdx = string | Record<string, string | any>

/**
 * List of component features/ Перечень возможностей компонента
 */
export type StorybookArgsToPossibilities = string[] | Record<string, string[]>

/**
 * Options for a Storybook control by type/ Настройки для элемента управления Storybook по типу
 */
export type StorybookArgsToOptionsByType = {
  /** Category for the Storybook table/ Категория для таблицы Storybook */
  category?: StorybookCategory
  /** Type/ Тип */
  type?: StorybookControl | string | string[]
  /** Default value/ Значение по умолчанию */
  defaultValue?: string | number | boolean
  /** Value for the argument/ Значение для аргумента */
  value?: string | number | boolean
  /** Description for the argument/ Описание для аргумента */
  description?: StorybookArgsToDescription
  /** Options for select/ Опции для выбора */
  options?: (string | number)[] | Record<string, string>
  /** Minimum value/ Минимальное значение */
  min?: number
  /** Maximum value/ Максимальное значение */
  max?: number
}

/**
 * A Storybook control with its options/ Элемент управления Storybook с его настройками
 */
export type StorybookArgsToItem = {
  /** Type for Storybook value/ Тип водимого значения для Storybook */
  type: StorybookControl
  /** Options for the control/ Настройки для элемента управления */
  options: StorybookArgsToOptionsByType
}

/**
 * A list of Storybook controls/ Список элементов управления Storybook
 */
export type StorybookArgsToList = Record<string, StorybookArgsToItem>

/**
 * Represents a component property for Storybook/ Представляет свойство компонента для Storybook
 */
export type StorybookProp = {
  /** Name of the property/ Название свойства */
  name: string
  /** Type of the property/ Тип свойства */
  type: string
  /** Options for selection in Storybook/ Опции для выбора в Storybook */
  option?: (string | number)[]
}

/**
 * A list of component properties for Storybook/ Список свойств компонента для Storybook
 */
export type StorybookProps = StorybookProp[]

/**
 * Represents a story for a component in Storybook/ Представляет историю для компонента в Storybook
 */
export type StorybookComponentsDescriptionStory = {
  /** Name of the story/ Название истории */
  name: StorybookArgsToDescription
  /** Components used in the story/ Компоненты, используемые в истории */
  components?: string
  /** Setup script for the story/ Скрипт настройки для истории */
  setup?: string
  /** Template for the story/ Шаблон для истории */
  template: string
}

/**
 * Represents the description of a component for Storybook/ Представляет описание компонента для Storybook
 */
export type StorybookComponentsDescriptionItem = {
  /** Name of the component/ Название компонента */
  name: string
  /** Description of the component/ Описание компонента */
  description: StorybookArgsToDescription
  /** List of additional descriptions for component arguments/ Список дополнительных описаний для аргументов компонента */
  descriptions?: Record<string, StorybookArgsToDescriptionMdx>
  /** Component features/ Возможности компонента */
  possibilities?: StorybookArgsToPossibilities

  /** Example of rendering the component/ Пример рендеринга компонента */
  render?: string
  /** Additional information for import/ Дополнительная информация для импорта */
  import?: string
  /** Additional examples of component usage/ Дополнительные примеры использования компонента */
  stories?: StorybookComponentsDescriptionStory[]

  /** Documentation for the component/ Документация для компонента */
  documentation?: {
    import?: string
    body?: string
    events?: string
    expose?: string
    slots?: string
  }
}

/**
 * A list of component descriptions for Storybook/ Список описаний компонентов для Storybook
 */
export type StorybookComponentsDescription = StorybookComponentsDescriptionItem[]

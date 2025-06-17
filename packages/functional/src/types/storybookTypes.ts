export enum StorybookControl {
  text = 'text',
  string = 'string',
  number = 'number',
  boolean = 'boolean',
  select = 'select',
  array = 'array',
  object = 'object'
}

export enum StorybookCategory {
  adaptive = 'Adaptive',
  status = 'Status',
  value = 'Values',
  style = 'Styles'
}

export type StorybookArgsItemSummary = {
  summary: string
  detail?: string
}
export type StorybookArgsItem = {
  /** Control type for Storybook value / Тип водимого значения для Storybook */
  control?: StorybookControl | ({ type: StorybookControl } & Record<string, any>)

  /** Options for selection in Storybook / Опции для выбора в Storybook */
  options?: any[] | Record<string, any>

  /** Table with metadata for Storybook / Таблица с метаданными для Storybook */
  table?: {
    /** Category in Storybook table / Категория в таблице Storybook */
    category?: string
    /** Default value in Storybook table / Значение по умолчанию в таблице Storybook */
    defaultValue?: StorybookArgsItemSummary
    /** Type in Storybook table / Тип значения в таблице Storybook */
    type?: StorybookArgsItemSummary
  }

  /** Description for Storybook / Описание для Storybook */
  description?: string
}
export type StorybookArgs = Record<string, StorybookArgsItem | undefined>
export type StorybookArgsValue = Record<string, any>
export type StorybookArgsProp = (
  defaultValue?: any,
  props?: string[]
) => StorybookArgsItem
export type StorybookArgsProps = Record<string, StorybookArgsProp>

export type StorybookArgsToDescription = string | Record<string, string>
export type StorybookArgsToOptionsByType = {
  /** Category for the Storybook table / Категория для таблицы Storybook */
  category?: StorybookCategory
  /** Type */
  type?: StorybookControl | string | string[]
  /** Default value / Значение по умолчанию */
  defaultValue?: string | boolean
  /** Description for the argument / Описание для аргумента */
  description?: StorybookArgsToDescription
  /** Options for select / Опции для выбора */
  options?: string[] | Record<string, string>
  /** Minimum value / Минимальное значение */
  min?: number
  /** Maximum value / Максимальное значение */
  max?: number
}

export type StorybookArgsToItem = {
  /** Type for Storybook value / Тип водимого значения для Storybook */
  type: StorybookControl
  /** Options for Storybook table / Категория в таблице Storybook */
  options: StorybookArgsToOptionsByType
}
export type StorybookArgsToList = Record<string, StorybookArgsToItem>

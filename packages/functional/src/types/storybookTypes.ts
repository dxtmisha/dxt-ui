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
    defaultValue?: {
      /** Summary of default value in Storybook table / Значение по умолчанию в таблице Storybook */
      summary: any
      /**
       * Detail of default value in Storybook table /
       * Подробное описание значения по умолчанию в таблице Storybook
       */
      detail?: string
    }
    /** Type in Storybook table / Тип значения в таблице Storybook */
    type?: {
      /** Summary of type in Storybook table / Краткое описание типа в таблице Storybook */
      summary: string
      /** Detail of type in Storybook table / Подробное описание типа в таблице Storybook */
      detail?: string
    }
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

export type StorybookArgsToBoolean = {
  /** Category for the Storybook table / Категория для таблицы Storybook */
  category: StorybookCategory
  /** Default value (true or false) / Значение по умолчанию (true или false) */
  defaultValue: boolean
  /** Description for the argument / Описание для аргумента */
  description?: string
}
export type StorybookArgsToNumber = {
  /** Category for the Storybook table / Категория для таблицы Storybook */
  category: StorybookCategory
  /** Default value (as string) / Значение по умолчанию (строкой) */
  defaultValue?: string
  /** Description for the argument / Описание для аргумента */
  description?: string
  /** Minimum value / Минимальное значение */
  min?: number
  /** Maximum value / Максимальное значение */
  max?: number
}
export type StorybookArgsToObjectOrArray = {
  /** Category for the Storybook table / Категория для таблицы Storybook */
  category: StorybookCategory
  /**
   * Type of object or array (default: 'object') /
   * Тип объекта или массива (по умолчанию 'object')
   */
  type: StorybookControl.object | StorybookControl.array
  /** Description for the argument / Описание для аргумента */
  description?: string
}
export type StorybookArgsToSelect = {
  /** Category for the Storybook table / Категория для таблицы Storybook */
  category: StorybookCategory
  /** Options for select (array or object) / Опции для выбора (массив или объект) */
  options?: string[] | Record<string, string>
  /** Type (string or array) / Тип (строка или массив) */
  type?: string | string[]
  /** Default value / Значение по умолчанию */
  defaultValue?: string
  /** Description for the argument / Описание для аргумента */
  description?: string
}
export type StorybookArgsToString = {
  /** Category for the Storybook table / Категория для таблицы Storybook */
  category: StorybookCategory
  /** Default value (as string) / Значение по умолчанию (строкой) */
  defaultValue?: string
  /** Description for the argument / Описание для аргумента */
  description?: string
  /** Type (default: 'string') / Тип (по умолчанию 'string') */
  type: StorybookControl
}
export type StorybookArgsToOptions =
  StorybookArgsToBoolean |
  StorybookArgsToNumber |
  StorybookArgsToObjectOrArray |
  StorybookArgsToSelect |
  StorybookArgsToString
export type StorybookArgsToOptionsByType<T extends StorybookControl> =
  T extends StorybookControl.text | StorybookControl.string
    ? StorybookArgsToString
    : T extends StorybookControl.number
      ? StorybookArgsToNumber
      : T extends StorybookControl.boolean
        ? StorybookArgsToBoolean
        : T extends StorybookControl.object | StorybookControl.array
          ? StorybookArgsToObjectOrArray
          : T extends StorybookControl.select
            ? StorybookArgsToSelect
            : never

export type StorybookArgsToItem<T extends StorybookControl> = {
  /** Type for Storybook value / Тип водимого значения для Storybook */
  type: T
  /** Options for Storybook table / Категория в таблице Storybook */
  options: StorybookArgsToOptionsByType<T>
}
export type StorybookArgsToList = Record<string, StorybookArgsToItem<StorybookControl>>

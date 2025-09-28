/** Types for Storybook / Типы для Storybook */
export enum StorybookControl {
  /** Text input control / Контрол ввода текста */
  text = 'text',
  /** String input control / Контрол ввода строки */
  string = 'string',
  /** Number input control / Контрол ввода числа */
  number = 'number',
  /** Boolean checkbox control / Контрол чекбокса */
  boolean = 'boolean',
  /** Select dropdown control / Контрол выпадающего списка */
  select = 'select',
  /** Array input control / Контрол ввода массива */
  array = 'array',
  /** Object input control / Контрол ввода объекта */
  object = 'object'
}

/** Categories for Storybook controls / Категории для элементов управления Storybook */
export enum StorybookCategory {
  /** Adaptive design category / Категория адаптивного дизайна */
  adaptive = 'Adaptive',
  /** Status category / Категория статуса */
  status = 'Status',
  /** Values category / Категория значений */
  value = 'Values',
  /** Styles category / Категория стилей */
  style = 'Styles',
  /** Technical category / Техническая категория */
  technical = 'Technical',
  /** Hook category / Категория хуков */
  hook = 'Hook'
}

/** Type for Storybook controls / Типы для элементов управления Storybook */
export type StorybookArgsItemSummary = {
  /** Summary text / Краткое описание */
  summary: string
  /** Detailed description / Подробное описание */
  detail?: string
}

/** Type for Storybook arguments / Типы для аргументов Storybook */
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

/** Record of Storybook arguments / Запись аргументов Storybook */
export type StorybookArgs = Record<string, StorybookArgsItem | undefined>

/** Record of Storybook argument values / Запись значений аргументов Storybook */
export type StorybookArgsValue = Record<string, any>

/** Function type for Storybook argument properties / Тип функции для свойств аргументов Storybook */
export type StorybookArgsProp = (
  defaultValue?: any,
  props?: string[]
) => StorybookArgsItem

/** Record of Storybook argument property functions / Запись функций свойств аргументов Storybook */
export type StorybookArgsProps = Record<string, StorybookArgsProp>

/** Description of a component / Описание компонента */
export type StorybookArgsToDescription = string | Record<string, string>

/** MDX description of a component / MDX описание компонента */
export type StorybookArgsToDescriptionMdx = string | Record<string, string | any>

/** List of component features / Перечень возможностей компонента */
export type StorybookArgsToPossibilities = string[] | Record<string, string[]>

/** Options for a Storybook control by type / Настройки для элемента управления Storybook по типу */
export type StorybookArgsToOptionsByType = {
  /** Category for the Storybook table / Категория для таблицы Storybook */
  category?: StorybookCategory
  /** Control type / Тип контрола */
  type?: StorybookControl | string | string[]
  /** Default value / Значение по умолчанию */
  defaultValue?: string | number | boolean
  /** Value for the argument / Значение для аргумента */
  value?: any
  /** Description for the argument / Описание для аргумента */
  description?: StorybookArgsToDescription
  /** Options for select / Опции для выбора */
  options?: (string | number)[] | Record<string, string>
  /** Minimum value / Минимальное значение */
  min?: number
  /** Maximum value / Максимальное значение */
  max?: number
  /** Sorting order / Порядок сортировки */
  order?: number
}

/** A Storybook control with its options / Элемент управления Storybook с его настройками */
export type StorybookArgsToItem = {
  /** Type for Storybook value / Тип водимого значения для Storybook */
  type: StorybookControl
  /** Options for the control / Настройки для элемента управления */
  options: StorybookArgsToOptionsByType
}

/** A list of Storybook controls / Список элементов управления Storybook */
export type StorybookArgsToList = Record<string, StorybookArgsToItem>

/** Represents a component property for Storybook / Представляет свойство компонента для Storybook */
export type StorybookProp = {
  /** Name of the property / Название свойства */
  name: string
  /** Type of the property / Тип свойства */
  type: string
  /** Options for selection in Storybook / Опции для выбора в Storybook */
  option?: (string | number)[]
}

/** A list of component properties for Storybook / Список свойств компонента для Storybook */
export type StorybookProps = StorybookProp[]

/** Represents a story for a component in Storybook / Представляет историю для компонента в Storybook */
export type StorybookComponentsDescriptionStory = {
  /** Unique identifier for the story / Уникальный идентификатор истории */
  id: string
  /** Name of the story / Название истории */
  name: StorybookArgsToDescription
  /** Components used in the story / Компоненты, используемые в истории */
  components?: string[]
  /** Setup script for the story / Скрипт настройки для истории */
  setup?: string
  /** Template for the story / Шаблон для истории */
  template: string
  /**
   * Name of the component property to which the description belongs /
   * Название свойства компонента, которому принадлежит описание
   */
  propsName?: string | string[]
}

/** Represents the description of a component for Storybook / Представляет описание компонента для Storybook */
export type StorybookComponentsDescriptionItem = {
  /** Name of the component / Название компонента */
  name: string
  /** Description of the component / Описание компонента */
  description: StorybookArgsToDescription
  /** Component features / Возможности компонента */
  possibilities?: StorybookArgsToPossibilities

  /** Example of rendering the component / Пример рендеринга компонента */
  render?: string
  /** Additional information for import / Дополнительная информация для импорта */
  import?: string[]
  /** Additional examples of component usage / Дополнительные примеры использования компонента */
  stories?: StorybookComponentsDescriptionStory[]

  /** Documentation for the component / Документация для компонента */
  documentation?: {
    /** Import documentation / Документация импорта */
    import?: string
    /** Body documentation / Документация тела */
    body?: string
    /** Events documentation / Документация событий */
    events?: string
    /** Expose documentation / Документация экспозиции */
    expose?: string
    /** Slots documentation / Документация слотов */
    slots?: string
  }
}

/** A list of component descriptions for Storybook / Список описаний компонентов для Storybook */
export type StorybookComponentsDescription = StorybookComponentsDescriptionItem[]

/** MDX component item for Storybook / MDX элемент компонента для Storybook */
export type StorybookComponentsMdxItem = {
  /** Name of the component / Название компонента */
  name: string
  /** List of additional descriptions for component arguments / Список дополнительных описаний для аргументов компонента */
  descriptions?: Record<string, StorybookArgsToDescriptionMdx>
}

/** List of MDX components for Storybook / Список MDX компонентов для Storybook */
export type StorybookComponentsMdx = StorybookComponentsMdxItem[]

/**
 * Basic metadata for a Web-Types item (name, description, and documentation URL).
 *
 * Базовая метаинформация для элемента Web-Types (имя, описание и URL документации).
 */
export type WebTypesInfo = {
  /** Item name / Имя элемента */
  'name': string

  /** Item description / Описание элемента */
  'description'?: string

  /** Documentation URL / URL документации */
  'doc-url'?: string
}

/**
 * Property definition for Web-Types (e.g. event arguments or slot scope).
 *
 * Определение свойства для Web-Types (например, аргументы событий или область видимости слота).
 */
export type WebTypesProperty = {
  /** Property name / Имя свойства */
  name: string

  /** Property type expression / Выражение типа свойства */
  type?: string

  /** Property description / Описание свойства */
  description?: string
}

/**
 * List of Web-Types property definitions.
 *
 * Список определений свойств Web-Types.
 */
export type WebTypesProperties = WebTypesProperty[]

/**
 * Kind of the attribute value in Web-Types.
 *
 * Вид значения атрибута в Web-Types.
 */
export type WebTypesAttributeKind = 'expression' | 'plainText' | 'string'

/**
 * HTML/Vue attribute definition for a Web-Types tag.
 *
 * Определение HTML/Vue атрибута для тега Web-Types.
 */
export type WebTypesAttributeItem
  = WebTypesInfo
    & {
      /** Default attribute value / Значение атрибута по умолчанию */
      default?: string

      /** Attribute value kind and type / Вид и тип значения атрибута */
      value?: {
        /** Value kind / Вид значения */
        kind?: WebTypesAttributeKind

        /** Value type / Тип значения */
        type?: string
      }
    }

/**
 * List of Web-Types attribute definitions.
 *
 * Список определений атрибутов Web-Types.
 */
export type WebTypesAttributes = WebTypesAttributeItem[]

/**
 * Event definition for a Web-Types component tag.
 *
 * Определение события для тега компонента Web-Types.
 */
export type WebTypesEventItem
  = WebTypesInfo
    & {
      /** List of event arguments / Список аргументов события */
      arguments?: WebTypesProperties

      /** Event type string / Строка типа события */
      type?: string
    }

/**
 * List of Web-Types event definitions.
 *
 * Список определений событий Web-Types.
 */
export type WebTypesEvents = WebTypesEventItem[]

/**
 * Slot definition for a Web-Types component tag.
 *
 * Определение слота для тега компонента Web-Types.
 */
export type WebTypesSlotItem
  = WebTypesInfo
    & {
      /** Scoped slot properties / Свойства слота с ограниченной областью видимости (scoped) */
      'vue-properties'?: WebTypesProperties
    }

/**
 * List of Web-Types slot definitions.
 *
 * Список определений слотов Web-Types.
 */
export type WebTypesSlots = WebTypesSlotItem[]

/**
 * Tag (component) definition for Web-Types.
 *
 * Определение тега (компонента) для Web-Types.
 */
export type WebTypesTagItem
  = WebTypesInfo
    & {
      /** Source module and export symbol / Исходный модуль и экспортируемый символ */
      source?: {
        /** Module specifier / Спецификатор модуля */
        module?: string

        /** Exported symbol name / Имя экспортируемого символа */
        symbol?: string
      }

      /** Component attributes / Атрибуты компонента */
      attributes?: WebTypesAttributes

      /** Component events / События компонента */
      events?: WebTypesEvents

      /** Component slots / Слоты компонента */
      slots?: WebTypesSlots
    }

/**
 * List of Web-Types tag definitions.
 *
 * Список определений тегов Web-Types.
 */
export type WebTypesTags = WebTypesTagItem[]

/**
 * Prop definition for a Vue component in Web-Types.
 *
 * Определение входного свойства (prop) для Vue-компонента в Web-Types.
 */
export type WebTypesPropItem = WebTypesInfo & {
  /** Default prop value / Значение свойства по умолчанию */
  default?: string

  /** TypeScript prop type / TypeScript тип свойства */
  type?: string
}

/**
 * Vue component definition for Web-Types format.
 *
 * Определение Vue-компонента для формата Web-Types.
 */
export type WebTypesVueComponentItem = WebTypesInfo & {
  /** Source module and symbol / Исходный модуль и символ */
  source?: {
    /** Module path / Путь к модулю */
    module?: string

    /** Exported symbol name / Имя экспортируемого символа */
    symbol?: string
  }

  /** Component props list / Список входных свойств (props) компонента */
  props?: WebTypesPropItem[]

  /** Component slots list / Список слотов компонента */
  slots?: WebTypesSlots

  /** JavaScript / events metadata / Метаданные JavaScript и событий */
  js?: {
    /** Component emitted events / Эмитируемые события компонента */
    events?: WebTypesEventItem[]
  }
}

/**
 * Root schema structure for Web-Types JSON document.
 *
 * Корневая структура схемы для JSON-документа Web-Types.
 */
export type WebTypesVueJson = {
  /** JSON schema URI / URI JSON-схемы */
  '$schema': string

  /** Target framework name / Название целевого фреймворка */
  'framework': 'vue'

  /** Package name / Название пакета */
  'name': string

  /** Package version / Версия пакета */
  'version': string

  /** JavaScript types syntax / Синтаксис типов JavaScript */
  'js-types-syntax'?: 'typescript'

  /** HTML / Vue component contributions container / Контейнер компонентов HTML / Vue */
  'contributions': {
    /** HTML contributions / Вклады HTML */
    html: {
      /** Description markup format / Формат разметки описаний */
      'description-markup': 'markdown'

      /** List of Vue components / Список Vue-компонентов */
      'vue-components': WebTypesVueComponentItem[]
    }
  }
}

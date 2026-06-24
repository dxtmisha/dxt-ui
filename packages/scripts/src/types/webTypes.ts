/**
 * Basic information for a Web Types item.
 *
 * Базовая информация для элемента Web Types.
 */
export type WebTypesInfo = {
  'name': string
  'description'?: string
  'doc-url'?: string
}

/**
 * Property definition (e.g. for event arguments or slot scope).
 *
 * Определение свойства (например, для аргументов события или области видимости слота).
 */
export type WebTypesProperty = {
  name: string
  type?: string
  description?: string
}
export type WebTypesProperties = WebTypesProperty[]

/**
 * Kind of the attribute value.
 *
 * Вид значения атрибута.
 */
export type WebTypesAttributeKind = 'expression' | 'plainText' | 'string'

/**
 * Attribute definition for a tag.
 *
 * Определение атрибута для тега.
 */
export type WebTypesAttributeItem
  = WebTypesInfo
    & {
      default?: string
      value?: {
        kind?: WebTypesAttributeKind
        type?: string
      }
    }
export type WebTypesAttributes = WebTypesAttributeItem[]

/**
 * Event definition for a tag.
 *
 * Определение события для тега.
 */
export type WebTypesEventItem
  = WebTypesInfo
    & {
      arguments?: WebTypesProperties
      type?: string
    }
export type WebTypesEvents = WebTypesEventItem[]

/**
 * Slot definition for a tag.
 *
 * Определение слота для тега.
 */
export type WebTypesSlotItem
  = WebTypesInfo
    & {
      'vue-properties'?: WebTypesProperties
    }
export type WebTypesSlots = WebTypesSlotItem[]

/**
 * Tag (component) definition.
 *
 * Определение тега (компонента).
 */
export type WebTypesTagItem
  = WebTypesInfo
    & {
      source?: {
        module?: string
        symbol?: string
      }
      attributes?: WebTypesAttributes
      events?: WebTypesEvents
      slots?: WebTypesSlots
    }
export type WebTypesTags = WebTypesTagItem[]

/**
 * Prop definition for a Vue component.
 *
 * Определение свойства для Vue-компонента.
 */
export type WebTypesPropItem = WebTypesInfo & {
  default?: string
  type?: string
}

/**
 * Vue component definition for Web-Types.
 *
 * Определение Vue-компонента для Web-Types.
 */
export type WebTypesVueComponentItem = WebTypesInfo & {
  source?: {
    module?: string
    symbol?: string
  }
  props?: WebTypesPropItem[]
  slots?: WebTypesSlots
  js?: {
    events?: WebTypesEventItem[]
  }
}

/**
 * Root object for Web Types JSON.
 *
 * Корневой объект для JSON Web Types.
 */
export type WebTypesVueJson = {
  $schema: string
  framework: 'vue'
  name: string
  version: string
  'js-types-syntax'?: 'typescript'
  contributions: {
    html: {
      'description-markup': 'markdown'
      'vue-components': WebTypesVueComponentItem[]
    }
  }
}

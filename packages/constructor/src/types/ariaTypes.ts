import type { RoleType } from './roleTypes'

/** ARIA true or false type/ ARIA тип true или false */
export type AriaTrueOrFalse = 'true' | 'false'

/** ARIA list type/ ARIA тип списка */
export type AriaList = {
  /** Element ID/ ID элемента */
  'id'?: string

  /** ARIA role type/ Тип ARIA роли */
  'role'?: RoleType

  /**
   * ARIA controls attribute - identifies controlled element/
   * Атрибут ARIA controls - идентифицирует управляемый элемент
   */
  'aria-controls'?: string

  /**
   * ARIA describedby attribute - identifies describing element/
   * Атрибут ARIA describedby - идентифицирует описывающий элемент
   */
  'aria-describedby'?: string

  /**
   * ARIA expanded state attribute/
   * Атрибут ARIA состояния развёрнутости
   */
  'aria-expanded'?: string

  /**
   * ARIA haspopup attribute - indicates the availability of a popup element/
   * Атрибут ARIA haspopup - указывает на наличие всплывающего элемента
   */
  'aria-haspopup'?: 'dialog' | 'menu' | 'listbox' | 'tree' | 'grid'

  /**
   * ARIA hidden attribute - indicates whether the element is exposed to an accessibility API/
   * Атрибут ARIA hidden - указывает, открыт ли элемент для API доступности
   */
  'aria-hidden'?: AriaTrueOrFalse

  /**
   * ARIA label attribute - defines a string value that labels the current element/
   * Атрибут ARIA label - определяет строковое значение, которое обозначает текущий элемент
   */
  'aria-label'?: string

  /**
   * ARIA labelledby attribute - identifies labeling element/
   * Атрибут ARIA labelledby - идентифицирует обозначающий элемент
   */
  'aria-labelledby'?: string

  /**
   * ARIA modal attribute - indicates modal state/
   * Атрибут ARIA modal - указывает модальное состояние
   */
  'aria-modal'?: AriaTrueOrFalse

  /**
   * ARIA valuenow, valuemin, valuemax attributes - define current, minimum, and maximum values for range widgets/
   * Атрибуты ARIA valuenow, valuemin, valuemax - определяют текущие, минимальные и максимальные значения для виджетов диапазона
   */
  'aria-valuenow'?: string | number

  /**
   * ARIA valuenow, valuemin, valuemax attributes - define current, minimum, and maximum values for range widgets/
   * Атрибуты ARIA valuenow, valuemin, valuemax - определяют текущие, минимальные и максимальные значения для виджетов диапазона
   */
  'aria-valuemin'?: string | number

  /**
   * ARIA valuenow, valuemin, valuemax attributes - define current, minimum, and maximum values for range widgets/
   * Атрибуты ARIA valuenow, valuemin, valuemax - определяют текущие, минимальные и максимальные значения для виджетов диапазона
   */
  'aria-valuemax'?: string | number

  /**
   * ARIA live attribute - indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region/
   * Атрибут ARIA live - указывает, что элемент будет обновляться, и описывает типы обновлений, которые пользовательские агенты, вспомогательные технологии и пользователь могут ожидать от живого региона
   */
  'aria-live'?: 'off' | 'polite' | 'assertive'
}

/** Basic ARIA role props/ Базовые ARIA пропсы роли */
export interface AriaRolePropsInclude {
  role?: RoleType
}

/**
 * ARIA label prop/
 * ARIA проп label
 */
export interface AriaLabelPropsInclude {
  ariaLabel?: string
}

/**
 * ARIA description prop/
 * ARIA проп description
 */
export interface AriaDescriptionPropsInclude {
  ariaDescription?: string
}

/**
 * ARIA haspopup prop/
 * ARIA проп haspopup
 */
export interface AriaHaspopupPropsInclude {
  ariaHaspopup?: AriaList['aria-haspopup']
}

/**
 * ARIA live prop/
 * ARIA проп live
 */
export interface AriaLivePropsInclude {
  ariaLive?: AriaList['aria-live']
}

/**
 * ARIA props with labelledby and describedby/
 * ARIA пропсы с labelledby и describedby
 */
export interface AriaByPropsInclude {
  ariaLabelledby?: string
  ariaDescribedby?: string
}

/**
 * ARIA role props with labelledby and describedby/
 * ARIA пропсы роли с labelledby и describedby
 */
export interface AriaRoleByPropsInclude extends AriaRolePropsInclude, AriaByPropsInclude {
}

/**
 * ARIA control role props with controls and expanded/
 * ARIA пропсы роли управления с controls и expanded
 */
export interface AriaRoleControlPropsInclude extends AriaRolePropsInclude, AriaHaspopupPropsInclude {
  id?: string
  ariaControls?: string
  ariaHaspopup?: AriaList['aria-haspopup']
  ariaExpanded?: string
}

/**
 * Complete ARIA props interface/
 * Полный интерфейс ARIA пропсов
 */
export interface AriaAll extends AriaLabelPropsInclude,
  AriaDescriptionPropsInclude,
  AriaHaspopupPropsInclude,
  AriaLivePropsInclude,
  AriaByPropsInclude,
  AriaRoleByPropsInclude,
  AriaRoleControlPropsInclude {
}

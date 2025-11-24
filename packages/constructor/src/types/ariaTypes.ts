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
   * ARIA labelledby attribute - identifies labeling element/
   * Атрибут ARIA labelledby - идентифицирует обозначающий элемент
   */
  'aria-labelledby'?: string

  /**
   * ARIA modal attribute - indicates modal state/
   * Атрибут ARIA modal - указывает модальное состояние
   */
  'aria-modal'?: AriaTrueOrFalse
}

/** Basic ARIA role props/ Базовые ARIA пропсы роли */
export interface AriaRolePropsInclude {
  role?: RoleType
}

/**
 * ARIA role props with labelledby and describedby/
 * ARIA пропсы роли с labelledby и describedby
 */
export interface AriaRoleByPropsInclude extends AriaRolePropsInclude {
  ariaLabelledby?: string
  ariaDescribedby?: string
}
export interface AriaRoleControlPropsInclude extends AriaRolePropsInclude {
  id?: string
  ariaControls?: string
  ariaExpanded?: string
}

/**
 * Complete ARIA props interface/
 * Полный интерфейс ARIA пропсов
 */
export interface AriaAll extends AriaRoleByPropsInclude, AriaRoleControlPropsInclude {
}

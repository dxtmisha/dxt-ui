type ScrollStickyPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type ScrollStickyPropsBasic = {
  /** Target element/selector to sync scroll / Целевой элемент/селектор для синхронизации прокрутки */
  target?: string | HTMLElement
  /** Optional header element/selector to sync scroll / Необязательный элемент/селектор шапки для синхронизации прокрутки */
  header?: string | HTMLElement
  /** Fixed width configuration for scrollbar / Конфигурация фиксированной ширины для полосы прокрутки */
  fixWidth?: string
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type ScrollStickyProps = ScrollStickyPropsBasic & ScrollStickyPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsScrollSticky = {
  target: undefined,
  header: undefined,
  fixWidth: undefined,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}

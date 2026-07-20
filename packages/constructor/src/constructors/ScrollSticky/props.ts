/**
 * Shape of tokens for ScrollSticky component. /
 * Структура токенов для компонента ScrollSticky.
 */
type ScrollStickyPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/**
 * Basic props for ScrollSticky component. /
 * Базовые свойства для компонента ScrollSticky.
 */
export type ScrollStickyPropsBasic = {
  /** Whether the scrollbar is visible / Виден ли скроллбар */
  visible?: boolean
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
  visible: true,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}

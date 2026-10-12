/** Ripple properties controlled by design tokens / Свойства Ripple, управляемые токенами дизайна */
export type RipplePropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/** Basic properties of the Ripple component / Базовые свойства компонента Ripple */
export type RipplePropsBasic = {
  /** Whether the ripple is disabled / Отключён ли эффект волны */
  disabled?: boolean
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type RippleProps = RipplePropsBasic & RipplePropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsRipple = {
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}

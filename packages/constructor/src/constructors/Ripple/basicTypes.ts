/**
 * Interface for describing which components need to be connected for Ripple work /
 * Интерфейс для описания, какие компоненты надо подключить для работы Ripple
 */
export type RippleComponentInclude = {
  /** Ripple component configuration / Конфигурация компонента эффекта волны */
  ripple?: object
}

/**
 * Interface for checking ripple properties / Интерфейс для проверки свойств эффекта волны
 */
export type RipplePropsInclude = {
  /** Disabled state / Состояние отключения */
  disabled?: boolean
  /** Readonly state / Состояние только для чтения */
  readonly?: boolean
  /** Loading state / Состояние загрузки */
  loading?: unknown
}

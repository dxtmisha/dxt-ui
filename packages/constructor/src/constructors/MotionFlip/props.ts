/**
 * Type describing style tokens.
 *
 * Тип, описывающий токены стиля.
 */
type MotionFlipPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/**
 * Interface representing incoming properties of the basic component.
 *
 * Интерфейс, представляющий входящие свойства базового компонента.
 */
export type MotionFlipPropsBasic = {
  /** Enables automatic DOM change detection / Включает автоматическое отслеживание изменений DOM */
  auto?: boolean
  /** Disables the FLIP animation / Отключает анимацию FLIP */
  disabled?: boolean
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type MotionFlipProps = MotionFlipPropsBasic & MotionFlipPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsMotionFlip: MotionFlipPropsBasic = {
  auto: true
}

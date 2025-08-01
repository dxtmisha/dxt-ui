interface MotionTransformPropsToken {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export interface MotionTransformPropsBasic {
  // TODO: Location for a custom property / Место для пользовательского свойства
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface MotionTransformProps extends MotionTransformPropsBasic, MotionTransformPropsToken {
}

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsMotionTransform = {
  // TODO: Location for a user-defined default value / Место для пользовательского значения по умолчанию
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}

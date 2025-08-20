interface MotionTransformPropsToken {
  // :type [!] System label / Системная метка
  section?: boolean
  position?: 'top' | 'bottom'
  adaptive?: 'plane'
  // :type [!] System label / Системная метка
}

export interface MotionTransformPropsBasic {
  // Status
  open?: boolean

  // Value
  ignore?: string
  ignoreSelector?: string

  // Style
  clickOpen?: boolean
  autoClose?: boolean
  animationShow?: boolean
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
  clickOpen: true,
  autoClose: true,
  animationShow: true,
  ...{
    // :default [!] System label / Системная метка
    position: 'top'
    // :default [!] System label / Системная метка
  }
}

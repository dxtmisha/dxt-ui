import type { ConstrItem } from '@dxtmisha/functional'

/** ComponentOutlet design token properties / Свойства дизайн-токенов ComponentOutlet */
export type ComponentOutletPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/** Basic properties of the ComponentOutlet component / Базовые свойства компонента ComponentOutlet */
export type ComponentOutletPropsBasic = {
  /** Registered component name in ComponentStorage / Название зарегистрированного компонента в ComponentStorage */
  name?: string
  /** Additional properties passed to the resolved component / Дополнительные свойства, передаваемые в разрешённый компонент */
  props?: ConstrItem
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type ComponentOutletProps = ComponentOutletPropsBasic & ComponentOutletPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsComponentOutlet = {
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}

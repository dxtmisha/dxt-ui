import { type BarsPropsBasic, defaultsBars } from '@dxt-ui/constructor/Bars'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

interface PropsToken {
  // :type [!] System label / Системная метка
  action?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export interface BarsProps extends BarsPropsBasic, PropsToken {
}

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsBars,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}

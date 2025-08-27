import { type MenuPropsBasic, defaultsMenu } from '@dxt-ui/constructor/Menu'

export const propsValues = {
  // :values [!] System label / Системная метка
  barsAdaptive: ['always']
  // :values [!] System label / Системная метка
}

interface PropsToken {
  // :type [!] System label / Системная метка
  barsAdaptive?: 'always'
  hideList?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export interface MenuProps extends MenuPropsBasic, PropsToken {
}

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsMenu,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}

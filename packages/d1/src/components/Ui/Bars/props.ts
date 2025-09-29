import { type BarsPropsBasic, defaultsBars } from '@dxtmisha/constructor/Bars'
import type { ButtonProps } from '../Button'

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
export interface BarsProps extends BarsPropsBasic<ButtonProps>, PropsToken {
}

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsBars,
  iconBack: 'arrow_back',
  iconClose: 'close',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}

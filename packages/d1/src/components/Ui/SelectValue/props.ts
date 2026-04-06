import { type SelectValuePropsBasic, defaultsSelectValue } from '@dxtmisha/constructor/SelectValue'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type SelectValueProps = SelectValuePropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsSelectValue,
  chipAttrs: {
    size: 'sm'
  },
  iconCancel: 'close_small',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}

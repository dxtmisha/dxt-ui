import { type SelectPropsBasic, defaultsSelect } from '@dxtmisha/constructor/Select'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

interface PropsToken {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export interface SelectProps extends SelectPropsBasic, PropsToken {
}

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsSelect,
  iconArrowDown: 'keyboard_arrow_down',
  iconSearch: 'search',
  menuAttrs: {
    itemAttrs: {
      dense: true
    }
  },
  inputSearchAttrs: {
    fieldAttrs: {
      size: 'sm'
    }
  },
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}

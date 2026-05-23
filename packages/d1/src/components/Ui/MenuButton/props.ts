import { type MenuButtonPropsBasic, defaultsMenuButton } from '@dxtmisha/constructor/MenuButton'

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
export type MenuButtonProps = MenuButtonPropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsMenuButton,
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

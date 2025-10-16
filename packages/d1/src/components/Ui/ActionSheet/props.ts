import { type ActionSheetPropsBasic, defaultsActionSheet } from '@dxtmisha/constructor/ActionSheet'

export const propsValues = {
  // :values [!] System label / Системная метка
  padding: ['sm', 'md', 'lg']
  // :values [!] System label / Системная метка
}

interface PropsToken {
  // :type [!] System label / Системная метка
  padding?: 'sm' | 'md' | 'lg'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export interface ActionSheetProps extends ActionSheetPropsBasic, PropsToken {
}

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsActionSheet,
  ...{
    // :default [!] System label / Системная метка
    padding: 'md'
    // :default [!] System label / Системная метка
  }
}

import type { WindowProps } from '../Window'
import type { BarsProps } from '../Bars'
import type { ActionsProps } from '../Actions'

import { type ActionSheetPropsBasic, defaultsActionSheet } from '@dxtmisha/constructor/ActionSheet'

export const propsValues = {
  // :values [!] System label / Системная метка
  padding: ['sm', 'md', 'lg'],
  width: ['sm', 'md', 'lg', 'auto']
  // :values [!] System label / Системная метка
}

export type PropsToken = {
  // :type [!] System label / Системная метка
  padding?: 'sm' | 'md' | 'lg'
  paddingByIndent?: boolean
  width?: 'sm' | 'md' | 'lg' | 'auto'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type ActionSheetProps = ActionSheetPropsBasic<WindowProps, BarsProps, ActionsProps> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsActionSheet,
  ...{
    // :default [!] System label / Системная метка
    paddingByIndent: true,
    width: 'md'
    // :default [!] System label / Системная метка
  }
}

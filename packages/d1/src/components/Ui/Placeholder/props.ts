import { type PlaceholderPropsBasic, defaultsPlaceholder } from '@dxtmisha/constructor/Placeholder'
import type { ImageProps } from '../Image'
import type { ActionsProps } from '../Actions'

export const propsValues = {
  // :values [!] System label / Системная метка
  size: ['sm', 'md', 'lg']
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  size?: 'sm' | 'md' | 'lg'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type PlaceholderProps = PlaceholderPropsBasic<
  ImageProps,
  ActionsProps
> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsPlaceholder,
  ...{
    // :default [!] System label / Системная метка
    size: 'md'
    // :default [!] System label / Системная метка
  }
}

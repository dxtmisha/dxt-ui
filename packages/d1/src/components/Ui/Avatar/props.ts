import { type AvatarPropsBasic, defaultsAvatar } from '@dxtmisha/constructor/Avatar'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  focus?: boolean
  disabled?: boolean
  readonly?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type AvatarProps = AvatarPropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsAvatar,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}

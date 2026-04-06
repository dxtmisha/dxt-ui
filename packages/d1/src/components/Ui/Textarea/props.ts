import { type TextareaPropsBasic, defaultsTextarea } from '@dxtmisha/constructor/Textarea'

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
export type TextareaProps = TextareaPropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsTextarea,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}

import { type TextareaAutosizePropsBasic, defaultsTextareaAutosize } from '@dxtmisha/constructor/TextareaAutosize'

export const propsValues = {
  // :values [!] System label / Системная метка
  height: ['xs', 'sm', 'md', 'lg', 'xl']
  // :values [!] System label / Системная метка
}

export type PropsToken = {
  // :type [!] System label / Системная метка
  height?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type TextareaAutosizeProps = TextareaAutosizePropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsTextareaAutosize,
  ...{
    // :default [!] System label / Системная метка
    height: 'md'
    // :default [!] System label / Системная метка
  }
}

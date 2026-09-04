import type { ModelProps } from '../../types/modelTypes'
import type { FormElementsValues, FormEnctype, FormMethod, FormTarget } from './basicTypes'

type FormPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type FormPropsBasic = ModelProps<FormElementsValues> & {
  /** Form value / Значение формы */
  value?: FormElementsValues
  /** Works with native form elements if true, otherwise with custom / Работает с нативными элементами, если true, иначе с кастомными */
  native?: boolean

  /** Form submission URL / URL отправки формы */
  action?: string
  /** HTTP method for form submission / HTTP-метод для отправки формы */
  method?: FormMethod
  /** Encoding type for form data / Тип кодирования данных формы */
  enctype?: FormEnctype
  /** Target browsing context for form submission / Контекст перехода для отправки формы */
  target?: FormTarget
  /** Autocomplete behavior for form elements / Поведение автозаполнения для элементов формы */
  autocomplete?: string
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type FormProps = FormPropsBasic & FormPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsForm = {
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}

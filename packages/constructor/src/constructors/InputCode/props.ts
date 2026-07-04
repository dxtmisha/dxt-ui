import type { ModelProps } from '../../types/modelTypes'

import type { FieldLabelPropsBasic, FieldLabelPropsInclude } from '../FieldLabel'
import type { FieldMessagePropsBasic, FieldMessagePropsInclude } from '../FieldMessage'
import type { InputCodeItemPropsBasic, InputCodeItemPropsInclude } from '../InputCodeItem'

/**
 * Type describing component style tokens.
 *
 * Тип, описывающий токены стилей компонента.
 */
type InputCodePropsToken = {
  // :type [!] System label / Системная метка
  validation?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Interface of basic properties for the InputCode component.
 *
 * Интерфейс базовых свойств для компонента InputCode.
 */
export type InputCodePropsBasic<
  InputCodeItem extends InputCodeItemPropsBasic = InputCodeItemPropsBasic,
  FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic,
  FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic
> = InputCodeItemPropsInclude<InputCodeItem>
  & Omit<FieldLabelPropsInclude<FieldLabel>, 'counter' | 'counterShow' | 'counterTemplate' | 'counterId' | 'maxlength' | 'fieldCounterAttrs' | 'required'>
  & Omit<FieldMessagePropsInclude<FieldMessage>, 'counter' | 'counterShow' | 'counterTemplate' | 'counterId' | 'maxlength' | 'fieldCounterAttrs'>
  & ModelProps
  & {
    /** Flag for successful input status / Флаг успешного статуса ввода */
    success?: boolean
    /** Flag for loading status / Флаг статуса загрузки */
    loading?: boolean

    /** Input code value / Значение вводимого кода */
    value?: string

    /** Code length / Длина кода */
    length?: number
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type InputCodeProps = InputCodePropsToken & InputCodePropsBasic

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsInputCode = {
  /** Default code length / Длина кода по умолчанию */
  length: 4,
  /** Validation regular expression / Регулярное выражение для валидации */
  match: /[0-9]/,
  inputMode: 'numeric',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}

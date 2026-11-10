import {
  type ConstrItems,
  DesignLogicAbstract
} from '@dxtmisha/functional'

import { FieldAttributesInclude } from '../../classes/Field/FieldAttributesInclude'
import { FieldChangeInclude } from '../../classes/Field/FieldChangeInclude'
import { FieldCodeInclude } from '../../classes/Field/FieldCodeInclude'
import { FieldElementInclude } from '../../classes/Field/FieldElementInclude'
import { FieldEventInclude } from '../../classes/Field/FieldEventInclude'
import { FieldFormInclude } from '../../classes/Field/FieldFormInclude'
import { FieldValidationInclude } from '../../classes/Field/FieldValidationInclude'
import { FieldValueInclude } from '../../classes/Field/FieldValueInclude'

import { FieldInclude } from '../Field'
import { InputPhoneDialCodeInclude } from '../InputPhoneDialCode'
import { MaskInclude } from '../Mask'

import { InputPhoneData } from './InputPhoneData'
import { InputPhoneMask } from './InputPhoneMask'

import type { InputPhoneProps } from './props'
import type { InputPhoneComponents, InputPhoneEmits, InputPhoneSlots } from './types'

/** InputPhone dependency constructors type / Тип конструкторов зависимостей InputPhone */
export type InputPhoneConstructors = {
  /** Field attributes constructor / Конструктор атрибутов поля */
  attributes: typeof FieldAttributesInclude
  /** Field change constructor / Конструктор изменения поля */
  change: typeof FieldChangeInclude
  /** Field code constructor / Конструктор кода поля */
  code: typeof FieldCodeInclude
  /** Input phone data constructor / Конструктор данных ввода телефона */
  data: typeof InputPhoneData
  /** Input phone dial code constructor / Конструктор телефонного кода ввода телефона */
  dialCode: typeof InputPhoneDialCodeInclude
  /** Field element constructor / Конструктор элемента поля */
  elementItem: typeof FieldElementInclude
  /** Field event constructor / Конструктор события поля */
  event: typeof FieldEventInclude
  /** Field constructor / Конструктор поля */
  field: typeof FieldInclude
  /** Field form constructor / Конструктор формы поля */
  form: typeof FieldFormInclude
  /** Mask constructor / Конструктор маски */
  mask: typeof MaskInclude
  /** Input phone mask constructor / Конструктор маски ввода телефона */
  phoneMask: typeof InputPhoneMask
  /** Field validation constructor / Конструктор валидации поля */
  validation: typeof FieldValidationInclude
  /** Field value constructor / Конструктор значения поля */
  value: typeof FieldValueInclude<string>
}

/**
 * InputPhone constructor class.
 * Manages the logic, state, and interaction of the phone input component.
 *
 * Класс конструктора InputPhone.
 * Управляет логикой, состоянием и взаимодействием компонента ввода телефона.
 */
export class InputPhone extends DesignLogicAbstract<
  HTMLElement,
  InputPhoneComponents,
  InputPhoneEmits,
  InputPhoneSlots,
  InputPhoneProps,
  InputPhoneConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<InputPhoneConstructors> = {
    attributes: {
      item: FieldAttributesInclude,
      parameters: () => [this.props]
    },
    change: {
      item: FieldChangeInclude,
      parameters: () => [this.props]
    },
    code: {
      item: FieldCodeInclude,
      parameters: () => [this.props]
    },
    data: {
      item: InputPhoneData,
      parameters: () => [
        this.props,
        () => this.i('value'),
        () => this.i('event')
      ]
    },
    dialCode: {
      item: InputPhoneDialCodeInclude,
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        () => ({
          value: this.i('data').country.value,
          onClick: this.i('data').onCountry
        })
      ]
    },
    elementItem: {
      item: FieldElementInclude,
      parameters: () => [
        this.props,
        this.element
      ]
    },
    event: {
      item: FieldEventInclude,
      parameters: () => [
        this.props,
        () => this.i('change'),
        () => this.i('value'),
        () => this.i('validation'),
        this.emits,
        () => this.i('form')
      ]
    },
    field: {
      item: FieldInclude,
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        undefined,
        undefined,
        () => this.i('value'),
        () => this.i('event')
      ]
    },
    form: {
      item: FieldFormInclude,
      conditions: () => FieldFormInclude.is(this.props),
      parameters: () => [
        this.props,
        () => this.i('value'),
        () => this.i('validation')
      ]
    },
    mask: {
      item: MaskInclude,
      parameters: () => [
        () => this.i('phoneMask').maskProps,
        this.naming,
        this.components,
        undefined,
        undefined,
        () => this.i('value'),
        () => this.i('data').valueDefault.value
      ]
    },
    phoneMask: {
      item: InputPhoneMask,
      parameters: () => [
        this.props,
        () => this.i('data'),
        () => this.i('value')
      ]
    },
    validation: {
      item: FieldValidationInclude,
      parameters: () => [
        this.props,
        () => this.i('attributes'),
        () => this.i('value'),
        () => this.i('change'),
        () => this.i('code')
      ]
    },
    value: {
      item: FieldValueInclude<string>,
      parameters: () => [
        this.props,
        () => this.i('elementItem')
      ]
    }
  }
}

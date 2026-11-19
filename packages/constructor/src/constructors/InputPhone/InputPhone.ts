import type { Ref } from 'vue'
import {
  type ConstrEmit,
  type ConstrItems,
  type DesignComp,
  DesignLogicAbstract,
  type DesignName
} from '@dxtmisha/functional'

import { FieldAttributesInclude } from '../../classes/Field/FieldAttributesInclude'
import { FieldChangeInclude } from '../../classes/Field/FieldChangeInclude'
import { FieldCodeInclude } from '../../classes/Field/FieldCodeInclude'
import { FieldElementInclude } from '../../classes/Field/FieldElementInclude'
import { FieldEventInclude } from '../../classes/Field/FieldEventInclude'
import { FieldFormInclude } from '../../classes/Field/FieldFormInclude'
import { FieldValueInclude } from '../../classes/Field/FieldValueInclude'
import { ModelInclude } from '../../classes/ModelInclude'
import { TextInclude } from '../../classes/TextInclude'

import { FieldInclude } from '../Field'
import { InputPhoneDialCodeInclude } from '../InputPhoneDialCode'
import { MaskInclude } from '../Mask'

import { InputPhoneData } from './InputPhoneData'
import { InputPhoneFormat } from './InputPhoneFormat'
import { InputPhoneMask } from './InputPhoneMask'
import { InputPhonePaste } from './InputPhonePaste'
import { InputPhoneValidation } from './InputPhoneValidation'

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
  /** Input phone format constructor / Конструктор форматирования ввода телефона */
  format: typeof InputPhoneFormat
  /** Mask constructor / Конструктор маски */
  mask: typeof MaskInclude
  /** Country model constructor / Конструктор модели страны */
  modelCountry: typeof ModelInclude<string>
  /** Input phone paste constructor / Конструктор вставки телефона */
  paste: typeof InputPhonePaste
  /** Input phone mask constructor / Конструктор маски ввода телефона */
  phoneMask: typeof InputPhoneMask
  /** Text localization constructor / Конструктор локализации текста */
  text: typeof TextInclude
  /** Field validation constructor / Конструктор валидации поля */
  validation: typeof InputPhoneValidation
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
        () => this.i('elementItem'),
        () => this.i('event'),
        () => this.i('value'),
        () => this.i('modelCountry')
      ]
    },
    dialCode: {
      item: InputPhoneDialCodeInclude,
      canCreate: () => !this.props.countryBlock,
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        () => ({
          value: this.i('data').activeDialCode.value,
          onClick: this.i('data').onCountry,
          onWindow: this.i('data').onWindow
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
        () => this.callInstance('form', item => item)
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
      canCreate: () => FieldFormInclude.is(this.props),
      parameters: () => [
        this.props,
        () => this.i('value'),
        () => this.i('validation')
      ]
    },
    format: {
      item: InputPhoneFormat,
      parameters: () => [
        this.props,
        () => this.i('data'),
        () => this.i('value')
      ]
    },
    mask: {
      item: MaskInclude,
      parameters: () => [
        () => this.i('phoneMask').maskProps.value,
        this.naming,
        this.components,
        undefined,
        undefined,
        () => this.i('value'),
        () => this.i('data').valueDefault.value
      ]
    },
    modelCountry: {
      item: ModelInclude<string>,
      parameters: () => [
        'country',
        this.emits
      ]
    },
    paste: {
      item: InputPhonePaste,
      parameters: () => [
        this.props,
        () => this.i('data'),
        () => this.i('elementItem'),
        () => this.i('event'),
        () => this.i('value')
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
    text: {
      item: TextInclude,
      parameters: () => [this.props]
    },
    validation: {
      item: InputPhoneValidation,
      parameters: () => [
        this.props,
        () => this.i('attributes'),
        () => this.i('value'),
        () => this.i('data'),
        () => this.i('change'),
        () => this.i('code'),
        undefined,
        () => this.i('text')
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

  /**
   * Constructor
   *
   * Конструктор
   * @param props input data / входные данные
   * @param element input element / элемент ввода
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors dependency constructor overrides / переопределения конструкторов зависимостей
   */
  constructor(
    props: Readonly<InputPhoneProps>,
    element: Ref<HTMLElement | undefined>,
    naming: DesignName,
    components?: DesignComp<InputPhoneComponents, InputPhoneProps>,
    slots?: InputPhoneSlots,
    emits?: ConstrEmit<InputPhoneEmits>,
    constructors?: Partial<InputPhoneConstructors>
  ) {
    super(
      props,
      element,
      naming,
      components,
      slots,
      emits,
      constructors
    )

    this.i('data')
    this.i('event')
    this.i('validation')
    this.callInstance('form', item => item)
  }
}

import { mergeProps, type Ref } from 'vue'
import {
  type ConstrBind,
  type ConstrEmit,
  type ConstrItems,
  type DesignComp,
  DesignLogicAbstract,
  type DesignName,
  getObjectNoUndefined
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

import type { TextareaProps } from './props'
import type { TextareaComponents, TextareaEmits, TextareaSlots } from './types'

/** Textarea dependency constructors type / Тип конструкторов зависимостей Textarea */
export type TextareaConstructors = {
  /** Field attributes constructor / Конструктор атрибутов поля */
  attributes: typeof FieldAttributesInclude
  /** Field change constructor / Конструктор изменения поля */
  change: typeof FieldChangeInclude
  /** Field code constructor / Конструктор кода поля */
  code: typeof FieldCodeInclude
  /** Field element constructor / Конструктор элемента поля */
  elementItem: typeof FieldElementInclude
  /** Field event constructor / Конструктор события поля */
  event: typeof FieldEventInclude
  /** Field constructor / Конструктор поля */
  field: typeof FieldInclude
  /** Field form constructor / Конструктор формы поля */
  form: typeof FieldFormInclude
  /** Field validation constructor / Конструктор валидации поля */
  validation: typeof FieldValidationInclude
  /** Field value constructor / Конструктор значения поля */
  value: typeof FieldValueInclude<string>
}

/**
 * Textarea constructor logic orchestrator class.
 * Manages multi-line text input value state, validation, form registration, field wrapper bindings, and autosize bindings.
 *
 * Класс-оркестратор логики конструктора Textarea.
 * Управляет состоянием многострочного текстового значения, валидацией, регистрацией в форме, привязками обёртки поля и авторазмера.
 */
export class Textarea extends DesignLogicAbstract<
  HTMLElement,
  TextareaComponents,
  TextareaEmits,
  TextareaSlots,
  TextareaProps,
  TextareaConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<TextareaConstructors> = {
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
        () => ({
          maxlength: this.props.maxlength
        }),
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
    validation: {
      item: FieldValidationInclude,
      parameters: () => [
        this.props,
        () => this.i('attributes'),
        () => this.i('value'),
        () => this.i('change'),
        () => this.i('code'),
        undefined,
        this.isMounted
      ]
    },
    value: {
      item: FieldValueInclude<string>,
      parameters: () => [
        this.props,
        () => this.i('elementItem'),
        undefined,
        false,
        false,
        true
      ]
    }
  }

  /**
   * Constructor for initializing Textarea logic orchestration.
   *
   * Конструктор для инициализации оркестрации логики Textarea.
   * @param props input data / входные данные
   * @param element input element / элемент ввода
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors dependency constructor overrides / переопределения конструкторов зависимостей
   */
  constructor(
    props: Readonly<TextareaProps>,
    element: Ref<HTMLElement | undefined>,
    naming: DesignName,
    components?: DesignComp<TextareaComponents, TextareaProps>,
    slots?: TextareaSlots,
    emits?: ConstrEmit<TextareaEmits>,
    constructors?: Partial<TextareaConstructors>
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

    this.i('event')
    this.i('validation')
    this.callInstance('form', item => item)
  }

  /**
   * Returns bindings for the TextareaAutosize component.
   *
   * Возвращает привязки для компонента TextareaAutosize.
   * @returns textarea autosize bindings / привязки компонента TextareaAutosize
   */
  get binds(): ConstrBind {
    const event = this.i('event')

    return mergeProps(
      this.props.textareaAttrs ?? {},
      getObjectNoUndefined({
        autosize: this.props.autosize
      }),
      {
        value: this.i('value').item.value,
        onFocus: event.onFocus,
        onBlur: event.onBlur,
        onInput: event.onInput,
        onChange: event.onChange
      }
    )
  }

  /**
   * Returns properties for the native textarea element.
   *
   * Возвращает свойства для нативного элемента textarea.
   * @returns textarea input bindings / привязки элемента ввода textarea
   */
  get bindsInput(): ConstrBind {
    return mergeProps(
      this.i('attributes').listForTextarea,
      this.props.textareaAttrs?.inputAttrs ?? {},
      getObjectNoUndefined({
        cols: this.props.cols,
        rows: this.props.rows,
        wrap: this.props.wrap,
        fieldSizing: this.props.fieldSizing
      })
    )
  }
}

import type { Ref, ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { ModelInclude } from '../../classes/ModelInclude'
import { FormElements } from './FormElements'
import { FormElementsNative } from './FormElementsNative'
import { FormError } from './FormError'
import { FormEvent } from './FormEvent'
import { FormProvide } from './FormProvide'
import { FormValue } from './FormValue'

import type { FormElementsValues } from './basicTypes'
import type { FormProps } from './props'
import type { FormComponents, FormEmits, FormSlots } from './types'

/**
 * Form business logic class.
 * Manages form tag, standard form attributes, submission, reset, and validity checks.
 *
 * Класс бизнес-логики формы (Form).
 * Управляет тегом формы, стандартными атрибутами формы, отправкой, сбросом и проверками валидации.
 */
export class Form {
  /** Object for managing child elements / Объект для управления дочерними элементами */
  readonly elements: FormElements

  /** Object for managing and storing form error states / Объект для управления и хранения состояний ошибок формы */
  readonly error: FormError

  /** Object for working with events / Объект для работы с событиями */
  readonly event: FormEvent

  /** Object for model synchronization / Объект для синхронизации модели */
  readonly model: ModelInclude<FormElementsValues>

  /** Object for managing native form elements / Объект для управления нативными элементами формы */
  readonly native: FormElementsNative

  /** Object for providing form context to child elements / Объект для предоставления контекста формы дочерним элементам */
  readonly provide: FormProvide

  /** Object for managing form values / Объект для управления значениями формы */
  readonly value: FormValue

  /**
   * Constructor
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param element input element / элемент ввода
   * @param classDesign design name / название дизайна
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors object with classes / объект с классами
   * @param constructors.FormElementsConstructor class for working with child elements / класс для работы с дочерними элементами
   * @param constructors.FormElementsNativeConstructor class for working with native form elements / класс для работы с нативными элементами формы
   * @param constructors.FormErrorConstructor class for managing error states / класс для управления состояниями ошибок
   * @param constructors.FormEventConstructor class for working with events / класс для работы с событиями
   * @param constructors.FormProvideConstructor class for providing form context / класс для предоставления контекста формы
   * @param constructors.FormValueConstructor class for working with form values / класс для работы со значениями формы
   * @param constructors.ModelIncludeConstructor class for working with model synchronization / класс для работы с синхронизацией модели
   */
  constructor(
    protected readonly props: FormProps,
    protected readonly refs: ToRefs<FormProps>,
    protected readonly element: Ref<HTMLFormElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<FormComponents, FormProps>,
    protected readonly slots?: FormSlots,
    protected readonly emits?: ConstrEmit<FormEmits>,
    constructors: {
      FormElementsConstructor?: typeof FormElements
      FormElementsNativeConstructor?: typeof FormElementsNative
      FormErrorConstructor?: typeof FormError
      FormEventConstructor?: typeof FormEvent
      FormProvideConstructor?: typeof FormProvide
      FormValueConstructor?: typeof FormValue
      ModelIncludeConstructor?: typeof ModelInclude<FormElementsValues>
    } = {}
  ) {
    const {
      FormElementsConstructor = FormElements,
      FormElementsNativeConstructor = FormElementsNative,
      FormErrorConstructor = FormError,
      FormEventConstructor = FormEvent,
      FormProvideConstructor = FormProvide,
      FormValueConstructor = FormValue,
      ModelIncludeConstructor = ModelInclude
    } = constructors

    this.elements = new FormElementsConstructor()
    this.native = new FormElementsNativeConstructor(this.element)
    this.value = new FormValueConstructor(this.props, this.refs, this.elements, this.native)
    this.error = new FormErrorConstructor(this.props, this.elements, this.native)
    this.model = new ModelIncludeConstructor('value', emits)
    this.event = new FormEventConstructor(this.props, this.value, emits, this.model)
    this.provide = new FormProvideConstructor(this.elements, this.event)
  }

  /**
   * Attributes and event bindings for the form element /
   * Атрибуты и привязки событий для элемента формы
   */
  get binds(): Record<string, any> {
    return {
      action: this.props.action,
      autocomplete: this.props.autocomplete,
      enctype: this.props.enctype,
      method: this.props.method,
      novalidate: true,
      target: this.props.target,
      onChange: this.event.onChange,
      onInput: this.event.onInput,
      onReset: this.event.onReset,
      onSubmit: this.event.onSubmit
    }
  }

  /**
   * Submits the form /
   * Отправляет форму
   */
  readonly submit = (): void => {
    const formElement = this.element.value

    if (formElement) {
      if (typeof formElement.requestSubmit === 'function') {
        formElement.requestSubmit()
      } else {
        formElement.submit()
      }
    }
  }
}

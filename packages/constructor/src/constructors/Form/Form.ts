import { getCurrentInstance, type Ref } from 'vue'
import {
  type ConstrBind,
  type ConstrEmit,
  type ConstrItems,
  type DesignComponents,
  DesignLogicAbstract,
  type DesignName
} from '@dxtmisha/functional'
import { isFunction } from '@dxtmisha/functional-basic'

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

/** Form dependency constructors type / Тип конструкторов зависимостей Form */
export type FormConstructors = {
  /** Custom child elements manager constructor / Конструктор менеджера кастомных дочерних элементов */
  elements: typeof FormElements
  /** Form error state manager constructor / Конструктор менеджера состояний ошибок формы */
  error: typeof FormError
  /** Form event handler constructor / Конструктор обработчика событий формы */
  event: typeof FormEvent
  /** Model synchronization constructor / Конструктор синхронизации модели */
  model: typeof ModelInclude<FormElementsValues>
  /** Native form elements manager constructor / Конструктор менеджера нативных элементов формы */
  native: typeof FormElementsNative
  /** Form context provider constructor / Конструктор провайдера контекста формы */
  provide: typeof FormProvide
  /** Form values coordinator constructor / Конструктор координатора значений формы */
  value: typeof FormValue
}

/**
 * Form business logic orchestrator class.
 * Coordinates form attributes, submission, reset, validation, value synchronization, and child element context with lazy dependency instantiation.
 *
 * Класс-оркестратор бизнес-логики формы (Form).
 * Координирует атрибуты формы, отправку, сброс, валидацию, синхронизацию значений и контекст дочерних элементов с ленивой инициализацией зависимостей.
 */
export class Form extends DesignLogicAbstract<
  HTMLFormElement,
  FormComponents,
  FormEmits,
  FormSlots,
  FormProps,
  FormConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<FormConstructors> = {
    elements: {
      item: FormElements
    },
    error: {
      item: FormError,
      parameters: () => [
        this.props,
        () => this.i('elements'),
        () => this.i('native')
      ]
    },
    event: {
      item: FormEvent,
      parameters: () => [
        () => this.i('model'),
        () => this.i('value'),
        this.emits
      ]
    },
    model: {
      item: ModelInclude<FormElementsValues>,
      parameters: () => [
        'value',
        this.emits
      ]
    },
    native: {
      item: FormElementsNative,
      parameters: () => [
        this.element
      ]
    },
    provide: {
      item: FormProvide,
      parameters: () => [
        () => this.i('elements'),
        () => this.i('event')
      ]
    },
    value: {
      item: FormValue,
      conditions: () => FormValue.is(this.props),
      parameters: () => [
        this.props,
        () => this.i('elements'),
        () => this.i('native')
      ]
    }
  }

  /**
   * Constructor for orchestrating Form logic subsystems.
   * Eagerly instantiates FormProvide synchronously during setup so Vue provide() registers cleanly for descendant fields.
   *
   * Конструктор для координации логических подсистем формы.
   * Синхронно инициализирует FormProvide во время setup для корректной регистрации Vue provide() для дочерних полей.
   * @param props input reactive properties / входные реактивные свойства
   * @param element form HTML element reference / ссылка на HTML-элемент формы
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits function called when an event is triggered / функция, вызываемая при срабатывании события
   * @param constructors dependency constructor overrides / переопределения конструкторов зависимостей
   * @param hasLifecycle whether to register component lifecycle hooks / регистрировать ли хуки жизненного цикла компонента
   */
  constructor(
    props: Readonly<FormProps>,
    element: Ref<HTMLFormElement | undefined>,
    naming: DesignName,
    components?: DesignComponents<FormComponents, FormProps>,
    slots?: FormSlots,
    emits?: ConstrEmit<FormEmits>,
    constructors?: Partial<FormConstructors>,
    hasLifecycle: boolean = true
  ) {
    super(
      props,
      element,
      naming,
      components,
      slots,
      emits,
      constructors,
      hasLifecycle
    )

    if (getCurrentInstance()) {
      this.i('provide')
    }
  }

  /**
   * Returns attributes and event bindings for the root form element.
   *
   * Возвращает атрибуты и привязки событий для корневого элемента формы.
   * @returns form element bindings / привязки элемента формы
   */
  get binds(): ConstrBind {
    const event = this.i('event')

    return {
      action: this.props.action,
      autocomplete: this.props.autocomplete,
      enctype: this.props.enctype,
      method: this.props.method,
      novalidate: true,
      target: this.props.target,
      onChange: event.onChange,
      onInput: event.onInput,
      onReset: event.onReset,
      onSubmit: event.onSubmit
    }
  }

  /**
   * Returns the current form values keyed by field name.
   *
   * Возвращает текущие значения формы по именам полей.
   * @returns object with field name to value mapping / объект сопоставления имени поля и значения
   */
  readonly getValues = (): FormElementsValues => {
    return this.i('value').get()
  }

  /**
   * Sets the value of a single form field by name.
   *
   * Устанавливает значение одного поля формы по имени.
   * @param name field name / имя поля
   * @param value new value / новое значение
   */
  readonly set = (name: string, value: unknown): void => {
    this.i('value').set(name, value)
  }

  /**
   * Sets multiple form field values without clearing omitted fields and synchronizes the model.
   *
   * Устанавливает несколько значений полей формы без очистки неуказанных полей и синхронизирует модель.
   * @param values object of field values keyed by name / объект значений полей по имени
   */
  readonly setValues = (values: FormElementsValues): void => {
    const formValue = this.i('value')

    formValue.setValues(values)
    this.i('model').emit({
      ...formValue.get(),
      ...values
    })
  }

  /**
   * Sets values for all form fields, clears omitted fields, and synchronizes the model.
   *
   * Устанавливает значения для всех полей формы, очищает неуказанные поля и синхронизирует модель.
   * @param values object of field values keyed by name / объект значений полей по имени
   */
  readonly setValuesAll = (values: FormElementsValues): void => {
    this.i('value').setValuesAll(values)
    this.i('model').emit(values)
  }

  /**
   * Resets all form fields to their cached initial values.
   *
   * Сбрасывает все поля формы к закешированным исходным значениям.
   */
  readonly reset = (): void => {
    this.i('value').reset()
  }

  /**
   * Checks whether all form fields satisfy validation constraints.
   *
   * Проверяет, удовлетворяют ли все поля формы ограничениям валидации.
   * @returns true if form is valid / true, если форма валидна
   */
  readonly checkValidity = (): boolean => {
    return this.i('error').checkValidity()
  }

  /**
   * Submits the underlying HTML form element programmatically.
   * Uses requestSubmit() when available so submit listeners fire, falling back to submit().
   *
   * Программно отправляет базовый HTML-элемент формы.
   * Использует requestSubmit() при наличии, чтобы сработали слушатели submit, с откатом к submit().
   */
  readonly submit = (): void => {
    const formElement = this.element.value

    if (formElement) {
      if (isFunction(formElement.requestSubmit)) {
        formElement.requestSubmit()
      } else {
        formElement.submit()
      }
    }
  }
}

import { onMounted, ref, type Ref, type ToRefs, watch } from 'vue'
import { type ConstrEmit, type DesignComp, isFilled } from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { ModelInclude } from '../../classes/ModelInclude'

import { FieldLabelInclude } from '../FieldLabel'
import { FieldMessageInclude } from '../FieldMessage'
import { InputCodeItemInclude } from '../InputCodeItem'

import type { AriaList } from '../../types/ariaTypes'
import type { InputCodeComponents, InputCodeEmits } from './types'
import type { InputCodeProps } from './props'

/**
 * Class for managing code input.
 *
 * Класс для управления вводом кода.
 */
export class InputCode {
  /** Field label manager / Управляющий меткой поля */
  readonly fieldLabel: FieldLabelInclude
  /** Field message manager / Управляющий сообщением поля */
  readonly fieldMessage: FieldMessageInclude
  /** Code input item list manager / Управляющий списком элементов ввода кода */
  readonly inputCodeItem: InputCodeItemInclude

  /** Model binding manager / Управляющий привязкой модели */
  readonly model: ModelInclude

  /** Reactive value of the input / Реактивное значение поля ввода */
  readonly value = ref<string>('')

  /**
   * Constructor
   * @param props input property / входное свойство
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param element input element / элемент ввода
   * @param classDesign design name / название дизайна
   * @param className list of available classes / список доступных классов
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors object with classes / объект с классами
   * @param constructors.FieldLabelIncludeConstructor class for working with field label / класс для работы с меткой поля
   * @param constructors.FieldMessageIncludeConstructor class for working with field message / класс для работы с сообщением поля
   * @param constructors.InputCodeItemIncludeConstructor class for working with input code item / класс для работы с элементом ввода кода
   * @param constructors.ModelIncludeConstructor class for working with model / класс для работы с моделью
   */
  constructor(
    protected readonly props: InputCodeProps,
    protected readonly refs: ToRefs<InputCodeProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<InputCodeComponents, InputCodeProps>,
    protected readonly slots?: any,
    protected readonly emits?: ConstrEmit<InputCodeEmits>,
    constructors: {
      FieldLabelIncludeConstructor?: typeof FieldLabelInclude
      FieldMessageIncludeConstructor?: typeof FieldMessageInclude
      InputCodeItemIncludeConstructor?: typeof InputCodeItemInclude
      ModelIncludeConstructor?: typeof ModelInclude
    } = {}
  ) {
    const {
      FieldLabelIncludeConstructor = FieldLabelInclude,
      FieldMessageIncludeConstructor = FieldMessageInclude,
      InputCodeItemIncludeConstructor = InputCodeItemInclude,
      ModelIncludeConstructor = ModelInclude
    } = constructors

    this.fieldLabel = new FieldLabelIncludeConstructor(
      className,
      props,
      components,
      () => ({ loading: props.loading })
    )
    this.fieldMessage = new FieldMessageIncludeConstructor(className, props, components)

    this.inputCodeItem = new InputCodeItemIncludeConstructor(
      className,
      props,
      components,
      this.onInput
    )

    this.model = new ModelIncludeConstructor('value', emits, this.value)

    onMounted(() => {
      watch(
        [this.refs.value],
        () => this.inputCodeItem.update(this.props.value ?? '')
      )
    })
  }

  /**
   * Get ARIA attributes.
   *
   * Получить ARIA атрибуты.
   * @returns ARIA attributes / ARIA атрибуты
   */
  get aria(): AriaList {
    return {
      ...AriaStaticInclude.role('group'),
      ...AriaStaticInclude.labelledby(this.fieldLabel.id),
      ...AriaStaticInclude.describedby(this.fieldMessage.id)
    }
  }

  /**
   * Checks if there is a validation message or if validation status is active.
   *
   * Проверяет, есть ли сообщение о валидации или активен ли статус валидации.
   * @returns boolean value indicating if validation is active / логическое значение, указывающее, активна ли валидация
   */
  isValidation(): boolean {
    return isFilled(this.props.validation || this.fieldMessage.validation)
  }

  /**
   * Event for value change.
   *
   * Событие для изменения значения.
   */
  protected readonly onInput = (value: string) => {
    if (
      this.value.value !== value
    ) {
      this.value.value = value
      this.emits?.('input', value)
      this.model.emit(value)
    }
  }
}

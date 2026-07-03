import { ref, type Ref, type ToRefs, watch } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { FieldLabelInclude } from '../FieldLabel'
import { FieldMessageInclude } from '../FieldMessage'
import { InputCodeItemInclude } from '../InputCodeItem'
import { ModelInclude } from '../../classes/ModelInclude'

import type { InputCodeComponents, InputCodeEmits } from './types'
import type { InputCodeProps } from './props'

/**
 * Class for managing code input.
 *
 * Класс для управления вводом кода.
 */
export class InputCode {
  readonly fieldLabel: FieldLabelInclude<any, any>
  readonly fieldMessage: FieldMessageInclude
  readonly inputCodeItem: InputCodeItemInclude
  readonly model: ModelInclude<string>

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
    this.fieldMessage = new FieldMessageIncludeConstructor(
      className,
      props,
      components
    )
    this.inputCodeItem = new InputCodeItemIncludeConstructor(
      className,
      props,
      components,
      this.onInput
    )
    this.model = new ModelIncludeConstructor('value', emits, this.value)

    watch(
      () => this.props.value,
      (newValue) => {
        this.inputCodeItem.update(newValue ?? '')
      }
    )
  }

  /**
   * Event for value change.
   *
   * Событие для изменения значения.
   */
  protected readonly onInput = (value: string) => {
    if (this.value.value !== value) {
      this.value.value = value
      this.emits?.('input', value)
      this.model.emit(value)
    }
  }
}

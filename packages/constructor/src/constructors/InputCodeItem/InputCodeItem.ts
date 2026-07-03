import { type Ref, type ToRefs } from 'vue'
import { type ConstrBind, type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { InputCodeItemEvent } from './InputCodeItemEvent'
import { InputCodeItemGo } from './InputCodeItemGo'
import { InputCodeItemValue } from './InputCodeItemValue'

import type { InputCodeItemComponents, InputCodeItemEmits, InputCodeItemSlots } from './types'
import type { InputCodeItemProps } from './props'

/**
 * Class for handling code input.
 *
 * Класс для работы с вводом кода.
 */
export class InputCodeItem {
  /** Object for handling value / Объект для работы со значением */
  readonly value: InputCodeItemValue
  /** Object for navigation and focus movement / Объект для навигации и перемещения фокуса */
  readonly go: InputCodeItemGo
  /** Object for event handling / Объект для обработки событий */
  readonly event: InputCodeItemEvent

  /**
   * Constructor
   *
   * Конструктор
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param element input element / элемент ввода
   * @param classDesign design name / название дизайна
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors object with classes / объект с классами
   * @param constructors.InputCodeItemEventConstructor class for working with input code item event / класс для работы с событием элемента ввода кода
   * @param constructors.InputCodeItemGoConstructor class for working with input code item go / класс для работы с переходом элемента ввода кода
   * @param constructors.InputCodeItemValueConstructor class for working with input code item value / класс для работы со значением элемента ввода кода
   */
  constructor(
    protected readonly props: InputCodeItemProps,
    protected readonly refs: ToRefs<InputCodeItemProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<InputCodeItemComponents, InputCodeItemProps>,
    protected readonly slots?: InputCodeItemSlots,
    protected readonly emits?: ConstrEmit<InputCodeItemEmits>,
    constructors: {
      InputCodeItemEventConstructor?: typeof InputCodeItemEvent
      InputCodeItemGoConstructor?: typeof InputCodeItemGo
      InputCodeItemValueConstructor?: typeof InputCodeItemValue
    } = {}
  ) {
    const {
      InputCodeItemEventConstructor = InputCodeItemEvent,
      InputCodeItemGoConstructor = InputCodeItemGo,
      InputCodeItemValueConstructor = InputCodeItemValue
    } = constructors

    this.value = new InputCodeItemValueConstructor(element)
    this.go = new InputCodeItemGoConstructor(props, element)
    this.event = new InputCodeItemEventConstructor(
      props,
      this.value,
      this.go,
      emits
    )
  }

  /**
   * Data for the input element.
   *
   * Данные для элемента ввода.
   */
  get inputBinds(): ConstrBind<Partial<HTMLInputElement>> {
    return {
      key: 'input',
      class: `${this.className}__input`,
      inputmode: this.props.inputmode,
      maxLength: 1,
      placeholder: this.props.placeholder,
      [this.go.getKey()]: this.props.index,
      disabled: this.props.disabled,
      onFocus: this.event.onFocus,
      onClick: this.event.onClick,
      onKeydown: this.event.onKeydown,
      onInput: this.event.onInput,
      onPaste: this.event.onPaste
    }
  }

  /**
   * Set the element to focused state.
   *
   * Переводим элемент в состояние фокуса.
   */
  readonly focus = () => {
    this.element.value?.querySelector('input')?.focus()
  }
}

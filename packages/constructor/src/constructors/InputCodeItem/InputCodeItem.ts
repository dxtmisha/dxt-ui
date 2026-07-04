import { type Ref, type ToRefs } from 'vue'
import { type ConstrBind, type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { TextInclude } from '../../classes/TextInclude'
import { InputCodeItemEvent } from './InputCodeItemEvent'
import { InputCodeItemGo } from './InputCodeItemGo'
import { InputCodeItemValue } from './InputCodeItemValue'
import { InputCodeItemTabIndex } from './InputCodeItemTabIndex'

import type { AriaList } from '../../types/ariaTypes'
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
  /** Object for managing tabindex / Объект для управления tabindex */
  readonly tabindex: InputCodeItemTabIndex
  /** Object for event handling / Объект для обработки событий */
  readonly event: InputCodeItemEvent
  /** Object for text localization / Объект для локализации текста */
  readonly text: TextInclude

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
   * @param constructors.TextIncludeConstructor class for working with text / класс для работы с текстом
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
      InputCodeItemTabIndexConstructor?: typeof InputCodeItemTabIndex
      TextIncludeConstructor?: typeof TextInclude
    } = {}
  ) {
    const {
      InputCodeItemEventConstructor = InputCodeItemEvent,
      InputCodeItemGoConstructor = InputCodeItemGo,
      InputCodeItemValueConstructor = InputCodeItemValue,
      InputCodeItemTabIndexConstructor = InputCodeItemTabIndex,
      TextIncludeConstructor = TextInclude
    } = constructors

    this.value = new InputCodeItemValueConstructor(element)
    this.go = new InputCodeItemGoConstructor(props, element)
    this.tabindex = new InputCodeItemTabIndexConstructor(props)
    this.event = new InputCodeItemEventConstructor(
      props,
      this.value,
      this.go,
      emits
    )
    this.text = new TextIncludeConstructor(props)
  }

  /**
   * Get ARIA attributes.
   *
   * Получить ARIA атрибуты.
   * @returns ARIA attributes / ARIA атрибуты
   */
  get aria(): AriaList {
    return {
      ...AriaStaticInclude.disabled(this.props.disabled),
      ...AriaStaticInclude.invalid(this.props.error),
      ...AriaStaticInclude.label(
        this.props.index !== undefined
          ? this.text.symbol?.replace('[index]', (Number(this.props.index) + 1).toString())
          : undefined
      )
    }
  }

  /**
   * Data for the input element.
   *
   * Данные для элемента ввода.
   * @returns bindings for input element / привязки для элемента ввода
   */
  get inputBinds(): ConstrBind<Partial<HTMLInputElement>> {
    return {
      key: 'input',
      class: `${this.className}__input`,
      name: this.getName(),
      inputMode: this.props.inputMode,
      maxLength: 1,
      placeholder: this.props.disabled ? undefined : this.props.placeholder,
      [this.go.getKey()]: this.props.index,
      disabled: this.props.disabled,
      tabindex: this.tabindex.get(),

      onFocus: this.event.onFocus,
      onClick: this.event.onClick,
      onKeydown: this.event.onKeydown,
      onInput: this.event.onInput,
      onPaste: this.event.onPaste,

      ...this.aria
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

  /**
   * Returns the name of the input element.
   *
   * Возвращает имя элемента ввода.
   * @returns name string or undefined / имя или undefined
   */
  getName(): string | undefined {
    if (this.props.name) {
      if (this.props.index !== undefined) {
        return `${this.props.name}__${this.props.index}`
      }

      return this.props.name
    }

    return undefined
  }
}

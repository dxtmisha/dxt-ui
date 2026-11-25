import { type Ref } from 'vue'
import {
  type ConstrBind,
  type ConstrClassObject,
  type ConstrEmit,
  type ConstrItems,
  type DesignComponents,
  DesignLogicAbstract,
  type DesignName
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { TextInclude } from '../../classes/TextInclude'
import { InputCodeItemEvent } from './InputCodeItemEvent'
import { InputCodeItemGo } from './InputCodeItemGo'
import { InputCodeItemTabIndex } from './InputCodeItemTabIndex'
import { InputCodeItemValue } from './InputCodeItemValue'
import { SkeletonInclude } from '../Skeleton'

import type { AriaList } from '../../types/ariaTypes'
import type {
  InputCodeItemComponents,
  InputCodeItemEmits,
  InputCodeItemExpose,
  InputCodeItemSlots
} from './types'
import type { InputCodeItemProps } from './props'

/** InputCodeItem dependency constructors type / Тип конструкторов зависимостей InputCodeItem */
export type InputCodeItemConstructors = {
  /** Event handler constructor / Конструктор обработчика событий */
  event: typeof InputCodeItemEvent
  /** Navigation controller constructor / Конструктор контроллера навигации */
  go: typeof InputCodeItemGo
  /** Skeleton controller constructor / Конструктор контроллера скелетона */
  skeleton: typeof SkeletonInclude
  /** Tabindex controller constructor / Конструктор контроллера tabindex */
  tabindex: typeof InputCodeItemTabIndex
  /** Text localization constructor / Конструктор локализации текста */
  text: typeof TextInclude
  /** Value controller constructor / Конструктор контроллера значения */
  value: typeof InputCodeItemValue
}

/**
 * Class for handling code input.
 *
 * Класс для работы с вводом кода.
 */
export class InputCodeItem extends DesignLogicAbstract<
  HTMLDivElement,
  InputCodeItemComponents,
  InputCodeItemEmits,
  InputCodeItemSlots,
  InputCodeItemProps,
  InputCodeItemConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<InputCodeItemConstructors> = {
    event: {
      item: InputCodeItemEvent,
      parameters: () => [
        this.props,
        () => this.i('go'),
        () => this.i('value'),
        this.emits
      ]
    },
    go: {
      item: InputCodeItemGo,
      parameters: () => [
        this.props,
        this.element
      ]
    },
    skeleton: {
      item: SkeletonInclude,
      canCreate: () => SkeletonInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        ['classBackground']
      ]
    },
    tabindex: {
      item: InputCodeItemTabIndex,
      parameters: () => [this.props]
    },
    text: {
      item: TextInclude,
      canCreate: () => this.props.index !== undefined,
      parameters: () => [this.props]
    },
    value: {
      item: InputCodeItemValue,
      parameters: () => [this.element]
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
   * @param constructors dependency injection overrides object / объект переопределения конструкторов зависимостей
   */
  constructor(
    props: Readonly<InputCodeItemProps>,
    element: Ref<HTMLDivElement | undefined>,
    naming: DesignName,
    components?: DesignComponents<InputCodeItemComponents, InputCodeItemProps>,
    slots?: InputCodeItemSlots,
    emits?: ConstrEmit<InputCodeItemEmits>,
    constructors?: Partial<InputCodeItemConstructors>
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
  }

  /**
   * Get ARIA attributes.
   *
   * Получить ARIA атрибуты.
   * @returns ARIA attributes / ARIA атрибуты
   */
  get aria(): AriaList {
    const symbol = this.callInstance('text', item => item.symbol)
    const label = this.props.index !== undefined && symbol
      ? symbol.replace('[index]', (Number(this.props.index) + 1).toString())
      : undefined

    return {
      ...AriaStaticInclude.disabled(Boolean(this.props.disabled)),
      ...AriaStaticInclude.invalid(Boolean(this.props.error)),
      ...AriaStaticInclude.label(label)
    }
  }

  /**
   * Returns values for the class.
   *
   * Возвращает значения для класса.
   * @returns classes values / значения классов
   */
  get classes(): ConstrClassObject {
    return this.callInstance('skeleton', item => item.classes, {})
  }

  /**
   * Returns exposed properties and methods.
   *
   * Возвращает открытые свойства и методы.
   * @returns exposed API object / объект открытого API
   */
  get expose(): InputCodeItemExpose {
    return {
      index: this.props.index,
      getValue: () => this.i('value').get(),
      set: (value: string) => this.i('value').set(value),
      setTabindex: (value: number | string | undefined) => this.i('tabindex').set(value),
      reset: () => this.i('value').reset(),
      focusInput: this.focus
    }
  }

  /**
   * Data for the input element.
   *
   * Данные для элемента ввода.
   * @returns bindings for input element / привязки для элемента ввода
   */
  get inputBinds(): ConstrBind<Partial<HTMLInputElement>> {
    const event = this.i('event')

    return {
      key: 'input',
      class: this.naming.getSubClass('input'),
      name: this.getName(),
      autocomplete: this.props.autocomplete as AutoFill,
      inputMode: this.props.inputMode,
      maxLength: 1,
      placeholder: this.props.disabled ? undefined : this.props.placeholder,
      [this.i('go').getKey()]: this.props.index,
      disabled: this.props.disabled,
      tabindex: this.i('tabindex').get(),

      onFocus: event.onFocus,
      onClick: event.onClick,
      onKeydown: event.onKeydown,
      onInput: event.onInput,
      onPaste: event.onPaste,

      ...this.aria
    }
  }

  /**
   * Set the element to focused state.
   *
   * Переводим элемент в состояние фокуса.
   */
  readonly focus = (): void => {
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

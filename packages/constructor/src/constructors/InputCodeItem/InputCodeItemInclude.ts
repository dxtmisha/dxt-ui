import { type VNode, type Reactive, ref } from 'vue'
import {
  type DesignComponents,
  isFilled,
  forEach
} from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type { InputCodeItemComponentInclude, InputCodeItemPropsInclude } from './basicTypes'
import type { InputCodeItemExpose, InputCodeItemSlots } from './types'
import type { InputCodeItemPropsBasic } from './props'

/**
 * InputCodeItemInclude class provides functionality for rendering a list of code input items
 * and managing their focus, values, and keyboard events in a structured class-based manner.
 *
 * Класс InputCodeItemInclude предоставляет функциональность для рендеринга списка элементов ввода кода
 * и управления их фокусом, значениями и событиями клавиатуры в структурированном классовом виде.
 */
export class InputCodeItemInclude extends ComponentIncludeAbstract<
  InputCodeItemPropsInclude,
  InputCodeItemPropsBasic,
  InputCodeItemExpose,
  InputCodeItemSlots
> {
  protected readonly name = 'inputCodeItem'
  protected readonly propsAttrsName = 'itemAttrs'

  /** List of child component exposed states / Список экспортируемых состояний дочерних компонентов */
  readonly items = ref<Reactive<InputCodeItemExpose>[]>([])

  /**
   * Constructor
   *
   * Конструктор
   * @param className class name / название класса
   * @param props input parameter / входной параметр
   * @param components object for working with components / объект для работы с компонентами
   * @param onUpdate event for value update / событие обновления значения
   */
  constructor(
    className: string,
    props: Readonly<InputCodeItemPropsInclude>,
    components?: DesignComponents<InputCodeItemComponentInclude, InputCodeItemPropsInclude>,
    protected readonly onUpdate?: (value: string) => void
  ) {
    super(className, props, components)
  }

  /**
   * Filter and validate input text values against match regex.
   *
   * Фильтрация и валидация значений входного текста на соответствие регулярному выражению.
   * @param text raw input text / исходный текст ввода
   * @returns array of validated characters / массив проверенных символов
   */
  readonly getValue = (text: string): string[] => {
    const match = this.getProps().match

    if (match) {
      return forEach(
        text.split(''),
        (char) => {
          if (char.match(match)) {
            return char
          }
        }
      ) as string[]
    }

    return []
  }

  /**
   * Focuses on the first empty or the first input code item.
   *
   * Фокусируется на первом пустом или на первом элементе ввода кода.
   */
  readonly focus = () => {
    if (this.items.value.length > 0) {
      for (const item of this.items.value) {
        if (!isFilled(item.getValue(), true)) {
          item.focusInput()
          return
        }
      }

      this.items.value[0]?.focusInput()
    }
  }

  /**
   * Bulk updates the value of the items.
   *
   * Групповое обновление значений элементов.
   * @param value new code string / новая строка кода
   */
  readonly update = (value: string) => {
    const values = this.getValue(value)

    this.items.value.forEach((item, index) => item.set(values?.[index] ?? ''))

    this.updateTabindex()
  }

  /**
   * Updates the tabindex of the items.
   *
   * Обновляет tabindex элементов.
   */
  readonly updateTabindex = () => {
    let hasEmpty = false

    this.items.value.forEach((item) => {
      if (hasEmpty) {
        item.setTabindex(-1)
      } else {
        item.setTabindex(undefined)
      }

      if (!isFilled(item.getValue(), true)) {
        hasEmpty = true
      }
    })
  }

  /**
   * Resets the collected items array.
   *
   * Сбрасывает массив собранных элементов.
   */
  readonly reset = () => {
    this.items.value = []
  }

  /**
   * Resets the values of all code items.
   *
   * Сбрасывает значения всех элементов кода.
   */
  readonly resetValue = () => {
    this.update('')
    this.onInput()
  }

  /**
   * Input event handler. Collects full code value and calls update event.
   *
   * Обработчик события ввода. Собирает полное значение кода и вызывает событие обновления.
   */
  readonly onInput = () => {
    let value = ''

    for (const item of this.items.value) {
      if (!isFilled(item.getValue(), true)) {
        break
      }

      value += item.getValue()
    }

    this.updateTabindex()
    this.onUpdate?.(value)
  }

  /**
   * Backspace event handler. Moves focus backwards when item is empty.
   *
   * Обработчик события Backspace. Перемещает фокус назад, когда элемент пуст.
   */
  readonly onBackspace = () => {
    let none = false

    this.items.value.forEach((item, index) => {
      if (
        !isFilled(item.getValue(), true)
        || none
      ) {
        none = true
        item.set(this.items.value[index + 1]?.getValue() || '')
      }
    })
  }

  /**
   * Paste event handler across multiple input fields.
   *
   * Обработчик события вставки в несколько полей ввода.
   * @param index starting item index / начальный индекс элемента
   * @param text clipboard paste data / данные вставки буфера обмена
   */
  readonly onPaste = (
    index: InputCodeItemPropsBasic['index'],
    text: string
  ) => {
    let go = false
    let key = 0
    const values = this.getValue(text)

    this.items.value.forEach((item) => {
      if (
        key in values
        && (
          item.index === index
          || go
        )
      ) {
        go = true
        item.set(values?.[key++] ?? '')
      }
    })

    this.onInput()
    this.focus()
  }

  /**
   * Renders a single InputCodeItem component.
   *
   * Рендерит один компонент InputCodeItem.
   * @param index index of the item / индекс элемента
   * @param move focus movement enabled / движение фокуса разрешено
   * @param success success status / статус успеха
   * @param error error status / статус ошибки
   * @returns rendered virtual node list / отрендеренный список виртуальных нод
   */
  readonly renderItem = (
    index: InputCodeItemPropsBasic['index'],
    move: boolean,
    success?: boolean,
    error?: boolean
  ): VNode[] => {
    return this.render(
      undefined,
      {
        move,
        index,
        success,
        error
      },
      undefined,
      `item-${String(index)}`
    )
  }

  /**
   * Combines input attributes with internal component bindings.
   *
   * Объединяет входные атрибуты со внутренними привязками компонента.
   * @returns resolved bindings / разрешенные привязки
   */
  protected override toBinds() {
    const props = this.getProps()
    const binds = super.toBinds()

    return {
      ...binds,

      ref: (item: any) => {
        if (item) {
          this.items.value.push(item)
        }
      },

      disabled: props.disabled,
      name: props.name,
      match: props.match,
      inputMode: props.inputMode,
      placeholder: props.placeholder,

      onInput: this.onInput,
      onPaste: this.onPaste,
      onBackspace: this.onBackspace
    }
  }
}

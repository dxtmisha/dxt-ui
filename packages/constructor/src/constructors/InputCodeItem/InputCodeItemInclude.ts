// ai-none

import { type Reactive, ref, type VNode } from 'vue'
import {
  type ConstrBind,
  type DesignComponents,
  type DesignName,
  forEach,
  getObjectNoUndefined,
  isFilled,
  isObject
} from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type { ComponentIncludeExtra, ComponentIncludeProps } from '../../types/componentInclude'
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
  /** Component sub-name identifier / Идентификатор имени субкомпонента */
  protected override readonly name = 'inputCodeItem'
  /** Property name containing raw attributes to pass / Имя свойства, содержащего сырые атрибуты для передачи */
  protected override readonly propsAttrsName = 'itemAttrs'

  /** List of child component exposed states / Список экспортируемых состояний дочерних компонентов */
  readonly items = ref<Reactive<InputCodeItemExpose>[]>([])

  /**
   * Constructor
   *
   * Конструктор
   * @param props input parameter / входной параметр
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param onUpdate event for value update / событие обновления значения
   * @param extra additional properties or attributes / дополнительные свойства или атрибуты
   * @param index unique index key for rendering / уникальный ключ индекса для рендеринга
   */
  constructor(
    props: ComponentIncludeProps<InputCodeItemPropsInclude>,
    naming: DesignName,
    components?: DesignComponents<InputCodeItemComponentInclude, InputCodeItemPropsInclude>,
    protected readonly onUpdate?: (value: string) => void,
    extra?: ComponentIncludeExtra<InputCodeItemPropsBasic>,
    index?: string
  ) {
    super(props, naming, components, extra, index)
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
        String(text ?? '').split(''),
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
   * Focuses on the first empty or the last input code item.
   *
   * Фокусируется на первом пустом или на последнем элементе ввода кода.
   */
  readonly focus = (): void => {
    const itemsLength = this.items.value.length

    if (itemsLength > 0) {
      for (const item of this.items.value) {
        if (!isFilled(item.getValue(), true)) {
          item.focusInput?.()
          return
        }
      }

      this.items.value[itemsLength - 1]?.focusInput?.()
    }
  }

  /**
   * Bulk updates the value of the items.
   *
   * Групповое обновление значений элементов.
   * @param value new code string / новая строка кода
   */
  readonly update = (value: string): void => {
    const values = this.getValue(value)

    this.items.value.forEach((item, index) => item.set(values?.[index] ?? ''))

    this.updateTabindex()
    this.focus()
  }

  /**
   * Updates the tabindex of the items.
   *
   * Обновляет tabindex элементов.
   */
  readonly updateTabindex = (): void => {
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
  readonly reset = (): void => {
    this.items.value = []
  }

  /**
   * Resets the values of all code items.
   *
   * Сбрасывает значения всех элементов кода.
   */
  readonly resetValue = (): void => {
    this.update('')
    this.onInput()
  }

  /**
   * Input event handler. Collects full code value and calls update event.
   *
   * Обработчик события ввода. Собирает полное значение кода и вызывает событие обновления.
   */
  readonly onInput = (): void => {
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
  readonly onBackspace = (): void => {
    let isCleared = false

    this.items.value.forEach((item, index) => {
      if (
        !isFilled(item.getValue(), true)
        || isCleared
      ) {
        isCleared = true
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
  ): void => {
    let isMatched = false
    let valueIndex = 0
    const values = this.getValue(text)

    this.items.value.forEach((item) => {
      if (
        valueIndex in values
        && (
          item.index === index
          || isMatched
        )
      ) {
        isMatched = true
        item.set(values?.[valueIndex++] ?? '')
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
  protected override toBinds(): Partial<ConstrBind<InputCodeItemPropsBasic>> {
    const props = this.getProps()
    const binds = super.toBinds()

    return {
      ...binds,
      ...getObjectNoUndefined({
        disabled: props.disabled,
        hide: props.hide,
        isSkeleton: props.isSkeleton,
        name: props.name,
        autocomplete: props.autocomplete,
        match: props.match,
        inputMode: props.inputMode,
        placeholder: props.placeholder
      }),

      ref: (item: unknown) => {
        if (isObject(item)) {
          this.items.value.push(item as Reactive<InputCodeItemExpose>)
        }
      },

      onInput: this.onInput,
      onPaste: this.onPaste,
      onBackspace: this.onBackspace
    }
  }
}

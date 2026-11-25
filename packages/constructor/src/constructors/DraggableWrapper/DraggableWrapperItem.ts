// ai-none

import { forEach } from '@dxtmisha/functional'

import type { DraggableWrapperItemActive } from './DraggableWrapperItemActive'
import type { DraggableWrapperItemFocus } from './DraggableWrapperItemFocus'
import type { DraggableWrapperItemGo } from './DraggableWrapperItemGo'
import type { DraggableWrapperItemSelection } from './DraggableWrapperItemSelection'

/**
 * Orchestrator model for tracking active, selected, and drop target items.
 *
 * Модель-оркестратор для отслеживания активных, выбранных и целевых элементов перетаскивания.
 */
export class DraggableWrapperItem {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param active active item helper factory / фабрика помощника по активному элементу
   * @param focus focused element helper factory / фабрика помощника по сфокусированному элементу
   * @param go drop position target helper factory / фабрика помощника по целевой позиции сброса
   * @param selection selected items helper factory / фабрика помощника по выбранным элементам
   */
  constructor(
    protected readonly active: () => DraggableWrapperItemActive,
    protected readonly focus: () => DraggableWrapperItemFocus,
    protected readonly go: () => DraggableWrapperItemGo,
    protected readonly selection: () => DraggableWrapperItemSelection
  ) {
  }

  /**
   * Returns the list of elements currently involved in drag action.
   *
   * Возвращает список элементов, участвующих в процессе перетаскивания в данный момент.
   * @returns array of HTML elements / массив HTML-элементов
   */
  get(): HTMLElement[] {
    const selection = this.selection()?.get()

    if (selection) {
      return selection
    }

    const active = this.active()?.get()

    if (active) {
      return [active]
    }

    return []
  }

  /**
   * Returns the active item helper.
   *
   * Возвращает помощник по активному элементу.
   * @returns active item helper / помощник по активному элементу
   */
  getActive(): DraggableWrapperItemActive {
    return this.active()
  }

  /**
   * Returns the focused item helper.
   *
   * Возвращает помощник по сфокусированному элементу.
   * @returns focused item helper / помощник по сфокусированному элементу
   */
  getFocus(): DraggableWrapperItemFocus {
    return this.focus()
  }

  /**
   * Returns the target drop position helper.
   *
   * Возвращает помощник по целевой позиции сброса.
   * @returns target drop position helper / помощник по целевой позиции сброса
   */
  getGo(): DraggableWrapperItemGo {
    return this.go()
  }

  /**
   * Returns the selected items helper.
   *
   * Возвращает помощник по выбранным элементам.
   * @returns selected items helper / помощник по выбранным элементам
   */
  getSelection(): DraggableWrapperItemSelection {
    return this.selection()
  }

  /**
   * Returns value list of items involved in drag action.
   *
   * Возвращает список значений элементов, участвующих в перетаскивании.
   * @returns array of item values / массив значений элементов
   */
  getValues(): string[] {
    return forEach(this.get(), item => item?.dataset?.value)
  }

  /**
   * Resets status of all tracked items.
   *
   * Сбрасывает состояние всех отслеживаемых элементов.
   * @returns this instance / текущий экземпляр класса
   */
  reset(): this {
    this.focus()?.reset()
    this.active()?.reset()
    this.selection()?.reset()
    this.go()?.reset()

    return this
  }

  /**
   * Helper method to calculate the reordered array after a drop.
   *
   * Вспомогательный метод для расчета переупорядоченного массива после сброса.
   * @param values original array of items / исходный массив элементов
   * @param valueTo value of the target element / значение целевого элемента
   * @param valueSelection array of values of selected elements / массив значений выбранных элементов
   * @param before DOM layout direction / направление структуры DOM
   * @returns new reordered array / новый переупорядоченный массив
   */
  toNewPosition<T extends { value?: unknown }>(
    values: readonly T[],
    valueTo?: string,
    valueSelection?: (string | undefined)[],
    before?: boolean
  ): T[] {
    if (
      values.length === 0
      || !valueSelection
      || valueSelection.length === 0
    ) {
      return [...values]
    }

    const selectionSet = new Set(valueSelection)
    const items: T[] = []
    const newValues: T[] = []

    for (const item of values) {
      if (
        item.value !== undefined
        && selectionSet.has(String(item.value))
      ) {
        items.push(item)
      } else {
        newValues.push(item)
      }
    }

    if (items.length === 0) {
      return newValues
    }

    if (valueTo !== undefined) {
      const index = newValues.findIndex(
        item => item.value !== undefined && String(item.value) === valueTo
      )

      if (index !== -1) {
        newValues.splice(index + (before ? 0 : 1), 0, ...items)
      } else {
        newValues.unshift(...items)
      }
    } else {
      newValues.unshift(...items)
    }

    return newValues
  }
}

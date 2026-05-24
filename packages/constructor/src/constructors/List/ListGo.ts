import type { Ref } from 'vue'
import {
  type ConstrEmit,
  isSelected,
  ListDataRef
} from '@dxtmisha/functional'

import { ListFocus } from './ListFocus'

import type { ListProps } from './props'
import type { ListEmits } from './types'

/**
 * Class for working with element focus.
 *
 * Класс для работы с фокусировкой элемента.
 */
export class ListGo {
  /** Current item index in the map / Текущий индекс элемента в карте */
  protected index: number = -1

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param element input element/ элемент ввода
   * @param focus object of the class for working with focus/ объект класса для работы с фокусировкой
   * @param data object of the class for working with the list/ объект класса для работы со списком
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly props: ListProps,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly focus: ListFocus,
    protected readonly data: ListDataRef,
    protected readonly emits?: ConstrEmit<ListEmits>
  ) {
  }

  /**
   * Changing the index in focus by the number in the array.
   *
   * Изменение значения в фокусе по номеру в массиве.
   * @param index number in the array / номер в массиве
   * @returns true if the index was changed, false otherwise / true, если индекс был изменен, иначе false
   */
  set(index: number): boolean {
    if (this.index !== index) {
      if (index < 0) {
        this.reset()
      } else {
        this.setByIndex(index)
      }

      return true
    }

    return false
  }

  /**
   * Changes the selected element.
   *
   * Изменяет выбранный элемент.
   * @param value new value / новое значение
   */
  preparation(value: any): void {
    const map = this.data.map.value
    const index = map.findIndex(item => isSelected(item.index, value))

    this.reset()

    if (index >= 0) {
      this.index = index

      if (map?.[index]) {
        this.focus.toElementSelected(map[index].index)
      }
    }
  }

  /**
   * Scrolls the element to the selected element.
   *
   * Прокрутить элемент до выбранного элемента.
   */
  preparationBySelected(): void {
    if (this.props.selected) {
      requestAnimationFrame(() => this.preparation(this.props.selected))
    }
  }

  /**
   * Moves the selected value back.
   *
   * Перемещает выбранное значение назад.
   */
  previous(): void {
    if (
      this.isFirstByParent()
      || !this.isItemElement()
    ) {
      return
    }

    this.setByIndex(this.index - 1)

    if (!this.focus.isElementFocus()) {
      this.previous()
    }
  }

  /**
   * Moves the selected value forward.
   *
   * Перемещает выбранное значение вперед.
   */
  next(): void {
    if (
      this.isLastByParent()
      || !this.isItemElement()
    ) {
      return
    }

    this.setByIndex(this.index + 1)

    if (!this.focus.isElementFocus()) {
      this.next()
    }
  }

  /**
   * Moves to the first element.
   *
   * Перемещает к первому элементу.
   */
  first(): void {
    const parent = this.getParentId()
    const item = this.data.getFirstItemByParent(parent)

    if (item) {
      this.preparation(item.index)
      this.focus.set(item)
    }
  }

  /**
   * Moves to the last element.
   *
   * Перемещает к последнему элементу.
   */
  last(): void {
    const parent = this.getParentId()
    const item = this.data.getLastItemByParent(parent)

    if (item) {
      this.preparation(item.index)
      this.focus.set(item)
    }
  }

  /**
   * Reset all records to the initial state.
   *
   * Сброс всех записей до начального состояния.
   */
  reset(): void {
    this.index = -1
    this.focus.reset()
  }

  /**
   * Opens the window if the element is in it.
   *
   * Открывает окно, если элемент в нем.
   */
  open(): void {
    if (this.focus.isItem()) {
      this.focus.click()
    } else if (
      this.focus.isGroup()
      || this.focus.isMenu()
    ) {
      this.focus.click()
      this.nextByType()
    }
  }

  /**
   * Closes the window if the element is in it.
   *
   * Закрывает окно, если элемент в нем.
   */
  close(): void {
    const item = this.getMainItem()

    if (item) {
      item.click()

      const focus = this.data.getItemByIndex(item.dataset.value)

      if (focus) {
        this.set(focus.key)
        this.focus.set(focus.item)
      }
    } else {
      this.emits?.('close')
    }
  }

  /**
   * Stops the event.
   *
   * Останавливает событие.
   */
  stop(): void {
    this.focus.reset()
  }

  /**
   * Focuses on the element that has highlight attribute.
   *
   * Фокусируется на элементе, который имеет атрибут подсветки.
   * @returns this instance / этот экземпляр
   */
  toHighlight(): this {
    const element = this.element.value?.querySelector<HTMLElement>('[data-highlight]')

    if (element) {
      this.preparation(element.dataset.value ?? '')
      this.setByIndex(this.index)
    }

    return this
  }

  /**
   * Checks if there's any selectable item in the element.
   *
   * Проверяет, есть ли в элементе какой-либо выбираемый элемент.
   * @returns true if exists, false otherwise / true, если существует, иначе false
   */
  protected isItemElement(): boolean {
    return Boolean(
      this.element.value?.querySelector<HTMLElement>('[data-value]')
    )
  }

  /**
   * Checks if the current element is the first in the parent group.
   *
   * Проверяет, является ли текущий элемент первым в родительской группе.
   * @returns true if first by parent, false otherwise / true, если первый по родителю, иначе false
   */
  protected isFirstByParent(): boolean {
    const parent = this.getParentId()

    if (
      parent
      && this.focus.isElement()
    ) {
      return this.data.getFirstItemByParent(parent)?.index === this.focus.item.value?.index
    }

    return false
  }

  /**
   * Checks if the current element is the last in the parent group.
   *
   * Проверяет, является ли текущий элемент последним в родительской группе.
   * @returns true if last by parent, false otherwise / true, если последний по родителю, иначе false
   */
  protected isLastByParent(): boolean {
    const parent = this.getParentId()

    if (
      parent
      && this.focus.isElement()
    ) {
      return this.data.getLastItemByParent(parent)?.index === this.focus.item.value?.index
    }

    return false
  }

  /**
   * Checks if the element is in a window.
   *
   * Проверяет, находится ли элемент в окне.
   * @returns HTML element if in window, undefined otherwise / HTML-элемент, если в окне, иначе undefined
   */
  protected getMainItem(): HTMLDivElement | undefined {
    const parent = this.getParentId()

    if (
      parent
      && !this.focus.isOpen()
    ) {
      return this.focus.getElement(parent)
    }

    return undefined
  }

  /**
   * Returns the parent identifier.
   *
   * Возвращает идентификатор родителя.
   * @returns parent identifier or undefined / идентификатор родителя или undefined
   */
  protected getParentId(): string | undefined {
    return this.focus.item.value?.parent
  }

  /**
   * Changing the index in focus by the number in the array.
   *
   * Изменение значения в фокусе по номеру в массиве.
   * @param index number in the array / номер в массиве
   */
  protected setByIndex(index: number): void {
    const length = this.data.getLengthByMap()

    if (index >= length) {
      this.index = 0
    } else if (index < 0) {
      this.index = length - 1
    } else {
      this.index = index
    }

    const item = this.data.map.value[this.index]

    if (
      item
      && (
        item.type === 'item'
        || item.type === 'group'
        || item.type === 'menu'
      )
    ) {
      this.focus.set(item)
    } else {
      this.focus.reset()
    }
  }

  /**
   * Moves the selected value forward by type.
   *
   * Перемещает выбранное значение вперед по типу.
   */
  protected nextByType(): void {
    this.setByIndex(this.index + 1)

    if (
      this.focus.isItem()
      || this.focus.isGroup()
      || this.focus.isMenu()
    ) {
      return
    } else {
      this.nextByType()
    }
  }
}

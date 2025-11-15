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
  protected index: number = -1

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param focus object of the class for working with focus/ объект класса для работы с фокусировкой
   * @param data object of the class for working with the list/ объект класса для работы со списком
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly props: ListProps,
    protected readonly focus: ListFocus,
    protected readonly data: ListDataRef,
    protected readonly emits?: ConstrEmit<ListEmits>
  ) {
  }

  /**
   * Changing the index in focus by the number in the array.
   *
   * Изменение значения в фокусе по номеру в массиве.
   * @param index number in the array/ номер в массиве
   */
  set(index: number): boolean {
    if (this.index !== index) {
      if (index < 0) {
        this.reset()
      } else {
        this.setByIndex(index)
      }

      this.focus.toElementFocus()
      return true
    }

    return false
  }

  /**
   * Changes the selected element.
   *
   * Изменяет выбранный элемент.
   * @param value new value/ новое значение
   */
  preparation(value: any) {
    const map = this.data.map.value
    const index = map.findIndex(item => isSelected(item.index, value))

    this.reset()

    if (index) {
      this.index = index

      if (map?.[index]) {
        this.focus.toElementSelected(map[index].index)
      }
    }
  }

  /**
   * Scrolls the element to the selected element
   *
   * Прокрутить элемент до выбранного элемента
   */
  preparationBySelected() {
    if (this.props.selected) {
      requestAnimationFrame(() => this.preparation(this.props.selected))
    }
  }

  /**
   * Moves the selected value back.
   *
   * Перемещает выбранное значение назад.
   */
  previous() {
    if (this.isFirstByParent()) {
      return
    }

    this.setByIndex(this.index - 1)

    if (!this.focus.toElementFocus()) {
      this.previous()
    }
  }

  /**
   * Moves the selected value forward.
   *
   * Перемещает выбранное значение вперед.
   */
  next() {
    if (this.isLastByParent()) {
      return
    }

    this.setByIndex(this.index + 1)

    if (!this.focus.toElementFocus()) {
      this.next()
    }
  }

  /**
   * Reset all records to the initial state.
   *
   * Сброс всех записей до начального состояния.
   */
  reset() {
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
  stop() {
    this.focus.reset()
  }

  /**
   * Checks if the next element is in the same window.
   *
   * Проверяет, находится ли следующий элемент в том же окне.
   */
  protected isFirstByParent(): boolean {
    const parent = this.focus.item.value?.parent

    if (
      parent
      && this.focus.isElement()
    ) {
      return this.data.getFirstItemByParent(parent)?.index === this.focus.item.value?.index
    }

    return false
  }

  /**
   * Checks if the next element is in the same window.
   *
   * Проверяет, находится ли следующий элемент в том же окне.
   */
  protected isLastByParent(): boolean {
    const parent = this.focus.item.value?.parent

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
   */
  protected getMainItem(): HTMLDivElement | undefined {
    const parent = this.focus.item.value?.parent

    if (
      parent
      && !this.focus.isOpen()
    ) {
      return this.focus.getElement(parent)
    }

    return undefined
  }

  /**
   * Changing the index in focus by the number in the array.
   *
   * Изменение значения в фокусе по номеру в массиве.
   * @param index number in the array/ номер в массиве
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

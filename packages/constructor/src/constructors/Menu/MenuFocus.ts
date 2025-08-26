import { computed, type Ref, ref } from 'vue'
import {
  goScroll,
  ListData,
  type ListDataItem,
  type ListSelectedItem
} from '@dxt-ui/functional'
import type { MenuProps } from './props'

/**
 * Class for working with element focus.
 *
 * Класс для работы с фокусировкой элемента.
 */
export class MenuFocus {
  readonly item = ref<ListDataItem>()

  protected index: number = -1

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param data object of the class for working with the list/ объект класса для работы со списком
   * @param element input element/ элемент ввода
   */
  constructor(
    protected readonly props: MenuProps,
    protected readonly data: ListData,
    protected readonly element: Ref<HTMLElement | undefined>
  ) {
  }

  /** Returns the value of the selected element/ Возвращает значение выбранного элемента */
  readonly focus = computed<ListSelectedItem | undefined>(() => this.item.value?.index)

  /**
   * Checks if the element is a group.
   *
   * Проверяет, является ли элемент группой.
   */
  isGroup(): boolean {
    return this.item.value?.type === 'group'
  }

  /**
   * Returns the selected element.
   *
   * Возвращает выбранный элемент.
   * @param index element index/ индекс элемента
   */
  getElement(index?: string): HTMLElement | undefined {
    return this.element.value?.querySelector<HTMLElement>(`*[data-value="${index ?? this.item.value?.index}"]`) ?? undefined
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

      this.update()
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
    const index = map.findIndex(item => item.index === value)

    this.reset()

    if (index) {
      this.index = index

      if (index in map) {
        this.toElement(this.getElement(map[index].index))
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
    this.setByIndex(this.index - 1)

    if (!this.update()) {
      this.previous()
    }
  }

  /**
   * Moves the selected value forward.
   *
   * Перемещает выбранное значение вперед.
   */
  next() {
    this.setByIndex(this.index + 1)

    if (!this.update()) {
      this.next()
    }
  }

  /**
   * Performs a click on the selected element.
   *
   * Выполняет клик на выбранном элементе.
   */
  click() {
    this.getElement()?.click()
  }

  /**
   * Reset all records to the initial state.
   *
   * Сброс всех записей до начального состояния.
   */
  reset() {
    this.index = -1
    this.item.value = undefined
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
      item.type === 'item'
      || item.type === 'group'
      || item.type === 'menu'
      || item.type === 'menu-group'
    ) {
      this.item.value = item
    } else {
      this.item.value = undefined
    }
  }

  /**
   * Scrolls to the desired element.
   *
   * Скроллирует к нужному элементу.
   * @param element the element to scroll to/ элемент, до которого надо проскроллить
   */
  protected toElement(element?: HTMLElement) {
    goScroll('*[data-window-body]', element)
  }

  /**
   * Moves to the value in focus.
   *
   * Перемещает к значению в фокусе.
   */
  protected update(): boolean {
    const element = this.getElement()

    if (element) {
      this.toElement(element)

      return true
    }

    return false
  }
}

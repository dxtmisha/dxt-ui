import { computed, type Ref, ref } from 'vue'
import {
  goScroll,
  type ListDataItem,
  type ListSelectedItem
} from '@dxt-ui/functional'
import type { ListProps } from './props'

/**
 * Class for working with element focus.
 *
 * Класс для работы с фокусировкой элемента.
 */
export class ListFocus {
  readonly item = ref<ListDataItem>()

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param element input element/ элемент ввода
   * @param listId unique list identifier/ уникальный идентификатор списка
   */
  constructor(
    protected readonly props: ListProps,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly listId: number
  ) {
  }

  /** Returns the value of the selected element/ Возвращает значение выбранного элемента */
  readonly focus = computed<ListSelectedItem | undefined>(() => this.item.value?.index ?? this.props.focus)

  /**
   * Returns the selected element.
   *
   * Возвращает выбранный элемент.
   * @param index element index/ индекс элемента
   */
  isElement(index?: string): boolean {
    return Boolean(this.getElement(index))
  }

  /**
   * Checks if the element is an item.
   *
   * Проверяет, является ли элемент элементом.
   */
  isItem(): boolean {
    return this.item.value?.type === 'item'
  }

  /**
   * Checks if the element is a group.
   *
   * Проверяет, является ли элемент группой.
   */
  isGroup(): boolean {
    return this.item.value?.type === 'group'
  }

  /**
   * Checks if the element is a menu.
   *
   * Проверяет, является ли элемент меню.
   */
  isMenu(): boolean {
    return this.item.value?.type === 'menu'
  }

  /**
   * Checks if the group or menu is open.
   *
   * Проверяет, открыта ли группа или меню.
   */
  isOpen(): boolean {
    const element = this.getElement()

    if (
      element
      && (this.isGroup() || this.isMenu())
    ) {
      return element.dataset.status === 'open'
    }

    return false
  }

  /**
   * Returns the selected element.
   *
   * Возвращает выбранный элемент.
   */
  get(): ListDataItem | undefined {
    return this.item.value
  }

  /**
   * Returns the selector for the desired element by its index.
   *
   * Возвращает селектор нужного элемента по его индексу.
   * @param index element index/ индекс элемента
   */
  getSelector(index?: string): string {
    return `[data-list-id="${this.listId}"][data-value="${index ?? this.item.value?.index}"]`
  }

  /**
   * Returns the HTML element of the selected item.
   *
   * Возвращает HTML элемент выбранного элемента.
   * @param index element index/ индекс элемента
   */
  getElement(index?: string): HTMLDivElement | undefined {
    return document.querySelector<HTMLDivElement>(this.getSelector(index)) ?? undefined
  }

  /**
   * Changes the selected element.
   *
   * Изменяет выбранный элемент.
   * @param item new value/ новое значение
   */
  set(item: ListDataItem | undefined): this {
    if (this.item.value !== item) {
      this.item.value = item
    }

    return this
  }

  /**
   * Resets the selected element.
   *
   * Сбрасывает выбранный элемент.
   */
  reset(): this {
    this.set(undefined)
    return this
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
   * Moves to the value in focus.
   *
   * Перемещает к значению в фокусе.
   */
  toElementFocus(): boolean {
    if (this.item.value) {
      const element = this.getElement()

      if (element) {
        this.toElement(element)

        return true
      }
    }

    return false
  }

  /**
   * Scrolls to the desired element by its index.
   *
   * Скроллирует к нужному элементу по его индексу.
   * @param index element index/ индекс элемента
   */
  toElementSelected(index: string): this {
    this.toElement(this.getElement(index))
    return this
  }

  /**
   * Scrolls to the desired element.
   *
   * Скроллирует к нужному элементу.
   * @param element the element to scroll to/ элемент, до которого надо проскроллить
   */
  protected toElement(element?: HTMLElement) {
    const selector = '*[data-window-body]'

    if (
      element
      && element.closest(selector)
    ) {
      goScroll(selector, element)
    }
  }
}

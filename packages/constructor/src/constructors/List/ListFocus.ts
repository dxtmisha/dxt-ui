// ai-none

import { computed, type Ref, ref } from 'vue'
import {
  DesignLifecycleAbstract,
  goScroll,
  isDomRuntime,
  isInput,
  type ListDataItem,
  type ListSelectedItem
} from '@dxtmisha/functional'
import type { ListProps } from './props'

/** Maximum number of attempts to set focus / Максимальное количество попыток установки фокуса */
const LIST_MAX_EXPECTATIONS_FOCUS = 24

/** Delay in milliseconds between focus polling attempts / Задержка (мс) между попытками установки фокуса */
const LIST_FOCUS_RETRY_DELAY_MS = 128

/**
 * Class for working with element focus.
 *
 * Класс для работы с фокусировкой элемента.
 */
export class ListFocus extends DesignLifecycleAbstract {
  /** Active item / Активный элемент */
  readonly item = ref<ListDataItem>()

  /** Pending focus retry timeout / Ожидающий тайм-аут повторной попытки фокуса */
  protected focusTimeout?: ReturnType<typeof setTimeout>

  /**
   * Constructor
   * @param props input data / входные данные
   * @param element input element / элемент ввода
   * @param listId unique list identifier / уникальный идентификатор списка
   */
  constructor(
    protected readonly props: Readonly<ListProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly listId: number
  ) {
    super()
  }

  /** Returns the value of the selected element / Возвращает значение выбранного элемента */
  readonly focus = computed<ListSelectedItem | undefined>(() => this.item.value?.index ?? this.props.focus)

  /** Cleanup lifecycle resources on unmount / Очистка ресурсов жизненного цикла при размонтировании */
  override readonly onUnmounted = (): void => {
    this.clearTimeout()
  }

  /**
   * Checks if the element exists.
   *
   * Проверяет, существует ли элемент.
   * @param index element index / индекс элемента
   * @returns true if element exists / true, если элемент существует
   */
  isElement(index?: string): boolean {
    return Boolean(this.getElement(index))
  }

  /**
   * Checks if the active focused element and its DOM representation exist.
   *
   * Проверяет, существует ли активный сфокусированный элемент и его представление в DOM.
   * @returns true if the focused element exists, false otherwise / true, если сфокусированный элемент существует, иначе false
   */
  isElementFocus(): boolean {
    return Boolean(this.item.value && this.getElement())
  }

  /**
   * Checks if the element is an item.
   *
   * Проверяет, является ли элемент элементом.
   * @returns true if the element is an item, false otherwise / true, если элемент является элементом, иначе false
   */
  isItem(): boolean {
    return this.item.value?.type === 'item'
  }

  /**
   * Checks if the element is a group.
   *
   * Проверяет, является ли элемент группой.
   * @returns true if the element is a group, false otherwise / true, если элемент является группой, иначе false
   */
  isGroup(): boolean {
    return this.item.value?.type === 'group'
  }

  /**
   * Checks if the element is a menu.
   *
   * Проверяет, является ли элемент меню.
   * @returns true if the element is a menu, false otherwise / true, если элемент является меню, иначе false
   */
  isMenu(): boolean {
    return this.item.value?.type === 'menu'
  }

  /**
   * Checks if the group or menu is open.
   *
   * Проверяет, открыта ли группа или меню.
   * @returns true if the group or menu is open, false otherwise / true, если группа или меню открыты, иначе false
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
   * @returns the selected element / выбранный элемент
   */
  get(): ListDataItem | undefined {
    return this.item.value
  }

  /**
   * Returns the selector for the desired element by its index.
   *
   * Возвращает селектор нужного элемента по его индексу.
   * @param index element index / индекс элемента
   * @returns selector string / строка селектора
   */
  getSelector(index?: string): string {
    const targetIndex = String(index ?? this.item.value?.index ?? '')
    const escapedIndex = targetIndex.replace(/\\/g, '\\\\').replace(/"/g, '\\"')

    return `[data-list-id="${this.listId}"][data-value="${escapedIndex}"]`
  }

  /**
   * Returns the HTML element of the selected item.
   *
   * Возвращает HTML элемент выбранного элемента.
   * @param index element index / индекс элемента
   * @returns HTML element / HTML-элемент
   */
  getElement(index?: string): HTMLDivElement | undefined {
    if (isDomRuntime()) {
      return document.querySelector<HTMLDivElement>(this.getSelector(index)) ?? undefined
    }

    return undefined
  }

  /**
   * Changes the selected element.
   *
   * Изменяет выбранный элемент.
   * @param item new value / новое значение
   * @returns this instance / этот экземпляр
   */
  set(item: ListDataItem | undefined): this {
    if (this.item.value !== item) {
      this.clearTimeout()
      this.item.value = item
      this.toFocus()
    }

    return this
  }

  /**
   * Resets the selected element.
   *
   * Сбрасывает выбранный элемент.
   * @returns this instance / этот экземпляр
   */
  reset(): this {
    this.clearTimeout()
    this.set(undefined)
    return this
  }

  /**
   * Performs a click on the selected element.
   *
   * Выполняет клик на выбранном элементе.
   */
  click(): void {
    this.getElement()?.click()
  }

  /**
   * Scrolls to the desired element by its index.
   *
   * Скроллирует к нужному элементу по его индексу.
   * @param index element index / индекс элемента
   * @returns this instance / этот экземпляр
   */
  toElementSelected(index: string): this {
    this.toElement(this.getElement(index))
    return this
  }

  /**
   * Scrolls to the desired element.
   *
   * Скроллирует к нужному элементу.
   * @param element the element to scroll to / элемент, до которого надо проскроллить
   */
  protected toElement(element?: HTMLElement): void {
    const selector = '*[data-window-body]'

    if (
      element
      && element.closest(selector)
    ) {
      goScroll(selector, element)
      this.toFocus()
    }
  }

  /**
   * Sets focus to the element.
   *
   * Устанавливает фокус на элемент.
   * @param max maximum number of attempts / максимальное количество попыток
   */
  protected toFocus(max: number = LIST_MAX_EXPECTATIONS_FOCUS): void {
    if (
      max > 0
      && isDomRuntime()
      && this.element.value
      && this.props.control
      && !isInput(document.activeElement)
    ) {
      const element = this.getElement()

      if (element) {
        element.focus()
      } else {
        (document.activeElement as HTMLElement)?.blur()
        this.clearTimeout()
        this.focusTimeout = setTimeout(() => {
          this.focusTimeout = undefined
          this.toFocus(max - 1)
        }, LIST_FOCUS_RETRY_DELAY_MS)
      }
    }
  }

  /**
   * Clears any pending focus retry timer.
   *
   * Очищает активный таймер повторной попытки фокусировки.
   */
  protected clearTimeout(): void {
    if (this.focusTimeout !== undefined) {
      clearTimeout(this.focusTimeout)
      this.focusTimeout = undefined
    }
  }
}

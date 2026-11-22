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

/** Consecutive visible frames required to stop scroll tracking / Число стабильных видимых кадров для остановки прокрутки */
const LIST_SCROLL_IDLE_FRAMES = 3

/** Pixel tolerance when checking container visibility bounds / Допуск в пикселях при проверке видимости внутри контейнера */
const LIST_SCROLL_POSITION_TOLERANCE = 1

/** Window body scroll container selector / Селектор контейнера прокрутки тела окна */
const LIST_WINDOW_BODY_SELECTOR = '*[data-window-body]'

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

  /** Active scroll stabilization animation frame identifier / Идентификатор кадра активной стабилизации прокрутки */
  protected scrollFrameId?: number

  /** Container monitored for user interaction during scroll tracking / Контейнер, отслеживаемый на действия пользователя при прокрутке */
  protected scrollContainer?: HTMLElement

  /**
   * Constructor.
   *
   * Конструктор.
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
    this.clearScroll()
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
    this.clearScroll()
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
    const container = element?.closest<HTMLElement>(LIST_WINDOW_BODY_SELECTOR)

    this.clearScroll()

    if (
      element
      && container
    ) {
      goScroll(LIST_WINDOW_BODY_SELECTOR, element)
      this.toFocus()
      this.watchScrollVisibility(container, element)
    }
  }

  /**
   * Re-runs scroll via goScroll in requestAnimationFrame until element stays visible or user interacts.
   *
   * Повторяет прокрутку через goScroll в requestAnimationFrame, пока элемент не станет видим или пользователь не начнёт действие.
   * @param container scroll container element / элемент контейнера прокрутки
   * @param element target item element / целевой элемент списка
   */
  protected watchScrollVisibility(
    container: HTMLElement,
    element: HTMLElement
  ): void {
    this.scrollContainer = container
    container.addEventListener('wheel', this.onScrollAbort, { passive: true, once: true })
    container.addEventListener('touchstart', this.onScrollAbort, { passive: true, once: true })
    container.addEventListener('pointerdown', this.onScrollAbort, { passive: true, once: true })

    this.stepScrollVisibility(container, element)
  }

  /**
   * Checks element visibility on the next animation frame and re-scrolls if needed.
   *
   * Проверяет видимость элемента на следующем кадре анимации и при необходимости повторяет прокрутку.
   * @param container scroll container element / элемент контейнера прокрутки
   * @param element target item element / целевой элемент списка
   * @param idleFrames consecutive visible frames count / количество последовательных видимых кадров
   * @param attempts total check attempts / общее количество попыток проверки
   */
  protected stepScrollVisibility(
    container: HTMLElement,
    element: HTMLElement,
    idleFrames: number = 0,
    attempts: number = 0
  ): void {
    this.scrollFrameId = requestAnimationFrame(() => {
      this.scrollFrameId = undefined

      if (!element.isConnected) {
        this.clearScroll()
        return
      }

      idleFrames = this.updateScrollVisibility(container, element, idleFrames)
      attempts++

      if (
        idleFrames >= LIST_SCROLL_IDLE_FRAMES
        || attempts >= LIST_MAX_EXPECTATIONS_FOCUS
      ) {
        this.clearScroll()
        return
      }

      this.stepScrollVisibility(container, element, idleFrames, attempts)
    })
  }

  /**
   * Verifies element visibility inside the scroll container, re-scrolls if hidden, and returns updated idle frame count.
   *
   * Проверяет видимость элемента внутри контейнера прокрутки, докручивает при необходимости и возвращает обновлённый счётчик стабильных кадров.
   * @param container scroll container element / элемент контейнера прокрутки
   * @param element target item element / целевой элемент списка
   * @param idleFrames current consecutive visible frames count / текущее число последовательных видимых кадров
   * @returns updated idle frames count / обновлённое число стабильных кадров
   */
  protected updateScrollVisibility(
    container: HTMLElement,
    element: HTMLElement,
    idleFrames: number
  ): number {
    const containerRect = container.getBoundingClientRect()
    const targetRect = element.getBoundingClientRect()
    const isVisible = targetRect.top >= containerRect.top - LIST_SCROLL_POSITION_TOLERANCE
      && targetRect.bottom <= containerRect.bottom + LIST_SCROLL_POSITION_TOLERANCE

    if (!isVisible) {
      goScroll(LIST_WINDOW_BODY_SELECTOR, element)
      return 0
    }

    return idleFrames + 1
  }

  /**
   * Aborts active scroll tracking when the user begins interacting with the container.
   *
   * Прерывает активное отслеживание прокрутки при начале взаимодействия пользователя с контейнером.
   */
  protected readonly onScrollAbort = (): void => {
    this.clearScroll()
  }

  /**
   * Clears active scroll tracking frame and interaction listeners.
   *
   * Очищает активный кадр отслеживания прокрутки и слушатели событий.
   */
  protected clearScroll(): void {
    if (this.scrollFrameId !== undefined) {
      cancelAnimationFrame(this.scrollFrameId)
      this.scrollFrameId = undefined
    }

    if (this.scrollContainer) {
      this.scrollContainer.removeEventListener('wheel', this.onScrollAbort)
      this.scrollContainer.removeEventListener('touchstart', this.onScrollAbort)
      this.scrollContainer.removeEventListener('pointerdown', this.onScrollAbort)
      this.scrollContainer = undefined
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

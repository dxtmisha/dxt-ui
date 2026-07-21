import {
  onMounted,
  onUnmounted,
  watch,
  type Ref
} from 'vue'
import {
  getRef,
  EventItem,
  getElementOrWindow
} from '@dxtmisha/functional'

import { type StickyPropsInclude } from '../types/stickyTypes'

/**
 * Class for managing sticky positioning of an element relative to its parent's visible area.
 * It tracks scroll and resize actions to compute and update the visual offset.
 *
 * Класс для управления липким позиционированием элемента относительно видимой области его родителя.
 * Отслеживает действия прокрутки и изменения размера для вычисления и обновления визуального смещения.
 */
export class StickyInclude {
  /** Scroll container target / Целевой контейнер прокрутки */
  protected scrollContainer?: HTMLElement | Window

  /** Event listener for scroll container / Слушатель событий для контейнера прокрутки */
  protected eventScroll?: EventItem<HTMLElement | Window, Event>

  /** Event listener for parent resizing / Слушатель событий для изменения размера родителя */
  protected eventResizeParent?: EventItem<HTMLElement, Event>

  /** Event listener for element resizing / Слушатель событий для изменения размера элемента */
  protected eventResizeElement?: EventItem<HTMLElement, Event>

  /**
   * Constructor
   *
   * Конструктор
   * @param props input properties / входящие свойства
   * @param className class name / название класса
   * @param element target element reference / ссылка на целевой элемент
   * @param parent parent element reference / ссылка на родительский элемент
   */
  constructor(
    protected readonly props: StickyPropsInclude,
    protected readonly className: string,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly parent: Ref<HTMLElement | undefined>
  ) {
    onMounted(() => {
      watch(
        [this.element, this.parent],
        () => this.reset()
      )

      this.start()
    })

    onUnmounted(() => {
      this.stop()
    })
  }

  /**
   * Finds the closest scrollable ancestor of the element, or window if none found.
   *
   * Находит ближайшего прокручиваемого предка элемента или window, если таковой не найден.
   * @returns scrollable ancestor or window / прокручиваемый предок или window
   */
  protected getScrollContainer(): HTMLElement | Window {
    let parentElement = this.parent.value?.parentElement

    while (parentElement) {
      const style = window.getComputedStyle(parentElement)

      if (
        style.overflowY === 'auto'
        || style.overflowY === 'scroll'
        || style.overflow === 'auto'
        || style.overflow === 'scroll'
      ) {
        return parentElement
      }

      parentElement = parentElement.parentElement
    }

    return window
  }

  /**
   * Starts tracking position and listening to events.
   *
   * Начинает отслеживание положения и прослушивание событий.
   */
  protected start(): void {
    const element = this.element.value
    const parent = this.parent.value

    if (
      element
      && parent
    ) {
      this.initScrollContainer()
        .initEventScroll()
        .initEventResizeParent()
        .initEventResizeElement()

      this.updatePosition()
    }
  }

  /**
   * Stops tracking position and removes all event listeners.
   *
   * Останавливает отслеживание положения и удаляет все слушатели событий.
   */
  protected stop(): void {
    if (this.eventScroll) {
      this.eventScroll.stop()
      this.eventScroll = undefined
    }

    if (this.eventResizeParent) {
      this.eventResizeParent.stop()
      this.eventResizeParent = undefined
    }

    if (this.eventResizeElement) {
      this.eventResizeElement.stop()
      this.eventResizeElement = undefined
    }
  }

  /**
   * Resets active listeners and starts tracking.
   *
   * Сбрасывает активные слушатели и начинает отслеживание.
   */
  protected reset(): void {
    this.stop()
    this.start()
  }

  /**
   * Initializes the scroll container.
   *
   * Инициализирует контейнер прокрутки.
   */
  protected initScrollContainer(): this {
    this.scrollContainer = getElementOrWindow(this.props.stickyScrollContainer)
      ?? this.getScrollContainer()

    return this
  }

  /**
   * Initializes and starts scroll event listener.
   *
   * Инициализирует и запускает слушатель событий прокрутки.
   */
  protected initEventScroll(): this {
    if (this.scrollContainer) {
      this.eventScroll = new EventItem(
        this.scrollContainer,
        'scroll-sync',
        this.updatePosition
      )
        .start()
    }

    return this
  }

  /**
   * Initializes and starts parent resizing event listener.
   *
   * Инициализирует и запускает слушатель событий изменения размера родителя.
   */
  protected initEventResizeParent(): this {
    const parent = this.parent.value

    if (parent) {
      this.eventResizeParent = new EventItem(
        parent,
        'resize',
        this.updatePosition
      )
        .start()
    }

    return this
  }

  /**
   * Initializes and starts element resizing event listener.
   *
   * Инициализирует и запускает слушатель событий изменения размера элемента.
   */
  protected initEventResizeElement(): this {
    const element = this.element.value

    if (element) {
      this.eventResizeElement = new EventItem(
        element,
        'resize',
        this.updatePosition
      )
        .start()
    }

    return this
  }

  /**
   * Computes position and updates element style positioning.
   *
   * Вычисляет положение и обновляет стили позиционирования элемента.
   */
  readonly updatePosition = (): void => {
    const element = this.element.value
    const parent = this.parent.value

    if (
      !element
      || !parent
    ) {
      return
    }

    const parentRect = parent.getBoundingClientRect()
    const elementHeight = element.offsetHeight
    const topOffset = getRef(this.props.stickyTop) ?? 0
    let boundaryTop = 0

    if (
      this.scrollContainer
      && this.scrollContainer !== window
    ) {
      const containerRect = (this.scrollContainer as HTMLElement).getBoundingClientRect()
      boundaryTop = containerRect.top
    }

    const calculatedTop = (boundaryTop + topOffset) - parentRect.top
    const maximumTop = parentRect.height - elementHeight
    const clampedTop = Math.max(0, Math.min(calculatedTop, maximumTop))

    element.style.setProperty(`--${this.className}-sys-sticky-top`, `${clampedTop}px`)
  }
}

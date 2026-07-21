import {
  onMounted,
  onUnmounted,
  watch,
  type Ref
} from 'vue'
import {
  getRef,
  EventItem,
  getElementOrWindow,
  executeFunction
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
  /** Scroll container targets / Целевые контейнеры прокрутки */
  protected scrollContainer: (HTMLElement | Window)[] = []

  /** Event listeners for scroll containers / Слушатели событий для контейнеров прокрутки */
  protected eventScroll: EventItem<HTMLElement | Window, Event>[] = []

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
    protected readonly props: StickyPropsInclude | (() => StickyPropsInclude),
    protected readonly className: string,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly parent: Ref<HTMLElement | undefined>
  ) {
    onMounted(() => {
      watch(
        [
          this.element,
          this.parent,
          () => this.isEnabled()
        ],
        () => this.reset()
      )

      this.start()
    })

    onUnmounted(() => this.stop())
  }

  /**
   * Returns the configuration properties.
   *
   * Возвращает свойства конфигурации.
   * @returns properties / свойства
   */
  protected getProps(): StickyPropsInclude {
    return executeFunction(this.props)
  }

  /**
   * Checks if sticky positioning is enabled.
   *
   * Проверяет, включено ли липкое позиционирование.
   * @returns true if sticky is enabled / true, если липкое позиционирование включено
   */
  protected isEnabled(): boolean {
    return getRef(this.getProps().stickyEnable) ?? true
  }

  /**
   * Returns the name of the custom CSS property for the sticky top offset.
   *
   * Возвращает имя пользовательского CSS-свойства для верхнего отступа липкого элемента.
   * @returns custom CSS property name / имя пользовательского CSS-свойства
   */
  protected getCustomProperty(): string {
    return `--${this.className}-sys-sticky-fix`
  }

  /**
   * Returns the name of the custom CSS property for the sticky height.
   *
   * Возвращает имя пользовательского CSS-свойства для высоты липкого элемента.
   * @returns custom CSS property name / имя пользовательского CSS-свойства
   */
  protected getCustomPropertyHeight(): string {
    return `--${this.className}-sys-sticky-height`
  }

  /**
   * Returns the dataset property name for the sticky state.
   *
   * Возвращает имя свойства dataset для состояния липкости.
   * @returns dataset property name / имя свойства dataset
   */
  protected getDatasetProperty(): string {
    return 'sticky'
  }

  /**
   * Finds the closest scrollable ancestor of the element, or window if none found.
   *
   * Находит ближайшего прокручиваемого предка элемента или window, если таковой не найден.
   * @returns scrollable ancestor or window / прокручиваемый предок или window
   */
  protected getScrollContainer(): (HTMLElement | Window)[] {
    const containers: (HTMLElement | Window)[] = []
    let parentElement = this.parent.value?.parentElement

    while (parentElement) {
      const style = window.getComputedStyle(parentElement)

      if (
        style.overflowY === 'auto'
        || style.overflowY === 'scroll'
        || style.overflow === 'auto'
        || style.overflow === 'scroll'
      ) {
        containers.push(parentElement)
      }

      parentElement = parentElement.parentElement
    }

    containers.push(window)

    return containers
  }

  /**
   * Starts tracking position and listening to events.
   *
   * Начинает отслеживание положения и прослушивание событий.
   */
  protected start(): void {
    if (!this.isEnabled()) {
      return
    }

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
    this.eventScroll.forEach(event => event.stop())
    this.eventScroll = []

    if (this.eventResizeParent) {
      this.eventResizeParent.stop()
      this.eventResizeParent = undefined
    }

    if (this.eventResizeElement) {
      this.eventResizeElement.stop()
      this.eventResizeElement = undefined
    }

    const element = this.element.value

    if (element) {
      element.style.removeProperty(this.getCustomProperty())
      element.style.removeProperty(this.getCustomPropertyHeight())
      delete element.dataset[this.getDatasetProperty()]
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
    const customContainer = getElementOrWindow(this.getProps().stickyScrollContainer)

    if (customContainer) {
      this.scrollContainer = [customContainer]
    } else {
      this.scrollContainer = this.getScrollContainer()
    }

    return this
  }

  /**
   * Initializes and starts scroll event listener.
   *
   * Инициализирует и запускает слушатель событий прокрутки.
   */
  protected initEventScroll(): this {
    this.scrollContainer.forEach((container) => {
      const event = new EventItem(
        container,
        'scroll',
        this.updatePosition
      )

      event.start()
      this.eventScroll.push(event)
    })

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
   * Calculates the top position offset bounded by parent dimensions.
   *
   * Вычисляет верхнее смещение положения, ограниченное размерами родителя.
   * @returns calculated top offset in pixels or undefined / вычисленный верхний отступ в пикселях или undefined
   */
  protected getClampedTop(): number | undefined {
    const element = this.element.value
    const parent = this.parent.value

    if (
      !element
      || !parent
    ) {
      return undefined
    }

    const parentRect = parent.getBoundingClientRect()
    const elementHeight = element.offsetHeight
    const topOffset = getRef(this.getProps().stickyTop) ?? 0
    let boundaryTop = 0

    const firstContainer = this.scrollContainer[0]

    if (
      firstContainer
      && firstContainer !== window
    ) {
      const containerRect = (firstContainer as HTMLElement).getBoundingClientRect()
      boundaryTop = containerRect.top
    }

    const calculatedTop = (boundaryTop + topOffset) - parentRect.top
    const maximumTop = parentRect.height - elementHeight

    return Math.max(0, Math.min(calculatedTop, maximumTop))
  }

  /**
   * Computes position and updates element style positioning.
   *
   * Вычисляет положение и обновляет стили позиционирования элемента.
   */
  readonly updatePosition = (): void => {
    const element = this.element.value
    const clampedTop = this.getClampedTop()

    if (
      element
      && clampedTop !== undefined
    ) {
      element.style.setProperty(this.getCustomProperty(), `${clampedTop}px`)
      element.style.setProperty(this.getCustomPropertyHeight(), `${element.offsetHeight}px`)

      if (clampedTop > 0) {
        element.dataset[this.getDatasetProperty()] = 'active'
      } else {
        delete element.dataset[this.getDatasetProperty()]
      }
    }
  }
}

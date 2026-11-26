import {
  getCurrentInstance,
  onMounted,
  onUnmounted,
  unref,
  watch,
  type Ref,
  type WatchStopHandle
} from 'vue'
import {
  EventItem,
  executeFunction,
  getElementOrWindow,
  isDomRuntime,
  type DesignName
} from '@dxtmisha/functional'

import { type StickyPropsInclude } from '../types/stickyTypes'

/** Delay in milliseconds before removing active scroll state after scroll stops / Задержка в миллисекундах перед удалением активного состояния прокрутки после остановки скролла */
const SCROLL_END_DELAY = 64

/**
 * Class for managing sticky positioning of an element relative to its parent's visible area.
 * It tracks scroll and resize actions to compute and update the visual offset.
 *
 * Класс для управления липким позиционированием элемента относительно видимой области его родителя.
 * Отслеживает действия прокрутки и изменения размера для вычисления и обновления визуального смещения.
 */
export class StickyInclude {
  /** Currently tracked sticky element / Текущий отслеживаемый липкий элемент */
  protected activeElement?: HTMLElement

  /** Scroll container targets / Целевые контейнеры прокрутки */
  protected scrollContainer: (HTMLElement | Window)[] = []

  /** Event listeners for scroll containers / Слушатели событий для контейнеров прокрутки */
  protected eventScroll: EventItem<HTMLElement | Window, Event>[] = []

  /** Event listener for parent resizing / Слушатель событий для изменения размера родителя */
  protected eventResizeParent?: EventItem<HTMLElement, Event>

  /** Event listener for element resizing / Слушатель событий для изменения размера элемента */
  protected eventResizeElement?: EventItem<HTMLElement, Event>

  /** Timeout for scroll end detection / Таймаут для обнаружения окончания прокрутки */
  protected scrollTimeout?: ReturnType<typeof setTimeout>

  /** Registered watcher stop handles / Зарегистрированные функции остановки наблюдателей */
  protected watchStops: WatchStopHandle[] = []

  /**
   * Constructor for StickyInclude.
   *
   * Конструктор для StickyInclude.
   * @param props input properties / входящие свойства
   * @param naming component naming helper / помощник именования компонента
   * @param element target element reference / ссылка на целевой элемент
   * @param parent parent element reference / ссылка на родительский элемент
   */
  constructor(
    protected readonly props: Readonly<StickyPropsInclude> | (() => Readonly<StickyPropsInclude>),
    protected readonly naming: DesignName,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly parent: Ref<HTMLElement | undefined>
  ) {
    if (getCurrentInstance()) {
      onMounted(() => {
        this.stopWatchers()

        this.watchStops.push(
          watch(
            [
              this.element,
              this.parent,
              () => this.isEnabled(),
              () => this.getProps().stickyScrollContainer
            ],
            () => this.reset()
          ),
          watch(
            () => unref(this.getProps().stickyTop),
            () => {
              if (this.isEnabled()) {
                this.updatePosition()
              }
            }
          )
        )

        this.start()
      })

      onUnmounted(() => {
        this.stopWatchers()
        this.stop()
      })
    }
  }

  /**
   * Computes position and updates element style positioning.
   *
   * Вычисляет положение и обновляет стили позиционирования элемента.
   * @returns void
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

  /**
   * Event handler for scrolling.
   * Updates position and manages the active scroll dataset attribute.
   *
   * Обработчик события прокрутки.
   * Обновляет положение и управляет активным атрибутом dataset для прокрутки.
   * @returns void
   */
  readonly onScroll = (): void => {
    this.updatePosition()

    const element = this.element.value

    if (element) {
      const scrollTop = this.getScrollTop()

      if (scrollTop > element.offsetHeight) {
        element.dataset[this.getDatasetScrollProperty()] = 'active'
      } else {
        this.removeDatasetScroll(element)
      }

      if (this.scrollTimeout !== undefined) {
        clearTimeout(this.scrollTimeout)
      }

      this.scrollTimeout = setTimeout(() => {
        this.scrollTimeout = undefined
        this.removeDatasetScroll()
      }, SCROLL_END_DELAY)
    }
  }

  /**
   * Checks if sticky positioning is enabled.
   *
   * Проверяет, включено ли липкое позиционирование.
   * @returns true if sticky is enabled / true, если липкое позиционирование включено
   */
  protected isEnabled(): boolean {
    const props = this.getProps()

    return Boolean(
      props.stickyScrollBottom && (unref(props.stickyEnable) ?? true)
    )
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
    const topOffset = unref(this.getProps().stickyTop) ?? 0
    let boundaryTop = 0

    const firstContainer = this.scrollContainer[0]

    if (
      firstContainer
      && (!isDomRuntime() || firstContainer !== window)
      && 'getBoundingClientRect' in firstContainer
    ) {
      const containerRect = firstContainer.getBoundingClientRect()
      boundaryTop = containerRect.top
    }

    const calculatedTop = (boundaryTop + topOffset) - parentRect.top
    const maximumTop = parentRect.height - elementHeight

    return Math.max(0, Math.min(calculatedTop, maximumTop))
  }

  /**
   * Returns the name of the custom CSS property for the sticky top offset.
   *
   * Возвращает имя пользовательского CSS-свойства для верхнего отступа липкого элемента.
   * @returns custom CSS property name / имя пользовательского CSS-свойства
   */
  protected getCustomProperty(): string {
    return this.naming.getStyle('sticky-fix')
  }

  /**
   * Returns the name of the custom CSS property for the sticky height.
   *
   * Возвращает имя пользовательского CSS-свойства для высоты липкого элемента.
   * @returns custom CSS property name / имя пользовательского CSS-свойства
   */
  protected getCustomPropertyHeight(): string {
    return this.naming.getStyle('sticky-height')
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
   * Returns the dataset property name for the active scroll state.
   *
   * Возвращает имя свойства dataset для активного состояния прокрутки.
   * @returns dataset property name / имя свойства dataset
   */
  protected getDatasetScrollProperty(): string {
    return 'stickyScroll'
  }

  /**
   * Returns the configuration properties.
   *
   * Возвращает свойства конфигурации.
   * @returns properties / свойства
   */
  protected getProps(): Readonly<StickyPropsInclude> {
    return executeFunction(this.props)
  }

  /**
   * Finds all scrollable ancestors of the element and window as fallback.
   *
   * Находит всех прокручиваемых предков элемента и window в качестве резервного контейнера.
   * @returns scrollable ancestors and window / прокручиваемые предки и window
   */
  protected getScrollContainer(): (HTMLElement | Window)[] {
    if (!isDomRuntime()) {
      return []
    }

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
   * Returns the current scroll top position of the primary scroll container.
   *
   * Возвращает текущее положение прокрутки сверху основного контейнера прокрутки.
   * @returns scroll top position / положение прокрутки сверху
   */
  protected getScrollTop(): number {
    const container = this.scrollContainer[0]

    if (!container) {
      return 0
    }

    if (isDomRuntime() && container === window) {
      return window.scrollY || document.documentElement.scrollTop
    }

    return (container as HTMLElement).scrollTop
  }

  /**
   * Removes the active scroll dataset attribute from the element.
   *
   * Удаляет активный атрибут dataset для прокрутки с элемента.
   * @param element target element to clean up / целевой элемент для очистки
   * @returns void
   */
  protected removeDatasetScroll(
    element: HTMLElement | undefined = this.activeElement ?? this.element.value
  ): void {
    if (element) {
      delete element.dataset[this.getDatasetScrollProperty()]
    }
  }

  /**
   * Resets active listeners and starts tracking.
   *
   * Сбрасывает активные слушатели и начинает отслеживание.
   * @returns void
   */
  protected reset(): void {
    this.stop()
    this.start()
  }

  /**
   * Initializes and starts element resizing event listener.
   *
   * Инициализирует и запускает слушатель событий изменения размера элемента.
   * @returns this instance / текущий экземпляр
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
   * Initializes and starts parent resizing event listener.
   *
   * Инициализирует и запускает слушатель событий изменения размера родителя.
   * @returns this instance / текущий экземпляр
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
   * Initializes and starts scroll event listeners.
   *
   * Инициализирует и запускает слушатели событий прокрутки.
   * @returns this instance / текущий экземпляр
   */
  protected initEventScroll(): this {
    this.scrollContainer.forEach((container) => {
      const event = new EventItem(
        container,
        'scroll',
        this.onScroll,
        { passive: true }
      )

      event.start()
      this.eventScroll.push(event)
    })

    return this
  }

  /**
   * Initializes the scroll container list.
   *
   * Инициализирует список контейнеров прокрутки.
   * @returns this instance / текущий экземпляр
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
   * Starts tracking position and listening to events.
   *
   * Начинает отслеживание положения и прослушивание событий.
   * @returns void
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
      this.activeElement = element

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
   * @returns void
   */
  protected stop(): void {
    this.eventScroll.forEach(event => event.stop())
    this.eventScroll = []
    this.scrollContainer = []

    if (this.eventResizeParent) {
      this.eventResizeParent.stop()
      this.eventResizeParent = undefined
    }

    if (this.eventResizeElement) {
      this.eventResizeElement.stop()
      this.eventResizeElement = undefined
    }

    if (this.scrollTimeout !== undefined) {
      clearTimeout(this.scrollTimeout)
      this.scrollTimeout = undefined
    }

    const element = this.activeElement ?? this.element.value

    if (element) {
      element.style.removeProperty(this.getCustomProperty())
      element.style.removeProperty(this.getCustomPropertyHeight())
      delete element.dataset[this.getDatasetProperty()]
      this.removeDatasetScroll(element)
    }

    this.activeElement = undefined
  }

  /**
   * Stops all registered reactive watchers.
   *
   * Останавливает все зарегистрированные реактивные наблюдатели.
   * @returns void
   */
  protected stopWatchers(): void {
    this.watchStops.forEach(stop => stop())
    this.watchStops = []
  }
}

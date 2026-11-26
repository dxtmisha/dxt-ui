// ai-none

import { type Ref, type WatchStopHandle, watch } from 'vue'
import {
  DesignLifecycleAbstract,
  type DesignName,
  EventRef,
  ScrollbarWidthRef
} from '@dxtmisha/functional'

import type { ScrollStickyProps } from './props'

/**
 * ScrollStickyScroll manages scroll synchronization event listeners, resize updates,
 * and reactive element watchers across the component lifecycle.
 *
 * Класс ScrollStickyScroll управляет слушателями событий синхронизации прокрутки,
 * обновлениями размеров и реактивными наблюдателями элементов в течение жизненного цикла компонента.
 */
export class ScrollStickyScroll extends DesignLifecycleAbstract {
  /** Main element scroll event listener / Слушатель событий прокрутки основного элемента */
  protected eventMain?: EventRef<HTMLDivElement, Event>
  /** Scrollbar element scroll event listener / Слушатель событий прокрутки элемента полосы прокрутки */
  protected eventScroll?: EventRef<HTMLDivElement, Event>
  /** Stop handle for the reactive watcher / Функция остановки реактивного наблюдателя */
  protected stopWatch?: WatchStopHandle

  /**
   * Constructor
   * @param props input data / входные данные
   * @param element main context element reference / ссылка на основной элемент контекста
   * @param naming component naming helper / помощник именования компонента
   * @param width scrollbar width manager getter / геттер менеджера ширины полосы прокрутки
   * @param scrollElement sticky scrollbar element reference / ссылка на элемент липкой полосы прокрутки
   */
  constructor(
    protected readonly props: Readonly<ScrollStickyProps>,
    protected readonly element: Ref<HTMLDivElement | undefined>,
    protected readonly naming: DesignName,
    protected readonly width: () => ScrollbarWidthRef,
    protected readonly scrollElement: Ref<HTMLDivElement | undefined>
  ) {
    super()
  }

  /**
   * Initializes scroll listeners and reactive watchers on mount.
   *
   * Инициализирует слушатели прокрутки и реактивные наблюдатели при монтировании.
   */
  override readonly onMounted = (): void => {
    this.update()

    this.stopWatch?.()
    this.stopWatch = watch(
      [
        this.element,
        this.scrollElement,
        () => this.width().width.value
      ],
      this.update
    )
  }

  /**
   * Cleans up scroll listeners and reactive watchers on unmount.
   *
   * Очищает слушатели прокрутки и реактивные наблюдатели при размонтировании.
   */
  override readonly onUnmounted = (): void => {
    this.stopWatch?.()
    this.stopWatch = undefined
    this.stop()
  }

  /**
   * Initializes listeners and resizes elements.
   *
   * Инициализирует слушатели и выполняет изменение размеров элементов.
   */
  readonly update = (): void => {
    this.on()
    this.onMain()
    this.onResize()
  }

  /**
   * Recalculates the scroll width and scrollbar height CSS variables.
   *
   * Пересчитывает CSS-переменные ширины прокрутки и высоты полосы прокрутки.
   */
  readonly onResize = (): void => {
    this.checkScroll((element, scrollElement) => {
      scrollElement.style.setProperty(
        this.naming.getStyle('width'),
        `${element.scrollWidth ?? 0}px`
      )
      scrollElement.style.setProperty(
        this.naming.getStyle('scrollHeight'),
        `${this.width().width.value ?? 0}px`
      )
    })
  }

  /**
   * Synchronizes the scrollbar's horizontal position with the main element's scroll position.
   *
   * Синхронизирует горизонтальное положение полосы прокрутки с положением прокрутки основного элемента.
   */
  readonly onMain = (): void => {
    this.onResize()
    this.checkScroll((element, scrollElement) => {
      scrollElement.scrollLeft = element.scrollLeft
    })
  }

  /**
   * Synchronizes the main element's scroll position with the scrollbar's horizontal position.
   *
   * Синхронизирует положение прокрутки основного элемента с горизонтальным положением полосы прокрутки.
   */
  readonly onScroll = (): void => {
    this.checkScroll((element, scrollElement) => {
      element.scrollLeft = scrollElement.scrollLeft
    })
  }

  /**
   * Activates event listeners if both elements are available, otherwise stops them.
   *
   * Активирует слушатели событий, если доступны оба элемента, иначе останавливает их.
   */
  protected readonly on = (): void => {
    if (this.checkScroll()) {
      this.start()
    } else {
      this.stop()
    }
  }

  /**
   * Returns or initializes the scroll event listener for the main element.
   *
   * Возвращает или инициализирует слушатель событий прокрутки для основного элемента.
   * @returns scroll event instance / экземпляр события прокрутки
   */
  protected getEvent(): EventRef<HTMLDivElement, Event> {
    if (!this.eventMain) {
      this.eventMain = new EventRef(
        this.element,
        undefined,
        this.getEventTypes(),
        this.onMain
      )
    }

    return this.eventMain
  }

  /**
   * Returns or initializes the scroll event listener for the scroll element.
   *
   * Возвращает или инициализирует слушатель событий прокрутки для элемента прокрутки.
   * @returns scroll event instance / экземпляр события прокрутки
   */
  protected getEventScroll(): EventRef<HTMLDivElement, Event> {
    if (!this.eventScroll) {
      this.eventScroll = new EventRef(
        this.scrollElement,
        undefined,
        this.getEventTypes(),
        this.onScroll
      )
    }

    return this.eventScroll
  }

  /**
   * Returns the list of registered event types.
   *
   * Возвращает список зарегистрированных типов событий.
   * @returns array of event types / массив типов событий
   */
  protected getEventTypes(): string[] {
    return [
      'scroll-sync',
      'resize'
    ]
  }

  /**
   * Helper that executes the callback if both main and scroll elements are available.
   *
   * Вспомогательный метод, который выполняет функцию обратного вызова, если доступны оба элемента.
   * @param callback function to execute / функция для выполнения
   * @returns boolean flag indicating element availability / логический флаг доступности элементов
   */
  protected checkScroll(
    callback?: (
      element: HTMLDivElement,
      scrollElement: HTMLDivElement
    ) => void
  ): boolean {
    const element = this.element.value
    const scrollElement = this.scrollElement.value

    if (
      element
      && scrollElement
    ) {
      callback?.(element, scrollElement)
      return true
    }

    return false
  }

  /**
   * Starts listening to scroll events on both elements.
   *
   * Начинает прослушивание событий прокрутки на обоих элементах.
   */
  protected start(): void {
    this.getEvent().start()
    this.getEventScroll().start()
  }

  /**
   * Stops listening to scroll events on both elements.
   *
   * Останавливает прослушивание событий прокрутки на обоих элементах.
   */
  protected stop(): void {
    if (this.eventMain) {
      this.eventMain.stop()
      this.eventMain = undefined
    }

    if (this.eventScroll) {
      this.eventScroll.stop()
      this.eventScroll = undefined
    }
  }
}

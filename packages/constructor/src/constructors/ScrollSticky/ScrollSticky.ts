import {
  type Ref,
  type ToRefs,
  onUnmounted,
  watch,
  ref,
  onMounted,
  onUpdated,
  nextTick
} from 'vue'
import {
  type ConstrEmit,
  type DesignComp,
  EventRef,
  ScrollbarWidthRef
} from '@dxtmisha/functional'

import type {
  ScrollStickyComponents,
  ScrollStickyEmits,
  ScrollStickySlots
} from './types'
import type { ScrollStickyProps } from './props'

/**
 * ScrollSticky class coordinates sticky horizontal scrollbar synchronization. /
 * Класс ScrollSticky координирует липкую синхронизацию горизонтальной прокрутки.
 */
export class ScrollSticky {
  /** Scroll element reference / Ссылка на элемент прокрутки */
  readonly scrollElement = ref<HTMLDivElement>()
  /** Scrollbar width manager / Менеджер ширины полосы прокрутки */
  readonly width: ScrollbarWidthRef

  /** Main element scroll event listener / Слушатель событий прокрутки основного элемента */
  protected eventMain?: EventRef<HTMLDivElement, Event>
  /** Scrollbar element scroll event listener / Слушатель событий прокрутки элемента полосы прокрутки */
  protected eventScroll?: EventRef<HTMLDivElement, Event>

  /**
   * Constructor
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param element input element / элемент ввода
   * @param classDesign design name / название дизайна
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors object with classes / объект с классами
   * @param constructors.ScrollbarWidthRefConstructor class for working with scrollbar width / класс для работы с шириной скролла
   */
  constructor(
    protected readonly props: ScrollStickyProps,
    protected readonly refs: ToRefs<ScrollStickyProps>,
    protected readonly element: Ref<HTMLDivElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<ScrollStickyComponents, ScrollStickyProps>,
    protected readonly slots?: ScrollStickySlots,
    protected readonly emits?: ConstrEmit<ScrollStickyEmits>,
    constructors: {
      ScrollbarWidthRefConstructor?: typeof ScrollbarWidthRef
    } = {}
  ) {
    const {
      ScrollbarWidthRefConstructor = ScrollbarWidthRef
    } = constructors

    this.width = new ScrollbarWidthRefConstructor()

    onMounted(() => {
      watch(
        [
          this.element,
          this.scrollElement,
          this.width.width
        ],
        () => {
          this.on()
          this.onMain()
          this.onResize()
        },
        { immediate: true }
      )
    })

    onUpdated(async () => {
      await nextTick()
      this.onResize()
    })
    onUnmounted(() => this.stop())
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
   * Stops listening to scroll events.
   *
   * Останавливает прослушивание событий прокрутки.
   */
  protected stop(): void {
    if (this.eventMain) {
      this.eventMain.stop()
    }

    if (this.eventScroll) {
      this.eventScroll.stop()
    }
  }

  /**
   * Recalculates the scroll width. /
   * Пересчитывает ширину прокрутки.
   */
  readonly onResize = (): void => {
    this.checkScroll((element, scrollElement) => {
      scrollElement.style.setProperty(
        `--${this.className}-sys-width`,
        `${element.scrollWidth ?? 0}px`
      )
      scrollElement.style.setProperty(
        `--${this.className}-sys-scrollHeight`,
        `${this.width.width.value ?? 0}px`
      )
    })
  }

  /**
   * Synchronizes the scrollbar's horizontal position with the main element's scroll position.
   *
   * Синхронизирует горизонтальное положение полосы прокрутки с положением прокрутки основного элемента.
   */
  readonly onMain = () => {
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
  readonly onScroll = () => {
    this.checkScroll((element, scrollElement) => {
      element.scrollLeft = scrollElement.scrollLeft
    })
  }

  /**
   * Activates event listeners if elements are available, otherwise stops them.
   *
   * Активирует слушатели событий, если элементы доступны, иначе останавливает их.
   */
  protected readonly on = () => {
    if (this.checkScroll()) {
      this.start()
    } else {
      this.stop()
    }
  }
}

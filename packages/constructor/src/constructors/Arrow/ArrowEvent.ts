// ai-none

import {
  type Ref,
  watch
} from 'vue'
import {
  DesignLifecycleAbstract,
  EventItem,
  EventRef
} from '@dxtmisha/functional'

import { ArrowElementTarget } from './ArrowElementTarget'
import { ArrowParent } from './ArrowParent'
import { ArrowPosition } from './ArrowPosition'

import type { ArrowProps } from './props'

/**
 * Class for managing arrow events.
 * It handles element resizing, scrolling, and updates the arrow's position accordingly.
 *
 * Класс для управления событиями стрелки.
 * Обрабатывает изменение размеров элементов, прокрутку и соответствующим образом обновляет положение стрелки.
 */
export class ArrowEvent extends DesignLifecycleAbstract {
  /** Event for the arrow element / Событие для элемента стрелки */
  protected eventItem?: EventRef<HTMLElement, Event>

  /** Event for the target element / Событие для целевого элемента */
  protected eventTarget?: EventRef<HTMLElement, Event>

  /** Event for the window (scrolling and resizing) / Событие для окна (прокрутка и изменение размера) */
  protected eventBody?: EventItem<Window, Event>

  /** Pending animation frame ID / Идентификатор ожидающего кадра анимации */
  protected frameId?: number

  /**
   * Checks whether event tracking is required.
   *
   * Проверяет, требуется ли отслеживание событий.
   * @param props properties / свойства
   * @returns true if event tracking is active / true, если отслеживание событий активно
   */
  static is(props?: ArrowProps): boolean {
    return ArrowPosition.isAuto(props)
  }

  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input properties / входные свойства
   * @param element arrow element / элемент стрелки
   * @param elementTarget function returning target element / функция, возвращающая целевой элемент
   * @param parent function returning parent element / функция, возвращающая родительский элемент
   * @param position function returning position object / функция, возвращающая объект позиции
   */
  constructor(
    protected readonly props: ArrowProps,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly elementTarget: () => ArrowElementTarget,
    protected readonly parent: () => ArrowParent,
    protected readonly position: () => ArrowPosition
  ) {
    super()
  }

  /**
   * Hook executed when component mounts.
   *
   * Хук, выполняемый при монтировании компонента.
   */
  override readonly onMounted = (): void => {
    this.initEvents()

    watch(() => this.elementTarget().element.value, this.makeEvents)
    watch(
      [
        this.element,
        () => this.props.position,
        () => this.props.elementTarget
      ],
      this.update
    )

    this.update()
  }

  /**
   * Hook executed when component unmounts.
   *
   * Хук, выполняемый при размонтировании компонента.
   */
  override readonly onUnmounted = (): void => {
    if (this.frameId !== undefined) {
      cancelAnimationFrame(this.frameId)
      this.frameId = undefined
    }

    this.stopEvents()
  }

  /**
   * Update all reactive elements.
   *
   * Обновить все реактивные элементы.
   */
  readonly update = (): void => {
    if (this.frameId !== undefined) {
      cancelAnimationFrame(this.frameId)
    }

    this.frameId = requestAnimationFrame(() => {
      this.frameId = undefined

      if (ArrowPosition.isAuto(this.props)) {
        this.elementTarget().update()
      }

      this.makeEvents()
      this.position().update()
    })
  }

  /**
   * Initialize events.
   *
   * Инициализировать события.
   * @returns current class instance / текущий экземпляр класса
   */
  protected initEvents(): this {
    if (!this.eventItem) {
      this.eventItem = new EventRef(this.element, undefined, 'resize', this.update)
    }

    if (!this.eventTarget) {
      this.eventTarget = new EventRef(this.elementTarget().element, undefined, 'resize', this.update)
    }

    if (!this.eventBody) {
      this.eventBody = new EventItem(window, ['scroll', 'resize'], this.update)
    }

    return this
  }

  /**
   * Create events.
   *
   * Создать события.
   */
  protected makeEvents = (): void => {
    if (this.elementTarget().is()) {
      this.initEvents()
        .startEvents()
    } else {
      this.stopEvents()
    }
  }

  /**
   * Start events.
   *
   * Запустить события.
   * @returns current class instance / текущий экземпляр класса
   */
  protected startEvents(): this {
    this.eventItem?.start()
    this.eventTarget?.start()
    this.eventBody?.start()

    return this
  }

  /**
   * Stop events.
   *
   * Остановить события.
   * @returns current class instance / текущий экземпляр класса
   */
  protected stopEvents(): this {
    this.eventItem?.stop()
    this.eventTarget?.stop()
    this.eventBody?.stop()

    return this
  }
}

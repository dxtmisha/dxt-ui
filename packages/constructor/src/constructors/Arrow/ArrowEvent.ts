import {
  nextTick,
  onMounted,
  onUnmounted,
  type Ref,
  type ToRefs,
  watch
} from 'vue'
import { EventItem, EventRef } from '@dxtmisha/functional'

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
export class ArrowEvent {
  /** Event for the arrow element / Событие для элемента стрелки */
  protected eventItem?: EventRef<HTMLElement, any>

  /** Event for the target element / Событие для целевого элемента */
  protected eventTarget?: EventRef<HTMLElement, any>

  /** Event for the window (scrolling and resizing) / Событие для окна (прокрутка и изменение размера) */
  protected eventBody?: EventItem<any, any>

  /**
   * Constructor
   * @param props input properties / входные свойства
   * @param refs input properties as refs / входные свойства как ссылки
   * @param element arrow element / элемент стрелки
   * @param elementTarget target element / целевой элемент
   * @param parent parent object / объект родителя
   * @param position position object / объект позиции
   */
  constructor(
    protected readonly props: ArrowProps,
    protected readonly refs: ToRefs<ArrowProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly elementTarget: ArrowElementTarget,
    protected readonly parent: ArrowParent,
    protected readonly position: ArrowPosition
  ) {
    onMounted(async () => {
      await nextTick()

      watch(this.elementTarget.element, this.makeEvents, { immediate: true })
      watch([...Object.values(this.refs)], this.update, { immediate: true })
    })

    onUnmounted(() => {
      this.stopEvents()
    })
  }

  /**
   * Update all reactive elements.
   *
   * Обновить все реактивные элементы.
   */
  readonly update = (): void => {
    requestAnimationFrame(() => {
      if (this.props.position === 'auto') {
        this.elementTarget.update()
      }

      this.position.update()
    })
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
      this.eventTarget = new EventRef(this.elementTarget.element, undefined, 'resize', this.update)
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
    if (this.elementTarget.is()) {
      this.initEvents()
        .startEvents()
    } else {
      this.stopEvents()
    }
  }
}

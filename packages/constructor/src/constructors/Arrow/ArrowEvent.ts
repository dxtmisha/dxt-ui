import { nextTick, onMounted, onUnmounted, type Ref, type ToRefs, watch } from 'vue'
import { EventItem, EventRef, isDomRuntime } from '@dxtmisha/functional'

import { ArrowElementTarget } from './ArrowElementTarget'
import { ArrowPosition } from './ArrowPosition'

import type { ArrowProps } from './props'

/**
 * Class for managing arrow events.
 *
 * Класс для управления событиями стрелки.
 */
export class ArrowEvent {
  protected eventItem?: EventRef<HTMLElement, any>
  protected eventTarget?: EventRef<HTMLElement, any>
  protected eventBody?: EventItem<any, any>

  /**
   * Constructor
   * @param props input properties / входные свойства
   * @param refs input properties as refs / входные свойства как ссылки
   * @param element arrow element / элемент стрелки
   * @param elementTarget target element / целевой элемент
   * @param position position object / объект позиции
   */
  constructor(
    protected readonly props: ArrowProps,
    protected readonly refs: ToRefs<ArrowProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly elementTarget: ArrowElementTarget,
    protected readonly position: ArrowPosition
  ) {
    if (isDomRuntime()) {
      onMounted(async () => {
        await nextTick()
        watch(
          [
            this.refs.position,
            this.refs.elementTarget,
            this.elementTarget.element
          ],
          this.makeEvents
        )

        requestAnimationFrame(this.update)
      })

      onUnmounted(() => {
        this.stopEvents()
      })
    }
  }

  /**
   * Update all reactive elements.
   *
   * Обновить все реактивные элементы.
   */
  readonly update = (): void => {
    if (this.props.position === 'auto') {
      this.elementTarget.update()
      this.position.update()
    }
  }

  /**
   * Start events.
   *
   * Запустить события.
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

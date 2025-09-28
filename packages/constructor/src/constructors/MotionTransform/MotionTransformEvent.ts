import { watch } from 'vue'
import { type ConstrEmit, EventItem } from '@dxtmisha/functional'

import { MotionTransformElement } from './MotionTransformElement'
import { MotionTransformState } from './MotionTransformState'

import type { MotionTransformEmitOptions } from './basicTypes'
import type { MotionTransformEmits } from './types'
import type { MotionTransformProps } from './props'

/**
 * Class for event management.
 *
 * Класс для управления событиями.
 */
export class MotionTransformEvent {
  protected readonly item: EventItem<HTMLElement, PointerEvent>

  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input data/ входные данные
   * @param element class object for managing an element/ объект класса для управления элементом
   * @param state class object for status management/ объект класса для управления статусом
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly props: MotionTransformProps,
    protected readonly element: MotionTransformElement,
    protected readonly state: MotionTransformState,
    protected readonly emits?: ConstrEmit<MotionTransformEmits>
  ) {
    this.item = new EventItem(document.body, 'click', this.listener)

    watch(this.state.open, () => this.item.toggle(this.state.open.value))
  }

  /**
   * Stopping event listening.
   *
   * Остановка прослушивания события.
   */
  stop(): this {
    this.item.stop()
    return this
  }

  /**
   * Click event on the title.
   *
   * Событие клика на заголовок.
   * @param event event object/ объект события
   */
  readonly onClick = (event: Event) => {
    if (
      this.props.clickOpen
      && this.element.isClick(event.target as HTMLElement)
    ) {
      this.emit(event, 'head')
      this.state.toggle()
    }
  }

  /**
   * End of animation event.
   *
   * Событие окончания анимации.
   * @param event event object/ объект события
   */
  readonly onTransitionend = (event: TransitionEvent) => {
    if (
      this.element.getElement() === event.target
      && event.propertyName === 'height'
    ) {
      this.state.reset()
    }
  }

  /**
   * Event call.
   *
   * Вызов события.
   * @param event event object/ объект события
   * @param type event type/ тип события
   */
  emit(
    event: Event | undefined,
    type: MotionTransformEmitOptions['type']
  ): void {
    const options: MotionTransformEmitOptions = {
      type,
      open: !this.state.open.value
    }

    this.emits?.('transform', event, options)
    this.emits?.('transformLite', options)
  }

  protected listener = (event: PointerEvent) => {
    const target = event.target as HTMLDivElement

    if (
      this.state.open.value
      && this.element.isClickGlobal(target) && (
        this.element.isClose(target)
        || (
          this.props.autoClose
          && this.element.isOutside(target)
          && this.element.isIgnore(target)
        )
      )
    ) {
      this.emit(event, 'body')
      this.state.set(false)
    }
  }
}

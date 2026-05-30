import { onMounted, onUnmounted, watch } from 'vue'
import { type ConstrEmit, EventItem, isEnter } from '@dxtmisha/functional'

import { MotionTransformElement } from './MotionTransformElement'
import { MotionTransformState } from './MotionTransformState'

import type { MotionTransformEmitOptions } from './basicTypes'
import type { MotionTransformEmits } from './types'
import type { MotionTransformProps } from './props'

/**
 * Class for event management in the MotionTransform system.
 *
 * Класс для управления событиями в системе MotionTransform.
 */
export class MotionTransformEvent {
  /** Pointer click event item listener instance / Экземпляр слушателя событий клика указателя (pointer click) */
  protected item?: EventItem<HTMLElement, PointerEvent>

  /**
   * Constructor for creating a MotionTransformEvent instance.
   *
   * Конструктор для создания экземпляра MotionTransformEvent.
   * @param props input properties / входные свойства
   * @param element helper object for element operations / вспомогательный объект для работы с элементами
   * @param state state manager / менеджер состояния
   * @param emits callback function triggered on events / функция обратного вызова, запускаемая при событиях
   */
  constructor(
    protected readonly props: MotionTransformProps,
    protected readonly element: MotionTransformElement,
    protected readonly state: MotionTransformState,
    protected readonly emits?: ConstrEmit<MotionTransformEmits>
  ) {
    onMounted(() => {
      this.item = new EventItem(document.body, 'click', this.listener)

      watch(
        this.state.open,
        () => this.item?.toggle(this.state.open.value),
        { immediate: true }
      )
    })
    onUnmounted(() => this.stop())
  }

  /**
   * Stops listening to the document click events.
   *
   * Останавливает прослушивание событий клика по документу.
   * @returns current instance / текущий экземпляр
   */
  stop(): this {
    this.item?.stop()
    return this
  }

  /**
   * Triggers the transform events.
   *
   * Вызывает события трансформации (transform).
   * @param event native event object / объект нативного события
   * @param type event trigger source type / тип источника запуска события
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

  /**
   * Click event handler for the title/head element.
   *
   * Обработчик события клика на элемент заголовка/шапки.
   * @param event native event object / объект нативного события
   */
  readonly onClick = (event: Event) => {
    if (this.isTrigger(event.target as HTMLElement)) {
      this.emit(event, 'head')
      this.state.toggle()
    }
  }

  /**
   * Keydown event handler for keyboard interactions.
   *
   * Обработчик события нажатия клавиши для взаимодействия с клавиатурой.
   * @param event keyboard event object / объект события клавиатуры
   */
  readonly onKeydown = async (event: KeyboardEvent): Promise<void> => {
    if (
      isEnter(event as KeyboardEvent)
      && this.isTrigger(event.target as HTMLElement)
    ) {
      event.preventDefault()

      this.emit(event, 'head')
      this.state.toggle()
    }
  }

  /**
   * Transition end handler that resets state when height transitions finish.
   *
   * Обработчик завершения анимации перехода, сбрасывающий состояние после окончания перехода высоты.
   * @param event transition event object / объект события окончания перехода
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
   * Checks if the target element acts as a trigger for opening.
   *
   * Проверяет, является ли целевой элемент триггером для открытия.
   * @param target target element to inspect / целевой элемент для проверки
   * @returns true if target is a trigger / true, если цель является триггером
   */
  protected isTrigger(target: HTMLElement): boolean {
    return Boolean(this.props.clickOpen && this.element.isClick(target))
  }

  /**
   * Document-level pointer click listener for handling auto-close and closing triggers.
   *
   * Слушатель кликов на уровне документа для обработки автозакрытия и триггеров закрытия.
   * @param event pointer event object / объект события указателя (pointer)
   */
  protected listener = (event: PointerEvent) => {
    const target = event.target as HTMLDivElement

    if (
      this.state.open.value
      && this.element.isClickGlobal(target)
      && (
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

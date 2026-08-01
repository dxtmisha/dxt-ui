import type { MotionFlipCallback } from './basicTypes'
import type { MotionFlipElement } from './MotionFlipElement'
import type { MotionFlipItems } from './MotionFlipItems'
import type { MotionFlipProps } from './props'

/**
 * Class for managing FLIP animation actions and updates.
 *
 * Класс для управления действиями и обновлениями FLIP анимации.
 */
export class MotionFlipAction {
  /** Animation frame ID / ID кадра анимации */
  protected frameId?: number

  /** Flag indicating active transition cleanup / Флаг активности завершения перехода */
  protected isTransitioning = false

  /**
   * Constructor
   * @param props input data / входные данные
   * @param elementManager element manager / менеджер элемента
   * @param items item list controller / контроллер списка элементов
   */
  constructor(
    protected readonly props: MotionFlipProps,
    protected readonly elementManager: MotionFlipElement,
    protected readonly items: MotionFlipItems
  ) { }

  /**
   * Checks if element is available and animation is enabled.
   *
   * Проверяет, доступен ли элемент и включена ли анимация.
   * @returns true if animation is enabled and element exists / true, если анимация включена и элемент существует
   */
  readonly isEnable = (): boolean => !this.props.disabled && this.elementManager.isEnable()

  /**
   * FLIP update animation handler.
   *
   * Обработчик обновления FLIP анимации.
   * @param callback function performing DOM updates / функция, выполняющая обновления DOM
   * @returns promise resolving when update sequence completes / промис, завершающийся при завершении обновления
   */
  readonly update = async (callback: MotionFlipCallback): Promise<void> => {
    if (this.isEnable()) {
      this.items.init()
      await callback()
      this.go()

      return
    }

    await callback()
  }

  /**
   * Triggers the FLIP animation frame updates.
   *
   * Запускает обновление кадров FLIP анимации.
   */
  readonly go = (): void => {
    this.stop()

    this.frameId = requestAnimationFrame(() => {
      this.items.update()
      this.elementManager.addClassFreeze()

      this.frameId = requestAnimationFrame(() => {
        this.elementManager.addClassGo()
        this.frameId = undefined
      })
    })
  }

  /**
   * Handle transition end event to clear animation state.
   *
   * Обрабатывает событие окончания перехода для сброса состояния анимации.
   * @param event transition event / событие перехода
   */
  readonly onTransition = (event: TransitionEvent): void => {
    if (
      this.items.resetItem(event)
      && !this.isTransitioning
    ) {
      this.isTransitioning = true

      requestAnimationFrame(() => {
        this.stop()

        if (this.props.auto) {
          this.items.init()
        }
      })
    }
  }

  /**
   * Stops active FLIP animation and clears animation frame timers.
   *
   * Останавливает активную FLIP-анимацию и очищает таймеры кадров анимации.
   */
  readonly stop = (): void => {
    if (this.frameId !== undefined) {
      cancelAnimationFrame(this.frameId)
      this.frameId = undefined
    }

    this.isTransitioning = false
    this.elementManager.resetStatus()
    this.items.reset()
  }
}

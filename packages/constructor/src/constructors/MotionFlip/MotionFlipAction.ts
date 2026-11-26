// ai-none

import { DesignLifecycleAbstract } from '@dxtmisha/functional'

import type { MotionFlipCallback } from './basicTypes'
import type { MotionFlipElement } from './MotionFlipElement'
import type { MotionFlipItems } from './MotionFlipItems'
import type { MotionFlipProps } from './props'

/**
 * Fallback timeout in milliseconds before resetting active FLIP animation.
 *
 * Запасной таймаут в миллисекундах перед сбросом активной FLIP-анимации.
 */
const MOTION_FLIP_RESET_TIMEOUT_MS = 1024

/**
 * Class for managing FLIP animation actions and updates.
 *
 * Класс для управления действиями и обновлениями FLIP анимации.
 */
export class MotionFlipAction extends DesignLifecycleAbstract {
  /** Animation frame ID / ID кадра анимации */
  protected frameId?: number

  /** Reset animation frame ID / ID кадра сброса анимации */
  protected resetFrameId?: number

  /** Timeout timer ID for fallback animation cleanup / ID таймера ожидания для запасного завершения анимации */
  protected timerId?: ReturnType<typeof setTimeout>

  /** Flag indicating active transition cleanup / Флаг активности завершения перехода */
  protected isTransitioning = false

  /**
   * Constructor
   * @param props input data / входные данные
   * @param elementManager element manager getter / геттер менеджера элемента
   * @param items item list controller getter / геттер контроллера списка элементов
   */
  constructor(
    protected readonly props: Readonly<MotionFlipProps>,
    protected readonly elementManager: () => MotionFlipElement,
    protected readonly items: () => MotionFlipItems
  ) {
    super()
  }

  /**
   * Checks if element is available and animation is enabled.
   *
   * Проверяет, доступен ли элемент и включена ли анимация.
   * @returns true if animation is enabled and element exists / true, если анимация включена и элемент существует
   */
  readonly isEnable = (): boolean => !this.props.disabled && this.elementManager().isEnable()

  /**
   * FLIP update animation handler.
   *
   * Обработчик обновления FLIP анимации.
   * @param callback function performing DOM updates / функция, выполняющая обновления DOM
   * @returns promise resolving when update sequence completes / промис, завершающийся при завершении обновления
   */
  readonly update = async (callback: MotionFlipCallback): Promise<void> => {
    if (this.isEnable()) {
      this.items().init()
      await callback()
      this.go()

      return
    }

    await callback()
  }

  /**
   * Resets animation state and clears timers.
   *
   * Сбрасывает состояние анимации и очищает таймеры.
   */
  readonly reset = (): void => {
    if (!this.isTransitioning) {
      this.isTransitioning = true

      this.resetFrameId = requestAnimationFrame(() => {
        this.resetFrameId = undefined
        this.stop()

        if (this.props.auto) {
          this.items().init()
        }
      })
    }
  }

  /**
   * Triggers the FLIP animation frame updates.
   *
   * Запускает обновление кадров FLIP анимации.
   */
  readonly go = (): void => {
    this.stop()

    this.frameId = requestAnimationFrame(() => {
      this.items().update()
      this.elementManager().addClassFreeze()

      this.frameId = requestAnimationFrame(() => {
        this.elementManager().addClassGo()
        this.frameId = undefined

        this.timerId = setTimeout(() => this.reset(), MOTION_FLIP_RESET_TIMEOUT_MS)
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
    if (this.items().resetItem(event)) {
      this.reset()
    }
  }

  /**
   * Cleans up pending animation frames and timers when component unmounts.
   *
   * Очищает ожидающие кадры анимации и таймеры при размонтировании компонента.
   */
  override readonly onUnmounted = (): void => {
    this.stop()
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

    if (this.resetFrameId !== undefined) {
      cancelAnimationFrame(this.resetFrameId)
      this.resetFrameId = undefined
    }

    if (this.timerId !== undefined) {
      clearTimeout(this.timerId)
      this.timerId = undefined
    }

    this.isTransitioning = false
    this.elementManager().resetStatus()
    this.items().reset()
  }
}

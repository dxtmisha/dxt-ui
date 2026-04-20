import { type FunctionVoid } from '../types/basicTypes'

/**
 * Class for creating a timer that can be paused and resumed.
 *
 * Класс для создания таймера, который можно приостанавливать и возобновлять.
 */
export class ResumableTimer {
  protected timerId?: ReturnType<typeof setTimeout>
  protected startTime?: number
  protected remaining?: number
  protected completed: boolean = false

  /**
   * Constructor
   * @param callback function to be called after the delay / функция, которая будет вызвана после задержки
   * @param delay delay in milliseconds / задержка в миллисекундах
   * @param blockStart if true, the timer will not start immediately / если true, таймер не запустится сразу
   */
  constructor(
    protected callback: FunctionVoid,
    protected delay: number = 320,
    blockStart: boolean = false
  ) {
    if (!blockStart) {
      this.resume()
    }
  }

  /**
   * Resumes the timer if it was paused or starts it for the first time.
   *
   * Возобновляет таймер, если он был приостановлен, или запускает его впервые.
   */
  resume(): this {
    if (
      this.timerId
      || this.completed
    ) {
      return this
    }

    const remaining = this.getRemaining()

    if (remaining <= 0) {
      this.go()
    } else {
      this.updateStartTime()
      this.timerId = setTimeout(() => this.go(), remaining)
    }

    return this
  }

  /**
   * Pauses the timer and calculates the remaining time.
   *
   * Приостанавливает таймер и вычисляет оставшееся время.
   */
  pause(): this {
    if (
      this.timerId
      && !this.completed
    ) {
      this.stop()
        .updateRemaining()
    }

    return this
  }

  /**
   * Resets and restarts the timer with the original delay.
   *
   * Сбрасывает и перезапускает таймер с исходной задержкой.
   */
  reset(): this {
    this.clear()
      .resume()

    return this
  }

  /**
   * Completely clears the timer and resets its state.
   *
   * Полностью очищает таймер и сбрасывает его состояние.
   */
  clear(): this {
    this.stop()

    this.startTime = undefined
    this.remaining = undefined
    this.completed = false

    return this
  }

  /**
   * Returns the remaining time or the initial delay.
   *
   * Возвращает оставшееся время или начальную задержку.
   */
  protected getRemaining(): number {
    return this.remaining ?? this.delay
  }

  /**
   * Returns the time when the timer was started or the current time.
   *
   * Возвращает время запуска таймера или текущее время.
   */
  protected getStartTime(): number {
    return this.startTime ?? Date.now()
  }

  /**
   * Executes the callback and marks the timer as completed.
   *
   * Выполняет колбэк и отмечает таймер как завершенный.
   */
  protected go(): this {
    this.callback()

    this.timerId = undefined
    this.completed = true

    return this
  }

  /**
   * Updates the remaining time based on the elapsed time.
   *
   * Обновляет оставшееся время на основе прошедшего времени.
   */
  protected updateRemaining(): this {
    if (this.completed) {
      return this
    }

    if (this.remaining === undefined) {
      this.remaining = this.delay
    }

    this.remaining -= (Date.now() - this.getStartTime())

    if (this.remaining < 0) {
      this.remaining = 0
    }

    return this
  }

  /**
   * Sets the current time as the start time.
   *
   * Устанавливает текущее время как время начала.
   */
  protected updateStartTime(): this {
    this.startTime = Date.now()
    return this
  }

  /**
   * Stops the timer and clears the timeout ID.
   *
   * Останавливает таймер и очищает идентификатор таймаута.
   */
  protected stop(): this {
    if (this.timerId) {
      clearTimeout(this.timerId)
      this.timerId = undefined
    }

    return this
  }
}

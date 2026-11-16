import { DesignLifecycleAbstract, isDomRuntime } from '@dxtmisha/functional'

/**
 * Abstract base class for managing a pending animation frame callback with lifecycle cleanup.
 *
 * Абстрактный базовый класс для управления ожидающим вызовом кадра анимации с очисткой при демонтировании.
 */
export abstract class FrameAbstract extends DesignLifecycleAbstract {
  /** Pending animation frame ID / Идентификатор ожидающего кадра анимации */
  protected frameId?: number

  /**
   * Callback after component unmounting that cancels any pending animation frame.
   * Subclasses overriding `onUnmounted` should invoke `this.stopFrame()`.
   *
   * Обработчик после демонтирования компонента, отменяющий ожидающий кадр анимации.
   * Подклассы, переопределяющие `onUnmounted`, должны вызывать `this.stopFrame()`.
   */
  override readonly onUnmounted = (): void => {
    this.stopFrame()
  }

  /**
   * Schedules an animation frame callback after canceling any previously pending frame.
   *
   * Планирует вызов кадра анимации, предварительно отменяя предыдущий ожидающий кадр.
   * @param callback function invoked on the next animation frame / функция, вызываемая на следующем кадре анимации
   */
  protected startFrame(callback: FrameRequestCallback): void {
    this.stopFrame()

    if (isDomRuntime()) {
      this.frameId = requestAnimationFrame((time) => {
        this.frameId = undefined
        callback(time)
      })
    }
  }

  /**
   * Cancels any pending animation frame callback.
   *
   * Отменяет ожидающий вызов кадра анимации.
   */
  protected stopFrame(): void {
    if (this.frameId !== undefined) {
      if (isDomRuntime()) {
        cancelAnimationFrame(this.frameId)
      }

      this.frameId = undefined
    }
  }
}

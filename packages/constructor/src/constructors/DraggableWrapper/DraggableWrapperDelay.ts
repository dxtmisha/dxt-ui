import type { DraggableWrapperProps } from './props'

/**
 * Helper class for managing the start delay timeout of draggable sorting /
 * Вспомогательный класс для управления таймером задержки начала перетаскивания
 */
export class DraggableWrapperDelay {
  protected timeout?: any

  /**
   * Constructor
   * @param props input data / входные данные
   */
  constructor(
    protected readonly props: DraggableWrapperProps
  ) { }

  /**
   * Returns the drag delay value /
   * Возвращает значение задержки перетаскивания
   * @returns delay in milliseconds / задержка в миллисекундах
   */
  get delay(): number {
    return Number(this.props.delay || 640)
  }

  /**
   * Checks if a delay timeout is currently active /
   * Проверяет, активен ли в данный момент таймер задержки
   * @returns check result / результат проверки
   */
  is(): boolean {
    return this.timeout !== undefined
  }

  /**
   * Starts the delay timeout for drag-and-drop initiation /
   * Запускает таймер задержки для начала перетаскивания
   * @param callback function to execute after the delay / функция для выполнения после задержки
   */
  start(callback: () => void): void {
    this.stop()
    this.timeout = setTimeout(() => {
      this.timeout = undefined
      callback()
    }, this.delay)
  }

  /**
   * Stops/clears the delay timeout if it is active /
   * Останавливает/очищает таймер задержки, если он активен
   * @returns true if an active timer was stopped / true, если активный таймер был остановлен
   */
  stop(): boolean {
    if (this.timeout) {
      clearTimeout(this.timeout)
      this.timeout = undefined

      return true
    }

    return false
  }
}

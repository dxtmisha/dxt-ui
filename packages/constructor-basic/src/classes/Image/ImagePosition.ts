import type { ImageCoordinator } from './ImageCoordinator'

/**
 * A class for collecting data for the background-position property.
 *
 * Класс для получения данных для свойства background-position.
 */
export abstract class ImagePosition {
  /**
   * Constructor
   * @param coordinator coordinates for margins/ координаты для отступов
   */
  protected constructor(
    protected readonly coordinator: ImageCoordinator
  ) {
  }

  /**
   * Returns the position on the left.
   *
   * Возвращает позицию слева.
   */
  abstract getX(): string

  /**
   * Returns the position on the top.
   *
   * Возвращает позицию сверху.
   */
  abstract getY(): string

  /**
   * Returns the position on the left.
   *
   * Возвращает позицию по горизонтали.
   */
  protected abstract getPropX(): string | number | undefined

  /**
   * Returns the position on the top.
   *
   * Возвращает позицию по вертикали.
   */
  protected abstract getPropY(): string | number | undefined

  /**
   * Initializes the position on the left.
   *
   * Инициализирует позицию слева.
   */
  protected initX(): string {
    if (this.coordinator.is()) {
      return `${this.coordinator.get()[3] + (this.coordinator.getSize().width / 2)}%`
    }

    return this.getPropX()?.toString() || 'center'
  }

  /**
   * Initializes the position on the top.
   *
   * Инициализирует позицию сверху.
   */
  protected initY(): string {
    if (this.coordinator.is()) {
      return `${this.coordinator.get()[0] + (this.coordinator.getSize().height / 2)}%`
    }

    return this.getPropY()?.toString() || 'center'
  }
}

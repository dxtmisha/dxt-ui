import { PropertiesItems } from '../PropertiesItems'

/**
 * Abstract class for conversion.
 *
 * Абстрактный класс для преобразования.
 */
export abstract class PropertiesToAbstract {
  protected readonly abstract FILE_CACHE: string

  /**
   * Constructor
   * @param items data for processing/ данные для обработки
   */
  constructor(
    protected items: PropertiesItems
  ) {
  }

  to(): void {
    this.init()
    this.write()
  }

  protected abstract init(): void

  /**
   * Saves intermediate data.
   *
   * Сохраняет промежуточные данные.
   */
  protected write(): void {
    this.items.write(this.FILE_CACHE)
  }
}

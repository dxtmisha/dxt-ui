// export:none

import { PropertiesItems } from '../PropertiesItems'

/**
 * Abstract base class for data transformation processes.
 * Provides the core orchestration for initializing and writing transformed property data.
 *
 * Абстрактный базовый класс для процессов преобразования данных.
 * Обеспечивает основную оркестровку инициализации и записи преобразованных данных свойств.
 */
export abstract class PropertiesToAbstract {
  /**
   * Abstract property defining the cache file path for the specific transformation.
   *
   * Абстрактное свойство, определяющее путь к файлу кэша для конкретного преобразования.
   */
  protected readonly abstract FILE_CACHE: string

  /**
   * Constructor that initializes the transformation with a set of property items.
   *
   * Конструктор, который инициализирует преобразование набором элементов свойств.
   * @param items data for processing / данные для обработки
   */
  constructor(
    protected items: PropertiesItems
  ) {
  }

  /**
   * Executes the full transformation pipeline: initialization followed by writing the output.
   *
   * Выполняет полный конвейер преобразования: инициализацию с последующей записью результата.
   */
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

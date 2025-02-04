import { Properties } from '../properties/Properties'

/**
 * Base class for generating basic properties.
 *
 * Базовый класс для генерации базовых свойств.
 */
export class Styles {
  private readonly properties: Properties

  /**
   * Constructor
   */
  constructor() {
    this.properties = new Properties()
  }

  /**
   * Generating all basic data.
   *
   * Генерация всех базовых данных.
   */
  make(): this {
    return this
  }
}

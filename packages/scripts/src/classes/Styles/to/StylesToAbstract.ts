// export:none

import { forEach } from '@dxt-ui/functional'

import {
  type PropertyItem,
  type PropertyItemsItem,
  PropertyKey
} from '../../../types/propertyTypes'

/**
 * Base class for conversion.
 *
 * Базовый класс для преобразования.
 */
export abstract class StylesToAbstract {
  protected item: PropertyItem

  /**
   * Constructor
   * @param property current branch/ текущая ветка
   * @param space space/ пробел
   * @param content callable function for sub property/ вызываемая функция для под свойства
   * @param first the first element in the list/ первый элемент в списке
   */
  constructor(
    protected property: PropertyItemsItem,
    protected space: string,
    protected content: () => string[] = () => [],
    protected first: boolean = true
  ) {
    this.item = property.item
  }

  /**
   * Getting processed data.
   *
   * Получение обработанных данных.
   */
  make(): string[] {
    return this.addSpace(this.treatment())
  }

  /**
   * Getting the name of a property.
   *
   * Получение названия свойства.
   */
  protected getName(): string {
    return this.item?.[PropertyKey.name] ?? ''
  }

  /**
   * Gets the value of a property.
   *
   * Получает значение свойства.
   */
  protected getValue(): string | undefined {
    const value = this.item?.[PropertyKey.css]

    if (value) {
      return value.replace(/\\#/g, '#')
    }

    return undefined
  }

  /**
   * Method for converting data into a style structure.
   *
   * Метод преобразования данных в структуру стиля.
   */
  protected abstract treatment(): string[]

  /**
   * Adding a space in each line.
   *
   * Добавление пробела в каждую строку.
   * @param data data for processing/ данные для обработки
   */
  protected addSpace(data: string[]): string[] {
    return forEach(data, item => `${this.space}${item}`)
  }

  /**
   * Adds an empty line if the element is not the first in the tree.
   *
   * Добавляет пустую строку, если элемент не является первым в дереве.
   */
  protected addEmptyString(): string[] {
    return (this.first ? [''] : [])
  }
}

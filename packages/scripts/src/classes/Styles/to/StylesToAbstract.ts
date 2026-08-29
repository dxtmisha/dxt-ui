// export:none

import { forEach } from '@dxtmisha/functional-basic'

import {
  type PropertyItem,
  type PropertyItemsItem,
  PropertyKey
} from '../../../types/propertyTypes'

/**
 * Abstract base class for converting specific property token types into SCSS rule blocks and lines.
 *
 * Абстрактный базовый класс для преобразования определенных типов токенов свойств в блоки и строки правил SCSS.
 */
export abstract class StylesToAbstract {
  /** Current property item metadata / Метаданные текущего элемента свойства */
  protected item: PropertyItem

  /**
   * Constructor for StylesToAbstract.
   *
   * Конструктор для StylesToAbstract.
   * @param property current property item in the tree / текущий элемент свойства в дереве
   * @param space indentation prefix string / строка префикса отступа
   * @param content function yielding nested child SCSS lines / функция, возвращающая вложенные строки SCSS
   * @param first indicates whether this is the first element in the group / указывает, является ли этот элемент первым в группе
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
   * Generates and returns indented SCSS lines for the property.
   *
   * Генерирует и возвращает строки SCSS с отступами для свойства.
   * @returns array of indented SCSS code lines / массив строк кода SCSS с отступами
   */
  make(): string[] {
    return this.addSpace(this.treatment())
  }

  /**
   * Retrieves the CSS property or selector name.
   *
   * Получение названия свойства CSS или селектора.
   * @returns property name string / строка названия свойства
   */
  protected getName(): string {
    return this.item?.[PropertyKey.name] ?? ''
  }

  /**
   * Retrieves and normalizes the raw CSS value from metadata.
   *
   * Получает и нормализует исходное значение CSS из метаданных.
   * @returns normalized CSS value string or undefined / нормализованная строка значения CSS или undefined
   */
  protected getValue(): string | undefined {
    const value = this.item?.[PropertyKey.css]

    if (value) {
      return value.replace(/\\#/g, '#')
    }

    return undefined
  }

  /**
   * Transforms property item data into unindented SCSS rules.
   *
   * Преобразует данные элемента свойства в правила SCSS без внешнего отступа.
   * @returns array of SCSS rule lines / массив строк правил SCSS
   */
  protected abstract treatment(): string[]

  /**
   * Prefixes each line in the array with the current indentation space.
   *
   * Добавляет текущую строку отступа в начало каждой строки массива.
   * @param data array of unindented code lines / массив строк кода без отступа
   * @returns array of indented code lines / массив строк кода с отступом
   */
  protected addSpace(data: string[]): string[] {
    return forEach(data, item => `${this.space}${item}`)
  }

  /**
   * Returns an array with an empty separator line if not the first element in the block.
   *
   * Возвращает массив с пустой строкой-разделителем, если элемент не первый в блоке.
   * @returns array containing an empty line or empty array / массив с пустой строкой или пустой массив
   */
  protected addEmptyString(): string[] {
    return (this.first ? [''] : [])
  }
}

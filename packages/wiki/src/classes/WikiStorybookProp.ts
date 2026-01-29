import { isString } from '@dxtmisha/functional-basic'
import { type StorybookArgsItem, StorybookControl } from '../types/storybookTypes'

/**
 * Class for working with a single Storybook property.
 *
 * Класс для работы с одним свойством Storybook.
 */
export class WikiStorybookProp {
  /**
   * Constructor
   * @param name property name / имя свойства
   * @param item property configuration / конфигурация свойства
   */
  constructor(
    public readonly name: string,
    protected readonly item: StorybookArgsItem
  ) {
  }

  /**
   * Checks if the item is a demo item.
   *
   * Проверяет, является ли элемент демонстрационным.
   */
  isDemo(): boolean {
    return this.item.isDemo === true
  }

  /**
   * Returns the property configuration.
   *
   * Возвращает конфигурацию свойства.
   */
  get(): StorybookArgsItem {
    return this.item
  }

  /**
   * Returns the property name.
   *
   * Возвращает имя свойства.
   */
  getName(): string {
    return this.name
  }

  /**
   * Returns the default value of the property.
   *
   * Возвращает значение по умолчанию для свойства.
   */
  getDefaultValue(): any {
    return this.item?.table?.defaultValue?.summary
  }

  /**
   * Returns the property type.
   *
   * Возвращает тип свойства.
   */
  getType(): string {
    if (this.item?.table?.type?.summary) {
      return this.item.table.type.summary
    }

    if (isString(this.item.control)) {
      return this.item.control
    }

    return this.item.control?.type ?? StorybookControl.string
  }

  /**
   * Returns the property description.
   *
   * Возвращает описание свойства.
   */
  getDescription(): string {
    return this.item.description ?? ''
  }

  /**
   * Returns the property options.
   *
   * Возвращает опции свойства.
   */
  getOptions(): StorybookArgsItem['options'] {
    return this.item.options
  }

  /**
   * Returns the demo data.
   *
   * Возвращает демонстрационные данные.
   */
  getDemo(): any {
    return this.item.demo
  }
}

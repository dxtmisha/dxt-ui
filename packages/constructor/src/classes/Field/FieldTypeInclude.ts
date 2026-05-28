import { FieldVisibilityInclude } from './FieldVisibilityInclude'

import type { FieldAllProps, FieldType } from '../../types/fieldTypes'

/**
 * Class for working with the input type.
 *
 * Класс для работы с типом ввода.
 */
export class FieldTypeInclude {
  /**
   * Constructor
   *
   * Конструктор
   * @param props input data / входные данные
   * @param visibility object for working with visualization / объект для работы с визуализацией
   */
  constructor(
    protected readonly props: FieldAllProps,
    protected readonly visibility?: FieldVisibilityInclude
  ) {
  }

  /**
   * Returns the input type.
   *
   * Возвращает тип ввода.
   * @returns type value / значение типа
   */
  get item(): FieldType {
    const type = this.props.type

    if (
      type === 'password'
      && this.visibility?.item.value
    ) {
      return 'text'
    }

    return type ?? 'text'
  }

  /**
   * Returns the input type.
   *
   * Возвращает тип ввода.
   * @returns type value / значение типа
   */
  get(): FieldType {
    return this.item
  }
}

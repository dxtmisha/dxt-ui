import { toKebabCase } from '@dxt-ui/functional'

import { PropertiesToVar } from './PropertiesToVar'

import { type PropertyItemsItem, PropertyType } from '../../../types/propertyTypes'

/**
 * Class for working with custom styles in CSS.
 *
 * Класс для работы с пользовательскими стилями в CSS.
 */
export class PropertiesToProperty extends PropertiesToVar {
  protected FILE_CACHE = '024-property'
  protected type = PropertyType.property

  /**
   * Name transformation for the var type.
   *
   * Преобразование имени для типа var.
   * @param name base property name/ базовое название свойства
   * @param item current element/ текущий элемент
   */
  protected getName({
    name,
                      item
  }: PropertyItemsItem) {
    return toKebabCase(this.items.getReName(name, item))
  }
}

import { isObjectNotArray } from '@dxt-ui/functional'

import { PropertiesToAbstract } from './PropertiesToAbstract'

import {
  PropertyKey,
  PropertyType
} from '../../../types/propertyTypes'

export const KEY_CUSTOM = 'custom'

/**
 * A class for working with properties that support additional values.
 *
 * Класс для работы со свойствами с поддержкой дополнительных значений.
 */
export class PropertiesToStyle extends PropertiesToAbstract {
  protected readonly FILE_CACHE = '016-style'

  /**
   * Handling a style record.
   *
   * Обработка записи стиля.
   */
  protected init(): void {
    this.items.each(({
      item,
      name,
      design,
      component
    }) => {
      if (
        item?.[PropertyKey.style]
        && isObjectNotArray(item.value)
        && !item.value?.[KEY_CUSTOM]
      ) {
        item[PropertyKey.variable] = PropertyType.state
        item.value[KEY_CUSTOM] = {
          value: {
            [name]: {
              value: `{${design}.${component}.sys.${name}}`,
              [PropertyKey.variable]: item?.[PropertyKey.varKey] ? PropertyType.var : PropertyType.property
            }
          },
          [PropertyKey.variable]: PropertyType.state
        }
      }
    })
  }
}

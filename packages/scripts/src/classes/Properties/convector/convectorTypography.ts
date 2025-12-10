// export:none

import { isString } from '@dxtmisha/functional-basic'

import { type PropertyItemInput } from '../../../types/propertyTypes'

/**
 * Conversion for working with the typography type.
 *
 * Конвертация для работы с типом типография.
 * @param item values for conversion/ значения для преобразования
 */
export function convectorTypography(item: PropertyItemInput): void {
  if (isString(item?.value)) {
    item.value = {
      basic: item.value
    }
  }
}

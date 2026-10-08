// export:none

import { type PropertyItemInput } from '../../../types/propertyTypes'

/**
 * Data conversion to standard fonts.
 *
 * Преобразование данных в соответствие стандартным шрифтам.
 * @param item values for conversion/ значения для преобразования
 */
export function convectorFontFamilies(item: PropertyItemInput): void {
  const value = item?.value ?? item?.$value

  if (
    typeof value === 'string'
    && !value.match(/[{}]/)
  ) {
    const formatted = `'${value}', sans-serif`

    if ('$value' in item) {
      item.$value = formatted
    }

    if ('value' in item) {
      item.value = formatted
    }
  }
}

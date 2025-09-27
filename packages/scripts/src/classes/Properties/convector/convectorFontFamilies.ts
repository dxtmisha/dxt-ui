import { type PropertyItemInput } from '../../../types/propertyTypes'

/**
 * Data conversion to standard fonts.
 *
 * Преобразование данных в соответствие стандартным шрифтам.
 * @param item values for conversion/ значения для преобразования
 */
export function convectorFontFamilies(item: PropertyItemInput): void {
  if (
    typeof item?.value === 'string'
    && !item.value.match(/[{}]/)
  ) {
    item.value = `'${item.value}', sans-serif`
  }
}

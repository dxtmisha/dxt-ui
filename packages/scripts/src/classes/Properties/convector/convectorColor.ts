// export:none

import {
  type PropertyItemInput,
  PropertyKey
} from '../../../types/propertyTypes'

/**
 * Data conversion into colors.
 *
 * Преобразование данных в цвета.
 * @param item values for conversion/ значения для преобразования
 */
export function convectorColor(item: PropertyItemInput): void {
  const type: string | undefined = item?.$extensions?.['studio.tokens']?.modify?.type
  const value: string | undefined = item?.$extensions?.['studio.tokens']?.modify?.value

  if (type) {
    switch (type) {
      case 'alpha':
        item[PropertyKey.cssColorOpacity] = value?.toString() ?? '1'
        break
    }
  }
}

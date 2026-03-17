// export:none

import {
  type PropertyItemInput,
  PropertyKey
} from '../../../types/propertyTypes'

/**
 * Convector for transforming design token color metadata into internal property structures.
 * Supports opacity modification based on 'studio.tokens' extensions.
 *
 * Конвектор для преобразования метаданных цвета токенов дизайна во внутренние структуры свойств.
 * Поддерживает модификацию прозрачности на основе расширений 'studio.tokens'.
 * @param item property input object for conversion / входной объект свойства для преобразования
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

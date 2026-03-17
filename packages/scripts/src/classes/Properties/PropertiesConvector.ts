// export:none

import { forEach, isObjectNotArray } from '@dxtmisha/functional-basic'

import { convectorColor } from './convector/convectorColor'
import { convectorShadow } from './convector/convectorShadow'
import { convectorFontFamilies } from './convector/convectorFontFamilies'
import { convectorTypography } from './convector/convectorTypography'

import type { PropertyItemInput, PropertyListOrData } from '../../types/propertyTypes'

const LIST: Record<string, (item: PropertyItemInput) => void> = {
  boxShadow: convectorShadow,
  color: convectorColor,
  fontFamilies: convectorFontFamilies,
  typography: convectorTypography
}

/**
 * Static utility for semantic token transformation.
 * This class orchestrates the conversion of raw property values into specialized design formats (e.g., color processing, typography synthesis, shadow normalization) by dispatching items to specific convectors based on their metadata type.
 *
 * Статическая утилита для семантического преобразования токенов.
 * Этот класс координирует преобразование необработанных значений свойств в специализированные форматы дизайна (например, обработка цвета, синтез типографики, нормализация теней), распределяя элементы по конкретным конвертерам на основе их типа метаданных.
 */
export class PropertiesConvector {
  /**
   * Recursively transforms property lists or individual data structures.
   * Identifies the property type and applies the corresponding specialized convector if available, or continues recursive traversal for nested objects.
   *
   * Рекурсивно преобразует списки свойств или отдельные структуры данных.
   * Определяет тип свойства и применяет соответствующий специализированный конвертер, если он доступен, или продолжает рекурсивный обход для вложенных объектов.
   * @param properties the property cluster to be transformed / кластер свойств для преобразования
   */
  static to(properties: PropertyListOrData): void {
    forEach(properties, (item) => {
      if (
        item?.type
        && item.type in LIST
      ) {
        LIST[item.type]?.(item)
      } else if (
        item?.value
        && isObjectNotArray(item.value)
      ) {
        this.to(item.value)
      } else if (isObjectNotArray(item)) {
        this.to(item)
      }
    })
  }
}

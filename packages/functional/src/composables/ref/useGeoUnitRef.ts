import { GeoUnitRef } from '../../classes/ref/GeoUnitRef'
import type { RefOrNormal } from '../../types/refTypes'

/**
 * Returns a class object for working with unit formatting and automatic conversions.
 *
 * Возвращает объект класса для работы с форматированием единиц измерения и автоматической конвертацией.
 * @param code locale, country or language code / код локали, страны или языка
 * @returns reactive GeoUnitRef instance / реактивный экземпляр GeoUnitRef
 */
export function useGeoUnitRef(code?: RefOrNormal<string | undefined>): GeoUnitRef {
  return new GeoUnitRef(code)
}

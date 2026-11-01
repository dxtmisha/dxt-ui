import { sanitizeLocation } from './sanitizeLocation'
import { toCountry } from './toCountry'
import { toGeoStandard } from './toGeoStandard'
import { toLanguage } from './toLanguage'

import {
  GEO_DEFAULT_FIRST_DAY,
  type GeoItem,
  type GeoItemFull
} from '../types/geoTypes'

/**
 * Transforms a basic geo item into a full geo item with resolved location data and defaults.
 *
 * Преобразует базовый гео-объект в полный гео-объект с разрешенными данными локации и значениями по умолчанию.
 * @param item basic geo item / базовый гео-объект
 * @param code country code, full form language-country or one of them / код страны, полный вид язык-страна или один из них
 * @returns full geo item data / полные данные гео-объекта
 */
export function toGeoItemFull(
  item: GeoItem,
  code?: string
): GeoItemFull {
  const locationLanguage = (code && toLanguage(code)) || item.language
  const standard = toGeoStandard(item, locationLanguage, true)

  return {
    ...item,
    standard,
    firstDay: item.firstDay || GEO_DEFAULT_FIRST_DAY,

    location: sanitizeLocation(code) ?? standard,
    locationCountry: (code && toCountry(code)) || item.country,
    locationLanguage
  }
}

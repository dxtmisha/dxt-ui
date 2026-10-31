import { isString } from './isString'
import { GeoList } from '../classes/GeoList'

/**
 * Regular expression for extracting a 2-letter region code from reversed ('RU-ru') or BCP-47 ('zh-Hans-CN') locale tags /
 * Регулярное выражение для извлечения двухбуквенного кода региона из обратных ('RU-ru') или BCP-47 ('zh-Hans-CN') тегов локали
 */
const REGEXP_LOCALE_COUNTRY = /^(?:([A-Z]{2})[-_][a-z]{2,3}$|[a-zA-Z]{2,3}(?:[-_][a-zA-Z]{3,4})*[-_]([a-zA-Z]{2})(?:$|[-_]))/

/**
 * Extracts and validates a country code from a location or country string via GeoList.
 * Supports BCP-47 subtags (e.g., 'zh-Hans-CN'), case-insensitive tags ('en-gb'),
 * reversed tags ('RU-ru'), underscore separators ('en_US'), and alternative country codes ('UK', 'BY_BY').
 *
 * Извлекает и валидирует код страны из строки локации или страны через GeoList.
 * Поддерживает BCP-47 субтеги (например, 'zh-Hans-CN'), регистронезависимые теги ('en-gb'),
 * обратные теги ('RU-ru'), разделители подчеркивания ('en_US') и альтернативные коды стран ('UK', 'BY_BY').
 * @param code candidate location or country string / строка локации или код страны
 * @returns 2-letter country code or empty string / двухбуквенный код страны или пустая строка
 */
export function toCountry(code?: unknown): string {
  if (!isString(code)) {
    return ''
  }

  const trimmed = code.trim()

  if (!trimmed) {
    return ''
  }

  const match = trimmed.match(REGEXP_LOCALE_COUNTRY)
  const region = match?.[1] ?? match?.[2]?.toUpperCase()

  return GeoList.getByCountry(region ?? trimmed)?.country ?? ''
}

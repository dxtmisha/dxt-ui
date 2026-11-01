import { isString } from './isString'
import { GeoList } from '../classes/GeoList'

/**
 * Regular expression for an exact uppercase country code ('US', 'BY_BY') /
 * Регулярное выражение для точного кода страны в верхнем регистре ('US', 'BY_BY')
 */
const REGEXP_COUNTRY_CODE = /^[A-Z]{2}(?:_[A-Z]{2})?$/

/**
 * Regular expression for extracting a country code from reversed ('RU-ru') or BCP-47 ('zh-Hans-CN', 'ru-BY_BY') locale tags /
 * Регулярное выражение для извлечения кода страны из обратных ('RU-ru') или BCP-47 ('zh-Hans-CN', 'ru-BY_BY') тегов локали
 */
const REGEXP_LOCALE_COUNTRY = /^(?:([A-Z]{2}(?:_[A-Z]{2})?)[-_][a-z]{2,3}$|[a-zA-Z]{2,3}(?:[-_][a-zA-Z]{3,4})*[-_]([a-zA-Z]{2}(?:_[a-zA-Z]{2})?)(?:$|[-_]))/

/**
 * Extracts and validates a country code from a location or country string via GeoList.
 * Supports BCP-47 subtags (e.g., 'zh-Hans-CN'), case-insensitive tags ('en-gb'),
 * reversed tags ('RU-ru'), underscore separators ('en_US'), and alternative country codes ('UK', 'BY_BY').
 *
 * Извлекает и валидирует код страны из строки локации или страны через GeoList.
 * Поддерживает BCP-47 субтеги (например, 'zh-Hans-CN'), регистронезависимые теги ('en-gb'),
 * обратные теги ('RU-ru'), разделители подчеркивания ('en_US') и альтернативные коды стран ('UK', 'BY_BY').
 * @param code candidate location or country string / строка локации или код страны
 * @param raw whether to skip GeoList lookup and return raw extracted code / пропускать ли проверку в GeoList и возвращать сырой извлеченный код
 * @returns 2-letter country code or empty string / двухбуквенный код страны или пустая строка
 */
export function toCountry(
  code?: unknown,
  raw?: boolean
): string {
  if (!isString(code)) {
    return ''
  }

  const trimmed = code.trim()

  if (!trimmed) {
    return ''
  }

  if (REGEXP_COUNTRY_CODE.test(trimmed)) {
    return raw ? trimmed : (GeoList.getByCountry(trimmed)?.country ?? '')
  }

  const match = trimmed.match(REGEXP_LOCALE_COUNTRY)
  const region = match?.[1] ?? match?.[2]?.toUpperCase()

  if (raw && region) {
    return region
  }

  return GeoList.getByCountry(region ?? trimmed)?.country ?? ''
}

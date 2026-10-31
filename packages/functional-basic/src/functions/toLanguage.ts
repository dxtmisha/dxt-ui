import { isString } from './isString'
import { GeoList } from '../classes/GeoList'

/**
 * Regular expression for extracting a 2- or 3-letter language code from reversed ('RU-ru') or BCP-47 ('zh-Hans-CN') locale tags /
 * Регулярное выражение для извлечения двух- или трехбуквенного кода языка из обратных ('RU-ru') или BCP-47 ('zh-Hans-CN') тегов локали
 */
const REGEXP_LOCALE_LANGUAGE = /^(?:[A-Z]{2}[-_]([a-z]{2,3})$|([a-zA-Z]{2,3})(?:[-_][a-zA-Z0-9]{1,8})+$)/

/**
 * Extracts and validates a language code from a location or language string via GeoList.
 * Supports BCP-47 subtags (e.g., 'zh-Hans-CN'), case-insensitive tags ('ru-ru', 'EN-GB'),
 * 3-letter ISO 639-3 codes ('cmn-SG'), reversed tags ('RU-ru'), and alternative language codes ('ua', 'cz').
 *
 * Извлекает и валидирует код языка из строки локации или языка через GeoList.
 * Поддерживает BCP-47 субтеги (например, 'zh-Hans-CN'), регистронезависимые теги ('ru-ru', 'EN-GB'),
 * трехбуквенные коды ISO 639-3 ('cmn-SG'), обратные теги ('RU-ru') и альтернативные коды языков ('ua', 'cz').
 * @param code candidate location or language string / строка локации или код языка
 * @returns canonical language code or empty string / канонический код языка или пустая строка
 */
export function toLanguage(code?: unknown): string {
  if (!isString(code)) {
    return ''
  }

  const trimmed = code.trim()

  if (!trimmed) {
    return ''
  }

  const match = trimmed.match(REGEXP_LOCALE_LANGUAGE)
  const language = match?.[1] ?? match?.[2]?.toLowerCase()

  return GeoList.getByLanguage(language ?? trimmed)?.language ?? ''
}

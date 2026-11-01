import { toCountry } from './toCountry'
import { toLanguage } from './toLanguage'

/**
 * Converts a full locale string into a canonical standard locale (aa-AA) format.
 * Returns an empty string if the input is not a full locale format (missing country or language).
 *
 * Преобразует полную строку локали в канонический формат локали (aa-AA).
 * Возвращает пустую строку, если формат не полный (отсутствует страна или язык).
 * @param code candidate locale string / строка локали
 * @returns canonical locale code in 'aa-AA' format or empty string / канонический код локали в формате 'aa-AA' или пустая строка
 */
export function toLocale(code?: unknown): string {
  const country = toCountry(code)

  if (!country) {
    return ''
  }

  const language = toLanguage(code)

  return language ? `${language}-${country}` : ''
}

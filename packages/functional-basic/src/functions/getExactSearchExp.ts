import { getExp } from './getExp'

/**
 * Creates a case-insensitive regular expression for an exact match of a phrase (without anchors).
 *
 * Создает регистронезависимое регулярное выражение для точного совпадения фразы (без якорей).
 * @param search search string / строка поиска
 * @returns regular expression for exact search / регулярное выражение для точного поиска
 */
export function getExactSearchExp(search: string): RegExp {
  return getExp(search, 'i', '(:value)')
}

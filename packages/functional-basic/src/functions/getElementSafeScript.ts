import { encodeAttribute } from './encodeAttribute'

/**
 * Matches closing script tags to prevent premature script termination /
 * Регулярное выражение для поиска закрывающих тегов script во избежание преждевременного закрытия скрипта
 */
const REGEXP_CLOSING_SCRIPT = /<\/(script)/gi

/**
 * Generates a safe script tag for data hydration.
 *
 * Генерирует безопасный тег скрипта для гидратации данных.
 * @param id script tag ID / идентификатор тега скрипта
 * @param data data to be stored / данные для хранения
 * @returns generated script tag string / сгенерированная HTML-строка тега скрипта
 */
export function getElementSafeScript<T = unknown>(id: string | number, data?: T): string {
  const safeId = encodeAttribute(id)
  const json = JSON.stringify(data)?.replace(REGEXP_CLOSING_SCRIPT, '<\\/$1') ?? 'null'

  return `<script id="${safeId}" type="application/json">${json}</script>`
}

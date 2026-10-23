/**
 * Matches double quote characters for HTML attribute escaping /
 * Регулярное выражение для поиска двойных кавычек при экранировании HTML-атрибута
 */
const REGEXP_DOUBLE_QUOTE = /"/g

/**
 * Matches closing script tags to prevent premature script termination /
 * Регулярное выражение для поиска закрывающих тегов script во избежание преждевременного закрытия скрипта
 */
const REGEXP_CLOSING_SCRIPT = /<\/(script)/gi

/**
 * Generates a safe script tag for data hydration.
 *
 * Генерирует безопасный тег скрипта для гидратации данных.
 * @param id script tag ID / ID тега скрипта
 * @param data data to be stored / данные для хранения
 * @returns generated script tag string / сгенерированная строка тега скрипта
 */
export function getElementSafeScript<T = unknown>(id: string, data: T): string {
  const safeId = id.replace(REGEXP_DOUBLE_QUOTE, '&quot;')
  const json = JSON.stringify(data)?.replace(REGEXP_CLOSING_SCRIPT, '<\\/$1') ?? 'null'

  return `<script id="${safeId}" type="application/json">${json}</script>`
}

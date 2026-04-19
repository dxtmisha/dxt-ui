/**
 * Generates a safe script tag for data hydration.
 *
 * Генерирует безопасный тег скрипта для гидратации данных.
 * @param id script tag ID / ID тега скрипта
 * @param data data to be stored / данные для хранения
 * @returns generated script tag string / сгенерированная строка тега скрипта
 */
export function getElementSafeScript(id: string, data: any): string {
  const safeId = id.replace(/"/g, '&quot;')
  const json = JSON.stringify(data).replace(/<\/(script)>/gi, '<\\/$1>')

  return `<script id="${safeId}" type="application/json">${json}</script>`
}

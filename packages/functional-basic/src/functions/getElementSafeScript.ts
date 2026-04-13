/**
 * Generates a safe script tag for data hydration.
 *
 * Генерирует безопасный тег скрипта для гидратации данных.
 * @param id script tag ID / ID тега скрипта
 * @param data data to be stored / данные для хранения
 */
export function getElementSafeScript(id: string, data: any): string {
  if (!data) {
    return ''
  }

  let json = JSON.stringify(data)

  if (json?.match(/<\/script>/i)) {
    json = json.replace(/<\/script>/gi, '<\\/script>')
  }

  return `<script id="${id}" type="application/json">${json}</script>`
}

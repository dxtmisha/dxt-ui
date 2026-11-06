/**
 * Gets the origin (protocol and domain) from the request URL.
 *
 * Получает источник (протокол и домен) из URL запроса.
 * @param request HTTP request / HTTP запрос
 * @returns origin string (protocol and domain) / строка источника (протокол и домен)
 */
export function getRequestOrigin(request: Request): string {
  return new URL(request.url).origin
}

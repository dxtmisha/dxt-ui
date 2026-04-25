/**
 * Gets the origin (protocol and domain) from the request URL.
 *
 * Получает источник (протокол и домен) из URL запроса.
 * @param request HTTP request / HTTP запрос
 */
export function getRequestOrigin(request: Request): string {
  return new URL(request.url).origin
}

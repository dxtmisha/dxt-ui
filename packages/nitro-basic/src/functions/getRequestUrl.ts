/**
 * Gets the pathname from the request URL.
 *
 * Получает путь из URL запроса.
 * @param request HTTP request / HTTP запрос
 */
export function getRequestUrl(request: Request): string {
  return new URL(request.url).pathname
}

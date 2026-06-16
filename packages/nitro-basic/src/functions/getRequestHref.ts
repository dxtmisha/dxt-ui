/**
 * Gets the full URL (href) from the request URL.
 *
 * Получает полный URL (href) из URL запроса.
 * @param request HTTP request / HTTP запрос
 * @returns full URL string / полная строка URL
 */
export function getRequestHref(request: Request): string {
  return new URL(request.url).href
}

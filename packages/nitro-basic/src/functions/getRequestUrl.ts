/**
 * Gets the pathname from the request URL.
 *
 * Получает путь из URL запроса.
 * @param request HTTP request / HTTP запрос
 * @returns pathname string / строка пути URL
 */
export function getRequestUrl(request: Request): string {
  return new URL(request.url).pathname
}

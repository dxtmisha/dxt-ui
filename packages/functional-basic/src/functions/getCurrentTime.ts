/**
 * Returns the current time in milliseconds.
 *
 * Возвращает текущее время в миллисекундах.
 *
 * @remarks
 * **Warning (SSR):** Using this function for rendering in SSR will almost certainly lead to hydration mismatches
 * because the timestamp on the server will differ from the timestamp on the client.
 *
 * **Внимание (SSR):** Использование этой функции для отрисовки в SSR практически наверняка приведет к ошибкам гидратации,
 * так как временная метка (timestamp) сервера будет отличаться от метки на стороне клиента.
 *
 * @returns current time in milliseconds / текущее время в миллисекундах
 */
export function getCurrentTime(): number {
  return Date.now()
}

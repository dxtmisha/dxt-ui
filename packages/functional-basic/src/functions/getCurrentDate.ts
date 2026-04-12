import { Datetime } from '../classes/Datetime'
import type { GeoDate } from '../types/geoTypes'

/**
 * Returns the current date in the specified format.
 *
 * Возвращает текущую дату в указанном формате.
 *
 * @remarks
 * Using this function for rendering in SSR may lead to hydration mismatches
 * because the time or time zone on the server may differ from the time on the client.
 * It is recommended to use this function inside client-side hooks only (e.g., `onMounted` in Vue or `useEffect` in React).
 *
 * Использование этой функции для отрисовки в SSR может привести к ошибкам гидратации,
 * так как время или часовой пояс сервера могут отличаться от времени на стороне клиента.
 * Рекомендуется использовать эту функцию только внутри хуков, выполняющихся на клиенте (например, `onMounted` в Vue или `useEffect` in React).
 *
 * @param format type of date format for output / тип формата даты вывода
 * @returns formatted current date / текущая дата в указанном формате
 */
export function getCurrentDate(format: GeoDate = 'datetime'): string {
  return new Datetime(undefined, format).standard()
}

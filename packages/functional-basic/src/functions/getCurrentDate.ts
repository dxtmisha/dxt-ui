import { Datetime } from '../classes/Datetime'
import type { GeoDate } from '../types/geoTypes'

/**
 * Returns the current date in the specified format.
 *
 * Возвращает текущую дату в указанном формате.
 * @param format type of date format for output/ тип формата даты вывода
 */
export function getCurrentDate(format: GeoDate = 'datetime'): string {
  return new Datetime(undefined, format).standard()
}

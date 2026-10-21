import { isNull } from './isNull'
import { Geo } from '../classes/Geo'

/**
 * Extracts date and timezone offset or Z suffix /
 * Извлекает дату и смещение часового пояса или суффикс Z
 */
const REGEXP_TIMEZONE = /^([\s\S]+)([-+]\d{2}:?\d{2}|Z)$/i

/**
 * Matches compact date in YYYYMMDD format /
 * Соответствует компактной дате в формате YYYYMMDD
 */
const REGEXP_DATE_COMPACT_FULL = /^(\d{4})(\d{2})(\d{2})$/

/**
 * Matches compact date in YYYYMM format /
 * Соответствует компактной дате в формате YYYYMM
 */
const REGEXP_DATE_COMPACT_MONTH = /^(\d{4})(\d{2})$/

/**
 * Matches compact date and time in YYYYMMDD HH:mm:ss format /
 * Соответствует компактной дате и времени в формате YYYYMMDD HH:mm:ss
 */
const REGEXP_DATETIME_COMPACT_FULL = /^(\d{4})(\d{2})(\d{2}) (\d{2}):(\d{2}):(\d{2})$/

/**
 * Matches date in YYYY-MM-DD format /
 * Соответствует дате в формате YYYY-MM-DD
 */
const REGEXP_DATE_HYPHEN_FULL = /^\d{4}-\d{2}-\d{2}$/

/**
 * Matches year and month in YYYY-MM format /
 * Соответствует году и месяцу в формате YYYY-MM
 */
const REGEXP_DATE_HYPHEN_MONTH = /^\d{4}-\d{2}$/

/**
 * Matches four-digit year in YYYY format /
 * Соответствует четырёхзначному году в формате YYYY
 */
const REGEXP_DATE_YEAR_ONLY = /^\d{4}$/

/**
 * Matches time in HH:mm format /
 * Соответствует времени в формате HH:mm
 */
const REGEXP_TIME_MINUTES = /^\d{2}:\d{2}$/

/**
 * Matches time with seconds in HH:mm:ss format /
 * Соответствует времени с секундами в формате HH:mm:ss
 */
const REGEXP_TIME_SECONDS = /^\d{2}:\d{2}:\d{2}$/

/**
 * Conversion to Date object.
 *
 * Преобразование в объект Date.
 * @param value input value / входное значение
 * @returns date object / объект даты
 */
export function toDate<T extends Date | number | string>(value?: T): (T & Date) | Date {
  if (value instanceof Date) {
    return value
  }

  if (isNull(value)) {
    return new Date()
  }

  if (typeof value === 'number') {
    return new Date(value)
  }

  let date: string = value
  let timeZone: string = Geo.getTimezoneFormat().trim()

  const timezoneMatch = value.match(REGEXP_TIMEZONE)

  if (timezoneMatch) {
    date = timezoneMatch[1]
    timeZone = timezoneMatch[2].trim()
  }

  let stringDate: string
  let match: RegExpExecArray | null

  if ((match = REGEXP_DATE_COMPACT_FULL.exec(date))) {
    stringDate = `${match[1]}-${match[2]}-${match[3]}T00:00:00`
  } else if ((match = REGEXP_DATE_COMPACT_MONTH.exec(date))) {
    stringDate = `${match[1]}-${match[2]}-01T00:00:00`
  } else if ((match = REGEXP_DATETIME_COMPACT_FULL.exec(date))) {
    stringDate = `${match[1]}-${match[2]}-${match[3]}T${match[4]}:${match[5]}:${match[6]}`
  } else if (REGEXP_DATE_HYPHEN_FULL.test(date)) {
    stringDate = `${date}T00:00:00`
  } else if (REGEXP_DATE_HYPHEN_MONTH.test(date)) {
    stringDate = `${date}-01T00:00:00`
  } else if (REGEXP_DATE_YEAR_ONLY.test(date)) {
    stringDate = `${date}-01-01T00:00:00`
  } else if (REGEXP_TIME_MINUTES.test(date)) {
    stringDate = `2000-01-01T${date}:00`
  } else if (REGEXP_TIME_SECONDS.test(date)) {
    stringDate = `2000-01-01T${date}`
  } else {
    stringDate = date.replace(' ', 'T')
  }

  return new Date(`${stringDate.trim()}${timeZone}`)
}

import {
  useCallback,
  useMemo
} from 'react'
import {
  Datetime,
  Geo,
  type GeoDate,
  type NumberOrStringOrDate,
  toDate
} from '@dxtmisha/functional-basic'

import type { RefOrNormalReact } from '../types/refTypes'
import { useItemReact } from './useItemReact'

/**
 * React hook for working with dates and localized date formatting.
 * Integrates the Datetime class with React state and memoization for automatic re-renders on change.
 *
 * React-хук для работы с датами и локализованным форматированием даты.
 * Интегрирует класс Datetime с состоянием React и мемоизацией для автоматических перерендеров при изменении.
 * @param date initial date for processing / начальная дата для обработки
 * @param type type of date format for output / тип формата даты вывода
 * @param code country and language code / код страны и языка
 * @returns object with date components and formatting methods /
 * объект с компонентами даты и методами форматирования
 */
export function useDatetimeReact(
  date?: RefOrNormalReact<NumberOrStringOrDate>,
  type?: RefOrNormalReact<GeoDate>,
  code?: RefOrNormalReact<string>
) {
  /** Reactive Date object synchronized with date input / Реактивный объект Date, синхронизированный с входящей датой */
  const [currentDate] = useItemReact(date, toDate)

  /** Reactive date format type / Реактивный тип формата даты */
  const [currentType] = useItemReact(type, value => value ?? 'date')

  /** Reactive country and language code / Реактивный код страны и языка */
  const [currentCode] = useItemReact(code, value => value ?? Geo.getLocation())

  /** Memoized instance of the Datetime class / Мемоизированный экземпляр класса Datetime */
  const datetime = useMemo(
    () => new Datetime(currentDate, currentType, currentCode),
    [currentDate, currentType, currentCode]
  )

  /** Current year / Текущий год */
  const year = useMemo(() => datetime.getYear(), [datetime])

  /** Current month (0-based) / Текущий месяц (начиная с 0) */
  const month = useMemo(() => datetime.getMonth(), [datetime])

  /** Current day of the month / Текущий день месяца */
  const day = useMemo(() => datetime.getDay(), [datetime])

  /** Current hour / Текущий час */
  const hour = useMemo(() => datetime.getHour(), [datetime])

  /** Current minute / Текущая минута */
  const minute = useMemo(() => datetime.getMinute(), [datetime])

  /** Current second / Текущая секунда */
  const second = useMemo(() => datetime.getSecond(), [datetime])

  /** Hours format type (12h or 24h) / Тип формата часов (12 или 24 часа) */
  const hoursType = useMemo(() => datetime.getHoursType(), [datetime])

  /** First day of the week code / Код первого дня недели */
  const firstDayCode = useMemo(() => datetime.getFirstDayCode(), [datetime])

  /** Maximum number of days in the current month / Максимальное количество дней в текущем месяце */
  const maxDay = useMemo(() => datetime.getMaxDay(), [datetime])

  /**
   * Enables language-sensitive date and time formatting.
   *
   * Форматирует дату и время с учётом языка и параметров локализации.
   * @param formatType optional date format type / опциональный тип формата даты
   * @param styleOptions representation style of the month or full options / представление месяца или параметры форматирования
   * @returns formatted localized date string / отформатированная локализованная строка даты
   */
  const locale = useCallback((
    formatType?: GeoDate,
    styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions
  ): string => {
    return datetime.locale(formatType ?? currentType, styleOptions)
  }, [datetime, currentType])

  /**
   * Outputs standard date representation.
   *
   * Выводит дату в стандартном формате.
   * @param timeZone include time zone / добавить временную зону
   * @returns standard date string / стандартная строка даты
   */
  const standard = useCallback((timeZone: boolean = true): string => {
    return datetime.standard(timeZone)
  }, [datetime])

  return {
    date: currentDate,
    datetime,
    year,
    month,
    day,
    hour,
    minute,
    second,
    hoursType,
    firstDayCode,
    maxDay,
    type: currentType,
    code: currentCode,
    locale,
    standard
  }
}

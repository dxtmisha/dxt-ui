// ai-none

/**
 * Number of minutes in one hour /
 * Количество минут в одном часе
 */
const MINUTES_IN_HOUR = 60

/**
 * Minimum length of padded time zone segments /
 * Минимальная длина дополненных сегментов часового пояса
 */
const TIMEZONE_SEGMENT_LENGTH = 2

/**
 * Padding character for two-digit time zone segments /
 * Символ заполнения для двузначных сегментов часового пояса
 */
const TIMEZONE_PAD_CHARACTER = '0'

/**
 * Class for managing and formatting time zone offsets within a GeoInstance.
 * Stores the offset in minutes following Date.prototype.getTimezoneOffset() semantics
 * (negative for zones east of UTC, positive for zones west of UTC).
 *
 * Класс для управления и форматирования смещения часового пояса внутри GeoInstance.
 * Хранит смещение в минутах по семантике Date.prototype.getTimezoneOffset()
 * (отрицательное для зон восточнее UTC, положительное для зон западнее UTC).
 */
export class GeoTimezone {
  /**
   * Current time zone offset in minutes /
   * Текущее смещение часового пояса в минутах
   */
  protected value: number

  /**
   * Constructor for GeoTimezone.
   * Initializes the time zone offset in minutes.
   *
   * Конструктор для GeoTimezone.
   * Инициализирует смещение часового пояса в минутах.
   * @param timezone initial time zone offset in minutes / начальное смещение часового пояса в минутах
   */
  constructor(
    timezone: number = new Date().getTimezoneOffset()
  ) {
    this.value = this.normalize(timezone)
  }

  /**
   * Returns the current time zone offset in minutes.
   *
   * Возвращает текущее смещение часового пояса в минутах.
   * @returns time zone offset in minutes / смещение часового пояса в минутах
   */
  get(): number {
    return this.value
  }

  /**
   * Updates the current time zone offset in minutes.
   *
   * Обновляет текущее смещение часового пояса в минутах.
   * @param timezone new time zone offset in minutes / новое смещение часового пояса в минутах
   * @returns current instance / текущий экземпляр
   */
  set(timezone: number): this {
    this.value = this.normalize(timezone)
    return this
  }

  /**
   * Returns the current time zone offset as an ISO 8601 formatted string (e.g., '+03:00', '-05:00').
   *
   * Возвращает текущее смещение часового пояса в виде отформатированной строки ISO 8601 (например, '+03:00', '-05:00').
   * @returns formatted time zone string / отформатированная строка часового пояса
   */
  getFormat(): string {
    const absoluteOffset = Math.abs(this.value)
    const hours = Math.trunc(absoluteOffset / MINUTES_IN_HOUR)
      .toString()
      .padStart(TIMEZONE_SEGMENT_LENGTH, TIMEZONE_PAD_CHARACTER)
    const minutes = (absoluteOffset % MINUTES_IN_HOUR)
      .toString()
      .padStart(TIMEZONE_SEGMENT_LENGTH, TIMEZONE_PAD_CHARACTER)

    if (this.value > 0) {
      return `-${hours}:${minutes}`
    }

    return `+${hours}:${minutes}`
  }

  /**
   * Normalizes a raw time zone offset to a finite integer number of minutes.
   *
   * Нормализует исходное смещение часового пояса до конечного целого числа минут.
   * @param timezone raw time zone offset / исходное смещение часового пояса
   * @returns normalized integer offset / нормализованное целочисленное смещение
   */
  protected normalize(timezone: number): number {
    if (Number.isFinite(timezone)) {
      return Math.trunc(timezone) || 0
    }

    return 0
  }
}

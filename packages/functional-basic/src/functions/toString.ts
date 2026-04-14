/**
 * Converts the given value to a string. Returns an empty string if the value is null or undefined.
 *
 * Преобразование значения в строку. Возвращает пустую строку, если значение равно null или undefined.
 * @param value value for conversion / значение для преобразования
 * @returns string representation of the value / строковое представление значения
 */

export function toString(value: string | null | undefined): string {
  return String(value ?? '')
}

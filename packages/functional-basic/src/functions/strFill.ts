/**
 * Returns the string representation of value repeated count times.
 * Nullish values become an empty string; count defaults to 0 and follows String.prototype.repeat semantics.
 *
 * Возвращает строковое представление value, повторённое count раз.
 * Nullish-значения дают пустую строку; count по умолчанию равен 0 и следует семантике String.prototype.repeat.
 * @param value value to convert to a string and repeat / значение для преобразования в строку и повторения
 * @param count number of repetitions, default 0 / число повторений, по умолчанию 0
 * @returns repeated string / строка из повторений
 * @throws RangeError for counts rejected by String.prototype.repeat / RangeError для count, недопустимого в String.prototype.repeat
 */
export function strFill(value?: unknown, count: number = 0): string {
  return String(value ?? '').repeat(count)
}

/**
 * Checks if the value is between integers.
 *
 * Проверяет, лежит ли значение между целыми числами.
 * @param value input value/ входное значение
 * @param between value for rounding/ значение для округления
 */
export function isIntegerBetween(value: number, between: number): boolean {
  const floor = Math.floor(between)
  return value >= floor && value < floor + 1
}

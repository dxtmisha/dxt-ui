/**
 * Checks whether value belongs to [Math.floor(between), Math.floor(between) + 1).
 *
 * Проверяет, входит ли value в интервал [Math.floor(between), Math.floor(between) + 1).
 * @param value number to check / проверяемое число
 * @param between number whose floor defines the lower bound / число, округление которого вниз задаёт нижнюю границу
 * @returns true if the value is within the half-open interval / true, если значение входит в полуоткрытый интервал
 */
export function isIntegerBetween(value: number, between: number): boolean {
  const floor = Math.floor(between)
  return value >= floor && value < floor + 1
}

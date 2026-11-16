/**
 * Checks whether the value is a positive safe integer (> 0).
 *
 * Проверяет, является ли значение положительным безопасным целым числом (> 0).
 * @param value value to check / проверяемое значение
 * @returns true if the value is a positive safe integer / true, если значение является положительным безопасным целым числом
 */
export function isPositiveInteger(value?: unknown): value is number {
  return typeof value === 'number'
    && Number.isSafeInteger(value)
    && value > 0
}

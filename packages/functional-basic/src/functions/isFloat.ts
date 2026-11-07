import { isNumber } from './isNumber'

/**
 * Checks for finite numbers or trimmed decimal strings, excluding bigint.
 * Decimal strings require digits before and after any decimal point.
 *
 * Проверяет конечные числа или десятичные строки после удаления внешних пробелов, исключая bigint.
 * В десятичных строках обязательны цифры до и после десятичной точки, если она есть.
 * @param value value to check / проверяемое значение
 * @returns true for a finite number or decimal string / true для конечного числа или десятичной строки
 */
export function isFloat(value?: unknown): boolean {
  return typeof value !== 'bigint' && isNumber(value)
}

/**
 * Generates a random integer within the specified range (inclusive).
 *
 * Генерирует случайное целое число в указанном диапазоне (включительно).
 * @param min the lowest value to return / наименьшее возвращаемое значение
 * @param max the highest value to return / наибольшее возвращаемое значение
 * @returns random integer within [min, max] / случайное целое число в диапазоне [min, max]
 */
export function random(min: number, max: number): number {
  return Math.floor((Math.random() * (max - min + 1)) + min)
}

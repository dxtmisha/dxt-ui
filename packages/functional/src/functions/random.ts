/**
 * Generate a random integer.
 *
 * Генерирует случайное число.
 * @param min the lowest value to return/ наименьшее значение
 * @param max the highest value to return/ наибольшее значение
 */
export function random(min: number, max: number): number {
  return Math.floor((Math.random() * (max - min + 1)) + min)
}

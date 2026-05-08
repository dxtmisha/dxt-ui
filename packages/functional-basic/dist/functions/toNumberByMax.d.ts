/**
 * Converts the data into a number, taking into account the maximum permissible value.
 *
 * Преобразует данные в число с учетом максимально допустимого значения.
 * @param value input value / входное значение
 * @param max maximum achievable value / максимально достижимое значение
 * @param formatting format the number / форматировать число
 * @param language formatting language / язык форматирования
 * @returns formatted number string or number/ форматированная строка числа или число
 */
export declare function toNumberByMax(value: string | number, max?: string | number, formatting?: boolean, language?: string): string | number;

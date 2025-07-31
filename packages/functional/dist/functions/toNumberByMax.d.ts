/**
 * Converts the data into a number, taking into account the maximum permissible value.<br>
 * Преобразует данные в число с учетом максимально допустимого значения.
 * @param value input value /<br>входное значение
 * @param max maximum achievable value /<br>максимально достижимое значение
 * @param formatting format the number /<br>форматировать число
 * @param language formatting language /<br>язык форматирования
 */
export declare function toNumberByMax(value: string | number, max?: number, formatting?: boolean, language?: string): string | number;

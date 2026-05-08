import { NumberOrString } from '../types/basicTypes';
/**
 * Converts a string or number to a finite floating-point number.
 * Handles various separators (spaces, commas, dots) and strips non-numeric characters.
 * Safe for use in SSR (Server-Side Rendering) environments.
 *
 * Преобразует строку или число в конечное число с плавающей точкой.
 * Обрабатывает различные разделители (пробелы, запятые, точки) и удаляет нечисловые символы.
 * Безопасно для использования в SSR (Server-Side Rendering) средах.
 *
 * @param value - The input value to convert / Входное значение для преобразования
 * @returns The parsed number or 0 if conversion fails / Распарсенное число или 0, если конвертация не удалась
 *
 * @example
 * toNumber("1 234,56") // 1234.56
 * toNumber("1,234.56") // 1234.56
 * toNumber("1,234")    // 1.234
 */
export declare function toNumber(value?: NumberOrString): number;

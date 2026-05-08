/**
 * Splits a string by a separator, limited to a certain number of elements.
 * If a limit is specified, the last element will contain the remainder of the string.
 *
 * Разделяет строку по разделителю, ограничивая количество элементов.
 * Если указан лимит, последний элемент будет содержать остаток строки.
 * @param value input value/ входное значение
 * @param separator separator/ разделитель
 * @param limit limit/ лимит
 * @returns split array/ разделенный массив
 */
export declare function strSplit(value: number | string, separator: string, limit?: number): string[];

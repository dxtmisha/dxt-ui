/**
 * Testing isSelected property for the entire list of values.
 *
 * Проверка свойства isSelected для всех значений списка.
 * @param values list of values for comparison/ список значений для сравнения
 * @param selected array or string for comparison/ массив или строка для сравнения
 * @returns true if all selected / true, если все выбраны
 */
export declare function isSelectedByList<T>(values: T | T[], selected: T | T[]): boolean;

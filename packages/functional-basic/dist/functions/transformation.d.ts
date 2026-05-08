/**
 * Преобразует строку в соответствующий тип данных.
 * В зависимости от содержания строки, она может быть преобразована в
 * `undefined`, `null`, `true`, `false`, объект, число или функцию.
 *
 * Transforms a string into the corresponding data type.
 * Based on the string content, it may be transformed into `undefined`,
 * `null`, `true`, `false`, object, number, or function.
 *
 * @param value - Значение, которое необходимо преобразовать
 *
 * The value to be transformed
 * @param isFunction - Флаг, который указывает, необходимо ли проверять функцию
 * в глобальном объекте window
 *
 * A flag that indicates whether to check for a function in the global window object
 * @returns Преобразованное значение
 *
 * The transformed value
 */
export declare function transformation(value: any, isFunction?: boolean): any;

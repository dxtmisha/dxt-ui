/**
 * Conversion of a value to a string.
 *
 * Преобразование значения в строку.
 * @param value values for conversion / значения для преобразования
 * @param isArrayString if true, then arrays will be converted to strings / если true, то массивы будут преобразованы в строки
 * @param trim if true, then the resulting string will be trimmed / если true, то результирующая строка будет обрезана
 * @returns string representation of the passed value / строковое представление переданного значения
 */
export declare function anyToString<V>(value: V, isArrayString?: boolean, trim?: boolean): string;

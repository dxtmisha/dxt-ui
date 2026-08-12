// md5:77addc2ec02129312035634b66db107d
/**
 * Converts a value to a positive finite number (> 0), or returns default value (0) if invalid.
 *
 * Преобразует значение в конечное положительное число (> 0) или возвращает значение по умолчанию (0), если невалидно.
 * @param value input value / входное значение
 * @param defaultValue default fallback value if invalid / значение по умолчанию, если невалидно
 * @returns parsed positive number or defaultValue / распарсенное положительное число или defaultValue
 */
export declare function toNumberPositive(value?: number | string | null, defaultValue?: number): number;

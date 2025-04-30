/**
 * Computes the intersection of arrays using keys for comparison.
 *
 * Вычислить пересечение массивов, сравнивая ключи.
 * @param data the array with master keys to check/ основной проверяемый массив
 * @param comparison arrays to compare keys against/ массивы, с которыми идёт сравнение
 */
export declare function intersectKey<T, KT extends keyof T, C, KC extends keyof C>(data?: T, comparison?: C): Record<KT & KC, T[KT]>;

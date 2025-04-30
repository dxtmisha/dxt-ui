import { ObjectItem, ObjectOrArray } from '../types/basicTypes';
/**
 * Merge one or more arrays recursively.
 *
 * Рекурсивное слияние одного или более массивов.
 * @param array the array in which elements are replaced/ массив, элементы которого будут заменены
 * @param replacement arrays from which elements will be extracted/ массивы, из которых будут браться элементы для замены
 * @param isMerge merge one or more arrays/ сливает один или большее количество массивов
 */
export declare function replaceRecursive<I>(array: ObjectItem<I>, replacement?: ObjectOrArray<I>, isMerge?: boolean): ObjectItem<I>;

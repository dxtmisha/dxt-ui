import { ObjectItem } from '../types/basicTypes';
/**
 * Checks if the values of two objects are different.
 *
 * Проверяет, различаются ли значения двух объектов.
 * @param value current values/ текущие значения
 * @param old old values/ старые значения
 */
export declare function isDifferent<T>(value: ObjectItem<T>, old: ObjectItem<T>): boolean;

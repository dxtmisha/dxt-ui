import { NumberOrString } from '../types/basicTypes';
/**
 * The method parses a string argument and returns a floating point number.
 *
 * Метод принимает строку в качестве аргумента и возвращает десятичное число
 * @param value input value/ входное значение
 */
export declare function toNumber<T extends NumberOrString>(value?: T): (T & number) | number;

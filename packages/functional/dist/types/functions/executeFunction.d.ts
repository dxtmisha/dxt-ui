import { FunctionArgs } from '../types/basicTypes';
/**
 * The function is executed and returns its result. Or returns the input data, if it is not a function.
 *
 * Выполняется функция и возвращает ее результат. Или возвращает входные данные, если это не функция
 * @param callback function or any value/ функция или любое значение
 */
export declare function executeFunction<T>(callback: T | FunctionArgs<any, T>): T;

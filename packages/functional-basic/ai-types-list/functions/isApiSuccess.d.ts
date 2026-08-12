// md5:f1330e8dc889a8f76a10d6879342f568
import { ApiData } from '../types/apiTypes';
/**
 * Checks if the API response is successful.
 *
 * Проверяет, является ли ответ API успешным.
 * @param data API response data/ данные ответа API
 * @returns true if successful / true, если успешно
 */
export declare const isApiSuccess: <T>(data: ApiData<T>) => boolean;

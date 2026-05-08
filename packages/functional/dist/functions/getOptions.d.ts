import { ApiFetch } from '@dxtmisha/functional-basic';
import { ApiOptions } from '../types/apiTypes';
import { RefOrNormal } from '../types/refTypes';
/**
 * Get request options.
 *
 * Возвращает опции запроса.
 * @param options options / параметры
 */
export declare const getOptions: (options?: ApiOptions) => RefOrNormal<ApiFetch>;

import { ComputedRef, Ref } from 'vue';
import { ApiFetch, ApiMethodItem } from '@dxtmisha/functional-basic';
import { RefOrNormal, RefType } from '../../types/refTypes';
type ApiOptions = ApiMethodItem | RefOrNormal<ApiFetch>;
export interface UseApiRef<R> {
    data: Ref<R | undefined>;
    isStarting: ComputedRef<boolean>;
    loading: ComputedRef<boolean>;
    reading: ComputedRef<boolean>;
    reset(): Promise<void>;
}
/**
 * Returns data for working with requests.
 *
 * Возвращает данные для работы с запросами.
 * @param path path to request/ путь к запрос
 * @param options data for the request/ данные для запроса
 * @param reactivity should reactivity be enabled/ включить ли реактивность
 * @param conditions conditions for executing the request/ условия выполнения запроса
 * @param transformation transforms the received request/ преобразовывает полученный запрос
 * @param unmounted delete data from the cache/ удалить ли данные из кеша
 */
export declare function useApiRef<R, T = any>(path?: RefOrNormal<string | undefined>, options?: ApiOptions, reactivity?: boolean, conditions?: RefType<boolean>, transformation?: (data: T) => R, unmounted?: boolean): UseApiRef<R>;
export declare const setApiRefGlobalConditions: (conditions: RefType<any>) => void;
export {};

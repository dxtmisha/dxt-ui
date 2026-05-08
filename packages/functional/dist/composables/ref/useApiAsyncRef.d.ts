import { ApiInstance, ApiData, ApiDataValidation } from '@dxtmisha/functional-basic';
import { UseApiRef } from './useApiRef';
import { RefOrNormal, RefType } from '../../types/refTypes';
import { ApiOptions } from '../../types/apiTypes';
/**
 * Executes a request and immediately initializes it asynchronously.
 *
 * Выполняет запрос и сразу инициализирует его асинхронно.
 * @param path path to request / путь к запросу
 * @param options data for the request / данные для запроса
 * @param reactivity should reactivity be enabled / включить ли reactivity
 * @param conditions conditions for executing the request / условия выполнения запроса
 * @param transformation transforms the received request / преобразовывает полученный запрос
 * @param validateResponseContract function to validate response data contract / функция для проверки контракта данных ответа
 * @param unmounted delete data from the cache / удалить ли данные из кеша
 * @param apiInstance Api instance / Экземпляр Api
 */
export declare function useApiAsyncRef<R, T = R>(path?: RefOrNormal<string | undefined>, options?: ApiOptions, reactivity?: boolean, conditions?: RefType<boolean>, transformation?: (data: T, isResponseContractValid?: ApiDataValidation) => ApiData<R>, validateResponseContract?: (data: T) => ApiDataValidation, unmounted?: boolean, apiInstance?: ApiInstance): UseApiRef<R>;

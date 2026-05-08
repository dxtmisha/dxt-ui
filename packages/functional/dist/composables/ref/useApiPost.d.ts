import { ApiInstance, ApiData, ApiFetch } from '@dxtmisha/functional-basic';
import { ApiOptions } from '../../types/apiTypes';
import { RefOrNormal } from '../../types/refTypes';
import { Ref } from 'vue';
/**
 * Use API post request.
 *
 * Использование API post запроса.
 * @param path Path to the API endpoint / Путь к endpoint API
 * @param action Action to perform after the request / Действие, выполняемое после запроса
 * @param transformation Transformation function / Функция трансформации
 * @param toData Extract 'data' field from response / Извлечь поле 'data' из ответа
 * @param options Additional request options / Дополнительные опции запроса
 * @param apiInstance Api instance / Экземпляр Api
 * @returns Object with loading state and send method / Объект с состоянием загрузки и методом отправки
 */
export declare function useApiPost<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>>(path?: RefOrNormal<string | undefined>, action?: (data: Return | undefined) => Promise<void> | void, transformation?: (data: T) => Return, toData?: boolean, options?: ApiOptions, apiInstance?: ApiInstance): {
    loading: Ref<boolean, boolean>;
    send(request?: Request | undefined): Promise<Return | undefined>;
};

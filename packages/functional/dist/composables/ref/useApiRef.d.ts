import { ComputedRef, Ref } from 'vue';
import { ApiInstance, ApiData, ApiDataValidation } from '@dxtmisha/functional-basic';
import { ApiOptions } from '../../types/apiTypes';
import { RefOrNormal, RefType } from '../../types/refTypes';
/**
 * Use api ref return type.
 *
 * Тип возвращаемого значения для useApiRef.
 */
export interface UseApiRef<R> {
    /** Reactive data (Computed) / Реактивные данные (Computed) */
    data: ComputedRef<ApiData<R> | undefined>;
    /** Item (Ref) / Элемент (Ref) */
    item: Ref<ApiData<R> | undefined>;
    /**
     * Status of response contract validation.
     *
     * Статус валидации контракта ответа.
     */
    isResponseContractValid: ComputedRef<boolean>;
    /**
     * Result of response validation.
     *
     * Результат валидации ответа.
     */
    responseValidationResult: ComputedRef<ApiDataValidation | undefined>;
    /** Length of the list (Computed) / Длина списка (Computed) */
    length: ComputedRef<number>;
    /** Start request flag (true if no data yet) / Флаг начала запроса (true если еще нет данных) */
    starting: ComputedRef<boolean>;
    /** Request load flag / Флаг загрузки запроса */
    loading: Ref<boolean>;
    /** Active reading flag / Флаг активного чтения */
    reading: Ref<boolean>;
    /** Checks if the request is starting (true if no data yet) / Проверяет, начинается ли запрос (true, если данных еще нет) */
    isStarting(): boolean;
    /**
     * Checks if the request is currently loading.
     *
     * Проверяет, загружается ли запрос в данный момент.
     */
    isLoading(): boolean;
    /**
     * Checks if the request is currently reading.
     *
     * Проверяет, читается ли запрос в данный момент.
     */
    isReading(): boolean;
    /**
     * Gets the current item data.
     *
     * Получает текущие данные элемента.
     */
    getItem(): ApiData<R> | undefined;
    /**
     * Manual initialization
     *
     * Ручная инициализация
     */
    init(): void;
    /**
     * SSR initialization
     *
     * Инициализация SSR
     */
    initSsr(): void;
    /**
     * Default reset.
     *
     * Сброс по умолчанию.
     */
    reset(): Promise<void>;
    /**
     * Stop request.
     *
     * Остановка запроса.
     */
    stop(): void;
    /**
     * Abort request.
     *
     * Отмена запроса.
     */
    abort(): void;
}
/**
 * Returns data for working with requests.
 *
 * Возвращает данные для работы с запросами.
 * @param path path to request / путь к запросу
 * @param options data for the request / данные для запроса
 * @param reactivity should reactivity be enabled / включить ли реактивность
 * @param conditions conditions for executing the request / условия выполнения запроса
 * @param transformation transforms the received request / преобразовывает полученный запрос
 * @param validateResponseContract function to validate response data contract / функция для проверки контракта данных ответа
 * @param unmounted delete data from the cache / удалить ли данные из кеша
 * @param apiInstance Api instance / Экземпляр Api
 */
export declare function useApiRef<R, T = R>(path?: RefOrNormal<string | undefined>, options?: ApiOptions, reactivity?: boolean, conditions?: RefType<boolean>, transformation?: (data: T, isResponseContractValid?: ApiDataValidation) => ApiData<R>, validateResponseContract?: (data: T) => ApiDataValidation, unmounted?: boolean, apiInstance?: ApiInstance): UseApiRef<R>;
/**
 * Defines global conditions for the API request.
 *
 * Определяет глобальные условия для API запроса.
 * @param conditions conditions for executing the request/ условия выполнения запроса
 */
export declare const setApiRefGlobalConditions: (conditions: RefType<any>) => void;

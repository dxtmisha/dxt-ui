// md5:910e0d75c99519e8e3f8d16fca6c69cb
import { type ComputedRef, type Ref } from 'vue';
import { type ApiInstance, type ApiData, type ApiDataValidation, type ApiErrorStorageList, ApiErrorItem } from '@dxtmisha/functional-basic';
import type { ApiOptions } from '../../types/apiTypes';
import type { RefOrNormal, RefType } from '../../types/refTypes';
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
    /** Error item (Computed) / Элемент ошибки (Computed) */
    errorItem: ComputedRef<ApiErrorItem | undefined>;
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
 * Main reactive composable for working with API requests in Vue.
 * Automatically handles SSR, reactivity, caching, error storage, data validation, and transformation.
 *
 * Главный реактивный composable для работы с API запросами во Vue.
 * Автоматически обрабатывает SSR, реактивность, кэширование, хранение ошибок, валидацию данных и трансформацию.
 *
 * @example
 * ```typescript
 * import { Schema as S } from '@effect/schema'
 * import { useApiRef } from '@dxtmisha/functional'
 *
 * // Define a schema using @effect/schema
 * const userSchema = S.Struct({ id: S.Number, name: S.String })
 *
 * const { data, loading, errorItem, isResponseContractValid } = useApiRef(
 *   '/users/1',
 *   { method: 'GET' },
 *   true, // reactivity
 *   undefined, // conditions
 *   (data) => ({ ...data, isTransformed: true }), // transformation
 *   (data) => { // validateResponseContract
 *     try {
 *       return { status: 'success', data: S.decodeUnknownSync(userSchema)(data) }
 *     } catch (e) {
 *       return { status: 'error', errors: e }
 *     }
 *   },
 *   [ // errorContract (ApiErrorStorageList)
 *     {
 *       status: 404,
 *       message: 'User not found'
 *     }
 *   ]
 * )
 * ```
 *
 * @param path path to request (can be a Ref or Getter) / путь к запросу (может быть Ref или Getter)
 * @param options data for the request (headers, method, etc.) / данные для запроса (заголовки, метод и т.д.)
 * @param reactivity should reactivity be enabled (automatically re-fetch on deps change) /
 * включить ли реактивность (автоматически повторять запрос при изменении зависимостей)
 * @param conditions conditions for executing the request (request will wait until true) /
 * условия выполнения запроса (запрос будет ждать пока не станет true)
 * @param transformation transforms the received response data / преобразовывает полученные данные ответа
 * @param validateResponseContract function to validate response data contract. Used to ensure that the API
 * response matches the expected structure. Highly recommended to use with `@effect/schema`.
 * It should return `ApiDataValidation` containing a `status` ('success' or 'error')
 * and the parsed data or errors. /
 * Функция для проверки контракта данных ответа. Используется для гарантии того, что ответ API соответствует
 * ожидаемой структуре. Настоятельно рекомендуется использовать с `@effect/schema`. Должна возвращать объект
 * `ApiDataValidation`, содержащий `status` ('success' или 'error') и распарсенные данные или ошибки.
 * @param errorContract array of expected error contracts for the request (`ApiErrorStorageList`).
 * Highly recommended to add if there is information about possible request errors. Allows you to predefine
 * possible errors (by code, status, or custom validation). If an error occurs matching one of these contracts,
 * it will be automatically processed and made available via the `errorItem` computed property. /
 * Массив контрактов ожидаемых ошибок для запроса (`ApiErrorStorageList`). Желательно добавлять, если есть
 * информация о возможных ошибках запроса. Позволяет заранее описать возможные ошибки (по коду, статусу или
 * кастомной валидации). Если возникает ошибка, совпадающая с одним из контрактов, она автоматически
 * обрабатывается и становится доступной через вычисляемое свойство `errorItem` для удобного отображения в UI.
 * @param unmounted whether to stop the request and clear data from cache when component is unmounted /
 * нужно ли останавливать запрос и удалять данные из кеша при размонтировании компонента
 * @param apiInstance Api instance (defaults to global Api instance) /
 * Экземпляр Api (по умолчанию используется глобальный экземпляр Api)
 */
export declare function useApiRef<R, T = R>(path?: RefOrNormal<string | undefined>, options?: ApiOptions, reactivity?: boolean, conditions?: RefType<boolean>, transformation?: (data: T, isResponseContractValid?: ApiDataValidation) => ApiData<R>, validateResponseContract?: (data: T) => ApiDataValidation, errorContract?: ApiErrorStorageList, unmounted?: boolean, apiInstance?: ApiInstance): UseApiRef<R>;
/**
 * Registers an additional shared watch source once, before request initialization.
 * Changes to the source trigger reloads even with reactivity disabled.
 * Its value does not control whether a request is allowed; local conditions and path do.
 *
 * Однократно регистрирует дополнительный общий источник наблюдения до инициализации запросов.
 * Изменения источника запускают перезагрузку даже при отключённой реактивности.
 * Его значение не разрешает и не запрещает запрос; за это отвечают локальное условие и путь.
 * @param source reactive source whose changes trigger request reloads / реактивный источник, изменения которого перезапускают запросы
 * @returns nothing / ничего не возвращает
 */
export declare const setApiRefGlobalWatchSource: (source: RefType<unknown>) => void;
/**
 * Compatibility name for registering the shared request reload source.
 *
 * Совместимое имя для регистрации общего источника перезагрузки запросов.
 * @deprecated Use setApiRefGlobalWatchSource / Используйте setApiRefGlobalWatchSource
 */
export declare const setApiRefGlobalConditions: (source: RefType<unknown>) => void;

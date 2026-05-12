import { FormattersOptionsList, ApiData, ApiInstance, ArrayToItem, SearchColumns, SearchFormatList, FormattersListColumns, ApiFetch, ApiDataValidation } from '@dxtmisha/functional-basic';
import { ApiManagementGet, ApiManagementRequest, ApiManagementSearch, ApiManagementValue } from '../../types/apiTypes';
import { ComputedRef, Ref } from 'vue';
/**
 * A powerful composable for comprehensive API request orchestration.
 * It centrally manages data loading (GET), list formatting, client-side searching,
 * and mutations (POST, PUT, DELETE) through a single reactive interface.
 *
 * Мощный композабл для комплексной оркестрации API-запросов.
 * Он централизованно управляет загрузкой данных (GET), форматированием списков,
 * клиентским поиском и мутациями (POST, PUT, DELETE) через единый реактивный интерфейс.
 *
 * @template Return type of data returned by the API / тип данных, возвращаемых API
 * @template FormattersOptions optional formatting rules / опциональные правила форматирования
 * @template Post data type for POST creation request / тип данных для POST-запроса создания
 * @template Put data type for PUT update request / тип данных для PUT-запроса обновления
 * @template Delete data type for DELETE removal request / тип данных для DELETE-запроса удаления
 * @template Type original data type (before transformation) / тип исходных данных (до трансформации)
 * @template Item type of a single item in the data list / тип одного элемента из списка данных
 * @template ItemFormatters item type after formatters are applied / тип элемента после применения форматировщиков
 * @template Columns search columns derived from formatting / колонки, по которым производится поиск
 *
 * @param propsGet main GET request settings (path, reactivity, skeleton, etc.) / настройки главного GET-запроса
 * @param formattersOptions optional reactive formatting rules / правила для реактивного форматирования данных
 * @param searchOptions optional client-side search settings / настройки для клиентского поиска по списку
 * @param postRequest optional POST mutation settings / настройки для POST-запроса создания
 * @param putRequest optional PUT mutation settings / настройки для PUT-запроса обновления
 * @param deleteRequest optional DELETE mutation settings / настройки для DELETE-запроса удаления
 * @param action common callback executed after any successful mutation / общий коллбэк после любой успешной мутации
 * @param apiInstance API instance for requests (defaults to Api.getItem()) / экземпляр API для выполнения запроса
 *
 * @returns reactive API management interface / реактивный интерфейс управления API
 *
 * @note This hook is recommended to be used in tandem with `executeUse` for centralized state management.
 * By wrapping `useApiManagementRef` in `executeUseProvide` or `executeUseGlobal`, you can ensure
 * a single source of truth across the component tree or the entire application.
 *
 * Рекомендуется использовать этот хук в тандеме с `executeUse` для централизованного управления состоянием.
 * Обернув `useApiManagementRef` в `executeUseProvide` или `executeUseGlobal`, вы обеспечите
 * единый источник истины в дереве компонентов или во всем приложении.
 *
 * @remarks
 * Data formatting guidelines for `formattersOptions`:
 * - **Recommended for formatting:** Numbers that represent values (prices, counts), dates, currency, units, and statuses.
 * - **Not recommended for formatting:** Technical identifiers such as ID, UUID, account numbers (if used for logic), types, or internal codes.
 *
 * Рекомендации по форматированию данных для `formattersOptions`:
 * - **Рекомендуется для форматирования:** Числа, представляющие значения (цены, количества), даты, валюта, единицы измерения и статусы.
 * - **Не рекомендуется для форматирования:** Технические идентификаторы, такие как ID, UUID, номера счетов (если они используются для логики), типы или внутренние коды.
 *
 * @example
 * // 1. Comprehensive API orchestration/ Комплексная оркестрация API
 * const products = useApiManagementRef(
 *   {
 *     path: '/api/v1/products',
 *     skeleton: () => Array(5).fill({ id: 0, name: 'Loading...', price: 0 })
 *   },
 *   {
 *     // Formatters for display/ Форматтеры для отображения
 *     price: (v) => `${v} USD`,
 *     created_at: (v) => new Date(v).toLocaleDateString()
 *   },
 *   {
 *     // Client-side search setup/ Настройка поиска на стороне клиента
 *     columns: ['name', 'category']
 *   },
 *   { path: '/api/v1/products' }, // POST (create)
 *   { path: (data) => `/api/v1/products/${data.id}` }, // PUT (update)
 *   { path: (data) => `/api/v1/products/${data.id}` }  // DELETE (remove)
 * );
 *
 * // Accessing data/ Доступ к данным:
 * // products.list.value -> processed, formatted, and searched list
 * // products.sendPost({ name: 'New Product', price: 100 }) -> execute mutation
 */
export declare function useApiManagementRef<Return extends ApiManagementValue, FormattersOptions extends FormattersOptionsList, Post extends Record<string, any>, Put extends Record<string, any>, Delete extends Record<string, any>, Type extends ApiManagementValue = Return, Item extends ArrayToItem<Return> = ArrayToItem<Return>, ItemFormatters extends FormattersListColumns<Item, FormattersOptions>[number] = FormattersListColumns<Item, FormattersOptions>[number], Columns extends SearchColumns<ItemFormatters> = []>(propsGet: ApiManagementGet<Return, Type>, formattersOptions?: FormattersOptions, searchOptions?: ApiManagementSearch<Item, Columns>, postRequest?: ApiManagementRequest<Post>, putRequest?: ApiManagementRequest<Put>, deleteRequest?: ApiManagementRequest<Delete>, action?: () => Promise<void> | void, apiInstance?: ApiInstance): {
    /** Whether data passed the `typeData` check / `true`, если данные прошли проверку `typeData` */
    isValid: ComputedRef<boolean>;
    /** Status of response contract validation / Статус валидации контракта ответа */
    isResponseContractValid: ComputedRef<boolean>;
    /** Result of response validation / Результат валидации ответа */
    responseValidationResult: ComputedRef< ApiDataValidation | undefined>;
    /** Processed data array (supports Skeleton, formatters, and search) / Обработанный массив данных (поддерживает Skeleton, форматтеры и поиск) */
    list: ComputedRef<SearchFormatList<ItemFormatters, Columns>>;
    /** Raw reactive data from `useApiRef` / «Сырые» реактивные данные из `useApiRef` */
    readonly data: ComputedRef<ApiData<Return> | undefined>;
    /** Current number of items in `list` (changes with search) / Текущее количество элементов в `list` (меняется при поиске) */
    readonly length: ComputedRef<number>;
    /** Total number of items in raw `data` / Общее количество элементов в исходном `data` */
    lengthData: ComputedRef<number>;
    /** Initial loading flag (true when no data yet) / Флаг первичной загрузки (когда данных еще нет) */
    starting: ComputedRef<boolean>;
    /** Active read process flag / Флаг активного процесса чтения данных */
    reading: Ref<boolean, boolean>;
    /** Loading state for the main GET request / Общее состояние загрузки главного GET-запроса */
    loading: Ref<boolean, boolean>;
    /** Loading state during search processing / Состояние загрузки в процессе поиска */
    loadingSearch: Ref<boolean, boolean> | undefined;
    /** Loading state for POST mutation / Состояние загрузки для POST мутации */
    loadingPost: Ref<boolean, boolean> | undefined;
    /** Loading state for PUT mutation / Состояние загрузки для PUT мутации */
    loadingPut: Ref<boolean, boolean> | undefined;
    /** Loading state for DELETE mutation / Состояние загрузки для DELETE мутации */
    loadingDelete: Ref<boolean, boolean> | undefined;
    /** Whether search is currently active / Активен ли поиск (есть ли поисковый запрос) */
    isSearch: ComputedRef<boolean> | undefined;
    /** Reactive search string (Proxy to `searchOptions.value`) / Реактивная строка поиска (Proxy к переданному `searchOptions.value`) */
    search: Ref<string, string> | undefined;
    /**
     * Manual initialization
     *
     * Ручная инициализация
     */
    init: () => void;
    /**
     * SSR initialization
     *
     * Инициализация SSR
     */
    initSsr: () => void;
    /**
     * Default reset
     *
     * Сброс по умолчанию
     */
    /**
     * Force reset the GET request and clear state.
     *
     * Принудительный перезапуск GET-запроса и очистка состояния.
     */
    reset: () => Promise<void>;
    /**
     * Abort the current network request.
     *
     * Прекращение текущего сетевого запроса.
     */
    abort: () => void;
    /**
     * Execute POST mutation request.
     *
     * Выполнить POST запрос мутации.
     * @param request request data / данные запроса
     */
    sendPost: (request?: ApiFetch["request"]) => Promise<ApiData<Post> | undefined>;
    /**
     * Execute PUT mutation request.
     *
     * Выполнить PUT запрос мутации.
     * @param request request data / данные запроса
     */
    sendPut: (request?: ApiFetch["request"]) => Promise<ApiData<Put> | undefined>;
    /**
     * Execute DELETE mutation request.
     *
     * Выполнить DELETE запрос мутации.
     * @param request request data / данные запроса
     */
    sendDelete: (request?: ApiFetch["request"]) => Promise<ApiData<Delete> | undefined>;
};

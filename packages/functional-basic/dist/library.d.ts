/**
 * Adds a tag to highlight the match in the string.
 *
 * Добавляет тег для выделения совпадения в строке.
 * @param value initial string / исходная строка
 * @param search search string / строка поиска
 * @param className highlighting class / класс выделения
 */
export declare function addTagHighlightMatch(value: string, search?: string, className?: string): string;

/**
 * Conversion of a value to a string.
 *
 * Преобразование значения в строку.
 * @param value values for conversion/ значения для преобразования
 * @param isArrayString if true, then arrays will be converted to strings/
 * если true, то массивы будут преобразованы в строки
 */
export declare function anyToString<V>(value: V, isArrayString?: boolean): string;

/**
 * Class for working with requests.
 *
 * Класс для работы с запросами.
 */
export declare class Api {
    protected static item: ApiInstance;
    /**
     * Is the server local.
     *
     * Является ли сервер локальный.
     */
    static isLocalhost(): boolean;
    /**
     * Returns the instance of the class.
     *
     * Возвращает инстанс класса.
     */
    static getItem(): ApiInstance;
    /**
     * Returns the status of the last request.
     *
     * Возвращает статус последнего запроса.
     */
    static getStatus(): ApiStatus;
    /**
     * Getting the response handler.
     *
     * Получение обработчика ответа.
     */
    static getResponse(): ApiResponse;
    /**
     * Getting the full path to the request script.
     *
     * Получение полного пути к скрипту запроса.
     * @param path path to the script/ путь к скрипту
     * @param api adding a path to the site’s API/ добавление пути к API сайта
     */
    static getUrl(path: string, api?: boolean): string;
    /**
     * Getting data for the body.
     *
     * Получение данных для тела.
     * @param request this request/ данный запрос
     * @param method method for request/ метод запрос
     */
    static getBody(request?: ApiFetch['request'], method?: ApiMethodItem): string | FormData | undefined;
    /**
     * Getting data for the body of the get method.
     *
     * Получение данных для тела метода get.
     * @param request this request/ данный запрос
     * @param path path to request/ путь к запрос
     * @param method method for request/ метод запрос
     */
    static getBodyForGet(request: ApiFetch['request'], path?: string, method?: ApiMethodItem): string;
    /**
     * Modifies the default header data.
     *
     * Изменяет данные заголовка по умолчанию.
     */
    static setHeaders(headers: Record<string, string>): Api;
    /**
     * Modifies the default request data.
     *
     * Изменяет данные запроса по умолчанию.
     */
    static setRequestDefault(request: Record<string, any>): Api;
    /**
     * Change the base path to the script.
     *
     * Изменить базовый путь к скрипту.
     * @param url path to the script/ путь к скрипту
     */
    static setUrl(url: string): Api;
    /**
     * The function is modified for a call before the request.
     *
     * Изменить функцию перед запросом.
     * @param callback function for call/ функция для вызова
     */
    static setPreparation(callback: (apiFetch: ApiFetch) => Promise<void>): Api;
    /**
     * Modify the function after the request.
     *
     * Изменить функцию после запроса.
     * @param callback function for call/ функция для вызова
     */
    static setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): Api;
    /**
     * To execute a request.
     *
     * Выполнить запрос.
     * @param pathRequest query string or list of parameters/ строка запроса или список параметров
     */
    static request<T>(pathRequest: string | ApiFetch): Promise<T>;
    /**
     * Sends a get method request.
     *
     * Отправляет запрос метода get.
     * @param request list of parameters/ список параметров
     */
    static get<T>(request: ApiFetch): Promise<T>;
    /**
     * Sends a post method request.
     *
     * Отправляет запрос метода post.
     * @param request list of parameters/ список параметров
     */
    static post<T>(request: ApiFetch): Promise<T>;
    /**
     * Sends a put method request.
     *
     * Отправляет запрос метода put.
     * @param request list of parameters/ список параметров
     */
    static put<T>(request: ApiFetch): Promise<T>;
    /**
     * Sends a delete method request.
     *
     * Отправляет запрос метода delete.
     * @param request list of parameters/ список параметров
     */
    static delete<T>(request: ApiFetch): Promise<T>;
}

/**
 * Shape of API response data wrapper/ Структура обёртки данных ответа API
 */
export declare type ApiData<T = any> = T extends any[] ? T : ApiDataItem<T>;

/**
 * Type of API response data item/ Тип элемента данных ответа API
 */
export declare type ApiDataItem<T = any> = T & {
    /** Primary payload (optional)/ Основная полезная нагрузка (опционально) */
    data?: T;
    /** Success flag/ Флаг успешности */
    success?: boolean;
    /** Status/ Статус */
    status?: ApiStatusType;
    /** Message/ Сообщение */
    message?: string;
    /** Status object/ Объект статуса */
    statusObject?: ApiStatusItem;
};

/**
 * Class for working with default API request data.
 *
 * Класс для работы с данными запроса API по умолчанию.
 */
export declare class ApiDefault {
    /** Default request data/ Данные запроса по умолчанию */
    protected value?: ApiDefaultValue;
    /**
     * Checks if default request data exists.
     *
     * Проверяет, существуют ли данные запроса по умолчанию.
     */
    is(): boolean;
    /**
     * Gets the default request data.
     *
     * Получает данные запроса по умолчанию.
     */
    get(): ApiDefaultValue;
    /**
     * Adds default data to the request.
     *
     * Добавляет данные по умолчанию к запросу.
     * @param request request data/ данные запроса
     */
    request(request: ApiFetch['request']): ApiFetch['request'];
    /**
     * Modifies the default request data.
     *
     * Изменяет данные запроса по умолчанию.
     */
    set(request: ApiDefaultValue): void;
    /**
     * Adds default data to FormData request.
     *
     * Добавляет данные по умолчанию к запросу FormData.
     * @param request FormData request/ запрос FormData
     * @param value default values/ значения по умолчанию
     */
    protected addByFormData(request: FormData, value: ApiDefaultValue): void;
}

/**
 * Default API request data type/ Тип данных запроса API по умолчанию
 */
export declare type ApiDefaultValue = Record<string, any>;

/**
 * Options for making API requests/ Опции для выполнения API-запросов
 */
export declare type ApiFetch = {
    /** Use base API URL/ Использовать базовый URL API */
    api?: boolean;
    /** Endpoint path relative to base URL/ Путь endpoint относительно базового URL */
    path?: string;
    /** Complete URL (overrides api + path)/ Полный URL (переопределяет api + path) */
    pathFull?: string;
    /** HTTP method/ HTTP метод */
    method?: ApiMethod;
    /** Request body data or query parameters/ Данные тела запроса или параметры запроса */
    request?: FormData | Record<string, any> | string;
    /** Include authentication headers/ Включить заголовки аутентификации */
    auth?: boolean;
    /** Custom headers (null = no headers)/ Пользовательские заголовки (null = без заголовков) */
    headers?: Record<string, string> | null;
    /** Content-Type header value/ Значение заголовка Content-Type */
    type?: string;
    /** Extract 'data' field from response/ Извлечь поле 'data' из ответа */
    toData?: boolean;
    /** Use global response cache/ Использовать глобальный кеш ответов */
    global?: boolean;
    /** Enable development logging/ Включить логирование разработки */
    devMode?: boolean;
    /** Suppress error logging/ Подавить логирование ошибок */
    hideError?: boolean;
    /** Suppress loading/ Подавить загрузку */
    hideLoading?: boolean;
    /** Custom response processor/ Пользовательский процессор ответа */
    queryReturn?: (query: Response) => Promise<any>;
    /** Run global preparation hooks/ Запускать глобальные хуки подготовки */
    globalPreparation?: boolean;
    /** Run global end hooks/ Запускать глобальные хуки завершения */
    globalEnd?: boolean;
    /** Additional fetch() options/ Дополнительные опции fetch() */
    init?: RequestInit;
    /** AbortController for canceling the request/ AbortController для отмены запроса */
    controller?: AbortController;
};

/**
 * Class for managing HTTP request headers.
 *
 * Класс для управления заголовками HTTP-запросов.
 */
export declare class ApiHeaders {
    /** Default headers/ Заголовки по умолчанию */
    protected headers: Record<string, string>;
    /**
     * Getting the header for the request.
     *
     * Получение заголовка для запроса.
     * @param value list of headers/ список заголовков
     * @param type type of request/ тип запроса
     */
    get(value?: Record<string, string> | null, type?: string): Record<string, string> | undefined;
    /**
     * Modifies the default header data.
     *
     * Изменяет данные заголовка по умолчанию.
     */
    set(headers: Record<string, string>): this;
}

/**
 * Class for working with requests.
 *
 * Класс для работы с запросами.
 */
export declare class ApiInstance {
    protected url: string;
    /** Headers / Заголовки */
    protected headers: ApiHeaders;
    /** Default request parameters / Параметры запроса по умолчанию */
    protected requestDefault: ApiDefault;
    /** Status of the last request / Статус последнего запроса */
    protected status: ApiStatus;
    /** Response handler / Обработчик ответа */
    protected response: ApiResponse;
    /** Request modification handler / Обработчик модификации запроса */
    protected preparation: ApiPreparation;
    /** Loading handler / Обработчик загрузки */
    protected loading: LoadingInstance;
    /**
     * Constructor
     * @param url base path to the script/ базовый путь к скрипту
     * @param options options for the API instance/ опции для экземпляра API
     */
    constructor(url?: string, options?: ApiInstanceOptions);
    /**
     * Is the server local.
     *
     * Является ли сервер локальный.
     */
    isLocalhost(): boolean;
    /**
     * Returns the status of the last request.
     *
     * Возвращает статус последнего запроса.
     */
    getStatus(): ApiStatus;
    /**
     * Getting the response handler.
     *
     * Получение обработчика ответа.
     */
    getResponse(): ApiResponse;
    /**
     * Getting the full path to the request script.
     *
     * Получение полного пути к скрипту запроса.
     * @param path path to the script/ путь к скрипту
     * @param api adding a path to the site’s API/ добавление пути к API сайта
     */
    getUrl(path: string, api?: boolean): string;
    /**
     * Getting data for the body.
     *
     * Получение данных для тела.
     * @param request this request/ данный запрос
     * @param method method for request/ метод запрос
     */
    getBody(request?: ApiFetch['request'], method?: ApiMethodItem): string | FormData | undefined;
    /**
     * Getting data for the body of the get method.
     *
     * Получение данных для тела метода get.
     * @param request this request/ данный запрос
     * @param path path to request/ путь к запрос
     * @param method method for request/ метод запрос
     */
    getBodyForGet(request: ApiFetch['request'], path?: string, method?: ApiMethodItem): string;
    /**
     * Modifies the default header data.
     *
     * Изменяет данные заголовка по умолчанию.
     */
    setHeaders(headers: Record<string, string>): this;
    /**
     * Modifies the default request data.
     *
     * Изменяет данные запроса по умолчанию.
     */
    setRequestDefault(request: Record<string, any>): this;
    /**
     * Change the base path to the script.
     *
     * Изменить базовый путь к скрипту.
     * @param url path to the script/ путь к скрипту
     */
    setUrl(url: string): this;
    /**
     * The function is modified for a call before the request.
     *
     * Изменить функцию перед запросом.
     * @param callback function for call/ функция для вызова
     */
    setPreparation(callback: (apiFetch: ApiFetch) => Promise<void>): this;
    /**
     * Modify the function after the request.
     *
     * Изменить функцию после запроса.
     * @param callback function for call/ функция для вызова
     */
    setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): this;
    /**
     * To execute a request.
     *
     * Выполнить запрос.
     * @param pathRequest query string or list of parameters/ строка запроса или список параметров
     */
    request<T>(pathRequest: string | ApiFetch): Promise<T>;
    /**
     * Sends a get method request.
     *
     * Отправляет запрос метода get.
     * @param request list of parameters/ список параметров
     */
    get<T>(request: ApiFetch): Promise<T>;
    /**
     * Sends a post method request.
     *
     * Отправляет запрос метода post.
     * @param request list of parameters/ список параметров
     */
    post<T>(request: ApiFetch): Promise<T>;
    /**
     * Sends a put method request.
     *
     * Отправляет запрос метода put.
     * @param request list of parameters/ список параметров
     */
    put<T>(request: ApiFetch): Promise<T>;
    /**
     * Sends a delete method request.
     *
     * Отправляет запрос метода delete.
     * @param request list of parameters/ список параметров
     */
    delete<T>(request: ApiFetch): Promise<T>;
    /**
     * To execute a request.
     *
     * Выполнить запрос.
     * @param apiFetch property of the request/ свойство запроса
     */
    protected fetch<T>(apiFetch: ApiFetch): Promise<T>;
    /**
     * Reading data from the response.
     *
     * Чтение данных из ответа.
     * @param query response from the server/ ответ от сервера
     * @param queryReturn custom function for reading data/ кастомная функция для чтения данных
     * @param end finalization data/ данные финализации
     */
    protected readData<T>(query: Response, queryReturn: ApiFetch['queryReturn'], end: ApiPreparationEnd): Promise<ApiData<T>>;
    /**
     * Executing the request.
     *
     * Выполнение запроса.
     * @param apiFetch property of the request/ свойство запроса
     */
    protected makeQuery(apiFetch: ApiFetch): Promise<Response>;
    /**
     * Transforms data if needed.
     *
     * Преобразует данные, если нужно.
     * @param data data for transformation/ данные для преобразования
     * @param toData is it necessary to process the data/ нужно ли обрабатывать данные
     */
    protected makeData<T>(data: ApiData<T>, toData: boolean): ApiData<T>;
    /**
     * Appends the status object to the response data if possible.
     *
     * Добавляет объект статуса к данным ответа, если это возможно.
     * @param data response data/ данные ответа
     * @param status status object/ объект статуса
     */
    protected makeStatus<T>(data: ApiData<T>, status: ApiStatus): ApiData<T>;
}

/** Options for the API instance/ Опции для экземпляра API */
export declare type ApiInstanceOptions = {
    headersClass?: typeof ApiHeaders;
    requestDefaultClass?: typeof ApiDefault;
    statusClass?: typeof ApiStatus;
    responseClass?: typeof ApiResponse;
    preparationClass?: typeof ApiPreparation;
    loadingClass?: LoadingInstance;
};

/**
 * Supported HTTP methods type/ Тип HTTP-методов
 * (derived from ApiMethodItem enum)/ (получен из перечисления ApiMethodItem)
 */
export declare type ApiMethod = string & ApiMethodItem;

/**
 * Supported HTTP methods for API requests.
 * Поддерживаемые HTTP-методы для API-запросов.
 */
export declare enum ApiMethodItem {
    /**
     * HTTP GET — used to retrieve resources (no request body).
     * HTTP GET — используется для получения ресурсов (без тела запроса).
     */
    get = "GET",
    /**
     * HTTP POST — used to create resources or send data.
     * HTTP POST — используется для создания ресурсов или отправки данных.
     */
    post = "POST",
    /**
     * HTTP PUT — used to update/replace resources.
     * HTTP PUT — используется для обновления/замены ресурсов.
     */
    put = "PUT",
    /**
     * HTTP DELETE — used to delete resources.
     * HTTP DELETE — используется для удаления ресурсов.
     */
    delete = "DELETE"
}

/**
 * Class for preparing requests.
 *
 * Класс для подготовки запросов.
 */
export declare class ApiPreparation {
    /** Function for call before the request/ Функция для вызова перед запросом */
    protected callback?: (apiFetch: ApiFetch) => Promise<void>;
    /** Function for call after the request/ Функция для вызова после запроса */
    protected callbackEnd?: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>;
    /** Is the preparation in progress/ Идет ли подготовка */
    protected loading: boolean;
    /**
     * Preparation before executing the request.
     *
     * Подготовка перед выполнением запроса.
     * @param active is preparation active/ активна ли подготовка
     * @param apiFetch request options/ опции запроса
     */
    make(active: boolean, apiFetch: ApiFetch): Promise<void>;
    /**
     * Analysis of the request after execution.
     *
     * Анализ запроса после выполнения.
     * @param active is preparation active/ активна ли подготовка
     * @param query data received in the request/ данные, полученные в запросе
     * @param apiFetch request options/ опции запроса
     */
    makeEnd(active: boolean, query: Response, apiFetch: ApiFetch): Promise<ApiPreparationEnd>;
    /**
     * The function is modified for a call before the request.
     *
     * Изменить функцию перед запросом.
     * @param callback function for call/ функция для вызова
     */
    set(callback: (apiFetch: ApiFetch) => Promise<void>): this;
    /**
     * Modify the function after the request.
     *
     * Изменить функцию после запроса.
     * @param callback function for call/ функция для вызова
     */
    setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): this;
    /**
     * To execute preparation.
     *
     * Выполнить подготовку.
     * @param apiFetch request options/ опции запроса
     */
    protected go(apiFetch: ApiFetch): Promise<void>;
    /**
     * Analysis of the request after execution.
     *
     * Анализ запроса после выполнения.
     * @param query data received in the request/ данные, полученные в запросе
     * @param apiFetch request options/ опции запроса
     */
    protected end(query: Response, apiFetch: ApiFetch): Promise<ApiPreparationEnd>;
}

/**
 * Result of global preparation/end hooks/ Результат глобальных хуков
 */
export declare type ApiPreparationEnd = {
    /** Reset flag to indicate state reset/ Флаг сброса состояния */
    reset?: boolean;
    /** Arbitrary data returned by hook/ Произвольные данные, возвращаемые хуком */
    data?: any;
};

/**
 * Class for working with API responses.
 *
 * Класс для работы с ответами API.
 */
export declare class ApiResponse {
    protected readonly requestDefault: ApiDefault;
    /** List of first-time API requests/ Список первичных API запросов */
    protected readonly first: ApiResponseItem[];
    /** Cached responses/ Кешированные ответы */
    protected readonly response: ApiResponseItem[];
    /** Loading instance/ Экземпляр загрузки */
    protected loading?: any;
    /** Developer mode flag/ Флаг режима разработчика */
    protected devMode: boolean;
    /**
     * Constructor
     * @param requestDefault default request processor/ процессор запросов по умолчанию
     */
    constructor(requestDefault: ApiDefault);
    /**
     * Checks if there is a global cached request, if there is, returns it.
     *
     * Проверяет, есть ли глобальный кешированный запрос, если есть, возвращает его.
     * @param path link to the request/ ссылка на запрос
     * @param method request method/ метод запроса
     * @param request data for the request/ данные для запроса
     * @param devMode is it developer mode/ является ли режим разработчика
     */
    get(path: string | undefined, method: ApiMethod, request?: ApiFetch['request'], devMode?: boolean): ApiResponseItem | undefined;
    /**
     * Returns a list of data about the emulator.
     *
     * Возвращает список данных об эмуляторе.
     */
    getList(): (ApiResponseItem & Record<string, any>)[];
    /**
     * Adding cached requests.
     *
     * Добавление кешированных запросов.
     * @param response data for caching/ данные для кеширования
     */
    add(response: ApiResponseItem | ApiResponseItem[]): this;
    /**
     * Sets developer mode.
     *
     * Устанавливает режим разработчика.
     * @param devMode is it developer mode/ является ли режим разработчика
     */
    setDevMode(devMode: boolean): this;
    /**
     * Выполнение эмулятора, если доступно
     * @param apiFetch property of the request/ свойство запроса
     */
    emulator<T>(apiFetch: ApiFetch): Promise<T | undefined>;
    /**
     * Checks if the cached item is disabled.
     *
     * Проверяет, отключен ли кешированный элемент.
     * @param item cached item/ кешированный элемент
     */
    protected isDisable(item: ApiResponseItem): boolean;
    /**
     * Checks if the path matches the cached one.
     *
     * Проверяет, совпадает ли путь с кешированным.
     * @param item cached item/ кешированный элемент
     * @param path request path/ путь запроса
     */
    protected isPath(item: ApiResponseItem, path: string): boolean;
    /**
     * Checks if it is developer mode.
     *
     * Проверяет, является ли режимом разработчика.
     * @param devMode is it developer mode/ является ли режим разработчика
     */
    protected isDevMode(devMode?: boolean): boolean;
    /**
     * Checks if this is the first request.
     *
     * Проверяет, является ли это первым запросом.
     * @param item cached item/ кешированный элемент
     * @param devMode is it developer mode/ является ли режим разработчика
     */
    protected isFirst(item: ApiResponseItem, devMode?: boolean): boolean;
    /**
     * Checks if the request matches the cached one.
     *
     * Проверяет, совпадает ли запрос с кешированным.
     * @param item cached item/ кешированный элемент
     * @param request request data/ данные запроса
     */
    protected isResponse(item: ApiResponseItem, request?: ApiFetch['request']): boolean;
    /**
     * Emulates an execution request.
     *
     * Эмулирует запрос выполнения.
     * @param response Data for pre-request/ Данные для пред-запроса
     * @param request data for the request/ данные для запроса
     */
    protected fetch<T>(response: ApiResponseItem, request?: ApiFetch['request']): Promise<T>;
    /**
     * Enable loading for request emulation.
     *
     * Включить загрузку для эмуляции запроса.
     */
    protected startResponseLoading(): void;
    /**
     * Disable loading for request emulation.
     *
     * Отключить загрузку для эмуляции запроса.
     */
    protected stopResponseLoading(): void;
}

/**
 * Mock API response descriptor/ Описание мок-ответа API
 */
export declare type ApiResponseItem = {
    /** Path string or RegExp to match request URL/ Путь или RegExp для сопоставления URL */
    path: string | RegExp;
    /** Expected HTTP method/ Ожидаемый HTTP метод */
    method: ApiMethod;
    /** Expected request payload or special marker '*any'/ Ожидаемая нагрузка запроса или маркер '*any' */
    request?: ApiFetch['request'] | '*any';
    /** Static response or factory function/ Статический ответ или функция, возвращающая ответ */
    response: any | ((request?: ApiFetch['request']) => any);
    /** Disable this mock/ Отключить этот мок */
    disable?: any;
    /** Mark as global mock/ Мок для глобального использования */
    isForGlobal?: boolean;
    /** Simulate network lag/ Имитировать задержку */
    lag?: any;
};

/**
 * API status class
 *
 * Класс статуса API
 */
export declare class ApiStatus {
    protected value?: ApiStatusItem;
    /**
     * Last response data
     *
     * Данные последнего ответа
     */
    get(): ApiStatusItem;
    /**
     * Returns the execution status code.
     *
     * Возвращает код статуса выполнения.
     */
    getStatus(): number | undefined;
    /**
     * Returns the execution status text.
     *
     * Возвращает текст статуса выполнения.
     */
    getStatusText(): string | undefined;
    /**
     * Returns the last status type.
     *
     * Возвращает последний тип статуса.
     */
    getStatusType(): ApiStatusType | undefined;
    /**
     * Returns the script execution error.
     *
     * Возвращает ошибку выполнения скрипта.
     */
    getError(): string | undefined;
    /**
     * Returns the data of the last request.
     *
     * Возвращает данные последнего запроса.
     */
    getResponse<T>(): T | undefined;
    /**
     * Returns messages from the last request.
     *
     * Возвращает сообщения от последнего запроса.
     */
    getMessage(): string;
    /**
     * Sets the status item data.
     *
     * Устанавливает данные элемента статуса.
     * @param data status item data/ данные элемента статуса
     */
    set(data: ApiStatusItem): this;
    /**
     * Sets the status code and optional status text.
     *
     * Устанавливает код статуса и необязательный текст статуса.
     * @param status status code/ код статуса
     * @param statusText optional status text/ необязательный текст статуса
     */
    setStatus(status?: number, statusText?: string): this;
    /**
     * Sets the error message.
     *
     * Устанавливает сообщение об ошибке.
     * @param error error message/ сообщение об ошибке
     */
    setError(error?: string): this;
    /**
     * Sets the data of the last response.
     *
     * Устанавливает данные последнего ответа.
     * @param response response data/ данные ответа
     */
    setLastResponse(response?: any): this;
    /**
     * Sets the last status.
     *
     * Устанавливает последний статус.
     * @param status status/ статус
     */
    setLastStatus(status?: ApiStatusType): this;
    /**
     * Sets messages from the last request.
     *
     * Устанавливает сообщения от последнего запроса.
     * @param message message text/ текст сообщения
     */
    setLastMessage(message?: string): this;
    /**
     * Sets a specific field in the status item.
     *
     * Устанавливает конкретное поле в элементе статуса.
     * @param name field name/ название поля
     * @param value field value/ значение поля
     */
    protected setValue<K extends keyof ApiStatusItem>(name: K, value?: ApiStatusItem[K]): void;
}

export declare type ApiStatusItem = {
    /** HTTP status code/ Код статуса HTTP */
    status?: number;
    /** HTTP status text/ Текст статуса HTTP */
    statusText?: string;
    /** Error message/ Сообщение об ошибке */
    error?: string;
    /** Last response/ Последний ответ */
    lastResponse?: any;
    /** Last status/ Последний статус */
    lastStatus?: ApiStatusType;
    /** Last message/ Последнее сообщение */
    lastMessage?: string;
};

/** API status type/ Тип статуса API */
export declare type ApiStatusType = 'success' | 'error' | 'warning' | 'info';

/**
 * Applies a template to the text, replacing keys with values from the replacement object
 *
 * Применяет шаблон к тексту, заменяя ключи на значения из объекта замены
 * @param text text with a template containing keys in square or curly brackets, for example "[key]" or "{key}"/
 * текст с шаблоном, содержащим ключи в квадратных или фигурных скобках, например "[key]" или "{key}"
 * @param replacement an object containing key-value pairs for replacement/
 * объект, содержащий пары ключ-значение для замены
 */
export declare const applyTemplate: (text: string, replacement?: Record<string, string | number> | string[]) => string;

/**
 * Converts an array type to an item type (extracts the item type from an array)/
 * Преобразует тип массива в тип элемента (извлекает тип элемента из массива)
 */
export declare type ArrayToItem<T> = T extends any[] ? T[number] : T;

/**
 * The method creates an array of "count" elements with values equal to `value`.
 *
 * Метод создает массив из "count" элементов со значениями равными `value`.
 * @param value value to fill the array with/ значение, заполняющее массив
 * @param count the number of elements in that array/ число элементов этого массива
 */
export declare function arrFill<T>(value: T, count: number): T[];

/**
 * Convert a Blob to a Base64 string.
 *
 * Преобразует Blob в строку Base64.
 * @param blob The Blob to convert/ Blob для преобразования
 */
export declare function blobToBase64(blob: Blob): Promise<string | ArrayBuffer | null>;

/**
 * A class to handle BroadcastChannel messaging.
 *
 * Класс для работы с сообщениями BroadcastChannel.
 */
export declare class BroadcastMessage<Message = any> {
    protected callback?: ((event: MessageEvent<Message>) => void) | undefined;
    protected callbackError?: ((event: MessageEvent<Message>) => void) | undefined;
    protected channel?: BroadcastChannel;
    /**
     * Constructor
     * @param name channel name/ название канала
     * @param callback callback on message received/ колбэк на получение сообщения
     * @param callbackError callback on message error/ колбэк на ошибку сообщения
     */
    constructor(name: string, callback?: ((event: MessageEvent<Message>) => void) | undefined, callbackError?: ((event: MessageEvent<Message>) => void) | undefined);
    /**
     * Get the channel.
     *
     * Получить канал.
     * @returns channel/ канал
     */
    getChannel(): BroadcastChannel | undefined;
    /**
     * Send a message to the channel.
     *
     * Отправить сообщение в канал.
     * @param message message to send/ сообщение для отправки
     */
    post(message: Message): this;
    /**
     * Set the callback function to be called when a message is received.
     *
     * Установить функцию колбэка, которая будет вызвана при получении сообщения.
     * @param callback callback function/ функция колбэка
     */
    setCallback(callback: (event: MessageEvent<Message>) => void): this;
    /**
     * Set the callback function to be called when a message error occurs.
     *
     * Установить функцию колбэка, которая будет вызвана при возникновении ошибки сообщения.
     * @param callbackError callback function/ функция колбэка
     */
    setCallbackError(callbackError: (event: MessageEvent<Message>) => void): this;
    /**
     * Update state on message received.
     *
     * Обновление состояния при получении сообщения.
     * @param event message event/ событие сообщения
     */
    protected readonly update: (event: MessageEvent<Message>) => this;
    /**
     * Update error state on message error.
     *
     * Обновление состояния ошибки при получении ошибки сообщения.
     * @param event message error event/ событие ошибки сообщения
     */
    protected readonly updateError: (event: MessageEvent<Message>) => this;
}

/**
 * Simple class for caching.
 *
 * Простой класс для кэширования.
 */
declare class Cache_2 {
    private cache;
    /**
     * Getting data for the cache, and if there is no cache, it performs a function to save the cache.
     *
     * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша.
     * @param name cache name/ название кэша
     * @param callback function for the cache/ функция для кэша
     * @param comparison additional data for comparison/ дополнительные данные для сравнения
     */
    get<T>(name: string, callback: () => T, comparison?: any[]): T;
    /**
     * Getting data for the cache, and if there is no cache, it performs a function to save the cache (Async).
     *
     * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша (Async).
     * @param name cache name/ название кэша
     * @param callback function for the cache/ функция для кэша
     * @param comparison additional data for comparison/ дополнительные данные для сравнения
     */
    getAsync<T>(name: string, callback: () => T, comparison?: any[]): Promise<T>;
    /**
     * Returns an instance of the object for working with the cache element.
     *
     * Возвращает экземпляр объекта для работы с элементом кэша.
     * @param name cache name/ название кэша
     * @param callback function for the cache/ функция для кэша
     */
    private getCacheItem;
}
export { Cache_2 as Cache }

/**
 * Class for managing a single caching value.
 *
 * Класс для управления одним значением кэширования.
 */
export declare class CacheItem<T> {
    private readonly callback;
    private cache?;
    private cacheOld?;
    private comparisons;
    /**
     * Constructor
     * @param callback function for the cache/ функция для кэша
     */
    constructor(callback: () => T);
    /**
     * Getting data for the cache, and if there is no cache, it performs a function to save the cache.
     *
     * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша.
     * @param comparison additional data for comparison/ дополнительные данные для сравнения
     */
    getCache(comparison: any[]): T;
    /**
     * Getting the previous value of the cache.
     *
     * Получение предыдущего значения кэша.
     */
    getCacheOld(): T | undefined;
    /**
     * Getting data for the cache, and if there is no cache, it performs a function to save the cache (Async).
     *
     * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша (Async).
     * @param comparison additional data for comparison/ дополнительные данные для сравнения
     */
    getCacheAsync(comparison: any[]): Promise<T>;
    /**
     * Overwrites or adds new values for the cache.
     *
     * Перезаписывает или добавляет новые значения для кэша.
     */
    private setCache;
    /**
     * Overwrites or adds new values for the cache (Async).
     *
     * Перезаписывает или добавляет новые значения для кэша (Async).
     */
    private setCacheAsync;
    /**
     * Checking additional data.
     *
     * Проверка дополнительных данных.
     * @param comparison additional data for comparison/ дополнительные данные для сравнения
     */
    private isUpdate;
}

/**
 * Class for working with fast cache during code execution.
 *
 * Класс для работы с быстрым кэшем во время выполнения кода.
 */
export declare class CacheStatic {
    private static cache;
    /**
     * Getting data for the cache, and if there is no cache, it performs a function to save the cache.
     *
     * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша.
     * @param name cache name/ название кэша
     * @param callback function for the cache/ функция для кэша
     * @param comparison additional data for comparison/ дополнительные данные для сравнения
     */
    static get<T>(name: string, callback: () => T, comparison?: any[]): T;
}

/**
 * Class for working with cookies.
 *
 * Класс для управления Cookie.
 */
export declare class Cookie<T> {
    private name;
    value?: T | string;
    private options;
    constructor(name: string);
    /**
     * Get data or update if none.
     *
     * Получает данные или обновляет, если их нет.
     * @param defaultValue value or function to change data/ значение или функция для изменения данных
     * @param options additional parameters/ дополнительные параметры
     */
    get(defaultValue?: T | string | (() => (T | string)), options?: CookieOptions): string | T | undefined;
    /**
     * Updates cookie data.
     *
     * Обновляет данные cookie.
     * @param value value or function to change data/ значение или функция для изменения данных
     * @param options additional parameters/ дополнительные параметры
     */
    set(value?: T | string | (() => (T | string)), options?: CookieOptions): void;
    /**
     * Delete cookie data.
     *
     * Удаление данных из cookie.
     */
    remove(): void;
    /**
     * Returns cache time.
     *
     * Возвращает время кэширования.
     */
    private getAge;
    /**
     * Update cookie data.
     *
     * Обновление данных cookie.
     */
    private update;
    /**
     * Update data from cookies.
     *
     * Обновляет данные из cookies.
     */
    static updateData(): void;
}

/**
 * Class for changing cookie access status.
 *
 * Класс для изменения статуса доступа к куки.
 */
export declare class CookieBlock {
    static storage: DataStorage<boolean>;
    /**
     * Obtaining status.
     *
     * Получение статуса.
     */
    static get(): boolean;
    /**
     * Changing status.
     *
     * Изменение статуса.
     * @param value value to be changed/ значение, на которое будет изменен
     */
    static set(value: boolean): void;
}

export declare type CookieOptions = {
    age?: number;
    sameSite?: CookieSameSite_2;
    arguments?: string[];
};

declare type CookieSameSite_2 = 'strict' | 'lax';

/**
 * Создает копию простого объекта.
 *
 * Creates a copy of a simple object.
 * @param value объект для копирования/ object for copying
 * @returns возвращает новую копию объекта/ returns a new copy of the object
 */
export declare function copyObject<T>(value: T): T;

/**
 * Copies a simple object.
 *
 * Копирует простой объект.
 * @param value объект для копирования/ object for copying
 * @param source дополнительные свойства для копирования/ additional properties for copying
 * @returns возвращает новую копию объекта/ returns a new copy of the object
 */
export declare function copyObjectLite<T, R = T>(value: T, source?: any): R;

/**
 * In HTML documents, creates an element with the tag that is specified in the argument.
 *
 * В HTML-документах создаёт элемент с тегом, который указан в аргументе.
 * @param parentElement the DOM node's parent Element/ родитель для нового элемента
 * @param tagName A string that specifies the type of element to be created/ строка,
 * указывающая элемент какого типа должен быть создан
 * @param options an object with attributes or a function for processing an element/ объект
 * с атрибутами или функция для обработки элемента
 * @param referenceElement the node before which newNode is inserted/ элемент,
 * перед которым будет вставлен newElement
 */
export declare function createElement<T extends HTMLElement>(parentElement?: HTMLElement, tagName?: string, options?: Partial<T> | Record<keyof T, T[keyof T]> | ((element: T) => void), referenceElement?: HTMLElement): T | undefined;

/**
 * Class for working with localStorage.
 *
 * Класс для работы с localStorage.
 */
export declare class DataStorage<T> {
    private name;
    private isSession;
    /**
     * Changing the prefix in key names. Should be called at the beginning of the code.
     *
     * Изменение префикса в названиях ключей. Вызывать нужно в начале кода.
     * @param newPrefix new prefix/ новый префикс
     */
    static setPrefix(newPrefix: string): void;
    private value?;
    private age?;
    /**
     * Constructor
     * @param name value name/ название значения
     * @param isSession should we use a session/ использовать ли сессию
     */
    constructor(name: string, isSession?: boolean);
    /**
     * Getting data from local storage.
     *
     * Получение данных из локального хранилища.
     * @param defaultValue default value/ значение по умолчанию
     * @param cache cache time/ время кэширования
     */
    get(defaultValue?: T | (() => T), cache?: number): T | undefined;
    /**
     * Changing data in storage.
     *
     * Изменение данных в хранилище.
     * @param value new values/ новые значения
     */
    set(value?: T | (() => T)): T | undefined;
    /**
     * Removing data from storage.
     *
     * Удаление данных из хранилища.
     */
    remove(): this;
    /**
     * Clearing all data from storage.
     *
     * Очистка всех данных из хранилища.
     */
    update(): this;
    /**
     * Checks for storage time limit.
     *
     * Проверяет на лимит времени хранения.
     * @param cache cache time/ время кэширования
     */
    private isCache;
    /**
     * Returns an object for working with storage.
     *
     * Возвращает объект для работы с хранилищем.
     */
    private getMethod;
    /**
     * Getting the storage key name.
     *
     * Получение имени ключа в хранилище.
     */
    private getIndex;
    /**
     * Getting data from storage.
     *
     * Получение данных из хранилища.
     */
    private getValue;
    /**
     * Filling in the data from storage.
     *
     * Заполнение данными из хранилища.
     */
    private make;
}

/**
 * A class for working with dates.
 *
 * Класс для работы с датами.
 */
export declare class Datetime {
    protected type: GeoDate;
    protected code: string;
    protected date: Date;
    protected hour24: boolean;
    protected watch?: (date: Date, type: GeoDate, hour24: boolean) => void;
    /**
     * Constructor
     * @param date date for processing/ дата для обработки
     * @param type type of date format for output/ тип формата даты вывода
     * @param code country and language code/ код страны и языка
     */
    constructor(date?: NumberOrStringOrDate, type?: GeoDate, code?: string);
    /**
     * Returns an object for working with formatting.
     *
     * Возвращает объект для работы с форматированием.
     */
    getIntl(): GeoIntl;
    /**
     * Returns a Date object.
     *
     * Возвращает объект Date.
     */
    getDate(): Date;
    /**
     * Returns the type of data output.
     *
     * Возвращает тип вывода данных.
     */
    getType(): string;
    /**
     * Returns the format of hours.
     *
     * Возвращает формат часов.
     */
    getHoursType(): GeoHours;
    /**
     * Whether to use 12-hour time.
     *
     * Использовать ли 12-часовой формат времени.
     */
    getHour24(): boolean;
    /**
     * The method returns the difference, in minutes, between
     * a date as evaluated in the UTC time zone, and the same date as evaluated
     * in the local time zone.
     *
     * Метод возвращает смещение часового пояса относительно часового пояса UTC
     * в минутах для текущей локали.
     */
    getTimeZoneOffset(): number;
    /**
     * Returns the time zone as a string.
     *
     * Возвращает временную зону в виде строки.
     * @param style the style of the returned data/ стиль возвращаемых данных
     */
    getTimeZone(style?: GeoTimeZoneStyle): string;
    /**
     * Returns the code of the first day of the week.
     *
     * Возвращает код первого дня недели.
     */
    getFirstDayCode(): GeoFirstDay;
    /**
     * The method returns the year of the specified date according to local time.
     *
     * Метод возвращает год указанной даты по местному времени.
     */
    getYear(): number;
    /**
     * The method returns the month in the specified date according to local time,
     * as a zero-based value.
     *
     * Метод возвращает месяц указанной даты по местному времени, нумерация
     * месяцев начинается с нуля для первого месяца в году.
     */
    getMonth(): number;
    /**
     * The method returns the day of the month for the specified date according to local time.
     *
     * Метод возвращает день месяца указанной даты по местному времени
     */
    getDay(): number;
    /**
     * The method returns the hour for the specified date, according to local time.
     *
     * Метод возвращает часы указанной даты по местному времени.
     */
    getHour(): number;
    /**
     * The method returns the minutes in the specified date according to local time.
     *
     * Метод возвращает минуты указанной даты по местному времени.
     */
    getMinute(): number;
    /**
     * The method returns the seconds in the specified date according to local time.
     *
     * Метод возвращает секунды указанной даты по местному времени.
     */
    getSecond(): number;
    /**
     * Returns the last day of the week.
     *
     * Возвращает последний день недели.
     */
    getMaxDay(): number;
    /**
     * Enables language-sensitive date and time formatting.
     *
     * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
     * @param type type of date format for output/ тип формата даты вывода
     * @param styleOptions the representation of the month/ представление месяца
     */
    locale(type?: GeoDate, styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions): string;
    /**
     * Returns the formatted year.
     *
     * Возвращает отформатированный год.
     * @param style the representation of the month/ представление месяца
     */
    localeYear(style?: Intl.DateTimeFormatOptions['year']): string;
    /**
     * Returns the formatted month.
     *
     * Возвращает отформатированный месяц.
     * @param style the representation of the month/ представление месяца
     */
    localeMonth(style?: Intl.DateTimeFormatOptions['month']): string;
    /**
     * Returns the formatted day.
     *
     * Возвращает отформатированный день.
     * @param style the representation of the month/ представление месяца
     */
    localeDay(style?: Intl.DateTimeFormatOptions['day']): string;
    /**
     * Returns the formatted hour.
     *
     * Возвращает отформатированный час.
     * @param style the representation of the month/ представление месяца
     */
    localeHour(style?: Intl.DateTimeFormatOptions['hour']): string;
    /**
     * Returns the formatted minute.
     *
     * Возвращает отформатированную минуту.
     * @param style the representation of the month/ представление месяца
     */
    localeMinute(style?: Intl.DateTimeFormatOptions['minute']): string;
    /**
     * Returns the formatted second.
     *
     * Возвращает отформатированную секунду.
     * @param style the representation of the month/ представление месяца
     */
    localeSecond(style?: Intl.DateTimeFormatOptions['second']): string;
    /**
     * Output of standard data.
     *
     * Вывод стандартных данных.
     * @param timeZone add time zone/ добавить временную зону
     */
    standard(timeZone?: boolean): string;
    /**
     * Change the date completely.
     *
     * Изменять полностью дату.
     * @param value an integer value representing the number/
     * целочисленное значение, представляющее число
     */
    setDate(value: NumberOrStringOrDate): this;
    /**
     * Change the type of data output.
     *
     * Изменить тип вывода данных.
     * @param value type of output/ тип вывод
     */
    setType(value: GeoDate): this;
    /**
     * Whether to use 12-hour time.
     *
     * Использовать ли 12-часовой формат времени.
     * @param value If true, output the 12-hour time format/
     * если true, выводить 12-часовой формат времени
     */
    setHour24(value: boolean): this;
    /**
     * To change the location.
     *
     * Изменить местоположение.
     * @param code country and language code/ код страны и языка
     */
    setCode(code: string): this;
    /**
     * The function is called when the data is updated.
     *
     * Функция вызывается при обновлении данных.
     * @param watch the function calls/ функция вызывает
     */
    setWatch(watch: (date: Date, type: GeoDate, hour24: boolean) => void): this;
    /**
     * The method sets the full year for a specified date according to local time.
     *
     * Метод устанавливает полный год указанной даты по местному времени.
     * @param value value/ значения
     */
    setYear(value: number): this;
    /**
     * The method sets the month for a specified date according to the currently set year.
     *
     * Метод устанавливает месяц указанной даты по местному времени.
     * @param value value/ значения
     */
    setMonth(value: number): this;
    /**
     * The method changes the day of the month of a given Date instance, based on local time.
     *
     * Метод устанавливает день месяца указанной даты по местному времени.
     * @param value value/ значения
     */
    setDay(value: number): this;
    /**
     * The method sets the hours for a specified date according to local time.
     *
     * Метод устанавливает часы указанной даты по местному времени.
     * @param value value/ значения
     */
    setHour(value: number): this;
    /**
     * The method sets the minutes for a specified date according to local time
     *
     * Метод устанавливает минуты указанной даты по местному времени
     * @param value value / значения
     */
    setMinute(value: number): this;
    /**
     * The method sets the seconds for a specified date according to local time.
     *
     * Метод устанавливает секунды указанной даты по местному времени.
     * @param value value/ значения
     */
    setSecond(value: number): this;
    /**
     * Shift the date by a given value in years.
     *
     * Сдвинуть дату на заданное значение в годах.
     * @param value values for moving/ значения для перемещения
     */
    moveByYear(value: number): this;
    /**
     * Shift the date by a given value in months.
     *
     * Сдвинуть дату на заданное значение в месяцах.
     * @param value values for moving/ значения для перемещения
     */
    moveByMonth(value: number): this;
    /**
     * Shift the date by a given value in days.
     *
     * Сдвинуть дату на заданное значение в днях.
     * @param value values for moving/ значения для перемещения
     */
    moveByDay(value: number): this;
    /**
     * Shift the date by a given value in hours.
     *
     * Сдвинуть дату на заданное значение в часах.
     * @param value values for moving/ значения для перемещения
     */
    moveByHour(value: number): this;
    /**
     * Shift the date by a given value in minutes.
     *
     * Сдвинуть дату на заданное значение в минутах.
     * @param value values for moving/ значения для перемещения
     */
    moveByMinute(value: number): this;
    /**
     * Shift the date by a given value in seconds.
     *
     * Сдвинуть дату на заданное значение в секундах.
     * @param value values for moving/ значения для перемещения
     */
    moveBySecond(value: number): this;
    /**
     * Translate to the first month.
     *
     * Переводить на первый месяц.
     */
    moveMonthFirst(): this;
    /**
     * Translate to the first month.
     *
     * Переводить на первый месяц.
     */
    moveMonthLast(): this;
    /**
     * Translate to the first day of the next month.
     *
     * Переводить на первый день следующего месяца.
     */
    moveMonthNext(): this;
    /**
     * Translate to the first day of the previous month.
     *
     * Переводить на первый день предыдущего месяца.
     */
    moveMonthPrevious(): this;
    /**
     * Translate to the first day of the week.
     *
     * Переводить на первый день недели.
     */
    moveWeekdayFirst(): this;
    /**
     * Translate to the last day of the week.
     *
     * Переводить на последний день недели.
     */
    moveWeekdayLast(): this;
    /**
     * Translate to the first day of the first week of the month.
     *
     * Переводить на первый день первой недели месяца.
     */
    moveWeekdayFirstByMonth(): this;
    /**
     * Translate to the first day of the first full week of the following month.
     *
     * Переводить на первый день первой полной недели следующего месяца.
     */
    moveWeekdayLastByMonth(): this;
    /**
     * Translate to the next week.
     *
     * Переводить на следующую неделю.
     */
    moveWeekdayNext(): this;
    /**
     * Translate to the previous week.
     *
     * Переводить на предыдущую неделю.
     */
    moveWeekdayPrevious(): this;
    /**
     * Translate to the first day of the month.
     *
     * Переводить на первый день месяца.
     */
    moveDayFirst(): this;
    /**
     * Translate to the last day of the month.
     *
     * Переводить на последний день месяца.
     */
    moveDayLast(): this;
    /**
     * Translate to the next day.
     *
     * Переводить на следующий день.
     */
    moveDayNext(): this;
    /**
     * Translate to the previous day.
     *
     * Переводить на предыдущий день.
     */
    moveDayPrevious(): this;
    /**
     * Clone the Date object.
     *
     * Клонировать объект Date.
     */
    clone(): Date;
    /**
     * Clone the GeoDate object.
     *
     * Клонировать объект GeoDate.
     */
    cloneClass(): Datetime;
    /**
     * Clone the GeoDate object and set the month to January.
     *
     * Клонировать объект GeoDate и установить месяц на январь.
     */
    cloneMonthFirst(): Datetime;
    /**
     * Clone the GeoDate object and move the month to the end of the year.
     *
     * Клонировать объект GeoDate и перевести месяц на конец года.
     */
    cloneMonthLast(): Datetime;
    /**
     * Clone the GeoDate object and transfer it one month ahead.
     *
     * Клонировать объект GeoDate и перевести на 1 месяц вперед.
     */
    cloneMonthNext(): Datetime;
    /**
     * Clone the GeoDate object and transfer it one month back.
     *
     * Клонировать объект GeoDate и перевести на 1 месяц назад.
     */
    cloneMonthPrevious(): Datetime;
    /**
     * Returns the first day of the week according to the current date.
     *
     * Возвращает первый день недели по текущей дате.
     */
    cloneWeekdayFirst(): Datetime;
    /**
     * Returns the last day of the week according to the current date.
     *
     * Возвращает последний день недели по текущей дате.
     */
    cloneWeekdayLast(): Datetime;
    /**
     * Returns the first day of the week according to the current month.
     *
     * Возвращает первый день недели по текущему месяцу.
     */
    cloneWeekdayFirstByMonth(): Datetime;
    /**
     * Returns the last day of the week according to the current month.
     *
     * Возвращает последний день недели по текущему месяцу.
     */
    cloneWeekdayLastByMonth(): Datetime;
    /**
     * Returns the next week according to the current date.
     *
     * Возвращает следующую неделю по текущей дате.
     */
    cloneWeekdayNext(): Datetime;
    /**
     * Returns the previous week according to the current date.
     *
     * Возвращает предыдущую неделю по текущей дате.
     */
    cloneWeekdayPrevious(): Datetime;
    /**
     * Clone the GeoDate object and move the day to the beginning of the month.
     *
     * Клонировать объект GeoDate и перевести день на начало месяца.
     */
    cloneDayFirst(): Datetime;
    /**
     * Clone the GeoDate object and move the day to the end of the month.
     *
     * Клонировать объект GeoDate и перевести день на конец месяца.
     */
    cloneDayLast(): Datetime;
    /**
     * Clone the GeoDate object and move by 1 day.
     *
     * Клонировать объект GeoDate и перевести на 1 день.
     */
    cloneDayNext(): Datetime;
    /**
     * Clone the GeoDate object and go back by 1 day.
     *
     * Клонировать объект GeoDate и вернуться на 1 день.
     */
    cloneDayPrevious(): Datetime;
    /**
     * Returns the time zone hour format.
     *
     * Возвращает часовой формат временной зоны.
     * @param hour hour/ час
     */
    protected toTimeZoneHourFormat(hour: number): string;
    /**
     * Updating all values.
     *
     * Обновление всех значений.
     */
    protected update(): this;
}

/**
 * Selects the first element that matches the specified selectors.
 *
 * Выбирает первый элемент, который соответствует указанным селекторам.
 * @param selectors selectors/ селекторы
 */
export declare function domQuerySelector<E extends Element = Element>(selectors: string): E | undefined;

/**
 * Selects all elements that match the specified selectors.
 *
 * Выбирает все элементы, которые соответствуют указанным селекторам.
 * @param selectors selectors/ селекторы
 */
export declare function domQuerySelectorAll<E extends Element = Element>(selectors: string): NodeListOf<E> | undefined;

/**
 * Generic type that can be either an element or a string selector/
 * Дженерик тип для элемента или строкового селектора
 */
export declare type ElementOrString<E extends ElementOrWindow> = E | string;

/**
 * Union type for HTML elements and Window object/
 * Объединенный тип для HTML элементов и объекта Window
 */
export declare type ElementOrWindow = HTMLElement | Window;

/**
 * Union type for all "empty" values including falsy primitives and string representations/
 * Объединенный тип для всех "пустых" значений включая ложные примитивы и строковые представления
 */
export declare type EmptyValue = Undefined | 0 | false | '' | 'undefined' | 'null' | '0' | 'false' | '[]';

/**
 * Encodes special characters in a string for safe use in HTML attributes.
 *
 * Кодирует специальные символы в строке для безопасного использования в HTML-атрибутах.
 * @param text text to encode / текст для кодирования
 */
export declare function encodeAttribute(text: string): string;

/**
 * Ensures that an image does not exceed the maximum size by resizing it if needed.
 *
 * Гарантирует, что изображение не превышает максимальный размер, изменяя его размер при необходимости.
 * @param file image file as Uint8Array / файл изображения в виде Uint8Array
 * @param compress maximum size as a fraction of the original size (default is 0.7)/
 * максимальный размер в виде доли от оригинального размера (по умолчанию 0.7)
 * @param type image type (default is 'image/jpeg') / тип изображения (по умолчанию 'image/jpeg')
 */
export declare function ensureMaxSize(file: Uint8Array, compress?: number, type?: string): Promise<string>;

/**
 * Escapes special regex characters in a string so it can be used safely in a RegExp.
 *
 * Экранирует специальные символы регулярного выражения в строке, чтобы её можно было безопасно использовать в RegExp.
 * @param value string to escape / строка для экранирования
 */
export declare function escapeExp(value: string): string;

/**
 * Type for tracking active event listeners and observers/
 * Тип для отслеживания активных обработчиков событий и наблюдателей
 */
export declare type EventActivityItem<E extends ElementOrWindow> = {
    /** The target element for the event/ Целевой элемент для события */
    element: E | undefined;
    /** The event type name/ Название типа события */
    type: string;
    /** Optional custom event listener/ Опциональный пользовательский обработчик событий */
    listener?: (event: any | Event) => void;
    /** Optional ResizeObserver instance/ Опциональный экземпляр ResizeObserver */
    observer?: ResizeObserver;
};

/**
 * Advanced wrapper for managing event listeners on DOM elements or the `window` object.
 * It simplifies the entire event lifecycle (start, stop, toggle, reset) and provides built-in optimizations for high-frequency events like `resize` and `scroll-sync`.
 *
 * Продвинутая обертка для управления слушателями событий на DOM-элементах или объекте `window`.
 * Упрощает весь жизненный цикл событий (запуск, остановка, переключение, сброс) и предоставляет встроенные оптимизации для высокочастотных событий, таких как `resize` и `scroll-sync`.
 */
export declare class EventItem<E extends ElementOrWindow, O extends Event, D extends Record<string, any> = Record<string, any>> {
    protected listener?: EventListenerDetail<O, D> | undefined;
    protected options?: EventOptions;
    protected detail?: D | undefined;
    /**
     * Element.
     *
     * Элемент.
     */
    protected element?: E;
    /**
     * Element for checking. If the element is missing in the DOM, the event is turned off.
     *
     * Элемент для проверки. Если элемент отсутствует в DOM, событие выключается.
     */
    protected elementControl?: ElementOrWindow;
    protected elementControlEdit?: boolean;
    /**
     * A case-sensitive string representing the event type to listen for.
     *
     * Чувствительная к регистру строка, представляющая тип обрабатываемого события.
     */
    protected type: string[];
    /**
     * The object that receives a notification (an object that implements the Event interface)
     * when an event of the specified type occurs. This must be null, an object with a
     * handleEvent() method, or a JavaScript function.
     *
     * Объект, который принимает уведомление, когда событие указанного типа произошло.
     * Это должен быть объект, реализующий интерфейс EventListener или просто функция JavaScript.
     */
    protected listenerRecent: (event?: O | ResizeObserverEntry) => void;
    /**
     * Event states.
     *
     * Состояния события.
     */
    protected activity: boolean;
    protected activityItems: EventActivityItem<E>[];
    /**
     * Constructor for EventItem.
     *
     * Конструктор для EventItem.
     * @param elementSelector target element or selector where the listener should be attached / целевой элемент или селектор, к которому должен быть прикреплен слушатель
     * @param type event type (e.g., 'click'), array of types, or special optimization types ('resize', 'scroll-sync') / тип события (например, 'click'), массив типов или специальные типы оптимизации ('resize', 'scroll-sync')
     * @param listener the handler function to be executed when the event occurs / функция-обработчик, которая будет выполнена при возникновении события
     * @param options standard EventListenerOptions or boolean for useCapture / стандартные EventListenerOptions или логическое значение для useCapture
     * @param detail additional data provided to the listener via the custom Event interaction / дополнительные данные, предоставляемые слушателю через кастомное взаимодействие с событием
     */
    constructor(elementSelector?: ElementOrString<E>, type?: string | string[], listener?: EventListenerDetail<O, D> | undefined, options?: EventOptions, detail?: D | undefined);
    /**
     * Checks whether event listening is currently enabled.
     *
     * Проверяет, включено ли сейчас прослушивание события.
     */
    isActive(): boolean;
    getElement(): E | undefined;
    /**
     * Change of an element for tracking.
     *
     * Изменение элемента для прослеживания.
     * @param elementSelector element/ элемент
     */
    setElement(elementSelector?: ElementOrString<E>): this;
    /**
     * Modifies the object that receives the notification.
     *
     * Модифицирует объект, который получает уведомление.
     * @param elementSelector element/ элемент
     */
    setElementControl<EC extends HTMLElement>(elementSelector?: ElementOrString<EC>): this;
    /**
     * Changes the type of the handled event.
     *
     * Изменяет тип обрабатываемого события.
     * @param type type/ тип
     */
    setType(type: string | string[]): this;
    /**
     * Modifies the object that receives the notification.
     *
     * Модифицирует объект, который получает уведомление.
     * @param listener
     */
    setListener(listener: EventListenerDetail<O, D>): this;
    /**
     * Modifying the options object that defines the characteristics of an object.
     *
     * Изменение объекта options, который определяет характеристики объекта.
     * @param options
     */
    setOptions(options?: EventOptions): this;
    /**
     * Modifying a dependent value for the dispatch method.
     *
     * Изменение зависимого значения для метода dispatch.
     * @param detail
     */
    setDetail(detail?: D): this;
    /**
     * Triggers the events on the target element, optionally with a new detail value.
     * This method manually initiates a `CustomEvent` dispatch for all specified types.
     *
     * Инициирует события на целевом элементе, опционально с новым значением detail.
     * Этот метод вручную запускает диспетчеризацию `CustomEvent` для всех указанных типов.
     * @param detail the value to be passed as the event detail / значение, которое будет передано как detail события
     */
    dispatch(detail?: D | undefined): this;
    /**
     * Starting event listening.
     *
     * Запуск прослушивания события.
     */
    start(): this;
    /**
     * Stopping event listening.
     *
     * Остановка прослушивания события.
     */
    stop(): this;
    /**
     * Toggling event handler state.
     *
     * Переключение состояния работы события.
     * @param activity event activation/ активация события
     */
    toggle(activity: boolean): this;
    /**
     * Overloads the listening events.
     *
     * Перегружает события прослушивания.
     */
    reset(): this;
    /**
     * Checks if the ResizeObserver object exists.
     *
     * Проверяет, существует ли объект ResizeObserver.
     */
    protected isObserver(): boolean;
    /**
     * The implementation of the resize event for an element.
     *
     * Реализация события изменения размера для элемента.
     */
    protected makeResize(): boolean;
    /**
     * Implementation of the scroll event for an element.
     *
     * Реализация события изменения положения скролла для элемента.
     */
    protected makeScroll(): boolean;
}

/**
 * Generic event listener function type with additional detail parameter/
 * Дженерик тип функции обработчика событий с дополнительным параметром detail
 */
export declare type EventListenerDetail<O extends Event, D extends Record<string, any>> = (event: O, detail?: D) => void;

/** Type for event listener options/ Тип для опций обработчика событий */
export declare type EventOptions = AddEventListenerOptions | boolean | undefined;

/**
 * Stop listening to events in depth.
 *
 * Остановить прослушивания события в глубину.
 * @param event event instance/ экземпляр события
 */
export declare function eventStopPropagation(event: Event): void;

/**
 * The function is executed and returns its result. Or returns the input data, if it is not a function.
 *
 * Выполняется функция и возвращает ее результат. Или возвращает входные данные, если это не функция
 * @param callback function or any value/ функция или любое значение
 */
export declare function executeFunction<T>(callback: T | FunctionArgs<any, T>): T;

/**
 * Returns the execution result of an asynchronous function.
 *
 * Возвращает выполнение асинхронной функции.
 * @param callback function or any value/ функция или любое значение
 */
export declare function executePromise<T>(callback: (() => Promise<T>) | (() => T) | T): Promise<T>;

/**
 * The function performs the specified function once for each element in the object.
 * And returns an array with the results of executing the function.
 *
 * Функция выполняет указанную функцию один раз для каждого элемента в объекте.
 * И возвращает массив с результатами выполнения функции.
 * @param data object for iteration/ объект для перебора
 * @param callback a function to execute for each element in the array/
 * функция, которая будет вызвана для каждого элемента
 * @param saveUndefined if true, the function will return an array with undefined values/
 * если true, функция вернет массив с undefined значениями
 */
export declare function forEach<T, R, D extends T[] | Record<string, T> | Map<string, T> = T[] | Record<string, T> | Map<string, T>, K = D extends T[] ? number : string>(data: D & (T[] | Record<string, T> | Map<string, T>), callback: (item: T, key: K, dataMain: typeof data) => R, saveUndefined?: boolean): R[];

/**
 * Class for formatting a list of data based on provided options.
 *
 * Класс для форматирования списка данных на основе предоставленных параметров.
 * @template Options - type of formatting options / тип параметров форматирования.
 * @template List - type of the list of items (can be an array or a single item) / тип списка элементов (может быть массивом или одним элементом).
 * @template Item - type of a single item in the list / тип одного элемента в списке.
 */
export declare class Formatters<Options extends FormattersOptionsList = FormattersOptionsList, List extends FormattersListProp = FormattersListProp, Item extends FormattersItemProp<List> = FormattersItemProp<List>> {
    protected options: Options;
    protected list?: List | undefined;
    /**
     * Constructor
     *
     * Конструктор
     * @param options formatting options for each column/ property/
     * параметры форматирования для каждого столбца/свойства
     * @param list initial list of data to format/ начальный список данных для форматирования
     */
    constructor(options: Options, list?: List | undefined);
    /**
     * Checks if the list is set.
     *
     * Проверяет, установлен ли список.
     * @returns true if the list is set, false otherwise/ true, если список установлен, иначе false
     */
    is(): boolean;
    /**
     * Checks if the list is an array.
     *
     * Проверяет, является ли список массивом.
     * @returns true if the list is an array, false otherwise/ true, если список является массивом, иначе false
     */
    isArray(): this is this & {
        list: FormattersList<Item>;
    };
    /**
     * Returns the count of records in the list.
     *
     * Возвращает количество записей в списке.
     * @returns count of records/ количество записей
     */
    length(): number;
    /**
     * Returns the current list of data.
     *
     * Возвращает текущий список данных.
     * @returns the list of data or undefined if not set/ список данных или undefined, если не задан
     */
    getList(): FormattersList<Item>;
    /**
     * Returns the current formatting options.
     *
     * Возвращает текущие параметры форматирования.
     * @returns formatting options/ параметры форматирования
     */
    getOptions(): Options;
    /**
     * Sets the list of data to be formatted.
     *
     * Устанавливает список данных для форматирования.
     * @param list list of data/ список данных
     * @returns the Formatters instance for chaining/ экземпляр Formatters для цепочки вызовов
     */
    setList(list?: List): this;
    /**
     * Formats the entire list or a single item based on the provided options.
     * Adds formatted values with the suffix 'Format' to each item.
     *
     * Форматирует весь список или один элемент на основе предоставленных параметров.
     * Добавляет отформатированные значения с суффиксом 'Format' к каждому элементу.
     * @returns formatted data (list or single item) with additional formatted columns /
     * отформатированные данные (список или один элемент) с дополнительными отформатированными столбцами
     */
    to(): FormattersReturn<List, Options>;
    /**
     * Generates formatted data for a single item based on options.
     *
     * Генерирует отформатированные данные для одного элемента на основе параметров.
     * @param item item to format/ элемент для форматирования
     * @protected
     */
    protected getFormatData(item: Item): Record<string, string>;
    /**
     * Router-like method to delegate formatting to specific type formatters.
     *
     * Метод-маршрутизатор для делегирования форматирования конкретным типам форматировщиков.
     * @param valueOriginal original value to format/ исходное значение для форматирования
     * @param item entire item context/ весь контекст элемента
     * @param type type of formatter to use/ тип используемого форматировщика
     * @param options additional options for the specific formatter/
     * дополнительные параметры для конкретного форматировщика
     * @protected
     * @returns Formatted string/ отформатированная строка
     */
    protected transformation<Type extends FormattersType>(valueOriginal: any, item: any, type?: Type, options?: FormattersOptionsInformation<Type>): string;
    /**
     * Formats a value as currency.
     *
     * Форматирует значение как валюту.
     * @param value value to format/ значение для форматирования
     * @param item item context/ контекст элемента
     * @param options currency formatting options/ параметры форматирования валюты
     * @protected
     * @returns Formatted currency string/ отформатированная строка валюты
     */
    protected formatCurrency(value: any, item: Item, options?: FormattersOptionsCurrency): string;
    /**
     * Formats a value as a date.
     *
     * Форматирует значение как дату.
     * @param value value to format/ значение для форматирования
     * @param options date formatting options/ параметры форматирования даты
     * @protected
     * @returns Formatted date string/ отформатированная строка даты
     */
    protected formatDate(value: any, options?: FormattersOptionsDate): string;
    /**
     * Formats full name from multiple property names.
     *
     * Форматирует полное имя из нескольких имен свойств.
     * @param item item context containing name components/ контекст элемента, содержащий компоненты имени
     * @param options name formatting options (prop names for first, last, surname)/
     * параметры форматирования имени (имена свойств для имени, фамилии, отчества)
     * @protected
     * @returns Formatted name string or empty string if components are missing/
     * отформатированная строка имени или пустая строка, если компоненты отсутствуют
     */
    protected formatName(item: Item, options?: FormattersOptionsName): string;
    /**
     * Formats a value as a number.
     *
     * Форматирует значение как число.
     * @param value value to format/ значение для форматирования
     * @param options number formatting options/ параметры форматирования числа
     * @protected
     * @returns Formatted number string/ отформатированная строка числа
     */
    protected formatNumber(value: any, options?: FormattersOptionsNumber): string;
    /**
     * Formats a value based on plural rules.
     *
     * Форматирует значение на основе правил множественного числа.
     * @param value numeric value for pluralization/ числовое значение для плюрализации
     * @param options plural formatting options (words and rules)/
     * параметры форматирования множественного числа (слова и правила)
     * @protected
     * @returns Formatted plural string/ отформатированная строка множественного числа
     */
    protected formatPlural(value: any, options?: FormattersOptionsPlural): string;
    /**
     * Formats a value with a specific unit.
     *
     * Форматирует значение с определенной единицей измерения.
     * @param value value to format/ значение для форматирования
     * @param options unit formatting options/ параметры форматирования единиц измерения
     * @protected
     * @returns Formatted unit string/ отформатированная строка единицы измерения
     */
    protected formatUnit(value: any, options?: FormattersOptionsUnit): string;
}

/**
 * Utility type to capitalize a camelCase or dot-notated string.
 *
 * Вспомогательный тип для капитализации строки.
 *
 * @template K - The string to capitalize / Строка для капитализации.
 */
export declare type FormattersCapitalize<K extends string> = K extends `${infer First}.${infer Rest}` ? `${First}${Capitalize<FormattersCapitalize<Rest>>}` : K;

/**
 * Utility type to extract column keys from formatting options.
 *
 * Вспомогательный тип для извлечения ключей столбцов.
 *
 * @template T - The formatting options list type / Тип списка параметров форматирования.
 */
export declare type FormattersColumns<T extends FormattersOptionsList> = (keyof T & string)[];

/**
 * Represents a data item with additional formatted properties.
 *
 * Представляет элемент данных с доп. отформатированными свойствами.
 *
 * @template T - The original item type / Исходный тип элемента.
 * @template KT - Array of property keys / Массив ключей свойств.
 */
export declare type FormattersDataItem<T extends FormattersListItem, KT extends string[]> = {
    [K in keyof T | FormattersKey<KT[number]>]: K extends keyof T ? T[K] : string;
};

/**
 * Extracts the single item type from a single item or a list of items.
 *
 * Извлекает тип одного элемента из одного элемента или из списка элементов.
 *
 * @template List - The type of the input data / Тип входных данных.
 */
export declare type FormattersItemProp<List extends FormattersListProp> = ArrayToItem<List>;

/**
 * Utility type to generate a formatted property key.
 *
 * Вспомогательный тип для генерации ключа отформатированного свойства.
 *
 * @template K - The original property key / Ключ исходного свойства.
 * @template A - The suffix to add / Суффикс.
 */
export declare type FormattersKey<K, A extends string = 'Format'> = K extends string ? `${FormattersCapitalize<K>}${A}` : never;

/**
 * An array of data items to be formatted.
 *
 * Массив элементов данных для форматирования.
 *
 * @template Item - The type of data items / Тип элементов данных.
 */
export declare type FormattersList<Item extends FormattersListItem> = Item[];

/**
 * A single data item formatted based on the provided options list.
 *
 * Один элемент данных, отформатированный на основе параметров.
 *
 * @template T - The original item type / Исходный тип элемента.
 * @template O - The formatting options / Параметры форматирования.
 */
export declare type FormattersListColumnItem<T extends FormattersListItem, O extends FormattersOptionsList> = FormattersDataItem<T, FormattersColumns<O>>;

/**
 * A list of data items formatted based on the provided options list.
 *
 * Список элементов данных, отформатированных на основе параметров.
 *
 * @template T - The original item type / Исходный тип элемента.
 * @template O - The formatting options / Параметры форматирования.
 */
export declare type FormattersListColumns<T extends FormattersListItem, O extends FormattersOptionsList> = FormattersListFormat<T, FormattersColumns<O>>;

/**
 * An array of data items with additional formatted properties.
 *
 * Массив элементов данных с доп. отформатированными свойствами.
 *
 * @template T - The original item type / Исходный тип элемента.
 * @template K - Array of property keys / Массив ключей свойств.
 */
export declare type FormattersListFormat<T extends FormattersListItem, K extends string[]> = FormattersDataItem<T, K>[];

/**
 * Represents a single data item as a key-value record.
 *
 * Представляет один элемент данных как запись "ключ-значение".
 */
export declare type FormattersListItem = Record<string, any>;

/**
 * Possible formats for input data: either a single item or a list of items.
 *
 * Возможные форматы входных данных: либо один элемент, либо список элементов.
 */
export declare type FormattersListProp = FormattersList<FormattersListItem> | FormattersListItem;

/**
 * Options for currency formatting.
 *
 * Параметры для форматирования валюты.
 */
export declare type FormattersOptionsCurrency = {
    /** The name of the property in the data item that contains the currency code / Имя свойства в элементе данных, которое содержит код валюты. */
    currencyPropName?: string;
    /** Currency code or international number format options / Код валюты или международные параметры форматирования чисел. */
    options?: string | Intl.NumberFormatOptions;
    /** If true, only the numeric value will be returned / Если true, будет возвращено только числовое значение. */
    numberOnly?: boolean;
};

/**
 * Options for date formatting.
 *
 * Параметры для форматирования даты.
 */
export declare type FormattersOptionsDate = {
    /** The type of date representation / Тип представления даты. */
    type?: GeoDate;
    /** International date-time format options / Междунар. параметры форматирования даты и времени. */
    options?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions;
    /** Use 24-hour format if true / Использовать 24-часовой формат, если true. */
    hour24?: boolean;
};

/**
 * Mapping of formatter types to their respective option types.
 *
 * Соответствие типов форматировщиков их типам параметров.
 *
 * @template Type - The formatter type / Тип форматировщика.
 */
export declare type FormattersOptionsInformation<Type extends FormattersType> = Type extends FormattersType.currency ? FormattersOptionsCurrency : Type extends FormattersType.date ? FormattersOptionsDate : Type extends FormattersType.name ? FormattersOptionsName : Type extends FormattersType.number ? FormattersOptionsNumber : Type extends FormattersType.plural ? FormattersOptionsPlural : Type extends FormattersType.unit ? FormattersOptionsUnit : Record<string, any>;

/**
 * Configuration for a single property formatter.
 *
 * Конфигурация для форматировщика одного свойства.
 *
 * @template Type - The type of formatter / Тип форматировщика.
 * @template R - The return type / Возвращаемый тип.
 */
export declare type FormattersOptionsItem<Type extends FormattersType = FormattersType, R = string> = {
    /** The type of formatter / Тип форматировщика. */
    type?: Type;
    /** Custom transformation function / Пользовательская функция преобразования. */
    transformation?: (valueOriginal: any, item: any, options?: FormattersOptionsInformation<Type>) => R;
    /** Options for the specified formatter type / Параметры для указанного типа форматировщика. */
    options?: FormattersOptionsInformation<Type>;
};

/**
 * A dictionary mapping property paths to their formatting configurations.
 *
 * Словарь, сопоставляющий пути к свойствам с их конфигурациями форматирования.
 */
export declare type FormattersOptionsList = Record<string, FormattersOptionsItem>;

/**
 * Options for name formatting.
 *
 * Параметры для форматирования имени.
 */
export declare type FormattersOptionsName = {
    /** Property name for the last name / Имя свойства для фамилии. */
    lastPropName?: string;
    /** Property name for the first name / Имя свойства для имени. */
    firstPropName?: string;
    /** Property name for the middle name / Имя свойства для отчества. */
    surname?: string;
    /** If true, returns a short version of the name / Если true, возвращает сокращенную версию имени. */
    short?: boolean;
};

/**
 * Options for number formatting.
 *
 * Параметры для форматирования чисел.
 */
export declare type FormattersOptionsNumber = {
    /** International number format options / Междунар. параметры форматирования чисел. */
    options?: Intl.NumberFormatOptions;
};

/**
 * Options for plural forms formatting.
 *
 * Параметры для форматирования форм множественного числа.
 */
export declare type FormattersOptionsPlural = {
    /** A string containing plural forms / Строка, содержащая формы множественного числа. */
    words: string;
    /** International plural rules options / Междунар. параметры правил множественного числа. */
    options?: Intl.PluralRulesOptions;
    /** International number format options for the numeric part / Междунар. параметры форматирования чисел для числовой части. */
    optionsNumber?: Intl.NumberFormatOptions;
};

/**
 * Options for unit formatting.
 *
 * Параметры для форматирования единиц измерения.
 */
export declare type FormattersOptionsUnit = {
    /** The unit to format or international number format options / Ед. изм. для форматирования или междунар. параметры форматирования чисел. */
    unit: string | Intl.NumberFormatOptions;
};

/**
 * The return type of the formatter, matching the structure of the input data.
 *
 * Возвращаемый тип форматировщика, соответствующий структуре входных данных.
 *
 * @template List - The input data type / Тип входных данных.
 * @template Options - The formatting options / Параметры форматирования.
 * @template Item - The type of a single item / Тип одного элемента.
 */
export declare type FormattersReturn<List extends FormattersListProp, Options extends FormattersOptionsList = FormattersOptionsList, Item extends FormattersItemProp<List> = FormattersItemProp<List>> = List extends any[] ? FormattersListColumns<Item, Options> : (FormattersListColumnItem<Item, Options> | undefined);

/**
 * Enumeration of available formatter types.
 *
 * Перечисление доступных типов форматировщиков.
 */
export declare enum FormattersType {
    /** Currency formatting / Форматирование валюты. */
    currency = "currency",
    /** Date formatting / Форматирование даты. */
    date = "date",
    /** Name formatting / Форматирование имени. */
    name = "name",
    /** Number formatting / Форматирование чисел. */
    number = "number",
    /** Plural forms formatting / Форматирование форм множественного числа. */
    plural = "plural",
    /** Unit formatting (e.g., meters, kilograms) / Форматирование единиц измерения (например, метры, килограммы). */
    unit = "unit"
}

/**
 * Cyclically calls requestAnimationFrame until next returns true
 * The window.requestAnimationFrame() method tells the browser that you wish to perform
 * an animation and requests that the browser calls a specified function to update an
 * animation right before the next repaint.
 *
 * Циклически вызывает requestAnimationFrame, пока next возвращает true
 * window.requestAnimationFrame указывает браузеру на то, что вы хотите произвести
 * анимацию, и просит его запланировать перерисовку на следующем кадре анимации.
 * @param callback the function to call when it's time to update your animation for the next repaint/ функция,
 * которая будет вызвана, когда придёт время обновить вашу анимацию на следующей перерисовке
 * @param next function that determines repetition/ функция, которая определяет повторность
 * @param end function that is executed if the animation stops/ функция,
 * которая выполняется, если останавливается анимация
 */
export declare function frame(callback: () => void, next?: () => boolean, end?: () => void): void;

/**
 * Most generic function type that accepts any arguments and returns any value/
 * Наиболее общий тип функции
 */
export declare type FunctionAnyType<T = any, R = any> = (...args: T[]) => R;

/**
 * Function type that accepts multiple arguments of type T and returns type R/
 * Тип функции с переменными аргументами
 */
export declare type FunctionArgs<T, R> = (...args: T[]) => R;

/**
 * Function type that returns a value of type R/
 * Тип функции, возвращающей значение типа R
 */
export declare type FunctionReturn<R = any> = () => R;

/** Function type that returns void/ Тип функции, возвращающей void */
export declare type FunctionVoid = () => void;

/**
 * Base class for working with geographic data.
 *
 * Базовый класс для работы с географическими данными.
 */
export declare class Geo {
    private static storage;
    private static location;
    private static item;
    private static language;
    private static timezone;
    /**
     * Information about the current country.
     *
     * Информация об текущей стране.
     */
    static get(): GeoItemFull;
    /**
     * Current country.
     *
     * Текущая страна.
     */
    static getCountry(): string;
    /**
     * Current language.
     *
     * Текущий язык.
     */
    static getLanguage(): string;
    /**
     * Full format according to the standard.
     *
     * Полный формат согласно стандарту.
     */
    static getStandard(): string;
    /**
     * Returns the first day of the week.
     *
     * Возвращает первый день недели.
     */
    static getFirstDay(): string;
    /**
     * Full format.
     *
     * Полный формат.
     */
    static getLocation(): string;
    /**
     * Obtaining processed data.
     *
     * Получение обработанных данных.
     */
    static getItem(): GeoItemFull;
    /**
     * Returns the full list of countries.
     *
     * Возвращает полный список стран.
     */
    static getList(): GeoItem[];
    /**
     * Returns the data about the country by its full code.
     *
     * Возвращает данные о стране по ее полному коду.
     * @param code country code, full form language-country or one of them/
     * код страны, полный вид язык-страна или один из них
     */
    static getByCode(code?: string): GeoItemFull;
    /**
     * Returns the full data by language and country.
     *
     * Возвращает полные данные по языку и стране.
     * @param code string in the form of language-country/ строка в виде язык-страна
     */
    static getByCodeFull(code: string): GeoItem | undefined;
    /**
     * Returns the full data by country.
     *
     * Возвращает полные данные по стране.
     * @param country country/ страна
     */
    static getByCountry(country: string): GeoItem | undefined;
    /**
     * Returns the full data by language.
     *
     * Возвращает полные данные по языку.
     * @param language language/ язык
     */
    static getByLanguage(language: string): GeoItem | undefined;
    /**
     * Retrieving the default timezone.
     *
     * Получение временной зоны по умолчанию
     */
    static getTimezone(): number;
    /**
     * Retrieving the default timezone (formatted view).
     *
     * Получение временной зоны по умолчанию (отформатированный вид).
     */
    static getTimezoneFormat(): string;
    /**
     * Determines the current country by its full name.
     *
     * Определяет текущую страну по ее полному названию.
     * @param code country code, full form language-country or one of them/
     * код страны, полный вид язык-страна или один из них
     */
    static find(code: string): GeoItemFull;
    /**
     * Returns a complete string with the country code and language.
     *
     * Возвращает полную строку с кодом страны и языка.
     * @param item object with data about the current country/
     * объект с данными об текущей стране
     */
    static toStandard(item: GeoItem): string;
    /**
     * Changes the data by the full code.
     *
     * Изменяет данные по полному коду.
     * @param code country code, full form language-country or one of them/
     * код страны, полный вид язык-страна или один из них
     * @param save save the result/ сохранить результат
     */
    static set(code: string, save?: boolean): void;
    /**
     * Changing the default timezone for transmitted dates.
     *
     * Изменение временной зоны по умолчанию для отправляемых дат
     * @param timezone new time zone/ новая временная зона
     */
    static setTimezone(timezone: number): void;
    /**
     * Determines the current location.
     *
     * Определяет текущую локацию.
     */
    private static findLocation;
    /**
     * Determines the current language.
     *
     * Определяет текущий язык.
     * @param code country code, full form language-country or one of them/
     * код страны, полный вид язык-страна или один из них
     */
    private static findLanguage;
    /**
     * Returns the country code by its full language-country.
     *
     * Возвращает код страны по ее полному язык-страна.
     * @param code country code/ код страна
     */
    private static toCountry;
    /**
     * Returns the language code by its full language-country.<br>
     * Возвращает код языка по его полному язык-страна.
     * @param code country code/ код страна
     */
    private static toLanguage;
    /**
     * Adding missing data.<br>
     * Добавление недостающих данных.
     * @param item object with data about the current country/
     * объект с данными об текущей стране
     */
    private static toFull;
}

export declare const GEO_FLAG_ICON_NAME = "f";

/**
 * Union type for date format options in geographic context/
 * Объединенный тип для опций формата даты в географическом контексте
 */
export declare type GeoDate = 'full' | 'datetime' | 'date' | 'year-month' | 'year' | 'month' | 'day' | 'day-month' | 'time' | 'hour-minute' | 'hour' | 'minute' | 'second';

/** First day of week code (0=Sunday, 1=Monday, 6=Saturday)/ Код первого дня недели (0=воскресенье, 1=понедельник, 6=суббота) */
export declare type GeoFirstDay = 1 | 6 | 0;

/**
 * Class for working with Flags.
 *
 * Класс для работы с Флагами.
 */
export declare class GeoFlag {
    protected code: string;
    static flags: Record<string, string>;
    /**
     * Constructor
     * @param code country and language code/ код страны и языка
     */
    constructor(code?: string);
    /**
     * Returns information about the country and its flag.
     *
     * Возвращает информацию о стране и её флаге.
     * @param code country code/ код страны
     */
    get(code?: string): GeoFlagItem | undefined;
    /**
     * Getting a link to the flag.
     *
     * Получение ссылки на флаг.
     * @param code country code/ код страны
     */
    getFlag(code?: string): string | undefined;
    /**
     * Getting a list of countries by an array of codes.
     *
     * Получение списка стран по массиву с кодами.
     * @param codes country code/ код страны
     */
    getList(codes?: string[]): GeoFlagItem[];
    /**
     * Getting a list of countries by an array of codes in national language.
     *
     * Получение списка стран по массиву с кодами на национальный язык.
     * @param codes country code/ код страны.
     */
    getNational(codes?: string[]): GeoFlagNational[];
    /**
     * To change the location.
     *
     * Изменить местоположение.
     * @param code country and language code/ код страны и языка
     */
    setCode(code: string): this;
    /**
     * Returns a special object for formatting.
     *
     * Возвращает специальный объект для работы с форматированием.
     */
    protected getLocation(): GeoIntl;
    /**
     * Returns a list of countries to retrieve data from.
     *
     * Возвращает список стран для получения данных.
     * @param codes country code/ код страны
     */
    protected getCodes(codes?: string[]): string[];
    /**
     * Getting the name of the language.
     *
     * Получение названия языка.
     * @param data object with information of data/ объект с информацией данных
     */
    protected getLanguage(data: GeoItemFull): string;
    /**
     * Getting the name of the country.
     *
     * Получение названия страны.
     * @param data object with information of data/ объект с информацией данных
     */
    protected getCountry(data: GeoItemFull): string;
}

/** Geographic flag item for country flag display/ Элемент географического флага для отображения флага страны */
export declare interface GeoFlagItem {
    /** Language name/ Название языка */
    language: string;
    /** Country name/ Название страны */
    country: string;
    /** Standard locale code/ Стандартный код локали */
    standard: string;
    /** Flag icon identifier/ Идентификатор иконки флага */
    icon?: string;
    /** Display label/ Отображаемая метка */
    label: string;
    /** Value for selection/ Значение для выбора */
    value: string;
}

/**
 * Extended geographic flag item with national language information/
 * Расширенный элемент географического флага с информацией о национальном языке
 */
export declare interface GeoFlagNational extends GeoFlagItem {
    /** Description in national language/ Описание на национальном языке */
    description: string;
    /** Language name in national language/ Название языка на национальном языке */
    nationalLanguage: string;
    /** Country name in national language/ Название страны на национальном языке */
    nationalCountry: string;
}

/** Hour format type (12-hour or 24-hour)/ Тип формата часов (12-часовой или 24-часовой) */
export declare type GeoHours = '12' | '24';

/**
 * The Intl namespace object contains several constructors as well as functionality common
 * to the internationalization constructors and other language sensitive functions. Collectively,
 * they comprise the ECMAScript Internationalization API, which provides language sensitive
 * string comparison, number formatting, date and time formatting, and more
 *
 * Объект Intl является пространством имён для API интернационализации ECMAScript, предоставляющим
 * языка-зависимое сравнение строк, форматирование чисел и дат со временем. Конструкторы объектов
 * Collator, NumberFormat и DateTimeFormat являются свойствами объекта Intl. На этой странице
 * описаны эти свойства, а также общая функциональность конструкторов интернационализации и других
 * языка-зависимых функций
 */
export declare class GeoIntl {
    /**
     * Returns an instance of the class according to the specified country code.
     *
     * Возвращает экземпляр класса по указанному коду страны.
     * @param code country code, full form language-country or one of them/
     * код страны, полный вид язык-страна или один из них
     */
    static getInstance(code?: string): GeoIntl;
    private readonly geo;
    /**
     * Constructor
     * @param code country code, full form language-country or one of them/
     * код страны, полный вид язык-страна или один из них
     */
    constructor(code?: string);
    /**
     * Returns country code and language.
     *
     * Возвращает код страны и языка.
     */
    getLocation(): string;
    /**
     * Returns the first day of the week.
     *
     * Возвращает первый день недели.
     */
    getFirstDay(): string;
    /**
     * The consistent translation of language, region and script display names.
     *
     * Последовательный перевод отображаемых названий языка, региона и скрипта.
     * @param value the code to provide depends on the type/ предоставляемый код зависит от типа
     * @param typeOptions an object with some or all of the following properties/
     * объект с некоторыми или всеми из следующих свойств
     */
    display(value?: string, typeOptions?: Intl.DisplayNamesOptions['type'] | Intl.DisplayNamesOptions): string;
    /**
     * Get display names of language.
     *
     * Получить отображаемые имена языка.
     * @param value the code to provide depends on the type/ предоставляемый код зависит от типа
     * @param style the formatting style to use/ используемый стиль форматирования
     */
    languageName(value?: string, style?: Intl.RelativeTimeFormatStyle): string;
    /**
     * Get display names of region.
     *
     * Получить отображаемые имена региона.
     * @param value the code to provide depends on the type/ предоставляемый код зависит от типа
     * @param style the formatting style to use/ используемый стиль форматирования
     */
    countryName(value?: string, style?: Intl.RelativeTimeFormatStyle): string;
    /**
     * The method returns a string containing the full name in a specific format.
     *
     * Метод возвращает строку, содержащую полное имя в определённом формате.
     * @param last last name/ фамилию
     * @param first first name/ имя
     * @param surname surname middle name (optional)/ отчество
     * @param short shorten the names/ сократить названия
     */
    fullName(last: string, first: string, surname?: string, short?: boolean): string;
    /**
     * In basic use without specifying a locale, a formatted string.
     *
     * При обычном использовании без указания локали форматированная строка.
     * @param value a number, bigint, or string, to format/ число для форматирования
     * @param options an object with some or all properties/ объект с некоторыми
     * или всеми свойствами
     */
    number(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /**
     * Decimal point symbol.
     *
     * Символ десятичной точки.
     */
    decimal(): string;
    /**
     * Currency formatting.
     *
     * Форматирование валюты.
     * @param value a number, bigint, or string, to format/ число для форматирования
     * @param currencyOptions the currency to use in currency formatting/
     * валюта для использования в форматировании валюты
     * @param numberOnly do not display the currency symbol/ не выводить значок валюты
     */
    currency(value: NumberOrString, currencyOptions?: string | Intl.NumberFormatOptions, numberOnly?: boolean): string;
    /**
     * Returns the currency symbol if it exists, otherwise the currency code.
     *
     * Возвращает символ для валюты, если он есть, или сам код валюты.
     * @param currency the currency to use in currency formatting/
     * валюта для использования в форматировании валюты
     * @param currencyDisplay how to display the currency in currency formatting/
     * как отобразить валюту в формате валюты
     */
    currencySymbol(currency: string, currencyDisplay?: keyof Intl.NumberFormatOptionsCurrencyDisplayRegistry): string;
    /**
     * Unit formatting.
     * If the style is 'unit', a unit property must be provided.
     *
     * Форматирование юнитов.
     * @param value a number, bigint, or string, to format/ число для форматирования
     * @param unitOptions the unit to use in unit formatting/ блок для использования
     * в форматировании блока
     */
    unit(value: NumberOrString, unitOptions?: string | Intl.NumberFormatOptions): string;
    /**
     * Возвращает отформатированный размер файла
     * @param value a number, bigint, or string, to format /<br>число для форматирования
     * @param unitOptions the unit to use in unit formatting /<br>блок для использования
     * в форматировании блока
     */
    sizeFile(value: NumberOrString, unitOptions?: 'byte' | 'kilobyte' | 'megabyte' | 'gigabyte' | 'terabyte' | 'petabyte' | Intl.NumberFormatOptions): string;
    /**
     * Number as a percentage.
     *
     * Число в виде процента.
     * @param value a number, bigint, or string, to format/ число для форматирования
     * @param options an object with some or all properties/ объект с некоторыми или всеми свойствами
     */
    percent(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /**
     * Number as a percentage (unit).
     *
     * Число в виде процента (единица).
     * @param value a number, bigint, or string, to format/ число для форматирования
     * @param options an object with some or all properties/
     * объект с некоторыми или всеми свойствами
     */
    percentBy100(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /**
     * Применять форматирование, учитывающее множественное число, и языковые правила, связанные с множественным числом
     * @param value a number, bigint, or string, to format/ число для форматирования
     * @param words list of words for formatting (in the format one|two|few|many|other|zero)/
     * список слов для форматирования (в формате `one|two|few|many|other|zero`)
     * @param options Property for PluralRules/ свойство для PluralRules
     * @param optionsNumber an object with some or all properties/ объект с некоторыми или всеми свойствами
     */
    plural(value: NumberOrString, words: string, options?: Intl.PluralRulesOptions, optionsNumber?: Intl.NumberFormatOptions): string;
    /**
     * Enables language-sensitive date and time formatting.
     *
     * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
     * @param value the date to format/ дата для форматирования
     * @param type type of data format/ тип формата data
     * @param styleOptions the representation of the month/ представление месяца
     * @param hour24 whether to use 12-hour time/ использовать ли 12-часовое время
     */
    date(value: NumberOrStringOrDate, type?: GeoDate, styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions, hour24?: boolean): string;
    /**
     * Enables language-sensitive relative time formatting.
     *
     * Включает форматирование относительного времени с учетом языка.
     * @param value a number, bigint, or string, to format/ число для форматирования
     * @param styleOptions the length of the internationalized message/
     * длина интернационализированного сообщения
     * @param todayValue current day/ текущий день
     */
    relative(value: NumberOrStringOrDate, styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions, todayValue?: Date): string;
    /**
     * Enables language-sensitive relative time formatting
     * Including the ability to add a limit to output the standard time format if the value
     * exceeds the allowable limit.
     *
     * Включает форматирование относительного времени с учетом языка.
     * Включая возможность добавления лимита, чтобы выводить уже стандартный формат времени,
     * если значение вышло за пределы допустимого.
     * @param value a number, bigint, or string, to format/ число для форматирования
     * @param limit values that determine the output limit (values per day)/
     * значения, по которым определяем предел вывода (значения в день)
     * @param todayValue current day/ текущий день
     * @param relativeOptions the length of the internationalized message/
     * длина интернационализированного сообщения
     * @param dateOptions the representation of the month/ представление месяца
     * @param type type of data format/ тип формата data
     * @param hour24 whether to use 12-hour time/ использовать ли 12-часовое время
     */
    relativeLimit(value: NumberOrStringOrDate, limit: number, todayValue?: Date, relativeOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions, dateOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions, type?: GeoDate, hour24?: boolean): string;
    /**
     * Возвращает отформатированное значение времени, прошедшего с момента события
     * @param value a number, bigint, or string, to format/ число для форматирования
     * @param unit time unit/ единица времени
     * @param styleOptions additional option or formatting style/ дополнительная опция или стиль форматирования
     */
    relativeByValue(value: NumberOrString, unit: Intl.RelativeTimeFormatUnit, styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions): string;
    /**
     * Names of months.<br>
     * Названия месяцев.
     * @param value the date to format/ дата для форматирования
     * @param style the representation of the month/ представление месяца
     */
    month(value?: NumberOrStringOrDate, style?: Intl.DateTimeFormatOptions['month']): string;
    /**
     * Array to list of months.
     *
     * Массив в список месяцев.
     * @param style the representation of the month/ представление месяца
     */
    months(style?: Intl.DateTimeFormatOptions['month']): ItemValue<number | undefined>[];
    /**
     * Returns names of days of the week.
     *
     * Возвращает названия дней недели.
     * @param value the date to format/ дата для форматирования
     * @param style the representation of the weekday/ представление о дне недели
     */
    weekday(value?: NumberOrStringOrDate, style?: Intl.DateTimeFormatOptions['weekday']): string;
    /**
     * An array of the list of names of the days of the week.
     *
     * Массив из списка названий дней недели.
     * @param style the representation of the weekday/ представление о дне недели
     */
    weekdays(style?: Intl.DateTimeFormatOptions['weekday']): ItemValue<number | undefined>[];
    /**
     * Time.
     *
     * Время.
     * @param value the date to format/ дата для форматирования
     */
    time(value: NumberOrStringOrDate): string;
    /**
     * Sorts strings taking into account the characteristics of countries.
     *
     * Сортирует строки с учетом особенностей стран.
     * @param data an array with data/ массив с данными
     * @param compareFn a function for sorting/ функция для сортировки
     */
    sort<T>(data: T[], compareFn?: (a: T, b: T) => [string, string]): T[];
    /**
     * Checks if the Intl object is available.
     *
     * Проверяет доступность объекта Intl.
     */
    private hasIntl;
    /**
     * Checks if the Intl.DateTimeFormat object is available.
     *
     * Проверяет доступность объекта Intl.DateTimeFormat.
     */
    private hasIntlDateTimeFormat;
    /**
     * The object enables language-sensitive number formatting.
     *
     * Объект включает форматирование чисел с учетом языка.
     * @param options an object with some or all properties/
     * объект с некоторыми или всеми свойствами
     */
    private numberObject;
    /**
     * Returns options for data according to its type.
     *
     * Возвращает options для data по его типу.
     * @param type type of data format/ тип формата data
     * @param display the representation of the month/ представление месяца
     */
    private dateOptions;
}

/** Geographic item interface for country and language data/ Интерфейс географического элемента для данных страны и языка */
export declare interface GeoItem {
    /** Country code/ Код страны */
    country: string;
    /** Alternative country codes/ Альтернативные коды стран */
    countryAlternative?: string[];
    /** Language code/ Код языка */
    language: string;
    /** Alternative language codes/ Альтернативные коды языков */
    languageAlternative?: string[];
    /** First day of week/ Первый день недели */
    firstDay?: string | null;
    /** Timezone/ Часовой пояс */
    zone?: string | null;
    /** Phone country code/ Телефонный код страны */
    phoneCode?: string;
    /** Phone code for domestic calls/ Телефонный код для внутренних звонков */
    phoneWithin?: string;
    /** Phone number mask/ Маска телефонного номера */
    phoneMask?: string | string[];
    /** Name format pattern/ Шаблон формата имени */
    nameFormat?: 'fl' | 'fsl' | 'lf' | 'lsf' | string;
}

/** Extended geographic item with required fields/ Расширенный географический элемент с обязательными полями */
export declare interface GeoItemFull extends Omit<GeoItem, 'firstDay'> {
    /** Standard locale code/ Стандартный код локали */
    standard: string;
    /** First day of week (required)/ Первый день недели (обязательный) */
    firstDay: string;
}

/**
 * A class for storing and processing phone number masks.
 *
 * Класс для хранения и обработка маски телефона.
 */
export declare class GeoPhone {
    protected static list?: GeoPhoneValue[];
    protected static map?: Record<string, GeoPhoneMap>;
    /**
     * Getting an object with information about the phone code and country.
     *
     * Получение объекта с информацией о телефонном коде и стране.
     * @param code country and language code/ код страны и языка
     */
    static get(code: string): GeoPhoneValue | undefined;
    /**
     * Getting information by phone.
     *
     * Получение информации по телефону.
     * @param phone phone number/ номер телефон
     */
    static getByPhone(phone: string): GeoPhoneMapInfo;
    /**
     * Retrieves complete mask data by country code.
     *
     * Получает полные данные о маске по коду страны.
     * @param code country and language code/ код страны и языка
     */
    static getByCode(code: string): GeoPhoneMap | undefined;
    /**
     * We get an array from a list of all phone numbers.
     *
     * Получаем массив из списка всех телефонных кодов.
     */
    static getList(): GeoPhoneValue[];
    /**
     * We get a map of a tree, sorted by its code.
     *
     * Получаем карту дерева, отсортированную по его коду.
     */
    static getMap(): Record<string, GeoPhoneMap>;
    /**
     * Convert to phone mask.
     *
     * Преобразовать в маску телефона.
     * @param phone phone number/ номер телефон
     * @param masks a mask to transform a phone number/ маска для преобразования номер телефон
     */
    static toMask(phone: string, masks?: string[]): string | undefined;
    /**
     * Deletes the country code from the input number.
     *
     * Удаляет код страны по входному номеру.
     * @param phone phone number/ номер телефон
     */
    static removeZero(phone: string): string;
    /**
     * Returns the symbol by the internal country code.
     *
     * Возвращает символ по коду внутри страны.
     * @param within internal country code/ код внутри страны
     */
    protected static getWithinSymbol(within: number | string): string;
    /**
     * Deletes all characters that do not belong to the mask.
     *
     * Удаляет все символы, не относящиеся к маске.
     * @param mask A mask to transform a phone number/ маска для преобразования номер телефон
     */
    protected static getUnnecessaryLength(mask: string): number;
    /**
     * Creating a list for the map.
     *
     * Формирование списка для карты.
     */
    protected static makeList(): void;
    /**
     * Creating a map for search.
     *
     * Создание карты для поиска.
     */
    protected static makeMap(): void;
    /**
     * The method parses a string argument and returns a floating point number.
     *
     * Метод принимает строку в качестве аргумента и возвращает десятичное число.
     * @param value the value to parse/ текстовая строка
     */
    protected static toNumber(value: string): string[];
    /**
     * Converts the phone to a standard.
     *
     * Преобразовывает телефон в стандарт.
     * @param phone phone number/ номер телефон
     * @param mask a mask to transform a phone number/ маска для преобразования номер телефон
     */
    protected static toStandard(phone: string, mask: string): string;
    /**
     * Replaces the first character with the internal country code
     *
     * Заменяет первый символ на код внутри страны.
     * @param mask a mask to transform a phone number/ маска для преобразования номер телефон
     * @param within internal country code/ код внутри страны
     */
    protected static toWithin(mask: string, within: number | string): string;
}

export declare interface GeoPhoneMap {
    items: GeoPhoneValue[];
    info: GeoPhoneValue | undefined;
    value: string | undefined;
    mask: string[];
    maskFull: string[];
    next: Record<string, GeoPhoneMap>;
}

export declare interface GeoPhoneMapInfo {
    item?: GeoPhoneMap;
    phone?: string;
}

export declare interface GeoPhoneValue {
    phone: number;
    within: number;
    mask: string[];
    value: string;
}

/** Timezone display style options/ Опции стиля отображения часового пояса */
export declare type GeoTimeZoneStyle = 'minute' | 'hour' | 'ISO8601' | 'RFC';

/**
 * Gets a list of attributes of an element.
 *
 * Получает список атрибутов у элемента.
 * @param element selectors for matching or an Element/ селекторов для сопоставления или Element
 */
export declare function getAttributes<E extends ElementOrWindow>(element?: ElementOrString<E>): Record<string, string | undefined>;

/**
 * The method retrieves drag data (as a string) for the specified type.
 * If the drag operation does not include data, this method returns an empty string.
 *
 * Метод извлекает данные перетаскивания (в виде строки) для указанного типа.
 * @param event the ClipboardEvent interface represents events providing information
 * related to modification of the clipboard, that is cut, copy, and paste events/ интерфейс
 * ClipboardEvent представляет события, предоставляющие информацию, связанную с изменением буфера обмена,
 * этими события являются cut, copy и paste.
 */
export declare function getClipboardData(event?: ClipboardEvent): Promise<string>;

/**
 * Returns an array of values for a specific column in the input array.
 *
 * Возвращает массив значений для определенного столбца входного массива.
 * @param array a one array or an array of objects from which to pull a column of values from/
 * многомерный массив или массив объектов, из которого будет производиться выборка значений
 * @param column the column of values to return/ ключ столбца, значения которого нужно вернуть
 */
export declare function getColumn<T, K extends keyof T>(array: ObjectOrArray<T>, column: K): (T[K] | undefined)[];

/**
 * Returns the current date in the specified format.
 *
 * Возвращает текущую дату в указанном формате.
 * @param format type of date format for output/ тип формата даты вывода
 */
export declare function getCurrentDate(format?: GeoDate): string;

/**
 * Returns the first Element in the document that matches the specified selector or the element.
 *
 * Возвращает первый Element документа, который соответствует указанному селектору или саму element.
 * @param element selectors for matching or an Element/ селекторов для сопоставления или Element
 */
export declare function getElement<E extends ElementOrWindow, R extends Exclude<E, Window>>(element?: ElementOrString<E>): R | undefined;

/**
 * Returns the identifier (ID) of the element or creates it if the element has no ID.
 *
 * Возвращает идентификатор (ID) элемента или создает его, если у элемента нет ID.
 * @param element element from which you obtain an ID/ элемент, с которого получаете ID
 * @param selector selectors for matching/ селекторов для сопоставления
 */
export declare function getElementId<E extends ElementOrWindow>(element?: ElementOrString<E>, selector?: string): string;

/**
 * Get image element from HTMLImageElement or string source.
 *
 * Получить элемент изображения из HTMLImageElement или строкового источника.
 * @param image image element or string source/ элемент изображения или строковый источник
 */
export declare function getElementImage(image: HTMLImageElement | string): HTMLImageElement | undefined;

/**
 * Returns the value of an element by its key.
 *
 * Возвращает значение элемента по его ключу.
 * @param element checked element/ проверяемый элемент
 * @param index index at which we retrieve values/ индекс, по которому получаем значения
 * @param defaultValue returns this parameter if the value is missing/ возвращает этот параметр,
 * если значение отсутствует
 */
export declare function getElementItem<T extends ElementOrWindow, K extends keyof T, D>(element: ElementOrString<T>, index: K | string, defaultValue?: D): T[K] | D | undefined;

/**
 * Returns window or element.
 *
 * Возвращает окно или элемент.
 * @param element selectors for matching or an Element/ селекторов для сопоставления или Element
 */
export declare function getElementOrWindow<E extends ElementOrWindow>(element?: ElementOrString<E>): E | undefined;

/**
 * Creates a case-insensitive regular expression for an exact match of a phrase (without anchors).
 *
 * Создает регистронезависимое регулярное выражение для точного совпадения фразы (без якорей).
 * @param search search string / строка поиска
 */
export declare function getExactSearchExp(search: string): RegExp;

/**
 * The object is used for matching text with a pattern.
 *
 * Конструктор создаёт объект регулярного выражения для сопоставления текста с шаблоном.
 * @param value test for replacement/ тест для замены
 * @param flags если определён, может принимать любую комбинацию нижеследующих значений:
 * g - глобальное сопоставление,
 * i - игнорирование регистра при сопоставлении
 * m - сопоставление по нескольким строкам.
 * @param pattern Regular expression text in which the value :value will be replaced with the optimized value of value/
 * Текст регулярного выражения, в котором значение :value заменится на оптимизированное значение value
 */
export declare function getExp(value: string, flags?: string, pattern?: string): RegExp;

/**
 * Returns data by their path.
 *
 * Возвращает данные по их пути.
 * @param item object for work/ объект для работы
 * @param path data path/ путь к данным
 */
export declare function getItemByPath<T extends Record<string, any>, R = string>(item: T, path: string): R | undefined;

/**
 * Returns the pressed key.
 *
 * Возвращает нажатую клавишу.
 * @param event event object/ объект события
 */
export declare function getKey(event: KeyboardEvent): string;

/**
 * Returns the length of all elements in an array.
 *
 * Возвращает длину всех элементов в виде массива.
 * @param value input value/ входное значение
 */
export declare function getLengthOfAllArray(value: ObjectOrArray<string>): number[];

/**
 * Searches for the longest string in the array and returns its length.
 *
 * Ищет самую длинную строку в массиве и возвращает её длину.
 * @param data array with data/ массив с данными
 */
export declare function getMaxLengthAllArray(data: ObjectOrArray<string>): number;

/**
 * Searches for the shortest string in the array and returns its length.
 *
 * Ищет самую короткую строку в массиве и возвращает её длину.
 * @param data array with data/ массив с данными
 */
export declare function getMinLengthAllArray(data: ObjectOrArray<string>): number;

/**
 * Returns the position of the mouse cursor or the location of the click.
 *
 * Возвращает позицию курсора мыши или место нажатия.
 * @param event event object/ объект события
 */
export declare function getMouseClient(event: MouseEvent & TouchEvent): ImageCoordinator;

/**
 * Returns the position of the mouse cursor or the location of the click (X).
 *
 * Возвращает позицию курсора мыши или место нажатия (X).
 * @param event event object/ объект события
 */
export declare function getMouseClientX(event: MouseEvent & TouchEvent): number;

/**
 * Returns the position of the mouse cursor or the location of the click (Y).
 *
 * Возвращает позицию курсора мыши или место нажатия (Y).
 * @param event event object/ объект события
 */
export declare function getMouseClientY(event: MouseEvent & TouchEvent): number;

/**
 * Returns a new object with keys from the keys list.
 *
 * Возвращает новый объект с ключами из списка keys.
 * @param data object with data/ объект с данными
 * @param keys list of keys/ список ключей
 */
export declare function getObjectByKeys(data: Record<string, any>, keys: string[]): Record<string, any>;

/**
 * Removes from the object all properties belonging to the exception type.
 *
 * Удаляет из объекта все свойства, принадлежащие к типу исключения.
 * @param data object for processing/ объект для обработки
 * @param exception exception value/ значение для исключения
 */
export declare function getObjectNoUndefined<T extends Record<string | number, any>>(data: T, exception?: any): T;

/**
 * Returns the object if the object’s values are set.
 *
 * Возвращает объект, если заданы значения объекта.
 * @param value let’s assume that this is an object/ предположим, что это объект
 */
export declare function getObjectOrNone<T>(value: T): T & Record<string, any>;

/**
 * Generates text.
 *
 * Генерирует текст.
 * @param min minimum word/ минимальное слово
 * @param max maximum word/ максимальное слово
 * @param symbol symbol for replacing a letter/ символ для замены буквы
 * @param lengthMin minimum word length/ минимальная длина слова
 * @param lengthMax maximum word length/ максимальная длина слова
 */
export declare function getRandomText(min: number, max: number, symbol?: string, lengthMin?: number, lengthMax?: number): string;

/**
 * Returns a string in the form of key-value.
 *
 * Возвращает строку в виде ключ-значение.
 * @param request data for conversion/ данные для преобразования
 * @param sign delimiter sign of key and value/ знак разделения ключа и значения
 * @param separator variable delimiter sign/ знак разделения переменных
 */
export declare function getRequestString(request: Record<string, any>, sign?: string, separator?: string): string;

/**
 * Builds a case-insensitive global `RegExp` for multi-word "contains all words" search.
 * Each word in the search string is escaped and wrapped in a lookahead `(?=.*?word)`,
 * so the result matches a string only if it contains every word (in any order).
 *
 * Строит регистро-независимое глобальное `RegExp` для поиска "содержит все слова".
 * Каждое слово из строки поиска экранируется и оборачивается в lookahead `(?=.*?слово)`,
 * поэтому результат совпадает только если строка содержит все слова (в любом порядке).
 * @param search search string with one or more space-separated words / строка поиска с одним или несколькими словами через пробел
 */
export declare function getSearchExp(search: string): RegExp;

/**
 * Creates a case-insensitive regular expression for a search by words (separating by space).
 *
 * Создает регистронезависимое регулярное выражение для поиска по словам (разделение пробелом).
 * @param search search string / строка поиска
 */
export declare function getSeparatingSearchExp(search: string): RegExp;

/**
 * Returns the unit of measurement for 1 step
 *
 * Возвращает единицу измерения для 1 шага
 * @param min minimum value/ минимальное значение
 * @param max maximum value/ максимальное значение
 */
export declare function getStepPercent(min: number | undefined, max: number): number;

/**
 * Returns the unit of measurement for a single step relative to the given value
 *
 * Возвращает единицу измерения одного шага относительно заданного значения
 * @param min minimum value/ минимальное значение
 * @param max maximum value/ максимальное значение
 */
export declare function getStepValue(min: number | undefined, max: number): number;

/**
 * Static utility class for storing and retrieving application-wide global data.
 *
 * Статический служебный класс для хранения и получения глобальных данных приложения.
 */
export declare class Global {
    /**
     * Returns the value by its name.
     *
     * Возвращает значение по его имени.
     * @param name property name/ название свойства
     */
    static get<R = any>(name: string): R;
    /**
     * Adds data, this method works only once.
     *
     * Добавляет данные, этот метод работает только 1 раз.
     * @param data global data/ глобальные данные
     */
    static add(data: Record<string, any>): void;
}

/**
 * Quick change of scroll at the element to the required element.
 *
 * Быстрое изменение скролла у элемента к нужному элементу.
 * @param selector the selected an element, the scroll position of which needs to be changed/
 * выбранный элемент, положение скролла которого надо изменить
 * @param elementTo the element to which you need to scroll/ элемент, до которого надо проскроллить
 * @param elementCenter the element that needs to be centered/ элемент, который надо центрировать
 */
export declare function goScroll(selector: string, elementTo: HTMLElement | undefined, elementCenter?: HTMLElement): void;

/**
 * Smooth scrolling to the element.
 *
 * Плавная прокрутка до элемента.
 * @param element target element / целевой элемент
 * @param options scroll options / параметры прокрутки
 * @param shift shift from the top / смещение сверху
 */
export declare function goScrollSmooth<E extends HTMLElement>(element: E, options?: ScrollIntoViewOptions, shift?: number): void;

/**
 * Scrolls the container to make the target element visible.
 *
 * Прокручивает контейнер, чтобы целевой элемент стал видимым.
 * @param element container element/ элемент контейнера
 * @param elementTo target element/ целевой элемент
 * @param behavior scroll behavior/ режим прокрутки
 */
export declare function goScrollTo(element?: HTMLElement, elementTo?: HTMLElement, behavior?: ScrollBehavior): void;

/**
 * The method invokes the native sharing mechanism of the device as part of the Web Share API.
 * If the Web Share API is not supported by the browser or the data cannot be shared, the method returns false.
 *
 * Метод вызывает встроенный механизм обмена данными мобильного устройства или операционной системы.
 * Если Web Share API не поддерживается браузером или данные не могут быть переданы, метод возвращает false.
 * @param data an object containing data to share/ объект, содержащий данные для обмена
 * @returns true if the data was shared successfully/ true, если данные были успешно переданы
 */
export declare function handleShare(data: ShareData): Promise<boolean>;

/**
 * Working with data stored in hash.
 *
 * Работа с данными сохраненными в хеш.
 */
export declare class Hash {
    private static hash;
    private static watch;
    private static block;
    /**
     * Get data from hash.
     *
     * Получение данных из хэша.
     * @param name variable names/ названия переменных
     * @param defaultValue value or function to change data/ значение или функция для изменения данных
     */
    static get<T>(name: string, defaultValue?: T | (() => T)): T;
    /**
     * Change data in hash.
     *
     * Изменение данных в хэше.
     * @param name variable names/ названия переменных
     * @param callback value or function to change data/ значение или функция для изменения данных
     */
    static set<T>(name: string, callback: T | (() => T)): void;
    /**
     * Adding an event when data is changed.
     *
     * Добавление события при изменении данных.
     * @param name variable names/ названия переменных
     * @param callback the function is called when the data is changed/ функция вызывается при изменении данных
     */
    static addWatch<T>(name: string, callback: (value: T) => void): void;
    /**
     * Removing an event when data is changed.
     *
     * Удаление события при изменении данных.
     * @param name variable names/ названия переменных
     * @param callback the function is called when the data is changed/ функция вызывается при изменении данных
     */
    static removeWatch<T>(name: string, callback: (value: T) => void): void;
    /**
     * Update hash variable from URL string.
     *
     * Обновление переменной хэша из строки URL.
     */
    static reload(): void;
    /**
     * Obtaining data from the URL string.
     *
     * Получение данных из строки URL.
     */
    private static getLocation;
    /**
     * Update hash string in URL.
     *
     * Обновление строки хэша в URL.
     */
    private static update;
    /**
     * Calling all functions whose data has changed.
     *
     * Вызов всех функций, у которых были изменены данные.
     * @param location fresh data/ свежий данные
     */
    private static makeWatch;
}

/**
 * Class for managing icons.
 *
 * Класс для управления иконками.
 */
export declare class Icons {
    protected static icons: Record<string, IconsItem>;
    protected static url: string;
    /**
     * Checks if the given icon is in the list of connected icons.
     *
     * Проверяет, есть ли данная иконка в списке подключенных иконок.
     * @param index icon name/ название иконки
     */
    static is(index: string): boolean;
    /**
     * Returns the icon by the name.
     *
     * Возвращает иконку по названию.
     * @param index icon name/ название иконки
     * @param url path to the storage location of the icon, if the icon does not exist/
     * путь к месту хранения иконки, если иконка не существует
     * @param wait waiting time for picture loading/
     * время ожидания загрузки картинки
     */
    static get(index: string, url?: string, wait?: number): Promise<string>;
    /**
     * Returns a list of names of all registered icons.
     *
     * Возвращает список названий всех зарегистрированных иконок.
     */
    static getNameList(): string[];
    /**
     * Returns a global link.
     *
     * Возвращает глобальную ссылку.
     */
    static getUrlGlobal(): string;
    /**
     * Adding custom icons.
     *
     * Добавление пользовательских иконок.
     * @param index icon name/ название иконки
     * @param file path to the file/ путь к файлу
     */
    static add(index: string, file: IconsItem): void;
    /**
     * Adding custom icons in loading mode.
     *
     * Добавление пользовательских иконок в режиме загрузки.
     * @param index icon name/ название иконки
     */
    static addLoad(index: string): void;
    /**
     * Adding custom global icons.
     *
     * Добавление пользовательских глобальных иконок.
     * @param index icon name/ название иконки
     * @param file path to the file/ путь к файлу
     */
    static addGlobal(index: string, file: string): void;
    /**
     * Adding an icon by the list.
     *
     * Добавление иконки по списку.
     * @param list list of icons/ список иконки
     */
    static addByList(list: Record<string, IconsItem>): void;
    /**
     * Changes the file path.
     *
     * Изменяет путь к файлу.
     * @param url new file path/ новый путь к файлу
     */
    static setUrl(url: string): void;
    /**
     * Returns the icon name.
     *
     * Возвращает название иконки.
     * @param index icon name/ название иконки
     */
    protected static getName(index: string): string;
    /**
     * Script execution delay.
     *
     * Задержка выполнения скрипта.
     */
    protected static wait(): Promise<void>;
}

export declare type IconsItem = string | Promise<string | any> | (() => Promise<string | any>);

/** Type for 2D coordinates/ Тип для 2D координат */
export declare type ImageCoordinator = {
    /** X-axis coordinate/ Координата по оси X */
    x: number;
    /** Y-axis coordinate/ Координата по оси Y */
    y: number;
};

/**
 * Checks if the value is in the current array.
 *
 * Проверяет, есть ли значение в текущем массиве.
 * @param array array for checking/ массив для проверки
 * @param value value to be checked/ проверяемое значение
 */
export declare function inArray<T>(array: T[], value: T): boolean;

/**
 * Initialization of data for scroll control.
 *
 * Инициализация данных для управления скроллом.
 */
export declare function initScrollbarOffset(): Promise<void>;

/**
 * Computes the intersection of arrays using keys for comparison.
 *
 * Вычислить пересечение массивов, сравнивая ключи.
 * @param data the array with master keys to check/ основной проверяемый массив
 * @param comparison arrays to compare keys against/ массивы, с которыми идёт сравнение
 */
export declare function intersectKey<T, KT extends keyof T, C, KC extends keyof C>(data?: T, comparison?: C): Record<KT & KC, T[KT]>;

/**
 * Checks if the API response is successful.
 *
 * Проверяет, является ли ответ API успешным.
 * @param data API response data/ данные ответа API
 */
export declare const isApiSuccess: <T>(data: ApiData<T>) => boolean;

/**
 * Checks if the values are arrays.
 *
 * Проверяет, являются ли значения массивами.
 * @param value input value/ входное значение
 */
export declare function isArray<T, R>(value: T): value is Extract<T, R[]>;

/**
 * Checks if the values of two objects are different.
 *
 * Проверяет, различаются ли значения двух объектов.
 * @param value current values/ текущие значения
 * @param old old values/ старые значения
 */
export declare function isDifferent<T>(value: ObjectItem<T>, old: ObjectItem<T>): boolean;

/**
 * Checks if the current environment is a data URL.
 *
 * Проверяет, является ли текущая среда URL-адресом данных.
 */
export declare function isDomData(): boolean;

/**
 * Проверяет, выполняется ли код в браузере, где доступен объект `window`.
 * Возвращает `true`, если `window` доступен, что означает, что код выполняется в браузере.
 *
 * Checks if the code is running in a browser where the `window` object is available.
 * Returns `true` if `window` is defined, indicating the code is running in a browser.
 *
 * @returns `true`, если выполняется в браузере, иначе `false`/ `true` if running in a browser, otherwise `false`
 */
export declare function isDomRuntime(): boolean;

/**
 * Checks if an element is visible (not hidden by CSS and is in the DOM).
 * An element can be off-screen and still be considered visible.
 *
 * Проверяет, является ли элемент видимым (не скрыт через CSS и находится в DOM).
 * Элемент может находиться за пределами экрана и при этом считаться видимым.
 * @param elementSelectors selectors for matching or an Element/ селекторов для сопоставления или Element
 * @returns true if the element is visible, otherwise false/ true, если элемент является видимым, иначе false
 */
export declare function isElementVisible<E extends ElementOrWindow>(elementSelectors?: ElementOrString<E>): boolean;

/**
 * Checks if the pressed key is Enter or Space.
 *
 * Проверяет, является ли нажатая клавиша Enter или Space.
 * @param event event object/ объект события
 * @param isInputElement whether the element is an input element/ является ли элемент полем ввода
 */
export declare const isEnter: (event: KeyboardEvent, isInputElement?: boolean) => boolean;

/**
 * Checks if the field is filled.
 *
 * Проверяет, заполнено ли поле.
 * @param value input value/ входное значение
 * @param zeroTrue if true, '0' is considered filled/ если true, то '0' считается заполненным
 */
export declare function isFilled<T>(value: T, zeroTrue?: boolean): value is Exclude<T, EmptyValue>;

/**
 * Checks if the value is an integer or a floating-point number.
 *
 * Проверяет, является ли значение числом или дробным числом.
 * @param value values for checking/ значения для проверки
 */
export declare function isFloat(value: any): boolean;

/**
 * Checks if the function is a callback function.
 *
 * Проверяет, является ли функция обратного вызова.
 * @param callback the value being checked/ проверяемое значение
 */
export declare function isFunction<T>(callback: T): callback is Extract<T, FunctionArgs<any, any>>;

/**
 * Checks if an element is still in the DOM tree.
 *
 * Проверяет, находится ли еще элемент в дереве DOM.
 * @param element selectors for matching or an Element/ селекторов для сопоставления или Element
 */
export declare function isInDom<E extends ElementOrWindow>(element?: ElementOrString<E>): boolean;

/**
 * Checks if the element is an input field or editable.
 *
 * Проверяет, является ли элемент полем ввода или редактируемым.
 * @param element element to check/ проверяемый элемент
 */
export declare const isInput: (element: HTMLElement | EventTarget | null) => boolean;

/**
 * Checks if the value is between integers.
 *
 * Проверяет, лежит ли значение между целыми числами.
 * @param value input value/ входное значение
 * @param between value for rounding/ значение для округления
 */
export declare function isIntegerBetween(value: number, between: number): boolean;

/**
 * Is the variable equal to null or undefined.
 *
 * Является ли переменная равной null или undefined.
 * @param value input value/ входное значение
 */
export declare function isNull<T>(value: T): value is Extract<T, Undefined>;

/**
 * Checks if the value is a number.
 *
 * Проверяет, является ли значение числом.
 * @param value values for checking/ значения для проверки
 */
export declare function isNumber(value: any): boolean;

/**
 * Checks if a value is an object.
 *
 * Проверяет, является ли значение объектом.
 * @param value input value/ входное значение
 */
export declare function isObject<T>(value: T): value is Extract<T, Record<any, any>>;

/**
 * Checks if the value is an object or not an array.
 *
 * Проверяет, является ли значение объектом и не является массивом.
 * @param value input value/ входное значение
 */
export declare function isObjectNotArray<T>(value: T): value is Exclude<Extract<T, Record<any, any>>, any[] | undefined | null>;

/**
 * Checks if value is in the array selected or if value equals selected, if selected is a string.
 *
 * Проверяет, есть ли value в массиве selected или равен ли value selected, если selected - строка.
 * @param value input value/ входное значение
 * @param selected array or string for comparison/ массив или строка для сравнения
 */
export declare function isSelected<T, S>(value: T, selected: T | T[] | S): boolean;

/**
 * Testing isSelected property for the entire list of values.
 *
 * Проверка свойства isSelected для всех значений списка.
 * @param values list of values for comparison/ список значений для сравнения
 * @param selected array or string for comparison/ массив или строка для сравнения
 */
export declare function isSelectedByList<T>(values: T | T[], selected: T | T[]): boolean;

/**
 * Checks if the Web Share API is supported in the current environment.
 *
 * Проверяет, поддерживается ли Web Share API в текущей среде.
 * @returns true if the Web Share API is supported/ true, если Web Share API поддерживается
 */
export declare function isShare(): boolean;

/**
 * Checks if the value is of type string.
 *
 * Проверяет, является ли значение типом строки.
 * @param value input value/ входное значение
 */
export declare function isString<T>(value: T): value is Extract<T, string>;

/**
 * Checks if object is Window.
 *
 * Проверяет, является ли объект Window.
 * @param element selectors for matching or an Element/ селекторов для сопоставления или Element
 */
export declare function isWindow<E>(element: E): element is Extract<E, Window>;

/**
 * Generic item type with index and value properties/
 * Дженерик тип элемента со свойствами index и value
 */
export declare type Item<V> = {
    /** Unique string identifier for the item/ Уникальный строковый идентификатор элемента */
    index: string;
    /** The actual value of the item/ Фактическое значение элемента */
    value: V;
};

/**
 * Generic record type for lists with string keys/
 * Дженерик тип записи для списков со строковыми ключами
 */
export declare type ItemList<T = any> = Record<string, T>;

/**
 * Generic item type with name and value properties/
 * Дженерик тип элемента со свойствами name и value
 */
export declare type ItemName<V> = {
    /** Name identifier (string or number)/ Идентификатор имени (строка или число) */
    name: string | number;
    /** The actual value of the item/ Фактическое значение элемента */
    value: V;
};

/**
 * Generic item type with label and value properties/
 * Дженерик тип элемента со свойствами label и value
 */
export declare type ItemValue<V> = {
    /** Display text for the item/ Отображаемый текст для элемента */
    label: string;
    /** The actual value of the item/ Фактическое значение элемента */
    value: V;
};

/**
 * Class for working with global loading.
 *
 * Класс для работы с глобальной загрузкой.
 */
export declare class Loading {
    /** Instance of the loading class / Экземпляр класса загрузки */
    protected static item: LoadingInstance;
    /**
     * Check if the loader is active now.
     *
     * Проверить, активен ли сейчас загрузчик.
     */
    static is(): boolean;
    /**
     * Get current loading value.
     *
     * Получить текущее значение загрузки.
     */
    static get(): number;
    /**
     * Get instance of the loading class.
     *
     * Получить экземпляр класса загрузки.
     */
    static getItem(): LoadingInstance;
    /**
     * Shows the loader.
     *
     * Показывает загрузчик.
     */
    static show(): void;
    /**
     * Hides the loader.
     *
     * Скрывает загрузчик.
     */
    static hide(): void;
    /**
     * Event registration to listen for data changes.
     *
     * Регистрация события для прослушивания изменений данных.
     * @param listener the object that receives a notification (an object that implements the
     * Event interface) when an event of the specified type occurs/ объект, который принимает
     * уведомление, когда событие указанного типа произошло
     * @param element element/ элемент
     */
    static registrationEvent(listener: EventListenerDetail<CustomEvent, LoadingDetail>, element?: ElementOrString<HTMLElement>): void;
    /**
     * Unregistration of an event.
     *
     * Отмена регистрации события.
     * @param listener the object that receives a notification (an object that implements the
     * Event interface) when an event of the specified type occurs/ объект, который принимает
     * уведомление, когда событие указанного типа произошло
     * @param element element/ элемент
     */
    static unregistrationEvent(listener: EventListenerDetail<CustomEvent, LoadingDetail>, element?: ElementOrString<HTMLElement>): void;
}

/**
 * Data for the loading event.
 *
 * Данные для события загрузки.
 */
export declare type LoadingDetail = {
    /** Loading status / Статус загрузки */
    loading: boolean;
};

/**
 * Class for working with global loading.
 *
 * Класс для работы с глобальной загрузкой.
 */
export declare class LoadingInstance {
    protected eventName: string;
    /** Current loading value / Текущее значение загрузки */
    protected value: number;
    /** Event item / Элемент события */
    protected event?: EventItem<Window, CustomEvent>;
    /** Registration list / Список регистрации */
    protected registrationList: LoadingRegistrationItem[];
    /**
     * Constructor
     * @param eventName name of the event for tracking loading/ название события для отслеживания загрузки
     */
    constructor(eventName?: string);
    /**
     * Check if the loader is active now.
     *
     * Проверить, активен ли сейчас загрузчик.
     * @returns returns true if the loader is active/ возвращает true, если загрузчик активен
     */
    is(): boolean;
    /**
     * Get current loading value.
     *
     * Получить текущее значение загрузки.
     * @returns returns the current loading value/ возвращает текущее значение загрузки
     */
    get(): number;
    /**
     * Shows the loader.
     *
     * Показывает загрузчик.
     */
    show(): void;
    /**
     * Hides the loader.
     *
     * Скрывает загрузчик.
     */
    hide(): void;
    /**
     * Event registration to listen for data changes.
     *
     * Регистрация события для прослушивания изменений данных.
     * @param listener the object that receives a notification (an object that implements the
     * Event interface) when an event of the specified type occurs/ объект, который принимает
     * уведомление, когда событие указанного типа произошло
     * @param element element/ элемент
     */
    registrationEvent(listener: EventListenerDetail<CustomEvent, LoadingDetail>, element?: ElementOrString<HTMLElement>): void;
    /**
     * Unregistration of an event.
     *
     * Отмена регистрации события.
     * @param listener the object that receives a notification (an object that implements the
     * Event interface) when an event of the specified type occurs/ объект, который принимает
     * уведомление, когда событие указанного типа произошло
     * @param element element/ элемент
     */
    unregistrationEvent(listener: EventListenerDetail<CustomEvent, LoadingDetail>, element?: ElementOrString<HTMLElement>): void;
    /**
     * Calls the event listener.
     *
     * Вызывает слушателя событий.
     */
    protected dispatch(): void;
}

/**
 * Registration item for the loading event.
 *
 * Элемент регистрации для события загрузки.
 */
export declare type LoadingRegistrationItem = {
    /** Event item / Элемент события */
    item: EventItem<Window, CustomEvent, LoadingDetail>;
    /** Event listener / Слушатель события */
    listener: EventListenerDetail<CustomEvent, LoadingDetail>;
    /** Element / Элемент */
    element?: ElementOrString<HTMLElement>;
};

/**
 * Unified class for managing all types of meta tags (standard HTML, Open Graph, Twitter Card).
 *
 * Унифицированный класс для управления всеми типами мета-тегов (стандартные HTML, Open Graph, Twitter Card).
 */
export declare class Meta extends MetaManager<MetaTag[]> {
    protected suffix?: string;
    protected og: MetaOg;
    protected twitter: MetaTwitter;
    /**
     * Creates an instance of Meta with integrated Open Graph and Twitter Card support.
     *
     * Создает экземпляр Meta с интегрированной поддержкой Open Graph и Twitter Card.
     */
    constructor();
    /**
     * Gets the MetaOg instance for advanced Open Graph operations.
     *
     * Получает экземпляр MetaOg для расширенных операций с Open Graph.
     */
    getOg(): MetaOg;
    /**
     * Gets the MetaTwitter instance for advanced Twitter Card operations.
     *
     * Получает экземпляр MetaTwitter для расширенных операций с Twitter Card.
     */
    getTwitter(): MetaTwitter;
    /**
     * Gets the page title without suffix.
     *
     * Получает заголовок страницы без суффикса.
     */
    getTitle(): string;
    /**
     * Gets the keywords meta tag.
     *
     * Получает мета-тег keywords.
     */
    getKeywords(): string;
    /**
     * Gets the description meta tag.
     *
     * Получает мета-тег description.
     */
    getDescription(): string;
    /**
     * Gets the Open Graph image URL.
     *
     * Получает URL изображения Open Graph.
     */
    getImage(): string;
    /**
     * Gets the canonical URL.
     *
     * Получает канонический URL.
     */
    getCanonical(): string;
    /**
     * Gets the robots meta tag value.
     *
     * Получает значение мета-тега robots.
     */
    getRobots(): MetaRobots;
    /**
     * Gets the author meta tag.
     *
     * Получает мета-тег author.
     */
    getAuthor(): string;
    /**
     * Gets the Open Graph site name.
     *
     * Получает название сайта Open Graph.
     */
    getSiteName(): string;
    /**
     * Gets the Open Graph locale.
     *
     * Получает локаль Open Graph.
     */
    getLocale(): string;
    /**
     * Sets the page title (with suffix) and updates Open Graph and Twitter Card titles.
     *
     * Устанавливает заголовок страницы (с суффиксом) и обновляет заголовки Open Graph и Twitter Card.
     * @param title page title / заголовок страницы
     */
    setTitle(title: string): this;
    /**
     * Sets the keywords meta tag.
     *
     * Устанавливает мета-тег keywords.
     * @param keywords keywords as string or array / ключевые слова в виде строки или массива
     */
    setKeywords(keywords: string | string[]): this;
    /**
     * Sets the description meta tag.
     *
     * Устанавливает мета-тег description.
     * @param description page description / описание страницы
     */
    setDescription(description: string): this;
    /**
     * Sets the image for Open Graph and Twitter Card.
     *
     * Устанавливает изображение для Open Graph и Twitter Card.
     * @param image image URL / URL изображения
     */
    setImage(image: string): this;
    /**
     * Sets the canonical URL and updates Open Graph and Twitter Card URLs.
     *
     * Устанавливает канонический URL и обновляет URL для Open Graph и Twitter Card.
     * @param canonical canonical URL / канонический URL
     */
    setCanonical(canonical: string): this;
    /**
     * Sets the robots meta tag.
     *
     * Устанавливает мета-тег robots.
     * @param robots robots directive / директива robots
     */
    setRobots(robots: MetaRobots): this;
    /**
     * Sets the author meta tag.
     *
     * Устанавливает мета-тег author.
     * @param author author name / имя автора
     */
    setAuthor(author: string): this;
    /**
     * Sets the site name for Open Graph and Twitter Card.
     *
     * Устанавливает название сайта для Open Graph и Twitter Card.
     * @param siteName site name / название сайта
     */
    setSiteName(siteName: string): this;
    /**
     * Sets the locale for Open Graph.
     *
     * Устанавливает локаль для Open Graph.
     * @param locale locale (e.g. 'en_US', 'ru_RU') / локаль (например, 'en_US', 'ru_RU')
     */
    setLocale(locale: string): this;
    /**
     * Sets the suffix to append to page title.
     *
     * Устанавливает суффикс для добавления к заголовку страницы.
     * @param suffix title suffix (e.g. 'My Site') / суффикс заголовка (например, 'Мой Сайт')
     */
    setSuffix(suffix?: string): void;
    /**
     * Generates the complete HTML for all meta-tags including Open Graph and Twitter Card.
     *
     * Генерирует полный HTML для всех мета-тегов, включая Open Graph и Twitter Card.
     */
    html(): string;
    /**
     * Gets the formatted suffix with separator.
     *
     * Получает отформатированный суффикс с разделителем.
     */
    protected getSuffix(): string;
}

declare type MetaList<T extends readonly string[]> = {
    [K in T[number]]?: string;
};

/**
 * Class for working with meta tags.
 *
 * Класс для управления мета-тегами.
 */
export declare class MetaManager<T extends readonly string[], Key extends keyof MetaList<T> = keyof MetaList<T>> {
    protected readonly listMeta: T;
    protected readonly isProperty: boolean;
    protected readonly items: MetaList<T>;
    /**
     * Creates an instance of MetaManager.
     *
     * Создает экземпляр MetaManager.
     * @param listMeta list of meta-tag names to manage / список имен мета-тегов для управления
     * @param isProperty use 'property' attribute instead of 'name' / использовать атрибут 'property' вместо 'name'
     */
    constructor(listMeta: T, isProperty?: boolean);
    /**
     * Returns the list of meta tag names.
     *
     * Возвращает список имен мета-тегов.
     */
    getListMeta(): T;
    /**
     * Get the content of a meta tag by name.
     *
     * Получает содержимое мета-тега по имени.
     * @param name meta tag name / имя мета-тега
     */
    get(name: Key): string;
    /**
     * Returns all meta tags.
     *
     * Возвращает все мета-теги.
     */
    getItems(): MetaList<T>;
    /**
     * Returns all meta tags as HTML string.
     *
     * Возвращает все мета-теги в виде HTML-строки.
     */
    html(): string;
    /**
     * Sets the content of a meta tag.
     *
     * Устанавливает содержимое мета-тега.
     * @param name meta tag name / имя мета-тега
     * @param content meta tag content / содержимое мета-тега
     */
    set(name: Key, content: string): this;
    /**
     * Sets multiple meta tags from an object.
     *
     * Устанавливает несколько мета-тегов из объекта.
     * @param metaList object with meta tag names and content / объект с именами и содержимым мета-тегов
     */
    setByList(metaList: MetaList<T>): this;
    /**
     * Returns the attribute name for meta tags.
     *
     * Возвращает имя атрибута для мета-тегов.
     */
    protected getAttributeName(): string;
    /**
     * Finds a meta element in the DOM.
     *
     * Находит мета-элемент в DOM.
     * @param name meta tag name / имя мета-тега
     */
    protected findMetaElement(name: string): HTMLMetaElement | undefined;
    /**
     * Sets the content of a meta tag in internal storage.
     *
     * Устанавливает содержимое мета-тега во внутреннем хранилище.
     * @param name meta tag name / имя мета-тега
     * @param content meta tag content / содержимое мета-тега
     */
    protected setItem(name: Key, content: string): this;
    /**
     * Sets or creates a meta tag in the DOM.
     *
     * Устанавливает или создает мета-тег в DOM.
     * @param name meta tag name / имя мета-тега
     */
    protected setMeta(name: Key): this;
    /**
     * Converts meta tag to HTML string.
     *
     * Преобразует мета-тег в HTML-строку.
     * @param name meta tag name / имя мета-тега
     */
    protected toHtmlString(name: Key): string;
    /**
     * Updates meta tags data from the DOM.
     *
     * Обновляет данные мета-тегов из DOM.
     */
    protected update(): this;
}

/**
 * Class for working with Open Graph meta tags.
 *
 * Класс для управления мета-тегами Open Graph.
 */
export declare class MetaOg extends MetaManager<MetaOpenGraphTag[]> {
    constructor();
    /**
     * Gets the Open Graph title.
     *
     * Получает заголовок Open Graph.
     */
    getTitle(): string;
    /**
     * Gets the Open Graph type.
     *
     * Получает тип Open Graph.
     */
    getType(): MetaOpenGraphType;
    /**
     * Gets the Open Graph URL.
     *
     * Получает URL Open Graph.
     */
    getUrl(): string;
    /**
     * Gets the Open Graph image URL.
     *
     * Получает URL изображения Open Graph.
     */
    getImage(): string;
    /**
     * Gets the Open Graph description.
     *
     * Получает описание Open Graph.
     */
    getDescription(): string;
    /**
     * Gets the Open Graph locale.
     *
     * Получает локаль Open Graph.
     */
    getLocale(): string;
    /**
     * Gets the Open Graph site name.
     *
     * Получает название сайта Open Graph.
     */
    getSiteName(): string;
    /**
     * Sets the Open Graph title.
     *
     * Устанавливает заголовок Open Graph.
     * @param title title / заголовок
     */
    setTitle(title: string): this;
    /**
     * Sets the Open Graph type.
     *
     * Устанавливает тип Open Graph.
     * @param type type / тип
     */
    setType(type: MetaOpenGraphType): this;
    /**
     * Sets the Open Graph URL.
     *
     * Устанавливает URL Open Graph.
     * @param url URL / URL
     */
    setUrl(url: string): this;
    /**
     * Sets the Open Graph image URL.
     *
     * Устанавливает URL изображения Open Graph.
     * @param url image URL / URL изображения
     */
    setImage(url: string): this;
    /**
     * Sets the Open Graph description.
     *
     * Устанавливает описание Open Graph.
     * @param description description / описание
     */
    setDescription(description: string): this;
    /**
     * Sets the Open Graph locale.
     *
     * Устанавливает локаль Open Graph.
     * @param locale locale (e.g. 'en_US', 'ru_RU') / локаль (например, 'en_US', 'ru_RU')
     */
    setLocale(locale: string): this;
    /**
     * Sets the Open Graph site name.
     *
     * Устанавливает название сайта Open Graph.
     * @param siteName site name / название сайта
     */
    setSiteName(siteName: string): this;
}

/**
 * Age groups for products/
 * Возрастные группы для товаров
 */
export declare enum MetaOpenGraphAge {
    /** For newborns (0–12 months)/ Для новорожденных (0–12 месяцев) */
    newborn = "newborn",
    /** For infants (0–24 months)/ Для младенцев (0–24 месяцев) */
    infant = "infant",
    /** For toddlers (approximately 2–4 years)/ Для малышей (примерно 2–4 года) */
    toddler = "toddler",
    /** For kids (approximately 4–12 years)/ Для детей (примерно 4–12 лет) */
    kids = "kids",
    /** For adults/ Для взрослых */
    adult = "adult"
}

/**
 * Product availability states/
 * Состояния доступности товара
 */
export declare enum MetaOpenGraphAvailability {
    /** In stock, available for purchase/ В наличии, доступен для покупки */
    inStock = "in stock",
    /** Out of stock, currently unavailable/ Нет в наличии, в настоящее время недоступен */
    outOfStock = "out of stock",
    /** Available for pre-order/ Доступен для предзаказа */
    preorder = "preorder",
    /**
     * Backordered, temporarily out of stock/
     * В ожидании поставки, временно отсутствует на складе
     */
    backorder = "backorder",
    /** Discontinued, no longer available/ Снят с производства, больше не доступен */
    discontinued = "discontinued",
    /**
     * Pending availability status/
     * Ожидается информация о доступности
     */
    pending = "pending"
}

/**
 * Product condition states/
 * Состояния товара
 */
export declare enum MetaOpenGraphCondition {
    /** Brand new product, never used/ Новый товар, не использовался */
    new = "new",
    /** Used product, previously owned/ Подержанный, бывший в употреблении */
    used = "used",
    /**
     * Refurbished / restored product/
     * Восстановленный (ремонтированный, refurbished)
     */
    refurbished = "refurbished"
}

/**
 * Gender categories for products/
 * Гендерные категории для товаров
 */
export declare enum MetaOpenGraphGender {
    /** For women/ Для женщин */
    female = "female",
    /** For men/ Для мужчин */
    male = "male",
    /** Universal / suitable for everyone/ Универсальное / подходит всем */
    unisex = "unisex"
}

/**
 * Enumeration of Open Graph tags for metadata/
 * Перечисление Open Graph тegов для мета-данных
 * @enum {string}
 */
export declare enum MetaOpenGraphTag {
    /** Page title/ Заголовок страницы */
    title = "og:title",
    /**
     * Content type (website, article, product, video, profile, etc.)/
     * Тип контента (website, article, product, video, profile и т.д.)
     */
    type = "og:type",
    /** Canonical URL of the page/ Канонический URL страницы */
    url = "og:url",
    /** Preview image URL/ Ссылка на изображение для предпросмотра */
    image = "og:image",
    /**
     * Brief page description (up to ~200 characters)/
     * Краткое описание страницы (до ~200 символов)
     */
    description = "og:description",
    /**
     * Page language (e.g., ru_RU, en_US)/
     * Язык страницы (например: ru_RU, en_US)
     */
    locale = "og:locale",
    /** Site name/ Название сайта */
    siteName = "og:site_name",
    /**
     * Alternative language versions (for multilingual sites)/
     * Альтернативные языковые версии (для мультиязычных сайтов)
     */
    localeAlternate = "og:locale:alternate",
    /**
     * Alternative form of og:image/
     * Альтернативная форма записи og:image
     */
    imageUrl = "og:image:url",
    /** HTTPS version of the image/ HTTPS-версия изображения */
    imageSecureUrl = "og:image:secure_url",
    /**
     * Image MIME type (image/jpeg, image/png)/
     * MIME-тип изображения (image/jpeg, image/png)
     */
    imageType = "og:image:type",
    /** Image width in pixels/ Ширина изображения в пикселях */
    imageWidth = "og:image:width",
    /** Image height in pixels/ Высота изображения в пикселях */
    imageHeight = "og:image:height",
    /**
     * Alternative image text (for accessibility)/
     * Альтернативный текст изображения (для доступности)
     */
    imageAlt = "og:image:alt",
    /** Video URL/ Ссылка на видео */
    video = "og:video",
    /** Alternative video URL/ Альтернативная ссылка на видео */
    videoUrl = "og:video:url",
    /** HTTPS version of video/ HTTPS-версия видео */
    videoSecureUrl = "og:video:secure_url",
    /**
     * Video MIME type (video/mp4, video/webm)/
     * MIME-тип видео (video/mp4, video/webm)
     */
    videoType = "og:video:type",
    /** Video width/ Ширина видео */
    videoWidth = "og:video:width",
    /** Video height/ Высота видео */
    videoHeight = "og:video:height",
    /** Audio file URL/ Ссылка на аудиофайл */
    audio = "og:audio",
    /** HTTPS version of audio/ HTTPS-версия аудио */
    audioSecureUrl = "og:audio:secure_url",
    /** Audio MIME type (audio/mpeg)/ MIME-тип аудио (audio/mpeg) */
    audioType = "og:audio:type",
    /** Publication date/ Дата публикации */
    articlePublishedTime = "article:published_time",
    /** Last update date/ Дата последнего обновления */
    articleModifiedTime = "article:modified_time",
    /** Expiration date (if any)/ Дата устаревания (если есть) */
    articleExpirationTime = "article:expiration_time",
    /** Author (URL or name)/ Автор (URL или имя) */
    articleAuthor = "article:author",
    /** Article category/ Категория статьи */
    articleSection = "article:section",
    /** Tags / keywords/ Теги / ключевые слова */
    articleTag = "article:tag",
    /** Book author/ Автор книги */
    bookAuthor = "book:author",
    /** Book ISBN/ ISBN книги */
    bookIsbn = "book:isbn",
    /** Book publication date/ Дата публикации книги */
    bookReleaseDate = "book:release_date",
    /** Topics / tags/ Темы / теги */
    bookTag = "book:tag",
    /**
     * Track duration (in seconds)/
     * Длительность трека (в секундах)
     */
    musicDuration = "music:duration",
    /** Album URL/ Ссылка на альбом */
    musicAlbum = "music:album",
    /** Disc number/ Номер диска */
    musicAlbumDisc = "music:album:disc",
    /** Track number in album/ Номер трека в альбоме */
    musicAlbumTrack = "music:album:track",
    /** Musician/ Исполнитель */
    musicMusician = "music:musician",
    /** Song URL/ Ссылка на песню */
    musicSong = "music:song",
    /**
     * Disc number where the song is/
     * Номер диска, на котором песня
     */
    musicSongDisc = "music:song:disc",
    /** Track number in song/ Номер трека в песне */
    musicSongTrack = "music:song:track",
    /** Release date/ Дата релиза */
    musicReleaseDate = "music:release_date",
    /** Content creator/ Создатель контента */
    musicCreator = "music:creator",
    /** Actor/ Актёр */
    videoActor = "video:actor",
    /** Actor's role/ Роль актёра */
    videoActorRole = "video:actor:role",
    /** Director/ Режиссёр */
    videoDirector = "video:director",
    /** Screenwriter/ Сценарист */
    videoWriter = "video:writer",
    /**
     * Video duration (in seconds)/
     * Длительность видео (в секундах)
     */
    videoDuration = "video:duration",
    /** Video release date/ Дата выхода видео */
    videoReleaseDate = "video:release_date",
    /** Tags / topics/ Теги / темы видео */
    videoTag = "video:tag",
    /**
     * Series to which the episode belongs/
     * Сериал, к которому относится эпизод
     */
    videoSeries = "video:series",
    /** First name/ Имя */
    profileFirstName = "profile:first_name",
    /** Last name/ Фамилия */
    profileLastName = "profile:last_name",
    /** Username / login/ Имя пользователя / логин */
    profileUsername = "profile:username",
    /** Gender (male / female)/ Пол (male / female) */
    profileGender = "profile:gender",
    /** Brand name/ Название бренда */
    productBrand = "product:brand",
    /**
     * Product availability (in stock / out of stock / preorder)/
     * Наличие товара (in stock / out of stock / preorder)
     */
    productAvailability = "product:availability",
    /**
     * Product condition (new / used / refurbished)/
     * Состояние товара (new / used / refurbished)
     */
    productCondition = "product:condition",
    /** Price/ Цена */
    productPriceAmount = "product:price:amount",
    /**
     * Currency (USD, RUB, EUR, etc.)/
     * Валюта (USD, RUB, EUR и т.д.)
     */
    productPriceCurrency = "product:price:currency",
    /** Internal product ID/ Внутренний ID товара */
    productRetailerItemId = "product:retailer_item_id",
    /** Product category/ Категория товара */
    productCategory = "product:category",
    /** EAN code/ EAN код */
    productEan = "product:ean",
    /** ISBN (if product is a book)/ ISBN (если товар — книга) */
    productIsbn = "product:isbn",
    /** Manufacturer part number/ Номер производителя */
    productMfrPartNo = "product:mfr_part_no",
    /** UPC code/ UPC код */
    productUpc = "product:upc",
    /** Weight (value)/ Вес (значение) */
    productWeightValue = "product:weight:value",
    /**
     * Weight (units, e.g., kg)/
     * Вес (единицы измерения, например: kg)
     */
    productWeightUnits = "product:weight:units",
    /** Product color/ Цвет товара */
    productColor = "product:color",
    /** Product material/ Материал товара */
    productMaterial = "product:material",
    /** Pattern / design/ Узор / дизайн */
    productPattern = "product:pattern",
    /**
     * Age group (adult, kids, baby)/
     * Возрастная группа (adult, kids, baby)
     */
    productAgeGroup = "product:age_group",
    /**
     * Gender (for whom — male, female, unisex)/
     * Пол (для кого — male, female, unisex)
     */
    productGender = "product:gender"
}

/**
 * Possible content types for Open Graph (og:type)/
 * Возможные типы контента для Open Graph (og:type)
 */
export declare enum MetaOpenGraphType {
    /**
     * Regular web page or article/
     * Обычная веб-страница или статья
     */
    website = "website",
    /**
     * News article, blog post, or other text material/
     * Новостная статья, блог-пост или другой текстовый материал
     */
    article = "article",
    /**
     * Video (e.g., clip, film, series, music video)/
     * Видео (например, ролик, фильм, сериал, клип)
     */
    video = "video.other",
    /** Entire TV series/ Сериал целиком */
    videoTvShow = "video.tv_show",
    /**
     * Specific TV series episode/
     * Конкретный эпизод сериала
     */
    videoEpisode = "video.episode",
    /** Movie/ Фильм */
    videoMovie = "video.movie",
    /** Music album/ Музыкальный альбом */
    musicAlbum = "music.album",
    /** Music playlist/ Музыкальный плейлист */
    musicPlaylist = "music.playlist",
    /** Individual track (song)/ Отдельный трек (песня) */
    musicSong = "music.song",
    /**
     * Radio station or audio stream/
     * Радиостанция или стрим аудио
     */
    musicRadioStation = "music.radio_station",
    /**
     * Application (web, mobile, or desktop)/
     * Приложение (веб-, мобильное или десктопное)
     */
    app = "app",
    /**
     * Product or item (e.g., in a store)/
     * Продукт или товар (например, в магазине)
     */
    product = "product",
    /**
     * Brand, company, organization/
     * Бренд, компания, организация
     */
    business = "business.business",
    /**
     * Place (geolocation, point on a map)/
     * Место (геолокация, точка на карте)
     */
    place = "place",
    /**
     * Event (event, meeting, concert, etc.)/
     * Событие (ивент, встреча, концерт и т.п.)
     */
    event = "event",
    /**
     * User profile (personal page, author, etc.)/
     * Профиль пользователя (личная страница, автор и т.д.)
     */
    profile = "profile",
    /** Book page/ Страница книги */
    book = "book"
}

export declare enum MetaRobots {
    /**
     * Allow indexing and following links (default)/
     * Разрешает индексировать страницу и переходить по ссылкам (по умолчанию)
     */
    indexFollow = "index, follow",
    /**
     * Do not index the page, but follow its links/
     * Не индексировать страницу, но переходить по ссылкам
     */
    noIndexFollow = "noindex, follow",
    /**
     * Index the page, but do not follow its links/
     * Индексировать страницу, но не переходить по ссылкам
     */
    indexNoFollow = "index, nofollow",
    /**
     * Do not index the page and do not follow its links/
     * Не индексировать страницу и не переходить по ссылкам
     */
    noIndexNoFollow = "noindex, nofollow",
    /** Prevent caching of the page/ Запрещает кэширование страницы */
    noArchive = "noarchive",
    /**
     * Do not show a snippet or description in search results/
     * Не показывать сниппет (описание) в результатах поиска
     */
    noSnippet = "nosnippet",
    /**
     * Do not display image preview in search results/
     * Не показывать превью изображений в результатах поиска
     */
    noImageIndex = "noimageindex",
    /** Allow indexing images only/ Разрешить индексировать только изображения */
    images = "images",
    /**
     * Do not show cached version or translation link/
     * Не показывать кэш и ссылку "Перевести" в результатах
     */
    noTranslate = "notranslate",
    /**
     * Prevent page being shown in "Preview" (Instant Preview)/
     * Не показывать страницу в предпросмотре (Instant Preview)
     */
    noPreview = "nopreview",
    /**
     * Allow only text content indexing (no media)/
     * Разрешить индексировать только текст, без медиа
     */
    textOnly = "textonly",
    /**
     * Do not index subpages or parameters/
     * Не индексировать подстраницы или страницы с параметрами
     */
    noIndexSubpages = "noindex, noarchive",
    /**
     * Use meta directives from HTTP headers (advanced)/
     * Использовать директивы из HTTP-заголовков (расширенная настройка)
     */
    none = "none"
}

/**
 * Standard HTML meta tags/
 * Стандартные HTML мета-теги
 * @enum {string}
 */
export declare enum MetaTag {
    /** Page description/ Описание страницы */
    description = "description",
    /** Keywords/ Ключевые слова */
    keywords = "keywords",
    /** Canonical URL/ Канонический URL */
    canonical = "canonical",
    /** Search engine instructions/ Инструкции для поисковиков */
    robots = "robots",
    /** Content author/ Автор контента */
    author = "author"
}

/**
 * Class for working with Twitter Card meta tags.
 *
 * Класс для управления мета-тегами Twitter Card.
 */
export declare class MetaTwitter extends MetaManager<MetaTwitterTag[]> {
    constructor();
    /**
     * Gets the Twitter Card type.
     *
     * Получает тип Twitter Card.
     */
    getCard(): MetaTwitterCard;
    /**
     * Gets the website or brand @username.
     *
     * Получает аккаунт сайта или бренда (@username).
     */
    getSite(): string;
    /**
     * Gets the content creator @username.
     *
     * Получает автора контента (@username).
     */
    getCreator(): string;
    /**
     * Gets the page URL.
     *
     * Получает URL страницы.
     */
    getUrl(): string;
    /**
     * Gets the card title.
     *
     * Получает заголовок карточки.
     */
    getTitle(): string;
    /**
     * Gets the card description.
     *
     * Получает описание карточки.
     */
    getDescription(): string;
    /**
     * Gets the card image URL.
     *
     * Получает URL изображения карточки.
     */
    getImage(): string;
    /**
     * Sets the Twitter Card type.
     *
     * Устанавливает тип Twitter Card.
     * @param card card type / тип карточки
     */
    setCard(card: MetaTwitterCard): this;
    /**
     * Sets the website or brand @username.
     *
     * Устанавливает аккаунт сайта или бренда (@username).
     * @param site @username / аккаунт
     */
    setSite(site: string): this;
    /**
     * Sets the content creator @username.
     *
     * Устанавливает автора контента (@username).
     * @param creator @username / аккаунт автора
     */
    setCreator(creator: string): this;
    /**
     * Sets the page URL.
     *
     * Устанавливает URL страницы.
     * @param url URL / URL
     */
    setUrl(url: string): this;
    /**
     * Sets the card title.
     *
     * Устанавливает заголовок карточки.
     * @param title title / заголовок
     */
    setTitle(title: string): this;
    /**
     * Sets the card description.
     *
     * Устанавливает описание карточки.
     * @param description description / описание
     */
    setDescription(description: string): this;
    /**
     * Sets the card image URL.
     *
     * Устанавливает URL изображения карточки.
     * @param image image URL / URL изображения
     */
    setImage(image: string): this;
}

/**
 * Twitter Card types/
 * Возможные значения для `twitter:card`
 */
export declare enum MetaTwitterCard {
    /**
     * Summary card — small image, short title and description/
     * Карточка-сводка — небольшое изображение, короткий заголовок и описание
     */
    summary = "summary",
    /**
     * Summary card with large image — most popular card type/
     * Карточка с большим изображением — самый распространённый тип
     */
    summaryLargeImage = "summary_large_image",
    /**
     * App card — used for promoting mobile applications (iOS / Android)/
     * Карточка приложения — используется для продвижения мобильных приложений (iOS / Android)
     */
    app = "app",
    /**
     * Player card — for embedding video, audio, or other rich media/
     * Карточка плеера — для встроенного видео, аудио или интерактивного контента
     */
    player = "player",
    /**
     * Product card (deprecated) — used for e-commerce products/
     * Карточка товара (устаревшая) — использовалась для отображения товаров в Twitter
     */
    product = "product",
    /**
     * Gallery card (deprecated) — used for displaying multiple images/
     * Галерея (устаревшая) — использовалась для показа нескольких изображений
     */
    gallery = "gallery",
    /**
     * Photo card (deprecated) — single image card, replaced by summary_large_image/
     * Фото-карточка (устаревшая) — карточка с одним изображением, заменена на summary_large_image
     */
    photo = "photo",
    /**
     * Lead generation card (deprecated) — for collecting user data (via CTA)/
     * Карточка для лидогенерации (устаревшая) — использовалась для сбора данных пользователей через кнопку
     */
    leadGeneration = "lead_generation",
    /**
     * Audio card (experimental) — similar to player, but focused on audio players/
     * Аудио-карточка (экспериментальная) — аналог player, ориентирована на аудио
     */
    audio = "audio",
    /**
     * Poll card (internal/experimental) — used for Twitter polls/
     * Карточка опроса (внутренняя/экспериментальная) — используется для твитов-опросов
     */
    poll = "poll"
}

/**
 * Twitter Card meta-properties/
 * Мета теги Twitter Card
 */
export declare enum MetaTwitterTag {
    /**
     * Type of card (summary, summary_large_image, app, player, product)/
     * Тип карточки (summary, summary_large_image, app, player, product)
     */
    card = "twitter:card",
    /** Website or brand @username/ Аккаунт сайта или бренда (@username) */
    site = "twitter:site",
    /** Content creator @username/ Автор контента (@username) */
    creator = "twitter:creator",
    /** Page URL/ URL страницы */
    url = "twitter:url",
    /** Title of the card/ Заголовок карточки */
    title = "twitter:title",
    /** Short description of the card/ Краткое описание карточки */
    description = "twitter:description",
    /** Main image for the card/ Основное изображение карточки */
    image = "twitter:image",
    /**
     * Alternative text for the image (for accessibility)/
     * Альтернативный текст изображения (для доступности)
     */
    imageAlt = "twitter:image:alt",
    /**
     * Alternative way to define image source/
     * Альтернативный способ указания изображения
     */
    imageSrc = "twitter:image:src",
    /** Image width (optional)/ Ширина изображения (опционально) */
    imageWidth = "twitter:image:width",
    /** Image height (optional)/ Высота изображения (опционально) */
    imageHeight = "twitter:image:height",
    /**
     * Custom label 1 (used in summary/product cards)/
     * Пользовательская метка 1 (используется в summary/product карточках)
     */
    label1 = "twitter:label1",
    /**
     * Custom value 1 (used with label1)/
     * Пользовательское значение 1 (используется с label1)
     */
    data1 = "twitter:data1",
    /**
     * Custom label 2 (used in summary/product cards)/
     * Пользовательская метка 2 (используется в summary/product карточках)
     */
    label2 = "twitter:label2",
    /**
     * Custom value 2 (used with label2)/
     * Пользовательское значение 2 (используется с label2)
     */
    data2 = "twitter:data2",
    /** iPhone app name/ Название приложения для iPhone */
    appNameIphone = "twitter:app:name:iphone",
    /**
     * iPhone app ID (App Store ID)/
     * Идентификатор приложения в App Store (iPhone)
     */
    appIdIphone = "twitter:app:id:iphone",
    /** iPhone app URL (deep link)/ Ссылка на приложение iPhone (deep link) */
    appUrlIphone = "twitter:app:url:iphone",
    /** iPad app name/ Название приложения для iPad */
    appNameIpad = "twitter:app:name:ipad",
    /**
     * iPad app ID (App Store ID)/
     * Идентификатор приложения в App Store (iPad)
     */
    appIdIpad = "twitter:app:id:ipad",
    /** iPad app URL (deep link)/ Ссылка на приложение iPad (deep link) */
    appUrlIpad = "twitter:app:url:ipad",
    /** Google Play app name/ Название приложения в Google Play */
    appNameGooglePlay = "twitter:app:name:googleplay",
    /**
     * Google Play app ID (package name)/
     * Идентификатор приложения в Google Play (package name)
     */
    appIdGooglePlay = "twitter:app:id:googleplay",
    /**
     * Google Play app URL (deep link)/
     * Ссылка на приложение в Google Play (deep link)
     */
    appUrlGooglePlay = "twitter:app:url:googleplay",
    /** Player iframe URL/ URL iframe плеера */
    player = "twitter:player",
    /** Player width/ Ширина плеера */
    playerWidth = "twitter:player:width",
    /** Player height/ Высота плеера */
    playerHeight = "twitter:player:height",
    /**
     * Direct media stream URL (video/audio)/
     * Прямая ссылка на видео- или аудио поток
     */
    playerStream = "twitter:player:stream",
    /**
     * MIME type of the media stream/
     * MIME-тип потока (например, video/mp4)
     */
    playerStreamContentType = "twitter:player:stream:content_type"
}

/**
 * Generic type that can be either a single value or an array of values/
 * Дженерик тип для одиночного значения или массива значений
 */
export declare type NormalOrArray<T = NumberOrString> = T | T[];

/**
 * Generic type that can be either a direct value or a Promise resolving to that value/
 * Дженерик тип для прямого значения или Promise
 */
export declare type NormalOrPromise<T> = T | Promise<T>;

/** Union type for numeric and string values/ Объединенный тип для числовых и строковых значений */
export declare type NumberOrString = number | string;

/**
 * Union type for numeric, string, and boolean values/
 * Объединенный тип для числовых, строковых и булевых значений
 */
export declare type NumberOrStringOrBoolean = number | string | boolean;

/**
 * Union type for numeric, string, and Date values/
 * Объединенный тип для числовых, строковых значений и Date
 */
export declare type NumberOrStringOrDate = NumberOrString | Date;

/**
 * Generic record/object type with string keys/
 * Дженерик тип записи/объекта со строковыми ключами
 */
export declare type ObjectItem<T = any> = Record<string, T>;

/** Generic type that can be either an array or an object/ Дженерик тип для массива или объекта */
export declare type ObjectOrArray<T = any> = T[] | ObjectItem<T>;

/**
 * Generate a random integer.
 *
 * Генерирует случайное число.
 * @param min the lowest value to return/ наименьшее значение
 * @param max the highest value to return/ наибольшее значение
 */
export declare function random(min: number, max: number): number;

/**
 * Removes the common prefix from the main string.
 *
 * Убирает общий префикс из основной строки.
 * @param mainStr - The main string / Основная строка
 * @param prefix - The prefix string to remove / Строка префикса для удаления
 */
export declare function removeCommonPrefix(mainStr: string, prefix: string): string;

/**
 * Replaces the component name in the text.
 *
 * Заменяет имя компонента в тексте.
 * @param text text/ текст
 * @param name component name/ имя компонента
 * @param componentName new component name/ новое имя компонента
 */
export declare const replaceComponentName: (text: string | undefined, name: string, componentName: string) => string | undefined;

/**
 * Merge one or more arrays recursively.
 *
 * Рекурсивное слияние одного или более массивов.
 * @param array the array in which elements are replaced/ массив, элементы которого будут заменены
 * @param replacement arrays from which elements will be extracted/ массивы, из которых будут браться элементы для замены
 * @param isMerge merge one or more arrays/ сливает один или большее количество массивов
 */
export declare function replaceRecursive<I>(array: ObjectItem<I>, replacement?: ObjectOrArray<I>, isMerge?: boolean): ObjectItem<I>;

/**
 * Replacing the value from replaces in value.
 *
 * Замена значения из replaces в value.
 * @param value template string/ строка шаблона
 * @param replaces object with data for replacement/ объект с данными для замены
 */
export declare function replaceTemplate(value: string, replaces: Record<string, string | FunctionReturn<string>>): string;

/**
 * Resizes an image to fit within a maximum size constraint.
 *
 * Изменяет размер изображения в соответствии с ограничением максимального размера.
 * @param image image element or URL / элемент изображения или URL
 * @param maxSize maximum size for width or height / максимальный размер ширины или высоты
 * @param type resize type (auto, width, height) / тип изменения размера (auto, width, height)
 * @param typeData optional data type for the resulting image /
 * необязательный тип данных для результирующего изображения
 */
export declare function resizeImageByMax(image: HTMLImageElement | string, maxSize: number, type?: ResizeImageByMaxType, typeData?: string): string | undefined;

/**
 * Resize type for image scaling.
 *
 * Тип изменения размера для масштабирования изображения.
 */
declare type ResizeImageByMaxType = 'auto' | 'width' | 'height';

/**
 * Class for getting the scroll width.
 *
 * Класс для получения ширины скролла.
 */
export declare class ScrollbarWidth {
    private static storage;
    private static calculate;
    /**
     * Checks whether to enable scroll hiding.
     *
     * Проверяет, надо ли включить скрытие скролла.
     */
    static is(): Promise<boolean>;
    /**
     * Returns the width of the scroll.
     *
     * Возвращает ширину скролла.
     */
    static get(): Promise<number>;
    /**
     * Returns the storage.
     *
     * Возвращает хранилище.
     */
    static getStorage(): DataStorage<number>;
    /**
     * Returns the calculate flag.
     *
     * Возвращает флаг вычисления.
     */
    static getCalculate(): boolean;
    /**
     * Creates elements to check the width of the scroll.
     *
     * Создает элементы для проверки ширины скролла.
     */
    private static createElement;
    /**
     * Initialization of data to check the width of the scroll.
     *
     * Инициализация данных для проверки ширины скролла.
     */
    private static init;
}

/** Search cache list / Список кэша поиска */
export declare type SearchCache<T extends SearchItem> = SearchCacheItem<T>[];

/** Search cache item / Элемент кэша поиска */
export declare type SearchCacheItem<T extends SearchItem> = {
    /** Original item / Исходный элемент */
    item: T;
    /** Search string value / Строковое значение для поиска */
    value: string;
};

/** Type for getting a column / Тип для получения колонки */
export declare type SearchColumn<T extends SearchItem> = {
    [K in keyof T]-?: NonNullable<T[K]> extends object ? K | SearchColumnPath<K, keyof NonNullable<T[K]>> : K;
}[keyof T];

/** Type for generating a column path / Тип для генерации пути к колонке */
export declare type SearchColumnPath<K, P> = K extends string ? P extends string ? `${K}.${P}` : never : never;

/** Type for a list of columns / Тип для списка колонок */
export declare type SearchColumns<T extends SearchItem> = (SearchColumn<T> & string)[];

/** Type for formatting the key / Тип для форматирования ключа */
export declare type SearchFormatCapitalize<K extends string> = K extends `${infer First}.${infer Rest}` ? `${First}${Capitalize<SearchFormatCapitalize<Rest>>}` : K;

/** Type for a formatted search item / Тип для отформатированного элемента поиска */
export declare type SearchFormatItem<T extends SearchItem, KT extends string[]> = {
    [K in keyof T | SearchFormatKey<KT[number]>]: K extends keyof T ? T[K] : string;
} & {
    searchActive?: boolean;
};

/** Type for generating a search key / Тип для генерации ключа поиска */
export declare type SearchFormatKey<K> = K extends string ? `${SearchFormatCapitalize<K>}Search` : never;

/** Type for a list of formatted search items / Тип для списка отформатированных элементов поиска */
export declare type SearchFormatList<T extends SearchItem, K extends string[]> = SearchFormatItem<T, K>[];

/** Search item type/ Тип элемента поиска */
export declare type SearchItem = Record<string, any>;

/**
 * Main class for managing a searchable list.
 * Coordinates between options, item state, matching logic, and data storage.
 *
 * Основной класс для управления списком с возможностью поиска.
 * Координирует работу опций, состояния элементов, логики сопоставления и хранения данных.
 */
export declare class SearchList<T extends SearchItem, K extends SearchColumns<T>> {
    protected options: SearchListOptions;
    protected item: SearchListItem;
    protected matcher: SearchListMatcher;
    protected data: SearchListData<T, K>;
    /**
     * Constructor for SearchList.
     *
     * Конструктор для SearchList.
     * @param list initial list of items/ исходный список элементов
     * @param columns columns to perform search on/ столбцы для выполнения поиска
     * @param value initial search value/ начальное значение поиска
     * @param options search options/ опции поиска
     */
    constructor(list: SearchListValue<T>, columns?: K, value?: string, options?: SearchOptions);
    /**
     * Returns the search data management instance.
     *
     * Возвращает экземпляр управления данными поиска.
     * @returns SearchListData instance/ экземпляр SearchListData
     */
    getData(): SearchListData<T, K>;
    /**
     * Returns the current list of items.
     *
     * Возвращает текущий список элементов.
     * @returns list of items/ список элементов
     */
    getList(): SearchListValue<T>;
    /**
     * Returns the current search columns.
     *
     * Возвращает текущие столбцы поиска.
     * @returns columns or undefined/ столбцы или undefined
     */
    getColumns(): K | undefined;
    /**
     * Returns the search item instance.
     *
     * Возвращает экземпляр элемента поиска.
     * @returns SearchListItem instance/ экземпляр SearchListItem
     */
    getItem(): SearchListItem;
    /**
     * Returns the current search value.
     *
     * Возвращает текущее значение поиска.
     * @returns search value string or undefined/ строка значения поиска или undefined
     */
    getValue(): string | undefined;
    /**
     * Returns the search options instance.
     *
     * Возвращает экземпляр опций поиска.
     * @returns SearchListOptions instance/ экземпляр SearchListOptions
     */
    getOptions(): SearchListOptions;
    /**
     * Sets a new list of items.
     *
     * Устанавливает новый список элементов.
     * @param list new list/ новый список
     * @returns this instance/ данный экземпляр
     */
    setList(list: SearchListValue<T>): this;
    /**
     * Sets new search columns.
     *
     * Устанавливает новые столбцы поиска.
     * @param columns new columns/ новые столбцы
     * @returns this instance/ данный экземпляр
     */
    setColumns(columns?: K): this;
    /**
     * Sets a new search value and updates the matcher.
     *
     * Устанавливает новое значение поиска и обновляет сопоставитель.
     * @param value new search value/ новое значение поиска
     * @returns this instance/ данный экземпляр
     */
    setValue(value?: string): this;
    /**
     * Sets new search options and updates the matcher.
     *
     * Устанавливает новые опции поиска и обновляет сопоставитель.
     * @param options new options/ новые опции
     * @returns this instance/ данный экземпляр
     */
    setOptions(options: SearchOptions): this;
    /**
     * Processes the list and returns a formatted list of items based on the current search state.
     *
     * Обрабатывает список и возвращает отформатированный список элементов на основе текущего состояния поиска.
     * @returns formatted list of items/ отформатированный список элементов
     */
    to(): SearchFormatList<T, K>;
    /**
     * Callback for processing items when a search is active.
     * Checks for selection and handles "return everything" option.
     *
     * Обратный вызов для обработки элементов при активном поиске.
     * Проверяет выбор и обрабатывает опцию "возвращать всё".
     */
    protected readonly callbackToSelection: (item: SearchCacheItem<T>["item"], value: SearchCacheItem<T>["value"]) => SearchFormatItem<T, K> | undefined;
    /**
     * Callback for processing items when no search is active.
     *
     * Обратный вызов для обработки элементов, когда поиск не активен.
     */
    protected readonly callbackToNone: (item: SearchCacheItem<T>["item"]) => SearchFormatItem<T, K>;
}

/**
 * Class for managing and formatting the search data list and its cache.
 *
 * Класс для управления и форматирования списка данных поиска и его кэша.
 */
export declare class SearchListData<T extends SearchItem, K extends SearchColumns<T>> {
    protected list: SearchListValue<T>;
    protected columns: K | undefined;
    protected item: SearchListItem;
    protected options: SearchListOptions;
    protected listCache?: SearchCache<T>;
    /**
     * Constructor for SearchListData.
     *
     * Конструктор для SearchListData.
     * @param list original list of items/ исходный список элементов
     * @param columns columns to search in/ столбцы для поиска
     * @param item current search item state/ текущее состояние элемента поиска
     * @param options search options/ опции поиска
     */
    constructor(list: SearchListValue<T>, columns: K | undefined, item: SearchListItem, options: SearchListOptions);
    /**
     * Checks if both list and columns are provided.
     *
     * Проверяет, предоставлены ли и список, и столбцы.
     * @returns boolean indicating if ready for column-based search/ логическое значение, указывающее на готовность к поиску по столбцам
     */
    is(): this is this & {
        list: T[];
        columns: string[];
    };
    /**
     * Checks if the list is provided.
     *
     * Проверяет, предоставлен ли список.
     * @returns boolean/ логическое значение
     */
    isList(): this is this & {
        list: T[];
    };
    /**
     * Returns the original list.
     *
     * Возвращает исходный список.
     * @returns list value/ значение списка
     */
    getList(): SearchListValue<T>;
    /**
     * Returns the search columns.
     *
     * Возвращает столбцы поиска.
     * @returns columns or undefined/ столбцы или undefined
     */
    getColumns(): K | undefined;
    /**
     * Gets the search cache, initializing it if necessary.
     *
     * Получает кэш поиска, инициализируя его при необходимости.
     * @returns search cache/ кэш поиска
     */
    protected getCache(): SearchCache<T>;
    /**
     * Sets a new list and regenerates the cache.
     *
     * Устанавливает новый список и регенерирует кэш.
     * @param list new list/ новый список
     * @returns this instance/ данный экземпляр
     */
    setList(list: SearchListValue<T>): this;
    /**
     * Sets new search columns and regenerates the cache.
     *
     * Устанавливает новые столбцы поиска и регенерирует кэш.
     * @param columns new columns/ новые столбцы
     * @returns this instance/ данный экземпляр
     */
    setColumns(columns?: SearchColumns<T>): this;
    /**
     * Finds a cached item corresponding to the given original item.
     *
     * Находит кэшированный элемент, соответствующий данному исходному элементу.
     * @param item original item/ исходный элемент
     * @returns cache item or undefined/ кэшированный элемент или undefined
     */
    findCacheItem(item: T): SearchCacheItem<T> | undefined;
    /**
     * Iterates over the cached list and executes a callback for each item.
     *
     * Перебирает кэшированный список и выполняет обратный вызов для каждого элемента.
     * @param callback function to execute for each item/ функция для выполнения для каждого элемента
     * @returns formatted list/ отформатированный список
     */
    forEach(callback: (item: SearchCacheItem<T>['item'], value: SearchCacheItem<T>['value']) => SearchFormatItem<T, K> | undefined): SearchFormatList<T, K>;
    /**
     * Converts a single item to a formatted item with highlighted matches if selected.
     *
     * Преобразует один элемент в отформатированный элемент с выделенными совпадениями, если он выбран.
     * @param item original item/ исходный элемент
     * @param selection whether the item matches the search and should be highlighted/ совпадает ли элемент с поиском и должен ли он быть выделен
     * @returns formatted item/ отформатированный элемент
     */
    toFormatItem(item: T, selection: boolean): SearchFormatItem<T, K>;
    /**
     * Formats a column path to a camelCase property name with a 'Search' suffix.
     *
     * Форматирует путь к столбцу в имя свойства camelCase с суффиксом 'Search'.
     * @param column column path/ путь к столбцу
     * @returns property name/ имя свойства
     */
    protected getColumnName(column: string): string;
    /**
     * Adds highlight tags to the given value based on the current search value.
     *
     * Добавляет теги выделения к данному значению на основе текущего значения поиска.
     * @param value value to highlight/ значение для выделения
     * @returns highlighted string/ выделенная строка
     */
    protected addTag(value: any): string;
    /**
     * Generates a search cache for the current list and columns.
     *
     * Генерирует кэш поиска для текущего списка и столбцов.
     * @returns search cache/ кэш поиска
     */
    protected generateCache(): SearchCache<T>;
    /**
     * Initializes the search cache.
     *
     * Инициализирует кэш поиска.
     */
    protected initCache(): void;
    /**
     * Resets the search cache.
     *
     * Сбрасывает кэш поиска.
     */
    protected resetCache(): void;
}

/**
 * Class representing a single search item's value and its search-related state.
 *
 * Класс, представляющий значение одного элемента поиска и его состояние, связанное с поиском.
 */
export declare class SearchListItem {
    protected value: string | undefined;
    protected options: SearchListOptions;
    /**
     * Constructor for SearchListItem.
     *
     * Конструктор для SearchListItem.
     * @param value current search value/ текущее значение поиска
     * @param options search options/ опции поиска
     */
    constructor(value: string | undefined, options: SearchListOptions);
    /**
     * Checks if the value is filled.
     *
     * Проверяет, заполнено ли значение.
     * @returns boolean indicating if value exists/ логическое значение, указывающее на наличие значения
     */
    is(): this is this & {
        value: string;
    };
    /**
     * Checks if a search should be performed based on the current value and options.
     *
     * Проверяет, следует ли выполнять поиск на основе текущего значения и опций.
     * @returns boolean/ логическое значение
     */
    isSearch(): boolean;
    /**
     * Returns the current search value as a string.
     *
     * Возвращает текущее значение поиска в виде строки.
     * @returns search value/ значение поиска
     */
    get(): string;
    /**
     * Sets a new search value.
     *
     * Устанавливает новое значение поиска.
     * @param value new search value/ новое значение поиска
     * @returns this instance/ данный экземпляр
     */
    set(value?: string): this;
}

/**
 * Class responsible for matching search values against the search list data using regular expressions.
 *
 * Класс, отвечающий за сопоставление значений поиска с данными списка поиска с использованием регулярных выражений.
 */
export declare class SearchListMatcher {
    protected item: SearchListItem;
    protected options: SearchListOptions;
    protected matcher: RegExp | undefined;
    /**
     * Constructor for SearchListMatcher.
     *
     * Конструктор для SearchListMatcher.
     * @param item search item containing the current value/ элемент поиска, содержащий текущее значение
     * @param options search options/ опции поиска
     */
    constructor(item: SearchListItem, options: SearchListOptions);
    /**
     * Checks if the matcher is initialized.
     *
     * Проверяет, инициализирован ли сопоставитель.
     * @returns boolean/ логическое значение
     */
    is(): boolean;
    /**
     * Checks if the given value matches the current search expression.
     *
     * Проверяет, соответствует ли данное значение текущему поисковому выражению.
     * @param value value to check/ проверяемое значение
     * @returns boolean indicating a match/ логическое значение, указывающее на совпадение
     */
    isSelection(value: SearchCacheItem<any>['value']): boolean;
    /**
     * Returns the current regular expression matcher.
     *
     * Возвращает текущий сопоставитель регулярных выражений.
     * @returns RegExp or undefined/ RegExp или undefined
     */
    get(): RegExp | undefined;
    /**
     * Updates the matcher based on the current item value and options.
     *
     * Обновляет сопоставитель на основе текущего значения элемента и опций.
     */
    update(): void;
    /**
     * Initializes or resets the regular expression matcher.
     *
     * Инициализирует или сбрасывает сопоставитель регулярных выражений.
     */
    protected initMatcher(): void;
}

/**
 * Class for managing search list options.
 *
 * Класс для управления опциями списка поиска.
 */
export declare class SearchListOptions {
    protected options?: SearchOptions | undefined;
    /**
     * Constructor for SearchListOptions.
     *
     * Конструктор для SearchListOptions.
     * @param options search options/ опции поиска
     */
    constructor(options?: SearchOptions | undefined);
    /**
     * Returns the current search options.
     *
     * Возвращает текущие опции поиска.
     * @returns search options/ опции поиска
     */
    getOptions(): SearchOptions;
    /**
     * Returns the minimum number of characters required to trigger a search.
     *
     * Возвращает минимальное количество символов, необходимых для запуска поиска.
     * @returns limit value/ значение лимита
     */
    getLimit(): number;
    /**
     * Returns whether to return all items even if they don't match the search query.
     *
     * Возвращает, следует ли возвращать все элементы, даже если они не соответствуют поисковому запросу.
     * @returns boolean value/ логическое значение
     */
    getReturnEverything(): boolean;
    /**
     * Returns the search delay in milliseconds.
     *
     * Возвращает задержку поиска в миллисекундах.
     * @returns delay value/ значение задержки
     */
    getDelay(): number;
    /**
     * Returns whether to perform an exact match search.
     *
     * Возвращает, следует ли выполнять поиск с точным совпадением.
     * @returns boolean value/ логическое значение
     */
    getFindExactMatch(): boolean;
    /**
     * Returns the CSS class name used for highlighting matches.
     *
     * Возвращает имя класса CSS, используемое для выделения совпадений.
     * @returns class name/ имя класса
     */
    getClassName(): string;
    /**
     * Sets new search options.
     *
     * Устанавливает новые опции поиска.
     * @param options search options/ опции поиска
     * @returns this instance/ данный экземпляр
     */
    setOptions(options: SearchOptions): this;
}

/** Search list value / Значение списка поиска */
export declare type SearchListValue<T extends SearchItem> = T[] | undefined;

/** Search options / Опции поиска */
export declare type SearchOptions = {
    /** Limit of output values / Лимит выводимых значений */
    limit?: number;
    /** Whether to return all items even if no match / Возвращать ли все элементы, даже если совпадений нет */
    returnEverything?: boolean;
    /** Delay before searching / Задержка перед поиском */
    delay?: number;
    /** Find exact match / Найти точное совпадение */
    findExactMatch?: boolean;
    /** CSS class for matches / CSS класс для совпадений */
    classSearchName?: string;
};

/**
 * Converts seconds into a time string.
 *
 * Преобразовывает секунды в строку с временем.
 * @param second specified seconds/ указанные секунды
 */
export declare function secondToTime(second: number | string | undefined): string;

/**
 * Modifies the value of an element identified by its key.
 *
 * Изменяет значение элемента, определенного ключом.
 * @param element checked element/ проверяемый элемент
 * @param index index at which we retrieve values/ индекс, по которому получаем значения
 * @param value new value/ новое значение
 */
export declare function setElementItem<E extends ElementOrWindow, K extends keyof E, V extends E[K] = E[K]>(element: ElementOrString<E>, index: K, value: V | Record<string, V>): E | undefined;

/**
 * Modifies data according to its type and settings.
 *
 * Изменяет данные в соответствии с их типом и настройками.
 * @param selected base values/ базовые значения
 * @param value new values/ новые значения
 * @param multiple support for multiple values/ поддержка нескольких значений
 * @param maxlength maximum values/ максимальные значения
 * @param alwaysChange updating values in any case/ обновление значений при любом случае
 * @param notEmpty do not make the values empty/ не делать значения пустыми
 */
export declare function setValues<T>(selected: T | T[] | undefined, value: any, { multiple, maxlength, alwaysChange, notEmpty }: {
    multiple?: boolean | undefined;
    maxlength?: number | undefined;
    alwaysChange?: boolean | undefined;
    notEmpty?: boolean | undefined;
}): T | T[] | undefined;

/**
 * This method is used to copy the values of all enumerable own properties from one source object to a target object.
 * In priority according to the processing list.
 *
 * Метод используется для копирования значений всех перечисляемых свойств одного объекта в другой.
 * В приоритете по списку обработки.
 * @param array the target object/ целевой объект
 * @param replacement the source object/ исходные объекты
 * @param indexStart index at which to start changing the array/ индекс, по которому начинает изменять массив
 */
export declare function splice<I>(array: ObjectItem<I>, replacement?: ObjectItem<I> | I, indexStart?: string): ObjectItem<I>;

/**
 * The method creates a string of length count, consisting of the characters value.
 *
 * Метод создает строку длиной count, состоящую из символов value.
 * @param value character for filling/ символ для заполнения
 * @param count length of the string/ длина строки
 */
export declare function strFill(value: string, count: number): string;

/**
 * Splits a string by a separator, limited to a certain number of elements.
 * If a limit is specified, the last element will contain the remainder of the string.
 *
 * Разделяет строку по разделителю, ограничивая количество элементов.
 * Если указан лимит, последний элемент будет содержать остаток строки.
 * @param value input value/ входное значение
 * @param separator separator/ разделитель
 * @param limit limit/ лимит
 */
export declare function strSplit(value: number | string, separator: string, limit?: number): string[];

/**
 * Преобразует значение в массив.
 * Если переданное значение уже является массивом, возвращается оно само.
 * В противном случае значение оборачивается в массив.
 *
 * Converts a value to an array.
 * If the value is already an array, it returns it as is.
 * Otherwise, it wraps the value in an array.
 *
 * @param value - Значение, которое необходимо преобразовать в массив.
 *
 * The value to be converted into an array.
 * @returns Массив, содержащий переданное значение.
 *
 * An array containing the provided value.
 */
export declare function toArray<T>(value: T): T extends any[] ? T : [T];

/**
 * Convert a String to Camel Case (upper).
 *
 * Преобразование строки в Camel Case (upper).
 * @param value input value/ входное значение
 */
export declare function toCamelCase(value: string): string;

/**
 * Convert a String to Camel Case (+ first letter).
 *
 * Преобразование строки в Camel Case (+ первая буква).
 * @param value input value/ входное значение
 */
export declare function toCamelCaseFirst(value: string): string;

/**
 * Conversion to Date object.
 *
 * Преобразование в объект Date.
 * @param value input value/ входное значение
 */
export declare function toDate<T extends Date | number | string>(value?: T): (T & Date) | Date;

/**
 * Преобразует строку в формат kebab-case.
 * Преобразует все заглавные буквы в строчные, заменяет пробелы и другие символы на дефисы.
 *
 * Converts a string to kebab-case.
 * It converts uppercase letters to lowercase, replaces spaces and other characters with dashes.
 *
 * @param value - Строка, которую необходимо преобразовать.
 *
 * The string to be converted.
 * @returns Строка в формате kebab-case.
 *
 * The string in kebab-case format.
 */
export declare function toKebabCase(value: string): string;

/**
 * The method parses a string argument and returns a floating point number.
 *
 * Метод принимает строку в качестве аргумента и возвращает десятичное число
 * @param value input value/ входное значение
 */
export declare function toNumber<T extends NumberOrString>(value?: T): (T & number) | number;

/**
 * Converts the data into a number, taking into account the maximum permissible value.<br>
 * Преобразует данные в число с учетом максимально допустимого значения.
 * @param value input value /<br>входное значение
 * @param max maximum achievable value /<br>максимально достижимое значение
 * @param formatting format the number /<br>форматировать число
 * @param language formatting language /<br>язык форматирования
 */
export declare function toNumberByMax(value: string | number, max?: string | number, formatting?: boolean, language?: string): string | number;

/**
 * Converts values to percentages
 *
 * Преобразует значения в проценты
 * @param maxValue maximum value/ максимальное значение
 * @param value current value/ текущее значение
 */
export declare function toPercent(maxValue: number, value: number): number;

/**
 * Converts values to percentages (three-digit)
 *
 * Преобразует значения в проценты (трёхзначный)
 * @param maxValue maximum value/ максимальное значение
 * @param value current value/ текущее значение
 */
export declare function toPercentBy100(maxValue: number, value: number): number;

/**
 * Преобразует строку в соответствующий тип данных.
 * В зависимости от содержания строки, она может быть преобразована в
 * `undefined`, `null`, `true`, `false`, объект, число или функцию.
 *
 * Transforms a string into the corresponding data type.
 * Based on the string content, it may be transformed into `undefined`,
 * `null`, `true`, `false`, object, number, or function.
 *
 * @param value - Значение, которое необходимо преобразовать
 *
 * The value to be transformed
 * @param isFunction - Флаг, который указывает, необходимо ли проверять функцию
 * в глобальном объекте window
 *
 * A flag that indicates whether to check for a function in the global window object
 * @returns Преобразованное значение
 *
 * The transformed value
 */
export declare function transformation(value: any, isFunction?: boolean): any;

/**
 * Class for getting the translated text.
 *
 * Класс для получения переведенного текста.
 */
export declare class Translate {
    protected static item: TranslateInstance;
    /**
     * Getting the translation text by its code.
     *
     * Получение текста перевода по его коду.
     * @param name code name/ название кода
     * @param replacement If set, replaces the text with the specified values/ если установлено, заменяет текст на указанные значения
     */
    static get(name: string, replacement?: string[] | Record<string, string | number>): Promise<string>;
    /**
     * Returns an instance of the class.
     *
     * Возвращает экземпляр класса.
     */
    static getItem(): TranslateInstance;
    /**
     * Getting the translation text by its code (Sync).
     *
     * Получение текста перевода по его коду (Sync).
     * @param name code name/ название кода
     * @param first If set to false, returns an empty string if there is no text/
     * если установлено false, возвращает пустую строку, если нет текста
     * @param replacement If set, replaces the text with the specified values/
     * если установлено, заменяет текст на указанные значения
     */
    static getSync(name: string, first?: boolean, replacement?: string[] | Record<string, string | number>): string;
    /**
     * Getting a list of translations by an array of text codes.
     *
     * Получение списка переводов по массиву кодов текста.
     * @param names list of codes to get translations/ список кодов для получения переводов
     */
    static getList<T extends TranslateCode[]>(names: T): Promise<TranslateList<T>>;
    /**
     * Getting a list of translations by an array of text codes.
     *
     * Получение списка переводов по массиву кодов текста.
     * @param names list of codes to get translations/ список кодов для получения переводов
     * @param first If set to false, returns an empty string if there is no text/
     * если установлено false, возвращает пустую строку, если нет текста
     */
    static getListSync<T extends TranslateCode[]>(names: T, first?: boolean): TranslateList<T>;
    /**
     * Added a list of translated texts.
     *
     * Добавлен список переведенных текстов.
     * @param names list of codes to get translations/ список кодов для получения переводов
     */
    static add(names: string | string[]): Promise<void>;
    /**
     * Adds texts in sync mode.
     *
     * Добавляет тексты в режиме синхронизации.
     * @param data list of texts in the form of key-value/ список текстов в виде ключ-значение
     */
    static addSync(data: Record<string, string>): void;
    /**
     * Adding data in the form of a query or directly, depending on the execution environment.
     *
     * Добавление данных в виде запроса или напрямую, в зависимости от среды выполнения.
     * @param data list of texts in the form of key-value/ список текстов в виде ключ-значение
     */
    static addNormalOrSync(data: Record<string, string>): Promise<void>;
    /**
     * Adds texts synchronously by location.
     *
     * Добавляет тексты синхронно по местоположению.
     * @param data list of texts by location/ список текстов по местоположению
     */
    static addSyncByLocation(data: Record<string, Record<string, string>>): void;
    /**
     * Adds texts synchronously from the file.
     *
     * Добавляет тексты синхронно из файла.
     * @param data file with translations/ файл с переводами
     */
    static addSyncByFile(data: TranslateDataFile): void;
    /**
     * Change the path to the script for obtaining the translation.
     *
     * Изменить путь к скрипту для получения перевода.
     * @param url path to the script/ путь к скрипту
     */
    static setUrl(url: string): Translate;
    /**
     * Change the name of the property to get the translation.
     *
     * Изменить имя свойства для получения перевода.
     * @param name property name/ имя свойства
     */
    static setPropsName(name: string): Translate;
    /**
     * Change the read mode from the API.
     *
     * Изменить режим чтения из API.
     * @param value read mode/ режим чтения
     */
    static setReadApi(value: boolean): Translate;
}

/**
 * Prefix for global translations.
 * Префикс для глобальных переводов.
 */
export declare const TRANSLATE_GLOBAL_PREFIX = "global";

/**
 * Request timeout for batch loading (ms).
 * Таймаут запроса для пакетной загрузки (мс).
 */
export declare const TRANSLATE_TIME_OUT = 160;

/**
 * Translation code or a list of translation codes for template replacement.
 * Код перевода или список кодов для замены шаблона.
 */
export declare type TranslateCode = string | string[];

/**
 * A mapping of locale strings to their respective translation file loaders.
 * Сопоставление строк локалей и соответствующих им загрузчиков файлов перевода.
 */
export declare type TranslateDataFile = Record<string, TranslateDataFileItem>;

/**
 * Asynchronous loader function for a translation file.
 * Асинхронная функция-загрузчик для файла перевода.
 */
export declare type TranslateDataFileItem = () => Promise<TranslateDataFileList>;

/**
 * A simple key-value record of translations from a file.
 * Простой рекорд «ключ-значение» с переводами из файла.
 */
export declare type TranslateDataFileList = Record<string, string>;

/**
 * Class for working with translation files.
 *
 * Класс для работы с файлами перевода.
 */
export declare class TranslateFile {
    protected language: string | (() => string);
    protected location: string | (() => string);
    /** List of files with translations/ Список файлов с переводами */
    protected files: TranslateDataFile;
    /** Data from files/ Данные из файлов */
    protected data: Record<string, TranslateDataFileList>;
    /**
     * Creates an instance of the class.
     *
     * Создает экземпляр класса.
     * @param data list of files/ список файлов
     * @param language language/ язык
     * @param location location/ местоположение
     */
    constructor(data?: TranslateDataFile, language?: string | (() => string), location?: string | (() => string));
    /**
     * Checks if there are files for the current location.
     *
     * Проверяет, есть ли файлы для текущего местоположения.
     */
    isFile(): boolean;
    /**
     * Returns the location.
     *
     * Возвращает местоположение.
     */
    getLocation(): string;
    /**
     * Returns the language.
     *
     * Возвращает язык.
     */
    getLanguage(): string;
    /**
     * Returns a list of translations from the file for the current location.
     *
     * Возвращает список переводов из файла для текущего местоположения.
     */
    getList(): Promise<TranslateDataFileList | undefined>;
    /**
     * Adds a list of files with translations.
     *
     * Добавляет список файлов с переводами.
     * @param data list of files/ список файлов
     */
    add(data: TranslateDataFile): void;
    /**
     * Returns the key for the current location from the list of files.
     *
     * Возвращает ключ для текущего местоположения из списка файлов.
     */
    protected getIndex(): string | undefined;
    /**
     * Returns a list of translations from the cache.
     *
     * Возвращает список переводов из кэша.
     * @param index file key/ ключ файла
     */
    protected getByData(index: string): TranslateDataFileList | undefined;
    /**
     * Returns a list of translations from the file and caches the result.
     *
     * Возвращает список переводов из файла и кэширует результат.
     * @param index file key/ ключ файла
     */
    protected getByFile(index: string): Promise<TranslateDataFileList | undefined>;
}

/**
 * Class for getting the translated text.
 *
 * Класс для получения переведенного текста.
 */
export declare class TranslateInstance {
    protected url: string;
    protected propsName: string;
    protected readonly files: TranslateFile;
    /** List of translations/ Список переводов */
    protected readonly data: Record<string, string>;
    /** Cache of codes to get/ Кэш кодов для получения */
    protected cache: string[];
    /** List of resolves for promises/ Список разрешений для промисов */
    protected resolveList: (() => void)[];
    /** Timeout for getting translations/ Таймаут для получения переводов */
    protected timeout?: any;
    /** Flag indicating whether to read from the API/ Флаг, указывающий, нужно ли читать из API */
    protected isReadApi: boolean;
    /**
     * Creates an instance of the class.
     *
     * Создает экземпляр класса.
     * @param url URL for getting translations/ URL для получения переводов
     * @param propsName Property name for getting translations/ Имя свойства для получения переводов
     * @param files List of files with translations/ Список файлов с переводами
     */
    constructor(url?: string, propsName?: string, files?: TranslateFile);
    /**
     * Getting the translation text by its code.
     *
     * Получение текста перевода по его коду.
     * @param name code name/ название кода
     * @param replacement If set, replaces the text with the specified values/ если установлено, заменяет текст на указанные значения
     */
    get(name: string, replacement?: string[] | Record<string, string | number>): Promise<string>;
    /**
     * Getting the translation text by its code (Sync).
     *
     * Получение текста перевода по его коду (Sync).
     * @param name code name/ название кода
     * @param first If set to false, returns an empty string if there is no text/
     * если установлено false, возвращает пустую строку, если нет текста
     * @param replacement If set, replaces the text with the specified values/
     * если установлено, заменяет текст на указанные значения
     */
    getSync(name: string, first?: boolean, replacement?: string[] | Record<string, string | number>): string;
    /**
     * Getting a list of translations by an array of text codes.
     *
     * Получение списка переводов по массиву кодов текста.
     * @param names list of codes to get translations/ список кодов для получения переводов
     */
    getList<T extends TranslateCode[]>(names: T): Promise<TranslateList<T>>;
    /**
     * Getting a list of translations by an array of text codes.
     *
     * Получение списка переводов по массиву кодов текста.
     * @param names list of codes to get translations/ список кодов для получения переводов
     * @param first If set to false, returns an empty string if there is no text/
     * если установлено false, возвращает пустую строку, если нет текста
     */
    getListSync<T extends TranslateCode[]>(names: T, first?: boolean): TranslateList<T>;
    /**
     * Added a list of translated texts.
     *
     * Добавлен список переведенных текстов.
     * @param names list of codes to get translations/ список кодов для получения переводов
     */
    add(names: string | string[]): Promise<void>;
    /**
     * Adds texts in sync mode.
     *
     * Добавляет тексты в режиме синхронизации.
     * @param data list of texts in the form of key-value/ список текстов в виде ключ-значение
     */
    addSync(data: Record<string, string>): void;
    /**
     * Adding data in the form of a query or directly, depending on the execution environment.
     *
     * Добавление данных в виде запроса или напрямую, в зависимости от среды выполнения.
     * @param data list of texts in the form of key-value/ список текстов в виде ключ-значение
     */
    addNormalOrSync(data: Record<string, string>): Promise<void>;
    /**
     * Adds texts synchronously by location.
     *
     * Добавляет тексты синхронно по местоположению.
     * @param data list of texts by location/ список текстов по местоположению
     */
    addSyncByLocation(data: Record<string, Record<string, string>>): void;
    /**
     * Adds texts synchronously from the file.
     *
     * Добавляет тексты синхронно из файла.
     * @param data file with translations/ файл с переводами
     */
    addSyncByFile(data: TranslateDataFile): void;
    /**
     * Change the path to the script for obtaining the translation.
     *
     * Изменить путь к скрипту для получения перевода.
     * @param url path to the script/ путь к скрипту
     */
    setUrl(url: string): this;
    /**
     * Change the name of the property to get the translation.
     *
     * Изменить имя свойства для получения перевода.
     * @param name property name/ имя свойства
     */
    setPropsName(name: string): this;
    /**
     * Change the read mode from the API.
     *
     * Изменить режим чтения из API.
     * @param value read mode/ режим чтения
     */
    setReadApi(value: boolean): this;
    /**
     * Checks for translation by code, taking into account fallback options.
     *
     * Проверяет наличие перевода по коду с учетом запасных вариантов.
     * @param name code name/ название кода
     */
    protected hasName(name: string): boolean;
    /**
     * Retrieves translation text by code, returning the first matching fallback.
     *
     * Получает текст перевода по коду, возвращая первое совпадение из запасных вариантов.
     * @param name code name/ название кода
     */
    protected getText(name: string): string | undefined;
    /**
     * Getting the full title for translation.
     *
     * Получение полного названия для перевода.
     * @param name code name/ название кода
     */
    protected getName(name: string): string;
    /**
     * Getting the title for translation by language.
     *
     * Получение названия для перевода по языку.
     * @param name code name/ название кода
     */
    protected getNameByLanguage(name: string): string;
    /**
     * Getting the title for translation globally.
     *
     * Получение названия для перевода глобально.
     * @param name code name/ название кода
     */
    protected getNameByGlobal(name: string): string;
    /**
     * Returns a list of names that are not yet in the list.
     *
     * Возвращает список имен, которых еще нет в списке.
     * @param names list of codes to get translations/ список кодов для получения переводов
     */
    protected getNamesNone(names: string | string[]): string[];
    /**
     * Getting the list of translations from the server.
     *
     * Получение списка переводов с сервера.
     */
    protected getResponse(): Promise<Record<string, string>>;
    /**
     * Replaces the text with the specified values.
     *
     * Заменяет текст на указанные значения.
     * @param text text to replace/ текст для замены
     * @param replacement values for replacement/ значения для замены
     */
    protected replacement(text: string, replacement?: string[] | Record<string, string | number>): any;
    /**
     * Adding translation data from the server.
     *
     * Добавление данных по переводу с сервера.
     */
    protected make(): Promise<void>;
    /**
     * Adding translation data from the list.
     *
     * Добавление данных по переводу из списка.
     * @param list list of translations/ список переводов
     */
    protected makeList(list: Record<string, string>): void;
}

/**
 * Return type for translation retrieval: an object if a list was requested, or a string for a single key.
 * Тип возвращаемого значения для получения перевода: объект, если был запрошен список, или строка для одного ключа.
 */
export declare type TranslateItemOrList<T extends TranslateCode> = T extends string[] ? TranslateList<T> : string;

/**
 * Object with translated strings, where the keys are the names of the translation codes.
 * Объект с переведенными строками, где ключи — имена кодов переводов.
 */
export declare type TranslateList<T extends TranslateCode[]> = {
    [K in T[number] as K extends readonly string[] ? K[0] : K]: string;
};

/**
 * Converts a Uint8Array to a base64 encoded string.
 *
 * Преобразует Uint8Array в строку, закодированную в base64.
 * @param bytes binary data as Uint8Array / бинарные данные в виде Uint8Array
 * @returns base64 encoded string / строка, закодированная в base64
 */
export declare function uint8ArrayToBase64(bytes: Uint8Array): string;

/** Union type for undefined and null values/ Объединенный тип для undefined и null значений */
export declare type Undefined = undefined | null;

/**
 * Removes duplicate entries in an array.
 *
 * Удаляет повторяющиеся записи в массиве.
 * @param value input value/ входное значение
 */
export declare function uniqueArray<T>(value: T[]): T[];

/**
 * Writes data to the buffer.
 *
 * Записывает данные в буфер.
 * @param text text for recording/ текст для записи
 */
export declare function writeClipboardData(text: string): Promise<void>;

export { }

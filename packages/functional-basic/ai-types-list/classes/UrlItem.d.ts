// md5:b6fadf4d713282b96ae22f24bd7ca671
/**
 * Isomorphic utility class for working with URLs.
 * Provides read-only getters and a single 'set' method for modifying the URL.
 *
 * Изоморфный утилитарный класс для работы с URL.
 * Предоставляет геттеры только для чтения и единственный метод «set» для изменения URL.
 */
export declare class UrlItem {
    /** Underlying standard URL object / Лежащий в основе стандартный объект URL */
    private url;
    /**
     * Returns a request-isolated instance of UrlItem.
     *
     * Возвращает изолированный в рамках запроса экземпляр UrlItem.
     * @returns UrlItem instance / экземпляр UrlItem
     */
    static getInstance(): UrlItem;
    /**
     * Constructs a new Url instance.
     *
     * Создает новый экземпляр Url.
     * @param url URL string or standard URL object / строка URL или стандартный объект URL
     */
    constructor(url?: string | URL);
    /** Full URL string / Полная строка URL */
    get href(): string;
    /** Protocol including trailing colon / Протокол, включая ведущее двоеточие */
    get protocol(): string;
    /** Username / Имя пользователя */
    get username(): string;
    /** Password / Пароль */
    get password(): string;
    /** Host (hostname and port) / Хост (имя хоста и порт) */
    get host(): string;
    /** Hostname (excluding port) / Имя хоста (без порта) */
    get hostname(): string;
    /** Port / Порт */
    get port(): string;
    /** Path name / Путь к ресурсу */
    get pathname(): string;
    /** Search string including leading question mark / Строка запроса, включая ведущий вопросительный знак */
    get search(): string;
    /** Readonly search params object / Объекты параметров поиска только для чтения */
    get searchParams(): URLSearchParams;
    /** Hash string including leading hash sign / Хеш-строка, включая ведущий знак решетки */
    get hash(): string;
    /** Origin of the URL (readonly) / Источник URL (только для чтения) */
    get origin(): string;
    /**
     * Checks if the specified query parameter exists.
     *
     * Проверяет, существует ли указанный параметр запроса.
     * @param name parameter name / имя параметра
     * @returns check result / результат проверки
     */
    hasParam(name: string): boolean;
    /**
     * Returns the value of a query parameter.
     *
     * Возвращает значение параметра запроса.
     * @param name parameter name / имя параметра
     * @returns parameter value or undefined if not found / значение параметра или undefined, если не найдено
     */
    getParam(name: string): string | undefined;
    /**
     * Returns all query parameters as an object with transformed types.
     *
     * Возвращает все параметры запроса в виде объекта с преобразованными типами.
     * @returns Record<string, any> object of parameters / объект параметров
     */
    getParams(): Record<string, any>;
    /**
     * Updates the URL value.
     *
     * Обновляет значение URL.
     * @param url URL string or standard URL object / строка URL или стандартный объект URL
     * @returns this Url instance / текущий экземпляр Url
     */
    set(url?: string | URL): this;
    /**
     * Sets the value of a query parameter.
     *
     * Устанавливает значение параметра запроса.
     * @param name parameter name / имя параметра
     * @param value parameter value / значение параметра
     * @returns this UrlItem instance / текущий экземпляр UrlItem
     */
    setParam(name: string, value: string): this;
    /**
     * Replaces all query parameters with the specified object.
     *
     * Заменяет все параметры запроса на указанный объект.
     * @param params parameters to set / параметры для установки
     * @returns this UrlItem instance / текущий экземпляр UrlItem
     */
    setParams(params: Record<string, any>): this;
    /**
     * Deletes a query parameter.
     *
     * Удаляет параметр запроса.
     * @param name parameter name / имя параметра
     * @returns this UrlItem instance / текущий экземпляр UrlItem
     */
    deleteParam(name: string): this;
    /**
     * Converts the Url instance to its string representation.
     *
     * Преобразует экземпляр Url в его строковое представление.
     * @returns full URL string / полная строка URL
     */
    toString(): string;
    /**
     * Converts the Url instance to JSON string representation.
     *
     * Преобразует экземпляр Url в строковое представление JSON.
     * @returns full URL string / полная строка URL
     */
    toJSON(): string;
}

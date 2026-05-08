import { ApiCacheItem, ApiCacheList, ApiFetch } from '../types/apiTypes';
/**
 * Class for caching API responses.
 *
 * Класс для кэширования ответов API.
 */
export declare class ApiCache {
    /** Cache storage / Кэш-хранилища */
    protected static items?: ApiCacheList;
    /** Storage mechanism for getting data / механизм хранения для получения данных */
    protected static getListener?: (key: string) => Promise<ApiCacheItem | undefined>;
    /** Storage mechanism for setting data / механизм хранения для сохранения данных */
    protected static setListener?: (key: string, value: ApiCacheItem) => Promise<boolean>;
    /** Storage mechanism for removing data / механизм хранения для удаления данных */
    protected static removeListener?: (key: string) => Promise<boolean>;
    /**
     * Number of data retrieval requests before starting the cleaning of old cache/
     * Количество запросов получения данных перед началом очистки старого кэша
     */
    protected static cacheStepAgeClearOld: number;
    /** Number of data retrieval requests before starting the cleaning of old cache / Количество запросов получения данных перед началом очистки старого кэша */
    protected static stepAgeClearOld: number;
    /**
     * Initializes the storage with listeners.
     *
     * Инициализирует хранилище слушателями.
     * @param getListener Storage mechanism for getting data / механизм хранения для получения данных
     * @param setListener Storage mechanism for setting data / механизм хранения для сохранения данных
     * @param removeListener Storage mechanism for removing data / механизм хранения для удаления данных
     * @param cacheStepAgeClearOld Number of data retrieval requests before starting the cleaning of old cache / количество запросов получения данных перед началом очистки старого кэша
     */
    static init(getListener: (key: string) => Promise<ApiCacheItem | undefined>, setListener: (key: string, value: ApiCacheItem) => Promise<boolean>, removeListener: (key: string) => Promise<boolean>, cacheStepAgeClearOld?: number): void;
    /**
     * Resets the cache by clearing all in-memory items and resetting listeners.
     *
     * Сбрасывает кэш, очищая все элементы в памяти и сбрасывая слушатели.
     * @returns void / ничего не возвращает
     */
    static reset(): void;
    /**
     * Gets data from cache.
     *
     * Получает данные из кэша.
     * @param key cache key / ключ кэша
     * @returns T | undefined / данные из кэша или undefined
     */
    static get<T>(key: string): Promise<T | undefined>;
    /**
     * Gets data from cache using fetch options.
     *
     * Получает данные из кэша с использованием опций fetch.
     * @param fetch fetch options / опции fetch
     * @returns T | undefined / данные из кэша или undefined
     */
    static getByFetch<T>(fetch: ApiFetch): Promise<T | undefined>;
    /**
     * Saves data to cache.
     *
     * Сохраняет данные в кэш.
     * @param key cache key / ключ кэша
     * @param value data to be stored / данные для хранения
     * @param age cache age in seconds / возраст кэша в секундах
     */
    static set<T>(key: string, value: T, age?: number): Promise<void>;
    /**
     * Saves data to cache using fetch options.
     *
     * Сохраняет данные в кэш с использованием опций fetch.
     * @param fetch fetch options / опции fetch
     * @param value data to be stored / данные для хранения
     * @returns Promise<void> / Promise без возвращаемого значения
     */
    static setByFetch<T>(fetch: ApiFetch, value: T): Promise<void>;
    /**
     * Removes data from cache.
     *
     * Удаляет данные из кэша.
     * @param key cache key / ключ кэша
     * @returns Promise<void> / Promise без возвращаемого значения
     */
    static remove(key: string): Promise<void>;
    /**
     * Checks if the cache is enabled.
     *
     * Проверяет, включен ли кэш.
     * @param fetch fetch options / опции fetch
     * @returns true if cache is enabled / true, если кэш включен
     */
    protected static isCache(fetch: ApiFetch): boolean;
    /**
     * Checks if cache item is still valid (not expired).
     *
     * Проверяет, действителен ли элемент кэша (не истек ли срок действия).
     * @param item cache item / элемент кэша
     */
    protected static isAge(item?: ApiCacheItem): boolean;
    /**
     * Checks if the key exists in the cache.
     *
     * Проверяет, существует ли ключ в кэше.
     * @param key cache key / ключ кэша
     * @returns true if key exists / true, если ключ существует
     */
    protected static isItem(key: string): boolean;
    /**
     * Generates cache key from fetch options.
     *
     * Генерирует ключ кэша из опций fetch.
     * @param fetch fetch options / опции fetch
     * @returns cache key string / строка ключа кэша (JSON.stringify)
     */
    protected static generateKey(fetch: ApiFetch): string;
    /**
     * Gets data from cache using listener.
     *
     * Получает данные из кэша с использованием слушателя.
     * @param key cache key / ключ кэша
     * @returns cache item or undefined / элемент кэша или undefined (если не существует или истек срок действия)
     */
    protected static getItemOrListener(key: string): Promise<ApiCacheItem | undefined>;
    /**
     * Gets list of cache items.
     *
     * Получает список элементов кэша.
     * @returns list of cache items / список элементов кэша
     */
    protected static getList(): ApiCacheList;
    /**
     * Saves data to cache using listener.
     *
     * Сохраняет данные в кэш с использованием слушателя.
     * @param key cache key / ключ кэша
     * @param value data to be stored / данные для хранения
     * @returns Promise<void>
     */
    protected static setItemOrListener(key: string, value: ApiCacheItem): Promise<void>;
    /**
     * Removes data from cache using listener.
     *
     * Удаляет данные из кэша с использованием слушателя.
     * @param key cache key / ключ кэша
     * @returns Promise<void>
     */
    protected static removeItemOrListener(key: string): Promise<void>;
    /**
     * Clears old in-memory cache data.
     *
     * Очищает старый кэш в памяти.
     * @returns Promise<void> / Promise без возвращаемого значения (удаляет устаревшие элементы из кэша)
     */
    protected static clearOld(): Promise<void>;
}

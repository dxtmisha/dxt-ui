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

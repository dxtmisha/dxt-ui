/**
 * Class for managing a single cached value with dependency tracking.
 *
 * Класс для управления одним кэшированным значением с отслеживанием зависимостей.
 * @deprecated This class is obsolete and should not be used / Этот класс устарел и не рекомендуется к использованию
 */
export declare class CacheItem<T> {
    private readonly callback;
    private cache?;
    private cacheOld?;
    private comparisons;
    /**
     * Creates a new CacheItem instance.
     *
     * Создает новый экземпляр CacheItem.
     * @param callback - Function to compute the cached value / Функция для вычисления кэшированного значения
     */
    constructor(callback: () => T);
    /**
     * Returns the cached value. Recomputes if the comparison array has changed.
     *
     * Возвращает кэшированное значение. Пересчитывает, если массив comparison изменился.
     * @param comparison - Array of values to track for cache invalidation / Массив значений для отслеживания инвалидации кэша
     * @returns The cached or newly computed value / Кэшированное или новое вычисленное значение
     */
    getCache(comparison: any[]): T;
    /**
     * Returns the previous cached value before the last recalculation.
     *
     * Возвращает предыдущее кэшированное значение до последнего пересчета.
     * @returns The previous cached value, or undefined if no recalculation has occurred / Предыдущее кэшированное значение, или undefined если пересчет не происходил
     */
    getCacheOld(): T | undefined;
    /**
     * Asynchronously returns the cached value. Recomputes if the comparison array has changed.
     *
     * Асинхронно возвращает кэшированное значение. Пересчитывает, если массив comparison изменился.
     * @param comparison - Array of values to track for cache invalidation / Массив значений для отслеживания инвалидации кэша
     * @returns Promise resolving to the cached or newly computed value / Promise, разрешающийся в кэшированное или новое вычисленное значение
     */
    getCacheAsync(comparison: any[]): Promise<T>;
    /**
     * Executes the callback and stores the result in cache.
     *
     * Выполняет callback и сохраняет результат в кэш.
     */
    private setCache;
    /**
     * Asynchronously executes the callback and stores the result in cache.
     *
     * Асинхронно выполняет callback и сохраняет результат в кэш.
     */
    private setCacheAsync;
    /**
     * Determines if the cache should be updated based on comparison array changes.
     *
     * Определяет, следует ли обновить кэш на основе изменений в массиве comparison.
     * @param comparison - New comparison array to compare against / Новый массив comparison для сравнения
     * @returns True if cache should be updated, false otherwise / True, если кэш нужно обновить, иначе false
     */
    private isUpdate;
}

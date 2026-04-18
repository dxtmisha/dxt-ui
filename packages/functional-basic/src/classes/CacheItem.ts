/**
 * Class for managing a single cached value with dependency tracking.
 *
 * Класс для управления одним кэшированным значением с отслеживанием зависимостей.
 * @deprecated This class is obsolete and should not be used / Этот класс устарел и не рекомендуется к использованию
 */
export class CacheItem<T> {
  private cache?: T
  private cacheOld?: T
  private comparisons: any[] = []

  /**
   * Creates a new CacheItem instance.
   *
   * Создает новый экземпляр CacheItem.
   * @param callback - Function to compute the cached value / Функция для вычисления кэшированного значения
   */
  constructor(
    private readonly callback: () => T
  ) {
  }

  /**
   * Returns the cached value. Recomputes if the comparison array has changed.
   *
   * Возвращает кэшированное значение. Пересчитывает, если массив comparison изменился.
   * @param comparison - Array of values to track for cache invalidation / Массив значений для отслеживания инвалидации кэша
   * @returns The cached or newly computed value / Кэшированное или новое вычисленное значение
   */
  getCache(comparison: any[]): T {
    if (this.isUpdate(comparison)) {
      this.cacheOld = this.cache
      this.setCache()
    }

    return this.cache as T
  }

  /**
   * Returns the previous cached value before the last recalculation.
   *
   * Возвращает предыдущее кэшированное значение до последнего пересчета.
   * @returns The previous cached value, or undefined if no recalculation has occurred / Предыдущее кэшированное значение, или undefined если пересчет не происходил
   */
  getCacheOld(): T | undefined {
    return this.cacheOld
  }

  /**
   * Asynchronously returns the cached value. Recomputes if the comparison array has changed.
   *
   * Асинхронно возвращает кэшированное значение. Пересчитывает, если массив comparison изменился.
   * @param comparison - Array of values to track for cache invalidation / Массив значений для отслеживания инвалидации кэша
   * @returns Promise resolving to the cached or newly computed value / Promise, разрешающийся в кэшированное или новое вычисленное значение
   */
  async getCacheAsync(comparison: any[]): Promise<T> {
    if (this.isUpdate(comparison)) {
      this.cacheOld = this.cache
      await this.setCacheAsync()
    }

    return this.cache as T
  }

  /**
   * Executes the callback and stores the result in cache.
   *
   * Выполняет callback и сохраняет результат в кэш.
   */
  private setCache(): void {
    this.cache = this.callback()
  }

  /**
   * Asynchronously executes the callback and stores the result in cache.
   *
   * Асинхронно выполняет callback и сохраняет результат в кэш.
   */
  private async setCacheAsync(): Promise<void> {
    this.cache = await this.callback()
  }

  /**
   * Determines if the cache should be updated based on comparison array changes.
   *
   * Определяет, следует ли обновить кэш на основе изменений в массиве comparison.
   * @param comparison - New comparison array to compare against / Новый массив comparison для сравнения
   * @returns True if cache should be updated, false otherwise / True, если кэш нужно обновить, иначе false
   */
  private isUpdate(comparison: any[]): boolean {
    if (
      this.cache === undefined
      || this.comparisons.length !== comparison.length
      || this.comparisons.findIndex((value, index) => value !== comparison[index]) >= 0
    ) {
      this.comparisons = [...comparison]
      return true
    }

    return false
  }
}

// ai-none

/**
 * Class for managing a single cached value with dependency tracking.
 *
 * Класс для управления одним кэшированным значением с отслеживанием зависимостей.
 * @deprecated This class is obsolete and should not be used / Этот класс устарел и не рекомендуется к использованию
 */
export class CacheItem<T = unknown> {
  /** Cached value / Кэшированное значение */
  private cache?: T
  /** Previous cached value / Предыдущее кэшированное значение */
  private cacheOld?: T
  /** Dependency comparison array / Массив сравнения зависимостей */
  private comparisons: unknown[] = []
  /** Current asynchronous computation / Текущее асинхронное вычисление */
  private pending?: Promise<T>
  /** Dependencies of the current computation / Зависимости текущего вычисления */
  private pendingComparisons: unknown[] = []
  /** Latest computation revision / Ревизия последнего вычисления */
  private revision: number = 0

  /**
   * Creates a new CacheItem instance.
   *
   * Создает новый экземпляр CacheItem.
   * @param callback Function to compute the cached value / Функция для вычисления кэшированного значения
   */
  constructor(
    private callback: () => T
  ) {
  }

  /**
   * Returns the cached value. Recomputes if the comparison array has changed.
   *
   * Возвращает кэшированное значение. Пересчитывает, если массив comparison изменился.
   * @param comparison Array of values to track for cache invalidation / Массив значений для отслеживания инвалидации кэша
   * @returns The cached or newly computed value / Кэшированное или новое вычисленное значение
   */
  getCache(comparison: unknown[] = []): T {
    if (this.isUpdate(comparison)) {
      const comparisons = [...comparison]
      const revision = ++this.revision
      this.pending = undefined
      this.pendingComparisons = []

      const cache = this.callback()

      if (revision === this.revision) {
        this.setCache(cache, comparisons)
      }

      return cache
    }

    return this.cache as T
  }

  /**
   * Asynchronously returns the cached value, sharing an active computation with matching dependencies.
   * Only the latest computation may update the cache; failed computations can be retried.
   *
   * Асинхронно возвращает кэшированное значение, разделяя активное вычисление с совпадающими зависимостями.
   * Только последнее вычисление обновляет кэш; неудачные вычисления можно повторить.
   * @param comparison Array of values to track for cache invalidation / Массив значений для отслеживания инвалидации кэша
   * @returns Promise resolving to the cached or newly computed value / Promise, разрешающийся в кэшированное или новое вычисленное значение
   */
  async getCacheAsync(comparison: unknown[] = []): Promise<T> {
    if (this.pending && this.isComparison(comparison, this.pendingComparisons)) {
      return this.pending
    }

    if (!this.isUpdate(comparison)) {
      return this.cache as T
    }

    const comparisons = [...comparison]
    const pending = this.setCacheAsync(comparisons, ++this.revision)
    this.pending = pending
    this.pendingComparisons = comparisons

    try {
      return await pending
    } finally {
      if (this.pending === pending) {
        this.pending = undefined
        this.pendingComparisons = []
      }
    }
  }

  /**
   * Returns the cached value preceding the last successful update.
   *
   * Возвращает кэшированное значение, предшествующее последнему успешному обновлению.
   * @returns The previous cached value, or undefined if no recalculation has occurred / Предыдущее кэшированное значение, или undefined если пересчет не происходил
   */
  getCacheOld(): T | undefined {
    return this.cacheOld
  }

  /**
   * Sets the factory used by subsequent computations without invalidating the cache.
   *
   * Задаёт фабрику последующих вычислений без инвалидации кэша.
   * @param callback Current value factory / Текущая фабрика значения
   * @returns Current instance / Текущий экземпляр
   */
  setCallback(callback: () => T): this {
    this.callback = callback
    return this
  }

  /**
   * Compares dependency arrays by their elements and references.
   *
   * Сравнивает массивы зависимостей по их элементам и ссылкам.
   * @param comparison Requested dependencies / Запрошенные зависимости
   * @param previous Previously captured dependencies / Ранее сохранённые зависимости
   * @returns Whether both dependency arrays match / Совпадают ли массивы зависимостей
   */
  private isComparison(comparison: unknown[], previous: unknown[]): boolean {
    return previous.length === comparison.length
      && previous.every((value, index) => value === comparison[index])
  }

  /**
   * Determines if the cache should be updated based on comparison array changes.
   *
   * Определяет, следует ли обновить кэш на основе изменений в массиве comparison.
   * @param comparison New comparison array to compare against / Новый массив comparison для сравнения
   * @returns True if cache should be updated, false otherwise / True, если кэш нужно обновить, иначе false
   */
  private isUpdate(comparison: unknown[]): boolean {
    return this.cache === undefined || !this.isComparison(comparison, this.comparisons)
  }

  /**
   * Commits a successful result together with its dependencies and previous value.
   *
   * Сохраняет успешный результат вместе с его зависимостями и предыдущим значением.
   * @param cache Successfully computed value / Успешно вычисленное значение
   * @param comparison Captured dependencies / Снимок зависимостей
   */
  private setCache(cache: T, comparison: unknown[]): void {
    this.cacheOld = this.cache
    this.cache = cache
    this.comparisons = comparison
  }

  /**
   * Computes a value asynchronously and commits it only if its revision is still current.
   *
   * Асинхронно вычисляет значение и сохраняет его только при актуальной ревизии.
   * @param comparison Captured dependencies / Снимок зависимостей
   * @param revision Computation revision / Ревизия вычисления
   * @returns The result of this computation / Результат данного вычисления
   */
  private async setCacheAsync(comparison: unknown[], revision: number): Promise<T> {
    const cache = await this.callback()

    if (revision === this.revision) {
      this.setCache(cache, comparison)
    }

    return cache
  }
}

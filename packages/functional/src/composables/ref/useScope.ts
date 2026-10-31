import { getCurrentScope, type EffectScope } from 'vue'

/** Return type for useScope / Тип возвращаемого значения для useScope */
export interface UseScopeItem {
  /** Current effect scope / Текущая область эффектов */
  scope: EffectScope | undefined
  /**
   * Checks whether the scope is active or absent.
   * Returns true when active or when no scope exists (unscoped execution), and false when stopped.
   *
   * Проверяет, активна ли область эффектов или отсутствует.
   * Возвращает true при активности или при отсутствии области (выполнение вне скоупа), и false при остановке.
   * @returns true if active or absent, false if stopped / true, если активна или отсутствует, false, если остановлена
   */
  is: () => boolean
  /**
   * Executes a callback within the scope if present, or directly if unscoped.
   * Returns undefined if the scope is stopped.
   *
   * Выполняет колбэк внутри области эффектов при её наличии, или напрямую при её отсутствии.
   * Возвращает undefined, если область эффектов остановлена.
   * @param callback function to execute / функция для выполнения
   * @returns result of the callback or undefined / результат колбэка или undefined
   */
  run: <T>(callback: () => T) => T | undefined
  /**
   * Executes an asynchronous callback within the scope and awaits its result.
   * Discards outdated executions when a new asynchronous operation starts or the scope stops.
   *
   * Выполняет асинхронный колбэк внутри области эффектов и ожидает его результат.
   * Отменяет устаревшие выполнения при запуске новой асинхронной операции или остановке области.
   * @param callback asynchronous function to execute / асинхронная функция для выполнения
   * @returns promise resolving to the callback result or undefined / промис с результатом колбэка или undefined
   */
  runAsync: <T>(callback: (isCurrent: () => boolean) => Promise<T> | T) => Promise<T | undefined>
}

/**
 * Returns the current effect scope and helper methods to verify activity and run callbacks.
 *
 * Возвращает текущую область эффектов и вспомогательные методы для проверки активности и выполнения колбэков.
 * @param targetScope optional target effect scope / опциональная целевая область эффектов
 * @returns object containing the effect scope, active check, and runners /
 * объект, содержащий область эффектов, проверку активности и запуск функций
 */
export function useScope(
  targetScope: EffectScope | undefined = getCurrentScope()
): UseScopeItem {
  /** Current execution identifier to track the latest active run / Текущий идентификатор выполнения для отслеживания актуального запуска */
  let current = 0

  /**
   * Checks whether the scope is active or absent.
   *
   * Проверяет, активна ли область эффектов или отсутствует.
   * @returns true if active or absent, false if stopped / true, если активна или отсутствует, false, если остановлена
   */
  const is = (): boolean => targetScope?.active !== false

  /**
   * Executes a callback within the scope if present, or directly if unscoped.
   *
   * Выполняет колбэк внутри области эффектов при её наличии, или напрямую при её отсутствии.
   * @param callback function to execute / функция для выполнения
   * @returns result of the callback or undefined / результат колбэка или undefined
   */
  const run = <T>(callback: () => T): T | undefined => {
    if (!is()) {
      return undefined
    }

    return targetScope ? targetScope.run(callback) : callback()
  }

  /**
   * Executes an asynchronous callback within the scope and awaits its result.
   * Discards outdated executions when a new asynchronous operation starts or the scope stops.
   *
   * Выполняет асинхронный колбэк внутри области эффектов и ожидает его результат.
   * Отменяет устаревшие выполнения при запуске новой асинхронной операции или остановке области.
   * @param callback asynchronous function to execute / асинхронная функция для выполнения
   * @returns promise resolving to the callback result or undefined / промис с результатом колбэка или undefined
   */
  const runAsync = async <T>(
    callback: (isCurrent: () => boolean) => Promise<T> | T
  ): Promise<T | undefined> => {
    if (!is()) {
      return undefined
    }

    /** Identifier of the current run / Идентификатор текущего запуска */
    const executionId = ++current

    /**
     * Checks whether this evaluation is still current and the scope is active.
     *
     * Проверяет, актуально ли ещё это вычисление и активна ли область.
     * @returns true if current and active / true, если актуально и активно
     */
    const isCurrent = (): boolean => executionId === current && is()

    try {
      const result = await run(() => callback(isCurrent))

      if (isCurrent()) {
        return result
      }

      return undefined
    } catch (error) {
      if (isCurrent()) {
        throw error
      }

      return undefined
    }
  }

  return {
    scope: targetScope,
    is,
    run,
    runAsync
  }
}

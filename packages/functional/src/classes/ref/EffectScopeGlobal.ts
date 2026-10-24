import { EffectScope, effectScope } from 'vue'
import { ServerStorage } from '@dxtmisha/functional-basic'

/**
 * Static entry point for running effects in a lazily created detached Vue scope. The scope is cached through `ServerStorage`, so SSR ownership follows the initialized request context.
 *
 * Статическая точка входа для эффектов в лениво созданной отсоединённой области Vue. Область кэшируется через `ServerStorage`; при SSR её владелец определяется инициализированным контекстом запроса.
 */
export class EffectScopeGlobal {
  /**
   * Runs the callback synchronously inside the cached detached effect scope and returns its result.
   *
   * Синхронно выполняет обработчик в кэшированной отсоединённой области эффектов и возвращает результат.
   * @param fn Callback to execute inside the detached scope. / Обработчик для выполнения в отсоединённой области.
   * @returns Callback result, or undefined when the stored scope is inactive. / Результат обработчика либо undefined для неактивной сохранённой области.
   */
  static run<T>(fn: () => T): T | undefined {
    return this.getScope().run(fn)
  }

  /**
   * Gets the global effect scope instance.
   *
   * Получает экземпляр глобальной области действия эффекта.
   * @returns the global effect scope instance/ экземпляр глобальной области действия эффекта
   */
  private static getScope(): EffectScope {
    return ServerStorage.get<EffectScope>(
      '__ui:effect-scope-global__',
      () => effectScope(true)
    )
  }
}

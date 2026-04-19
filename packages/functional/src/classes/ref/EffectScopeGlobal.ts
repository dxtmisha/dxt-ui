import { EffectScope, effectScope } from 'vue'
import { ServerStorage } from '@dxtmisha/functional-basic'

/**
 * Global effect scope class.
 *
 * Глобальный класс для области действия эффекта.
 */
export class EffectScopeGlobal {
  /**
   * Runs a function within the global scope.
   *
   * Запускает функцию в глобальной области.
   * @param fn function/ функция
   * @returns the return value of the function/ возвращаемое значение функции
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

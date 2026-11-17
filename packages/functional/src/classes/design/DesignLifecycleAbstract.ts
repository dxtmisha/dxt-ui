import type { EffectScope } from 'vue'

/**
 * Abstract marker class for dependencies with synchronous component lifecycle callbacks. `DesignLogicAbstract` invokes these callbacks only on instances derived from this class.
 *
 * Абстрактный базовый класс зависимостей с синхронными обработчиками жизненного цикла. `DesignLogicAbstract` вызывает эти обработчики только у экземпляров, наследующих этот класс.
 */
export abstract class DesignLifecycleAbstract {
  /** Optional synchronous mount callback receiving the active Vue effect scope. / Необязательный синхронный обработчик монтирования, получающий активную область эффектов Vue. */
  readonly onMounted?: (scope?: EffectScope) => void

  /** Optional synchronous cleanup callback receiving the Vue effect scope. / Необязательный синхронный обработчик очистки, получающий область эффектов Vue. */
  readonly onUnmounted?: (scope?: EffectScope) => void
}

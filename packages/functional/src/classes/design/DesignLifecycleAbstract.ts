/**
 * Abstract marker class for dependencies with synchronous component lifecycle callbacks. `DesignLogicAbstract` invokes these callbacks only on instances derived from this class.
 *
 * Абстрактный базовый класс зависимостей с синхронными обработчиками жизненного цикла. `DesignLogicAbstract` вызывает эти обработчики только у экземпляров, наследующих этот класс.
 */
export abstract class DesignLifecycleAbstract {
  /** Optional synchronous mount callback. / Необязательный синхронный обработчик монтирования. */
  readonly onMounted?: () => void

  /** Optional synchronous cleanup callback. / Необязательный синхронный обработчик очистки. */
  readonly onUnmounted?: () => void
}

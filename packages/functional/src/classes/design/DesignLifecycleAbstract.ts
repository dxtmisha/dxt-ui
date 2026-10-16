/**
 * Base class declaring optional lifecycle callbacks for component logic helpers.
 * Subclasses provide synchronous callbacks and manage any asynchronous work themselves.
 *
 * Базовый класс, объявляющий необязательные обработчики жизненного цикла для помощников логики компонента.
 * Подклассы реализуют синхронные обработчики и самостоятельно управляют асинхронной работой.
 */
export abstract class DesignLifecycleAbstract {
  /** Callback after component mounting / Обработчик после монтирования компонента */
  readonly onMounted?: () => void

  /** Callback after component unmounting / Обработчик после демонтирования компонента */
  readonly onUnmounted?: () => void
}

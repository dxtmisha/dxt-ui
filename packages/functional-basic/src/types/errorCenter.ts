/**
 * Error group identifier / Идентификатор группы ошибок
 */
export type ErrorCenterGroup = string | undefined

/**
 * Interface for an error item / Интерфейс для элемента ошибки
 */
export type ErrorCenterCauseItem = {
  /** Error group / Группа ошибки */
  group?: ErrorCenterGroup
  /** Error code / Код ошибки */
  code: string
  /** Error label / Название ошибки */
  label?: string
  /** Error message / Сообщение ошибки */
  message?: string
  /** Additional details / Дополнительные детали */
  details?: any
}
/**
 * List of error items / Список элементов ошибок
 */
export type ErrorCenterCauseList = ErrorCenterCauseItem[]

/**
 * Callback function for error handling / Функция обратного вызова для обработки ошибок
 */
export type ErrorCenterHandlerCallback = (cause: ErrorCenterCauseItem) => void
/**
 * Interface for error handler storage / Интерфейс для хранения обработчика ошибок
 */
export type ErrorCenterHandlerItem = {
  /** Targeted error group / Целевая группа ошибок */
  group?: ErrorCenterGroup
  /** List of handlers / Список обработчиков */
  handlers: ErrorCenterHandlerCallback[]
}
/**
 * List of error handlers / Список обработчиков ошибок
 */
export type ErrorCenterHandlerList = ErrorCenterHandlerItem[]

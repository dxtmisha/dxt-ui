import { isObjectNotArray } from '../functions/isObjectNotArray'
import type { ApiStatusItem, ApiStatusType } from '../types/apiTypes'

/**
 * Class for managing API request status.
 *
 * Класс для управления статусом запросов API.
 */
export class ApiStatus {
  protected value?: ApiStatusItem

  /**
   * Returns the last status item data.
   *
   * Возвращает данные последнего элемента статуса.
   * @returns status item or undefined / элемент статуса или undefined
   */
  get(): ApiStatusItem | undefined {
    return this.value
  }

  /**
   * Returns the execution status code.
   *
   * Возвращает код статуса выполнения.
   * @returns HTTP status code or undefined / код статуса HTTP или undefined
   */
  getStatus(): number | undefined {
    return this.get()?.status
  }

  /**
   * Returns the execution status text.
   *
   * Возвращает текст статуса выполнения.
   * @returns status text or undefined / текст статуса или undefined
   */
  getStatusText(): string | undefined {
    return this.get()?.statusText
  }

  /**
   * Returns the last status type.
   *
   * Возвращает последний тип статуса.
   * @returns status type or undefined / тип статуса или undefined
   */
  getStatusType(): ApiStatusType | undefined {
    return this.get()?.lastStatus
  }

  /**
   * Returns the script execution error.
   *
   * Возвращает ошибку выполнения скрипта.
   * @returns error message or undefined / сообщение об ошибке или undefined
   */
  getError(): string | undefined {
    return this.get()?.error
  }

  /**
   * Returns the data of the last request.
   *
   * Возвращает данные последнего запроса.
   * @returns last response data or undefined / данные последнего ответа или undefined
   */
  getResponse<T>(): T | undefined {
    return this.get()?.lastResponse
  }

  /**
   * Returns messages from the last request.
   *
   * Возвращает сообщения от последнего запроса.
   * @returns message string / строка сообщения
   */
  getMessage(): string {
    return this.get()?.lastMessage || ''
  }

  /**
   * Sets the status item data.
   *
   * Устанавливает данные элемента статуса.
   * @param data status item data/ данные элемента статуса
   * @returns this instance for chaining / текущий экземпляр для цепочки вызовов
   */
  set(data: ApiStatusItem): this {
    if ('status' in data) {
      this.setValue('status', data.status)
    }

    if ('statusText' in data) {
      this.setValue('statusText', data.statusText)
    }

    if ('error' in data) {
      this.setValue('error', data.error)
    }

    if ('lastResponse' in data) {
      this.setValue('lastResponse', data.lastResponse)
    }

    if ('lastMessage' in data) {
      this.setValue('lastMessage', data.lastMessage)
    }

    if ('lastStatus' in data) {
      this.setValue('lastStatus', data.lastStatus)
    }

    return this
  }

  /**
   * Sets the status code and optional status text.
   *
   * Устанавливает код статуса и необязательный текст статуса.
   * @param status status code / код статуса
   * @param statusText optional status text / необязательный текст статуса
   * @returns this instance for chaining / текущий экземпляр для цепочки вызовов
   */
  setStatus(
    status?: number,
    statusText?: string
  ): this {
    this.set({
      status,
      statusText
    })

    return this
  }

  /**
   * Sets the error message.
   *
   * Устанавливает сообщение об ошибке.
   * @param error error message/ сообщение об ошибке
   * @returns this instance for chaining / текущий экземпляр для цепочки вызовов
   */
  setError(error?: string): this {
    this.set({ error })
    return this
  }

  /**
   * Sets the data of the last response and automatically extracts status/message if it's an object.
   *
   * Устанавливает данные последнего ответа и автоматически извлекает статус / сообщение, если это объект.
   * @param response response data / данные ответа
   * @returns this instance for chaining / текущий экземпляр для цепочки вызовов
   */
  setLastResponse(response?: any): this {
    if (
      response
      && isObjectNotArray(response)
    ) {
      if ('message' in response) {
        this.setLastMessage(String(response.message))
      }

      if ('status' in response) {
        this.setLastStatus(String(response.status) as ApiStatusType)
      }
    }

    this.set({ lastResponse: response })
    return this
  }

  /**
   * Sets the last status.
   *
   * Устанавливает последний статус.
   * @param status status/ статус
   * @returns this instance for chaining / текущий экземпляр для цепочки вызовов
   */
  setLastStatus(status?: ApiStatusType): this {
    this.set({ lastStatus: status })
    return this
  }

  /**
   * Sets messages from the last request.
   *
   * Устанавливает сообщения от последнего запроса.
   * @param message message text/ текст сообщения
   * @returns this instance for chaining / текущий экземпляр для цепочки вызовов
   */
  setLastMessage(message?: string): this {
    this.set({ lastMessage: message })
    return this
  }

  /**
   * Sets a specific field in the status item.
   *
   * Устанавливает конкретное поле в элементе статуса.
   * @param name field name/ название поля
   * @param value field value/ значение поля
   */
  protected setValue<K extends keyof ApiStatusItem>(
    name: K,
    value?: ApiStatusItem[K]
  ) {
    if (!this.value) {
      this.value = {} as ApiStatusItem
    }

    (this.value as ApiStatusItem)[name] = value
  }
}

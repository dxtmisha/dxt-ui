/**
 * Type for the message callback function/
 * Тип для функции обратного вызова сообщения
 */
export type UiFigmaMessengerCallback<Message = any> = (message: Message) => void

/**
 * Structure for storing a message type and its associated callbacks/
 * Структура для хранения типа сообщения и связанных с ним обратных вызовов
 */
export type UiFigmaMessengerItem = {
  type: string
  callbackList: UiFigmaMessengerCallback[]
}

/**
 * List of message items/
 * Список элементов сообщений
 */
export type UiFigmaMessengerList = UiFigmaMessengerItem[]

/**
 * Data structure for a message sent between the plugin and UI/
 * Структура данных для сообщения, передаваемого между плагином и UI
 */
export type UiFigmaMessengerData<Message = any> = {
  /** Verification code / Проверочный код */
  code: string
  /** Message type / Тип сообщения */
  type: string
  /** Message content / Содержимое сообщения */
  message?: Message
}

/**
 * Type for the message callback function/
 * Тип для функции обратного вызова сообщения
 */
export type UiFigmaMessengerCallback<Message = any> = (message: Message) => void

/**
 * Item containing a callback and its execution rule/
 * Элемент, содержащий функцию обратного вызова и правило её выполнения
 */
export type UiFigmaMessengerCallbackItem<Message = any> = {
  /** Callback function / Функция обратного вызова */
  callback: UiFigmaMessengerCallback<Message>
  /** Rule for single execution / Правило однократного выполнения */
  once: boolean
}

/**
 * Structure for storing a message type and its associated callbacks/
 * Структура для хранения типа сообщения и связанных с ним обратных вызовов
 */
export type UiFigmaMessengerItem = {
  /** Message type / Тип сообщения */
  type: string
  /** List of registered callbacks / Список зарегистрированных функций обратного вызова */
  callbackList: UiFigmaMessengerCallbackItem[]
}

/**
 * List of message items/
 * Список элементов сообщений
 */
export type UiFigmaMessengerList = Record<string, UiFigmaMessengerItem>

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

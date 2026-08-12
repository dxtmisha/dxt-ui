import { LoadingInstance, type LoadingDetail } from './LoadingInstance'
import { ServerStorage } from './ServerStorage'

import {
  type ElementOrString,
  type EventListenerDetail
} from '../types/basicTypes'

/**
 * Class for working with global loading.
 *
 * Класс для работы с глобальной загрузкой.
 */
export class Loading {
  /**
   * Check if the loader is active now.
   *
   * Проверить, активен ли сейчас загрузчик.
   * @returns boolean/ логическое значение
   */
  static is(): boolean {
    return this.getItem().is()
  }

  /**
   * Get current loading value.
   *
   * Получить текущее значение загрузки.
   * @returns current loading value/ текущее значение загрузки
   */
  static get(): number {
    return this.getItem().get()
  }

  /**
   * Returns a request-isolated instance of LoadingInstance.
   *
   * Возвращает изолированный в рамках запроса экземпляр LoadingInstance.
   * @returns LoadingInstance instance / экземпляр LoadingInstance
   */
  static getItem(): LoadingInstance {
    return ServerStorage.get('__ui:loading-instance__', () => new LoadingInstance())
  }

  /**
   * Shows the loader.
   *
   * Показывает загрузчик.
   * @returns void / ничего не возвращает
   */
  static show(): void {
    this.getItem().show()
  }

  /**
   * Hides the loader.
   *
   * Скрывает загрузчик.
   * @returns void / ничего не возвращает
   */
  static hide(): void {
    this.getItem().hide()
  }

  /**
   * Event registration to listen for data changes.
   *
   * Регистрация события для прослушивания изменений данных.
   * @param listener the object that receives a notification when an event occurs / объект, который принимает уведомление, когда событие указанного типа произошло
   * @param element element / элемент
   * @returns void / ничего не возвращает
   */
  static registrationEvent(
    listener: EventListenerDetail<CustomEvent, LoadingDetail>,
    element?: ElementOrString<HTMLElement>
  ) {
    this.getItem().registrationEvent(listener, element)
  }

  /**
   * Unregistration of an event.
   *
   * Отмена регистрации события.
   * @param listener the object that receives a notification when an event occurs / объект, который принимает уведомление, когда событие указанного типа произошло
   * @param element element / элемент
   * @returns void / ничего не возвращает
   */
  static unregistrationEvent(
    listener: EventListenerDetail<CustomEvent, LoadingDetail>,
    element?: ElementOrString<HTMLElement>
  ) {
    this.getItem().unregistrationEvent(listener, element)
  }
}

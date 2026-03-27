import { LoadingInstance, type LoadingDetail } from './LoadingInstance'

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
  /** Instance of the loading class / Экземпляр класса загрузки */
  protected static item = new LoadingInstance()

  /**
   * Check if the loader is active now.
   *
   * Проверить, активен ли сейчас загрузчик.
   */
  static is(): boolean {
    return this.item.is()
  }

  /**
   * Get current loading value.
   *
   * Получить текущее значение загрузки.
   */
  static get(): number {
    return this.item.get()
  }

  /**
   * Get instance of the loading class.
   *
   * Получить экземпляр класса загрузки.
   */
  static getItem(): LoadingInstance {
    return this.item
  }

  /**
   * Shows the loader.
   *
   * Показывает загрузчик.
   */
  static show(): void {
    this.item.show()
  }

  /**
   * Hides the loader.
   *
   * Скрывает загрузчик.
   */
  static hide(): void {
    this.item.hide()
  }

  /**
   * Event registration to listen for data changes.
   *
   * Регистрация события для прослушивания изменений данных.
   * @param listener the object that receives a notification (an object that implements the
   * Event interface) when an event of the specified type occurs/ объект, который принимает
   * уведомление, когда событие указанного типа произошло
   * @param element element/ элемент
   */
  static registrationEvent(
    listener: EventListenerDetail<CustomEvent, LoadingDetail>,
    element?: ElementOrString<HTMLElement>
  ) {
    this.item.registrationEvent(listener, element)
  }

  /**
   * Unregistration of an event.
   *
   * Отмена регистрации события.
   * @param listener the object that receives a notification (an object that implements the
   * Event interface) when an event of the specified type occurs/ объект, который принимает
   * уведомление, когда событие указанного типа произошло
   * @param element element/ элемент
   */
  static unregistrationEvent(
    listener: EventListenerDetail<CustomEvent, LoadingDetail>,
    element?: ElementOrString<HTMLElement>
  ) {
    this.item.unregistrationEvent(listener, element)
  }
}

import { isDomRuntime } from '../functions/isDomRuntime'

import { EventItem } from './EventItem'

import {
  type ElementOrString,
  type EventListenerDetail
} from '../types/basicTypes'

type LoadingDetail = {
  loading: boolean
}

const LOADING_EVENT_NAME = 'ui-loading'

/**
 * Class for working with global loading.
 *
 * Класс для работы с глобальной загрузкой.
 */
export class Loading {
  protected static value = 0
  protected static event?: EventItem<Window, CustomEvent>

  /**
   * Check if the loader is active now.
   *
   * Проверить, активен ли сейчас загрузчик.
   */
  static is(): boolean {
    return this.value > 0
  }

  /**
   * Shows the loader.
   *
   * Показывает загрузчик.
   */
  static show(): void {
    this.value++
    this.dispatch()
  }

  /**
   * Hides the loader.
   *
   * Скрывает загрузчик.
   */
  static hide(): void {
    if (this.is()) {
      this.value--
      this.dispatch()
    }
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
    new EventItem(window, LOADING_EVENT_NAME, listener)
      .setElementControl(element)
      .start()
  }

  /**
   * Calls the event listener.
   *
   * Вызывает слушателя событий.
   */
  protected static dispatch(): void {
    this.event?.dispatch({ loading: this.is() } as LoadingDetail)
  }

  static {
    if (isDomRuntime()) {
      this.event = new EventItem(window, LOADING_EVENT_NAME)
    }
  }
}

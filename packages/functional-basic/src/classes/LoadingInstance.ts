import { isDomRuntime } from '../functions/isDomRuntime'

import { EventItem } from './EventItem'

import {
  type ElementOrString,
  type EventListenerDetail
} from '../types/basicTypes'

/**
 * Data for the loading event.
 *
 * Данные для события загрузки.
 */
export type LoadingDetail = {
  /** Loading status / Статус загрузки */
  loading: boolean
}

/**
 * Registration item for the loading event.
 *
 * Элемент регистрации для события загрузки.
 */
export type LoadingRegistrationItem = {
  /** Event item / Элемент события */
  item: EventItem<Window, CustomEvent, LoadingDetail>
  /** Event listener / Слушатель события */
  listener: EventListenerDetail<CustomEvent, LoadingDetail>
  /** Element / Элемент */
  element?: ElementOrString<HTMLElement>
}

/** Name of the event for tracking loading / Название события для отслеживания загрузки */
const LOADING_EVENT_NAME = 'ui-loading'

/**
 * Class for working with global loading.
 *
 * Класс для работы с глобальной загрузкой.
 */
export class LoadingInstance {
  /** Current loading value / Текущее значение загрузки */
  protected value = 0
  /** Event item / Элемент события */
  protected event?: EventItem<Window, CustomEvent>
  /** Registration list / Список регистрации */
  protected registrationList: LoadingRegistrationItem[] = []

  /**
   * Constructor
   * @param eventName name of the event for tracking loading/ название события для отслеживания загрузки
   */
  constructor(
    protected eventName: string = LOADING_EVENT_NAME
  ) {
    if (isDomRuntime()) {
      this.event = new EventItem(window, this.eventName)
    }
  }

  /**
   * Check if the loader is active now.
   *
   * Проверить, активен ли сейчас загрузчик.
   * @returns returns true if the loader is active/ возвращает true, если загрузчик активен
   */
  is(): boolean {
    return this.value > 0
  }

  /**
   * Get current loading value.
   *
   * Получить текущее значение загрузки.
   * @returns returns the current loading value/ возвращает текущее значение загрузки
   */
  get(): number {
    return this.value
  }

  /**
   * Shows the loader.
   *
   * Показывает загрузчик.
   */
  show(): void {
    this.value++
    this.dispatch()
  }

  /**
   * Hides the loader.
   *
   * Скрывает загрузчик.
   */
  hide(): void {
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
  registrationEvent(
    listener: EventListenerDetail<CustomEvent, LoadingDetail>,
    element?: ElementOrString<HTMLElement>
  ) {
    if (isDomRuntime()) {
      const item = new EventItem(window, this.eventName, listener)
        .setElementControl(element)
        .start()

      this.registrationList.push({
        item,
        listener,
        element
      })
    }
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
  unregistrationEvent(
    listener: EventListenerDetail<CustomEvent, LoadingDetail>,
    element?: ElementOrString<HTMLElement>
  ) {
    this.registrationList = this.registrationList.filter((item) => {
      if (
        item.listener === listener
        && item.element === element
      ) {
        item.item.stop()
        return false
      }

      return true
    })
  }

  /**
   * Calls the event listener.
   *
   * Вызывает слушателя событий.
   */
  protected dispatch(): void {
    this.event?.dispatch({ loading: this.is() } as LoadingDetail)
  }
}

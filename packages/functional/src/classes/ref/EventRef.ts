import { watch } from 'vue'
import { toRefItem } from '../../functions/ref/toRefItem'

import type { RefOrNormal } from '../../types/refTypes'
import {
  type ElementOrString,
  type ElementOrWindow,
  EventItem,
  type EventListenerDetail,
  type EventOptions
} from '@dxtmisha/functional-basic'

/**
 * Class for working with events (Ref).
 *
 * Класс для работа с события (Ref).
 */
export class EventRef<
  E extends ElementOrWindow,
  O extends Event,
  D extends Record<string, any> = Record<string, any>
> extends EventItem<E, O, D> {
  /**
   * Classes Constructor
   * @param elementSelector element/ элемент
   * @param elementSelectorControl control element/ элемент управления
   * @param type type/ тип
   * @param listener the object that receives a notification (an object that implements the
   * Event interface) when an event of the specified type occurs/ объект, который принимает
   * уведомление, когда событие указанного типа произошло
   * @param options object that specifies characteristics/ объект options
   * @param detail an event-dependent value associated with the event/ зависимое от события
   * значение, связанное с событием
   */
  constructor(
    elementSelector?: RefOrNormal<ElementOrString<E> | undefined>,
    elementSelectorControl?: RefOrNormal<ElementOrString<HTMLElement>>,
    type: string | string[] = ['click'],
    listener?: EventListenerDetail<O, D>,
    options?: EventOptions,
    detail?: D
  ) {
    const item = toRefItem(elementSelector)
    const itemControl = toRefItem(elementSelectorControl)

    super(
      item.value,
      type,
      listener,
      options,
      detail
    )

    if (itemControl.value) {
      this.setElementControl(itemControl.value)
    }

    watch(item, (element?: ElementOrString<E>) => this.setElement(element))
    watch(itemControl, (element?: ElementOrString<HTMLElement>) => this.setElementControl(element))
  }
}

import { getCurrentScope, onScopeDispose, watch } from 'vue'
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
 * Reactive extension of `EventItem` for DOM or window listeners. Constructor target and control refs are watched for changes; an owning Vue effect scope stops listeners on disposal.
 *
 * Реактивное расширение `EventItem` для событий DOM и окна. Отслеживает переданные в конструктор ссылки на цель и контрольный элемент; владеющая область эффектов Vue останавливает слушатели при завершении.
 */
export class EventRef<
  E extends ElementOrWindow,
  O extends Event,
  D extends Record<string, any> = Record<string, any>
> extends EventItem<E, O, D> {
  /**
   * Initializes EventRef with the supplied configuration.
   *
   * Инициализирует EventRef с переданными настройками.
   * @param elementSelector Target element or selector. / Целевой элемент либо селектор.
   * @param elementSelectorControl Optional control element or selector for DOM presence checks. / Необязательный контрольный элемент либо селектор для проверки присутствия в DOM.
   * @param type Event type or array; defaults to click. / Тип события либо массив; по умолчанию click.
   * @param listener Event callback receiving event and stored detail. / Обработчик события, получающий событие и сохранённый detail.
   * @param options Configuration options. / Параметры настройки.
   * @param detail Custom event data. / Пользовательские данные события.
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

    if (getCurrentScope()) {
      onScopeDispose(() => this.stop())
    }
  }
}

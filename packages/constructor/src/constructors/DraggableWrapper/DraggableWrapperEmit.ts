// ai-none

import type { ConstrEmit } from '@dxtmisha/functional'

import type { DraggableWrapperClient } from './DraggableWrapperClient'
import type { DraggableWrapperItem } from './DraggableWrapperItem'
import type { DraggableWrapperSquare } from './DraggableWrapperSquare'

import type { DraggableWrapperEventParameters } from './basicTypes'
import type { DraggableWrapperEmits } from './types'

/**
 * Class for handling drag-and-drop events emission.
 *
 * Класс для обработки отправки событий перетаскивания.
 */
export class DraggableWrapperEmit {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param client client coordinates manager factory / фабрика менеджера клиентских координат
   * @param item item helper instance factory / фабрика экземпляра помощника по элементам
   * @param square square placeholder manager factory / фабрика менеджера элемента-заполнителя
   * @param emits callback function triggered on events / функция обратного вызова, запускаемая при событиях
   */
  constructor(
    protected readonly client: () => DraggableWrapperClient,
    protected readonly item: () => DraggableWrapperItem,
    protected readonly square: () => DraggableWrapperSquare,
    protected readonly emits?: ConstrEmit<DraggableWrapperEmits>
  ) {
  }

  /**
   * Triggers drop and position change events.
   *
   * Вызывает события сброса и изменения положения.
   */
  on(): void {
    const item = this.item()
    const activeElement = item.getActive().get()
    const goElement = item.getGo().get()

    if (
      activeElement
      && goElement
    ) {
      const valueActive = activeElement.dataset?.value
      const valueGo = goElement.dataset?.value
      const eventName = this.client().hasDrop() ? 'drop' : 'position'

      const parameters: DraggableWrapperEventParameters = {
        active: activeElement,
        selection: item.getSelection().get(),
        to: goElement,

        value: [valueActive, valueGo],
        valueActive,
        valueSelection: item.getValues(),
        valueTo: valueGo,

        before: this.square().isBefore()
      }

      setTimeout(() => this.emits?.(eventName as never, parameters), 240)
    }
  }
}

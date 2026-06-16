import type { ConstrEmit } from '@dxtmisha/functional'

import type { DraggableWrapperItem } from './DraggableWrapperItem'
import type { DraggableWrapperClient } from './DraggableWrapperClient'
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
   * @param item item helper instance / экземпляр помощника по элементам
   * @param client client coordinates manager / менеджер клиентских координат
   * @param square square placeholder manager / менеджер элемента-заполнителя
   * @param emits callback function triggered on events / функция обратного вызова, запускаемая при событиях
   */
  constructor(
    protected readonly item: DraggableWrapperItem,
    protected readonly client: DraggableWrapperClient,
    protected readonly square: DraggableWrapperSquare,
    protected readonly emits?: ConstrEmit<DraggableWrapperEmits>
  ) {
  }

  /**
   * Triggers drop and position change events.
   *
   * Вызывает события сброса и изменения положения.
   */
  on(): void {
    const activeElement = this.item.getActive().get()
    const goElement = this.item.getGo().get()

    if (
      activeElement
      && goElement
    ) {
      const valueActive = activeElement.dataset?.value
      const valueGo = goElement.dataset?.value
      const eventName = this.client.hasDrop() ? 'drop' : 'position'

      const parameters: DraggableWrapperEventParameters = {
        active: activeElement,
        to: goElement,
        selection: this.item.getSelection().get(),

        value: [valueActive, valueGo],
        valueActive,
        valueTo: valueGo,
        valueSelection: this.item.getValues(),

        before: this.square.isBefore()
      }

      setTimeout(() => this.emits?.(eventName as never, parameters), 240)
    }
  }
}

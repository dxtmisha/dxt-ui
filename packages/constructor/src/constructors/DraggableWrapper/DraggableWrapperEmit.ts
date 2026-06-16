import type { ConstrEmit } from '@dxtmisha/functional'

import type { DraggableWrapperItem } from './DraggableWrapperItem'
import type { DraggableWrapperClient } from './DraggableWrapperClient'
import type { DraggableWrapperSquare } from './DraggableWrapperSquare'

import type { DraggableWrapperEmits } from './types'
import type { DraggableWrapperEventParameters } from './basicTypes'

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
    const active = this.item.getActive().get()
    const itemGo = this.item.getGo().get()

    if (active && itemGo) {
      const valueActive = active.dataset?.value
      const valueTo = itemGo.dataset?.value
      const parameters: DraggableWrapperEventParameters = {
        active,
        selection: this.item.getSelection().get(),
        to: itemGo,
        value: [valueActive, valueTo],
        valueSelection: this.item.getValues(),
        before: this.square.isBefore(),
        valueActive,
        valueTo
      }

      setTimeout(() => {
        if (this.client.hasDrop()) {
          this.emits?.('drop', parameters)
        } else {
          this.emits?.('position', parameters)
        }
      }, 240)
    }
  }
}

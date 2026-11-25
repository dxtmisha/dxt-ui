// ai-none

import {
  DesignLifecycleAbstract,
  type ConstrEmit
} from '@dxtmisha/functional'

import type { DraggableWrapperClient } from './DraggableWrapperClient'
import type { DraggableWrapperItem } from './DraggableWrapperItem'
import type { DraggableWrapperSquare } from './DraggableWrapperSquare'

import type { DraggableWrapperEventParameters } from './basicTypes'
import type { DraggableWrapperEmits } from './types'

/** Delay before emitting drop/position event in milliseconds / Задержка перед генерацией события сброса/позиции в миллисекундах */
const EMIT_DELAY = 240

/**
 * Class for handling drag-and-drop events emission.
 *
 * Класс для обработки отправки событий перетаскивания.
 */
export class DraggableWrapperEmit extends DesignLifecycleAbstract {
  /** Pending emit timeout handle / Идентификатор ожидающего таймера события */
  protected timeout?: ReturnType<typeof setTimeout>

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
    super()
  }

  /** Callback after component unmounting / Обработчик после демонтирования компонента */
  override readonly onUnmounted = (): void => {
    this.stop()
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
      const isDrop = this.client().hasDrop()

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

      this.stop()
      this.timeout = setTimeout(() => {
        this.timeout = undefined

        if (isDrop) {
          this.emits?.('drop', parameters)
        } else {
          this.emits?.('position', parameters)
        }
      }, EMIT_DELAY)
    }
  }

  /**
   * Clears any pending scheduled event emission timer.
   *
   * Очищает ожидающий таймер отложенной генерации события.
   */
  stop(): void {
    if (this.timeout !== undefined) {
      clearTimeout(this.timeout)
      this.timeout = undefined
    }
  }
}

// ai-none

import { watch, type WatchStopHandle } from 'vue'
import {
  type ConstrEmit,
  DesignLifecycleAbstract
} from '@dxtmisha/functional'
import { isFunction } from '@dxtmisha/functional-basic'

import type { SelectableAreaClassesData } from './SelectableAreaClassesData'
import type { SelectableAreaItem } from './SelectableAreaItem'

import type { SelectableAreaEmits } from './types'

/**
 * Class for handling selectable area events emission.
 *
 * Класс для обработки отправки событий выделяемой области.
 */
export class SelectableAreaEmit extends DesignLifecycleAbstract {
  /** Pending animation frame handle / Идентификатор ожидающего кадра анимации */
  protected frame?: number

  /** Stop handle for the reactive item watcher / Функция остановки реактивного наблюдателя выбранных элементов */
  protected stopWatch?: WatchStopHandle

  /**
   * Constructor.
   *
   * Конструктор.
   * @param classes classes manager factory / фабрика менеджера классов
   * @param item item selection helper factory / фабрика помощника по выбору элементов
   * @param emits callback function triggered on events / функция обратного вызова, запускаемая при событиях
   */
  constructor(
    protected readonly classes: () => SelectableAreaClassesData,
    protected readonly item: () => SelectableAreaItem,
    protected readonly emits?: ConstrEmit<SelectableAreaEmits>
  ) {
    super()
  }

  /**
   * Registers the reactive watcher for selection changes on mount.
   *
   * Регистрирует реактивный наблюдатель изменений выбора при монтировании.
   */
  override readonly onMounted = (): void => {
    this.stopWatch?.()
    this.stopWatch = watch(this.item().item, this.on)
  }

  /**
   * Stops the reactive watcher and cancels any pending animation frame on unmount.
   *
   * Останавливает реактивный наблюдатель и отменяет ожидающий кадр анимации при размонтировании.
   */
  override readonly onUnmounted = (): void => {
    this.stopWatch?.()
    this.stopWatch = undefined
    this.stop()
  }

  /**
   * Triggers selection event coalesced to the next animation frame.
   *
   * Вызывает событие выбора, объединенное до следующего кадра анимации.
   */
  readonly on = (): void => {
    if (!this.emits) {
      return
    }

    this.stop()

    if (typeof requestAnimationFrame === 'function') {
      this.frame = requestAnimationFrame(() => {
        this.frame = undefined
        this.emitSelected()
      })
    } else {
      this.emitSelected()
    }
  }

  /**
   * Cancels any pending scheduled animation frame.
   *
   * Отменяет ожидающий запланированный кадр анимации.
   */
  stop(): void {
    if (this.frame !== undefined) {
      cancelAnimationFrame(this.frame)
      this.frame = undefined
    }
  }

  /**
   * Emits the selected event with current items and selection state.
   *
   * Испускает событие выбора с текущими элементами и состоянием выделения.
   */
  protected emitSelected(): void {
    const values = this.item().getNewArray()
    const classesData = this.classes()

    this.emits?.('selected', {
      items: classesData.findItems(),
      itemsSelected: classesData.findSelection(),
      selected: values,
      focus: values.length > 0 ? values[values.length - 1] : undefined
    })
  }

  /**
   * Checks whether an event emitter callback is provided.
   *
   * Проверяет, передана ли функция обратного вызова для генерации событий.
   * @param emits event emitter callback / функция обратного вызова для генерации событий
   * @returns true if emitter is available / true, если функция генерации событий доступна
   */
  static is(emits?: ConstrEmit<SelectableAreaEmits>): boolean {
    return isFunction(emits)
  }
}

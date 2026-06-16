import { type Ref, type ToRefs } from 'vue'
import {
  type ConstrEmit,
  type DesignComp
} from '@dxtmisha/functional'

import type { DraggableWrapperComponents, DraggableWrapperEmits, DraggableWrapperSlots } from './types'
import type { DraggableWrapperProps } from './props'
import type { DraggableWrapperEventParameters } from './basicTypes'

import { DraggableWrapperSquare } from './DraggableWrapperSquare'
import { DraggableWrapperSelection } from './DraggableWrapperSelection'
import { DraggableWrapperPosition } from './DraggableWrapperPosition'
import { DraggableWrapperClient } from './DraggableWrapperClient'
import { DraggableWrapperClassesData } from './DraggableWrapperClassesData'
import { DraggableWrapperItemFocus } from './DraggableWrapperItemFocus'
import { DraggableWrapperItem } from './DraggableWrapperItem'
import { DraggableWrapperItemActive } from './DraggableWrapperItemActive'
import { DraggableWrapperItemSelection } from './DraggableWrapperItemSelection'
import { DraggableWrapperItemGo } from './DraggableWrapperItemGo'
import { DraggableWrapperEvents } from './DraggableWrapperEvents'
import { DraggableWrapperDelay } from './DraggableWrapperDelay'
import { DraggableWrapperEmit } from './DraggableWrapperEmit'

/**
 * Orchestrator class for managing draggable reordering logic.
 *
 * Класс-оркестратор для управления логикой изменения порядка перетаскиванием.
 */
export class DraggableWrapper {
  /** Classes helper instance / Экземпляр помощника по классам */
  readonly classes: DraggableWrapperClassesData
  /** Drag start delay helper class / Вспомогательный класс задержки начала перетаскивания */
  readonly delay: DraggableWrapperDelay

  /** Aggregated item helper / Агрегированный помощник по элементам */
  readonly item: DraggableWrapperItem

  /** Client coordinates manager / Менеджер клиентских координат */
  readonly client: DraggableWrapperClient
  /** Spacer placeholder manager / Менеджер элемента-заполнителя */
  readonly square: DraggableWrapperSquare

  /** Event emit helper class / Вспомогательный класс вызова событий */
  readonly emit: DraggableWrapperEmit

  /** Multiselection helper class / Вспомогательный класс множественного выбора */
  readonly selection: DraggableWrapperSelection
  /** Coordinate position helper class / Вспомогательный класс позиционирования */
  readonly position: DraggableWrapperPosition

  /** Event validator / Валидатор событий */
  readonly events: DraggableWrapperEvents

  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param element input element / элемент ввода
   * @param classDesign design name / название дизайна
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly props: DraggableWrapperProps,
    protected readonly refs: ToRefs<DraggableWrapperProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<DraggableWrapperComponents, DraggableWrapperProps>,
    protected readonly slots?: DraggableWrapperSlots,
    protected readonly emits?: ConstrEmit<DraggableWrapperEmits>
  ) {
    this.classes = new DraggableWrapperClassesData(
      this.element,
      this.classDesign,
      this.className
    )
    this.delay = new DraggableWrapperDelay(props)

    this.item = new DraggableWrapperItem(
      new DraggableWrapperItemFocus(),
      new DraggableWrapperItemActive(this.classes),
      new DraggableWrapperItemSelection(),
      new DraggableWrapperItemGo()
    )

    this.client = new DraggableWrapperClient(this.classes)
    this.square = new DraggableWrapperSquare(
      props,
      this.classes
    )

    this.emit = new DraggableWrapperEmit(
      this.item,
      this.client,
      this.square,
      this.emits
    )

    this.selection = new DraggableWrapperSelection(this.classes.getId(), this.classes, this.item)
    this.position = new DraggableWrapperPosition(
      this.classes,
      this.item,
      this.client,
      this.square,
      this.emit
    )

    this.events = new DraggableWrapperEvents(
      props,
      this.delay,
      this.classes,
      this.item,
      this.client,
      this.square,
      this.selection,
      this.position
    )
  }

  /**
   * Helper method to calculate the reordered array after a drop.
   *
   * Вспомогательный метод для расчета переупорядоченного массива после сброса.
   * @param values original array of items / исходный массив элементов
   * @param parameters event parameters from the drop event / параметры события сброса
   * @returns new reordered array / новый переупорядоченный массив
   */
  toNewPosition<T extends { value?: any }>(
    values: T[],
    parameters: DraggableWrapperEventParameters
  ): T[] {
    const { valueSelection, valueTo, before } = parameters
    const items = values.filter(item => item.value !== undefined && valueSelection.includes(String(item.value)))
    const newValues = values.filter(item => item.value === undefined || !valueSelection.includes(String(item.value)))

    if (valueTo !== undefined) {
      const idx = newValues.findIndex(item => String(item.value) === valueTo)
      if (idx !== -1) {
        newValues.splice(idx + (before ? 0 : 1), 0, ...items)
      } else {
        newValues.unshift(...items)
      }
    } else {
      newValues.unshift(...items)
    }

    return newValues
  }
}

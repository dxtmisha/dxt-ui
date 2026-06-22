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
   * @param constructors object with classes / объект с классами
   * @param constructors.DraggableWrapperClassesConstructor class for working with classes / класс для работы с классами
   * @param constructors.DraggableWrapperClientConstructor class for working with coordinates / класс для работы с координатами
   * @param constructors.DraggableWrapperDelayConstructor class for working with delay / класс для работы с задержкой
   * @param constructors.DraggableWrapperEmitConstructor class for working with emits / класс для работы с событиями
   * @param constructors.DraggableWrapperEventsConstructor class for working with events / класс для работы с событиями
   * @param constructors.DraggableWrapperItemActiveConstructor class for working with active item / класс для работы с активным элементом
   * @param constructors.DraggableWrapperItemConstructor class for working with items / класс для работы с элементами
   * @param constructors.DraggableWrapperItemFocusConstructor class for working with focused item / класс для работы со сфокусированным элементом
   * @param constructors.DraggableWrapperItemGoConstructor class for working with navigation / класс для работы с навигацией
   * @param constructors.DraggableWrapperItemSelectionConstructor class for working with item selection / класс для работы с выделением элементов
   * @param constructors.DraggableWrapperPositionConstructor class for working with positioning / класс для работы с позиционированием
   * @param constructors.DraggableWrapperSelectionConstructor class for working with multi-selection / класс для работы со множественным выбором
   * @param constructors.DraggableWrapperSquareConstructor class for working with selection square / класс для работы с квадратом выделения
   */
  constructor(
    protected readonly props: DraggableWrapperProps,
    protected readonly refs: ToRefs<DraggableWrapperProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<DraggableWrapperComponents, DraggableWrapperProps>,
    protected readonly slots?: DraggableWrapperSlots,
    protected readonly emits?: ConstrEmit<DraggableWrapperEmits>,
    constructors: {
      DraggableWrapperClassesConstructor?: typeof DraggableWrapperClassesData
      DraggableWrapperClientConstructor?: typeof DraggableWrapperClient
      DraggableWrapperDelayConstructor?: typeof DraggableWrapperDelay
      DraggableWrapperEmitConstructor?: typeof DraggableWrapperEmit
      DraggableWrapperEventsConstructor?: typeof DraggableWrapperEvents
      DraggableWrapperItemActiveConstructor?: typeof DraggableWrapperItemActive
      DraggableWrapperItemConstructor?: typeof DraggableWrapperItem
      DraggableWrapperItemFocusConstructor?: typeof DraggableWrapperItemFocus
      DraggableWrapperItemGoConstructor?: typeof DraggableWrapperItemGo
      DraggableWrapperItemSelectionConstructor?: typeof DraggableWrapperItemSelection
      DraggableWrapperPositionConstructor?: typeof DraggableWrapperPosition
      DraggableWrapperSelectionConstructor?: typeof DraggableWrapperSelection
      DraggableWrapperSquareConstructor?: typeof DraggableWrapperSquare
    } = {}
  ) {
    const {
      DraggableWrapperClassesConstructor = DraggableWrapperClassesData,
      DraggableWrapperClientConstructor = DraggableWrapperClient,
      DraggableWrapperDelayConstructor = DraggableWrapperDelay,
      DraggableWrapperEmitConstructor = DraggableWrapperEmit,
      DraggableWrapperEventsConstructor = DraggableWrapperEvents,
      DraggableWrapperItemActiveConstructor = DraggableWrapperItemActive,
      DraggableWrapperItemConstructor = DraggableWrapperItem,
      DraggableWrapperItemFocusConstructor = DraggableWrapperItemFocus,
      DraggableWrapperItemGoConstructor = DraggableWrapperItemGo,
      DraggableWrapperItemSelectionConstructor = DraggableWrapperItemSelection,
      DraggableWrapperPositionConstructor = DraggableWrapperPosition,
      DraggableWrapperSelectionConstructor = DraggableWrapperSelection,
      DraggableWrapperSquareConstructor = DraggableWrapperSquare
    } = constructors

    this.classes = new DraggableWrapperClassesConstructor(
      this.element,
      this.classDesign,
      this.className
    )
    this.delay = new DraggableWrapperDelayConstructor(props)

    this.item = new DraggableWrapperItemConstructor(
      new DraggableWrapperItemFocusConstructor(),
      new DraggableWrapperItemActiveConstructor(this.classes),
      new DraggableWrapperItemSelectionConstructor(),
      new DraggableWrapperItemGoConstructor()
    )

    this.client = new DraggableWrapperClientConstructor(this.classes)
    this.square = new DraggableWrapperSquareConstructor(
      props,
      this.classes
    )

    this.emit = new DraggableWrapperEmitConstructor(
      this.item,
      this.client,
      this.square,
      this.emits
    )

    this.selection = new DraggableWrapperSelectionConstructor(this.classes.getId(), this.classes, this.item)
    this.position = new DraggableWrapperPositionConstructor(
      this.classes,
      this.item,
      this.client,
      this.square,
      this.emit
    )

    this.events = new DraggableWrapperEventsConstructor(
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
    const { valueTo, valueSelection, before } = parameters
    return this.item.toNewPosition(values, valueTo, valueSelection, before)
  }
}

import type { Ref, ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { SelectableAreaClassesData } from './SelectableAreaClassesData'
import { SelectableAreaEmit } from './SelectableAreaEmit'
import { SelectableAreaEvents } from './SelectableAreaEvents'
import { SelectableAreaItem } from './SelectableAreaItem'
import { SelectableAreaSquare } from './SelectableAreaSquare'

import type { SelectableAreaControl } from './basicTypes'
import type { SelectableAreaComponents, SelectableAreaEmits, SelectableAreaSlots } from './types'
import type { SelectableAreaProps } from './props'

/**
 * Orchestrator class for managing selectable area logic.
 *
 * Класс-оркестратор для управления логикой выделяемой области.
 */
export class SelectableArea {
  /** Classes helper instance / Экземпляр помощника по классам */
  readonly classes: SelectableAreaClassesData

  /** Item selection helper / Помощник по выбору элементов */
  readonly item: SelectableAreaItem

  /** Square drawing helper / Помощник рисования квадрата */
  readonly square: SelectableAreaSquare

  /** Event emit helper class / Вспомогательный класс вызова событий */
  readonly emit: SelectableAreaEmit
  /** Event validator / Валидатор событий */
  readonly events: SelectableAreaEvents

  /**
   * Constructor
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param element input element / элемент ввода
   * @param classDesign design name / название дизайна
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors object with classes / объект с классами
   * @param constructors.SelectableAreaClassesConstructor class for working with classes / класс для работы с классами
   * @param constructors.SelectableAreaEmitConstructor class for working with emits / класс для работы с событиями
   * @param constructors.SelectableAreaEventsConstructor class for working with events / класс для работы с событиями
   * @param constructors.SelectableAreaItemConstructor class for working with item selection / класс для работы с выбором элементов
   * @param constructors.SelectableAreaSquareConstructor class for working with selection square / класс для работы с квадратом выделения
   */
  constructor(
    protected readonly props: SelectableAreaProps,
    protected readonly refs: ToRefs<SelectableAreaProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<SelectableAreaComponents, SelectableAreaProps>,
    protected readonly slots?: SelectableAreaSlots,
    protected readonly emits?: ConstrEmit<SelectableAreaEmits>,
    constructors: {
      SelectableAreaClassesConstructor?: typeof SelectableAreaClassesData
      SelectableAreaEmitConstructor?: typeof SelectableAreaEmit
      SelectableAreaEventsConstructor?: typeof SelectableAreaEvents
      SelectableAreaItemConstructor?: typeof SelectableAreaItem
      SelectableAreaSquareConstructor?: typeof SelectableAreaSquare
    } = {}
  ) {
    const {
      SelectableAreaClassesConstructor = SelectableAreaClassesData,
      SelectableAreaEmitConstructor = SelectableAreaEmit,
      SelectableAreaEventsConstructor = SelectableAreaEvents,
      SelectableAreaItemConstructor = SelectableAreaItem,
      SelectableAreaSquareConstructor = SelectableAreaSquare
    } = constructors

    this.classes = new SelectableAreaClassesConstructor(element, classDesign, className)
    this.item = new SelectableAreaItemConstructor(props, refs, this.classes)

    this.square = new SelectableAreaSquareConstructor(this.classes)

    this.emit = new SelectableAreaEmitConstructor(this.classes, this.item, this.emits)
    this.events = new SelectableAreaEventsConstructor(
      this.props,
      this.classes,
      this.item,
      this.square
    )
  }

  /**
   * Returns tag name.
   *
   * Возвращает имя тега.
   * @returns tag name / имя тега
   */
  get tag(): string {
    return this.props.tag || 'div'
  }

  /**
   * Returns data for managing slot data.
   *
   * Возвращает данные для управления данными слотов.
   * @returns slot data object / объект данных слота
   */
  get slotData(): SelectableAreaControl {
    return {
      className: `${this.className}__item ${this.classes.getId()}`,
      classSelectionName: this.classes.list.selected,
      classNameClick: this.classes.list.click,
      selected: this.item.get(),
      onClick: this.events.onClick
    }
  }
}

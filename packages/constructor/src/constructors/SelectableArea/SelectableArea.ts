import type { Ref, ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import type { SelectableAreaComponents, SelectableAreaEmits, SelectableAreaSlots } from './types'
import type { SelectableAreaProps } from './props'

import { SelectableAreaClassesData } from './SelectableAreaClassesData'
import { SelectableAreaItem } from './SelectableAreaItem'
import { SelectableAreaSquare } from './SelectableAreaSquare'
import { SelectableAreaEmit } from './SelectableAreaEmit'
import { SelectableAreaEvents } from './SelectableAreaEvents'

/**
 * Orchestrator class for managing selectable area logic.
 *
 * | * Класс-оркестратор для управления логикой выделяемой области.
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
   */
  constructor(
    protected readonly props: SelectableAreaProps,
    protected readonly refs: ToRefs<SelectableAreaProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<SelectableAreaComponents, SelectableAreaProps>,
    protected readonly slots?: SelectableAreaSlots,
    protected readonly emits?: ConstrEmit<SelectableAreaEmits>
  ) {
    this.classes = new SelectableAreaClassesData(
      this.element,
      this.classDesign,
      this.className
    )

    this.item = new SelectableAreaItem(
      this.classes,
      this.props
    )

    this.emit = new SelectableAreaEmit(
      this.classes,
      this.item,
      this.emits
    )

    this.item.setEmit(this.emit)

    this.square = new SelectableAreaSquare(
      this.classes,
      this.props,
      this.item
    )

    this.events = new SelectableAreaEvents(
      this.props,
      this.classes,
      this.item,
      this.square,
      this.emit
    )
  }
}


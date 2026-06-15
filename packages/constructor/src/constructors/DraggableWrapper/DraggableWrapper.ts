import { type Ref, type ToRefs } from 'vue'
import {
  type ConstrEmit,
  type DesignComp,
  isDomRuntime,
  getMouseClient
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

/**
 * Orchestrator class for managing draggable reordering logic.
 *
 * Класс-оркестратор для управления логикой изменения порядка перетаскиванием.
 */
export class DraggableWrapper {
  /** Classes helper instance / Экземпляр помощника по классам */
  readonly classes: DraggableWrapperClassesData

  /** Focused element helper / Помощник по сфокусированному элементу */
  readonly itemFocus: DraggableWrapperItemFocus
  /** Active element helper / Помощник по активному элементу */
  readonly itemActive: DraggableWrapperItemActive
  /** Selected items helper / Помощник по выбранным элементам */
  readonly itemSelection: DraggableWrapperItemSelection
  /** Target drag element helper / Помощник по целевому элементу перетаскивания */
  readonly itemGo: DraggableWrapperItemGo
  /** Aggregated item helper / Агрегированный помощник по элементам */
  readonly item: DraggableWrapperItem

  /** Client coordinates manager / Менеджер клиентских координат */
  readonly client: DraggableWrapperClient
  /** Spacer placeholder manager / Менеджер элемента-заполнителя */
  readonly square: DraggableWrapperSquare

  /** Drag start delay helper class / Вспомогательный класс задержки начала перетаскивания */
  readonly delay: DraggableWrapperDelay

  /** Multiselection helper class / Вспомогательный класс множественного выбора */
  protected readonly selectionHelper: DraggableWrapperSelection

  /** Coordinate position helper class / Вспомогательный класс позиционирования */
  protected readonly position: DraggableWrapperPosition

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

    this.events = new DraggableWrapperEvents(props)
    this.delay = new DraggableWrapperDelay(props)

    this.itemFocus = new DraggableWrapperItemFocus()
    this.itemActive = new DraggableWrapperItemActive(this.classes)
    this.itemSelection = new DraggableWrapperItemSelection()
    this.itemGo = new DraggableWrapperItemGo()
    this.item = new DraggableWrapperItem(
      this.itemActive,
      this.itemSelection,
      this.itemGo
    )

    this.client = new DraggableWrapperClient(this.classes)
    this.square = new DraggableWrapperSquare(
      props,
      this.classes
    )

    this.selectionHelper = new DraggableWrapperSelection(this.getId(), this.classes, this.item)
    this.position = new DraggableWrapperPosition(
      this.getId(),
      this.classes,
      this.item,
      this.emitEvent,
      this.square,
      () => this.item.getValues(),
      this.client
    )
  }

  /**
   * Returns the unique component identifier.
   *
   * Возвращает уникальный идентификатор компонента.
   * @returns unique identifier / уникальный идентификатор
   */
  getId(): string {
    return this.classes.getId()
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

  /**
   * Returns bound attributes for the element.
   *
   * Возвращает привязанные атрибуты для элемента.
   * @returns element binding properties / свойства привязки элемента
   */
  get binds() {
    return {
      onMousedown: this.onMousedown,
      onTouchstart: this.onMousedown,
      onTransitionend: this.onTransitionend
    }
  }

  /**
   * Callback event emitter.
   *
   * Коллбек для генерации события.
   */
  protected emitEvent = (): void => {
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

  /**
   * Bound start event listener.
   *
   * Привязанный слушатель события запуска.
   * @param event drag event / событие перетаскивания
   */
  protected onMousedown = (
    event: MouseEvent | TouchEvent
  ): void => {
    if (this.props.disabled) {
      return
    }

    const item = this.classes.findClick(event.target as HTMLElement)

    if (!item) {
      return
    }

    event.stopPropagation()

    if (event.cancelable) {
      event.preventDefault()
    }

    this.itemFocus.set(item)

    this.delay.start(() => {
      const client = getMouseClient(event as MouseEvent & TouchEvent)

      this.client.prepare(item, client)
      this.itemActive.prepare(item, client)
      this.square.prepare(item)
      this.selectionHelper.prepare()
    })

    window.addEventListener('mousemove', this.onMousemove)

    /*

    window.addEventListener('mouseup', this.onMouseup)
    window.addEventListener('touchmove', this.onTouchmove)
    window.addEventListener('touchend', this.onTouchup)
    window.addEventListener('touchcancel', this.onTouchup) */
  }

  /**
   * Move event helper.
   *
   * Вспомогательный метод для перемещения.
   * @param event move event / событие перемещения
   */
  protected handleMove(event: MouseEvent | TouchEvent): void {
    if (
      this.events.isEnd(event)
      || this.events.isNoButtons(event)
    ) {
      if (!this.delay.stop()) {
        this.position.stop()
      }

      this.removeListeners()
      return
    }

    if (
      this.item.getActive().is()
    ) {
      event.stopPropagation()

      const client = getMouseClient(event as MouseEvent & TouchEvent)

      this.client.move(client)
      // this.position.update(client)
    } else {
      const target = event.target as HTMLElement
      const item = this.classes.findClick(target)
      if (!item || item !== this.itemFocus.get()) {
        if (!this.delay.stop()) {
          this.position.stop()
        }
        this.removeListeners()
      }
    }
  }

  /**
   * Bound transitionend event listener.
   *
   * Привязанный слушатель события завершения перехода.
   * @param event transition event / событие перехода
   */
  protected onTransitionend = (event: TransitionEvent): void => {
    if (event.propertyName === 'transform') {
      this.position.reset()
    }
  }

  /** Bound mousemove listener / Привязанный слушатель mousemove */
  protected onMousemove = (event: MouseEvent): void => this.handleMove(event)
  /** Bound mouseup listener / Привязанный слушатель mouseup */
  protected onMouseup = (event: MouseEvent): void => this.handleMove(event)
  /** Bound touchmove listener / Привязанный слушатель touchmove */
  protected onTouchmove = (event: TouchEvent): void => this.handleMove(event)
  /** Bound touchup listener / Привязанный слушатель touchup */
  protected onTouchup = (event: TouchEvent): void => this.handleMove(event)

  /**
   * Unbinds window drag event listeners.
   *
   * Удаляет слушатели событий перетаскивания окна.
   */
  protected removeListeners(): void {
    if (isDomRuntime()) {
      window.removeEventListener('mousemove', this.onMousemove)
      window.removeEventListener('mouseup', this.onMouseup)
      window.removeEventListener('touchmove', this.onTouchmove)
      window.removeEventListener('touchend', this.onTouchup)
      window.removeEventListener('touchcancel', this.onTouchup)
    }
  }
}

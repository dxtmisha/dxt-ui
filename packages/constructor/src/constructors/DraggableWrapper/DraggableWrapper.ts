import { type Ref, type ToRefs } from 'vue'
import {
  type ConstrEmit,
  type DesignComp,
  isDomRuntime,
  getMouseClientX,
  getMouseClientY
} from '@dxtmisha/functional'

import type { DraggableWrapperComponents, DraggableWrapperEmits, DraggableWrapperSlots } from './types'
import type { DraggableWrapperProps } from './props'
import type { DraggableWrapperEventParameters } from './basicTypes'

import { DraggableWrapperSquare } from './DraggableWrapperSquare'
import { DraggableWrapperSelection } from './DraggableWrapperSelection'
import { DraggableWrapperPosition } from './DraggableWrapperPosition'
import { DraggableWrapperClient } from './DraggableWrapperClient'
import { DraggableWrapperClassesData } from './DraggableWrapperClassesData'
import { DraggableWrapperFocus } from './DraggableWrapperFocus'
import { DraggableWrapperItem } from './DraggableWrapperItem'
import { DraggableWrapperItemActive } from './DraggableWrapperItemActive'
import { DraggableWrapperItemSelection } from './DraggableWrapperItemSelection'
import { DraggableWrapperItemGo } from './DraggableWrapperItemGo'

/**
 * Orchestrator class for managing draggable reordering logic /
 * Класс-оркестратор для управления логикой изменения порядка перетаскиванием
 */
export class DraggableWrapper {
  /** Classes helper instance / Экземпляр помощника по классам */
  readonly classes: DraggableWrapperClassesData

  /** Active element helper / Помощник для активного элемента */
  readonly active: DraggableWrapperItemActive

  /** Selection helper / Помощник для выбора */
  readonly selection: DraggableWrapperItemSelection

  /** Go indicator helper / Помощник индикатора Go */
  readonly go: DraggableWrapperItemGo

  /** Items helper instance / Экземпляр помощника по элементам */
  readonly item: DraggableWrapperItem

  /** Focused element on click / Элемент в фокусе при клике */
  protected readonly focusHelper = new DraggableWrapperFocus()

  /** Drag start delay timer / Таймер задержки начала перетаскивания */
  protected timeout: any

  /** Square placement helper class / Вспомогательный класс для заполнителя */
  readonly square: DraggableWrapperSquare

  /** Coordinates helper class / Вспомогательный класс координат */
  readonly client: DraggableWrapperClient

  /** Multiselection helper class / Вспомогательный класс множественного выбора */
  protected readonly selectionHelper: DraggableWrapperSelection

  /** Coordinate position helper class / Вспомогательный класс позиционирования */
  protected readonly positionHelper: DraggableWrapperPosition

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
    protected readonly props: DraggableWrapperProps,
    protected readonly refs: ToRefs<DraggableWrapperProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<DraggableWrapperComponents, DraggableWrapperProps>,
    protected readonly slots?: DraggableWrapperSlots,
    protected readonly emits?: ConstrEmit<DraggableWrapperEmits>
  ) {
    this.classes = new DraggableWrapperClassesData(this.element, this.classDesign, this.className)
    this.active = new DraggableWrapperItemActive(this.classes)
    this.selection = new DraggableWrapperItemSelection()
    this.go = new DraggableWrapperItemGo()
    this.item = new DraggableWrapperItem(this.active, this.selection, this.go)
    this.square = new DraggableWrapperSquare(this.classes)
    this.client = new DraggableWrapperClient(this.classes)
    this.selectionHelper = new DraggableWrapperSelection(this.getId(), this.classes, this.item)
    this.positionHelper = new DraggableWrapperPosition(
      this.getId(),
      this.classes,
      this.item,
      this.emitEvent,
      this.square,
      () => this.selectionHelper.getSelection(),
      this.client
    )
  }

  /**
   * Returns the unique component identifier /
   * Возвращает уникальный идентификатор компонента
   * @returns unique identifier / уникальный идентификатор
   */
  getId(): string {
    return this.classes.getId()
  }

  /**
   * Helper method to calculate the reordered array after a drop /
   * Вспомогательный метод для расчета переупорядоченного массива после сброса
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
   * Returns bound attributes for the element /
   * Возвращает привязанные атрибуты для элемента
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
   * Callback event emitter /
   * Коллбек для генерации события
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
        valueSelection: this.selectionHelper.getSelection(),
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
   * Bound start event listener /
   * Привязанный слушатель события запуска
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

    this.focusHelper.set(item)

    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      this.timeout = undefined

      this.positionHelper.start(
        item,
        getMouseClientX(event as MouseEvent & TouchEvent),
        getMouseClientY(event as MouseEvent & TouchEvent)
      )

      this.selectionHelper.update()
    }, 640)

    window.addEventListener('mousemove', this.onMousemove)
    window.addEventListener('mouseup', this.onMouseup)
    window.addEventListener('touchmove', this.onTouchmove)
    window.addEventListener('touchend', this.onTouchup)
    window.addEventListener('touchcancel', this.onTouchup)
  }

  /**
   * Move event helper /
   * Вспомогательный метод для перемещения
   * @param event move event / событие перемещения
   */
  protected handleMove(event: MouseEvent | TouchEvent): void {
    const isEndEvent = ['mouseup', 'contextmenu', 'touchend', 'touchcancel'].includes(event.type)
    const noButtonsPressed = event instanceof MouseEvent && event.buttons === 0

    if (isEndEvent || noButtonsPressed) {
      if (this.timeout) {
        clearTimeout(this.timeout)
        this.timeout = undefined
      } else {
        this.positionHelper.stop()
      }
      this.removeListeners()
      return
    }

    if (this.item.getActive().get()) {
      event.stopPropagation()

      const clientX = getMouseClientX(event as MouseEvent & TouchEvent)
      const clientY = getMouseClientY(event as MouseEvent & TouchEvent)

      const container = this.element.value
      if (container) {
        const rect = container.getBoundingClientRect()
        const points = document.elementsFromPoint(clientX, clientY)
        const find = this.positionHelper.findItem(points)

        if (find) {
          this.positionHelper.updateDropTarget(find)
          this.positionHelper.updatePositionTarget(find)
        } else if (points.indexOf(container) === -1) {
          this.positionHelper.resetPosition()
        } else {
          this.positionHelper.resetDrop()
        }

        this.positionHelper.client.update(clientX - rect.left, clientY - rect.top)
      }
    } else {
      const target = event.target as HTMLElement
      const item = this.classes.findClick(target)
      if (!item || item !== this.focusHelper.get()) {
        if (this.timeout) {
          clearTimeout(this.timeout)
          this.timeout = undefined
        } else {
          this.positionHelper.stop()
        }
        this.removeListeners()
      }
    }
  }

  /**
   * Bound transitionend event listener /
   * Привязанный слушатель события завершения перехода
   * @param event transition event / событие перехода
   */
  protected onTransitionend = (event: TransitionEvent): void => {
    if (event.propertyName === 'transform') {
      this.positionHelper.reset()
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
   * Unbinds window drag event listeners /
   * Удаляет слушатели событий перетаскивания окна
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

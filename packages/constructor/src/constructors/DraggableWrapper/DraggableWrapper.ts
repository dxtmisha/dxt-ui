import {
  type ConstrClassObject,
  type ConstrItems,
  DesignLogicAbstract
} from '@dxtmisha/functional'

import { DraggableWrapperClassesData } from './DraggableWrapperClassesData'
import { DraggableWrapperClient } from './DraggableWrapperClient'
import { DraggableWrapperDelay } from './DraggableWrapperDelay'
import { DraggableWrapperEmit } from './DraggableWrapperEmit'
import { DraggableWrapperEvents } from './DraggableWrapperEvents'
import { DraggableWrapperItem } from './DraggableWrapperItem'
import { DraggableWrapperItemActive } from './DraggableWrapperItemActive'
import { DraggableWrapperItemFocus } from './DraggableWrapperItemFocus'
import { DraggableWrapperItemGo } from './DraggableWrapperItemGo'
import { DraggableWrapperItemSelection } from './DraggableWrapperItemSelection'
import { DraggableWrapperPosition } from './DraggableWrapperPosition'
import { DraggableWrapperSelection } from './DraggableWrapperSelection'
import { DraggableWrapperSquare } from './DraggableWrapperSquare'

import type { DraggableWrapperEventParameters } from './basicTypes'
import type { DraggableWrapperProps } from './props'
import type {
  DraggableWrapperComponents,
  DraggableWrapperEmits,
  DraggableWrapperSlots
} from './types'

/** DraggableWrapper dependency constructors type / Тип конструкторов зависимостей DraggableWrapper */
export type DraggableWrapperConstructors = {
  /** Classes helper constructor / Конструктор помощника по классам */
  classesData: typeof DraggableWrapperClassesData
  /** Client coordinates manager constructor / Конструктор менеджера клиентских координат */
  client: typeof DraggableWrapperClient
  /** Drag start delay constructor / Конструктор задержки начала перетаскивания */
  delay: typeof DraggableWrapperDelay
  /** Event emit constructor / Конструктор вызова событий */
  emit: typeof DraggableWrapperEmit
  /** Event validator constructor / Конструктор валидатора событий */
  events: typeof DraggableWrapperEvents
  /** Aggregated item helper constructor / Конструктор агрегированного помощника по элементам */
  item: typeof DraggableWrapperItem
  /** Active item helper constructor / Конструктор помощника по активному элементу */
  itemActive: typeof DraggableWrapperItemActive
  /** Focused item helper constructor / Конструктор помощника по сфокусированному элементу */
  itemFocus: typeof DraggableWrapperItemFocus
  /** Drop position target helper constructor / Конструктор помощника по целевой позиции сброса */
  itemGo: typeof DraggableWrapperItemGo
  /** Item selection helper constructor / Конструктор помощника по выделению элементов */
  itemSelection: typeof DraggableWrapperItemSelection
  /** Coordinate position helper constructor / Конструктор помощника позиционирования */
  position: typeof DraggableWrapperPosition
  /** Multiselection helper constructor / Конструктор помощника множественного выбора */
  selection: typeof DraggableWrapperSelection
  /** Spacer placeholder manager constructor / Конструктор менеджера элемента-заполнителя */
  square: typeof DraggableWrapperSquare
}

/**
 * Orchestrator class for managing draggable reordering logic.
 *
 * Класс-оркестратор для управления логикой изменения порядка перетаскиванием.
 */
export class DraggableWrapper extends DesignLogicAbstract<
  HTMLElement,
  DraggableWrapperComponents,
  DraggableWrapperEmits,
  DraggableWrapperSlots,
  DraggableWrapperProps,
  DraggableWrapperConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<DraggableWrapperConstructors> = {
    classesData: {
      item: DraggableWrapperClassesData,
      parameters: () => [
        this.element,
        this.naming
      ]
    },
    client: {
      item: DraggableWrapperClient,
      parameters: () => [
        this.naming,
        () => this.i('classesData')
      ]
    },
    delay: {
      item: DraggableWrapperDelay,
      parameters: () => [this.props]
    },
    emit: {
      item: DraggableWrapperEmit,
      parameters: () => [
        () => this.i('client'),
        () => this.i('item'),
        () => this.i('square'),
        this.emits
      ]
    },
    events: {
      item: DraggableWrapperEvents,
      parameters: () => [
        this.props,
        () => this.i('classesData'),
        () => this.i('client'),
        () => this.i('delay'),
        () => this.i('item'),
        () => this.i('position'),
        () => this.i('selection'),
        () => this.i('square')
      ]
    },
    item: {
      item: DraggableWrapperItem,
      parameters: () => [
        () => this.i('itemActive'),
        () => this.i('itemFocus'),
        () => this.i('itemGo'),
        () => this.i('itemSelection')
      ]
    },
    itemActive: {
      item: DraggableWrapperItemActive,
      parameters: () => [
        this.naming,
        () => this.i('classesData')
      ]
    },
    itemFocus: {
      item: DraggableWrapperItemFocus
    },
    itemGo: {
      item: DraggableWrapperItemGo
    },
    itemSelection: {
      item: DraggableWrapperItemSelection
    },
    position: {
      item: DraggableWrapperPosition,
      parameters: () => [
        () => this.i('classesData'),
        () => this.i('client'),
        () => this.i('emit'),
        () => this.i('item'),
        () => this.i('square')
      ]
    },
    selection: {
      item: DraggableWrapperSelection,
      parameters: () => [
        this.naming,
        () => this.i('classesData'),
        () => this.i('item')
      ]
    },
    square: {
      item: DraggableWrapperSquare,
      parameters: () => [
        this.props,
        this.naming,
        () => this.i('classesData')
      ]
    }
  }

  /**
   * Returns values for the class.
   *
   * Возвращает значения для класса.
   * @returns classes values / значения классов
   */
  get classes(): ConstrClassObject {
    return {
      [this.naming.getStatusClass('disabled')]: this.props.disabled === true
    }
  }

  /**
   * Tag name.
   *
   * Название тега.
   * @returns tag name / название тега
   */
  get tag(): string {
    return this.props.tag ?? 'div'
  }

  /**
   * Helper method to calculate the reordered array after a drop.
   *
   * Вспомогательный метод для расчета переупорядоченного массива после сброса.
   * @param values original array of items / исходный массив элементов
   * @param parameters event parameters from the drop event / параметры события сброса
   * @returns new reordered array / новый переупорядоченный массив
   */
  readonly toNewPosition = <T extends { value?: any }>(
    values: T[],
    parameters: DraggableWrapperEventParameters
  ): T[] => {
    const { valueTo, valueSelection, before } = parameters
    return this.i('item').toNewPosition(values, valueTo, valueSelection, before)
  }
}

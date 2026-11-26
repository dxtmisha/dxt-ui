import type { Ref } from 'vue'
import {
  type ConstrBind,
  type ConstrEmit,
  type ConstrItems,
  type DesignComp,
  type DesignName,
  DesignLogicAbstract
} from '@dxtmisha/functional'

import { ModelInclude } from '../../classes/ModelInclude'

import { SelectableAreaClassesData } from './SelectableAreaClassesData'
import { SelectableAreaEmit } from './SelectableAreaEmit'
import { SelectableAreaEvents } from './SelectableAreaEvents'
import { SelectableAreaItem } from './SelectableAreaItem'
import { SelectableAreaSquare } from './SelectableAreaSquare'

import type { SelectableAreaControl } from './basicTypes'
import type { SelectableAreaPropsBasic } from './props'
import type {
  SelectableAreaComponents,
  SelectableAreaEmits,
  SelectableAreaSlots
} from './types'

/** SelectableArea dependency constructors type / Тип конструкторов зависимостей SelectableArea */
export type SelectableAreaConstructors = {
  /** Classes helper constructor / Конструктор помощника по классам */
  classesData: typeof SelectableAreaClassesData
  /** Event emit helper constructor / Конструктор помощника вызова событий */
  emit: typeof SelectableAreaEmit
  /** Event validator constructor / Конструктор валидатора событий */
  events: typeof SelectableAreaEvents
  /** Item selection helper constructor / Конструктор помощника по выбору элементов */
  item: typeof SelectableAreaItem
  /** Model synchronization constructor / Конструктор синхронизации модели */
  model: typeof ModelInclude<string[]>
  /** Square drawing helper constructor / Конструктор помощника рисования квадрата */
  square: typeof SelectableAreaSquare
}

/**
 * Orchestrator class for managing selectable area logic.
 *
 * Класс-оркестратор для управления логикой выделяемой области.
 */
export class SelectableArea extends DesignLogicAbstract<
  HTMLDivElement,
  SelectableAreaComponents,
  SelectableAreaEmits,
  SelectableAreaSlots,
  SelectableAreaPropsBasic,
  SelectableAreaConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<SelectableAreaConstructors> = {
    classesData: {
      item: SelectableAreaClassesData,
      parameters: () => [
        this.element,
        this.naming
      ]
    },
    emit: {
      item: SelectableAreaEmit,
      conditions: () => SelectableAreaEmit.is(this.emits),
      parameters: () => [
        () => this.i('classesData'),
        () => this.i('item'),
        this.emits
      ]
    },
    events: {
      item: SelectableAreaEvents,
      parameters: () => [
        this.props,
        () => this.i('classesData'),
        () => this.i('item'),
        () => this.i('square')
      ]
    },
    item: {
      item: SelectableAreaItem,
      parameters: () => [
        this.props,
        () => this.i('classesData')
      ]
    },
    model: {
      item: ModelInclude<string[]>,
      parameters: () => [
        'selected',
        this.emits,
        this.i('item').item
      ]
    },
    square: {
      item: SelectableAreaSquare,
      parameters: () => [
        this.naming,
        () => this.i('classesData')
      ]
    }
  }

  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input data / входные данные
   * @param element input element / элемент ввода
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors object with dependency constructors / объект с конструкторами зависимостей
   */
  constructor(
    props: Readonly<SelectableAreaPropsBasic>,
    element: Ref<HTMLDivElement | undefined>,
    naming: DesignName,
    components?: DesignComp<SelectableAreaComponents, SelectableAreaPropsBasic>,
    slots?: SelectableAreaSlots,
    emits?: ConstrEmit<SelectableAreaEmits>,
    constructors?: Partial<SelectableAreaConstructors>
  ) {
    super(
      props,
      element,
      naming,
      components,
      slots,
      emits,
      constructors
    )

    this.i('model')
  }

  /**
   * Returns bound attributes and event listeners for the wrapper element.
   *
   * Возвращает привязанные атрибуты и слушатели событий для элемента обертки.
   * @returns element binding properties / свойства привязки элемента
   */
  get binds(): ConstrBind {
    return this.i('events').binds
  }

  /**
   * Returns data for managing slot data.
   *
   * Возвращает данные для управления данными слотов.
   * @returns slot data object / объект данных слота
   */
  get slotData(): SelectableAreaControl {
    const classesData = this.i('classesData')

    return {
      className: `${this.naming.getSubClass('item')} ${classesData.getId()}`,
      classSelection: classesData.list.selected,
      classClick: classesData.list.click,
      selected: this.i('item').get(),
      onClick: this.i('events').onClick,
      onKeydown: this.i('events').onKeydown
    }
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
   * Updates selected values programmatically.
   *
   * Обновляет выбранные значения программно.
   * @param value new selected value or array of values / новое выбранное значение или массив значений
   */
  readonly setSelected = (value: string | readonly string[]): void => {
    this.i('item').set(value)
  }

  /**
   * Resets the current selection.
   *
   * Сбрасывает текущий выбор.
   */
  readonly reset = (): void => {
    this.i('item').reset()
  }
}

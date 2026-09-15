import {
  type ConstrEmit,
  type ConstrStyles,
  type DesignComp,
  isNumber,
  ListDataRef,
  type ListSelectedList
} from '@dxtmisha/functional'
import type { Ref, ToRefs } from 'vue'

import { EventClickInclude } from '../../classes/EventClickInclude'
import { ModelValueInclude } from '../../classes/ModelValueInclude'

import { CollageVariant } from './CollageVariant'
import { CollageElement } from './CollageElement'
import { CollageGrow } from './CollageGrow'
import { CollageMasonryHorizontal } from './CollageMasonryHorizontal'
import { CollageMasonryVertical } from './CollageMasonryVertical'
import { CollageWoven } from './CollageWoven'

import type { CollageProps } from './props'
import type { CollageComponents, CollageEmits, CollageSlots } from './types'

/**
 * Collage orchestrator class coordinating data management, layout modes, events, and selections.
 *
 * Класс-оркестратор Collage, координирующий управление данными, режимы макета, события и выбор элементов.
 */
export class Collage {
  /** Reactive list data manager / Реактивный менеджер данных списка */
  readonly data: ListDataRef

  /** Manager for dynamic layout variant, woven and masonry layouts / Менеджер динамического варианта макета, woven и плиточных макетов */
  readonly variant: CollageVariant

  /** Manager for collage container DOM elements / Менеджер DOM-элементов контейнера коллажа */
  readonly elementItem: CollageElement

  /** Manager for horizontal masonry variant layout / Менеджер макета варианта горизонтальной кладки */
  readonly masonryHorizontal: CollageMasonryHorizontal

  /** Manager for vertical masonry variant layout / Менеджер макета варианта вертикальной кладки */
  readonly masonryVertical: CollageMasonryVertical

  /** Manager for woven variant layout and item turn classes / Менеджер макета варианта woven и классов поворота элементов */
  readonly woven: CollageWoven

  /** Manager for item grow factors and CSS properties / Менеджер коэффициентов роста элементов и CSS-свойств */
  readonly grow: CollageGrow

  /** Click event helper / Помощник событий клика */
  readonly event: EventClickInclude

  /** Model value synchronizer for selected state / Синхронизатор значения модели для состояния выбора */
  readonly model: ModelValueInclude<ListSelectedList>

  /**
   * Constructor for Collage.
   *
   * Конструктор для Collage.
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param element container element reference / ссылка на элемент контейнера
   * @param classDesign design name / название дизайна
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors object with classes for dependency injection / объект с классами для внедрения зависимостей
   * @param constructors.CollageVariantConstructor class for managing variant / класс для управления вариантом макета
   * @param constructors.CollageElementConstructor class for managing container DOM elements / класс для управления DOM-элементами контейнера
   * @param constructors.CollageMasonryHorizontalConstructor class for managing horizontal masonry layout / класс для управления макетом горизонтальной кладки
   * @param constructors.CollageMasonryVerticalConstructor class for managing vertical masonry layout / класс для управления макетом вертикальной кладки
   * @param constructors.CollageGrowConstructor class for managing item grow factors / класс для управления коэффициентами роста элементов
   * @param constructors.CollageWovenConstructor class for managing woven variant layout / класс для управления макетом варианта woven
   * @param constructors.EventClickIncludeConstructor class for managing click events / класс для управления событиями клика
   * @param constructors.ListDataRefConstructor class for managing list data / класс для управления данными списка
   * @param constructors.ModelValueIncludeConstructor class for managing model value / класс для управления значением модели
   */
  constructor(
    protected readonly props: CollageProps,
    protected readonly refs: ToRefs<CollageProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<CollageComponents, CollageProps>,
    protected readonly slots?: CollageSlots,
    protected readonly emits?: ConstrEmit<CollageEmits>,
    constructors: {
      CollageVariantConstructor?: typeof CollageVariant
      CollageElementConstructor?: typeof CollageElement
      CollageMasonryHorizontalConstructor?: typeof CollageMasonryHorizontal
      CollageMasonryVerticalConstructor?: typeof CollageMasonryVertical
      CollageGrowConstructor?: typeof CollageGrow
      CollageWovenConstructor?: typeof CollageWoven
      EventClickIncludeConstructor?: typeof EventClickInclude
      ListDataRefConstructor?: typeof ListDataRef
      ModelValueIncludeConstructor?: typeof ModelValueInclude
    } = {}
  ) {
    const {
      CollageVariantConstructor = CollageVariant,
      CollageElementConstructor = CollageElement,
      CollageMasonryHorizontalConstructor = CollageMasonryHorizontal,
      CollageMasonryVerticalConstructor = CollageMasonryVertical,
      CollageGrowConstructor = CollageGrow,
      CollageWovenConstructor = CollageWoven,
      EventClickIncludeConstructor = EventClickInclude,
      ListDataRefConstructor = ListDataRef,
      ModelValueIncludeConstructor = ModelValueInclude
    } = constructors

    this.elementItem = new CollageElementConstructor(element)
    this.grow = new CollageGrowConstructor(className, this.elementItem)
    this.woven = new CollageWovenConstructor(className, this.elementItem)
    this.masonryHorizontal = new CollageMasonryHorizontalConstructor(
      this.grow,
      this.elementItem
    )
    this.masonryVertical = new CollageMasonryVerticalConstructor(
      this.grow,
      this.elementItem
    )

    this.data = new ListDataRefConstructor(
      this.refs.images,
      undefined,
      undefined,
      undefined,
      undefined,
      this.refs.selected,
      this.refs.keyValue,
      this.refs.keyLabel
    )

    this.variant = new CollageVariantConstructor(
      props,
      refs,
      this.elementItem,
      this.woven,
      this.masonryHorizontal,
      this.masonryVertical
    )

    this.event = new EventClickIncludeConstructor(
      undefined,
      undefined,
      emits
    )

    this.model = new ModelValueIncludeConstructor<ListSelectedList>(
      'selected',
      emits,
      this.event,
      refs.selected
    )
  }

  /**
   * Inline styles containing CSS custom properties for grid configuration.
   *
   * Инлайн-стили, содержащие пользовательские CSS-свойства для настройки сетки.
   */
  get styles(): ConstrStyles {
    const styles: ConstrStyles = {}
    const cellSize = this.getCellSize()

    if (cellSize !== undefined) {
      styles[`--${this.className}-cell-size`] = cellSize
    }

    return styles
  }

  /**
   * Returns formatted cell size CSS property value. /
   * Возвращает отформатированное значение свойства CSS размера ячейки.
   * @returns formatted cell size string or undefined / отформатированная строка размера ячейки или undefined
   */
  protected getCellSize(): string | undefined {
    if (this.props.cellSize !== undefined) {
      if (isNumber(this.props.cellSize)) {
        return `${this.props.cellSize}px`
      }

      return String(this.props.cellSize)
    }

    return undefined
  }
}

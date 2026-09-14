import type { Ref, ToRefs } from 'vue'
import {
  type ConstrClassObject,
  type ConstrEmit,
  type ConstrStyles,
  type DesignComp,
  ListDataRef,
  type ListList,
  type ListSelectedList
} from '@dxtmisha/functional'

import { EventClickInclude } from '../../classes/EventClickInclude'
import { ModelValueInclude } from '../../classes/ModelValueInclude'

import { CollageAppearance } from './CollageAppearance'
import { CollageElement } from './CollageElement'
import { CollageEven } from './CollageEven'
import { CollageStyle } from './CollageStyle'
import { CollageWoven } from './CollageWoven'

import type { CollageComponents, CollageEmits, CollageSlots } from './types'
import type { CollageProps } from './props'

/**
 * Collage orchestrator class coordinating data management, layout modes, events, and selections.
 *
 * Класс-оркестратор Collage, координирующий управление данными, режимы макета, события и выбор элементов.
 */
export class Collage {
  /** Reactive list data manager / Реактивный менеджер данных списка */
  readonly data: ListDataRef

  /** Manager for dynamic appearance, woven and masonry layouts / Менеджер динамического внешнего вида, woven и плиточных макетов */
  readonly appearance: CollageAppearance

  /** Manager for even layout state / Менеджер состояния четности макета */
  readonly even: CollageEven

  /** Manager for collage container DOM elements / Менеджер DOM-элементов контейнера коллажа */
  readonly elementItem: CollageElement

  /** Manager for woven appearance layout and item turn classes / Менеджер макета внешнего вида woven и классов поворота элементов */
  readonly woven: CollageWoven

  /** Manager for collage styles, elements, and CSS variables / Менеджер стилей, элементов и CSS-переменных коллажа */
  readonly style: CollageStyle

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
   * @param constructors.CollageAppearanceConstructor class for managing appearance / класс для управления внешним видом
   * @param constructors.CollageElementConstructor class for managing container DOM elements / класс для управления DOM-элементами контейнера
   * @param constructors.CollageEvenConstructor class for managing even state / класс для управления состоянием четности
   * @param constructors.CollageStyleConstructor class for managing styles and elements / класс для управления стилями и элементами
   * @param constructors.CollageWovenConstructor class for managing woven appearance layout / класс для управления макетом внешнего вида woven
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
      CollageAppearanceConstructor?: typeof CollageAppearance
      CollageElementConstructor?: typeof CollageElement
      CollageEvenConstructor?: typeof CollageEven
      CollageStyleConstructor?: typeof CollageStyle
      CollageWovenConstructor?: typeof CollageWoven
      EventClickIncludeConstructor?: typeof EventClickInclude
      ListDataRefConstructor?: typeof ListDataRef
      ModelValueIncludeConstructor?: typeof ModelValueInclude
    } = {}
  ) {
    const {
      CollageAppearanceConstructor = CollageAppearance,
      CollageElementConstructor = CollageElement,
      CollageEvenConstructor = CollageEven,
      CollageStyleConstructor = CollageStyle,
      CollageWovenConstructor = CollageWoven,
      EventClickIncludeConstructor = EventClickInclude,
      ListDataRefConstructor = ListDataRef,
      ModelValueIncludeConstructor = ModelValueInclude
    } = constructors

    this.elementItem = new CollageElementConstructor(element)
    this.style = new CollageStyleConstructor(className, this.elementItem)
    this.even = new CollageEvenConstructor(className)
    this.woven = new CollageWovenConstructor(className, this.elementItem, this.even)

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

    this.appearance = new CollageAppearanceConstructor(
      props,
      refs,
      this.elementItem,
      this.style,
      this.woven
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
   * Classes object for the root element.
   *
   * Объект классов для корневого элемента.
   */
  get classes(): ConstrClassObject {
    return {
      ...this.even.classes
    }
  }

  /**
   * Inline styles containing CSS custom properties for grid configuration.
   *
   * Инлайн-стили, содержащие пользовательские CSS-свойства для настройки сетки.
   */
  get styles(): ConstrStyles {
    const styles: ConstrStyles = {}

    if (this.props.cellSize !== undefined) {
      styles[`--${this.className}-cell-size`] = typeof this.props.cellSize === 'number'
        ? `${this.props.cellSize}px`
        : String(this.props.cellSize)
    }

    return styles
  }

  /**
   * Attributes and event bindings for the root container.
   *
   * Атрибуты и привязки событий для корневого контейнера.
   */
  get binds(): Record<string, any> {
    return {}
  }

  /**
   * Recalculates and updates the collage layout.
   *
   * Пересчитывает и обновляет макет коллажа.
   */
  readonly update = (): void => {
    this.appearance.update()
  }

  /**
   * Returns list of normalized items.
   *
   * Возвращает список нормализованных элементов.
   * @returns normalized items list / список нормализованных элементов
   */
  getList(): ListList {
    return this.data.data.value
  }

  /**
   * Checks if list or slot content is available.
   *
   * Проверяет, доступен ли список или содержимое слота.
   * @returns true if list or slot is present / true, если список или слот присутствует
   */
  isList(): boolean {
    return Boolean(
      this.props.images
      || this.slots?.default
    )
  }
}

import {
  computed,
  getCurrentInstance,
  provide,
  type Ref,
  toRef
} from 'vue'
import {
  type ConstrBind,
  type ConstrEmit,
  type ConstrItems,
  type ConstrStyles,
  type DesignComponents,
  DesignLogicAbstract,
  type DesignName,
  isFilled,
  isNumber,
  ListDataRef,
  type ListList,
  type ListSelectedList
} from '@dxtmisha/functional'

import { CollageElement } from './CollageElement'
import { CollageGrow } from './CollageGrow'
import { CollageMasonryHorizontal } from './CollageMasonryHorizontal'
import { CollageMasonryVertical } from './CollageMasonryVertical'
import { CollageVariant } from './CollageVariant'
import { CollageWoven } from './CollageWoven'
import { EventClickInclude } from '../../classes/EventClickInclude'
import { FocusDirectionInclude } from '../../classes/FocusDirection/FocusDirectionInclude'
import { ModelValueInclude } from '../../classes/ModelValueInclude'

import type { EventClickValue } from '../../types/eventClickTypes'
import {
  COLLAGE_NAME_UPDATE,
  type CollageUpdate
} from './basicTypes'
import type { CollageProps } from './props'
import type { CollageComponents, CollageEmits, CollageSlots } from './types'

/** Collage dependency constructors type / Тип конструкторов зависимостей Collage */
export type CollageConstructors = {
  /** List data manager constructor / Конструктор менеджера данных списка */
  data: typeof ListDataRef
  /** Container DOM element manager constructor / Конструктор менеджера DOM-элементов контейнера */
  elementItem: typeof CollageElement
  /** Click event handler constructor / Конструктор обработчика событий клика */
  event: typeof EventClickInclude
  /** Directional keyboard focus navigation constructor / Конструктор клавиатурной навигации по направлениям */
  focusDirection: typeof FocusDirectionInclude
  /** Item grow factor manager constructor / Конструктор менеджера коэффициентов роста элементов */
  grow: typeof CollageGrow
  /** Horizontal masonry layout manager constructor / Конструктор менеджера горизонтального плиточного макета */
  masonryHorizontal: typeof CollageMasonryHorizontal
  /** Vertical masonry layout manager constructor / Конструктор менеджера вертикального плиточного макета */
  masonryVertical: typeof CollageMasonryVertical
  /** Model value manager constructor / Конструктор менеджера значения модели */
  model: typeof ModelValueInclude<ListSelectedList | undefined>
  /** Dynamic layout variant manager constructor / Конструктор менеджера динамического варианта макета */
  variant: typeof CollageVariant
  /** Woven layout manager constructor / Конструктор менеджера варианта макета woven */
  woven: typeof CollageWoven
}

/**
 * Collage orchestrator class coordinating data management, layout modes, events,
 * directional keyboard focus, and selection states with lazy dependency instantiation.
 *
 * Класс-оркестратор Collage, координирующий управление данными, режимы макета, события,
 * направленную клавиатурную навигацию и состояния выбора с ленивой инициализацией зависимостей.
 */
export class Collage extends DesignLogicAbstract<
  HTMLElement,
  CollageComponents,
  CollageEmits,
  CollageSlots,
  CollageProps,
  CollageConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<CollageConstructors> = {
    data: {
      item: ListDataRef,
      canCreate: () => isFilled(this.props.images),
      parameters: () => [
        toRef(this.props, 'images'),
        undefined,
        undefined,
        undefined,
        undefined,
        computed(() => this.i('model').value.value),
        toRef(this.props, 'keyValue'),
        toRef(this.props, 'keyLabel')
      ]
    },
    elementItem: {
      item: CollageElement,
      parameters: () => [
        this.element
      ]
    },
    event: {
      item: EventClickInclude,
      parameters: () => [
        undefined,
        undefined,
        this.emits
      ]
    },
    focusDirection: {
      item: FocusDirectionInclude,
      canCreate: () => Boolean(this.props.control),
      parameters: () => [
        this.element,
        '[data-collage-item]',
        `.${this.naming.getDesign()}-collageItem--selected`,
        `${this.naming.getDesign()}-collageItem--focus`,
        () => this.props.control
      ]
    },
    grow: {
      item: CollageGrow,
      canCreate: () => CollageGrow.is(this.props),
      parameters: () => [
        this.naming,
        () => this.i('elementItem')
      ]
    },
    masonryHorizontal: {
      item: CollageMasonryHorizontal,
      canCreate: () => CollageMasonryHorizontal.is(this.props),
      parameters: () => [
        () => this.i('elementItem'),
        () => this.i('grow')
      ]
    },
    masonryVertical: {
      item: CollageMasonryVertical,
      canCreate: () => CollageMasonryVertical.is(this.props),
      parameters: () => [
        () => this.i('elementItem'),
        () => this.i('grow')
      ]
    },
    model: {
      item: ModelValueInclude<ListSelectedList | undefined>,
      parameters: () => [
        'selected',
        this.emits,
        undefined,
        computed(() => this.props.modelSelected ?? this.props.selected),
        () => !this.props.control,
        true
      ]
    },
    variant: {
      item: CollageVariant,
      canCreate: () => CollageVariant.is(this.props),
      conditions: () => CollageVariant.is(this.props),
      parameters: () => [
        this.props,
        () => this.i('elementItem'),
        () => this.callInstance('grow', item => item),
        () => this.callInstance('masonryHorizontal', item => item),
        () => this.callInstance('masonryVertical', item => item),
        () => this.callInstance('woven', item => item)
      ]
    },
    woven: {
      item: CollageWoven,
      canCreate: () => CollageWoven.is(this.props),
      parameters: () => [
        this.naming,
        () => this.i('elementItem')
      ]
    }
  }

  /**
   * Constructor for Collage.
   * Provides the layout update callback synchronously during setup for descendant CollageItem components.
   *
   * Конструктор для Collage.
   * Синхронно предоставляет функцию обратного вызова обновления макета во время setup для дочерних компонентов CollageItem.
   * @param props input properties / входные свойства
   * @param element container element reference / ссылка на элемент контейнера
   * @param naming component naming helper / помощник именования компонента
   * @param components connected component registry / реестр подключённых компонентов
   * @param slots named slot registry / реестр именованных слотов
   * @param emits component event emitter / функция событий компонента
   * @param constructors dependency constructor overrides / переопределения конструкторов зависимостей
   * @param hasLifecycle whether to register component lifecycle hooks / регистрировать ли хуки жизненного цикла компонента
   */
  constructor(
    props: Readonly<CollageProps>,
    element: Ref<HTMLElement | undefined>,
    naming: DesignName,
    components?: DesignComponents<CollageComponents, CollageProps>,
    slots?: CollageSlots,
    emits?: ConstrEmit<CollageEmits>,
    constructors?: Partial<CollageConstructors>,
    hasLifecycle: boolean = true
  ) {
    super(
      props,
      element,
      naming,
      components,
      slots,
      emits,
      constructors,
      hasLifecycle
    )

    if (getCurrentInstance()) {
      provide<CollageUpdate>(COLLAGE_NAME_UPDATE, this.update)
    }
  }

  /**
   * Binding attributes for the root container element.
   *
   * Атрибуты привязки для корневого элемента контейнера.
   * @returns root element bindings / привязки корневого элемента
   */
  get binds(): ConstrBind {
    return this.callInstance('focusDirection', item => item.binds, {})
  }

  /**
   * Inline styles containing CSS custom properties for grid configuration.
   *
   * Инлайн-стили, содержащие пользовательские CSS-свойства для настройки сетки.
   * @returns calculated CSS styles object / объект вычисленных CSS-стилей
   */
  get styles(): ConstrStyles {
    const styles: ConstrStyles = {}
    const cellSize = this.getCellSize()

    if (cellSize !== undefined) {
      styles[`--${this.naming.getName()}-cell-size`] = cellSize
    }

    return styles
  }

  /**
   * Returns focus navigation bindings for a child collage item element.
   *
   * Возвращает привязки навигации фокуса для дочернего элемента коллажа.
   * @returns child item bindings / привязки дочернего элемента
   */
  getBindsItem(): ConstrBind {
    return this.callInstance('focusDirection', item => item.bindsItem(), {})
  }

  /**
   * Returns normalized list of collage items with computed selection states.
   *
   * Возвращает нормализованный список элементов коллажа с вычисленными состояниями выбора.
   * @returns list of collage items / список элементов коллажа
   */
  getList(): ListList {
    return this.callInstance('data', item => item.fullData.value, [])
  }

  /**
   * Triggers dynamic layout recalculation when a dynamic variant is active.
   *
   * Запускает динамический перерасчет макета при активном динамическом варианте.
   */
  readonly update = (): void => {
    this.callInstance('variant', item => item.update())
  }

  /**
   * Handles collage item click event, updates selection model when control mode is enabled,
   * and emits click events.
   *
   * Обрабатывает событие клика по элементу коллажа, обновляет модель выбора при включённом режиме управления
   * и эмитит события клика.
   * @param event native mouse click event / нативное событие клика мыши
   * @param options event click payload / данные события клика
   */
  readonly onClick = (
    event: MouseEvent,
    options?: EventClickValue
  ): void => {
    this.i('model').onClick(event, options)
    this.i('event').onClick(event, options)
  }

  /**
   * Returns formatted cell size CSS property value.
   *
   * Возвращает отформатированное значение свойства CSS размера ячейки.
   * @returns formatted cell size string or undefined / отформатированная строка размера ячейки или undefined
   */
  protected getCellSize(): string | undefined {
    const cellSize = this.props.cellSize

    if (cellSize === undefined) {
      return undefined
    }

    if (isNumber(cellSize)) {
      return `${String(cellSize).trim()}px`
    }

    if (typeof cellSize === 'number') {
      return undefined
    }

    const trimmed = String(cellSize).trim()

    return trimmed ? trimmed : undefined
  }
}

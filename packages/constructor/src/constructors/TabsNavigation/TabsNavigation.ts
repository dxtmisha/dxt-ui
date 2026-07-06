import { type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp, ListDataRef, type ListSelectedList } from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'
import { ModelInclude } from '../../classes/ModelInclude'

import { HorizontalScrollInclude } from '../HorizontalScroll'

import { TabsNavigationSelected } from './TabsNavigationSelected'
import { TabsNavigationFocus } from './TabsNavigationFocus'
import { TabsNavigationIds } from './TabsNavigationIds'
import { TabsNavigationIndicator } from './TabsNavigationIndicator'
import { TabsNavigationControl } from './TabsNavigationControl'
import { TabsNavigationSize } from './TabsNavigationSize'

import type { EventClickValue } from '../../types/eventClickTypes'
import type { TabsNavigationComponents, TabsNavigationEmits, TabsNavigationSlots } from './types'
import type { TabsNavigationProps } from './props'

/**
 * TabsNavigation manages the core business logic of a tab navigation component.
 * It coordinates selection, focus management, indicator movements, scrolling, and keyboard control.
 *
 * TabsNavigation управляет основной бизнес-логикой компонента навигации вкладок.
 * Координирует выбор элементов, управление фокусом, движение индикатора, прокрутку и управление с клавиатуры.
 */
export class TabsNavigation {
  /** Scroll handling helper / Вспомогательный класс для работы с прокруткой */
  readonly scroll: HorizontalScrollInclude

  /** Selected tab state helper / Класс для работы с выбранным состоянием вкладки */
  readonly selected: TabsNavigationSelected

  /** Focus management helper / Класс для управления фокусом */
  readonly focus: TabsNavigationFocus

  /** Reactive list data reference / Реактивная ссылка на данные списка */
  readonly data: ListDataRef

  /** Tab DOM identifiers manager / Менеджер DOM-идентификаторов вкладок */
  readonly ids: TabsNavigationIds

  /** Dynamic tab active indicator helper / Вспомогательный класс для управления активным индикатором вкладки */
  readonly indicator: TabsNavigationIndicator

  /** Tab keyboard control helper / Вспомогательный класс для управления с клавиатуры */
  readonly control: TabsNavigationControl

  /** Tab size observer helper / Вспомогательный класс для отслеживания размеров вкладок */
  readonly size: TabsNavigationSize

  /** Event click listener helper / Вспомогательный класс для обработки кликов */
  readonly event: EventClickInclude

  /**
   * Constructor for initializing all necessary components for tab navigation.
   *
   * Конструктор для инициализации всех необходимых компонентов навигации вкладок.
   * @param props input configuration properties / входные конфигурационные свойства
   * @param refs reactive references of properties / реактивные ссылки свойств
   * @param element main HTML element / главный HTML-элемент
   * @param classDesign design class token name / имя токена класса дизайна
   * @param className base class name / базовое имя класса
   * @param components registry of design components / реестр дизайн-компонентов
   * @param slots slot functions wrapper / обертка функций слотов
   * @param emits event emitter callback / функция обратного вызова для генерации событий
   * @param constructors optional custom implementation class constructors / опциональные пользовательские конструкторы классов
   */
  constructor(
    protected readonly props: TabsNavigationProps,
    protected readonly refs: ToRefs<TabsNavigationProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<TabsNavigationComponents, TabsNavigationProps>,
    protected readonly slots?: TabsNavigationSlots,
    protected readonly emits?: ConstrEmit<TabsNavigationEmits>,
    constructors: {
      EventClickIncludeConstructor?: typeof EventClickInclude
      HorizontalScrollIncludeConstructor?: typeof HorizontalScrollInclude
      ListDataRefConstructor?: typeof ListDataRef
      ModelIncludeConstructor?: typeof ModelInclude<ListSelectedList | undefined>
      TabsNavigationControlConstructor?: typeof TabsNavigationControl
      TabsNavigationIdsConstructor?: typeof TabsNavigationIds
      TabsNavigationFocusConstructor?: typeof TabsNavigationFocus
      TabsNavigationIndicatorConstructor?: typeof TabsNavigationIndicator
      TabsNavigationSelectedConstructor?: typeof TabsNavigationSelected
      TabsNavigationSizeConstructor?: typeof TabsNavigationSize
    } = {}
  ) {
    const {
      EventClickIncludeConstructor = EventClickInclude,
      HorizontalScrollIncludeConstructor = HorizontalScrollInclude,
      ListDataRefConstructor = ListDataRef,
      ModelIncludeConstructor = ModelInclude,
      TabsNavigationControlConstructor = TabsNavigationControl,
      TabsNavigationIdsConstructor = TabsNavigationIds,
      TabsNavigationFocusConstructor = TabsNavigationFocus,
      TabsNavigationIndicatorConstructor = TabsNavigationIndicator,
      TabsNavigationSelectedConstructor = TabsNavigationSelected,
      TabsNavigationSizeConstructor = TabsNavigationSize
    } = constructors

    this.scroll = new HorizontalScrollIncludeConstructor(
      className,
      props,
      components
    )

    this.selected = new TabsNavigationSelectedConstructor(props, refs)
    this.focus = new TabsNavigationFocusConstructor(
      this.scroll,
      this.selected
    )
    this.data = new ListDataRefConstructor(
      refs.list,
      this.focus.item,
      undefined,
      undefined,
      undefined,
      this.selected.actualItem,
      refs.keyValue,
      refs.keyLabel
    )

    this.ids = new TabsNavigationIdsConstructor(
      props,
      this.data
    )

    this.indicator = new TabsNavigationIndicatorConstructor(
      props,
      refs,
      () => this.scroll.elementHtml,
      classDesign,
      className,
      this.selected
    )
    this.control = new TabsNavigationControlConstructor(
      this.selected,
      this.focus,
      this.data
    )
    this.size = new TabsNavigationSizeConstructor(this.scroll)

    this.event = new EventClickIncludeConstructor(undefined, undefined, emits)
    new ModelIncludeConstructor('selected', emits, this.selected.item)
  }

  /**
   * Returns binding attributes for the container element.
   *
   * Возвращает атрибуты привязки для контейнера.
   * @returns object containing role, tabIndex, and keyboard bindings / объект с ролью, tabIndex и привязками клавиатуры
   */
  get binds(): Record<string, any> {
    return {
      tabindex: 0,
      ...this.control.binds,
      ...AriaStaticInclude.role('tablist')
    }
  }

  /**
   * Handler for the click event on tab elements.
   *
   * Обработчик события клика на элементы вкладок.
   * @param event native MouseEvent object / объект нативного события MouseEvent
   * @param options event click value details / детальная информация события клика
   */
  readonly onClick = (
    event: MouseEvent,
    options?: EventClickValue
  ) => {
    this.selected.set(options?.value)
    this.event.onClick(event, options)
  }
}

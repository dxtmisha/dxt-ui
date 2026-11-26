import { computed, toRef } from 'vue'
import {
  type ConstrBind,
  type ConstrItems,
  DesignLogicAbstract,
  ListDataRef,
  type ListSelectedList
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'
import { ModelInclude } from '../../classes/ModelInclude'

import { HorizontalScrollInclude } from '../HorizontalScroll'

import { TabsNavigationControl } from './TabsNavigationControl'
import { TabsNavigationFocus } from './TabsNavigationFocus'
import { TabsNavigationIds } from './TabsNavigationIds'
import { TabsNavigationIndicator } from './TabsNavigationIndicator'
import { TabsNavigationSelected } from './TabsNavigationSelected'
import { TabsNavigationSize } from './TabsNavigationSize'

import type { AriaList } from '../../types/ariaTypes'
import type { EventClickValue } from '../../types/eventClickTypes'
import type { TabsNavigationProps } from './props'
import type {
  TabsNavigationComponents,
  TabsNavigationEmits,
  TabsNavigationExpose,
  TabsNavigationSlots
} from './types'

/** TabsNavigation dependency constructors type / Тип конструкторов зависимостей TabsNavigation */
export type TabsNavigationConstructors = {
  /** Tab keyboard control constructor / Конструктор управления клавиатурой вкладок */
  control: typeof TabsNavigationControl
  /** Reactive list data reference constructor / Конструктор реактивной ссылки на данные списка */
  data: typeof ListDataRef
  /** Event click listener constructor / Конструктор обработчика кликов */
  event: typeof EventClickInclude
  /** Focus management constructor / Конструктор управления фокусом */
  focus: typeof TabsNavigationFocus
  /** Tab DOM identifiers manager constructor / Конструктор менеджера DOM-идентификаторов вкладок */
  ids: typeof TabsNavigationIds
  /** Dynamic tab active indicator constructor / Конструктор активного индикатора вкладки */
  indicator: typeof TabsNavigationIndicator
  /** Model synchronization constructor / Конструктор синхронизации модели */
  model: typeof ModelInclude<ListSelectedList | undefined>
  /** Horizontal scroll inclusion constructor / Конструктор подключения горизонтальной прокрутки */
  scroll: typeof HorizontalScrollInclude
  /** Selected tab state constructor / Конструктор состояния выбранной вкладки */
  selected: typeof TabsNavigationSelected
  /** Tab container resize observer constructor / Конструктор отслеживания размеров контейнера вкладок */
  size: typeof TabsNavigationSize
}

/**
 * TabsNavigation manages the core business logic of a tab navigation component.
 * It coordinates selection, focus management, indicator movements, scrolling, and keyboard control.
 *
 * TabsNavigation управляет основной бизнес-логикой компонента навигации вкладок.
 * Координирует выбор элементов, управление фокусом, движение индикатора, прокрутку и управление с клавиатуры.
 */
export class TabsNavigation extends DesignLogicAbstract<
  HTMLDivElement,
  TabsNavigationComponents,
  TabsNavigationEmits,
  TabsNavigationSlots,
  TabsNavigationProps,
  TabsNavigationConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<TabsNavigationConstructors> = {
    control: {
      item: TabsNavigationControl,
      parameters: () => [
        () => this.i('data'),
        () => this.i('focus'),
        () => this.i('scroll'),
        () => this.i('selected')
      ]
    },
    data: {
      item: ListDataRef,
      parameters: () => [
        toRef(this.props, 'list'),
        computed(() => this.i('focus').item.value),
        undefined,
        undefined,
        undefined,
        computed(() => this.i('selected').actualItem.value),
        toRef(this.props, 'keyValue'),
        toRef(this.props, 'keyLabel')
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
    focus: {
      item: TabsNavigationFocus,
      parameters: () => [
        () => this.i('scroll'),
        () => this.i('selected')
      ]
    },
    ids: {
      item: TabsNavigationIds,
      parameters: () => [
        () => this.i('data')
      ]
    },
    indicator: {
      item: TabsNavigationIndicator,
      conditions: () => true,
      parameters: () => [
        () => this.i('scroll').elementHtml,
        this.naming,
        () => this.i('selected')
      ]
    },
    model: {
      item: ModelInclude<ListSelectedList | undefined>,
      parameters: () => [
        'selected',
        this.emits
      ]
    },
    scroll: {
      item: HorizontalScrollInclude,
      parameters: () => [
        this.props,
        this.naming,
        this.components
      ]
    },
    selected: {
      item: TabsNavigationSelected,
      parameters: () => [
        this.props,
        () => this.i('model')
      ]
    },
    size: {
      item: TabsNavigationSize,
      conditions: () => TabsNavigationSize.is(this.props),
      parameters: () => [
        () => this.i('scroll')
      ]
    }
  }

  /**
   * Returns ARIA attributes for the tablist container element.
   *
   * Возвращает ARIA-атрибуты для контейнера списка вкладок.
   * @returns ARIA attributes dictionary / словарь ARIA-атрибутов
   */
  get aria(): AriaList {
    return {
      ...AriaStaticInclude.role('tablist'),
      ...AriaStaticInclude.orientation('horizontal')
    }
  }

  /**
   * Returns binding attributes for the container element.
   *
   * Возвращает атрибуты привязки для контейнера.
   * @returns object containing role, orientation, tabIndex, and keyboard focus bindings / объект с ролью, ориентацией, tabIndex и привязками фокуса клавиатуры
   */
  get binds(): ConstrBind {
    return {
      tabindex: 0,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      ...this.aria
    }
  }

  /**
   * Returns exposed API properties and methods.
   *
   * Возвращает экспортируемые свойства и методы API.
   * @returns exposed API object / объект экспортируемого API
   */
  get expose(): TabsNavigationExpose {
    return {
      ids: () => this.i('ids').ids.value
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
  ): void => {
    this.i('selected').set(options?.value)
    this.i('event').onClick(event, options)
  }

  /**
   * Lazily initializes keyboard control on container focus.
   *
   * Лениво инициализирует управление клавиатурой при получении фокуса контейнером.
   */
  protected readonly onFocus = (): void => {
    this.i('control').onFocus()
  }

  /**
   * Stops active keyboard control on container blur when initialized.
   *
   * Останавливает активное управление клавиатурой при потере фокуса контейнером, если оно инициализировано.
   */
  protected readonly onBlur = (): void => {
    if (this.hasInstance('control')) {
      this.i('control').onBlur()
    }
  }
}

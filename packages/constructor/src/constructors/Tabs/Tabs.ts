import {
  type ConstrItems,
  DesignLogicAbstract,
  type ListSelectedList
} from '@dxtmisha/functional'

import { EventClickInclude } from '../../classes/EventClickInclude'
import { ModelInclude } from '../../classes/ModelInclude'

import { MotionAxisInclude } from '../MotionAxis'
import { TabsNavigationInclude } from '../TabsNavigation'

import { TabsSelected } from './TabsSelected'

import type { EventClickValue } from '../../types/eventClickTypes'
import type { TabsProps } from './props'
import type {
  TabsComponents,
  TabsEmits,
  TabsExpose,
  TabsSlots
} from './types'

/** Tabs dependency constructors type / Тип конструкторов зависимостей Tabs */
export type TabsConstructors = {
  /** Event click listener constructor / Конструктор обработчика кликов */
  event: typeof EventClickInclude
  /** Model synchronization constructor / Конструктор синхронизации модели */
  model: typeof ModelInclude<ListSelectedList | undefined>
  /** Motion axis inclusion constructor / Конструктор подключения оси движения */
  motionAxis: typeof MotionAxisInclude
  /** Selected tab state constructor / Конструктор состояния выбранной вкладки */
  selected: typeof TabsSelected
  /** Tabs navigation inclusion constructor / Конструктор подключения навигации вкладок */
  tabsNavigation: typeof TabsNavigationInclude
}

/**
 * Orchestrator class for the Tabs component.
 * Coordinates tab selection state, two-way model synchronization, navigation bar rendering, and slide transitions.
 *
 * Класс-оркестратор для компонента Tabs.
 * Координирует состояние выбранной вкладки, двустороннюю синхронизацию модели, рендеринг панели навигации и переходы слайдов.
 */
export class Tabs extends DesignLogicAbstract<
  HTMLDivElement,
  TabsComponents,
  TabsEmits,
  TabsSlots,
  TabsProps,
  TabsConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<TabsConstructors> = {
    event: {
      item: EventClickInclude,
      parameters: () => [
        undefined,
        undefined,
        this.emits
      ]
    },
    model: {
      item: ModelInclude<ListSelectedList | undefined>,
      parameters: () => [
        'selected',
        this.emits
      ]
    },
    motionAxis: {
      item: MotionAxisInclude,
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        undefined,
        undefined,
        this.emits,
        () => this.i('selected').getString()
      ]
    },
    selected: {
      item: TabsSelected,
      parameters: () => [
        this.props,
        () => this.i('model')
      ]
    },
    tabsNavigation: {
      item: TabsNavigationInclude,
      canCreate: () => TabsNavigationInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        () => ({
          'selected': this.i('selected').item.value,
          'onClick': this.onClick,
          'onUpdate:selected': this.onUpdateSelected
        })
      ]
    }
  }

  /**
   * Returns exposed API properties and methods.
   *
   * Возвращает экспортируемые свойства и методы API.
   * @returns exposed API object / объект экспортируемого API
   */
  get expose(): TabsExpose {
    return {
      getValue: () => this.i('event').expose.getValue?.(),
      getDetail: () => this.i('event').expose.getDetail?.()
    }
  }

  /**
   * Forwards tab navigation click events through EventClickInclude lazily.
   *
   * Лениво перенаправляет события клика навигации вкладок через EventClickInclude.
   * @param event native MouseEvent object / объект нативного события MouseEvent
   * @param options event click value details / детальная информация события клика
   */
  protected readonly onClick = (
    event: MouseEvent,
    options?: EventClickValue
  ): void => {
    this.i('event').onClick(event, options)
  }

  /**
   * Updates the selected tab value when triggered by TabsNavigation.
   *
   * Обновляет выбранное значение вкладки при изменении из TabsNavigation.
   * @param selected newly selected tab value / новое выбранное значение вкладки
   */
  protected readonly onUpdateSelected = (
    selected?: ListSelectedList
  ): void => {
    this.i('selected').set(selected)
  }
}

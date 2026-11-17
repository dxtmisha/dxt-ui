import { toRef } from 'vue'
import {
  type ConstrBind,
  type ConstrItems,
  DesignLogicAbstract,
  ListDataRef,
  type ListSelectedList
} from '@dxtmisha/functional'

import { EventClickInclude } from '../../classes/EventClickInclude'
import { ModelInclude } from '../../classes/ModelInclude'

import { BarsInclude } from '../Bars'
import type { ListProps } from '../List'
import { WindowInclude } from '../Window'

import { MenuGo } from './MenuGo'
import { MenuRequest } from './MenuRequest'
import { MenuValue } from './MenuValue'
import { MenuWindow } from './MenuWindow'

import type { EventClickValue } from '../../types/eventClickTypes'
import type { MenuControlBasic } from './basicTypes'
import type { MenuProps } from './props'
import type { MenuComponents, MenuEmits, MenuSlots } from './types'

/** Menu dependency constructors type / Тип конструкторов зависимостей Menu */
export type MenuConstructors = {
  /** Bars constructor / Конструктор панелей действий */
  bars: typeof BarsInclude
  /** List data constructor / Конструктор данных списка */
  data: typeof ListDataRef
  /** Click event constructor / Конструктор события клика */
  event: typeof EventClickInclude
  /** Navigation constructor / Конструктор навигации */
  go: typeof MenuGo
  /** Menu window manager constructor / Конструктор управления окном меню */
  menuWindow: typeof MenuWindow
  /** Model constructor / Конструктор модели */
  model: typeof ModelInclude<ListSelectedList | undefined>
  /** Request handler constructor / Конструктор обработчика запросов */
  request: typeof MenuRequest
  /** Value manager constructor / Конструктор менеджера значения */
  value: typeof MenuValue
  /** Window constructor / Конструктор окна */
  window: typeof WindowInclude
}

/**
 * Orchestrator class for the Menu component.
 * Coordinates list data requests, selection state, navigation, bars, and window management.
 *
 * Класс-оркестратор для компонента Menu.
 * Координирует запросы данных списка, состояние выбора, навигацию, панели действий и управление окном.
 */
export class Menu extends DesignLogicAbstract<
  HTMLDivElement,
  MenuComponents,
  MenuEmits,
  MenuSlots,
  MenuProps,
  MenuConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<MenuConstructors> = {
    bars: {
      item: BarsInclude,
      canCreate: () => BarsInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        undefined,
        undefined,
        this.emits
      ]
    },
    data: {
      item: ListDataRef,
      parameters: () => [
        this.i('request').item,
        undefined,
        undefined,
        undefined,
        undefined,
        this.i('value').selected,
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
    go: {
      item: MenuGo,
      parameters: () => [
        this.props,
        () => this.i('data'),
        () => this.i('value')
      ]
    },
    menuWindow: {
      item: MenuWindow,
      parameters: () => [
        this.props,
        () => this.i('request')
      ]
    },
    model: {
      item: ModelInclude<ListSelectedList | undefined>,
      parameters: () => [
        'selected',
        this.emits
      ]
    },
    request: {
      item: MenuRequest,
      parameters: () => [this.props]
    },
    value: {
      item: MenuValue,
      parameters: () => [
        this.props,
        () => this.i('model'),
        this.emits
      ]
    },
    window: {
      item: WindowInclude,
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        () => this.i('menuWindow').getExtra(),
        undefined,
        this.emits
      ]
    }
  }

  /**
   * Getting data for binding to the List component.
   *
   * Получение данных для привязки к компоненту List.
   * @returns list binding attributes / атрибуты привязки для списка
   */
  get binds(): ConstrBind<ListProps> {
    return {
      highlightLengthStart: this.props.highlightLengthStart,
      showSearch: this.props.showSearch,
      filterMode: this.props.filterMode,

      liteThreshold: this.props.liteThreshold,
      keyLabel: this.props.keyLabel,
      keyValue: this.props.keyValue,
      max: this.props.max,

      tag: this.props.tag,
      selectionStyle: this.props.selectionStyle,
      lazy: this.props.lazy,
      lazyMargin: this.props.lazyMargin,
      onClick: this.onClick,
      onClose: () => this.i('window').expose.toClose(),

      itemAttrs: this.props.itemAttrs,

      control: !this.props.embedded
    }
  }

  /**
   * Getting data for binding to controls.
   *
   * Получение данных для привязки к контролам.
   * @returns data for binding to controls / данные для привязки к контролам
   */
  get slotData(): MenuControlBasic {
    const data = this.i('data')
    const go = this.i('go')

    return {
      loading: this.i('request').progress,

      isSelected: data.isSelected,
      selectedList: data.selectedList,
      selectedNames: data.selectedNames,
      selectedValues: data.selectedValues,

      previous: go.previous,
      next: go.next
    }
  }

  /**
   * Click handler.
   *
   * Обработчик клика.
   * @param event event object / объект события
   * @param options data object / объект с данными
   */
  readonly onClick = (
    event: MouseEvent,
    options?: EventClickValue
  ): void => {
    if (
      options
      && 'value' in options
    ) {
      this.i('value').setValue(options.value)
    }

    this.i('event').onClick(event, options)
  }

  /**
   * Click on the slot handler.
   *
   * Обработчик клика по слоту.
   * @param event event object / объект события
   */
  readonly onClickSlot = (event: Event): void => {
    const element = event.target as HTMLElement | null
    const item = element?.closest?.<HTMLElement>('*[data-value]')

    if (
      item
      && !element?.closest?.(`.${this.naming.getSubClass('list')}`)
    ) {
      this.emits?.('clickSlot', item.dataset.value)
    }
  }
}

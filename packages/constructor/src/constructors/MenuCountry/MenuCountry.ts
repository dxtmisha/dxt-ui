import { toRef } from 'vue'
import {
  type ConstrBind,
  type ConstrItems,
  DesignLogicAbstract,
  GeoFlagRef,
  type ListSelectedList
} from '@dxtmisha/functional'

import { EventClickInclude } from '../../classes/EventClickInclude'
import { ModelInclude } from '../../classes/ModelInclude'

import { MenuInclude, type MenuProps } from '../Menu'
import { MenuCountryEvent } from './MenuCountryEvent'
import { MenuCountryList } from './MenuCountryList'

import type { MenuCountryProps } from './props'
import type { MenuCountryComponents, MenuCountryEmits, MenuCountrySlots } from './types'

/** MenuCountry dependency constructors type / Тип конструкторов зависимостей MenuCountry */
export type MenuCountryConstructors = {
  /** Click event constructor / Конструктор события клика */
  event: typeof EventClickInclude
  /** Menu country events handler constructor / Конструктор обработчиков событий выбора страны */
  events: typeof MenuCountryEvent
  /** Flag reference constructor / Конструктор ссылки на флаги */
  flag: typeof GeoFlagRef
  /** Menu country list builder constructor / Конструктор формирователя списка стран */
  list: typeof MenuCountryList
  /** Menu constructor / Конструктор меню */
  menu: typeof MenuInclude
  /** Model constructor / Конструктор модели */
  model: typeof ModelInclude<ListSelectedList | undefined>
}

/**
 * Class for managing the country selection menu.
 * It integrates menu functionality, event handling, and model state for selecting countries,
 * including automatic flag list generation based on country codes.
 *
 * Класс для управления меню выбора страны.
 * Интегрирует функциональность меню, обработку событий и состояние модели для выбора стран,
 * включая автоматическую генерацию списка флагов на основе кодов стран.
 */
export class MenuCountry extends DesignLogicAbstract<
  HTMLDivElement,
  MenuCountryComponents,
  MenuCountryEmits,
  MenuCountrySlots,
  MenuCountryProps,
  MenuCountryConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<MenuCountryConstructors> = {
    event: {
      item: EventClickInclude,
      parameters: () => [
        undefined,
        undefined,
        this.emits
      ]
    },
    events: {
      item: MenuCountryEvent,
      parameters: () => [
        () => this.i('event'),
        () => this.i('model'),
        this.emits
      ]
    },
    flag: {
      item: GeoFlagRef,
      parameters: () => [toRef(this.props, 'language')]
    },
    list: {
      item: MenuCountryList,
      parameters: () => [
        this.props,
        () => this.i('flag')
      ]
    },
    menu: {
      item: MenuInclude,
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        () => this.binds
      ]
    },
    model: {
      item: ModelInclude<ListSelectedList | undefined>,
      parameters: () => [
        'selected',
        this.emits
      ]
    }
  }

  /**
   * Returns binding attributes for the menu component.
   *
   * Возвращает привязочные атрибуты для компонента меню.
   * @returns menu component bindings / привязки компонента меню
   */
  get binds(): ConstrBind<MenuProps> {
    const selected = this.props.modelSelected ?? (this.props.selected !== false ? this.props.selected : undefined)

    return {
      list: this.i('list').items.value,
      ...(selected !== undefined ? { selected } : {}),
      ...(this.props.isSelectedByValue !== undefined ? { isSelectedByValue: this.props.isSelectedByValue } : {}),
      ...(this.props.highlightLengthStart !== undefined ? { highlightLengthStart: this.props.highlightLengthStart } : {}),
      ...(this.props.showSearch !== undefined ? { showSearch: this.props.showSearch } : {}),
      ...(this.props.filterMode !== undefined ? { filterMode: this.props.filterMode } : {}),
      ...this.i('events').binds
    }
  }
}

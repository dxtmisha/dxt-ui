import { computed, type ComputedRef, type Ref, toRef } from 'vue'
import {
  type ConstrBind,
  type ConstrEmit,
  type ConstrItems,
  type DesignComp,
  DesignLogicAbstract,
  type DesignName,
  forEach,
  type GeoFlagNational,
  GeoFlagRef,
  GeoPhone,
  type ListSelectedList,
  type ListType,
  type NumberOrStringOrBoolean
} from '@dxtmisha/functional'

import { EventClickInclude } from '../../classes/EventClickInclude'
import { ModelInclude } from '../../classes/ModelInclude'

import type { ListItemPropsBasic } from '../ListItem'
import { MenuInclude, type MenuProps } from '../Menu'
import type { WindowEmitOptions } from '../Window'

import type { EventClickValue } from '../../types/eventClickTypes'
import type { MenuCountryProps } from './props'
import type { MenuCountryComponents, MenuCountryEmits, MenuCountrySlots } from './types'

/** MenuCountry item type supporting group entries for alternative codes / Тип элемента MenuCountry с поддержкой групп для альтернативных кодов */
export type MenuCountryListItem = ConstrBind<
  ListItemPropsBasic
  & Partial<Omit<GeoFlagNational, 'value'>>
  & {
    /** Optional item type / Опциональный тип элемента */
    type?: ListType
    /** Optional item index / Опциональный индекс элемента */
    index?: string
    /** Optional search string / Опциональная строка поиска */
    search?: string
    /** Country code or nested alternative prefix items / Код страны или вложенные элементы альтернативных префиксов */
    value?: string | MenuCountryListItem[]
  }
>

/** MenuCountry dependency constructors type / Тип конструкторов зависимостей MenuCountry */
export type MenuCountryConstructors = {
  /** Click event constructor / Конструктор события клика */
  event: typeof EventClickInclude
  /** Flag reference constructor / Конструктор ссылки на флаги */
  flag: typeof GeoFlagRef
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
  /** List of flags / Список флагов */
  readonly flagList: ComputedRef<GeoFlagNational[]>

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
    flag: {
      item: GeoFlagRef,
      parameters: () => [toRef(this.props, 'language')]
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
   * Constructor
   * @param props input data / входные данные
   * @param element input element / элемент ввода
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits function called when an event is triggered / функция, вызываемая при возникновении события
   * @param constructors dependency constructor overrides / переопределения конструкторов зависимостей
   */
  constructor(
    props: Readonly<MenuCountryProps>,
    element: Ref<HTMLDivElement | undefined>,
    naming: DesignName,
    components?: DesignComp<MenuCountryComponents, MenuCountryProps>,
    slots?: MenuCountrySlots,
    emits?: ConstrEmit<MenuCountryEmits>,
    constructors?: Partial<MenuCountryConstructors>
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

    this.flagList = this.initFlagList()
  }

  /** List of flags / Список флагов */
  protected readonly list = computed<MenuCountryListItem[]>(() => {
    if (this.props.showPhoneCode) {
      return forEach(
        this.flagList.value,
        flag => this.getPhoneCodeItem(flag)
      ) as MenuCountryListItem[]
    }

    return this.flagList.value
  })

  /**
   * Builds a menu item or group for a country when phone codes are displayed.
   *
   * Формирует элемент меню или группу для страны при отображении телефонных кодов.
   * @param flag country flag item / элемент флага страны
   * @returns list item, group item with alternative subcodes, or undefined / элемент списка, группа с альтернативными подкодами или undefined
   */
  protected getPhoneCodeItem(
    flag: GeoFlagNational
  ): MenuCountryListItem | undefined {
    if (!flag.phoneCode) {
      return undefined
    }

    const codes = GeoPhone.getCodes(flag.value)

    if (codes.length > 1) {
      return {
        ...flag,
        type: 'group',
        index: flag.value,
        search: codes.map(code => `+${code}`).join(' '),
        value: codes.map((code, index) => ({
          index: index === 0 ? flag.value : `${flag.value}-${code}`,
          value: index === 0 ? flag.value : `${flag.value}-${code}`,
          label: `+${code}`,
          detail: {
            country: flag.value,
            icon: flag.icon,
            label: flag.label,
            phone: GeoPhone.cleanPhone(code)
          }
        }))
      }
    }

    return {
      ...flag,
      caption: `+${flag.phoneCode}`
    }
  }

  /**
   * Returns binding attributes for the menu component.
   *
   * Возвращает привязочные атрибуты для компонента меню.
   * @returns menu component bindings / привязки компонента меню
   */
  get binds(): ConstrBind<MenuProps> {
    return {
      'list': this.list.value,
      'selected': this.props.selected,
      'isSelectedByValue': this.props.isSelectedByValue,
      'onClick': this.onClick,
      'onWindow': this.onWindow,
      'onUpdate:selected': this.onUpdateSelected,
      'onUpdateValue': this.onUpdateValue
    }
  }

  /**
   * Click handler.
   *
   * Обработчик клика.
   * @param event mouse event object / объект события мыши
   * @param options optional event value options / необязательные параметры значения события
   */
  readonly onClick = (
    event: MouseEvent,
    options?: EventClickValue
  ): void => {
    this.i('event').onClick(event, options)
  }

  /**
   * Selected value update handler.
   *
   * Обработчик обновления выбранного значения.
   * @param value selected list value / выбранное значение списка
   */
  readonly onUpdateSelected = (value: ListSelectedList): void => {
    this.i('model').emit(value)
  }

  /**
   * Value update handler.
   *
   * Обработчик обновления значения.
   * @param value updated item value / обновлённое значение элемента
   */
  readonly onUpdateValue = (value?: NumberOrStringOrBoolean): void => {
    this.emits?.('updateValue', value)
  }

  /**
   * Window state change handler.
   *
   * Обработчик изменения состояния окна.
   * @param options window emit options / параметры события окна
   */
  readonly onWindow = (options: WindowEmitOptions): void => {
    this.emits?.('window', options)
  }

  /**
   * Initializes the flag list.
   *
   * Инициализирует список флагов.
   * @returns reactive list of national flag items / реактивный список элементов национальных флагов
   */
  protected initFlagList(): ComputedRef<GeoFlagNational[]> {
    return this.i('flag').getNational(toRef(this.props, 'list'))
  }
}

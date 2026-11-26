import {
  computed,
  mergeProps,
  nextTick,
  toRef
} from 'vue'
import {
  type ConstrBind,
  type ConstrItems,
  DesignLogicAbstract,
  ListDataRef,
  type ListDataItem,
  type ListList,
  ServerStorage
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { EnabledInclude } from '../../classes/EnabledInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'

import { ListControl, ListFocus, ListGo, type ListProps } from '../List'

import type { AriaList } from '../../types/ariaTypes'
import type { NavigationRailProps } from './props'
import type { NavigationRailComponents, NavigationRailEmits, NavigationRailSlots } from './types'

/** NavigationRail dependency constructors type / Тип конструкторов зависимостей NavigationRail */
export type NavigationRailConstructors = {
  /** Control constructor / Конструктор управления */
  control: typeof ListControl
  /** List data constructor / Конструктор данных списка */
  data: typeof ListDataRef
  /** Enabled state constructor / Конструктор состояния активности */
  enabled: typeof EnabledInclude
  /** Event click constructor / Конструктор события клика */
  event: typeof EventClickInclude
  /** Focus constructor / Конструктор фокусировки */
  focus: typeof ListFocus
  /** Navigation constructor / Конструктор навигации */
  go: typeof ListGo
}

/**
 * NavigationRail class constructor managing side navigation rail states, item rendering bindings, focus, and selection data.
 *
 * Класс-конструктор NavigationRail, управляющий состояниями боковой панели навигации, привязками рендеринга элементов, фокусом и данными выбора.
 */
export class NavigationRail extends DesignLogicAbstract<
  HTMLElement,
  NavigationRailComponents,
  NavigationRailEmits,
  NavigationRailSlots,
  NavigationRailProps,
  NavigationRailConstructors
> {
  /** Unique list identifier isolated per SSR request / Уникальный идентификатор списка с изоляцией SSR-запросов */
  protected readonly id: number = ++ServerStorage.get<{ id: number }>('__ui:navigation-rail-id__', () => ({ id: 1 })).id

  /** Whether the component has been unmounted / Был ли компонент размонтирован */
  protected isDestroyed = false

  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<NavigationRailConstructors> = {
    control: {
      item: ListControl,
      conditions: () => Boolean(this.props.control && !this.props.disabled),
      canCreate: () => Boolean(this.props.control && !this.props.disabled),
      parameters: () => [
        this.props as ListProps,
        this.element,
        () => this.i('data'),
        () => this.i('go')
      ]
    },
    data: {
      item: ListDataRef,
      parameters: () => [
        toRef(this.props, 'list'),
        this.i('focus').focus,
        undefined,
        undefined,
        undefined,
        toRef(this.props, 'selected'),
        toRef(this.props, 'keyValue'),
        toRef(this.props, 'keyLabel')
      ]
    },
    enabled: {
      item: EnabledInclude,
      parameters: () => [this.props]
    },
    event: {
      item: EventClickInclude,
      parameters: () => [
        undefined,
        () => this.i('enabled'),
        this.emits
      ]
    },
    focus: {
      item: ListFocus,
      parameters: () => [
        this.props as ListProps,
        this.element,
        this.id
      ]
    },
    go: {
      item: ListGo,
      parameters: () => [
        this.props as ListProps,
        this.element,
        () => this.i('data'),
        () => this.i('focus'),
        this.emits
      ]
    }
  }

  /**
   * Computed ARIA attributes for the navigation rail container.
   *
   * Вычисляемые ARIA-атрибуты контейнера боковой панели навигации.
   * @returns ARIA attributes map / карта ARIA-атрибутов
   */
  get aria(): AriaList {
    return {
      ...AriaStaticInclude.role(this.props.role),
      ...(this.props.ariaMultiselectable !== undefined
        ? AriaStaticInclude.multiselectable(this.props.ariaMultiselectable)
        : {}),
      ...AriaStaticInclude.disabled(Boolean(this.props.disabled))
    }
  }

  /**
   * Computed root element attributes and focus event bindings.
   *
   * Вычисляемые атрибуты корневого элемента и обработчики фокуса.
   * @returns root element bindings / привязки корневого элемента
   */
  get binds(): ConstrBind<NavigationRailProps> {
    return {
      ...this.aria,
      tabindex: this.props.disabled || this.props.control ? undefined : this.props.tabindex,
      onFocus: () => this.callInstance('control', item => item.onFocus()),
      onBlur: () => this.callInstance('control', item => item.onBlur())
    }
  }

  /**
   * Computed list data.
   *
   * Вычисляемые данные списка.
   * @returns list data / данные списка
   */
  get list(): ListList {
    return this.i('data').fullData.value
  }

  /** Computed binding properties for list items / Вычисляемые привязочные свойства для элементов списка */
  protected readonly itemBinds = computed<ConstrBind<ListDataItem>>(() => {
    return mergeProps(
      {
        tag: this.props.tag,
        divider: this.props.divider,
        onClick: this.i('event').onClick
      },
      this.props.itemAttrs ?? {},
      {
        listId: this.id
      }
    ) as ConstrBind<ListDataItem>
  })

  /** Mount lifecycle hook preparing selected item / Хук монтирования для подготовки выбранного элемента */
  protected override readonly onMounted = async (): Promise<void> => {
    if (this.props.control && !this.props.disabled) {
      await nextTick()

      if (!this.isDestroyed) {
        this.i('go').preparationBySelected()
      }
    }
  }

  /** Cleanup lifecycle resources on unmount / Очистка ресурсов жизненного цикла при размонтировании */
  protected override readonly onUnmounted = (): void => {
    this.isDestroyed = true
  }

  /**
   * Returns information about the opening status of a group item.
   *
   * Возвращает информацию о статусе открытия группового элемента.
   * @param item list item data / данные элемента списка
   * @returns boolean flag indicating group open state / флаг открытого состояния группы
   */
  isOpenGroup(
    item: ConstrBind<ListDataItem>
  ): boolean {
    const data = this.i('data').getSubList(item)

    return data.isSelected.value
      || data.isFocus()
  }

  /**
   * Gets binding properties for a list item.
   *
   * Получает привязочные свойства для элемента списка.
   * @param item list item data / данные элемента списка
   * @returns binding properties object / объект свойств привязки
   */
  getItem(
    item: ConstrBind<ListDataItem>
  ): ConstrBind<ListDataItem> {
    const itemOverrides: Partial<ConstrBind<ListDataItem>> = {
      'key': item.value,
      'data-item': true
    }

    if (this.props.roleItem !== undefined) {
      itemOverrides.role = this.props.roleItem
    }

    if (this.props.disabled) {
      itemOverrides.disabled = true
    }

    return mergeProps(
      this.itemBinds.value,
      item,
      itemOverrides
    ) as ConstrBind<ListDataItem>
  }

  /**
   * Gets binding properties for a menu item in the list.
   *
   * Получает привязочные свойства для элемента меню в списке.
   * @param item list item data / данные элемента списка
   * @returns binding properties object / объект свойств привязки
   */
  getItemMenu(
    item: ConstrBind<ListDataItem>
  ): ConstrBind<ListDataItem> {
    const menuOverrides: Partial<ConstrBind<ListDataItem>> = {
      key: item.value,
      class: this.naming.getSubClass('menu')
    }

    return mergeProps(
      this.itemBinds.value,
      this.props.itemMenuAttrs ?? {},
      item,
      this.withDisabled(menuOverrides)
    ) as ConstrBind<ListDataItem>
  }

  /**
   * Gets binding properties for a menu management item with optional right arrow inside nested menus.
   *
   * Получает привязочные свойства для элемента управления меню со стрелкой вправо внутри вложенных меню.
   * @param item list item data / данные элемента списка
   * @param open whether the menu is open / открыто ли меню
   * @param inMenu whether the menu is nested inside another menu / находится ли меню внутри другого меню
   * @returns binding properties object for management item / объект свойств привязки элемента управления
   */
  getItemManagementFormMenu(
    item: ConstrBind<ListDataItem>,
    open: boolean,
    inMenu: boolean = false
  ): ConstrBind<ListDataItem> {
    return this.getItemManagement(
      item,
      open,
      inMenu ? this.props.iconArrowRight : undefined
    )
  }

  /**
   * Returns a sublist for a group item.
   *
   * Возвращает подсписок для группового элемента.
   * @param item list item data / данные элемента списка
   * @returns sublist items / элементы подсписка
   */
  getList(
    item: ConstrBind<ListDataItem>
  ): ListList {
    return this.i('data').getSubList(item).fullData.value
  }

  /**
   * Internal method to create management item binding properties.
   *
   * Внутренний метод для создания привязочных свойств элемента управления.
   * @param item list item data / данные элемента списка
   * @param open whether the item is open / открыт ли элемент
   * @param iconTrailing optional trailing icon / необязательная завершающая иконка
   * @returns binding properties for management item / привязочные свойства элемента управления
   */
  protected getItemManagement(
    item: ConstrBind<ListDataItem>,
    open: boolean,
    iconTrailing?: NavigationRailProps['iconArrowRight']
  ): ConstrBind<ListDataItem> {
    const managementOverrides: Partial<ConstrBind<ListDataItem>> = {
      'class': this.naming.getSubClass('management'),
      'focus': item?.index === this.i('focus').focus.value,
      'selectedChild': this.isOpenGroup(item),
      open,
      'data-status': open ? 'open' : 'close',
      'selectionStyle': 'none'
    }

    if (iconTrailing !== undefined) {
      managementOverrides.iconTrailing = iconTrailing
    }

    return mergeProps(
      this.itemBinds.value,
      this.props.itemManagementAttrs ?? {},
      item,
      this.withDisabled(managementOverrides)
    ) as ConstrBind<ListDataItem>
  }

  /**
   * Attaches disabled state when rail is disabled.
   *
   * Добавляет состояние отключения при отключенной панели навигации.
   * @param target target binding overrides / целевой объект переопределений привязки
   * @returns updated bindings object / обновленный объект привязок
   */
  protected withDisabled(
    target: Partial<ConstrBind<ListDataItem>>
  ): Partial<ConstrBind<ListDataItem>> {
    if (this.props.disabled) {
      target.disabled = true
    }

    return target
  }
}

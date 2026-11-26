import { mergeProps, type Ref } from 'vue'
import type {
  ConstrBind,
  ConstrEmit,
  DesignComp,
  DesignName,
  ListDataItem
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { List, type ListConstructors } from '../List'

import type { AriaList } from '../../types/ariaTypes'
import type { NavigationListProps } from './props'
import type { NavigationListComponents, NavigationListEmits, NavigationListSlots } from './types'

/**
 * NavigationList class constructor managing its child elements, attributes, classes, and accessibility.
 * Inherits all functionality from List.
 *
 * Класс-конструктор NavigationList, управляющий его дочерними элементами, атрибутами, классами и доступностью.
 * Наследует всю функциональность List.
 */
export class NavigationList extends List {
  /**
   * Constructor
   *
   * Конструктор
   * @param props input data / входные данные
   * @param element input element / элемент ввода
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors dependency constructor overrides / переопределения конструкторов зависимостей
   */
  constructor(
    props: Readonly<NavigationListProps>,
    element: Ref<HTMLElement | undefined>,
    naming: DesignName,
    components?: DesignComp<NavigationListComponents, NavigationListProps>,
    slots?: NavigationListSlots,
    emits?: ConstrEmit<NavigationListEmits>,
    constructors?: Partial<ListConstructors>
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
  }

  /**
   * Computed ARIA attributes for the navigation list container.
   *
   * Вычисляемые ARIA-атрибуты контейнера списка навигации.
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
  get binds(): ConstrBind<NavigationListProps> {
    return {
      ...this.aria,
      tabindex: this.props.disabled || this.props.control ? undefined : this.props.tabindex,
      onFocus: () => {
        if (this.props.control && !this.props.disabled) {
          this.i('control').onFocus()
        }
      },
      onBlur: () => {
        if (this.props.control && !this.props.disabled) {
          this.i('control').onBlur()
        }
      }
    }
  }

  /**
   * Gets binding properties for a list item, propagating list disabled state.
   *
   * Получает привязочные свойства для элемента списка с учетом отключения всего списка.
   * @param item list item data / данные элемента списка
   * @returns binding properties / привязочные свойства
   */
  override getItem(
    item: ConstrBind<ListDataItem>
  ): ConstrBind<ListDataItem> {
    return this.withDisabled(super.getItem(item))
  }

  /**
   * Gets binding properties for a group item, propagating list disabled state.
   *
   * Получает привязочные свойства для группового элемента с учетом отключения всего списка.
   * @param item list item data / данные элемента списка
   * @returns binding properties / привязочные свойства
   */
  override getItemGroup(
    item: ConstrBind<ListDataItem>
  ): ConstrBind<ListDataItem> {
    return this.withDisabled(super.getItemGroup(item))
  }

  /**
   * Gets binding properties for a menu item, propagating list disabled state.
   *
   * Получает привязочные свойства для элемента меню с учетом отключения всего списка.
   * @param item list item data / данные элемента списка
   * @returns binding properties / привязочные свойства
   */
  override getItemMenu(
    item: ConstrBind<ListDataItem>
  ): ConstrBind<ListDataItem> {
    return this.withDisabled(super.getItemMenu(item))
  }

  /**
   * Adds list-level disabled flag to item bindings when list is disabled.
   *
   * Добавляет флаг отключения уровня списка к привязкам элемента при отключенном списке.
   * @param binds resolved item bindings / сформированные привязки элемента
   * @returns merged bindings / объединенные привязки
   */
  protected withDisabled(
    binds: ConstrBind<ListDataItem>
  ): ConstrBind<ListDataItem> {
    if (this.props.disabled) {
      return mergeProps(binds, { disabled: true }) as ConstrBind<ListDataItem>
    }

    return binds
  }
}

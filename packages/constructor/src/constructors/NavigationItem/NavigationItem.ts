import type { Ref } from 'vue'
import type { ConstrEmit, DesignComp, DesignName } from '@dxtmisha/functional'

import { ListItem, type ListItemConstructors } from '../ListItem'

import type { NavigationItemProps } from './props'
import type { NavigationItemComponents, NavigationItemEmits, NavigationItemSlots } from './types'

/**
 * NavigationItem class constructor managing its child elements, attributes, classes, and accessibility.
 * Inherits all functionality from ListItem.
 *
 * Класс-конструктор NavigationItem, управляющий его дочерними элементами, атрибутами, классами и доступностью.
 * Наследует всю функциональность ListItem.
 */
export class NavigationItem extends ListItem {
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
    props: Readonly<NavigationItemProps>,
    element: Ref<HTMLElement | undefined>,
    naming: DesignName,
    components?: DesignComp<NavigationItemComponents, NavigationItemProps>,
    slots?: NavigationItemSlots,
    emits?: ConstrEmit<NavigationItemEmits>,
    constructors?: Partial<ListItemConstructors>
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
}

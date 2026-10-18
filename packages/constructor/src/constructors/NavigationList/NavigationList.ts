import type { Ref } from 'vue'
import { type ConstrEmit, type DesignComp, type DesignName } from '@dxtmisha/functional'

import { List } from '../List'

import type { NavigationListComponents, NavigationListEmits, NavigationListSlots } from './types'
import type { NavigationListPropsBasic } from './props'

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
   * @param props input data / входные данные
   * @param element input element / элемент ввода
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors object with classes / объект с классами
   */
  constructor(
    protected override readonly props: NavigationListPropsBasic,
    protected override readonly element: Ref<HTMLElement | undefined>,
    protected override readonly naming: DesignName,
    protected override readonly components?: DesignComp<NavigationListComponents, NavigationListPropsBasic>,
    protected override readonly slots?: NavigationListSlots,
    protected override readonly emits?: ConstrEmit<NavigationListEmits>,
    constructors: Record<string, any> = {}
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

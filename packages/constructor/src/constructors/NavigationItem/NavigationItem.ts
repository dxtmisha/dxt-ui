import type { Ref, ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { ListItem } from '../ListItem'

import type { NavigationItemComponents, NavigationItemEmits, NavigationItemSlots } from './types'
import type { NavigationItemPropsBasic } from './props'

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
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param element input element / элемент ввода
   * @param classDesign design name / название дизайна
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors object with classes / объект с классами
   */
  constructor(
    protected override readonly props: NavigationItemPropsBasic,
    protected override readonly refs: ToRefs<NavigationItemPropsBasic>,
    protected override readonly element: Ref<HTMLElement | undefined>,
    protected override readonly classDesign: string,
    protected override readonly className: string,
    protected override readonly components?: DesignComp<NavigationItemComponents, NavigationItemPropsBasic>,
    protected override readonly slots?: NavigationItemSlots,
    protected override readonly emits?: ConstrEmit<NavigationItemEmits>,
    constructors: Record<string, any> = {}
  ) {
    super(
      props as any,
      refs as any,
      element,
      classDesign,
      className,
      components as any,
      slots as any,
      emits as any,
      constructors
    )
  }
}

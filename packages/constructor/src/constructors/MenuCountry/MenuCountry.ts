import { computed, type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp, GeoFlagRef } from '@dxtmisha/functional'

import { MenuInclude } from '../Menu'

import type { MenuCountryComponents, MenuCountryEmits, MenuCountrySlots } from './types'
import type { MenuCountryProps } from './props'

/**
 * MenuCountry
 */
export class MenuCountry {
  readonly menu: MenuInclude

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element input element/ элемент ввода
   * @param classDesign design name/ название дизайна
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param constructors object with classes/ объект с классами
   * @param constructors.MenuIncludeConstructor class for working with menu/ класс для работы с меню
   */
  constructor(
    protected readonly props: MenuCountryProps,
    protected readonly refs: ToRefs<MenuCountryProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<MenuCountryComponents, MenuCountryProps>,
    protected readonly slots?: MenuCountrySlots,
    protected readonly emits?: ConstrEmit<MenuCountryEmits>,
    constructors?: {
      MenuIncludeConstructor?: typeof MenuInclude
    }
  ) {
    const {
      MenuIncludeConstructor = MenuInclude
    } = constructors ?? {}

    const flag = new GeoFlagRef()

    this.menu = new MenuIncludeConstructor(
      this.props,
      this.className,
      this.components,
      computed(() => ({
        list: flag.getList(this.props.countryList).value
      }))
    )
  }
}

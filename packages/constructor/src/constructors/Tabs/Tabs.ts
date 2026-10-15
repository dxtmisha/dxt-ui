import { type Ref } from 'vue'
import { type ConstrEmit, type DesignComp, type DesignName } from '@dxtmisha/functional'

import { EventClickInclude } from '../../classes/EventClickInclude'
import { ModelInclude } from '../../classes/ModelInclude'

import { MotionAxisInclude } from '../MotionAxis'
import { TabsNavigationInclude } from '../TabsNavigation'

import { TabsSelected } from './TabsSelected'

import type { TabsComponents, TabsEmits, TabsSlots } from './types'
import type { TabsProps } from './props'

/**
 * Tabs
 */
export class Tabs {
  readonly event: EventClickInclude
  readonly motionAxis: MotionAxisInclude
  readonly tabsNavigation: TabsNavigationInclude
  readonly selected: TabsSelected

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param element input element/ элемент ввода
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param constructors object with classes/ объект с классами
   * @param constructors.EventClickIncludeConstructor class for working with event click/ класс для работы с событием клика
   * @param constructors.ModelIncludeConstructor class for working with model/ класс для работы с моделью
   * @param constructors.MotionAxisIncludeConstructor class for working with motion axis/ класс для работы с осью движения
   * @param constructors.TabsNavigationIncludeConstructor class for working with tabs navigation/ класс для работы с навигацией вкладок
   * @param constructors.TabsSelectedConstructor class for working with selected/ класс для работы с выбранным
   */
  constructor(
    protected readonly props: TabsProps,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly naming: DesignName,
    protected readonly components?: DesignComp<TabsComponents, TabsProps>,
    protected readonly slots?: TabsSlots,
    protected readonly emits?: ConstrEmit<TabsEmits>,
    constructors: {
      EventClickIncludeConstructor?: typeof EventClickInclude
      ModelIncludeConstructor?: typeof ModelInclude
      MotionAxisIncludeConstructor?: typeof MotionAxisInclude
      TabsNavigationIncludeConstructor?: typeof TabsNavigationInclude
      TabsSelectedConstructor?: typeof TabsSelected
    } = {}
  ) {
    const {
      EventClickIncludeConstructor = EventClickInclude,
      ModelIncludeConstructor = ModelInclude,
      MotionAxisIncludeConstructor = MotionAxisInclude,
      TabsNavigationIncludeConstructor = TabsNavigationInclude,
      TabsSelectedConstructor = TabsSelected
    } = constructors

    this.selected = new TabsSelectedConstructor(props)
    this.event = new EventClickIncludeConstructor(undefined, undefined, emits)
    new ModelIncludeConstructor('selected', emits, this.selected.item)

    this.tabsNavigation = new TabsNavigationIncludeConstructor(
      this.naming.getName(),
      this.props,
      this.components,
      () => ({
        'selected': this.selected.item.value,
        'onClick': this.event.onClick,
        'onUpdate:selected': this.selected.set
      })
    )

    this.motionAxis = new MotionAxisIncludeConstructor(
      this.naming.getName(),
      this.props,
      this.components,
      undefined,
      undefined,
      emits,
      () => String(this.selected.item.value)
    )
  }
}

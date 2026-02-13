import { toRef, type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp, ListDataRef, type ListSelectedList } from '@dxtmisha/functional'

import { HorizontalScrollInclude } from '../HorizontalScroll/HorizontalScrollInclude'
import { ModelInclude } from '../../classes/ModelInclude'

import { TabsNavigationSelected } from './TabsNavigationSelected'
import { TabsNavigationIndicator } from './TabsNavigationIndicator'

import type { TabsNavigationComponents, TabsNavigationEmits, TabsNavigationSlots } from './types'
import type { TabsNavigationProps } from './props'

/**
 * TabsNavigation
 */
export class TabsNavigation {
  readonly data: ListDataRef
  readonly selected: TabsNavigationSelected
  readonly indicator: TabsNavigationIndicator
  readonly scroll: HorizontalScrollInclude
  readonly model: ModelInclude<ListSelectedList | undefined>

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
   * @param constructors.ModelIncludeConstructor class for working with model/ класс для работы с моделью
   * @param constructors.HorizontalScrollIncludeConstructor class for working with horizontal scroll/ класс для работы с горизонтальной прокруткой
   * @param constructors.ListDataRefConstructor class for working with data list/ класс для работы со списком данных
   * @param constructors.TabsNavigationIndicatorConstructor class for working with indicator/ класс для работы с индикатором
   * @param constructors.TabsNavigationSelectedConstructor class for working with selected/ класс для работы с выбранным
   */
  constructor(
    protected readonly props: TabsNavigationProps,
    protected readonly refs: ToRefs<TabsNavigationProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<TabsNavigationComponents, TabsNavigationProps>,
    protected readonly slots?: TabsNavigationSlots,
    protected readonly emits?: ConstrEmit<TabsNavigationEmits>,
    constructors?: {
      HorizontalScrollIncludeConstructor?: typeof HorizontalScrollInclude
      ListDataRefConstructor?: typeof ListDataRef
      ModelIncludeConstructor?: typeof ModelInclude<ListSelectedList | undefined>
      TabsNavigationIndicatorConstructor?: typeof TabsNavigationIndicator
      TabsNavigationSelectedConstructor?: typeof TabsNavigationSelected
    }
  ) {
    const {
      HorizontalScrollIncludeConstructor = HorizontalScrollInclude,
      ListDataRefConstructor = ListDataRef,
      ModelIncludeConstructor = ModelInclude,
      TabsNavigationIndicatorConstructor = TabsNavigationIndicator,
      TabsNavigationSelectedConstructor = TabsNavigationSelected
    } = constructors ?? {}

    this.selected = new TabsNavigationSelectedConstructor(this.props)
    this.indicator = new TabsNavigationIndicatorConstructor(
      this.props,
      this.refs,
      this.element,
      this.className,
      this.selected
    )

    this.data = new ListDataRefConstructor(
      toRef(this.props, 'list'),
      undefined,
      undefined,
      undefined,
      undefined,
      this.selected.item,
      this.refs.keyValue,
      this.refs.keyLabel
    )

    this.scroll = new HorizontalScrollIncludeConstructor(
      this.props,
      this.className,
      this.components
    )

    this.model = new ModelIncludeConstructor(
      'selected',
      this.emits,
      this.selected.item
    )
  }
}

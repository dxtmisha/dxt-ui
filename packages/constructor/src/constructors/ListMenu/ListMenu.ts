import { type Ref } from 'vue'
import { type ConstrEmit, type DesignComp, type DesignName } from '@dxtmisha/functional'

import { ListGroupOpen } from '../ListGroup'
import { WindowInclude, type WindowProps } from '../Window'

import type { ListMenuComponents, ListMenuEmits, ListMenuSlots } from './types'
import type { ListMenuProps } from './props'

/**
 * ListMenu
 */
export class ListMenu {
  readonly open: ListGroupOpen<ListMenuProps>
  readonly window: WindowInclude

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param element input element/ элемент ввода
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param constructors object with classes/ объект с классами
   * @param constructors.ListGroupOpenConstructor class for working with list group open/ класс для работы с открытием группы списка
   * @param constructors.WindowIncludeConstructor class for working with window/ класс для работы с окном
   */
  constructor(
    protected readonly props: ListMenuProps,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly naming: DesignName,
    protected readonly components?: DesignComp<ListMenuComponents, ListMenuProps>,
    protected readonly slots?: ListMenuSlots,
    protected readonly emits?: ConstrEmit<ListMenuEmits>,
    constructors: {
      ListGroupOpenConstructor?: typeof ListGroupOpen
      WindowIncludeConstructor?: typeof WindowInclude
    } = {}
  ) {
    const {
      ListGroupOpenConstructor = ListGroupOpen,
      WindowIncludeConstructor = WindowInclude
    } = constructors

    this.open = new ListGroupOpenConstructor(this.props)

    this.window = new WindowIncludeConstructor(
      this.naming.getName(),
      this.props,
      this.components,
      () => ({
        adaptive: 'menu',
        axis: props.axis,
        role: 'menu',
        ariaHaspopup: 'menu',
        onWindow: this.open.onOpen
      } as WindowProps),
      undefined,
      this.emits
    )
  }
}

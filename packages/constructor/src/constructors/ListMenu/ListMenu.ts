import { computed, type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, DesignComp } from '@dxt-ui/functional'

import { WindowInclude } from '../Window'
import { ListGroupOpen } from '../ListGroup/ListGroupOpen'

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
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element input element/ элемент ввода
   * @param classDesign design name/ название дизайна
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly props: ListMenuProps,
    protected readonly refs: ToRefs<ListMenuProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<ListMenuComponents, ListMenuProps>,
    protected readonly slots?: ListMenuSlots,
    protected readonly emits?: ConstrEmit<ListMenuEmits>
  ) {
    this.open = new ListGroupOpen(this.props)

    this.window = new WindowInclude(
      this.props,
      this.className,
      this.components,
      this.emits,
      computed(() => ({
        adaptive: 'menu',
        axis: this.props.axis,
        onWindow: this.open.onOpen
      }))
    )
  }
}

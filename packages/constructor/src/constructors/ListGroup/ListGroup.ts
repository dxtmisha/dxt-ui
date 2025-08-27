import { type Ref, type ToRefs } from 'vue'
import { type ConstrBind, type ConstrEmit, DesignComp } from '@dxt-ui/functional'

import { ListGroupOpen } from './ListGroupOpen'

import type { MotionTransformProps } from '../MotionTransform'
import type { ListGroupComponents, ListGroupEmits, ListGroupSlots } from './types'
import type { ListGroupPropsBasic } from './props'

/**
 * ListGroup
 */
export class ListGroup {
  readonly open: ListGroupOpen

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
    protected readonly props: ListGroupPropsBasic,
    protected readonly refs: ToRefs<ListGroupPropsBasic>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<ListGroupComponents, ListGroupPropsBasic>,
    protected readonly slots?: ListGroupSlots,
    protected readonly emits?: ConstrEmit<ListGroupEmits>
  ) {
    this.open = new ListGroupOpen(this.props)
  }

  /**
   * Returns the property for the transformation component.
   *
   * Возвращает свойство для компонента трансформации.
   */
  readonly transformBinds = (): ConstrBind<MotionTransformProps> => {
    return {
      autoClose: false,
      section: true,
      adaptive: 'planeAlways',
      onTransformLite: this.open.onOpen
    }
  }
}

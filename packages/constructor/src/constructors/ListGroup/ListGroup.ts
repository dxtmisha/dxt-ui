import { type Ref, type ToRefs } from 'vue'
import { type ConstrBind, type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { ListGroupOpen } from './ListGroupOpen'

import type { MotionTransformProps } from '../MotionTransform'
import type { ListGroupComponents, ListGroupEmits, ListGroupSlots } from './types'
import type { ListGroupProps } from './props'

/**
 * ListGroup
 */
export class ListGroup {
  readonly open: ListGroupOpen<ListGroupProps>

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
   * @param ListGroupOpenConstructor class for working with list group open/ класс для работы с открытием группы списка
   */
  constructor(
    protected readonly props: ListGroupProps,
    protected readonly refs: ToRefs<ListGroupProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<ListGroupComponents, ListGroupProps>,
    protected readonly slots?: ListGroupSlots,
    protected readonly emits?: ConstrEmit<ListGroupEmits>,
    ListGroupOpenConstructor: typeof ListGroupOpen = ListGroupOpen
  ) {
    this.open = new ListGroupOpenConstructor(this.props)
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

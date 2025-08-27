import { toRef, type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, DesignComp, ListData } from '@dxt-ui/functional'

import { EventClickInclude } from '../../classes/EventClickInclude'

import { WindowClassesInclude } from '../Window'

import type { ListComponents, ListEmits, ListSlots } from './types'
import type { ListPropsBasic } from './props'

/**
 * List
 */
export class List {
  readonly data: ListData
  readonly event: EventClickInclude

  readonly windowClasses: WindowClassesInclude

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
    protected readonly props: ListPropsBasic,
    protected readonly refs: ToRefs<ListPropsBasic>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<ListComponents, ListPropsBasic>,
    protected readonly slots?: ListSlots,
    protected readonly emits?: ConstrEmit<ListEmits>
  ) {
    this.data = new ListData(
      toRef(this.props, 'list'),
      this.refs.focus,
      this.refs.highlight,
      this.refs.highlightLengthStart,
      this.refs.selected,
      this.refs.keyValue,
      this.refs.keyLabel,
      this.refs.lite
    )

    this.event = new EventClickInclude(undefined, undefined, emits)
    this.windowClasses = new WindowClassesInclude(classDesign)
  }
}

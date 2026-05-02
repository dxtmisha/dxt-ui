import type { Ref, ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { ClientOnlyInclude } from '../../classes/ClientOnlyInclude'

import type { ClientOnlyComponents, ClientOnlyEmits, ClientOnlySlots } from './types'
import type { ClientOnlyProps } from './props'

/**
 * ClientOnly
 */
export class ClientOnly {
  readonly clientOnly: ClientOnlyInclude

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
    protected readonly props: ClientOnlyProps,
    protected readonly refs: ToRefs<ClientOnlyProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<ClientOnlyComponents, ClientOnlyProps>,
    protected readonly slots?: ClientOnlySlots,
    protected readonly emits?: ConstrEmit<ClientOnlyEmits>
  ) {
    this.clientOnly = new ClientOnlyInclude(props)
  }
}

import { computed, type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { EventClickInclude } from '../../classes/EventClickInclude'

import type { ActionsComponents, ActionsEmits, ActionsSlots } from './types'
import type { ActionsProps } from './props'

/**
 * Actions
 */
export class Actions {
  readonly event: EventClickInclude

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
    protected readonly props: ActionsProps,
    protected readonly refs: ToRefs<ActionsProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<ActionsComponents, ActionsProps>,
    protected readonly slots?: ActionsSlots,
    protected readonly emits?: ConstrEmit<ActionsEmits>
  ) {
    this.event = new EventClickInclude(
      undefined,
      undefined,
      emits
    )
  }

  /**
   * Checks if the main list needs to be displayed/
   * Проверяет, нужно ли выводить главный список
   */
  readonly isList = computed<boolean>(() => Boolean(
    this.props.list
    || (this.slots && 'default' in this.slots)
  ))

  /**
   * Checks if the secondary list needs to be displayed/
   * Проверяет, нужно ли выводить второстепенный список
   */
  readonly isSecondary = computed<boolean>(() => Boolean(
    this.props.listSecondary
    || (this.slots && 'secondary' in this.slots)
  ))
}

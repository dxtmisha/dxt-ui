import { computed, type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { AreaInclude } from '../../classes/AreaInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'

import type { ActionsComponents, ActionsEmits, ActionsSlots } from './types'
import type { ActionsProps } from './props'

/**
 * Actions
 */
export class Actions {
  readonly area: AreaInclude
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
   * @param constructors object with classes/ объект с классами
   * @param constructors.EventConstructor class for creating an event/ класс для создания события
   * @param constructors.AreaIncludeConstructor class for working with area value/ класс для работы со значением области
   */
  constructor(
    protected readonly props: ActionsProps,
    protected readonly refs: ToRefs<ActionsProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<ActionsComponents, ActionsProps>,
    protected readonly slots?: ActionsSlots,
    protected readonly emits?: ConstrEmit<ActionsEmits>,
    constructors?: {
      AreaIncludeConstructor?: typeof AreaInclude
      EventConstructor?: typeof EventClickInclude
    }
  ) {
    const {
      AreaIncludeConstructor = AreaInclude,
      EventConstructor = EventClickInclude
    } = constructors ?? {}

    this.area = new AreaIncludeConstructor(props)
    this.event = new EventConstructor(
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

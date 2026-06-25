import type { Ref, ToRefs } from 'vue'
import { type ConstrClass, type ConstrEmit, type DesignComp } from '@dxtmisha/functional'
import { getClassTagAStatic } from '../../functions/getClassTagAStatic'

import { EventClickInclude } from '../../classes/EventClickInclude'
import { LabelInclude } from '../../classes/LabelInclude'

import type { AlertLinkComponents, AlertLinkEmits, AlertLinkSlots } from './types'
import type { AlertLinkProps } from './props'

/**
 * AlertLink class for managing the business logic of a link in the Alert component.
 *
 * Класс AlertLink для управления бизнес-логикой ссылки в компоненте Alert.
 */
export class AlertLink {
  /** Click event control instance / Экземпляр управления событием клика */
  readonly event: EventClickInclude

  /** Label control instance / Экземпляр управления меткой */
  readonly label: LabelInclude

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
   * @param constructors.EventClickIncludeConstructor class for working with events/ класс для работы с событиями
   * @param constructors.LabelIncludeConstructor class for working with label/ класс для работы с меткой
   */
  constructor(
    protected readonly props: AlertLinkProps,
    protected readonly refs: ToRefs<AlertLinkProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<AlertLinkComponents, AlertLinkProps>,
    protected readonly slots?: AlertLinkSlots,
    protected readonly emits?: ConstrEmit<AlertLinkEmits>,
    constructors: {
      EventClickIncludeConstructor?: typeof EventClickInclude
      LabelIncludeConstructor?: typeof LabelInclude
    } = {}
  ) {
    const {
      EventClickIncludeConstructor = EventClickInclude,
      LabelIncludeConstructor = LabelInclude
    } = constructors

    this.event = new EventClickIncludeConstructor(
      props,
      undefined,
      emits
    )

    this.label = new LabelIncludeConstructor(
      props,
      className,
      undefined,
      slots
    )
  }

  /**
   * Returns values for the class.
   *
   * Возвращает значения для класса.
   * @returns classes values / значения классов
   */
  get classes(): ConstrClass {
    return {
      [getClassTagAStatic(this.classDesign)]: true
    }
  }
}

import { type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, DesignComp, type RefOrNormal } from '@dxtmisha/functional'

import { WindowInclude } from '../Window'
import { BarsInclude } from '../Bars'
import { ActionsInclude } from '../Actions'

import type { ModalComponents, ModalEmits, ModalSlots } from './types'
import type { ModalProps } from './props'

/**
 * ModalAbstract
 */
export abstract class ModalAbstract {
  readonly window: WindowInclude
  readonly bars: BarsInclude
  readonly actions: ActionsInclude

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
   * @param extraWindow additional parameters for WindowInclude/ дополнительные параметры для WindowInclude
   * @param extraBars additional parameters for BarsInclude/ дополнительные параметры для BarsInclude
   * @param extraActions additional parameters for ActionsInclude/ дополнительные параметры для ActionsInclude
   */
  constructor(
    protected readonly props: ModalProps,
    protected readonly refs: ToRefs<ModalProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<ModalComponents, ModalProps>,
    protected readonly slots?: ModalSlots,
    protected readonly emits?: ConstrEmit<ModalEmits>,
    protected readonly extraWindow?: RefOrNormal<any>,
    protected readonly extraBars?: RefOrNormal<any>,
    protected readonly extraActions?: RefOrNormal<any>
  ) {
    this.window = new WindowInclude(
      props,
      className,
      components,
      emits,
      extraWindow
    )

    this.bars = new BarsInclude(
      props,
      className,
      components,
      emits,
      extraBars
    )

    this.actions = new ActionsInclude(
      props,
      className,
      components,
      emits,
      extraActions
    )
  }
}

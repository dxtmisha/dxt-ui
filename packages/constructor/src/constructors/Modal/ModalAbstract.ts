import { type Ref, type ToRefs } from 'vue'
import {
  type ConstrEmit,
  type DesignComp,
  getElementId,
  type RefOrNormal
} from '@dxtmisha/functional'

import { WindowInclude } from '../Window'
import { BarsInclude } from '../Bars'
import { ActionsInclude } from '../Actions'

import type { ModalComponents, ModalEmits, ModalSlots } from './types'
import type { ModalProps } from './props'

/**
 * ModalAbstract
 */
export abstract class ModalAbstract {
  readonly bars: BarsInclude
  readonly actions: ActionsInclude
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
   * @param extraWindow additional parameters for WindowInclude/ дополнительные параметры для WindowInclude
   * @param extraBars additional parameters for BarsInclude/ дополнительные параметры для BarsInclude
   * @param extraActions additional parameters for ActionsInclude/ дополнительные параметры для ActionsInclude
   * @param constructors object with classes/ объект с классами
   * @param constructors.WindowConstructor class for creating a window/ класс для создания окна
   * @param constructors.BarsConstructor class for creating bars/ класс для создания панелей
   * @param constructors.ActionsConstructor class for creating actions/ класс для создания действий
   */
  protected constructor(
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
    protected readonly extraActions?: RefOrNormal<any>,
    constructors?: {
      WindowConstructor?: typeof WindowInclude
      BarsConstructor?: typeof BarsInclude
      ActionsConstructor?: typeof ActionsInclude
    }
  ) {
    const {
      WindowConstructor = WindowInclude,
      BarsConstructor = BarsInclude,
      ActionsConstructor = ActionsInclude
    } = constructors ?? {}

    const labelId: string = getElementId()
    const descriptionId: string = getElementId()

    this.bars = new BarsConstructor(
      props,
      className,
      components,
      emits,
      extraBars,
      labelId,
      descriptionId
    )

    this.actions = new ActionsConstructor(
      props,
      className,
      components,
      emits,
      extraActions
    )

    this.window = new WindowConstructor(
      props,
      className,
      components,
      emits,
      extraWindow,
      labelId,
      descriptionId
    )
  }
}

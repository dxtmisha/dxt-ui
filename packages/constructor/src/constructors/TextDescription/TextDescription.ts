import { toRef, type Ref } from 'vue'
import { type ConstrEmit, type DesignComp, type DesignName } from '@dxtmisha/functional'

import { DescriptionInclude } from '../../classes/DescriptionInclude'

import type { TextDescriptionComponents, TextDescriptionEmits, TextDescriptionSlots } from './types'
import type { TextDescriptionProps } from './props'

/**
 * TextDescription
 */
export class TextDescription {
  /** Description include/ Подключение описания */
  readonly description: DescriptionInclude

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param element input element/ элемент ввода
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param constructors object with classes/ объект с классами
   * @param constructors.DescriptionConstructor class for creating a description/ класс для создания описания
   */
  constructor(
    protected readonly props: TextDescriptionProps,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly naming: DesignName,
    protected readonly components?: DesignComp<TextDescriptionComponents, TextDescriptionProps>,
    protected readonly slots?: TextDescriptionSlots,
    protected readonly emits?: ConstrEmit<TextDescriptionEmits>,
    constructors: {
      DescriptionConstructor?: typeof DescriptionInclude
    } = {}
  ) {
    const {
      DescriptionConstructor = DescriptionInclude
    } = constructors

    this.description = new DescriptionConstructor(
      this.props,
      this.naming,
      this.slots,
      undefined,
      toRef(this.props, 'tag')
    )
  }
}

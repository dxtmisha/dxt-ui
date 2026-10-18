import type { Ref } from 'vue'
import { type ConstrEmit, type DesignComp, type DesignName } from '@dxtmisha/functional'

import type { InputFileComponents, InputFileEmits, InputFileSlots } from './types'
import type { InputFileProps } from './props'

/**
 * InputFile
 */
export class InputFile {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param element input element/ элемент ввода
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly props: InputFileProps,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly naming: DesignName,
    protected readonly components?: DesignComp<InputFileComponents, InputFileProps>,
    protected readonly slots?: InputFileSlots,
    protected readonly emits?: ConstrEmit<InputFileEmits>
  ) {
  }
}

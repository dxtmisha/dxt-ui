import type { Ref } from 'vue'
import { type ConstrEmit, type DesignComp, type DesignName } from '@dxtmisha/functional'

import { TextareaAutosizeValue } from './TextareaAutosizeValue'
import { TextareaAutosizeResize } from './TextareaAutosizeResize'

import type { TextareaAutosizeComponents, TextareaAutosizeEmits, TextareaAutosizeSlots } from './types'
import type { TextareaAutosizeProps } from './props'

/**
 * TextareaAutosize
 */
export class TextareaAutosize {
  readonly value: TextareaAutosizeValue
  readonly resize: TextareaAutosizeResize

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param element input element/ элемент ввода
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param constructors object with classes/ объект с классами
   * @param constructors.TextareaAutosizeResizeConstructor class for working with resize/ класс для работы с изменением размера
   * @param constructors.TextareaAutosizeValueConstructor class for working with value/ класс для работы со значением
   */
  constructor(
    protected readonly props: TextareaAutosizeProps,
    protected readonly element: Ref<HTMLTextAreaElement | undefined>,
    protected readonly naming: DesignName,
    protected readonly components?: DesignComp<TextareaAutosizeComponents, TextareaAutosizeProps>,
    protected readonly slots?: TextareaAutosizeSlots,
    protected readonly emits?: ConstrEmit<TextareaAutosizeEmits>,
    constructors: {
      TextareaAutosizeResizeConstructor?: typeof TextareaAutosizeResize
      TextareaAutosizeValueConstructor?: typeof TextareaAutosizeValue
    } = {}
  ) {
    const {
      TextareaAutosizeResizeConstructor = TextareaAutosizeResize,
      TextareaAutosizeValueConstructor = TextareaAutosizeValue
    } = constructors

    this.value = new TextareaAutosizeValueConstructor(props, emits)
    this.resize = new TextareaAutosizeResizeConstructor(props, element, this.value)
  }
}

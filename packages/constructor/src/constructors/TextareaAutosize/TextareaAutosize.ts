import type { Ref, ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

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
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element input element/ элемент ввода
   * @param classDesign design name/ название дизайна
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly props: TextareaAutosizeProps,
    protected readonly refs: ToRefs<TextareaAutosizeProps>,
    protected readonly element: Ref<HTMLTextAreaElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<TextareaAutosizeComponents, TextareaAutosizeProps>,
    protected readonly slots?: TextareaAutosizeSlots,
    protected readonly emits?: ConstrEmit<TextareaAutosizeEmits>
  ) {
    this.value = new TextareaAutosizeValue(props, refs, emits)
    this.resize = new TextareaAutosizeResize(props, element, this.value)
  }
}

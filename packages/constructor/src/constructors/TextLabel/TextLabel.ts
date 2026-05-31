import { type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { LabelInclude } from '../../classes/LabelInclude'

import type { TextLabelComponents, TextLabelEmits, TextLabelSlots } from './types'
import type { TextLabelProps } from './props'

/**
 * TextLabel
 */
export class TextLabel {
  /** Label include/ Подключение метки */
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
   * @param constructors.LabelConstructor class for creating a label/ класс для создания метки
   */
  constructor(
    protected readonly props: TextLabelProps,
    protected readonly refs: ToRefs<TextLabelProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<TextLabelComponents, TextLabelProps>,
    protected readonly slots?: TextLabelSlots,
    protected readonly emits?: ConstrEmit<TextLabelEmits>,
    constructors: {
      LabelConstructor?: typeof LabelInclude
    } = {}
  ) {
    const {
      LabelConstructor = LabelInclude
    } = constructors

    this.label = new LabelConstructor(
      this.props,
      this.className,
      undefined,
      this.slots,
      undefined,
      undefined,
      undefined,
      undefined,
      this.refs.tag
    )
  }
}

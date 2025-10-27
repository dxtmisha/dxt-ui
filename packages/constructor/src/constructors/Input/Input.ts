import type { Ref, ToRefs } from 'vue'
import { type ConstrEmit, DesignComp } from '@dxtmisha/functional'

import { FieldChangeInclude } from '../../classes/field/FieldChangeInclude'
import { FieldVisibilityInclude } from '../../classes/field/FieldVisibilityInclude'
import { FieldTypeInclude } from '../../classes/field/FieldTypeInclude'
import { FieldPatternInclude } from '../../classes/field/FieldPatternInclude'

import { FieldElementInclude } from '../../classes/field/FieldElementInclude'

import { FieldValueInclude } from '../../classes/field/FieldValueInclude'
import { FieldArrowInclude } from '../../classes/field/FieldArrowInclude'

import type { FieldElementInput } from '../../types/fieldTypes'
import type { InputComponents, InputEmits, InputSlots } from './types'
import type { InputProps } from './props'

/**
 * Input
 */
export class Input {
  readonly visibility: FieldVisibilityInclude
  readonly type: FieldTypeInclude
  readonly pattern: FieldPatternInclude

  readonly elementItem: FieldElementInclude
  readonly change: FieldChangeInclude

  readonly value: FieldValueInclude
  readonly arrow: FieldArrowInclude

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
    protected readonly props: InputProps,
    protected readonly refs: ToRefs<InputProps>,
    protected readonly element: Ref<FieldElementInput>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<InputComponents, InputProps>,
    protected readonly slots?: InputSlots,
    protected readonly emits?: ConstrEmit<InputEmits>
  ) {
    this.change = new FieldChangeInclude(this.props)
    this.visibility = new FieldVisibilityInclude()
    this.type = new FieldTypeInclude(this.props, this.visibility)
    this.pattern = new FieldPatternInclude(this.props, this.type)

    this.elementItem = new FieldElementInclude(
      this.props,
      this.element,
      this.type,
      this.pattern
    )

    this.value = new FieldValueInclude(
      this.props,
      this.refs,
      this.elementItem
    )
    this.arrow = new FieldArrowInclude(this.props, this.value)
  }
}

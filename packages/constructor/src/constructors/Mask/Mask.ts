import type { Ref, ToRefs } from 'vue'
import { type ConstrEmit, DesignComp } from '@dxt-ui/functional'

import { MaskType } from './MaskType'
import { MaskBuffer } from './MaskBuffer'
import { MaskFocus } from './MaskFocus'
import { MaskCharacterLength } from './MaskCharacterLength'
import { MaskRubberItem } from './MaskRubberItem'
import { MaskRubberTransition } from './MaskRubberTransition'
import { MaskDate } from './MaskDate'
import { MaskFormat } from './MaskFormat'
import { MaskSpecial } from './MaskSpecial'
import { MaskMatch } from './MaskMatch'
import { MaskPattern } from './MaskPattern'

import { MaskRight } from './MaskRight'

import type { MaskComponents, MaskEmits, MaskSlots } from './types'
import type { MaskProps } from './props'

/**
 * Mask
 */
export class Mask {
  /** Type helper/ Объект для работы с типом */
  readonly type: MaskType
  /** Buffer helper/ Объект для буферизации ввода */
  readonly buffer: MaskBuffer
  /** Focus helper/ Объект для работы с фокусом */
  readonly focus: MaskFocus
  /** Entered characters length helper/ Объект длины введённых символов */
  readonly characterLength: MaskCharacterLength
  /** Rubber groups length helper/ Объект длины резиновых групп */
  readonly rubber: MaskRubberItem
  /** Rubber transition symbol helper/ Объект символа перехода резины */
  readonly rubberTransition: MaskRubberTransition

  /** Date/time mask helper/ Объект для работы с датой/временем */
  readonly date: MaskDate
  /** Number/currency format mask helper/ Объект форматирования числа/валюты */
  readonly format: MaskFormat

  /** Special symbols/groups helper/ Объект для спецсимволов и групп */
  readonly special: MaskSpecial
  /** Match helper/ Объект проверки символов */
  readonly match: MaskMatch
  /** Pattern helper/ Объект паттернов валидации */
  readonly pattern: MaskPattern
  /** Alignment helper/ Объект выравнивания */
  readonly right: MaskRight

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
    protected readonly props: MaskProps,
    protected readonly refs: ToRefs<MaskProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<MaskComponents, MaskProps>,
    protected readonly slots?: MaskSlots,
    protected readonly emits?: ConstrEmit<MaskEmits>
  ) {
    this.type = new MaskType(this.props)
    this.buffer = new MaskBuffer()
    this.focus = new MaskFocus(this.buffer)
    this.characterLength = new MaskCharacterLength()
    this.rubber = new MaskRubberItem()
    this.rubberTransition = new MaskRubberTransition()

    this.date = new MaskDate(this.props, this.type)
    this.format = new MaskFormat(this.props, this.type, this.rubber)

    this.special = new MaskSpecial(
      this.props,
      this.type,
      this.date,
      this.format
    )

    this.match = new MaskMatch(this.props, this.special)
    this.pattern = new MaskPattern(
      this.props,
      this.type,
      this.date,
      this.special
    )

    this.right = new MaskRight(this.props, this.type)
  }
}

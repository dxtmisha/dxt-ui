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
import { MaskRubber } from './MaskRubber'
import { MaskItem } from './MaskItem'
import { MaskSelection } from './MaskSelection'
import { MaskCharacter } from './MaskCharacter'
import { MaskValueBasic } from './MaskValueBasic'
import { MaskValue } from './MaskValue'
import { MaskValidation } from './MaskValidation'
import { MaskView } from './MaskView'
import { MaskEmit } from './MaskEmit'
import { MaskData } from './MaskData'

import type { MaskElementInput } from './basicTypes'
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
  readonly rubberItem: MaskRubberItem
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

  /** Rubber groups helper/ Объект для работы с резиновыми группами */
  readonly rubber: MaskRubber
  /** Mask item helper/ Объект для работы с маской */
  readonly item: MaskItem
  /** Selection helper/ Объект для работы с выделением */
  readonly selection: MaskSelection
  /** Characters helper/ Объект для работы с введёнными символами */
  readonly character: MaskCharacter
  /** Basic value helper/ Объект для работы с базовыми значениями */
  readonly valueBasic: MaskValueBasic
  /** Value helper/ Объект для работы с итоговым значением */
  readonly value: MaskValue
  /** Validation helper/ Объект для работы с валидацией */
  readonly validation: MaskValidation
  /** View helper/ Объект для работы с отображением */
  readonly view: MaskView
  /** Emit helper/ Объект для работы с событиями */
  readonly emit: MaskEmit
  /** Data helper/ Объект для работы с вводом */
  readonly data: MaskData

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
    protected readonly element: Ref<MaskElementInput>,
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
    this.rubberItem = new MaskRubberItem()
    this.rubberTransition = new MaskRubberTransition()

    this.date = new MaskDate(this.props, this.type)
    this.format = new MaskFormat(this.props, this.type, this.rubberItem)

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

    this.rubber = new MaskRubber(
      this.props,
      this.type,
      this.rubberItem,
      this.rubberTransition,
      this.special,
      this.match,
      this.format
    )

    this.item = new MaskItem(
      this.props,
      this.type,
      this.rubberItem,
      this.characterLength,
      this.date,
      this.format,
      this.special
    )

    this.selection = new MaskSelection(
      this.special,
      this.item
    )

    this.character = new MaskCharacter(
      this.props,
      this.rubberItem,
      this.characterLength,
      this.special,
      this.item,
      this.selection
    )

    this.valueBasic = new MaskValueBasic(
      this.rubberTransition,
      this.item,
      this.special,
      this.character
    )

    this.value = new MaskValue(
      this.props,
      this.type,
      this.date,
      this.format,
      this.item,
      this.special,
      this.valueBasic
    )

    this.validation = new MaskValidation(
      this.pattern,
      this.value
    )

    this.view = new MaskView(
      this.props,
      this.type,
      this.date,
      this.format,
      this.special,
      this.rubber,
      this.item,
      this.valueBasic,
      this.validation,
      this.className
    )

    this.emit = new MaskEmit(
      this.validation,
      this.emits
    )

    this.data = new MaskData(
      this.type,
      this.buffer,
      this.focus,
      this.rubberTransition,
      this.date,
      this.special,
      this.match,
      this.rubber,
      this.item,
      this.selection,
      this.character,
      this.valueBasic,
      this.value,
      this.emit,
      this.element
    )
  }
}

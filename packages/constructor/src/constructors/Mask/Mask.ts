import { computed, type Ref, type ToRefs, watch } from 'vue'
import {
  anyToString,
  type ConstrClassObject,
  type ConstrEmit,
  type DesignComp,
  GeoRef,
  isFloat
} from '@dxtmisha/functional'

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
import { MaskEvent } from './MaskEvent'

import type { MaskElementInput } from './basicTypes'
import type { MaskComponents, MaskEmits, MaskSlots } from './types'
import type { MaskProps } from './props'

/**
 * Class for working with input masking.
 *
 * Класс для работы с маской ввода.
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
  /** Event helper/ Объект для работы с DOM-событиями */
  readonly event: MaskEvent

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
   * @param MaskTypeConstructor class for working with mask type/ класс для работы с типом маски
   * @param MaskBufferConstructor class for working with mask buffer/ класс для работы с буфером маски
   * @param MaskFocusConstructor class for working with mask focus/ класс для работы с фокусом маски
   * @param MaskCharacterLengthConstructor class for working with mask character length/ класс для работы с длиной символов маски
   * @param MaskRubberItemConstructor class for working with mask rubber item/ класс для работы с резиновым элементом маски
   * @param MaskRubberTransitionConstructor class for working with mask rubber transition/ класс для работы с переходом резины маски
   * @param MaskDateConstructor class for working with mask date/ класс для работы с датой маски
   * @param MaskFormatConstructor class for working with mask format/ класс для работы с форматом маски
   * @param MaskSpecialConstructor class for working with mask special/ класс для работы со специальными символами маски
   * @param MaskMatchConstructor class for working with mask match/ класс для работы с совпадением маски
   * @param MaskPatternConstructor class for working with mask pattern/ класс для работы с шаблоном маски
   * @param MaskRightConstructor class for working with mask right/ класс для работы с выравниванием справа маски
   * @param MaskRubberConstructor class for working with mask rubber/ класс для работы с резиной маски
   * @param MaskItemConstructor class for working with mask item/ класс для работы с элементом маски
   * @param MaskSelectionConstructor class for working with mask selection/ класс для работы с выделением маски
   * @param MaskCharacterConstructor class for working with mask character/ класс для работы с символом маски
   * @param MaskValueBasicConstructor class for working with mask value basic/ класс для работы с базовым значением маски
   * @param MaskValueConstructor class for working with mask value/ класс для работы со значением маски
   * @param MaskValidationConstructor class for working with mask validation/ класс для работы с валидацией маски
   * @param MaskViewConstructor class for working with mask view/ класс для работы с отображением маски
   * @param MaskEmitConstructor class for working with mask emit/ класс для работы с событиями маски
   * @param MaskDataConstructor class for working with mask data/ класс для работы с данными маски
   * @param MaskEventConstructor class for working with mask event/ класс для работы с событием маски
   */
  constructor(
    protected readonly props: MaskProps,
    protected readonly refs: ToRefs<MaskProps>,
    protected readonly element: Ref<MaskElementInput>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<MaskComponents, MaskProps>,
    protected readonly slots?: MaskSlots,
    protected readonly emits?: ConstrEmit<MaskEmits>,
    MaskTypeConstructor: typeof MaskType = MaskType,
    MaskBufferConstructor: typeof MaskBuffer = MaskBuffer,
    MaskFocusConstructor: typeof MaskFocus = MaskFocus,
    MaskCharacterLengthConstructor: typeof MaskCharacterLength = MaskCharacterLength,
    MaskRubberItemConstructor: typeof MaskRubberItem = MaskRubberItem,
    MaskRubberTransitionConstructor: typeof MaskRubberTransition = MaskRubberTransition,
    MaskDateConstructor: typeof MaskDate = MaskDate,
    MaskFormatConstructor: typeof MaskFormat = MaskFormat,
    MaskSpecialConstructor: typeof MaskSpecial = MaskSpecial,
    MaskMatchConstructor: typeof MaskMatch = MaskMatch,
    MaskPatternConstructor: typeof MaskPattern = MaskPattern,
    MaskRightConstructor: typeof MaskRight = MaskRight,
    MaskRubberConstructor: typeof MaskRubber = MaskRubber,
    MaskItemConstructor: typeof MaskItem = MaskItem,
    MaskSelectionConstructor: typeof MaskSelection = MaskSelection,
    MaskCharacterConstructor: typeof MaskCharacter = MaskCharacter,
    MaskValueBasicConstructor: typeof MaskValueBasic = MaskValueBasic,
    MaskValueConstructor: typeof MaskValue = MaskValue,
    MaskValidationConstructor: typeof MaskValidation = MaskValidation,
    MaskViewConstructor: typeof MaskView = MaskView,
    MaskEmitConstructor: typeof MaskEmit = MaskEmit,
    MaskDataConstructor: typeof MaskData = MaskData,
    MaskEventConstructor: typeof MaskEvent = MaskEvent
  ) {
    this.type = new MaskTypeConstructor(this.props)
    this.buffer = new MaskBufferConstructor()
    this.focus = new MaskFocusConstructor(this.buffer)
    this.characterLength = new MaskCharacterLengthConstructor()
    this.rubberItem = new MaskRubberItemConstructor()
    this.rubberTransition = new MaskRubberTransitionConstructor()

    this.date = new MaskDateConstructor(this.props, this.type)
    this.format = new MaskFormatConstructor(this.props, this.type, this.rubberItem)

    this.special = new MaskSpecialConstructor(
      this.props,
      this.type,
      this.date,
      this.format
    )

    this.match = new MaskMatchConstructor(this.props, this.special)
    this.pattern = new MaskPatternConstructor(
      this.props,
      this.type,
      this.date,
      this.special
    )

    this.right = new MaskRightConstructor(this.props, this.type)

    this.rubber = new MaskRubberConstructor(
      this.props,
      this.type,
      this.rubberItem,
      this.rubberTransition,
      this.special,
      this.match,
      this.format
    )

    this.item = new MaskItemConstructor(
      this.props,
      this.type,
      this.rubberItem,
      this.characterLength,
      this.date,
      this.format,
      this.special
    )

    this.selection = new MaskSelectionConstructor(
      this.special,
      this.item
    )

    this.character = new MaskCharacterConstructor(
      this.props,
      this.rubberItem,
      this.characterLength,
      this.special,
      this.item,
      this.selection
    )

    this.valueBasic = new MaskValueBasicConstructor(
      this.rubberTransition,
      this.item,
      this.special,
      this.character
    )

    this.value = new MaskValueConstructor(
      this.props,
      this.type,
      this.date,
      this.format,
      this.item,
      this.special,
      this.valueBasic
    )

    this.validation = new MaskValidationConstructor(
      this.pattern,
      this.value
    )

    this.view = new MaskViewConstructor(
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

    this.emit = new MaskEmitConstructor(
      this.validation,
      this.emits
    )

    this.data = new MaskDataConstructor(
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

    this.event = new MaskEventConstructor(
      this.buffer,
      this.focus,
      this.characterLength,
      this.right,
      this.selection,
      this.valueBasic,
      this.emit,
      this.data
    )

    watch([refs.value], () => this.reset(props.value))
    watch(this.basic, () => this.data.goSelection(false))

    watch([GeoRef.getStandard(), refs.language], () => this.reset(this.value.getValueCache()))

    if (props.value) {
      this.data.reset(anyToString(props.value))
    }
  }

  /** Receiving basic standard values/ Получение базовых стандартных значений */
  readonly basic = computed<string>(() => {
    if (this.right.isRight()) {
      let data = ''

      this.view.item.value.forEach((item) => {
        data += item.value
      })

      return data
    }

    return this.view.input.value
  })

  /** Values for CSS class/ Значения для CSS-класса */
  readonly classes = computed<ConstrClassObject>(() => ({
    [`${this.className}--value`]: this.characterLength.is(),
    [`${this.className}--end`]: this.right.isEnd()
  }))

  /**
   * Sets new value and reinitializes mask.
   *
   * Устанавливает новое значение и переинициализирует маску.
   * @param value new value/ новое значение
   */
  readonly set = (value: string) => this.reset(value)

  /**
   * Resets all values or updates to the new one.
   *
   * Сбрасывает все значения или обновляется до нового.
   * @param value new values/ новые значения
   */
  reset(value?: string | number): boolean {
    const newValue = anyToString(value)

    if (newValue !== this.props.valueDefault) {
      if (
        this.value.item.value !== newValue
        || (
          this.valueBasic.item.value !== newValue
          && !isFloat(newValue)
        )
      ) {
        this.data.reset(newValue)
        this.emit.set('reset', {} as Event).go()
        return true
      }
    }

    return false
  }

  /**
   * Clears value to default and focuses input.
   *
   * Очищает значение до значения по умолчанию и фокусирует поле ввода.
   */
  readonly clear = () => {
    this.data.reset((this.props.valueDefault ?? '').toString())
    this.emit.set('reset', {} as Event).go()
    this.element.value?.focus()
  }
}

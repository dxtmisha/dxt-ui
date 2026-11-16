import { computed, mergeProps, type Ref, watch } from 'vue'
import {
  anyToString,
  type ConstrBind,
  type ConstrClassObject,
  type ConstrEmit,
  type ConstrItems,
  type DesignComp,
  DesignLogicAbstract,
  type DesignName,
  GeoRef,
  isFloat,
  isNull
} from '@dxtmisha/functional'

import { MaskBuffer } from './MaskBuffer'
import { MaskCharacter } from './MaskCharacter'
import { MaskCharacterLength } from './MaskCharacterLength'
import { MaskData } from './MaskData'
import { MaskDate } from './MaskDate'
import { MaskEmit } from './MaskEmit'
import { MaskEvent } from './MaskEvent'
import { MaskFocus } from './MaskFocus'
import { MaskFormat } from './MaskFormat'
import { MaskItem } from './MaskItem'
import { MaskMatch } from './MaskMatch'
import { MaskPattern } from './MaskPattern'
import { MaskRight } from './MaskRight'
import { MaskRubber } from './MaskRubber'
import { MaskRubberItem } from './MaskRubberItem'
import { MaskRubberTransition } from './MaskRubberTransition'
import { MaskSelection } from './MaskSelection'
import { MaskSpecial } from './MaskSpecial'
import { MaskType } from './MaskType'
import { MaskValidation } from './MaskValidation'
import { MaskValue } from './MaskValue'
import { MaskValueBasic } from './MaskValueBasic'
import { MaskView } from './MaskView'

import type { MaskElementInput } from './basicTypes'
import type { MaskProps } from './props'
import type { MaskComponents, MaskEmits, MaskSlots } from './types'

/** Mask dependency constructors type / Тип конструкторов зависимостей Mask */
export type MaskConstructors = {
  /** Buffer helper constructor / Конструктор помощника буфера */
  buffer: typeof MaskBuffer
  /** Character helper constructor / Конструктор помощника символов */
  character: typeof MaskCharacter
  /** Character length helper constructor / Конструктор помощника длины символов */
  characterLength: typeof MaskCharacterLength
  /** Data helper constructor / Конструктор помощника данных */
  data: typeof MaskData
  /** Date helper constructor / Конструктор помощника даты */
  date: typeof MaskDate
  /** Emit helper constructor / Конструктор помощника событий */
  emit: typeof MaskEmit
  /** Event helper constructor / Конструктор помощника DOM-событий */
  event: typeof MaskEvent
  /** Focus helper constructor / Конструктор помощника фокуса */
  focus: typeof MaskFocus
  /** Format helper constructor / Конструктор помощника форматирования */
  format: typeof MaskFormat
  /** Mask item helper constructor / Конструктор помощника элемента маски */
  item: typeof MaskItem
  /** Match helper constructor / Конструктор помощника сопоставления символов */
  match: typeof MaskMatch
  /** Pattern helper constructor / Конструктор помощника шаблонов валидации */
  pattern: typeof MaskPattern
  /** Alignment helper constructor / Конструктор помощника выравнивания */
  right: typeof MaskRight
  /** Rubber groups helper constructor / Конструктор помощника резиновых групп */
  rubber: typeof MaskRubber
  /** Rubber item length helper constructor / Конструктор помощника длины резиновых групп */
  rubberItem: typeof MaskRubberItem
  /** Rubber transition symbol helper constructor / Конструктор помощника символа перехода резины */
  rubberTransition: typeof MaskRubberTransition
  /** Selection helper constructor / Конструктор помощника выделения */
  selection: typeof MaskSelection
  /** Special symbols helper constructor / Конструктор помощника специальных символов */
  special: typeof MaskSpecial
  /** Type helper constructor / Конструктор помощника типа маски */
  type: typeof MaskType
  /** Validation helper constructor / Конструктор помощника валидации */
  validation: typeof MaskValidation
  /** Value helper constructor / Конструктор помощника итогового значения */
  value: typeof MaskValue
  /** Basic value helper constructor / Конструктор помощника базового значения */
  valueBasic: typeof MaskValueBasic
  /** View helper constructor / Конструктор помощника отображения */
  view: typeof MaskView
}

/**
 * Class for working with input masking.
 *
 * Класс для работы с маской ввода.
 */
export class Mask extends DesignLogicAbstract<
  HTMLInputElement,
  MaskComponents,
  MaskEmits,
  MaskSlots,
  MaskProps,
  MaskConstructors
> {
  /** Watchers cleanup handlers / Функции остановки наблюдателей */
  protected watchStops: (() => void)[] = []
  /** Pending animation frame ID for clear focus / Идентификатор ожидающего кадра анимации для фокуса при очистке */
  protected animationFrame?: number

  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<MaskConstructors> = {
    buffer: {
      item: MaskBuffer
    },
    character: {
      item: MaskCharacter,
      parameters: () => [
        this.props,
        () => this.i('characterLength'),
        () => this.i('item'),
        () => this.i('rubberItem'),
        () => this.i('selection'),
        () => this.i('special')
      ]
    },
    characterLength: {
      item: MaskCharacterLength
    },
    data: {
      item: MaskData,
      parameters: () => [
        this.element,
        () => this.i('buffer'),
        () => this.i('character'),
        () => this.i('date'),
        () => this.i('emit'),
        () => this.i('focus'),
        () => this.i('item'),
        () => this.i('match'),
        () => this.i('rubber'),
        () => this.i('rubberTransition'),
        () => this.i('selection'),
        () => this.i('special'),
        () => this.i('type'),
        () => this.i('value'),
        () => this.i('valueBasic')
      ]
    },
    date: {
      item: MaskDate,
      parameters: () => [
        this.props,
        () => this.i('type')
      ]
    },
    emit: {
      item: MaskEmit,
      parameters: () => [
        () => this.i('validation'),
        this.emits
      ]
    },
    event: {
      item: MaskEvent,
      parameters: () => [
        () => this.i('buffer'),
        () => this.i('characterLength'),
        () => this.i('data'),
        () => this.i('emit'),
        () => this.i('focus'),
        () => this.i('right'),
        () => this.i('selection'),
        () => this.i('valueBasic')
      ]
    },
    focus: {
      item: MaskFocus,
      parameters: () => [
        () => this.i('buffer')
      ]
    },
    format: {
      item: MaskFormat,
      parameters: () => [
        this.props,
        () => this.i('rubberItem'),
        () => this.i('type')
      ]
    },
    item: {
      item: MaskItem,
      parameters: () => [
        this.props,
        () => this.i('characterLength'),
        () => this.i('date'),
        () => this.i('format'),
        () => this.i('rubberItem'),
        () => this.i('special'),
        () => this.i('type')
      ]
    },
    match: {
      item: MaskMatch,
      parameters: () => [
        this.props,
        () => this.i('special')
      ]
    },
    pattern: {
      item: MaskPattern,
      parameters: () => [
        this.props,
        () => this.i('date'),
        () => this.i('special'),
        () => this.i('type')
      ]
    },
    right: {
      item: MaskRight,
      parameters: () => [
        this.props,
        () => this.i('type')
      ]
    },
    rubber: {
      item: MaskRubber,
      parameters: () => [
        () => this.i('format'),
        () => this.i('match'),
        () => this.i('rubberItem'),
        () => this.i('rubberTransition'),
        () => this.i('special'),
        () => this.i('type')
      ]
    },
    rubberItem: {
      item: MaskRubberItem
    },
    rubberTransition: {
      item: MaskRubberTransition
    },
    selection: {
      item: MaskSelection,
      parameters: () => [
        () => this.i('item')
      ]
    },
    special: {
      item: MaskSpecial,
      parameters: () => [
        this.props,
        () => this.i('date'),
        () => this.i('format'),
        () => this.i('type')
      ]
    },
    type: {
      item: MaskType,
      parameters: () => [this.props]
    },
    validation: {
      item: MaskValidation,
      parameters: () => [
        () => this.i('pattern'),
        () => this.i('value')
      ]
    },
    value: {
      item: MaskValue,
      parameters: () => [
        this.props,
        () => this.i('date'),
        () => this.i('format'),
        () => this.i('item'),
        () => this.i('special'),
        () => this.i('type'),
        () => this.i('valueBasic')
      ]
    },
    valueBasic: {
      item: MaskValueBasic,
      parameters: () => [
        () => this.i('character'),
        () => this.i('item'),
        () => this.i('rubberTransition'),
        () => this.i('special')
      ]
    },
    view: {
      item: MaskView,
      parameters: () => [
        this.props,
        this.naming,
        () => this.i('date'),
        () => this.i('format'),
        () => this.i('item'),
        () => this.i('rubber'),
        () => this.i('special'),
        () => this.i('type'),
        () => this.i('validation'),
        () => this.i('valueBasic')
      ]
    }
  }

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param element input element/ элемент ввода
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param constructors optional override constructors / необязательные переопределяющие конструкторы
   */
  constructor(
    props: Readonly<MaskProps>,
    element: Ref<MaskElementInput>,
    naming: DesignName,
    components?: DesignComp<MaskComponents, MaskProps>,
    slots?: MaskSlots,
    emits?: ConstrEmit<MaskEmits>,
    constructors?: Partial<MaskConstructors>
  ) {
    super(
      props,
      element,
      naming,
      components,
      slots,
      emits,
      constructors
    )

    if (!isNull(this.props.value) && this.props.value !== '') {
      this.i('data').reset(anyToString(this.props.value))
    }
  }

  /**
   * Setup lifecycle watchers on mount.
   *
   * Инициализация наблюдателей при монтировании компонента.
   */
  protected override readonly onMounted = (): void => {
    this.watchStops.push(
      watch(() => this.props.value, () => this.reset(this.props.value)),
      watch(this.basic, () => this.i('data').goSelection(false)),
      watch([GeoRef.getStandard(), () => this.props.language], () => this.reset(this.i('value').getValueCache()))
    )
  }

  /**
   * Cleanup lifecycle watchers on unmount.
   *
   * Очистка наблюдателей при размонтировании компонента.
   */
  protected override readonly onUnmounted = (): void => {
    this.watchStops.forEach(stop => stop())
    this.watchStops = []

    if (this.animationFrame !== undefined) {
      cancelAnimationFrame(this.animationFrame)
      this.animationFrame = undefined
    }
  }

  /** Receiving basic standard values/ Получение базовых стандартных значений */
  readonly basic = computed<string>(() => {
    const view = this.i('view')

    if (this.i('right').isRight()) {
      let data = ''

      view.item.value.forEach((item) => {
        data += item.value
      })

      return data
    }

    return view.input.value
  })

  /** Returns the properties for the input element/ Возвращает свойства для элемента ввода */
  get binds(): ConstrBind {
    const event = this.i('event')

    return mergeProps(
      this.props.inputAttrs ?? {},
      {
        type: 'text',
        placeholder: '',

        onFocus: event.onFocus,
        onBlur: event.onBlur,
        onKeydown: event.onKeydown,
        onKeyup: event.onKeyup,
        onBeforeinput: event.onBeforeinput,
        onInput: event.onInput,
        onChange: event.onChange,
        onPaste: event.onPaste,
        onClick: event.onClick,
        onAnimationstart: event.onAnimationstart
      }
    )
  }

  /** Values for CSS class/ Значения для CSS-класса */
  get classes(): ConstrClassObject {
    return {
      [this.naming.getStatusClass('value')]: this.i('characterLength').is(),
      [this.naming.getStatusClass('end')]: this.i('right').isEnd()
    }
  }

  /**
   * Sets new value and reinitializes mask.
   *
   * Устанавливает новое значение и переинициализирует маску.
   * @param value new value/ новое значение
   * @returns true if value was reset/ true, если значение было сброшено
   */
  readonly set = (value: string): boolean => this.reset(value)

  /**
   * Resets all values or updates to the new one.
   *
   * Сбрасывает все значения или обновляется до нового.
   * @param value new values/ новые значения
   * @returns true if value was reset/ true, если значение было сброшено
   */
  reset(value?: string | number): boolean {
    const newValue = anyToString(value)

    if (
      isNull(this.props.valueDefault)
      || newValue !== anyToString(this.props.valueDefault)
    ) {
      if (
        this.i('value').item.value !== newValue
        || (
          this.i('valueBasic').item.value !== newValue
          && !isFloat(newValue)
        )
      ) {
        this.i('data').reset(newValue)
        this.i('emit').set('reset', {} as Event).go()
        return true
      }
    }

    return false
  }

  /**
   * Clears value to default and focuses input.
   *
   * Очищает значение до значения по умолчанию и фокусирует поле ввода.
   * @returns true after clearing/ true после очистки
   */
  readonly clear = (): boolean => {
    this.i('data').reset((this.props.valueDefault ?? '').toString())
    this.i('emit').set('reset', {} as Event).go()

    if (this.element.value) {
      this.element.value.value = this.basic.value

      if (this.animationFrame !== undefined) {
        cancelAnimationFrame(this.animationFrame)
      }

      this.animationFrame = requestAnimationFrame(() => {
        this.animationFrame = undefined
        if (this.element.value) {
          this.element.value.value = this.basic.value
          this.element.value.focus()
        }
      })
    }

    return true
  }
}

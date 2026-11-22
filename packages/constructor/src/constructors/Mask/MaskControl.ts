import { computed, type Ref } from 'vue'
import {
  anyToString,
  DesignLifecycleAbstract,
  isFloat,
  isNull
} from '@dxtmisha/functional'

import type { MaskData } from './MaskData'
import type { MaskEmit } from './MaskEmit'
import type { MaskRight } from './MaskRight'
import type { MaskScroll } from './MaskScroll'
import type { MaskValue } from './MaskValue'
import type { MaskValueBasic } from './MaskValueBasic'
import type { MaskView } from './MaskView'

import type { MaskElementInput } from './basicTypes'
import type { MaskProps } from './props'

/**
 * Class for managing mask input state, value formatting, reset, and clearing.
 *
 * Класс для управления состоянием ввода маски, базовым отображаемым значением, сбросом и очисткой.
 */
export class MaskControl extends DesignLifecycleAbstract {
  /** Pending animation frame ID for clear focus / Идентификатор ожидающего кадра анимации для фокуса при очистке */
  protected animationFrame?: number

  /**
   * Constructor
   *
   * Конструктор
   * @param props input data / входные данные
   * @param element input element / элемент ввода
   * @param data object for working with input behavior / объект для работы с поведением при вводе данных
   * @param emit object for handling callback events / объект для работы с событиями
   * @param right object for managing right alignment / объект для управления выравниванием справа
   * @param scroll object for horizontal scroll synchronization / объект для синхронизации горизонтальной прокрутки
   * @param value object for working with transformed value / объект для работы с преобразованным значением
   * @param valueBasic object for working with base values / объект для работы с базовыми значениями
   * @param view object for formatting mask view output / объект для форматирования вывода маски
   */
  constructor(
    protected readonly props: Readonly<MaskProps>,
    protected readonly element: Ref<MaskElementInput>,
    protected readonly data: () => MaskData,
    protected readonly emit: () => MaskEmit,
    protected readonly right: () => MaskRight,
    protected readonly scroll: () => MaskScroll,
    protected readonly value: () => MaskValue,
    protected readonly valueBasic: () => MaskValueBasic,
    protected readonly view: () => MaskView
  ) {
    super()
  }

  /** Receiving basic standard values / Получение базовых стандартных значений */
  readonly basic = computed<string>(() => {
    const view = this.view()

    if (this.right().isRight()) {
      let data = ''

      view.item.value.forEach((item) => {
        data += item.value
      })

      return data
    }

    return view.input.value
  })

  /**
   * Sets new value and reinitializes mask.
   *
   * Устанавливает новое значение и переинициализирует маску.
   * @param value new value / новое значение
   * @returns true if value was reset / true, если значение было сброшено
   */
  readonly set = (value: string): boolean => this.reset(value)

  /**
   * Resets all values or updates to the new one.
   *
   * Сбрасывает все значения или обновляется до нового.
   * @param value new values / новые значения
   * @returns true if value was reset / true, если значение было сброшено
   */
  reset(value?: string | number): boolean {
    const newValue = anyToString(value)

    if (
      isNull(this.props.valueDefault)
      || newValue !== anyToString(this.props.valueDefault)
    ) {
      if (
        this.value().item.value !== newValue
        || (
          this.valueBasic().item.value !== newValue
          && !isFloat(newValue)
        )
      ) {
        this.data().reset(newValue)
        this.emit().set('reset', {} as Event).go()
        return true
      }
    }

    return false
  }

  /**
   * Clears value to default and focuses input.
   *
   * Очищает значение до значения по умолчанию и фокусирует поле ввода.
   * @returns true after clearing / true после очистки
   */
  readonly clear = (): boolean => {
    this.data().reset((this.props.valueDefault ?? '').toString())
    this.emit().set('reset', {} as Event).go()

    if (this.element.value) {
      this.element.value.value = this.basic.value

      if (this.animationFrame !== undefined) {
        cancelAnimationFrame(this.animationFrame)
        this.animationFrame = undefined
      }

      if (typeof requestAnimationFrame !== 'undefined') {
        this.animationFrame = requestAnimationFrame(() => {
          this.animationFrame = undefined
          if (this.element.value) {
            this.element.value.value = this.basic.value
            this.element.value.focus()
            this.scroll().sync()
          }
        })
      }
    }

    return true
  }

  /**
   * Cancels pending animation frame on unmount.
   *
   * Отменяет ожидающий кадр анимации при размонтировании.
   */
  override readonly onUnmounted = (): void => {
    if (this.animationFrame !== undefined) {
      cancelAnimationFrame(this.animationFrame)
      this.animationFrame = undefined
    }
  }
}

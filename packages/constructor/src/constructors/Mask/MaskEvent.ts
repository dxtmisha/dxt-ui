import { eventStopPropagation, getClipboardData } from '@dxt-ui/functional'

import { MaskBuffer } from './MaskBuffer'
import { MaskFocus } from './MaskFocus'
import { MaskCharacterLength } from './MaskCharacterLength'
import { MaskRight } from './MaskRight'
import { MaskSelection } from './MaskSelection'
import { MaskValueBasic } from './MaskValueBasic'
import { MaskEmit } from './MaskEmit'
import { MaskData } from './MaskData'

import type { MaskEventSelection } from './basicTypes'

/**
 * Class for working with events.
 *
 * Класс для работы с событиями.
 */
export class MaskEvent {
  /** Change flag/ Флаг изменения */
  protected change: boolean = false
  /** Unidentified selection data/ Данные неопознанного выделения */
  protected unidentified?: MaskEventSelection

  /**
   * Constructor
   * @param buffer object for managing cached input data/ объект управления кешированными вводимыми данными
   * @param focus object for handling input field focus/ объект для работы с фокусировкой поля ввода
   * @param characterLength object for managing input length/ объект управления длиной ввода
   * @param right object for right alignment/ объект для выравнивания направо
   * @param selection object for managing cursor position/ объект для управления положением курсора
   * @param valueBasic object for working with base values/ объект для работы с базовыми значениями
   * @param emit object for handling callback events/ объект для работы с обратными событиями
   * @param data object for managing input/ объект для управления вводом
   */
  constructor(
    protected readonly buffer: MaskBuffer,
    protected readonly focus: MaskFocus,
    protected readonly characterLength: MaskCharacterLength,
    protected readonly right: MaskRight,
    protected readonly selection: MaskSelection,
    protected readonly valueBasic: MaskValueBasic,
    protected readonly emit: MaskEmit,
    protected readonly data: MaskData
  ) {}

  /**
   * Capture of the event in focus.
   *
   * Перехват события при получении фокуса.
   * @param event event object/ объект события
   */
  readonly onFocus = (event: FocusEvent): void => {
    this.change = false
    this.focus.in()

    this.emit
      .set('focus', event)
      .go()
  }

  /**
   * Capture of the event when focus is lost.
   *
   * Перехват события при потере фокуса.
   * @param event event object/ объект события
   */
  readonly onBlur = (event: FocusEvent): void => {
    if (this.change) {
      this.emit
        .setType('change')
        .go()
    }

    this.focus.out()
    this.emit
      .set('blur', event)
      .go()
  }

  /**
   * Intercepting key press to get a character.
   *
   * Перехват нажатия клавиши для получения символа.
   * @param event invoked event/ вызываемое событие
   */
  readonly onKeydown = (event: KeyboardEvent): void => {
    const info = this.getSelectionInfo(event)
    const { start, end } = info

    this.emit
      .set('keydown', event)
      .go()

    if (this.isMetaKey(event)) {
      return undefined
    }

    if (this.isKey(event)) {
      if (event.key === 'Backspace') {
        if (start > 0 || start !== end) {
          this.data.pop(start, end)
        }
      } else if (event.key.length <= 1) {
        if (start === end) {
          if (this.buffer.go(event.key)) {
            this.data.add(start, event.key)
          }
        } else {
          this.buffer.goStart()
          this.data
            .pop(start, end)
            .add(this.selection.getShift(), event.key)
        }
      }
    } else {
      this.unidentified = info
    }
  }

  /**
   * Intercept key release to check arrow presses.
   *
   * Перехват отпускания клавиши для проверки нажатия стрелок.
   * @param event invoked event/ вызываемое событие
   */
  readonly onKeyup = (event: KeyboardEvent): void => {
    this.emit
      .set('keyup', event)
      .go()

    if (this.isMetaKey(event)) {
      return undefined
    }

    if (
      this.isKey(event)
      && [
        'ArrowUp',
        'ArrowRight',
        'ArrowDown',
        'ArrowLeft'
      ].indexOf(event.key) >= 0
    ) {
      this.makeToEnd(event)
      this.makeToStart(event)
    }
  }

  /**
   * Intercepting the event before data modification.
   *
   * Перехват события перед изменением данных.
   * @param event invoked event/ вызываемое событие
   */
  readonly onBeforeinput = (event: InputEvent): void => {
    this.emit
      .set('beforeinput', event)
      .go()

    if (!this.unidentified) {
      this.makeChange(event)
      eventStopPropagation(event)
    }
  }

  /**
   * Intercepting the event during data modification.
   *
   * Перехват события при изменении данных.
   * @param event invoked event/ вызываемое событие
   */
  readonly onInput = (event: InputEvent): void => {
    if (this.unidentified) {
      const target = event.target as HTMLInputElement

      if (
        this.unidentified.length > target.value.length
        || this.unidentified.start !== this.unidentified.end
      ) {
        this.data.pop(this.unidentified.start, this.unidentified.end)
      }

      if ('data' in event) {
        if (
          event.data
          && this.buffer.go(event.data)
        ) {
          this.data.add(this.unidentified.start, event.data)
        }
      } else {
        this.data.reset(target.value)
      }

      this.makeChange(event)
      this.unidentified = undefined
    }
  }

  /**
   * Intercept paste event for inserting data from clipboard.
   *
   * Перехват события вставки данных из буфера обмена.
   * @param event invoked event/ вызываемое событие
   */
  readonly onPaste = (event: ClipboardEvent): void => {
    const { start, end } = this.getSelectionInfo(event)

    getClipboardData(event)
      .then((data) => {
        const text = data.split('')

        if (start === end) {
          this.data.add(start, this.data.extra(text))
        } else {
          this.data
            .pop(start, end)
            .add(this.selection.getShift(), this.data.extra(text))
        }

        this.change = true
        this.emit
          .set('paste', event)
          .go()
      })
      .catch(error => console.error('getClipboardData', error))
  }

  /**
   * Intercept change event (autocomplete support).
   *
   * Перехват события изменения (поддержка автозаполнения).
   * @param event invoked event/ вызываемое событие
   */
  readonly onChange = (event: Event): void => {
    const target = event.target as HTMLInputElement

    this.data.reset(target.value)
    this.emit
      .set('change', event)
      .go()
  }

  /**
   * Intercept click to adjust selection if needed.
   *
   * Перехват клика для корректировки выделения при необходимости.
   * @param event invoked event/ вызываемое событие
   */
  readonly onClick = (event: MouseEvent): void => {
    this.makeToEnd(event)
    this.makeToStart(event)
  }

  /**
   * Was a meta button pressed.
   *
   * Была ли нажата мета-кнопка.
   * @param event invoked event/ вызываемое событие
   */
  protected isMetaKey(event: KeyboardEvent): boolean {
    return event.metaKey || event.altKey || event.ctrlKey
  }

  /**
   * Checks key value in the event.
   *
   * Проверяет значение key в событии.
   * @param event invoked event/ вызываемое событие
   */
  protected isKey(event: KeyboardEvent): boolean {
    return 'key' in event && event.key !== 'Unidentified'
  }

  /**
   * Getting data about selection on the event element.
   *
   * Получение данных о выделении у элемента события.
   * @param event invoked event/ вызываемое событие
   */
  protected getSelectionInfo(event: Event): MaskEventSelection {
    const target = event.target as HTMLInputElement

    return {
      target,
      start: target.selectionStart ?? 0,
      end: target.selectionEnd ?? 0,
      length: target.value.length
    }
  }

  /**
   * Preparing to send an event.
   *
   * Подготовка для отправки события.
   * @param event invoked event/ вызываемое событие
   */
  protected makeChange(event: Event): void {
    this.change = true

    this.emit.set('input', event)

    if (this.buffer.is()) {
      return
    }

    this.emit.go()
    this.emit.resetType()
  }

  /**
   * Changes cursor position if alignment is right.
   *
   * Изменяет позицию курсора, если выравнивание справа.
   * @param event invoked event/ вызываемое событие
   */
  protected makeToEnd(event: Event): void {
    if (this.right.isRight()) {
      const length = this.valueBasic.getLength()
      const { target, start, end } = this.getSelectionInfo(event)

      if (start > length) {
        target.selectionStart = length
      }

      if (end > length) {
        target.selectionEnd = length
      }
    }
  }

  /**
   * Check selection from the start (before special chars).
   *
   * Проверка выделения спереди (перед спецсимволами).
   * @param event invoked event/ вызываемое событие
   */
  protected makeToStart(event: Event): void {
    const selection = this.selection.getFirst()
    const { target, start } = this.getSelectionInfo(event)

    if (start < selection) {
      target.selectionStart = selection
      target.selectionEnd = selection
    }
  }
}

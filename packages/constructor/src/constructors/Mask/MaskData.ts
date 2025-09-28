import type { Ref } from 'vue'
import { isFilled, toArray } from '@dxtmisha/functional'

import { MaskType } from './MaskType'
import { MaskBuffer } from './MaskBuffer'
import { MaskFocus } from './MaskFocus'
import { MaskRubberTransition } from './MaskRubberTransition'
import { MaskDate } from './MaskDate'
import { MaskSpecial } from './MaskSpecial'
import { MaskMatch } from './MaskMatch'
import { MaskRubber } from './MaskRubber'
import { MaskItem } from './MaskItem'
import { MaskSelection } from './MaskSelection'
import { MaskCharacter } from './MaskCharacter'
import { MaskValueBasic } from './MaskValueBasic'
import { MaskValue } from './MaskValue'
import { MaskEmit } from './MaskEmit'

import type { MaskElementInput } from './basicTypes'

/**
 * Class for working with input behavior (data entering flow)
 *
 * Класс для работы с поведением при вводе данных
 */
export class MaskData {
  /**
   * Constructor
   * @param type object for working with the mask type/ объект для работы с типом маски
   * @param buffer object for managing cached input data/ объект управления кешированными вводимыми данными
   * @param focus object for handling input field focus/ объект для работы с фокусом поля ввода
   * @param rubberTransition object for managing the transition character/ объект для управления символом перехода
   * @param date object for working with date types/ объект для работы с типом даты
   * @param special object for working with special characters/ объект для работы со специальными символами
   * @param match object for managing the input character match logic/ объект для управления совпадением символов ввода
   * @param rubber object for working with rubber types/ объект для работы с резиновыми типами
   * @param mask object for managing masks/ объект управления маской
   * @param selection object for managing caret position/ объект для управления положением курсора
   * @param character object for managing entered characters/ объект для управления введёнными символами
   * @param valueBasic object for working with base values/ объект для работы с базовыми значениями
   * @param value object for working with transformed value/ объект для работы с преобразованным значением
   * @param emit object for handling callback events/ объект для работы с событиями
   * @param element input element ref/ ссылка на элемент ввода
   */
  constructor(
    protected readonly type: MaskType,
    protected readonly buffer: MaskBuffer,
    protected readonly focus: MaskFocus,
    protected readonly rubberTransition: MaskRubberTransition,
    protected readonly date: MaskDate,
    protected readonly special: MaskSpecial,
    protected readonly match: MaskMatch,
    protected readonly rubber: MaskRubber,
    protected readonly mask: MaskItem,
    protected readonly selection: MaskSelection,
    protected readonly character: MaskCharacter,
    protected readonly valueBasic: MaskValueBasic,
    protected readonly value: MaskValue,
    protected readonly emit: MaskEmit,
    protected readonly element: Ref<MaskElementInput>
  ) {
  }

  /**
   * Adds new characters entered by user
   *
   * Добавляет новые символы, вводимые пользователем
   * @param selection selected key index/ индекс выделенного ключа
   * @param chars list of characters (string or array)/ список вводимых символов
   * @param focus is element focused/ элемент в фокусе ли
   * @returns was value updated/ было ли обновлено значение
   */
  add(
    selection: number,
    chars: string | string[],
    focus = true
  ): boolean {
    let update = false

    this.selection.setByMask(selection, focus)
    this.rubberTransition.reset()

    toArray(chars).forEach((char) => {
      const groupName = this.character.getFocus()
      const immediate = this.character.getImmediate()

      this.selection.setShift(
        this.rubber.update(this.value.info.value, immediate, char)
      )

      if (this.rubberTransition.is()) {
        this.selection.setByMask(
          this.mask.getByChar(
            this.rubberTransition.item.value,
            this.selection.getImmediate()
          ) + 1,
          focus
        )
      }

      if (this.match.is(char, groupName)) {
        this.character.shift()

        if (
          this.character.getFocus() && (
            this.mask.maxLength.value > this.valueBasic.getLength()
            || this.character.isCharDelete()
          )
        ) {
          this.character.add(char)
          update = true
        }
      }
    })

    this.goSelection()
    return update
  }

  /**
   * Removes (deletes) selected input characters
   *
   * Удаляет выделенные символы ввода
   * @param start start selection index/ индекс начала выделения
   * @param end end selection index/ индекс конца выделения
   * @param focus is element focused/ элемент в фокусе ли
   */
  pop(
    start: number,
    end: number = start,
    focus = true
  ): this {
    if (
      start >= 0
      && end <= this.mask.maxLength.value
    ) {
      let quantity = this.mask.getQuantity(start, end)

      if (focus) {
        this.selection.setByMask(end)
      }

      while (quantity--) {
        this.rubberTransition.reset()

        this.character.pop()
        this.character.shift(0)

        this.selection.setShift(
          this.rubber.pop(this.character.getFocus())
        )
      }

      this.goSelection()
    }

    return this
  }

  /**
   * Resets all values or applies provided value
   *
   * Сбрасывает все значения или применяет переданное
   * @param value new raw value to apply/ новое значение для применения
   */
  reset(value = ''): this {
    this.character.reset()
    this.rubber.reset()

    if (isFilled(value)) {
      const chars = this.type.isDate() ? this.date.getValue(value) : value
      this.add(0, this.extra(chars.split('')))
    }

    return this
  }

  /**
   * Removes redundant characters for paste operation
   *
   * Удаляет лишние символы при вставке
   * @param chars characters to insert/ вставляемые символы
   */
  extra(chars: string[]): string[] {
    if (this.character.is()) {
      return chars
    }

    const list = this.mask.item.value
    const data: string[] = [...chars]

    let match = this.match.get(this.mask.info.value?.[0]?.char)
    let key = 0

    if (match) {
      for (const index in list) {
        const maskChar = list[index]
        if (maskChar) {
          if (this.special.isSpecial(maskChar)) {
            for (let indexChar = key; indexChar < data.length; indexChar++) {
              key++

              if (data?.[indexChar]?.match(match)) {
                break
              }
            }

            match = this.match.get(maskChar)
          } else if (maskChar.match(match)) {
            let exit = false

            for (let indexChar = key; indexChar < data.length; indexChar++) {
              const dataChar = data[indexChar]

              key++

              if (dataChar?.match(match)) {
                if (maskChar === dataChar) {
                  data.splice(indexChar, 1)
                  key--
                } else {
                  exit = true
                }

                break
              }
            }

            if (exit) {
              break
            }
          }
        }
      }
    }

    return data
  }

  /**
   * Restores caret (selection) position
   *
   * Восстанавливает позицию курсора (выделения)
   * @param updateBuffer update from buffer first/ сначала обновить из буфера
   */
  goSelection(updateBuffer = true): this {
    if (this.focus.is()) {
      requestAnimationFrame(() => {
        if (
          this.element.value && (
            !updateBuffer
            || !this.goBuffer()
          )
        ) {
          const length = this.valueBasic.getLength()
          const shift = this.selection.getShift()
          const newSelection = length < shift ? length : shift

          this.element.value.selectionEnd = newSelection
          this.element.value.selectionStart = newSelection
        }
      })
    }

    return this
  }

  /**
   * Processes buffered data if present and emits events
   *
   * Обрабатывает данные из буфера (если есть) и вызывает события
   * @returns was buffer consumed/ был ли использован буфер
   */
  protected goBuffer(): boolean {
    if (this.buffer.is()) {
      this.add(this.selection.getShift(), this.buffer.get())
      this.buffer.resetChars()

      return true
    }

    this.buffer.reset()
    this.emit.go()

    return false
  }
}

import {
  type ConstrBind,
  type ConstrItems,
  DesignLogicAbstract
} from '@dxtmisha/functional'

import { TextareaAutosizeResize } from './TextareaAutosizeResize'
import { TextareaAutosizeValue } from './TextareaAutosizeValue'

import type { TextareaAutosizeProps } from './props'
import type {
  TextareaAutosizeComponents,
  TextareaAutosizeEmits,
  TextareaAutosizeSlots
} from './types'

/** TextareaAutosize dependency constructors type / Тип конструкторов зависимостей TextareaAutosize */
export type TextareaAutosizeConstructors = {
  /** Resize handler constructor / Конструктор обработчика изменения размера */
  resize: typeof TextareaAutosizeResize
  /** Value handler constructor / Конструктор обработчика значения */
  value: typeof TextareaAutosizeValue
}

/**
 * Base TextareaAutosize logic orchestrator class.
 * Coordinates reactive value state and lazy autosize height measurement mechanics.
 *
 * Базовый класс-оркестратор логики TextareaAutosize.
 * Координирует реактивное состояние значения и ленивую механику автоматического расчёта высоты.
 */
export class TextareaAutosize extends DesignLogicAbstract<
  HTMLTextAreaElement,
  TextareaAutosizeComponents,
  TextareaAutosizeEmits,
  TextareaAutosizeSlots,
  TextareaAutosizeProps,
  TextareaAutosizeConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<TextareaAutosizeConstructors> = {
    resize: {
      item: TextareaAutosizeResize,
      canCreate: () => TextareaAutosizeResize.is(this.props),
      conditions: () => TextareaAutosizeResize.is(this.props),
      parameters: () => [
        this.props,
        this.element,
        () => this.i('value')
      ]
    },
    value: {
      item: TextareaAutosizeValue,
      parameters: () => [
        this.props,
        this.emits
      ]
    }
  }

  /**
   * Returns dynamic bindings for the textarea element.
   *
   * Возвращает динамические привязки для элемента textarea.
   * @returns textarea element bindings / привязки элемента textarea
   */
  get binds(): ConstrBind {
    return {
      value: this.i('value').item.value,
      onFocus: this.onFocus,
      onInput: this.onInput
    }
  }

  /**
   * Returns the current textarea string value.
   *
   * Возвращает текущее строковое значение textarea.
   * @returns current text value / текущее текстовое значение
   */
  getValue(): string {
    return this.i('value').item.value
  }

  /**
   * Handles focus event by refreshing autosize measurements when enabled.
   *
   * Обрабатывает событие фокуса, обновляя расчёт авторазмера при его включении.
   */
  readonly onFocus = (): void => {
    this.callInstance('resize', item => item.on())
  }

  /**
   * Handles input event by updating value state and refreshing autosize measurements when enabled.
   *
   * Обрабатывает событие ввода, обновляя состояние значения и расчёт авторазмера при его включении.
   * @param event invoked input event / вызываемое событие ввода
   */
  readonly onInput = (event: InputEvent): void => {
    this.i('value').on(event)
    this.callInstance('resize', item => item.on())
  }
}

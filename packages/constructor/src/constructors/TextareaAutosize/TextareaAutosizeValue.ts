// ai-none

import { ref, watch } from 'vue'
import { type ConstrEmit, DesignLifecycleAbstract } from '@dxtmisha/functional'

import type { TextareaAutosizeProps } from './props'
import type { TextareaAutosizeEmits } from './types'

/**
 * Class for managing the reactive text value of the textarea component.
 * Synchronizes internal state with the incoming `value` prop and dispatches `input` events on changes.
 *
 * Класс для управления реактивным текстовым значением компонента textarea.
 * Синхронизирует внутреннее состояние с входящим свойством `value` и генерирует события `input` при изменениях.
 */
export class TextareaAutosizeValue extends DesignLifecycleAbstract {
  /** Watcher stop handle / Функция остановки наблюдателя */
  protected stopWatch?: () => void

  /**
   * Constructor for TextareaAutosizeValue.
   *
   * Конструктор для TextareaAutosizeValue.
   * @param props input data / входные данные
   * @param emits event emitter callback / функция вызова событий
   */
  constructor(
    protected readonly props: Readonly<TextareaAutosizeProps>,
    protected readonly emits?: ConstrEmit<TextareaAutosizeEmits>
  ) {
    super()
    this.set(this.props.value)
  }

  /** Reactive current text value / Реактивное текущее текстовое значение */
  readonly item = ref<string>('')

  /** Callback after component mounting / Обработчик после монтирования компонента */
  override readonly onMounted = (): void => {
    this.stopWatch?.()
    this.set(this.props.value)

    this.stopWatch = watch(
      () => this.props.value,
      () => this.set(this.props.value)
    )
  }

  /** Callback after component unmounting / Обработчик после демонтирования компонента */
  override readonly onUnmounted = (): void => {
    this.stopWatch?.()
    this.stopWatch = undefined
  }

  /**
   * Updates the stored text value if it differs from the current one.
   *
   * Обновляет сохранённое текстовое значение, если оно отличается от текущего.
   * @param value new text value / новое текстовое значение
   * @returns true if the value changed / true, если значение изменилось
   */
  set(value?: string): boolean {
    if (this.isDifference(value)) {
      this.item.value = value ?? ''
      return true
    }

    return false
  }

  /**
   * Handles native input events and emits `input` when the value changes.
   *
   * Обрабатывает нативные события ввода и генерирует событие `input` при изменении значения.
   * @param event invoked input event / вызываемое событие ввода
   */
  on(event: InputEvent): void {
    const target = event.target as HTMLTextAreaElement | null

    if (
      target
      && this.set(target.value)
    ) {
      this.emits?.('input', event)
    }
  }

  /**
   * Checks whether the normalized candidate value differs from the stored value.
   *
   * Проверяет, отличается ли нормализованное новое значение от сохранённого.
   * @param value candidate text value / проверяемое текстовое значение
   * @returns true if the value differs / true, если значение отличается
   */
  protected isDifference(value?: string): boolean {
    return this.item.value !== (value ?? '')
  }
}

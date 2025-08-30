import { computed, ref } from 'vue'
import { isFilled } from '@dxt-ui/functional'

import type { ListProps } from './props'

/**
 * Class for working with search.
 *
 * Класс для работы с поиском.
 */
export class ListSearch {
  readonly item = ref<string>()

  protected timeout?: any

  /**
   * Constructor
   * @param props input data/ входные данные
   */
  constructor(
    protected readonly props: ListProps
  ) {
  }

  /** Current search string/ Текущая строка поиска */
  readonly highlight = computed<string | undefined>(() => this.item.value ?? this.props.highlight)

  /**
   * Adds a new character to the search.
   *
   * Добавляет новый символ к поиску.
   * @param char new character/ новый символ
   */
  add(char: string) {
    this.addChar(char)
      .makeReset()
  }

  /**
   * Sets the search string.
   *
   * Устанавливает строку поиска.
   * @param value new value/ новое значение
   */
  set(value?: string) {
    const data = this.getValue(value)

    if (this.item.value !== data) {
      this.item.value = data
    }
  }

  /**
   * Resets the search string.
   *
   * Сбрасывает строку поиска.
   */
  reset(): this {
    this.set()
    return this
  }

  /**
   * Returns a processed value.
   *
   * Возвращает обработанное значение.
   * @param value source value/ исходное значение
   */
  protected getValue(value?: string): string | undefined {
    if (isFilled(value)) {
      return value.trim()
    }

    return undefined
  }

  /**
   * Appends a character to the search string.
   *
   * Добавляет символ к строке поиска.
   * @param char new character/ новый символ
   */
  protected addChar(char: string): this {
    if (
      this.item.value
      && this.timeout
    ) {
      this.item.value += char
    } else {
      this.item.value = char
    }

    return this
  }

  /**
   * Schedules reset to the initial state after a delay.
   *
   * Планирует сброс к исходному состоянию после задержки.
   */
  protected makeReset(): this {
    if (this.timeout) {
      clearTimeout(this.timeout)
    }

    this.timeout = setTimeout(
      () => (this.timeout = undefined),
      2000
    )

    return this
  }
}

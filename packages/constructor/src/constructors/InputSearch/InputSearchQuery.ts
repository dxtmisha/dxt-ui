import { onUnmounted, ref } from 'vue'

import { FieldEventInclude } from '../../classes/Field/FieldEventInclude'
import { FieldValueInclude } from '../../classes/Field/FieldValueInclude'

import type { InputSearchProps } from './props'

/**
 * Class for managing search input queries, debouncing, and search lifecycle.
 *
 * Класс для управления поисковыми запросами ввода, задержкой debounce и жизненным циклом поиска.
 */
export class InputSearchQuery {
  /** Search debounce loading status / Статус ожидания задержки поиска */
  readonly loading = ref<boolean>(false)

  /** Active delay timer identifier / Идентификатор активного таймера задержки */
  protected timer: ReturnType<typeof setTimeout> | undefined = undefined

  /** Cached input event / Кэшированное событие ввода */
  protected eventItem?: InputEvent = undefined

  /** Cached input data / Кэшированные данные ввода */
  protected data?: Record<string, any> = undefined

  /**
   * Constructor
   *
   * Конструктор
   * @param props input data / входные данные
   * @param value object for working with values / объект для работы со значениями
   * @param event object for working with field events / объект для работы с событиями поля
   */
  constructor(
    protected readonly props: InputSearchProps,
    protected readonly value: FieldValueInclude<string>,
    protected readonly event: FieldEventInclude
  ) {
    onUnmounted(() => {
      this.stopTimer()
    })
  }

  /**
   * Triggering the change event after losing focus or committing value.
   *
   * Вызов события изменения после потери фокуса или подтверждения значения.
   * @param event event object / объект события
   */
  readonly onChange = (event?: InputEvent | Event): void => {
    if (this.timer !== undefined) {
      this.emitInput()
    }

    this.event.onChange(event)
  }

  /**
   * Triggering the event to delete all values and reset search.
   *
   * Вызов события для удаления всех значений и сброса поиска.
   * @param event event object / объект события
   */
  readonly onClear = (event?: MouseEvent): void => {
    this.stopTimer()
    this.event.onClear(event)
  }

  /**
   * Input event handler for typing in search field with debouncing.
   *
   * Обработчик события ввода текста в поле поиска с задержкой debounce.
   * @param event event object / объект события
   * @param data object with custom data / объект с пользовательскими данными
   */
  readonly onInput = (
    event: InputEvent,
    data?: Record<string, any>
  ): void => {
    this.stopTimer()

    const value = this.getValue(event, data)
    const min = this.getMinQuery()

    if (
      value.length === 0
      || value.length >= min
    ) {
      const delay = this.getDelay()

      if (delay > 0) {
        this.eventItem = event
        this.data = data
        this.loading.value = true
        this.timer = setTimeout(this.emitInput, delay)
      } else {
        this.event.onInput(event, data)
      }
    }
  }

  /**
   * Keydown event handler for immediate search on Enter key.
   *
   * Обработчик события нажатия клавиш для немедленного поиска по нажатию Enter.
   * @param event keyboard event object / объект события клавиатуры
   */
  readonly onKeydown = (event: KeyboardEvent): void => {
    if (
      event.key === 'Enter'
      && this.timer !== undefined
    ) {
      this.emitInput()
    }
  }

  /**
   * Stops the active search delay timer and clears cached event data.
   *
   * Остановка активного таймера задержки поиска и очистка кэшированных данных события.
   */
  readonly stopTimer = (): void => {
    if (this.timer !== undefined) {
      clearTimeout(this.timer)
      this.timer = undefined
      this.loading.value = false
      this.eventItem = undefined
      this.data = undefined
    }
  }

  /**
   * Returns the search input debounce delay.
   *
   * Возвращает задержку debounce для ввода поиска.
   * @returns debounce delay in milliseconds / задержка debounce в миллисекундах
   */
  protected getDelay(): number {
    return Number(this.props.delay ?? 0)
  }

  /**
   * Returns the minimum query length to trigger search.
   *
   * Возвращает минимальную длину запроса для запуска поиска.
   * @returns minimum query length / минимальная длина запроса
   */
  protected getMinQuery(): number {
    return Number(this.props.minQuery ?? 0)
  }

  /**
   * Returns the input value from event or data object.
   *
   * Возвращает значение ввода из объекта события или данных.
   * @param event event object / объект события
   * @param data object with custom data / объект с пользовательскими данными
   * @returns extracted string value / извлеченное строковое значение
   */
  protected getValue(
    event?: InputEvent,
    data?: Record<string, any>
  ): string {
    return String(data?.value ?? (event?.target as HTMLInputElement)?.value ?? '')
  }

  /**
   * Emits the pending input event and clears cached data.
   *
   * Вызывает отложенное событие ввода и очищает кэшированные данные.
   */
  protected readonly emitInput = (): void => {
    if (this.eventItem) {
      const event = this.eventItem
      const data = this.data

      this.stopTimer()
      this.event.onInput(event, data)
    }
  }
}

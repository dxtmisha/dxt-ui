// ai-none

import type { ConstrEmit } from '@dxtmisha/functional'

import type { EventClickInclude } from '../../classes/EventClickInclude'
import type { ModelInclude } from '../../classes/ModelInclude'

import type { EventClickValue } from '../../types/eventClickTypes'
import type { PaginationPage } from './PaginationPage'
import type { PaginationEmits } from './types'

/** Default numeric fallback for page and rows events / Числовое значение по умолчанию для событий страницы и строк */
const DEFAULT_EVENT_NUMBER = 1

/**
 * Class for managing event handlers of the pagination component.
 * Routes click events to show-more loaders, rows-per-page updates, page selection models, and standard click emitters.
 *
 * Класс для управления обработчиками событий компонента пагинации.
 * Маршрутизирует события клика к кнопкам подгрузки, обновлению количества строк, моделям выбора страницы и стандартным кликам.
 */
export class PaginationEvent {
  /**
   * Constructor for PaginationEvent.
   *
   * Конструктор для PaginationEvent.
   * @param event lazy getter for click event control / ленивый геттер управления событием клика
   * @param modelRows lazy getter for model rows synchronizer / ленивый геттер синхронизатора строк модели
   * @param modelValue lazy getter for model value synchronizer / ленивый геттер синхронизатора значения модели
   * @param page lazy getter for page state manager / ленивый геттер менеджера состояния страниц
   * @param emits callback for event emitter / функция для генерации событий
   */
  constructor(
    protected readonly event: () => EventClickInclude,
    protected readonly modelRows: () => ModelInclude<number>,
    protected readonly modelValue: () => ModelInclude<number>,
    protected readonly page: () => PaginationPage,
    protected readonly emits?: ConstrEmit<PaginationEmits>
  ) {
  }

  /**
   * General click event handler.
   *
   * Общий обработчик события клика.
   * @param event native click event / нативное событие клика
   * @param options parameters including target type and value / параметры, содержащие целевой тип и значение
   */
  readonly onClick = (
    event: MouseEvent,
    options?: EventClickValue
  ): void => {
    switch (options?.type) {
      case 'more':
        this.onMore(event, options)
        break
      case 'morePrev':
        this.onMorePrev(event, options)
        break
      case 'rows': {
        const rows = this.toPositiveNumber(options.value)

        this.onRows(event, options)
        this.page().setRows(rows)
        this.modelRows().emit(rows)
        break
      }
      default: {
        const value = this.toPositiveNumber(options?.value)

        this.page().setValue(value)
        this.modelValue().emit(value)
        break
      }
    }

    this.event().onClick(event, options)
  }

  /**
   * Event handler triggered on clicking the "Show more" button loader.
   *
   * Обработчик событий клика по кнопке подгрузки следующей страницы («Показать еще»).
   * @param event native click event / нативное событие клика
   * @param options parameters including target value / параметры, содержащие целевое значение страницы
   */
  readonly onMore = (
    event: MouseEvent,
    options?: EventClickValue
  ): void => {
    this.emits?.('more', event, options)
    this.emits?.('moreLite', options)
  }

  /**
   * Event handler triggered on clicking the "Show previous" button loader.
   *
   * Обработчик событий клика по кнопке подгрузки предыдущей страницы («Показать предыдущие»).
   * @param event native click event / нативное событие клика
   * @param options parameters including target value / параметры, содержащие целевое значение страницы
   */
  readonly onMorePrev = (
    event: MouseEvent,
    options?: EventClickValue
  ): void => {
    this.emits?.('morePrev', event, options)
    this.emits?.('morePrevLite', options)
  }

  /**
   * Event handler triggered on clicking the "Rows per page" select.
   *
   * Обработчик событий клика по выпадающему списку количества строк на странице.
   * @param event native click event / нативное событие клика
   * @param options parameters including target value / параметры, содержащие целевое значение количества строк
   */
  readonly onRows = (
    event: MouseEvent,
    options?: EventClickValue
  ): void => {
    this.emits?.('rows', event, options)
    this.emits?.('rowsLite', options)
  }

  /**
   * Normalizes an arbitrary event option value into a positive integer (>= 1).
   *
   * Нормализует произвольное значение параметра события к положительному целому числу (>= 1).
   * @param value raw event option value / исходное значение параметра события
   * @returns positive integer page or rows count / положительное целое число страницы или строк
   */
  protected toPositiveNumber(value: unknown): number {
    if (
      typeof value !== 'number'
      && typeof value !== 'string'
    ) {
      return DEFAULT_EVENT_NUMBER
    }

    if (typeof value === 'string' && value.trim() === '') {
      return DEFAULT_EVENT_NUMBER
    }

    const numeric = Number(value)

    if (Number.isFinite(numeric) && numeric >= 1) {
      return Math.floor(numeric)
    }

    return DEFAULT_EVENT_NUMBER
  }
}

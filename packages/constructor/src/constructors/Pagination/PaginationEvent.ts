import { type ConstrEmit } from '@dxtmisha/functional'

import { type EventClickInclude } from '../../classes/EventClickInclude'
import { type ModelInclude } from '../../classes/ModelInclude'

import type { EventClickValue } from '../../types/eventClickTypes'
import type { PaginationEmits } from './types'
import type { PaginationProps } from './props'

/**
 * Class for managing event handlers of the pagination component.
 *
 * Класс для управления обработчиками событий компонента пагинации.
 */
export class PaginationEvent {
  /**
   * Constructor for PaginationEvent.
   *
   * Конструктор для PaginationEvent.
   * @param props input properties / входные свойства
   * @param event click event control instance / экземпляр управления событием клика
   * @param emits callback for event emitter / функция для генерации событий
   * @param modelValue model value synchronizer / синхронизатор значения модели
   * @param modelRows model rows synchronizer / синхронизатор строк модели
   */
  constructor(
    protected readonly props: PaginationProps,
    protected readonly event: EventClickInclude,
    protected readonly emits?: ConstrEmit<PaginationEmits>,
    protected readonly modelValue?: ModelInclude<number>,
    protected readonly modelRows?: ModelInclude<number>
  ) {
  }

  /**
   * General click event handler.
   *
   * Общий обработчик события клика.
   * @param event native click event / нативное событие клика
   * @param options parameters including target value / параметры, содержащие целевое значение страницы
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
      case 'rows':
        this.onRows(event, options)
        this.modelRows?.emit(options?.value ?? 1)
        break
      default:
        this.modelValue?.emit(options?.value ?? 1)
        break
    }

    this.event.onClick(event, options)
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
}

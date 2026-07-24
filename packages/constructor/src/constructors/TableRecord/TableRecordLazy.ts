import { type Ref } from 'vue'
import {
  type ConstrClassObject,
  type ConstrStyles,
  isNumber,
  useLazyItemByMarginRef
} from '@dxtmisha/functional'

import { ClientOnlyInclude } from '../../classes/ClientOnlyInclude'

import type { TableRecordProps } from './props'

/**
 * Class representing the lazy loading handler for a table record (TableRecordLazy).
 * Manages visibility detection, deferred rendering, and default dimensions for table record rows.
 *
 * Класс, представляющий обработчик ленивой загрузки для записи таблицы (TableRecordLazy).
 * Управляет определением видимости, отложенным рендерингом и размерами по умолчанию для строк записи таблицы.
 */
export class TableRecordLazy {
  /** Lazy item tracking instance / Экземпляр отслеживания ленивого элемента */
  readonly lazyItem: ReturnType<typeof useLazyItemByMarginRef>

  /**
   * Constructor
   * @param props input properties / входные свойства
   * @param element target HTML element reference / ссылка на целевой HTML-элемент
   * @param className base CSS class name / базовое имя CSS-класса
   * @param clientOnly client-only rendering handler instance / экземпляр обработчика рендеринга только на клиенте
   */
  constructor(
    protected readonly props: TableRecordProps,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly className: string,
    protected readonly clientOnly: ClientOnlyInclude
  ) {
    this.lazyItem = useLazyItemByMarginRef(this.element)
  }

  /**
   * Returns class object for lazy loading states.
   *
   * Возвращает объект классов для состояний ленивой загрузки.
   * @returns classes object / объект классов
   */
  get classes(): ConstrClassObject {
    const isLazy = this.isLazy()
    const isVisible = this.is()

    return {
      [`${this.className}--lazy`]: isLazy,
      [`${this.className}--lazy--visible`]: isLazy && isVisible,
      [`${this.className}--lazy--hidden`]: isLazy && !isVisible
    }
  }

  /**
   * Returns styles for the table record row.
   *
   * Возвращает стили для строки записи таблицы.
   * @returns styles object / объект стилей
   */
  get styles(): ConstrStyles {
    const minHeight = this.getMinHeight()

    if (minHeight) {
      return {
        [`--${this.className}-sys-minHeight`]: minHeight
      }
    }

    return {}
  }

  /**
   * Returns whether lazy loading mode is enabled for the record.
   *
   * Возвращает, включен ли режим ленивой загрузки для записи.
   * @returns true if lazy loading mode is enabled / true, если режим ленивой загрузки включен
   */
  isLazy(): boolean {
    return Boolean(this.props.lazy) && !this.props.isHeader
  }

  /**
   * Returns whether row elements should be rendered based on visibility and client mounting.
   *
   * Возвращает, должны ли элементы строки рендериться на основе видимости и монтирования на клиенте.
   * @returns true if elements should be rendered / true, если элементы должны рендериться
   */
  is(): boolean {
    if (!this.isLazy()) {
      return true
    }

    if (!this.clientOnly.isMounted.value) {
      return true
    }

    return Boolean(this.lazyItem.lazyItemStatus.value)
  }

  /**
   * Returns calculated min-height CSS value.
   *
   * Возвращает рассчитанное значение CSS min-height.
   * @returns min-height CSS string value or undefined / строковое значение CSS min-height или undefined
   */
  protected getMinHeight(): string | undefined {
    const defaultHeight = this.props.defaultHeight

    if (defaultHeight === undefined) {
      return undefined
    }

    if (isNumber(defaultHeight)) {
      return `${this.props.defaultHeight}px`
    }

    return String(this.props.defaultHeight)
  }
}

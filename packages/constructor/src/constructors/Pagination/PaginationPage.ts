// ai-none

import { computed, ref, watch, type WatchStopHandle } from 'vue'
import { DesignLifecycleAbstract } from '@dxtmisha/functional'

import type { TextInclude } from '../../classes/TextInclude'
import type { PaginationProps } from './props'

/** Default page number and minimum rows per page / Номер страницы и минимальное количество строк по умолчанию */
const DEFAULT_PAGE_VALUE = 1

/** Default number of visible page buttons / Количество отображаемых кнопок страниц по умолчанию */
const DEFAULT_VISIBLE = 3

/** Default number of boundary page buttons / Количество граничных кнопок страниц по умолчанию */
const DEFAULT_ENDS = 1

/**
 * Class for managing pagination state, page/row normalization, total page count, and formatted range information.
 * Synchronizes reactive page and rows state with incoming props via DesignLifecycleAbstract hooks.
 *
 * Класс для управления состоянием пагинации, нормализацией страниц и строк, общим числом страниц и форматированием диапазона.
 * Синхронизирует реактивное состояние страницы и строк с входными свойствами через хуки DesignLifecycleAbstract.
 */
export class PaginationPage extends DesignLifecycleAbstract {
  /** Stop handle for the reactive rows watcher / Функция остановки реактивного наблюдателя строк */
  protected stopWatchRows?: WatchStopHandle

  /** Stop handle for the reactive value watcher / Функция остановки реактивного наблюдателя страницы */
  protected stopWatchValue?: WatchStopHandle

  /**
   * Constructor for PaginationPage.
   *
   * Конструктор для PaginationPage.
   * @param props input properties / входные свойства
   * @param text lazy getter for text manager / ленивый геттер менеджера текстов
   */
  constructor(
    protected readonly props: Readonly<PaginationProps>,
    protected readonly text: () => TextInclude
  ) {
    super()

    this.updateValue()
    this.updateRows()
  }

  /** Reactive active page number (1-indexed) / Реактивный номер активной страницы (начиная с 1) */
  readonly valueItem = ref<number>(DEFAULT_PAGE_VALUE)

  /** Reactive rows per page count / Реактивное количество строк на странице */
  readonly rowsItem = ref<number>(DEFAULT_PAGE_VALUE)

  /**
   * Returns localized page range information string (e.g. '1-10 of 100').
   *
   * Возвращает локализованную строку информации о диапазоне страниц (например, '1-10 из 100').
   */
  readonly info = computed<string>(() => {
    const text = this.text().info

    if (text) {
      const count = this.count

      if (count <= 0) {
        return text
          .replace('[item]', '0-0')
          .replace('[count]', '0')
      }

      const rows = this.rows
      const max = this.value * rows
      const start = Math.max(1, Math.min(max - rows + 1, count))
      const end = Math.max(start, Math.min(max, count))

      return text
        .replace('[item]', `${start}-${end}`)
        .replace('[count]', count.toString())
    }

    return ''
  })

  /**
   * Returns the total number of items to paginate.
   *
   * Возвращает общее количество элементов для постраничного вывода.
   * @returns non-negative total item count / неотрицательное общее количество элементов
   */
  get count(): number {
    return this.toNonNegativeNumber(this.props.count, 0)
  }

  /**
   * Returns the number of buttons for the first and last pages.
   *
   * Возвращает количество отображаемых кнопок у первой и последней страниц.
   * @returns non-negative number of boundary page buttons / неотрицательное количество граничных кнопок страниц
   */
  get ends(): number {
    return this.toNonNegativeNumber(this.props.ends, DEFAULT_ENDS)
  }

  /**
   * Returns the total number of pages calculated from count and rows.
   *
   * Возвращает общее количество страниц, рассчитанное на основе count и rows.
   * @returns total pages count / общее количество страниц
   */
  get pagesCount(): number {
    return Math.ceil(this.count / this.rows)
  }

  /**
   * Returns the number of items displayed per page.
   *
   * Возвращает количество элементов, отображаемых на одной странице.
   * @returns positive rows per page count / положительное количество строк на странице
   */
  get rows(): number {
    return this.rowsItem.value
  }

  /**
   * Returns the current active page number (1-indexed).
   *
   * Возвращает номер текущей активной страницы (начиная с 1).
   * @returns positive active page number / положительный номер активной страницы
   */
  get value(): number {
    return this.valueItem.value
  }

  /**
   * Returns the number of visible page links.
   *
   * Возвращает количество отображаемых ссылок на страницы.
   * @returns non-negative number of visible page links / неотрицательное количество отображаемых ссылок на страницы
   */
  get visible(): number {
    return this.toNonNegativeNumber(this.props.visible, DEFAULT_VISIBLE)
  }

  /**
   * Sets the current rows per page count after positive integer normalization.
   *
   * Устанавливает текущее количество строк на странице после нормализации к положительному целому числу.
   * @param rows target rows per page count / целевое количество строк на странице
   */
  setRows(rows?: number | string): void {
    this.rowsItem.value = this.toPositiveNumber(rows, DEFAULT_PAGE_VALUE)
  }

  /**
   * Sets the current active page number after positive integer normalization.
   *
   * Устанавливает текущий номер активной страницы после нормализации к положительному целому числу.
   * @param value target page number / целевой номер страницы
   */
  setValue(value?: number | string): void {
    this.valueItem.value = this.toPositiveNumber(value, DEFAULT_PAGE_VALUE)
  }

  /**
   * Registers reactive watchers for value and rows props on mount.
   *
   * Регистрирует реактивные наблюдатели для свойств value и rows при монтировании.
   */
  override readonly onMounted = (): void => {
    this.stopWatchers()
    this.updateValue()
    this.updateRows()

    this.stopWatchValue = watch(
      [
        () => this.props.value,
        () => this.props.modelValue
      ],
      this.updateValue
    )

    this.stopWatchRows = watch(
      [
        () => this.props.rows,
        () => this.props.modelRows
      ],
      this.updateRows
    )
  }

  /**
   * Stops registered reactive watchers on unmount.
   *
   * Останавливает зарегистрированные реактивные наблюдатели при размонтировании.
   */
  override readonly onUnmounted = (): void => {
    this.stopWatchers()
  }

  /**
   * Synchronizes internal rows state from props.
   *
   * Синхронизирует внутреннее состояние количества строк из свойств.
   */
  protected readonly updateRows = (): void => {
    this.setRows(this.props.modelRows ?? this.props.rows)
  }

  /**
   * Synchronizes internal page value state from props.
   *
   * Синхронизирует внутреннее состояние номера страницы из свойств.
   */
  protected readonly updateValue = (): void => {
    this.setValue(this.props.modelValue ?? this.props.value)
  }

  /**
   * Stops both active reactive watchers if registered.
   *
   * Останавливает оба активных реактивных наблюдателя, если они зарегистрированы.
   */
  protected stopWatchers(): void {
    this.stopWatchValue?.()
    this.stopWatchValue = undefined

    this.stopWatchRows?.()
    this.stopWatchRows = undefined
  }

  /**
   * Normalizes an input number or numeric string to a non-negative integer with a fallback.
   *
   * Нормализует входное число или числовую строку к неотрицательному целому числу со значением по умолчанию.
   * @param value raw numeric or string input / исходное числовое или строковое значение
   * @param fallback default value when input is empty or invalid / значение по умолчанию при пустом или некорректном вводе
   * @returns normalized non-negative integer / нормализованное неотрицательное целое число
   */
  protected toNonNegativeNumber(
    value: number | string | undefined,
    fallback: number
  ): number {
    if (
      value === undefined
      || (typeof value === 'string' && value.trim() === '')
    ) {
      return fallback
    }

    const numeric = Number(value)

    if (Number.isFinite(numeric)) {
      return Math.max(0, Math.floor(numeric))
    }

    return fallback
  }

  /**
   * Normalizes an input number or numeric string to a positive integer (>= 1) with a fallback.
   *
   * Нормализует входное число или числовую строку к положительному целому числу (>= 1) со значением по умолчанию.
   * @param value raw numeric or string input / исходное числовое или строковое значение
   * @param fallback default value when input is empty, invalid, or less than 1 / значение по умолчанию при пустом, некорректном или меньшем 1 вводе
   * @returns normalized positive integer / нормализованное положительное целое число
   */
  protected toPositiveNumber(
    value: number | string | undefined,
    fallback: number
  ): number {
    if (
      value === undefined
      || (typeof value === 'string' && value.trim() === '')
    ) {
      return fallback
    }

    const numeric = Number(value)

    if (Number.isFinite(numeric) && numeric >= 1) {
      return Math.floor(numeric)
    }

    return fallback
  }
}

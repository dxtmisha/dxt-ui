// ai-none

import {
  type Ref,
  shallowRef,
  type WatchHandle,
  watch
} from 'vue'
import {
  type ConstrClassObject,
  type ConstrStyles,
  DesignLifecycleAbstract,
  type DesignName,
  isNumber,
  useLazyItemByMarginRef
} from '@dxtmisha/functional'

import type { TableFlexRecordProps } from './props'

/**
 * Class representing the lazy loading handler for a flex table record (TableFlexRecordLazy).
 * Manages viewport visibility tracking via IntersectionObserver, deferred rendering, and default row min-height styles.
 *
 * Класс, представляющий обработчик ленивой загрузки для записи флекс-таблицы (TableFlexRecordLazy).
 * Управляет отслеживанием видимости через IntersectionObserver, отложенным рендерингом и стилями минимальной высоты строки.
 */
export class TableFlexRecordLazy extends DesignLifecycleAbstract {
  /**
   * Determines whether lazy loading is enabled for the given flex table record properties.
   *
   * Определяет, включена ли ленивая загрузка для переданных свойств записи флекс-таблицы.
   * @param props input properties / входные свойства
   * @returns true if lazy loading is active / true, если ленивая загрузка активна
   */
  static is(props?: Readonly<TableFlexRecordProps>): boolean {
    return Boolean(props?.lazy) && !props?.isHeader && !props?.isFoot
  }

  /** Lazy item tracking instance / Экземпляр отслеживания ленивого элемента */
  protected item?: ReturnType<typeof useLazyItemByMarginRef>

  /** Watch handle for tracking mount inputs / Дескриптор наблюдения за входными параметрами после монтирования */
  protected mountWatch?: WatchHandle

  /** Watch handle for tracking visibility status / Дескриптор наблюдения за статусом видимости */
  protected statusWatch?: WatchHandle

  /**
   * Constructor for TableFlexRecordLazy.
   *
   * Конструктор для TableFlexRecordLazy.
   * @param props input properties / входные свойства
   * @param element target HTML element reference / ссылка на целевой HTML-элемент
   * @param naming component naming helper / помощник именования компонента
   * @param isMounted reactive mount status of the host component / реактивный статус монтирования компонента
   */
  constructor(
    protected readonly props: Readonly<TableFlexRecordProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly naming: DesignName,
    protected readonly isMounted: Ref<boolean>
  ) {
    super()
  }

  /** Current lazy visibility status / Текущий статус видимости ленивой строки */
  protected readonly visible = shallowRef<boolean>(false)

  /** Callback after component mounting / Обработчик после монтирования компонента */
  override readonly onMounted = (): void => {
    this.mountWatch?.stop()
    this.mountWatch = watch(
      [
        this.element,
        () => this.props.lazy,
        () => this.props.isHeader,
        () => this.props.isFoot
      ],
      () => this.update(),
      { immediate: true }
    )
  }

  /** Callback after component unmounting / Обработчик после демонтирования компонента */
  override readonly onUnmounted = (): void => {
    this.mountWatch?.stop()
    this.mountWatch = undefined
    this.reset()
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
      [this.naming.getStatusClass('lazy')]: isLazy,
      [this.naming.getStatusClass('lazy', 'visible')]: isLazy && isVisible,
      [this.naming.getStatusClass('lazy', 'hidden')]: isLazy && !isVisible
    }
  }

  /**
   * Returns styles for the table record row.
   *
   * Возвращает стили для строки записи таблицы.
   * @returns styles object / объект стилей
   */
  get styles(): ConstrStyles {
    if (!this.isLazy()) {
      return {}
    }

    const minHeight = this.getMinHeight()

    if (minHeight) {
      return {
        [this.naming.getStyle('minHeight')]: minHeight
      }
    }

    return {}
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

    if (!this.isMounted.value) {
      return true
    }

    return this.visible.value
  }

  /**
   * Returns whether lazy loading mode is enabled for the record.
   *
   * Возвращает, включен ли режим ленивой загрузки для записи.
   * @returns true if lazy loading mode is enabled / true, если режим ленивой загрузки включен
   */
  isLazy(): boolean {
    return TableFlexRecordLazy.is(this.props)
  }

  /**
   * Updates lazy observer registration based on current props and element reference.
   *
   * Обновляет регистрацию ленивого наблюдателя на основе текущих свойств и ссылки на элемент.
   */
  update(): void {
    if (
      this.isLazy()
      && this.element.value
    ) {
      this.make()
    } else {
      this.reset()
    }
  }

  /**
   * Resets visibility state and stops active lazy tracking.
   *
   * Сбрасывает состояние видимости и останавливает активное ленивое отслеживание.
   */
  reset(): void {
    this.visible.value = false
    this.stop()
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

    if (typeof defaultHeight === 'number') {
      return Number.isFinite(defaultHeight) && defaultHeight >= 0
        ? `${defaultHeight}px`
        : undefined
    }

    const normalizedHeight = String(defaultHeight).trim()

    if (!normalizedHeight) {
      return undefined
    }

    if (isNumber(normalizedHeight)) {
      const numericHeight = Number(normalizedHeight)

      return numericHeight >= 0
        ? `${numericHeight}px`
        : undefined
    }

    return normalizedHeight
  }

  /**
   * Initializes IntersectionObserver tracking for the row element.
   *
   * Инициализирует отслеживание элемента строки через IntersectionObserver.
   */
  protected make(): void {
    if (!this.item) {
      this.item = useLazyItemByMarginRef(this.element)
      this.statusWatch = watch(
        this.item.lazyItemStatus,
        (status) => {
          this.visible.value = status
        },
        { immediate: true }
      )
    }
  }

  /**
   * Stops active visibility watcher and unregisters the element from the observer.
   *
   * Останавливает активный наблюдатель видимости и снимает элемент с отслеживания.
   */
  protected stop(): void {
    if (this.statusWatch) {
      this.statusWatch.stop()
      this.statusWatch = undefined
    }

    if (this.item) {
      this.item.removeLazyItem()
      this.item = undefined
    }
  }
}

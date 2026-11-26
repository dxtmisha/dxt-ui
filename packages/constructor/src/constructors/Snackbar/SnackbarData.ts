// ai-none

import { type Ref, shallowRef } from 'vue'
import { isDomRuntime, isElementVisible, isFilled, ResumableTimer } from '@dxtmisha/functional-basic'
import { DesignLifecycleAbstract, type DesignName } from '@dxtmisha/functional'

import type { SnackbarEvent } from './SnackbarEvent'

import type { SnackbarList, SnackbarValue } from './basicTypes'
import type { SnackbarProps } from './props'

/** Default auto-close delay in milliseconds / Задержка автоматического закрытия по умолчанию в миллисекундах */
const DEFAULT_DELAY = 10_000
/** Additional delay offset for show animation in milliseconds / Дополнительное смещение задержки для анимации появления в миллисекундах */
const SHOW_DELAY_OFFSET = 256
/** Fallback timeout for hide transition completion in milliseconds / Резервный таймаут завершения анимации скрытия в миллисекундах */
const HIDE_FALLBACK_DELAY = 512
/** Retry polling interval for waiting until an item becomes visible in milliseconds / Интервал повторной проверки видимости элемента в миллисекундах */
const DISPLAY_RETRY_DELAY = 128

/** Active transitionend listener entry / Запись активного слушателя transitionend */
type SnackbarHideListener = {
  /** Target DOM element / Целевой DOM-элемент */
  element: HTMLElement
  /** Registered transitionend listener / Зарегистрированный слушатель transitionend */
  listener: () => void
}

/**
 * Class for managing the snackbar notification queue, visibility checks, auto-close timers,
 * scroll positioning, and hide transitions. Extends `DesignLifecycleAbstract` to guarantee full
 * cleanup of timers, animation frames, and DOM listeners upon component unmount.
 *
 * Класс для управления очередью уведомлений снекбара, проверками видимости, таймерами автозакрытия,
 * прокруткой и анимациями скрытия. Наследует `DesignLifecycleAbstract` для гарантированной очистки
 * таймеров, кадров анимации и DOM-слушателей при размонтировании компонента.
 */
export class SnackbarData extends DesignLifecycleAbstract {
  /** Counter for generating sequential item identifiers / Счётчик для генерации последовательных идентификаторов элементов */
  protected itemNumber: number = 0
  /** Flag indicating whether the component has been unmounted / Флаг, указывающий на размонтирование компонента */
  protected isUnmounted: boolean = false
  /** Active requestAnimationFrame identifiers / Активные идентификаторы requestAnimationFrame */
  protected readonly animationFrames: Set<number> = new Set()
  /** Active display retry timeouts keyed by item value / Активные таймауты повторной проверки видимости по ключу элемента */
  protected readonly displayTimers: Map<string, ReturnType<typeof setTimeout>> = new Map()
  /** Active hide fallback timeouts keyed by item value / Активные резервные таймауты скрытия по ключу элемента */
  protected readonly hideTimers: Map<string, ReturnType<typeof setTimeout>> = new Map()
  /** Active hide transitionend listeners keyed by item value / Активные слушатели transitionend скрытия по ключу элемента */
  protected readonly hideListeners: Map<string, SnackbarHideListener> = new Map()

  /**
   * Constructor for SnackbarData.
   *
   * Конструктор для SnackbarData.
   * @param props input properties / входные свойства
   * @param element root container element reference / ссылка на корневой элемент контейнера
   * @param naming component naming helper / помощник именования компонента
   * @param event lazy getter for the snackbar event manager / ленивый геттер менеджера событий снекбара
   */
  constructor(
    protected readonly props: Readonly<SnackbarProps>,
    protected readonly element: Ref<HTMLDivElement | undefined>,
    protected readonly naming: DesignName,
    protected readonly event: () => SnackbarEvent
  ) {
    super()
  }

  /** Reactive shallow list of active notifications / Реактивный плоский список активных уведомлений */
  readonly item = shallowRef<SnackbarList>([])

  /**
   * Resets unmount flag when the component mounts.
   *
   * Сбрасывает флаг размонтирования при монтировании компонента.
   */
  override readonly onMounted = (): void => {
    this.isUnmounted = false
  }

  /**
   * Cleans up all active timers, animation frames, and DOM transition listeners on unmount.
   *
   * Очищает все активные таймеры, кадры анимации и DOM-слушатели переходов при размонтировании.
   */
  override readonly onUnmounted = (): void => {
    this.isUnmounted = true

    if (
      isDomRuntime()
      && typeof cancelAnimationFrame === 'function'
    ) {
      this.animationFrames.forEach(frameId => cancelAnimationFrame(frameId))
    }

    this.animationFrames.clear()

    this.displayTimers.forEach(timer => clearTimeout(timer))
    this.displayTimers.clear()

    this.hideTimers.forEach(timer => clearTimeout(timer))
    this.hideTimers.clear()

    this.hideListeners.forEach(({ element, listener }) => {
      element.removeEventListener('transitionend', listener)
    })
    this.hideListeners.clear()

    this.item.value.forEach(currentItem => currentItem.resumableTimer?.clear())
  }

  /**
   * Checks if there is at least one active notification in the queue.
   *
   * Проверяет, есть ли хотя бы одно активное уведомление в очереди.
   * @returns true if the queue is not empty / true, если очередь не пуста
   */
  readonly isItem = (): boolean => {
    return this.item.value.length > 0
  }

  /**
   * Checks if there is at least one high-priority notification in the queue.
   *
   * Проверяет, есть ли хотя бы одно уведомление с высоким приоритетом в очереди.
   * @returns true if a high-priority item exists / true, если существует приоритетный элемент
   */
  isPriority(): boolean {
    return this.isItem()
      && this.item.value.findIndex(
        currentItem => currentItem.highPriority === true
      ) !== -1
  }

  /**
   * Returns a notification item by its unique identifier.
   *
   * Возвращает запись уведомления по его уникальному идентификатору.
   * @param value element identification / идентификатор элемента
   * @returns matching snackbar item or undefined / найденный элемент уведомления или undefined
   */
  getItemByValue(value: string): SnackbarValue | undefined {
    return this.item.value.find(currentItem => currentItem.value === value)
  }

  /**
   * Adds a new notification item to the queue or updates an existing item with the same `value`,
   * resetting its timers/hide state and re-initializing its display lifecycle.
   *
   * Добавляет новое уведомление в очередь или обновляет существующую запись с тем же `value`,
   * сбрасывая её таймеры/состояние скрытия и перезапуская жизненный цикл отображения.
   * @param item notification configuration object / объект конфигурации уведомления
   */
  readonly add = (item: SnackbarValue): void => {
    const value = this.getItemValue(item)
    const delay = this.getItemDelay(item)
    const nextItem: SnackbarValue = {
      ...item,
      delay,
      value
    }
    const existingIndex = this.item.value.findIndex(currentItem => currentItem.value === value)

    if (existingIndex !== -1) {
      this.resetItemLifecycle(value, this.item.value[existingIndex])

      const nextList = [...this.item.value]
      nextList[existingIndex] = nextItem
      this.item.value = nextList
    } else {
      this.item.value = [
        ...this.item.value,
        nextItem
      ]
    }

    this.toScroll()
    this.initDisplay(value, delay)
  }

  /**
   * Initiates hiding and removal of a notification item by its identifier.
   *
   * Инициирует скрытие и удаление уведомления по его идентификатору.
   * @param value element identification / идентификатор элемента
   */
  readonly remove = (value: string): void => {
    if (
      this.getItemByValue(value)
      && !this.hideTimers.has(value)
    ) {
      const element = this.getElementItem(value)

      if (element) {
        const listener = (): void => this.performHide(value)

        this.hideListeners.set(value, { element, listener })
        element.addEventListener('transitionend', listener, { once: true })
        element.classList.add(this.naming.getStatusClass('hide'))

        const timer = setTimeout(() => this.performHide(value), HIDE_FALLBACK_DELAY)
        this.hideTimers.set(value, timer)
      } else {
        this.performHide(value)
      }
    }
  }

  /**
   * Removes all active notification items from the queue.
   *
   * Удаляет все активные уведомления из очереди.
   */
  readonly clear = (): void => {
    [...this.item.value].forEach((currentItem) => {
      if (currentItem.value !== undefined) {
        this.remove(currentItem.value)
      }
    })
  }

  /**
   * Pauses the auto-close timer for all displayed notifications.
   *
   * Приостанавливает таймер автоматического закрытия для всех отображаемых уведомлений.
   */
  readonly pause = (): void => {
    this.item.value.forEach(currentItem => currentItem.resumableTimer?.pause())
  }

  /**
   * Resumes the auto-close timer for all displayed notifications.
   *
   * Возобновляет таймер автоматического закрытия для всех отображаемых уведомлений.
   */
  readonly resume = (): void => {
    this.item.value.forEach(currentItem => currentItem.resumableTimer?.resume())
  }

  /**
   * Finds the DOM element corresponding to a notification identifier without CSS selector injection.
   *
   * Находит DOM-элемент, соответствующий идентификатору уведомления, без риска инъекции в CSS-селектор.
   * @param value element identification / идентификатор элемента
   * @returns matching DOM element or undefined / найденный DOM-элемент или undefined
   */
  protected getElementItem(value: string): HTMLElement | undefined {
    const container = this.element.value

    if (!container) {
      return undefined
    }

    const children = container.children
    const length = children.length

    for (let index = 0; index < length; index++) {
      const child = children[index]

      if (
        child instanceof HTMLElement
        && child.getAttribute('data-snackbar-item') === value
      ) {
        return child
      }
    }

    return undefined
  }

  /**
   * Resolves a unique non-empty identifier for a notification item.
   *
   * Определяет уникальный непустой идентификатор для элемента уведомления.
   * @param item notification item / элемент уведомления
   * @returns resolved unique identifier / определённый уникальный идентификатор
   */
  protected getItemValue(item: SnackbarValue): string {
    return isFilled(item.value)
      ? item.value
      : `snackbar-item-${++this.itemNumber}`
  }

  /**
   * Resolves the auto-close delay in milliseconds for a notification item.
   *
   * Определяет задержку автоматического закрытия в миллисекундах для элемента уведомления.
   * @param item notification item / элемент уведомления
   * @returns delay in milliseconds / задержка в миллисекундах
   */
  protected getItemDelay(item: SnackbarValue): number {
    return item.delay ?? this.props.delay ?? DEFAULT_DELAY
  }

  /**
   * Attaches an auto-close `ResumableTimer` to a displayed notification item.
   *
   * Привязывает таймер `ResumableTimer` автозакрытия к отображаемому элементу уведомления.
   * @param value element identification / идентификатор элемента
   * @param delay delay for closing the element / задержка закрытия элемента
   * @returns current instance / текущий экземпляр
   */
  protected addShowItem(
    value: string,
    delay: number
  ): this {
    const item = this.getItemByValue(value)

    if (
      item
      && delay >= 0
      && !item.resumableTimer
    ) {
      item.resumableTimer = new ResumableTimer(
        () => this.remove(value),
        delay + SHOW_DELAY_OFFSET
      )
    }

    return this
  }

  /**
   * Clears a pending display retry timer for the specified item identifier.
   *
   * Очищает ожидающий таймер повторной проверки видимости для указанного идентификатора элемента.
   * @param value element identification / идентификатор элемента
   */
  protected clearDisplayTimer(value: string): void {
    const timer = this.displayTimers.get(value)

    if (timer !== undefined) {
      clearTimeout(timer)
      this.displayTimers.delete(value)
    }
  }

  /**
   * Clears a pending hide fallback timer for the specified item identifier.
   *
   * Очищает ожидающий резервный таймер скрытия для указанного идентификатора элемента.
   * @param value element identification / идентификатор элемента
   */
  protected clearHideTimer(value: string): void {
    const timer = this.hideTimers.get(value)

    if (timer !== undefined) {
      clearTimeout(timer)
      this.hideTimers.delete(value)
    }
  }

  /**
   * Removes an active hide transitionend listener for the specified item identifier.
   *
   * Удаляет активный слушатель transitionend скрытия для указанного идентификатора элемента.
   * @param value element identification / идентификатор элемента
   */
  protected clearHideListener(value: string): void {
    const entry = this.hideListeners.get(value)

    if (entry) {
      entry.element.removeEventListener('transitionend', entry.listener)
      this.hideListeners.delete(value)
    }
  }

  /**
   * Monitors when a newly added or updated notification element becomes visible, emits `show`,
   * and starts its auto-close timer when `delay >= 0`.
   *
   * Отслеживает момент появления добавленного или обновлённого элемента уведомления, вызывает событие `show`
   * и запускает таймер автоматического закрытия при `delay >= 0`.
   * @param value element identification / идентификатор элемента
   * @param delay delay for closing the element / задержка закрытия элемента
   */
  protected initDisplay(
    value: string,
    delay: number
  ): void {
    if (
      this.isUnmounted
      || !isDomRuntime()
    ) {
      return
    }

    this.scheduleAnimationFrame(() => {
      const item = this.getItemByValue(value)

      if (!item) {
        return
      }

      const element = this.getElementItem(value)

      if (
        element
        && isElementVisible(element)
      ) {
        this.clearDisplayTimer(value)
        this.event().show(value, item)

        if (delay >= 0) {
          this.addShowItem(value, delay)
        }
      } else {
        this.clearDisplayTimer(value)

        const timer = setTimeout(() => {
          this.displayTimers.delete(value)
          this.initDisplay(value, delay)
        }, DISPLAY_RETRY_DELAY)

        this.displayTimers.set(value, timer)
      }
    })
  }

  /**
   * Resets active timers, hide transition listeners, and hide class for an existing item before updating it.
   *
   * Сбрасывает активные таймеры, слушатели перехода скрытия и класс скрытия существующей записи перед её обновлением.
   * @param value element identification / идентификатор элемента
   * @param existingItem existing notification record / существующая запись уведомления
   */
  protected resetItemLifecycle(
    value: string,
    existingItem: SnackbarValue
  ): void {
    this.clearDisplayTimer(value)
    this.clearHideTimer(value)
    this.clearHideListener(value)
    existingItem.resumableTimer?.clear()

    const element = this.getElementItem(value)

    if (element) {
      element.classList.remove(this.naming.getStatusClass('hide'))
    }
  }

  /**
   * Finalizes removal of a notification item, clearing its timers/listeners and emitting `hide`.
   *
   * Завершает удаление элемента уведомления, очищая его таймеры и слушатели и вызывая событие `hide`.
   * @param value element identification / идентификатор элемента
   */
  protected performHide(value: string): void {
    this.clearDisplayTimer(value)
    this.clearHideTimer(value)
    this.clearHideListener(value)

    const item = this.getItemByValue(value)

    if (item) {
      item.resumableTimer?.clear()
      this.item.value = this.item.value.filter(currentItem => currentItem.value !== value)
      this.event().hide(value, item)
    }
  }

  /**
   * Schedules an SSR-safe tracked animation frame callback that is automatically cancelled on unmount.
   *
   * Планирует SSR-безопасный отслеживаемый колбэк кадра анимации с автоматической отменой при размонтировании.
   * @param callback function to invoke on next animation frame / функция для вызова на следующем кадре анимации
   */
  protected scheduleAnimationFrame(callback: () => void): void {
    if (
      this.isUnmounted
      || !isDomRuntime()
      || typeof requestAnimationFrame !== 'function'
    ) {
      return
    }

    let executed = false
    const frameHolder: { id?: number } = {}

    frameHolder.id = requestAnimationFrame(() => {
      executed = true

      if (frameHolder.id !== undefined) {
        this.animationFrames.delete(frameHolder.id)
      }

      if (!this.isUnmounted) {
        callback()
      }
    })

    if (
      !executed
      && frameHolder.id !== undefined
    ) {
      this.animationFrames.add(frameHolder.id)
    }
  }

  /**
   * Scrolls the snackbar container to the bottom so the newest notification is in view.
   *
   * Прокручивает контейнер снекбара до конца, чтобы новейшее уведомление было в области видимости.
   */
  protected toScroll(): void {
    this.scheduleAnimationFrame(() => {
      if (this.element.value) {
        this.element.value.scrollTop = this.element.value.scrollHeight
      }
    })
  }
}

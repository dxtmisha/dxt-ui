import {
  type ConstrBind,
  DesignLifecycleAbstract,
  EventItem,
  eventStopPropagation,
  isDomRuntime,
  isNull,
  type ListDataRef,
  type ListSelectedItem
} from '@dxtmisha/functional'

import type { HorizontalScrollInclude } from '../HorizontalScroll'
import type { TabsNavigationFocus } from './TabsNavigationFocus'
import type { TabsNavigationSelected } from './TabsNavigationSelected'

/**
 * Class for managing tab navigation keyboard control and keyboard event listeners.
 *
 * Класс для управления контролем клавиатурной навигации вкладок и обработчиками клавиатурных событий.
 */
export class TabsNavigationControl extends DesignLifecycleAbstract {
  /** Reference to the keydown EventItem wrapper / Ссылка на обертку события EventItem для нажатия клавиш */
  protected event?: EventItem<HTMLElement, KeyboardEvent>

  /**
   * Constructor for initializing keyboard control components.
   *
   * Конструктор для инициализации компонентов управления клавиатурой.
   * @param data lazy getter returning data list manager / ленивый геттер, возвращающий менеджер списка данных
   * @param focus lazy getter returning focus management helper / ленивый геттер, возвращающий объект управления фокусом
   * @param scroll lazy getter returning scroll handling helper / ленивый геттер, возвращающий объект управления прокруткой
   * @param selected lazy getter returning selection management helper / ленивый геттер, возвращающий объект управления выделением
   */
  constructor(
    protected readonly data: () => ListDataRef,
    protected readonly focus: () => TabsNavigationFocus,
    protected readonly scroll: () => HorizontalScrollInclude,
    protected readonly selected: () => TabsNavigationSelected
  ) {
    super()
  }

  /**
   * Returns event bindings for focus and blur for the tablist container.
   *
   * Возвращает привязки событий фокуса и потери фокуса для контейнера tablist.
   * @returns object containing focus and blur event handlers / объект с обработчиками событий focus и blur
   */
  get binds(): ConstrBind {
    return {
      onFocus: this.onFocus,
      onBlur: this.onBlur
    }
  }

  /**
   * Returns the first item's index identifier in the list.
   *
   * Возвращает идентификатор первого элемента в списке.
   * @returns first tab index or undefined / индекс первой вкладки или undefined
   */
  getFirstItem(): ListSelectedItem | undefined {
    return this.data().getFirstItemByParent(undefined)?.index
  }

  /**
   * Returns the last item's index identifier in the list.
   *
   * Возвращает идентификатор последнего элемента в списке.
   * @returns last tab index or undefined / индекс последней вкладки или undefined
   */
  getLastItem(): ListSelectedItem | undefined {
    return this.data().getLastItemByParent(undefined)?.index
  }

  /**
   * Handler for the focus event, initiates global keyboard event listener.
   *
   * Обработчик события фокуса, инициализирует глобальный слушатель событий клавиатуры.
   */
  readonly onFocus = (): void => {
    this.start()
  }

  /**
   * Handler for the blur event, stops and removes keyboard event listener.
   *
   * Обработчик события потери фокуса, останавливает и удаляет слушатель событий клавиатуры.
   */
  readonly onBlur = (): void => {
    this.stop()
  }

  /**
   * Stops active keyboard listeners on component unmount to prevent listener leaks.
   *
   * Останавливает активные слушатели клавиатуры при размонтировании компонента для предотвращения утечек.
   */
  override readonly onUnmounted = (): void => {
    this.stop()
  }

  /**
   * Checks whether the navigation container uses right-to-left (RTL) text direction.
   *
   * Проверяет, использует ли контейнер навигации направление текста справа налево (RTL).
   * @returns true if RTL direction is active / true, если активно направление RTL
   */
  protected isRtl(): boolean {
    if (!isDomRuntime()) {
      return false
    }

    const element = this.scroll().elementHtml

    if (element) {
      const closestDirection = element.closest('[dir]')?.getAttribute('dir')?.toLowerCase()

      if (
        closestDirection === 'rtl'
        || closestDirection === 'ltr'
      ) {
        return closestDirection === 'rtl'
      }

      if (typeof getComputedStyle === 'function') {
        return getComputedStyle(element).direction === 'rtl'
      }
    }

    return document.documentElement?.dir?.toLowerCase() === 'rtl'
      || document.dir?.toLowerCase() === 'rtl'
  }

  /**
   * Returns the current focus index value or falls back to the first item index.
   *
   * Возвращает индекс текущего фокуса или индекс первого элемента в качестве альтернативы.
   * @returns current active focus index / индекс текущего активного фокуса
   */
  protected getFocus(): ListSelectedItem | undefined {
    return this.focus().get() ?? this.getFirstItem()
  }

  /**
   * Moves focus to the first logical tab item.
   *
   * Перемещает фокус на первую вкладку по логике списка.
   * @returns instance of this control class / текущий экземпляр класса управления
   */
  protected first(): this {
    const firstItem = this.getFirstItem()

    if (!isNull(firstItem)) {
      this.focus().set(firstItem)
    }

    return this
  }

  /**
   * Moves focus to the last logical tab item.
   *
   * Перемещает фокус на последнюю вкладку по логике списка.
   * @returns instance of this control class / текущий экземпляр класса управления
   */
  protected last(): this {
    const lastItem = this.getLastItem()

    if (!isNull(lastItem)) {
      this.focus().set(lastItem)
    }

    return this
  }

  /**
   * Moves focus to the previous logical tab item.
   *
   * Перемещает фокус на предыдущую вкладку по логике списка.
   * @returns instance of this control class / текущий экземпляр класса управления
   */
  protected prev(): this {
    const focus = this.getFocus()

    if (!isNull(focus)) {
      this.focus().set(
        this.data().getIndexPrev(focus as string)?.index
      )
    }

    return this
  }

  /**
   * Moves focus to the next logical tab item.
   *
   * Перемещает фокус на следующую вкладку по логике списка.
   * @returns instance of this control class / текущий экземпляр класса управления
   */
  protected next(): this {
    const focus = this.getFocus()

    if (!isNull(focus)) {
      this.focus().set(
        this.data().getIndexNext(focus as string)?.index
      )
    }

    return this
  }

  /**
   * Starts the keyboard keydown event listener.
   *
   * Запускает прослушивание события keydown на клавиатуре.
   */
  protected start(): void {
    if (isDomRuntime()) {
      if (!this.event) {
        this.event = new EventItem<HTMLElement, KeyboardEvent>(
          document.body,
          ['keydown'],
          this.on
        )
      }

      this.focus().position()
      this.event.start()
    }
  }

  /**
   * Stops the keyboard keydown event listener and resets focus state.
   *
   * Останавливает прослушивание события keydown на клавиатуре и сбрасывает состояние фокуса.
   */
  protected stop(): void {
    if (this.event) {
      this.event.stop()
      this.event = undefined
      this.focus().reset()
    }
  }

  /**
   * Callback handling keydown keyboard events for arrow keys, Home, End, Enter, and Space.
   *
   * Обратный вызов, обрабатывающий события клавиатуры keydown для стрелок, Home, End, Enter и пробела.
   * @param event native KeyboardEvent object / объект нативного события KeyboardEvent
   */
  protected readonly on = (event: KeyboardEvent): void => {
    if (
      event.isComposing
      || !this.data().getLength()
    ) {
      return
    }

    const item = this.data().getFocusItem()
    const key = event.code || event.key

    switch (key) {
      case 'ArrowLeft':
      case 'Left':
        eventStopPropagation(event)

        if (this.isRtl()) {
          this.next()
        } else {
          this.prev()
        }
        break
      case 'ArrowRight':
      case 'Right':
        eventStopPropagation(event)

        if (this.isRtl()) {
          this.prev()
        } else {
          this.next()
        }
        break
      case 'Home':
        eventStopPropagation(event)
        this.first()
        break
      case 'End':
        eventStopPropagation(event)
        this.last()
        break
      case 'Enter':
      case 'Space':
      case 'Spacebar':
      case ' ':
        event.preventDefault()

        if (
          item
          && !item.disabled
        ) {
          this.selected().set(item.index)
        }
        break
    }
  }
}

import { nextTick, watch, type WatchStopHandle } from 'vue'
import {
  DesignLifecycleAbstract,
  type DesignName,
  executeFunctionRef,
  isArray,
  isDomRuntime,
  isNull,
  type ListSelectedList,
  type RefOrNormalOrFunction
} from '@dxtmisha/functional'

import { escapeAttributeValue } from '../../functions/escapeAttributeValue'
import type { TabsNavigationSelected } from './TabsNavigationSelected'

/** Delay in milliseconds before removing temporary indicator transition styles / Задержка в миллисекундах перед очисткой временных стилей перехода индикатора */
const INDICATOR_RESET_DELAY = 384

/**
 * Class for managing active tab selection changes, dynamic slide indicators, and transition animations.
 *
 * Класс для управления изменением активного выделения вкладок, динамическими слайд-индикаторами и анимациями переходов.
 */
export class TabsNavigationIndicator extends DesignLifecycleAbstract {
  /** Whether the component has been unmounted / Был ли компонент размонтирован */
  protected isUnmounted = false

  /** Scheduled animation frame ID for initial mount scroll / Идентификатор запланированного кадра анимации для начальной прокрутки при монтировании */
  protected mountFrameId?: number

  /** Scheduled animation frame ID for actual selection update / Идентификатор запланированного кадра анимации для обновления фактического выбора */
  protected goFrameId?: number

  /** Active cleanup timers indexed by tab item element / Активные таймеры очистки, индексированные по элементу вкладки */
  protected readonly resetTimers = new Map<HTMLElement, ReturnType<typeof setTimeout>>()

  /** Stop handle for selection change watcher / Функция остановки наблюдателя изменения выбора */
  protected stopWatch?: WatchStopHandle

  /**
   * Constructor for initializing selection animation indicator tracker.
   *
   * Конструктор для инициализации отслеживания анимации индикатора выбора.
   * @param element main scrollable HTML element or getter function / главный прокручиваемый HTML-элемент или функция-геттер
   * @param naming component naming helper / помощник именования компонента
   * @param selected lazy getter returning selection state manager / ленивый геттер, возвращающий менеджер состояния выделения
   */
  constructor(
    protected readonly element: RefOrNormalOrFunction<HTMLElement | undefined>,
    protected readonly naming: DesignName,
    protected readonly selected: () => TabsNavigationSelected
  ) {
    super()
  }

  /**
   * Registers selection watcher and schedules initial scroll positioning on mount.
   *
   * Регистрирует наблюдатель выбора и планирует начальное позиционирование прокрутки при монтировании.
   */
  override readonly onMounted = (): void => {
    this.isUnmounted = false

    this.stopWatch?.()
    this.stopWatch = watch(
      () => this.selected().item.value,
      (newValue, oldValue) => {
        void this.go(newValue, oldValue)
      }
    )

    if (isDomRuntime()) {
      this.cancelFrame(this.mountFrameId)
      this.mountFrameId = requestAnimationFrame(() => {
        this.mountFrameId = undefined

        if (!this.isUnmounted) {
          const element = this.getElement()

          if (element) {
            element.scrollLeft = this.getItem(this.selected().item.value)?.offsetLeft ?? 0
          }
        }
      })
    }
  }

  /**
   * Cleans up watchers, animation frames, and reset timers on unmount.
   *
   * Очищает наблюдатели, кадры анимации и таймеры сброса при размонтировании.
   */
  override readonly onUnmounted = (): void => {
    this.isUnmounted = true

    this.stopWatch?.()
    this.stopWatch = undefined

    this.cancelFrame(this.mountFrameId)
    this.mountFrameId = undefined

    this.cancelFrame(this.goFrameId)
    this.goFrameId = undefined

    this.resetTimers.forEach(timer => clearTimeout(timer))
    this.resetTimers.clear()
  }

  /**
   * Triggers and animates the transition state when selection changes from one tab to another.
   *
   * Запускает и анимирует состояние перехода при изменении выделения с одной вкладки на другую.
   * @param newSelected index value of the newly selected tab / индексное значение новой выбранной вкладки
   * @param oldSelected index value of the previously selected tab / индексное значение предыдущей выбранной вкладки
   */
  readonly go = async (
    newSelected: ListSelectedList | undefined,
    oldSelected: ListSelectedList | undefined
  ): Promise<void> => {
    await nextTick()

    if (this.isUnmounted) {
      return
    }

    const newItem = this.getItem(newSelected)
    const oldItem = this.getItem(oldSelected)

    if (
      newItem
      && oldItem
    ) {
      const itemClassName = this.getItemClassName()
      const rectNew = newItem.getBoundingClientRect()
      const rectOld = oldItem.getBoundingClientRect()
      const left = rectOld.left - rectNew.left
      const leftVariable = `${left}px ${left >= 0 ? '-' : '+'} var(--${itemClassName}-gap, 0px)`

      newItem.style.setProperty(this.getStyleLeft(), leftVariable)
      newItem.style.setProperty(this.getStyleWidth(), `${rectOld.width}px`)

      this.reset(newItem)
    }

    if (isDomRuntime()) {
      this.cancelFrame(this.goFrameId)
      this.goFrameId = requestAnimationFrame(() => {
        this.goFrameId = undefined

        if (!this.isUnmounted) {
          this.selected().setActual(newSelected)
        }
      })
    } else {
      this.selected().setActual(newSelected)
    }
  }

  /**
   * Resets temporary transition inline styles after transition finishes.
   *
   * Сбрасывает временные инлайновые стили перехода после завершения анимации.
   * @param item HTML element of the tab / HTML-элемент вкладки
   */
  readonly reset = (item: HTMLElement): void => {
    const existingTimer = this.resetTimers.get(item)

    if (existingTimer !== undefined) {
      clearTimeout(existingTimer)
    }

    const timer = setTimeout(() => {
      this.resetTimers.delete(item)
      item.style.removeProperty(this.getStyleLeft())
      item.style.removeProperty(this.getStyleWidth())
    }, INDICATOR_RESET_DELAY)

    this.resetTimers.set(item, timer)
  }

  /**
   * Resolves and returns the container HTMLElement.
   *
   * Разрешает и возвращает HTMLElement контейнера.
   * @returns element or undefined / элемент или undefined
   */
  protected getElement(): HTMLElement | undefined {
    return executeFunctionRef(this.element)
  }

  /**
   * Queries and returns the specific tab element by its unique index value.
   *
   * Находит и возвращает конкретный элемент вкладки по его уникальному индексному значению.
   * @param selected selected tab value / значение выбранной вкладки
   * @returns tab HTMLElement or undefined / HTMLElement вкладки или undefined
   */
  protected getItem(selected?: ListSelectedList): HTMLElement | undefined {
    const value = isArray(selected) ? selected[0] : selected

    if (isNull(value)) {
      return undefined
    }

    const escapedValue = escapeAttributeValue(value)

    return this.getElement()?.querySelector<HTMLElement>(`[data-value="${escapedValue}"]`) || undefined
  }

  /**
   * Returns the sub-class name suffix for the tab item component.
   *
   * Возвращает суффикс имени подкласса для компонента элемента вкладки.
   * @returns tab item class name suffix / суффикс имени класса вкладки
   */
  protected getItemClassName(): string {
    return `${this.naming.getDesign()}-item`
  }

  /**
   * Returns the CSS custom property name for indicator horizontal offset.
   *
   * Возвращает имя CSS-переменной для горизонтального смещения индикатора.
   * @returns CSS custom property name / имя CSS-переменной
   */
  protected getStyleLeft(): string {
    return `--${this.getItemClassName()}-sys-left`
  }

  /**
   * Returns the CSS custom property name for indicator width.
   *
   * Возвращает имя CSS-переменной для ширины индикатора.
   * @returns CSS custom property name / имя CSS-переменной
   */
  protected getStyleWidth(): string {
    return `--${this.getItemClassName()}-sys-width`
  }

  /**
   * Safely cancels a scheduled animation frame when running in DOM runtime.
   *
   * Безопасно отменяет запланированный кадр анимации в браузерном окружении.
   * @param frameId animation frame identifier / идентификатор кадра анимации
   */
  protected cancelFrame(frameId?: number): void {
    if (
      frameId !== undefined
      && isDomRuntime()
    ) {
      cancelAnimationFrame(frameId)
    }
  }
}

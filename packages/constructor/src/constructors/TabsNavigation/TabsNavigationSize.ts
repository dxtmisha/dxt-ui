import { nextTick } from 'vue'
import { DesignLifecycleAbstract, EventItem } from '@dxtmisha/functional'

import type { HorizontalScrollInclude } from '../HorizontalScroll'
import type { TabsNavigationProps } from './props'

/** Delay in milliseconds for debouncing scroll width updates / Задержка в миллисекундах для дебаунса обновлений ширины прокрутки */
const SIZE_UPDATE_DELAY = 64

/**
 * Class for managing and observing the resize events of the tab navigation container.
 * It dynamically sets CSS custom properties to maintain scroll-width awareness.
 *
 * Класс для управления и отслеживания событий изменения размера контейнера навигации вкладок.
 * Динамически устанавливает пользовательские свойства CSS для контроля ширины прокрутки.
 */
export class TabsNavigationSize extends DesignLifecycleAbstract {
  /** Event item instance wrapping the resize event / Экземпляр EventItem, оборачивающий событие изменения размера */
  protected event?: EventItem<HTMLElement, Event>

  /** Whether the component has been unmounted / Был ли компонент размонтирован */
  protected isUnmounted = false

  /** Timer ID for debouncing the scroll width updates / Идентификатор таймера для задержки обновлений ширины прокрутки */
  protected timer?: ReturnType<typeof setTimeout>

  /** Cached scroll width of the container / Кэшированная ширина прокрутки контейнера */
  protected width: number = 0

  /**
   * Checks whether resize tracking for the divider scroll width is required.
   *
   * Проверяет, требуется ли отслеживание размера для ширины прокрутки разделителя.
   * @param props component properties / свойства компонента
   * @returns true if divider is enabled / true, если разделитель включён
   */
  static is(props?: Readonly<TabsNavigationProps>): boolean {
    return Boolean(props?.divider)
  }

  /**
   * Constructor for observing container size changes.
   *
   * Конструктор для отслеживания изменений размеров контейнера.
   * @param scroll lazy getter returning scroll handling helper / ленивый геттер, возвращающий вспомогательный класс прокрутки
   */
  constructor(
    protected readonly scroll: () => HorizontalScrollInclude
  ) {
    super()
  }

  /**
   * Attaches the resize observer and computes initial scroll width on mount.
   *
   * Подключает наблюдатель изменения размера и вычисляет начальную ширину прокрутки при монтировании.
   */
  override readonly onMounted = async (): Promise<void> => {
    this.isUnmounted = false
    await nextTick()

    if (this.isUnmounted) {
      return
    }

    const element = this.scroll().elementHtml

    if (element) {
      this.event?.stop()
      this.event = new EventItem<HTMLElement, Event>(element, 'resize', this.listener)
      this.event.start()
    }

    this.listener()
  }

  /**
   * Stops the resize observer and clears pending debounce timers on unmount.
   *
   * Останавливает наблюдатель изменения размера и очищает ожидающие таймеры при размонтировании.
   */
  override readonly onUnmounted = (): void => {
    this.isUnmounted = true

    if (this.timer !== undefined) {
      clearTimeout(this.timer)
      this.timer = undefined
    }

    this.event?.stop()
    this.event = undefined
  }

  /**
   * Listener callback executed when the container element is resized.
   *
   * Обработчик событий, выполняемый при изменении размера элемента контейнера.
   */
  protected readonly listener = (): void => {
    const element = this.scroll().elementHtml

    if (this.timer !== undefined) {
      clearTimeout(this.timer)
      this.timer = undefined
    }

    if (
      element
      && !this.isUnmounted
    ) {
      this.width = element.scrollWidth
      element.style.removeProperty('--sys-scroll-width')

      this.timer = setTimeout(this.update, SIZE_UPDATE_DELAY)
    }
  }

  /**
   * Updates the custom CSS property on the container element to the new scroll width.
   *
   * Обновляет пользовательское CSS-свойство на элементе контейнера до новой ширины прокрутки.
   */
  protected readonly update = (): void => {
    this.timer = undefined

    if (this.isUnmounted) {
      return
    }

    const element = this.scroll().elementHtml

    if (element) {
      element.style.setProperty(
        '--sys-scroll-width',
        `${this.width}px`
      )
    }
  }
}

import { nextTick, onMounted, onUnmounted } from 'vue'
import { EventItem } from '@dxtmisha/functional'
import { HorizontalScrollInclude } from '../HorizontalScroll'

/**
 * Class for managing and observing the resize events of the tab navigation container.
 * It dynamically sets CSS custom properties to maintain scroll-width awareness.
 *
 * Класс для управления и отслеживания событий изменения размера контейнера навигации вкладок.
 * Динамически устанавливает пользовательские свойства CSS для контроля ширины прокрутки.
 */
export class TabsNavigationSize {
  /** Event item instance wrapping the resize event / Экземпляр EventItem, оборачивающий событие изменения размера */
  protected event?: EventItem<HTMLElement, any>

  /** Cached scroll width of the container / Кэшированная ширина прокрутки контейнера */
  protected width: number = 0

  /** Timer ID for debouncing the scroll width updates / Идентификатор таймера для задержки обновлений ширины прокрутки */
  protected timer: any

  /**
   * Constructor for observing container size changes.
   *
   * Конструктор для отслеживания изменений размеров контейнера.
   * @param scroll scroll handling helper / вспомогательный класс для работы с прокруткой
   */
  constructor(
    protected readonly scroll: HorizontalScrollInclude
  ) {
    onMounted(async () => {
      await nextTick()

      const element = this.scroll.elementHtml

      if (element) {
        this.event = new EventItem(element, 'resize', this.listener)
        this.event.start()
      }

      this.listener()
    })
    onUnmounted(() => {
      this.event?.stop()
    })
  }

  /**
   * Listener callback executed when the container element is resized.
   *
   * Обработчик событий, выполняемый при изменении размера элемента контейнера.
   */
  protected readonly listener = () => {
    const element = this.scroll.elementHtml

    clearTimeout(this.timer)

    if (element) {
      this.width = element.scrollWidth
      element.style.removeProperty('--sys-scroll-width')

      this.timer = setTimeout(this.update, 64)
    }
  }

  /**
   * Updates the custom CSS property on the container element to the new scroll width.
   *
   * Обновляет пользовательское CSS-свойство на элементе контейнера до новой ширины прокрутки.
   */
  protected readonly update = () => {
    const element = this.scroll.elementHtml

    if (element) {
      element.style.setProperty(
        '--sys-scroll-width',
        `${this.width}px`
      )
    }
  }
}

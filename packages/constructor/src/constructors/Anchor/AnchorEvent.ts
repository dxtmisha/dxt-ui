// ai-none

import { ref } from 'vue'
import { DesignLifecycleAbstract, writeClipboardData } from '@dxtmisha/functional'

import type { TooltipInclude } from '../Tooltip'
import type { AnchorHref } from './AnchorHref'
import type { AnchorTo } from './AnchorTo'

import type { AnchorProps } from './props'

/** Default delay in milliseconds before hiding copied state / Задержка по умолчанию в миллисекундах перед скрытием состояния копирования */
const DEFAULT_DELAY_HIDE = 1024

/**
 * Anchor event handler.
 *
 * Обработчик событий Anchor.
 */
export class AnchorEvent extends DesignLifecycleAbstract {
  /** Reactive copied state / Реактивное состояние копирования */
  readonly copy = ref<boolean>(false)

  /** Timeout handle for resetting copied state / Идентификатор таймера сброса состояния копирования */
  protected timeout?: ReturnType<typeof setTimeout>
  /** Unmounted flag to prevent post-unmount updates / Флаг размонтирования для предотвращения обновлений после размонтирования */
  protected unmounted: boolean = false

  /**
   * Constructor
   * @param props input data / входные данные
   * @param href function returning href handler / функция, возвращающая обработчик ссылки
   * @param to function returning scroll handler / функция, возвращающая обработчик прокрутки
   * @param tooltip function returning tooltip include / функция, возвращающая менеджер подсказки
   */
  constructor(
    protected readonly props: Readonly<AnchorProps>,
    protected readonly href: () => AnchorHref,
    protected readonly to: () => AnchorTo,
    protected readonly tooltip: () => TooltipInclude
  ) {
    super()
  }

  /**
   * Resets unmounted flag on mount.
   *
   * Сбрасывает флаг размонтирования при монтировании.
   */
  override readonly onMounted = (): void => {
    this.unmounted = false
  }

  /**
   * Clears pending copy timeout on unmount.
   *
   * Очищает ожидающий таймер копирования при размонтировании.
   */
  override readonly onUnmounted = (): void => {
    this.unmounted = true
    this.clearTimeout()
  }

  /**
   * Checks whether copy state is currently active.
   *
   * Проверяет, активно ли состояние копирования.
   * @returns true if copied state is active / true, если состояние копирования активно
   */
  isCopy(): boolean {
    return Boolean(this.copy.value)
  }

  /**
   * On click handler.
   *
   * Обработчик нажатия.
   * @param event click or activation event / событие клика или активации
   */
  readonly onClick = (event: Event): void => {
    event.preventDefault()

    if (this.unmounted) {
      return
    }

    if (this.props.isCopy) {
      const link = this.href().getLink()

      if (link) {
        writeClipboardData(link)
          .then(() => {
            if (!this.unmounted) {
              this.toCopy()
            }
          })
          .catch(() => {})
      }
    } else {
      this.to().go()
    }
  }

  /**
   * On keydown handler for keyboard activation in copy mode.
   *
   * Обработчик нажатия клавиш для клавиатурной активации в режиме копирования.
   * @param event keyboard event / событие клавиатуры
   */
  readonly onKeydown = (event: KeyboardEvent): void => {
    if (
      this.props.isCopy
      && !event.isComposing
      && (event.key === 'Enter' || event.key === ' ')
    ) {
      this.onClick(event)
    }
  }

  /**
   * Trigger copy state and open feedback tooltip temporarily.
   *
   * Запустить состояние копирования и временно открыть подсказку обратной связи.
   */
  protected toCopy(): void {
    this.clearTimeout()

    this.copy.value = true
    this.tooltip().open()

    this.timeout = setTimeout(() => {
      this.timeout = undefined

      if (this.unmounted) {
        return
      }

      this.copy.value = false
      this.tooltip().close()
    }, this.props.delayHide ?? DEFAULT_DELAY_HIDE)
  }

  /**
   * Clears the pending hide timeout.
   *
   * Очищает ожидающий таймер скрытия.
   */
  protected clearTimeout(): void {
    if (this.timeout !== undefined) {
      clearTimeout(this.timeout)
      this.timeout = undefined
    }
  }
}

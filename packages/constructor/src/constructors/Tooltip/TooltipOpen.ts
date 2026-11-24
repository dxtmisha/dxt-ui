// ai-none

import { nextTick, watch, type WatchStopHandle } from 'vue'
import { type ConstrEmit, DesignLifecycleAbstract, EventItem } from '@dxtmisha/functional'

import type { TooltipPosition } from './TooltipPosition'
import type { TooltipStatus } from './TooltipStatus'
import type { TooltipStyle } from './TooltipStyle'

import type { TooltipProps } from './props'
import type { TooltipEmits } from './types'

/**
 * Class for managing the status of an open tooltip.
 *
 * Класс для управления статусом открытого тултипа.
 */
export class TooltipOpen extends DesignLifecycleAbstract {
  /**
   * Checks whether tooltip auto-open lifecycle should activate immediately.
   *
   * Проверяет, должен ли жизненный цикл автооткрытия тултипа активироваться немедленно.
   * @param props input properties / входные свойства
   * @returns true if tooltip is configured to open / true, если тултип настроен на открытие
   */
  static is(props?: TooltipProps): boolean {
    return Boolean(props?.open)
  }

  /** Timeout for open/close transition delay / Таймаут задержки открытия/закрытия */
  protected timeout?: ReturnType<typeof setTimeout>
  /** Timeout for auto hiding / Таймаут автоматического скрытия */
  protected timeoutHide?: ReturnType<typeof setTimeout>
  /** Timeout for close delay / Таймаут задержки закрытия */
  protected timeoutTo?: ReturnType<typeof setTimeout>

  /** Animation frame ID for transition staging / Идентификатор кадра анимации для поэтапного перехода */
  protected frameId?: number
  /** Sequence counter to cancel stale async transitions / Счётчик последовательности для отмены устаревших асинхронных переходов */
  protected frameSequence: number = 0
  /** Unmounted flag to prevent post-unmount transitions / Флаг размонтирования для предотвращения переходов после размонтирования */
  protected unmounted: boolean = false
  /** Watcher handle for open prop / Дескриптор наблюдателя за свойством open */
  protected watchStop?: WatchStopHandle

  /** Scroll-sync event listener / Слушатель событий синхронизации скролла */
  protected event?: EventItem<Window, Event>
  /** Document body mouseleave event listener / Слушатель событий ухода мыши с body документа */
  protected eventBody?: EventItem<HTMLElement, Event>

  /**
   * Constructor
   * @param props input data / входные данные
   * @param position function returning position manager / функция, возвращающая менеджер положения элемента
   * @param status function returning status manager / функция, возвращающая менеджер статусов
   * @param style function returning style manager / функция, возвращающая менеджер стилей
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly props: Readonly<TooltipProps>,
    protected readonly position: () => TooltipPosition,
    protected readonly status: () => TooltipStatus,
    protected readonly style: () => TooltipStyle,
    protected readonly emits?: ConstrEmit<TooltipEmits>
  ) {
    super()
  }

  /**
   * Setup lifecycle listeners and watchers on mount.
   *
   * Настройка слушателей жизненного цикла и наблюдателей при монтировании.
   */
  override readonly onMounted = (): void => {
    this.unmounted = false
    this.eventStop()
    this.event = new EventItem(window, ['scroll-sync'], this.onScroll)
    this.eventBody = new EventItem(document.body, ['mouseleave'], this.onScroll)

    this.watchStop?.()
    this.watchStop = watch(() => this.props.open, () => {
      this.toggle(Boolean(this.props.open)).then()
    })

    if (this.props.open) {
      this.toggle(true).then()
    }
  }

  /**
   * Cleanup lifecycle listeners, watchers, and timers on unmount.
   *
   * Очистка слушателей жизненного цикла, наблюдателей и таймеров при размонтировании.
   */
  override readonly onUnmounted = (): void => {
    this.unmounted = true
    this.watchStop?.()
    this.watchStop = undefined
    this.clearAsync()
    this.eventStop()
  }

  /**
   * Start listening to scroll and mouseleave events.
   *
   * Запуск прослушивания событий скролла и ухода мыши.
   */
  eventStart(): void {
    if (!this.props.embedded) {
      this.event?.start()
      this.eventBody?.start()
    }
  }

  /**
   * Stop listening to scroll and mouseleave events.
   *
   * Остановка прослушивания событий скролла и ухода мыши.
   */
  eventStop(): void {
    this.event?.stop()
    this.eventBody?.stop()
  }

  /**
   * Cancel hiding the element.
   *
   * Отмена скрытия элемента.
   */
  noHide(): void {
    if (this.timeoutTo !== undefined) {
      clearTimeout(this.timeoutTo)
      this.timeoutTo = undefined
    }
  }

  /**
   * Element display management.
   *
   * Управление отображением элемента.
   * @param open display status / статус отображения
   * @param flash immediate display without delay / мгновенное отображение без задержки
   * @returns promise that resolves after toggle initiation / промис, разрешающийся после инициации переключения
   */
  readonly toggle = async (
    open: boolean,
    flash?: boolean
  ): Promise<void> => {
    if (this.unmounted) {
      return
    }

    const status = this.status()

    if (
      status.isText()
      && !status.isMatch(open)
    ) {
      this.clearAsync()
      const sequence = this.frameSequence

      if (open) {
        status.setOpen(open)
        status.setShow(true)

        await nextTick()
        if (sequence !== this.frameSequence || this.unmounted) {
          return
        }

        this.position().update()
        status.setPreparation(true)

        await nextTick()
        if (sequence !== this.frameSequence || this.unmounted) {
          return
        }

        this.frameId = requestAnimationFrame(() => {
          this.frameId = undefined
          if (sequence !== this.frameSequence || this.unmounted) {
            return
          }

          this.style().setPreparation(true)
          this.timeout = setTimeout(() => {
            this.timeout = undefined
            if (sequence !== this.frameSequence || this.unmounted) {
              return
            }

            this.frameId = requestAnimationFrame(() => {
              this.frameId = undefined
              if (sequence !== this.frameSequence || this.unmounted) {
                return
              }

              this.style().setShow(true)
              this.eventStart()
              this.emits?.('tooltip', true)

              if (this.props.delayHide && Number(this.props.delayHide) > 0) {
                this.timeoutHide = setTimeout(() => {
                  this.timeoutHide = undefined
                  this.toggle(false).then()
                }, Number(this.props.delayHide))
              }
            })
          }, flash ? 48 : (this.props.delay ?? 0))
        })
      } else {
        this.timeoutTo = setTimeout(() => {
          this.timeoutTo = undefined
          if (sequence !== this.frameSequence || this.unmounted) {
            return
          }

          status.setOpen(open)
          this.style().resetShow()
          this.eventStop()

          this.timeout = setTimeout(() => {
            this.timeout = undefined
            if (sequence !== this.frameSequence || this.unmounted) {
              return
            }

            status.setShow(false)
            status.setPreparation(false)
            this.emits?.('tooltip', false)
          }, 128)
        }, flash ? 48 : 384)
      }
    }
  }

  /**
   * Cancels pending animation frames and timers.
   *
   * Отменяет ожидающие кадры анимации и таймеры.
   */
  protected clearAsync(): void {
    this.frameSequence++

    if (this.timeout !== undefined) {
      clearTimeout(this.timeout)
      this.timeout = undefined
    }

    if (this.timeoutHide !== undefined) {
      clearTimeout(this.timeoutHide)
      this.timeoutHide = undefined
    }

    this.noHide()

    if (this.frameId !== undefined && typeof cancelAnimationFrame !== 'undefined') {
      cancelAnimationFrame(this.frameId)
      this.frameId = undefined
    }
  }

  /**
   * Scroll and mouseleave event handler.
   *
   * Обработчик событий скролла и ухода мыши.
   */
  protected readonly onScroll = (): void => {
    this.toggle(false, true).then()
  }
}

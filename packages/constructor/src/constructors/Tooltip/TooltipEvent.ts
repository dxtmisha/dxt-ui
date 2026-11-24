// ai-none

import { DesignLifecycleAbstract } from '@dxtmisha/functional'

import type { TooltipClassesData } from './TooltipClassesData'
import type { TooltipOpen } from './TooltipOpen'
import type { TooltipStatus } from './TooltipStatus'
import type { TooltipStyle } from './TooltipStyle'

import type { TooltipProps } from './props'

/**
 * Class for working with events.
 *
 * Класс для работы с событиями.
 */
export class TooltipEvent extends DesignLifecycleAbstract {
  /** Next transition indicator / Флаг следующего перехода */
  protected next: boolean = false
  /** Timeout for focus reset / Таймаут сброса фокуса */
  protected timeout?: ReturnType<typeof setTimeout>
  /** Animation frame ID for click handler / Идентификатор кадра анимации для обработчика клика */
  protected frameIdClick?: number
  /** Animation frame ID for mouseover handler / Идентификатор кадра анимации для обработчика наведения */
  protected frameIdMouseover?: number
  /** Sequence counter to cancel stale async handlers / Счётчик последовательности для отмены устаревших асинхронных обработчиков */
  protected frameSequence: number = 0
  /** Unmounted flag to prevent post-unmount event actions / Флаг размонтирования для предотвращения действий после размонтирования */
  protected unmounted: boolean = false

  /**
   * Constructor
   * @param props input data / входные данные
   * @param classesData function returning class names manager / функция, возвращающая менеджер имен классов
   * @param open function returning open state manager / функция, возвращающая менеджер открытия
   * @param status function returning status manager / функция, возвращающая менеджер статусов
   * @param style function returning style manager / функция, возвращающая менеджер стилей
   */
  constructor(
    protected readonly props: Readonly<TooltipProps>,
    protected readonly classesData: () => TooltipClassesData,
    protected readonly open: () => TooltipOpen,
    protected readonly status: () => TooltipStatus,
    protected readonly style: () => TooltipStyle
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
   * Cleanup pending animation frames and timers on unmount.
   *
   * Очистка ожидающих кадров анимации и таймеров при размонтировании.
   */
  override readonly onUnmounted = (): void => {
    this.unmounted = true
    this.clearAsync()
  }

  /**
   * Events on clicking an element in a mobile application.
   *
   * События при клике на элементе в мобильном приложении.
   */
  readonly onClick = (): void => {
    if (this.isNotEmbedded() && !this.unmounted) {
      const sequence = this.frameSequence

      if (this.frameIdClick !== undefined && typeof cancelAnimationFrame !== 'undefined') {
        cancelAnimationFrame(this.frameIdClick)
      }

      this.frameIdClick = requestAnimationFrame(async () => {
        this.frameIdClick = undefined
        if (sequence !== this.frameSequence || this.unmounted) {
          return
        }

        if (!this.next) {
          this.clearTimeout()
          await this.open().toggle(!this.status().open.value, true)
          if (sequence === this.frameSequence && !this.unmounted) {
            this.next = false
          }
        }
      })
    }
  }

  /**
   * Element management events on losing focus.
   *
   * События управления элементом при потере фокуса.
   * @param event mouse event / событие мыши
   */
  readonly onMouseout = ({ relatedTarget }: MouseEvent): void => {
    if (
      this.isNotEmbedded()
      && !this.unmounted
      && relatedTarget
    ) {
      this.open().toggle(
        Boolean(this.classesData().findControlByTarget(relatedTarget))
      ).then()
    }
  }

  /**
   * Element management events on receiving focus.
   *
   * События управления элементом при получении фокуса.
   * @param event mouse event / событие мыши
   */
  readonly onMouseover = ({ target }: MouseEvent): void => {
    if (this.isNotEmbedded() && !this.unmounted) {
      this.clearTimeout()
      this.next = true

      const sequence = this.frameSequence

      if (this.frameIdMouseover !== undefined && typeof cancelAnimationFrame !== 'undefined') {
        cancelAnimationFrame(this.frameIdMouseover)
      }

      this.frameIdMouseover = requestAnimationFrame(async () => {
        this.frameIdMouseover = undefined
        if (sequence !== this.frameSequence || this.unmounted) {
          return
        }

        await this.open().toggle(
          Boolean(this.classesData().findControlByTarget(target))
        )

        if (sequence !== this.frameSequence || this.unmounted) {
          return
        }

        this.timeout = setTimeout(() => {
          this.timeout = undefined
          this.next = false
        }, 640)
      })
    }
  }

  /**
   * Element management events on receiving focus on the tooltip itself.
   *
   * События управления элементом при получении фокуса на самом тултипе.
   */
  readonly onMouseoverTooltip = (): void => {
    if (!this.unmounted) {
      this.open().noHide()
    }
  }

  /**
   * Event of the end of the transition.
   *
   * Событие окончания трансформации.
   * @param event event data / данные события
   */
  readonly onTransitionend = (event: TransitionEvent): void => {
    if (
      event.propertyName === 'transform'
      && this.status().open.value
    ) {
      this.style().setMove(true)
    }
  }

  /**
   * Checks if the component is not embedded.
   *
   * Проверяет, не встроен ли компонент.
   * @returns true if not embedded / true, если не встроен
   */
  protected isNotEmbedded(): boolean {
    return Boolean(!this.props.embedded)
  }

  /**
   * Clears the pending focus reset timeout.
   *
   * Очищает ожидающий таймаут сброса фокуса.
   */
  protected clearTimeout(): void {
    if (this.timeout !== undefined) {
      clearTimeout(this.timeout)
      this.timeout = undefined
    }
  }

  /**
   * Cancels all pending animation frames and timeouts.
   *
   * Отменяет все ожидающие кадры анимации и таймауты.
   */
  protected clearAsync(): void {
    this.frameSequence++
    this.next = false
    this.clearTimeout()

    if (this.frameIdClick !== undefined && typeof cancelAnimationFrame !== 'undefined') {
      cancelAnimationFrame(this.frameIdClick)
      this.frameIdClick = undefined
    }

    if (this.frameIdMouseover !== undefined && typeof cancelAnimationFrame !== 'undefined') {
      cancelAnimationFrame(this.frameIdMouseover)
      this.frameIdMouseover = undefined
    }
  }
}

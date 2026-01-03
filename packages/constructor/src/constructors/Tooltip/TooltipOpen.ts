import { nextTick, type ToRefs, watch } from 'vue'
import { type ConstrEmit, EventItem } from '@dxtmisha/functional'

import { TooltipStyle } from './TooltipStyle'
import { TooltipStatus } from './TooltipStatus'
import { TooltipPosition } from './TooltipPosition'

import type { TooltipProps } from './props'
import type { TooltipEmits } from './types.ts'

/**
 * Class for managing the status of an open window.
 *
 * Класс для управления статусом открытого окна.
 */
export class TooltipOpen {
  protected timeout?: any
  protected timeoutHide?: any
  protected timeoutTo?: any

  protected readonly event: EventItem<Window, Event, any>

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param style object for working with styles/ объект для работы со стилями
   * @param status object for working with statuses/ объект для работы со статусами
   * @param position object for working with the position of the element/ объект для работы с положением элемента
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly props: Readonly<TooltipProps>,
    refs: ToRefs<TooltipProps>,
    protected readonly style: TooltipStyle,
    protected readonly status: TooltipStatus,
    protected readonly position: TooltipPosition,
    protected readonly emits?: ConstrEmit<TooltipEmits>
  ) {
    this.event = new EventItem(window, ['scroll-sync'], this.onScroll)

    watch([refs.open], () => {
      this.toggle(Boolean(this.props.open)).then()
    }, { immediate: this.props.open })
  }

  /**
   * Element display management.
   *
   * Управление отображением элемента.
   * @param open display status/ статус отображения
   * @param flesh immediate display without delay/ мгновенное отображение без задержки
   */
  readonly toggle = async (
    open: boolean,
    flesh?: boolean
  ) => {
    if (
      this.status.isText.value
      && !this.status.isMatch(open)
    ) {
      clearTimeout(this.timeout)
      clearTimeout(this.timeoutHide)

      if (open) {
        this.status.setOpen(open)
        this.status.setShow(true)

        await nextTick()
        this.position.update()
        this.status.setPreparation(true)
        await nextTick()

        requestAnimationFrame(() => {
          this.timeout = setTimeout(() => {
            this.style.setPreparation(true)
            requestAnimationFrame(() => {
              this.style.setShow(true)
              this.event.start()
              this.emits?.('tooltip', true)

              if (this.props.delayHide) {
                this.timeoutHide = setTimeout(() => this.toggle(false), Number(this.props.delayHide))
              }
            })
          }, flesh ? 48 : this.props.delay)
        })
      } else {
        this.timeoutTo = setTimeout(() => {
          this.status.setOpen(open)
          this.style.resetShow()
          this.event.stop()

          this.timeout = setTimeout(() => {
            this.status.setShow(false)
            this.status.setPreparation(false)
            this.emits?.('tooltip', false)
          }, 128)
        }, flesh ? 48 : 256)
      }
    }
  }

  /**
   * Cancel hiding the element.
   *
   * Отмена скрытия элемента.
   */
  noHide() {
    clearTimeout(this.timeoutTo)
  }

  /**
   * Start listening to scroll events.
   *
   * Запуск прослушивания событий скролла.
   */
  eventStop() {
    this.event.stop()
  }

  /**
   * Scroll event management.
   *
   * Управление событиями скролла.
   */
  protected readonly onScroll = () => this.toggle(false, true)
}

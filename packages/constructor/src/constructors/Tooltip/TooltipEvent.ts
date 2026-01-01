import { TooltipOpen } from './TooltipOpen'
import { TooltipStatus } from './TooltipStatus'
import { TooltipClasses } from './TooltipClasses'

/**
 * Class for working with events.
 *
 * Класс для работы с событиями.
 */
export class TooltipEvent {
  protected next: boolean = false
  protected timeout?: any

  /**
   * Constructor
   * @param classes object for working with the class/ объект для работы с классом
   * @param status object for working with statuses/ объект для работы со статусами
   * @param open data opening management/ управление открытием данных
   */
  constructor(
    protected readonly classes: TooltipClasses,
    protected readonly status: TooltipStatus,
    protected readonly open: TooltipOpen
  ) {
  }

  /**
   * Events on clicking an element in a mobile application.
   *
   * События при клике на элементе в мобильном приложении.
   */
  readonly onClick = () => {
    requestAnimationFrame(async () => {
      if (!this.next) {
        clearTimeout(this.timeout)
        await this.open.toggle(!this.status.open.value, true)
        this.next = false
      }
    })
  }

  /**
   * Element management events on receiving focus.
   *
   * События управления элементом при получении фокуса.
   * @param target selected element/ выбранный элемент
   */
  readonly onMouseover = ({ target }: MouseEvent): void => {
    clearTimeout(this.timeout)
    this.next = true

    requestAnimationFrame(async () => {
      await this.open.toggle(
        Boolean(this.classes.findControlByTarget(target as HTMLDivElement))
      )

      this.timeout = setTimeout(() => {
        this.next = false
      }, 640)
    })
  }

  /**
   * Element management events on receiving focus on the tooltip itself.
   *
   * События управления элементом при получении фокуса на самом тултипе.
   */
  readonly onMouseoverTooltip = (): void => {
    this.open.noHide()
  }

  /**
   * Element management events on losing focus.
   *
   * События управления элементом при потере фокуса.
   * @param relatedTarget selected element/ выбранный элемент
   */
  readonly onMouseout = ({ relatedTarget }: MouseEvent): void => {
    if (relatedTarget) {
      this.open.toggle(
        Boolean(this.classes.findControlByTarget(relatedTarget as HTMLDivElement))
      ).then()
    }
  }
}

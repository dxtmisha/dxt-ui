import { ref, type Ref } from 'vue'

/**
 * Helper class for managing the placeholder spacer (square) element /
 * Вспомогательный класс для управления элементом-заполнителем (square)
 */
export class DraggableWrapperSquare {
  /** Old style properties of the square / Старые свойства стилей заполнителя */
  protected old: Record<string, string> = {}

  /** Dynamic route indicating direction index in the DOM / Динамический маршрут направления индекса в DOM */
  readonly route = ref<boolean | undefined>(undefined)

  /**
   * Constructor
   * @param id unique component identifier / уникальный идентификатор компонента
   * @param position root element ref / ссылка на корневой элемент
   * @param square spacer element ref / ссылка на элемент-заполнитель
   */
  constructor(
    protected readonly id: string,
    protected readonly position: Ref<HTMLElement | undefined>,
    protected readonly square: Ref<HTMLElement | undefined>
  ) { }

  /**
   * Checks if the target item is positioned before or after the square /
   * Проверяет, расположен ли целевой элемент до или после заполнителя
   * @param square spacer element / элемент-заполнитель
   * @param item target element / целевой элемент
   * @returns true if route is index direction / true, если маршрут идет по направлению индекса
   */
  protected isRouteIndex(square: HTMLElement, item: HTMLElement): boolean | undefined {
    if (!this.position.value) {
      return undefined
    }

    let route: boolean | undefined
    const items = this.position.value.querySelectorAll<HTMLElement>(`.${this.id}, .cp-show`)

    items.forEach((el) => {
      if (route === undefined) {
        if (el === item) {
          route = true
        } else if (el === square) {
          route = false
        }
      }
    })

    return route
  }

  /**
   * Positions and dimensions the spacer element relative to target item /
   * Позиционирует и задает размеры элемента-заполнителя относительно целевого элемента
   * @param item target element / целевой элемент
   * @param reset indicates if square style should be restored / указывает, следует ли восстановить стиль заполнителя
   */
  goSquare(item: HTMLElement | undefined = undefined, reset = false): void {
    const squareEl = this.square.value
    if (!squareEl) {
      return
    }

    if (item) {
      const style = reset ? this.old : getComputedStyle(item)

      if (!squareEl.classList.contains('cp-show')) {
        this.old = {
          width: style.width || '',
          height: style.height || '',
          marginTop: style.marginTop || '',
          marginRight: style.marginRight || '',
          marginBottom: style.marginBottom || '',
          marginLeft: style.marginLeft || ''
        }
      }

      this.route.value = this.isRouteIndex(squareEl, item)

      if (item.parentElement) {
        item.parentElement.insertBefore(
          squareEl,
          this.route.value ? item : item.nextElementSibling
        )
      }

      squareEl.style.width = style.width || ''
      squareEl.style.height = style.height || ''
      squareEl.style.marginTop = style.marginTop || ''
      squareEl.style.marginRight = style.marginRight || ''
      squareEl.style.marginBottom = style.marginBottom || ''
      squareEl.style.marginLeft = style.marginLeft || ''

      squareEl.classList.add('cp-show')
      document.body.classList.add('d-control-position__body')
    } else {
      document.body.classList.remove('d-control-position__body')
      squareEl.classList.remove('cp-show')

      squareEl.style.width = ''
      squareEl.style.height = ''
      squareEl.style.marginTop = ''
      squareEl.style.marginRight = ''
      squareEl.style.marginBottom = ''
      squareEl.style.marginLeft = ''

      if (this.position.value) {
        this.position.value.insertBefore(squareEl, null)
      }
    }
  }
}

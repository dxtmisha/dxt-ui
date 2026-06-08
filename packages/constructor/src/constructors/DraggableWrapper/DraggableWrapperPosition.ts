import { type Ref, type ComputedRef } from 'vue'

/**
 * Class coordinating dragging movement, positions, drop spots, and element reorder /
 * Класс, координирующий движение перетаскивания, позиции, места сброса и изменение порядка элементов
 */
export class DraggableWrapperPosition {
  /**
   * Constructor
   * @param id unique component identifier / уникальный идентификатор компонента
   * @param position root element ref / ссылка на корневой элемент
   * @param square spacer element ref / ссылка на элемент-заполнитель
   * @param itemActive active draggable element ref / ссылка на активный перемещаемый элемент
   * @param itemSelection selected elements ref / ссылка на список выбранных элементов
   * @param itemStart list of elements involved in drag / список перемещаемых элементов
   * @param itemGo target hover element during drag / целевой элемент наведения
   * @param client coordinate values tracking / отслеживание координат
   * @param emit callback to dispatch the drop event / коллбек для отправки события сброса
   * @param goSquare callback to position the spacer square / коллбек для позиционирования заполнителя
   * @param getSelection callback to retrieve active dataset values / коллбек получения выбранных значений
   */
  constructor(
    protected readonly id: string,
    protected readonly position: Ref<HTMLElement | undefined>,
    protected readonly square: Ref<HTMLElement | undefined>,
    protected readonly itemActive: Ref<HTMLElement | undefined>,
    protected readonly itemSelection: Ref<HTMLElement[] | undefined>,
    protected readonly itemStart: ComputedRef<HTMLElement[]>,
    protected readonly itemGo: Ref<HTMLElement | undefined>,
    protected readonly client: { x: number, y: number, drop: boolean },
    protected readonly emit: () => void,
    protected readonly goSquare: (item?: HTMLElement, reset?: boolean) => void,
    protected readonly getSelection: () => (string | undefined)[]
  ) { }

  /**
   * Checks if element represents a position-spot /
   * Проверяет, является ли элемент местом для позиционирования
   * @param item target element / целевой элемент
   * @returns true if cp-position class is present / true, если присутствует класс cp-position
   */
  isPosition(item: HTMLElement): boolean {
    return item.classList.contains('cp-position')
  }

  /**
   * Checks if element represents a drop-spot /
   * Проверяет, является ли элемент местом для сброса
   * @param item target element / целевой элемент
   * @returns true if cp-drop class is present / true, если присутствует класс cp-drop
   */
  isDrop(item: HTMLElement): boolean {
    return item.classList.contains('cp-drop')
  }

  /**
   * Finds the closest clickable trigger element /
   * Находит ближайший кликабельный элемент-триггер
   * @param target target click target / целевой элемент клика
   * @returns trigger element or null / элемент триггера или null
   */
  getClick(target: HTMLElement): HTMLElement | null {
    return target.closest<HTMLElement>(`.${this.id}.cp-click, .${this.id} .cp-click`)
  }

  /**
   * Identifies the sibling element under pointer coords /
   * Идентифицирует соседний элемент под координатами указателя
   * @param points list of elements at point / список элементов в точке
   * @returns sibling element or undefined / соседний элемент или undefined
   */
  findItem(points: Element[]): HTMLElement | undefined {
    let item: HTMLElement | undefined

    points.forEach((el) => {
      if (
        !item
        && el instanceof HTMLElement
        && el.classList.contains(this.id)
        && !el.classList.contains('cp-active')
        && el !== this.itemActive.value
      ) {
        item = el
      }
    })

    return item
  }

  /**
   * Updates CSS coordinate variables on the container /
   * Обновляет переменные координат CSS на контейнере
   * @param x client x coordinate / координата x клиента
   * @param y client y coordinate / координата y клиента
   */
  toDo(x: number, y: number): void {
    const el = this.position.value
    if (el) {
      el.style.setProperty('--_cp-x', `${x - this.client.x}px`)
      el.style.setProperty('--_cp-y', `${y - this.client.y}px`)
    }
  }

  /**
   * Resets CSS coordinate variables /
   * Сбрасывает переменные координат CSS
   */
  protected resetStyles(): void {
    const el = this.position.value
    if (el) {
      el.style.removeProperty('--_cp-x')
      el.style.removeProperty('--_cp-y')
    }
  }

  /**
   * Reorders drag elements in DOM placing them before spacer square /
   * Изменяет порядок элементов перетаскивания в DOM, помещая их перед заполнителем
   */
  protected insert(): void {
    const squareEl = this.square.value
    if (squareEl && squareEl.parentElement) {
      const parent = squareEl.parentElement
      this.itemStart.value.forEach((item) => {
        parent.insertBefore(item, squareEl)
      })
    }
  }

  /**
   * Coordinates drop-zone selections and spacer square updates /
   * Координирует выбор зоны сброса и обновление заполнителя
   * @param item target drop element / целевой элемент сброса
   */
  toDrop(item: HTMLElement): void {
    if (!this.isDrop(item)) {
      this.resetDrop()
    } else if (item !== this.itemGo.value) {
      this.goSquare()
      item.classList.add('status-dragged')

      this.itemGo.value = item
      this.client.drop = true
    }
  }

  /**
   * Resets drop selection states and classes /
   * Сбрасывает состояния и классы выбора сброса
   */
  resetDrop(): void {
    const goItem = this.itemGo.value
    if (goItem && this.isDrop(goItem)) {
      goItem.classList.remove('status-dragged')
      this.itemGo.value = undefined
      this.client.drop = false
    }
  }

  /**
   * Positions spacer square at target item position /
   * Позиционирует заполнитель на позиции целевого элемента
   * @param item target sibling item / целевой соседний элемент
   */
  toPosition(item: HTMLElement): void {
    if (!this.isPosition(item)) {
      this.resetPosition()
    } else {
      this.goSquare(item)
      this.itemGo.value = item
    }
  }

  /**
   * Finishes dragging session and cleans styles /
   * Завершает сессию перетаскивания и очищает стили
   * @param go force emit reorder logic / принудительно запустить логику изменения порядка
   */
  toNone(go = false): void {
    const active = this.itemActive.value
    if (active && (active.classList.contains('cp-return') || go)) {
      if (this.itemGo.value) {
        this.emit()

        if (!go && !this.client.drop) {
          this.insert()
        }
      }

      this.goSquare()

      this.itemStart.value.forEach((item) => {
        item.classList.remove('cp-active', 'cp-go', 'cp-selection', 'cp-selection-more', 'cp-return')
        item.style.removeProperty('--_cp-width')
        item.style.removeProperty('--_cp-height')
        item.style.removeProperty('--_cp-shift')
      })

      this.itemActive.value = undefined
      this.itemSelection.value = undefined
      this.itemGo.value = undefined

      this.resetStyles()
    }
  }

  /**
   * Resets spacer square back to active element's location /
   * Сбрасывает заполнитель обратно на местоположение активного элемента
   */
  resetPosition(): void {
    if (this.itemGo.value && this.isPosition(this.itemGo.value)) {
      this.goSquare(this.itemActive.value, true)
      this.itemGo.value = undefined
    }
  }

  /**
   * Animates active item return transition back to square /
   * Анимирует переход возврата активного элемента обратно к заполнителю
   */
  protected returnActive(): void {
    const active = this.itemActive.value
    const squareEl = this.square.value
    const posEl = this.position.value

    if (active && squareEl && posEl) {
      const rect = posEl.getBoundingClientRect()
      const rectSquare = squareEl.getBoundingClientRect()

      this.client.x = 0
      this.client.y = 0
      active.classList.add('cp-return')

      this.toDo(rectSquare.left - rect.left, rectSquare.top - rect.top)
    }
  }

  /**
   * Starts drag session, sets initial mouse coordinates /
   * Запускает сессию перетаскивания, устанавливает начальные координаты мыши
   * @param item active draggable element / активный перемещаемый элемент
   * @param clientX screen x coordinate / экранная координата x
   * @param clientY screen y coordinate / экранная координата y
   */
  go(item: HTMLElement, clientX: number, clientY: number): void {
    const posEl = this.position.value
    if (!posEl) {
      return
    }

    const rect = item.getBoundingClientRect()
    const rectPosition = posEl.getBoundingClientRect()

    this.client.x = clientX - rect.left
    this.client.y = clientY - rect.top
    this.client.drop = false

    this.itemActive.value = item

    this.toDo(clientX - rectPosition.left, clientY - rectPosition.top)

    this.goSquare(item)
    item.style.setProperty('--_cp-width', `${rect.width}px`)
    item.style.setProperty('--_cp-height', `${rect.height}px`)
    item.classList.add('cp-active', 'cp-go')
  }

  /**
   * Exits drag session and coordinates final placement /
   * Выходит из сессии перетаскивания и координирует окончательное размещение
   */
  stop(): void {
    if (this.itemActive.value) {
      if (!this.itemGo.value) {
        this.returnActive()
      } else if (this.client.drop) {
        this.resetDrop()
        this.toNone(true)
      } else {
        this.returnActive()
      }
    }
  }
}

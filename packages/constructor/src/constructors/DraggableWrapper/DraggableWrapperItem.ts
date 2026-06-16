import { forEach } from '@dxtmisha/functional'

import { DraggableWrapperItemActive } from './DraggableWrapperItemActive'
import { DraggableWrapperItemGo } from './DraggableWrapperItemGo'
import { DraggableWrapperItemSelection } from './DraggableWrapperItemSelection'
import { DraggableWrapperItemFocus } from './DraggableWrapperItemFocus'

/**
 * Orchestrator model for tracking active, selected, and drop target items.
 *
 * Модель-оркестратор для отслеживания активных, выбранных и целевых элементов перетаскивания.
 */
export class DraggableWrapperItem {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param focus focused element helper / помощник по сфокусированному элементу
   * @param active active item helper / помощник по активному элементу
   * @param selection selected items helper / помощник по выбранным элементам
   * @param go drop position target helper / помощник по целевой позиции сброса
   */
  constructor(
    protected readonly focus: DraggableWrapperItemFocus,
    protected readonly active: DraggableWrapperItemActive,
    protected readonly selection: DraggableWrapperItemSelection,
    protected readonly go: DraggableWrapperItemGo
  ) {
  }

  /**
   * Returns the focused item helper.
   *
   * Возвращает помощник по сфокусированному элементу.
   * @returns focused item helper / помощник по сфокусированному элементу
   */
  getFocus(): DraggableWrapperItemFocus {
    return this.focus
  }

  /**
   * Returns the active item helper.
   *
   * Возвращает помощник по активному элементу.
   * @returns active item helper / помощник по активному элементу
   */
  getActive(): DraggableWrapperItemActive {
    return this.active
  }

  /**
   * Returns the selected items helper.
   *
   * Возвращает помощник по выбранным элементам.
   * @returns selected items helper / помощник по выбранным элементам
   */
  getSelection(): DraggableWrapperItemSelection {
    return this.selection
  }

  /**
   * Returns the target drop position helper.
   *
   * Возвращает помощник по целевой позиции сброса.
   * @returns target drop position helper / помощник по целевой позиции сброса
   */
  getGo(): DraggableWrapperItemGo {
    return this.go
  }

  /**
   * Returns the list of elements currently involved in drag action.
   *
   * Возвращает список элементов, участвующих в процессе перетаскивания в данный момент.
   * @returns array of HTML elements / массив HTML-элементов
   */
  get(): HTMLElement[] {
    const selection = this.selection.get()

    if (selection) {
      return selection
    }

    const active = this.active.get()

    if (active) {
      return [active]
    }

    return []
  }

  /**
   * Returns value list of items involved in drag action.
   *
   * Возвращает список значений элементов, участвующих в перетаскивании.
   * @returns array of item values / массив значений элементов
   */
  getValues(): string[] {
    return forEach(this.get(), item => item?.dataset?.value) as string[]
  }

  /**
   * Resets status of all tracked items.
   *
   * Сбрасывает состояние всех отслеживаемых элементов.
   * @returns this instance / текущий экземпляр класса
   */
  reset(): this {
    this.focus.reset()
    this.active.reset()
    this.selection.reset()
    this.go.reset()

    return this
  }
}

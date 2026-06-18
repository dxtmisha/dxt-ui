import { ref, watch, onMounted, type Ref } from 'vue'

import type { SelectableAreaClassesData } from './SelectableAreaClassesData'
import type { SelectableAreaProps } from './props'
import type { SelectableAreaEmit } from './SelectableAreaEmit'

/**
 * Class managing item selection logic (click, shift-click, cmd-click).
 *
 * Класс, управляющий логикой выбора элементов (клик, shift-клик, cmd-клик).
 */
export class SelectableAreaItem {
  /** Reference to the currently selected values / Ссылка на текущие выбранные значения */
  protected readonly propSelected: Ref<string[]>
  /** Reference to the last selected item / Ссылка на последний выбранный элемент */
  protected lastSelection: HTMLElement | undefined

  /** Event emit helper class / Вспомогательный класс вызова событий */
  protected eventEmit?: SelectableAreaEmit

  /**
   * Constructor.
   *
   * Конструктор.
   * @param classes classes manager / менеджер классов
   * @param props properties / свойства
   */
  constructor(
    protected readonly classes: SelectableAreaClassesData,
    protected readonly props: SelectableAreaProps
  ) {
    this.propSelected = ref<string[]>(
      Array.isArray(props.selected)
        ? [...props.selected]
        : (props.selected ? [props.selected] : [])
    )

    watch(() => props.selected, (data) => {
      this.propSelected.value = Array.isArray(data)
        ? [...data]
        : (data ? [data] : [])
      this.updateSelection()
    }, { deep: true })

    watch(this.propSelected, () => this.updateSelection(), { deep: true })

    onMounted(() => this.updateSelection())
  }

  /**
   * Returns current selected values.
   *
   * Возвращает текущие выбранные значения.
   */
  getSelectedValues(): string[] {
    return this.propSelected.value
  }

  /**
   * Updates selected values.
   *
   * Обновляет выбранные значения.
   */
  setSelectedValues(values: string[]): void {
    this.propSelected.value = values
  }

  /**
   * Sets event emit helper instance.
   *
   * Устанавливает экземпляр вспомогательного класса вызова событий.
   * @param emit event emit helper / вспомогательный класс вызова событий
   */
  setEmit(emit: SelectableAreaEmit): void {
    this.eventEmit = emit
  }

  /**
   * Helper to update the CSS selection classes in the DOM.
   *
   * Вспомогательный метод для обновления классов выбора в DOM.
   */
  updateSelection(): void {
    const values = this.propSelected.value
    const items = this.classes.findItems()

    items.forEach((item) => {
      const value = item.dataset?.value
      if (value !== undefined && values.includes(value)) {
        item.classList.add(this.classes.list.selected)
      } else {
        item.classList.remove(this.classes.list.selected)
      }
    })
  }

  /**
   * Sets the selected items programmatically.
   *
   * Программно устанавливает выбранные элементы.
   * @param value values to select / значения для выбора
   * @param event whether to trigger emit / нужно ли вызывать emit
   */
  setSelected(value: string | string[], event = true): void {
    this.propSelected.value = Array.isArray(value) ? [...value] : [value]
    this.updateSelection()

    if (event) {
      this.eventEmit?.on()
    }
  }

  /**
   * Resets the selection.
   *
   * Сбрасывает выбор.
   * @param event whether to trigger emit / нужно ли вызывать emit
   */
  reset(event = true): void {
    this.propSelected.value = []
    this.updateSelection()

    if (event) {
      this.eventEmit?.on()
    }
  }

  /**
   * Normal click selection (selects single item).
   *
   * Обычный выбор кликом (выбирает один элемент).
   * @param value item value / значение элемента
   */
  selectionByClick(value: string): void {
    this.lastSelection = this.classes.findByValue(value)
    this.propSelected.value = [value]
  }

  /**
   * Meta click selection (toggles item in selection).
   *
   * Выбор с зажатым meta (переключает элемент в выборе).
   * @param value item value / значение элемента
   */
  selectionByMeta(value: string): void {
    const newValue = [...this.propSelected.value]
    const index = newValue.indexOf(value)
    if (index === -1) {
      newValue.push(value)
    } else {
      newValue.splice(index, 1)
    }
    this.propSelected.value = newValue
  }

  /**
   * Shift click selection (selects range of items).
   *
   * Выбор с зажатым shift (выбирает диапазон элементов).
   * @param value item value / значение элемента
   */
  selectionByShift(value: string): void {
    if (this.lastSelection && this.lastSelection.dataset?.value !== String(value)) {
      let start = false
      let end = false
      const newSelection: string[] = []

      const items = this.classes.findItems()
      items.forEach((item) => {
        if (!end) {
          if (
            item === this.lastSelection
            || item.dataset?.value === String(value)
          ) {
            if (start) {
              end = true
            } else {
              start = true
            }
          }

          if (start && item.dataset?.value) {
            newSelection.push(item.dataset.value)
          }
        }
      })

      this.propSelected.value = newSelection
    } else {
      this.selectionByClick(value)
    }
  }
}

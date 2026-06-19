import { ref, watch, onMounted, type ToRefs } from 'vue'
import { toArray } from '@dxtmisha/functional-basic'

import type { SelectableAreaClassesData } from './SelectableAreaClassesData'

import type { SelectableAreaProps } from './props'

/**
 * Class managing item selection logic (click, shift-click, cmd-click).
 *
 * Класс, управляющий логикой выбора элементов (клик, shift-клик, cmd-клик).
 */
export class SelectableAreaItem {
  /** Reference to the currently selected values / Ссылка на текущие выбранные значения */
  readonly item = ref<string[]>([])

  /** Reference to the last selected item / Ссылка на последний выбранный элемент */
  protected lastSelection: HTMLElement | undefined

  /**
   * Constructor.
   *
   * Конструктор.
   * @param props properties / свойства
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param classes classes manager / менеджер классов
   */
  constructor(
    protected readonly props: SelectableAreaProps,
    protected readonly refs: ToRefs<SelectableAreaProps>,
    protected readonly classes: SelectableAreaClassesData
  ) {
    this.updateItemByProps()

    onMounted(() => {
      watch(
        [refs.selected],
        () => {
          this.updateItemByProps()
          this.updateSelection()
        },
        { deep: true }
      )

      watch(
        this.item,
        () => this.updateSelection(),
        { deep: true }
      )
    })
  }

  /**
   * Returns current selected values.
   *
   * Возвращает текущие выбранные значения.
   * @returns array of selected values / массив выбранных значений
   */
  get(): string[] {
    return this.item.value
  }

  /**
   * Returns a copy of the currently selected values.
   *
   * Возвращает копию текущих выбранных значений.
   * @returns copy of selected values array / копия массива выбранных значений
   */
  getNewArray(): string[] {
    return [...this.item.value]
  }

  /**
   * Updates selected values.
   *
   * Обновляет выбранные значения.
   * @param value new selected value or array of values / новое выбранное значение или массив значений
   */
  readonly set = (value: string | string[]): void => {
    this.item.value = toArray(value)
  }

  /**
   * Resets the selection.
   *
   * Сбрасывает выбор.
   */
  readonly reset = (): void => {
    this.item.value = []
  }

  /**
   * Normal click selection (selects single item).
   *
   * Обычный выбор кликом (выбирает один элемент).
   * @param value item value / значение элемента
   */
  selectionByClick(value: string): this {
    this.lastSelection = this.classes.findByValue(value)
    this.item.value = [value]
    return this
  }

  /**
   * Meta click selection (toggles item in selection).
   *
   * Выбор с зажатым meta (переключает элемент в выборе).
   * @param value item value / значение элемента
   */
  selectionByMeta(value: string): this {
    const newValue = [...this.item.value]
    const index = newValue.indexOf(value)

    if (index === -1) {
      newValue.push(value)
    } else {
      newValue.splice(index, 1)
    }

    this.item.value = newValue
    return this
  }

  /**
   * Shift click selection (selects range of items).
   *
   * Выбор с зажатым shift (выбирает диапазон элементов).
   * @param value item value / значение элемента
   */
  selectionByShift(value: string): this {
    if (
      this.lastSelection
      && this.lastSelection.dataset?.value !== String(value)
    ) {
      const items = this.classes.findItems()
      const newValue: string[] = []

      let start = false
      let end = false

      for (const item of items) {
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

        if (
          start
          && item.dataset?.value
        ) {
          newValue.push(item.dataset.value)
        }

        if (end) {
          break
        }
      }

      this.item.value = newValue
    } else {
      this.selectionByClick(value)
    }

    return this
  }

  /**
   * Updates selection values based on the component properties.
   *
   * Обновляет значения выбора на основе свойств компонента.
   */
  protected updateItemByProps(): this {
    if (this.props.selected) {
      this.item.value = toArray(this.props.selected)
    } else {
      this.item.value = []
    }

    return this
  }

  /**
   * Helper to update the CSS selection classes in the DOM.
   *
   * Вспомогательный метод для обновления классов выбора в DOM.
   */
  protected updateSelection(): this {
    const values = this.item.value
    const items = this.classes.findItems()

    items.forEach((item) => {
      const value = item.dataset?.value

      if (
        value !== undefined
        && values.includes(value)
      ) {
        item.classList.add(this.classes.list.selected)
      } else {
        item.classList.remove(this.classes.list.selected)
      }
    })

    return this
  }
}

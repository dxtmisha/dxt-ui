// ai-none

import { ref, watch, type WatchStopHandle } from 'vue'
import { DesignLifecycleAbstract } from '@dxtmisha/functional'
import { toArray } from '@dxtmisha/functional-basic'

import type { SelectableAreaClassesData } from './SelectableAreaClassesData'

import type { SelectableAreaProps } from './props'

/**
 * Class managing item selection logic (click, shift-click, cmd-click).
 *
 * Класс, управляющий логикой выбора элементов (клик, shift-клик, cmd-клик).
 */
export class SelectableAreaItem extends DesignLifecycleAbstract {
  /** Reference to the last selected item / Ссылка на последний выбранный элемент */
  protected lastSelection: HTMLElement | undefined

  /** Stop handle for the reactive props watcher / Функция остановки реактивного наблюдателя свойств */
  protected stopWatchProps?: WatchStopHandle

  /** Stop handle for the reactive item watcher / Функция остановки реактивного наблюдателя выбранных элементов */
  protected stopWatchItem?: WatchStopHandle

  /**
   * Constructor.
   *
   * Конструктор.
   * @param props properties / свойства
   * @param classes classes manager factory / фабрика менеджера классов
   */
  constructor(
    protected readonly props: Readonly<SelectableAreaProps>,
    protected readonly classes: () => SelectableAreaClassesData
  ) {
    super()

    this.updateItemByProps()
  }

  /** Reference to the currently selected values / Ссылка на текущие выбранные значения */
  readonly item = ref<string[]>([])

  /**
   * Registers reactive watchers and synchronizes initial selection classes on mount.
   *
   * Регистрирует реактивные наблюдатели и синхронизирует начальные классы выбора при монтировании.
   */
  override readonly onMounted = (): void => {
    this.stopWatchers()
    this.updateSelection()

    this.stopWatchProps = watch(
      () => [this.props.selected, this.props.modelSelected],
      () => {
        this.updateItemByProps()
        this.updateSelection()
      },
      { deep: true }
    )

    this.stopWatchItem = watch(
      this.item,
      () => this.updateSelection(),
      { deep: true }
    )
  }

  /**
   * Stops reactive watchers and releases cached DOM references on unmount.
   *
   * Останавливает реактивные наблюдатели и освобождает кэшированные ссылки на DOM при размонтировании.
   */
  override readonly onUnmounted = (): void => {
    this.stopWatchers()
    this.lastSelection = undefined
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
  readonly set = (value: string | readonly string[]): void => {
    const nextValue = [...toArray(value)]

    if (!this.isSameSelection(nextValue)) {
      this.item.value = nextValue
    }
  }

  /**
   * Resets the selection.
   *
   * Сбрасывает выбор.
   */
  readonly reset = (): void => {
    this.lastSelection = undefined

    if (this.item.value.length > 0) {
      this.item.value = []
    }
  }

  /**
   * Normal click selection (selects single item).
   *
   * Обычный выбор кликом (выбирает один элемент).
   * @param value item value / значение элемента
   * @returns current instance / текущий экземпляр класса
   */
  selectionByClick(value: string): this {
    this.lastSelection = this.classes().findByValue(value)

    if (!this.isSameSelection([value])) {
      this.item.value = [value]
    }

    return this
  }

  /**
   * Meta click selection (toggles item in selection).
   *
   * Выбор с зажатым meta (переключает элемент в выборе).
   * @param value item value / значение элемента
   * @returns current instance / текущий экземпляр класса
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
   * @returns current instance / текущий экземпляр класса
   */
  selectionByShift(value: string): this {
    if (
      this.lastSelection
      && this.lastSelection.dataset?.value !== String(value)
    ) {
      const items = this.classes().findItems()

      if (items.includes(this.lastSelection)) {
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
            && item.dataset?.value !== undefined
          ) {
            newValue.push(item.dataset.value)
          }

          if (end) {
            break
          }
        }

        if (!this.isSameSelection(newValue)) {
          this.item.value = newValue
        }

        return this
      }
    }

    this.selectionByClick(value)
    return this
  }

  /**
   * Checks whether the provided selection array matches the current selection in order.
   *
   * Проверяет, совпадает ли переданный массив выбора с текущим выбором в том же порядке.
   * @param values candidate selection values / проверяемые значения выбора
   * @returns true if identical / true, если массивы совпадают
   */
  protected isSameSelection(values: readonly string[]): boolean {
    const current = this.item.value

    if (current.length !== values.length) {
      return false
    }

    for (let index = 0; index < current.length; index++) {
      if (current[index] !== values[index]) {
        return false
      }
    }

    return true
  }

  /**
   * Updates selection values based on the component properties.
   *
   * Обновляет значения выбора на основе свойств компонента.
   * @returns current instance / текущий экземпляр класса
   */
  protected updateItemByProps(): this {
    const selected = this.props.selected ?? this.props.modelSelected
    const nextValue = selected !== undefined
      ? [...toArray(selected)]
      : []

    if (!this.isSameSelection(nextValue)) {
      this.item.value = nextValue
    }

    return this
  }

  /**
   * Helper to update the CSS selection classes in the DOM.
   *
   * Вспомогательный метод для обновления классов выбора в DOM.
   * @returns current instance / текущий экземпляр класса
   */
  protected updateSelection(): this {
    const selectedSet = new Set(this.item.value)
    const classesData = this.classes()
    const items = classesData.findItems()
    const selectedClass = classesData.list.selected

    for (const item of items) {
      const value = item.dataset?.value

      if (
        value !== undefined
        && selectedSet.has(value)
      ) {
        item.classList.add(selectedClass)
      } else {
        item.classList.remove(selectedClass)
      }
    }

    return this
  }

  /**
   * Stops active reactive watchers.
   *
   * Останавливает активные реактивные наблюдатели.
   */
  protected stopWatchers(): void {
    this.stopWatchProps?.()
    this.stopWatchProps = undefined

    this.stopWatchItem?.()
    this.stopWatchItem = undefined
  }
}

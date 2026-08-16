import type { EnabledInclude } from '../../classes/EnabledInclude'

import type { ClockDialEmit } from './ClockDialEmit'
import type { ClockDialList } from './ClockDialList'
import type { ClockDialValue } from './ClockDialValue'

import type { ClockDialMarkItem } from './basicTypes'
import type { ClockDialProps } from './props'

/**
 * Class for managing keyboard navigation and step control for the ClockDial component.
 *
 * Класс для управления клавиатурной навигацией и шагами для компонента ClockDial.
 */
export class ClockDialControl {
  /**
   * Constructor
   * @param props component input properties / входные свойства компонента
   * @param emitsItem event emission manager / менеджер эмита событий
   * @param enabled enabled state helper instance / экземпляр помощника состояния активности
   * @param list clock dial list manager / менеджер списка циферблата часов
   * @param valueItem time values manager / менеджер значений времени
   */
  constructor(
    protected readonly props: ClockDialProps,
    protected readonly emitsItem: ClockDialEmit,
    protected readonly enabled: EnabledInclude,
    protected readonly list: ClockDialList,
    protected readonly valueItem: ClockDialValue
  ) { }

  /**
   * Decreases the clock value by one step counterclockwise.
   *
   * Уменьшает значение часов на один шаг против часовой стрелки.
   */
  readonly decrease = (): void => {
    if (
      !this.enabled.isEnabled
      || this.props.clock
    ) {
      return
    }

    this.step(false)
  }

  /**
   * Increases the clock value by one step clockwise.
   *
   * Увеличивает значение часов на один шаг по часовой стрелке.
   */
  readonly increase = (): void => {
    if (
      !this.enabled.isEnabled
      || this.props.clock
    ) {
      return
    }

    this.step(true)
  }

  /**
   * Navigates to the first or last available clock mark.
   *
   * Переходит к первой или последней доступной метке часов.
   * @param isEnd flag indicating last mark (true) or first mark (false) / флаг последней метки (true) или первой метки (false)
   */
  readonly toEdge = (isEnd: boolean): void => {
    const enabledMarks = this.getEnabledMarks()

    if (enabledMarks.length === 0) {
      return
    }

    const targetItem = isEnd
      ? enabledMarks[enabledMarks.length - 1]
      : enabledMarks[0]

    if (targetItem) {
      this.updateValue(targetItem.value)
    }
  }

  /**
   * Finds the index of the closest mark to the current value.
   *
   * Находит индекс ближайшей метки к текущему значению.
   * @param currentValue current numeric clock value / текущее числовое значение часов
   * @param enabledMarks array of enabled mark items / массив активных элементов меток
   * @returns closest mark index / индекс ближайшей метки
   */
  protected findClosestIndex(
    currentValue: number,
    enabledMarks: ClockDialMarkItem[]
  ): number {
    let closestIndex = 0
    let closestDifference = Infinity

    for (let index = 0; index < enabledMarks.length; index++) {
      const difference = Math.abs(enabledMarks[index].value - currentValue)

      if (difference < closestDifference) {
        closestDifference = difference
        closestIndex = index
      }
    }

    return closestIndex
  }

  /**
   * Returns list of non-disabled clock dial marks.
   *
   * Возвращает список неотключенных меток циферблата часов.
   * @returns array of enabled mark items / массив активных элементов меток
   */
  protected getEnabledMarks(): ClockDialMarkItem[] {
    return this.list.marks.value.filter(item => !item.disabled)
  }

  /**
   * Calculates the next index based on movement direction.
   *
   * Вычисляет следующий индекс на основе направления движения.
   * @param index current index / текущий индекс
   * @param isIncrease direction flag / флаг направления
   * @param length total length of items / общая длина элементов
   * @returns next calculated index / следующий вычисленный индекс
   */
  protected getNextIndex(
    index: number,
    isIncrease: boolean,
    length: number
  ): number {
    return isIncrease
      ? (index + 1) % length
      : (index - 1 + length) % length
  }

  /**
   * Navigates to the next or previous available clock mark.
   *
   * Переходит к следующей или предыдущей доступной метке часов.
   * @param isIncrease direction flag (true for forward/clockwise, false for backward/counterclockwise) / флаг направления (true для перехода вперед/по часовой, false для перехода назад/против часовой)
   */
  protected step(isIncrease: boolean): void {
    const enabledMarks = this.getEnabledMarks()

    if (
      enabledMarks.length === 0
      || this.stepInitial(isIncrease, enabledMarks)
    ) {
      return
    }

    const currentValue = this.valueItem.value
    const currentIndex = enabledMarks.findIndex(item => item.value === currentValue)
    const baseIndex = currentIndex !== -1
      ? currentIndex
      : this.findClosestIndex(currentValue, enabledMarks)
    const nextIndex = this.getNextIndex(baseIndex, isIncrease, enabledMarks.length)
    const targetItem = enabledMarks[nextIndex]

    if (targetItem) {
      this.updateValue(targetItem.value)
    }
  }

  /**
   * Sets initial value if selection is currently not visible.
   *
   * Устанавливает начальное значение, если выбор в данный момент не отображается.
   * @param isIncrease direction flag / флаг направления
   * @param enabledMarks array of enabled mark items / массив активных элементов меток
   * @returns true if initial step was handled / true, если начальный шаг был обработан
   */
  protected stepInitial(
    isIncrease: boolean,
    enabledMarks: ClockDialMarkItem[]
  ): boolean {
    if (this.valueItem.isSelectVisible()) {
      return false
    }

    const initialItem = isIncrease
      ? enabledMarks[0]
      : enabledMarks[enabledMarks.length - 1]

    this.updateValue(initialItem.value)
    return true
  }

  /**
   * Updates model value and emits input and change events.
   *
   * Обновляет значение модели и генерирует события input и change.
   * @param value numeric value to set / числовое значение для установки
   */
  protected updateValue(value: number): void {
    this.valueItem.set(value)
    this.emitsItem.emit('input')
    this.emitsItem.emit('change')
  }
}

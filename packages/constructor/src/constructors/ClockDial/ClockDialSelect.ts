// ai-none

import type { EnabledInclude } from '../../classes/EnabledInclude'
import type { ModelValueInclude } from '../../classes/ModelValueInclude'
import type { ClockDialMarkItem } from './basicTypes'
import type { ClockDialList } from './ClockDialList'
import type { ClockDialProps } from './props'

/**
 * Class for managing element hit-testing, coordinate calculations, and item selection.
 *
 * Класс для управления проверкой попадания в элементы, вычислениями координат и выбором элементов.
 */
export class ClockDialSelect {
  /** Map of rendered item DOM elements / Карта отрендеренных DOM-элементов делений */
  protected readonly itemElements = new Map<number, HTMLElement>()

  /**
   * Constructor.
   *
   * Конструктор.
   * @param props component input properties / входные свойства компонента
   * @param enabled enabled state helper factory / фабрика помощника состояния активности
   * @param list clock dial list manager factory / фабрика менеджера списка циферблата часов
   * @param model model value helper factory / фабрика помощника значения модели
   */
  constructor(
    protected readonly props: Readonly<ClockDialProps>,
    protected readonly enabled: () => EnabledInclude,
    protected readonly list: () => ClockDialList,
    protected readonly model: () => ModelValueInclude<number>
  ) {}

  /**
   * Checks if coordinate selection is active for current props.
   *
   * Проверяет, активен ли выбор по координатам для текущих свойств.
   * @param props component input properties / входные свойства компонента
   * @returns true if selection is enabled / true, если выбор доступен
   */
  static is(props?: Readonly<ClockDialProps>): boolean {
    return !props?.clock
  }

  /**
   * Registers or unregisters a DOM element reference for a clock division.
   *
   * Регистрирует или удаляет ссылку на DOM-элемент для деления часов.
   * @param index item index / индекс элемента
   * @param element target DOM element / целевой DOM-элемент
   */
  setElement(index: number, element?: HTMLElement | null): void {
    if (element) {
      this.itemElements.set(index, element)
    } else {
      this.itemElements.delete(index)
    }
  }

  /**
   * Resets and clears the registered DOM elements map.
   *
   * Сбрасывает и очищает карту зарегистрированных DOM-элементов.
   * @returns this instance / текущий экземпляр
   */
  reset(): this {
    this.itemElements.clear()
    return this
  }

  /**
   * Determines and selects the closest clock dial mark item from client screen coordinates.
   *
   * Определяет и выбирает ближайший элемент метки циферблата часов по экранным координатам клиента.
   * @param clientX horizontal client coordinate / горизонтальная координата клиента
   * @param clientY vertical client coordinate / вертикальная координата клиента
   * @returns selected clock dial mark item or null / выбранный элемент метки циферблата или null
   */
  readonly selectByCoordinates = (
    clientX: number,
    clientY: number
  ): ClockDialMarkItem | null => {
    if (
      !this.enabled().isEnabled
      || this.props.clock
      || this.itemElements.size === 0
    ) {
      return null
    }

    const marks = this.list().marks.value
    const length = marks.length

    if (length === 0) {
      return null
    }

    let closestDistance: number | undefined = undefined
    let closestItem: ClockDialMarkItem | undefined = undefined

    for (let index = 0; index < length; index++) {
      const item = marks[index]

      if (!item || item.disabled) {
        continue
      }

      const itemElement = this.itemElements.get(index)

      if (!itemElement) {
        continue
      }

      const boundingRect = itemElement.getBoundingClientRect()
      const centerX = boundingRect.left + boundingRect.width / 2
      const centerY = boundingRect.top + boundingRect.height / 2

      const distanceX = clientX - centerX
      const distanceY = clientY - centerY
      const distance = (distanceX * distanceX) + (distanceY * distanceY)

      if (closestDistance === undefined || distance < closestDistance) {
        closestDistance = distance
        closestItem = item
      }
    }

    const model = this.model()

    if (
      closestItem
      && closestItem.value !== model.get()
    ) {
      model.set(closestItem.value)
      return closestItem
    }

    return null
  }
}

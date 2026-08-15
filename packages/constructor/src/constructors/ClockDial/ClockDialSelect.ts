import type { ModelValueInclude } from '../../classes/ModelValueInclude'
import type { EnabledInclude } from '../../classes/EnabledInclude'
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
   * Constructor
   * @param props component input properties / входные свойства компонента
   * @param list clock dial list manager / менеджер списка циферблата часов
   * @param model model value helper instance / экземпляр помощника значения модели
   * @param enabled enabled state helper instance / экземпляр помощника состояния активности
   */
  constructor(
    protected readonly props: ClockDialProps,
    protected readonly list: ClockDialList,
    protected readonly model: ModelValueInclude<number>,
    protected readonly enabled: EnabledInclude
  ) { }

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
    if (!this.enabled.isEnabled) {
      return null
    }

    const list = this.list.marks.value
    let closestDistance: number | undefined = undefined
    let closestItem: ClockDialMarkItem | undefined = undefined

    for (let index = 0; index < list.length; index++) {
      const itemElement = this.itemElements.get(index)

      if (!itemElement) {
        continue
      }

      const rect = itemElement.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const distanceX = clientX - centerX
      const distanceY = clientY - centerY
      const distance = (distanceX * distanceX) + (distanceY * distanceY)

      if (closestDistance === undefined || distance < closestDistance) {
        closestDistance = distance
        closestItem = list[index]
      }
    }

    if (
      closestItem
      && !closestItem.disabled
      && closestItem.value !== this.model.getValue()
    ) {
      this.model.set(closestItem.value)
      return closestItem
    }

    return null
  }
}

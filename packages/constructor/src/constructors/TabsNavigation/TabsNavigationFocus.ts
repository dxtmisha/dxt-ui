import { ref } from 'vue'
import {
  goScrollTo,
  isNull,
  type ListSelectedItem,
  toArray
} from '@dxtmisha/functional'

import { escapeAttributeValue } from '../../functions/escapeAttributeValue'
import type { HorizontalScrollInclude } from '../HorizontalScroll'
import type { TabsNavigationSelected } from './TabsNavigationSelected'

/**
 * Class for managing focus navigation, programmatic focus movements, and tracking active tab focus states.
 *
 * Класс для управления навигацией фокуса, программным перемещением фокуса и отслеживанием активных состояний фокуса вкладок.
 */
export class TabsNavigationFocus {
  /**
   * Constructor for initializing focus management helper.
   *
   * Конструктор для инициализации помощника управления фокусом.
   * @param scroll lazy getter returning scroll handling helper / ленивый геттер, возвращающий вспомогательный класс прокрутки
   * @param selected lazy getter returning selected value manager / ленивый геттер, возвращающий менеджер выделенного значения
   */
  constructor(
    protected readonly scroll: () => HorizontalScrollInclude,
    protected readonly selected: () => TabsNavigationSelected
  ) {
  }

  /** Reactive ref holding the current focused index/value / Реактивная ссылка, содержащая текущий сфокусированный индекс/значение */
  readonly item = ref<ListSelectedItem>()

  /**
   * Returns the current focused tab item value or undefined.
   *
   * Возвращает значение текущей сфокусированной вкладки или undefined.
   * @returns focused value or undefined / сфокусированное значение или undefined
   */
  get(): ListSelectedItem | undefined {
    if (
      !isNull(this.item.value)
      && this.item.value !== ''
    ) {
      return this.item.value
    }

    return undefined
  }

  /**
   * Programmatically sets focus to a specified tab index and scrolls its DOM element into view.
   *
   * Программным образом устанавливает фокус на указанный индекс вкладки и прокручивает его DOM-элемент в область видимости.
   * @param focus index to set focus to / индекс для установки фокуса
   * @returns instance of this focus helper class / текущий экземпляр класса помощника фокуса
   */
  set(focus?: ListSelectedItem): this {
    this.item.value = focus
    this.toScroll()

    return this
  }

  /**
   * Resets the active focus state value to undefined.
   *
   * Сбрасывает активное значение фокуса на значение undefined.
   * @returns instance of this focus helper class / текущий экземпляр класса помощника фокуса
   */
  reset(): this {
    this.item.value = undefined
    return this
  }

  /**
   * Applies the current focused value as the selected tab state.
   *
   * Применяет текущее сфокусированное значение к выделенному состоянию вкладки.
   * @returns instance of this focus helper class / текущий экземпляр класса помощника фокуса
   */
  apply(): this {
    this.selected().set(this.item.value)
    return this
  }

  /**
   * Sets the initial focus value based on the currently selected tab.
   *
   * Устанавливает начальное значение фокуса на основе текущей выбранной вкладки.
   * @returns instance of this focus helper class / текущий экземпляр класса помощника фокуса
   */
  position(): this {
    const selected = this.selected().actualItem.value

    this.item.value = !isNull(selected)
      ? toArray(selected)[0]
      : undefined

    return this
  }

  /**
   * Scrolls to the currently focused tab item.
   *
   * Прокручивает к текущему сфокусированному элементу вкладки.
   * @returns instance of this focus helper class / текущий экземпляр класса помощника фокуса
   */
  toScroll(): this {
    const itemElement = this.getElement()
    const mainElement = this.scroll().elementHtml

    if (
      itemElement
      && mainElement
    ) {
      goScrollTo(mainElement, itemElement)
    }

    return this
  }

  /**
   * Resolves and returns the actual focused HTML element by querying data-value attribute.
   *
   * Находит и возвращает сфокусированный HTML-элемент путем поиска по атрибуту data-value.
   * @returns focused HTMLElement or undefined / сфокусированный HTMLElement или undefined
   */
  protected getElement(): HTMLElement | undefined {
    const value = this.get()

    if (!isNull(value)) {
      const escapedValue = escapeAttributeValue(value)

      return this.scroll().elementHtml
        ?.querySelector<HTMLElement>(`[data-value="${escapedValue}"]`) || undefined
    }

    return undefined
  }
}

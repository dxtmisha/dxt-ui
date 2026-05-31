import { type Ref, ref } from 'vue'
import { type NumberOrStringOrBoolean, toArray } from '@dxtmisha/functional'

import { TabsNavigationSelected } from './TabsNavigationSelected'

/**
 * Class for managing focus navigation, programmatic focus movements, and tracking active tab focus states.
 *
 * Класс для управления навигацией фокуса, программным перемещением фокуса и отслеживанием активных состояний фокуса вкладок.
 */
export class TabsNavigationFocus {
  /** Reactive ref holding the current focused index/value / Реактивная ссылка, содержащая текущий сфокусированный индекс/значение */
  readonly item = ref<NumberOrStringOrBoolean>()

  /**
   * Constructor for initializing focus management helper.
   *
   * Конструктор для инициализации помощника управления фокусом.
   * @param element reactive reference of the main tab container / реактивная ссылка главного контейнера вкладок
   * @param selected selected value manager instance / экземпляр менеджера выделенного значения
   */
  constructor(
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly selected: TabsNavigationSelected
  ) {
  }

  /**
   * Returns the current focused tab item index as string or undefined.
   *
   * Возвращает строковый индекс текущей сфокусированной вкладки или undefined.
   * @returns index string or undefined / строковый индекс или undefined
   */
  get(): string | undefined {
    if (this.item.value) {
      return String(this.item.value)
    }

    return undefined
  }

  /**
   * Applies the current focused value as the selected tab state.
   *
   * Применяет текущее сфокусированное значение к выделенному состоянию вкладки.
   * @returns instance of this focus helper class / текущий экземпляр класса помощника фокуса
   */
  apply(): this {
    this.selected.set(this.item.value)
    return this
  }

  /**
   * Programmatically sets focus to a specified tab index and focuses its DOM element.
   *
   * Программным образом устанавливает фокус на указанный индекс вкладки и фокусирует его DOM-элемент.
   * @param focus index to set focus to / индекс для установки фокуса
   * @returns instance of this focus helper class / текущий экземпляр класса помощника фокуса
   */
  set(focus?: string): this {
    this.item.value = focus
    this.getElement()?.focus()

    return this
  }

  /**
   * Sets the initial focus value based on the currently selected tab.
   *
   * Устанавливает начальное значение фокуса на основе текущей выбранной вкладки.
   * @returns instance of this focus helper class / текущий экземпляр класса помощника фокуса
   */
  position(): this {
    this.item.value = toArray(this.selected.actualItem.value)?.[0]
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
   * Resolves and returns the actual focused HTML element by querying data attribute.
   *
   * Находит и возвращает сфокусированный HTML-элемент путем поиска по data-атрибуту.
   * @returns focused HTMLElement or undefined / сфокусированный HTMLElement или undefined
   */
  protected getElement(): HTMLElement | undefined {
    if (this.item.value) {
      return this.element.value
        ?.querySelector<HTMLElement>(`[data-value="${this.item.value}"]`) || undefined
    }

    return undefined
  }
}

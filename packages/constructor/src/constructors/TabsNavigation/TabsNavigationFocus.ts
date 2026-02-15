import { type Ref, ref } from 'vue'
import { type NumberOrStringOrBoolean, toArray } from '@dxtmisha/functional'

import { TabsNavigationSelected } from './TabsNavigationSelected'

/**
 * Class for managing focus navigation.
 *
 * Класс для управления навигацией фокуса.
 */
export class TabsNavigationFocus {
  /**
   * Current focus value.
   *
   * Текущее значение фокуса.
   */
  readonly item = ref<NumberOrStringOrBoolean>()

  /**
   * Constructor
   * @param element main element/ главный элемент
   * @param selected selected value object/ объект значения выделения
   */
  constructor(
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly selected: TabsNavigationSelected
  ) {
  }

  /**
   * Returns the current focus value.
   *
   * Возвращает текущее значение фокуса.
   */
  get(): string | undefined {
    if (this.item.value) {
      return String(this.item.value)
    }

    return undefined
  }

  /**
   * Applies the current focus value to the selection.
   *
   * Применяет текущее значение фокуса к выделению.
   */
  apply(): this {
    this.selected.set(this.item.value)
    return this
  }

  /**
   * Sets the focus to the specified value.
   *
   * Устанавливает фокус на указанное значение.
   * @param focus focus value/ значение фокуса
   */
  set(focus?: string): this {
    this.item.value = focus
    this.getElement()?.focus()

    return this
  }

  /**
   * Sets the initial focus position based on the selected value.
   *
   * Устанавливает начальную позицию фокуса на основе выбранного значения.
   */
  position(): this {
    this.item.value = toArray(this.selected.actualItem.value)?.[0]
    return this
  }

  /**
   * Resets the focus.
   *
   * Сбрасывает фокус.
   */
  reset(): this {
    this.item.value = undefined
    return this
  }

  /**
   * Returns the focused element.
   *
   * Возвращает элемент в фокусе.
   */
  protected getElement(): HTMLElement | undefined {
    if (this.item.value) {
      return this.element.value
        ?.querySelector<HTMLElement>(`[data-value="${this.item.value}"]`) || undefined
    }

    return undefined
  }
}

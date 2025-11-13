import { computed, ref } from 'vue'
import { isFilled } from '@dxtmisha/functional'
import type { MenuProps } from './props'

/**
 * Class for working with search.
 *
 * Класс для работы с поиском.
 */
export class MenuSearch {
  readonly item = ref<string>()

  /**
   * Constructor
   * @param props input data/ входные данные
   */
  constructor(
    protected readonly props: MenuProps
  ) {
  }

  /** Returns the search string/ Возвращает строку поиска */
  readonly value = computed<string | undefined>(() => {
    if (this.props.highlight) {
      return this.props.highlight
    }

    return this.item.value
  })

  /**
   * Sets the search string.
   *
   * Устанавливает строку поиска.
   * @param value new value/ новое значение
   */
  set(value?: string) {
    const data = this.getValue(value)

    if (this.item.value !== data) {
      this.item.value = data
    }
  }

  /**
   * Resets the search string.
   *
   * Сбрасывает строку поиска.
   */
  reset(): this {
    this.set()
    return this
  }

  /**
   * Returns a processed value.
   *
   * Возвращает обработанное значение.
   * @param value source value/ исходное значение
   */
  protected getValue(value?: string): string | undefined {
    if (isFilled(value)) {
      return value.trim()
    }

    return undefined
  }
}

import { ref } from 'vue'
import type { FieldValidationItem } from '../../types/fieldTypes'

/**
 * SelectFilter class manages filter/search functionality for select components.
 * Provides value storage and input handling for filtering items.
 *
 * Класс SelectFilter управляет функциональностью фильтрации/поиска для компонентов выбора.
 * Предоставляет хранение значения и обработку ввода для фильтрации элементов.
 */
export class SelectFilter {
  /** Reactive filter value/ Реактивное значение фильтра */
  readonly value = ref<string>('')

  /**
   * Get current filter value.
   *
   * Получить текущее значение фильтра.
   */
  get(): string {
    return this.value.value
  }

  /**
   * Set filter value.
   *
   * Установить значение фильтра.
   * @param value filter string/ строка фильтра
   */
  set(value: string) {
    this.value.value = value
  }

  /**
   * Input event handler.
   *
   * Обработчик события ввода.
   * @param value validation item with input value/ элемент валидации со значением ввода
   */
  readonly onInput = (value: FieldValidationItem): void => {
    this.value.value = String(value.value ?? '')
  }
}

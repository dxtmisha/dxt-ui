import { ref } from 'vue'

/**
 * Class for working with data visualization. This is for working with the password type.
 *
 * Класс для работы с визуализацией данных. Это для работы с типом пароля.
 */
export class FieldVisibilityInclude {
  /** Visibility state flag / Флаг состояния видимости */
  readonly item = ref<boolean>(false)

  /**
   * Toggles the values.
   *
   * Переключает значения.
   * @returns current instance / текущий экземпляр
   */
  toggle(): this {
    this.item.value = !this.item.value

    return this
  }
}

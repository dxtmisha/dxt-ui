import { ref } from 'vue'
import type { FieldAllProps } from '../../types/fieldTypes'

/**
 * The class tracks field value change state
 *
 * Класс возвращает состояние изменения значения поля
 */
export class FieldChangeInclude {
  /** Change state flag/ Флаг состояния изменения */
  readonly item = ref<boolean>(false)

  /**
   * Constructor
   * @param props input data/ входные данные
   */
  constructor(props: FieldAllProps) {
    if (props.value || props.modelValue) {
      this.item.value = true
    }
  }

  /**
   * Returns whether value was changed
   *
   * Возвращает, было ли значение изменено
   */
  is(): boolean {
    return Boolean(this.item.value)
  }

  /**
   * Sets change state
   *
   * Устанавливает состояние изменения
   * @param change new state value/ новое значение состояния
   */
  set(change: boolean) {
    this.item.value = change
  }

  /**
   * Force mark as changed
   *
   * Принудительно помечает как изменённое
   */
  to() {
    if (!this.item.value) {
      this.set(true)
    }
  }
}

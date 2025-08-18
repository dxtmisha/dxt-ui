import { watch } from 'vue'
import {
  isFunction,
  type RefType,
  toCamelCase, toCamelCaseFirst
} from '@dxt-ui/functional'

/**
 * Class for managing model synchronization and event emission.
 * Handles two-way data binding with reactive values and emits update events.
 *
 * Класс для управления синхронизацией модели и испусканием событий.
 * Обрабатывает двустороннюю привязку данных с реактивными значениями и испускает события обновления.
 */
export class ModelInclude<Value = string> {
  /**
   * Constructor
   * @param index The index key for the model property/ Ключ индекса для свойства модели
   * @param emits Function to emit events/ Функция для испускания событий
   * @param syncValue Reactive value to synchronize/ Реактивное значение для синхронизации
   */
  constructor(
    protected readonly index: string,
    protected readonly emits?: any,
    protected readonly syncValue?: RefType<Value>
  ) {
    if (syncValue) {
      watch(syncValue, (newValue: Value) => {
        this.emit(newValue)
      }, { immediate: true })
    }
  }

  /**
   * Emits an event to update the model value.
   * Triggers the corresponding update event with the new value.
   *
   * Испускает событие для обновления значения модели.
   * Запускает соответствующее событие обновления с новым значением.
   * @param value The new value to set/ Новое значение для установки
   */
  emit(value: Value): void {
    if (isFunction(this.emits)) {
      this.emits(`update:${toCamelCase(this.index)}`, value)
      this.emits(`update:model${toCamelCaseFirst(this.index)}`, value)
    }
  }
}

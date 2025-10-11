import { isReadonly, isRef, type Ref, watch } from 'vue'
import {
  isFunction,
  type RefType,
  toCamelCase,
  toCamelCaseFirst
} from '@dxtmisha/functional'

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
   * Type guard to check if syncValue is a mutable Ref.
   * Returns true if syncValue is a reference and not readonly.
   *
   * Проверка типа, является ли syncValue изменяемым Ref.
   * Возвращает true, если syncValue является ссылкой и не readonly.
   * @returns Type predicate indicating syncValue is a mutable Ref/ Предикат типа, указывающий что syncValue - изменяемый Ref
   */
  isValue(): this is { syncValue: Ref<Value> } {
    return isRef(this.syncValue)
      && !isReadonly(this.syncValue)
  }

  /**
   * Generates binding object for v-model integration.
   * Creates properties for two-way data binding with model and update handlers.
   *
   * Генерирует объект привязок для интеграции v-model.
   * Создает свойства для двусторонней привязки данных с обработчиками модели и обновления.
   * @returns Object with model value and update handlers/ Объект со значением модели и обработчиками обновления
   */
  getBinds() {
    if (this.isValue()) {
      const name = toCamelCaseFirst(this.index)

      return {
        [`model${name}`]: this.syncValue.value,
        [`onUpdate:${toCamelCase(this.index)}`]: this.update,
        [`onUpdate:model${name}`]: this.update
      }
    }

    return {}
  }

  /**
   * Updates the synchronized value.
   * Sets the value of the reactive reference if it's a mutable Ref.
   *
   * Обновляет синхронизированное значение.
   * Устанавливает значение реактивной ссылки, если это изменяемый Ref.
   * @param value The new value to set/ Новое значение для установки
   */
  readonly update = (value: Value): void => {
    if (this.isValue()) {
      this.syncValue.value = value
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

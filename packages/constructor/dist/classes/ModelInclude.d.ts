import { RefType } from '@dxt-ui/functional';
/**
 * Class for managing model synchronization and event emission.
 * Handles two-way data binding with reactive values and emits update events.
 *
 * Класс для управления синхронизацией модели и испусканием событий.
 * Обрабатывает двустороннюю привязку данных с реактивными значениями и испускает события обновления.
 */
export declare class ModelInclude<Value = string> {
    protected readonly index: string;
    protected readonly emits?: any | undefined;
    protected readonly syncValue?: RefType<Value> | undefined;
    /**
     * Constructor
     * @param index The index key for the model property/ Ключ индекса для свойства модели
     * @param emits Function to emit events/ Функция для испускания событий
     * @param syncValue Reactive value to synchronize/ Реактивное значение для синхронизации
     */
    constructor(index: string, emits?: any | undefined, syncValue?: RefType<Value> | undefined);
    /**
     * Emits an event to update the model value.
     * Triggers the corresponding update event with the new value.
     *
     * Испускает событие для обновления значения модели.
     * Запускает соответствующее событие обновления с новым значением.
     * @param value The new value to set/ Новое значение для установки
     */
    emit(value: Value): void;
}

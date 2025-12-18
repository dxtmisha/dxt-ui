import { FieldValidationItem } from '../../types/fieldTypes';
import { Ref } from 'vue';
/**
 * SelectFilter class manages filter/search functionality for select components.
 * Provides value storage and input handling for filtering items.
 *
 * Класс SelectFilter управляет функциональностью фильтрации/поиска для компонентов выбора.
 * Предоставляет хранение значения и обработку ввода для фильтрации элементов.
 */
export declare class SelectFilter {
    /** Reactive filter value/ Реактивное значение фильтра */
    readonly value: Ref<string, string>;
    /**
     * Get current filter value.
     *
     * Получить текущее значение фильтра.
     */
    get(): string;
    /**
     * Set filter value.
     *
     * Установить значение фильтра.
     * @param value filter string/ строка фильтра
     */
    set(value: string): void;
    /**
     * Input event handler.
     *
     * Обработчик события ввода.
     * @param value validation item with input value/ элемент валидации со значением ввода
     */
    readonly onInput: (value: FieldValidationItem) => void;
}

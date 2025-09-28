import { FieldAllProps } from '../../types/fieldTypes';
import { Ref } from 'vue';
/**
 * The class tracks field value change state
 *
 * Класс возвращает состояние изменения значения поля
 */
export declare class FieldChangeInclude {
    /** Change state flag/ Флаг состояния изменения */
    readonly item: Ref<boolean, boolean>;
    /**
     * Constructor
     * @param props input data/ входные данные
     */
    constructor(props: FieldAllProps);
    /**
     * Returns whether value was changed
     *
     * Возвращает, было ли значение изменено
     */
    is(): boolean;
    /**
     * Sets change state
     *
     * Устанавливает состояние изменения
     * @param change new state value/ новое значение состояния
     */
    set(change: boolean): void;
    /**
     * Force mark as changed
     *
     * Принудительно помечает как изменённое
     */
    toChange(): void;
}

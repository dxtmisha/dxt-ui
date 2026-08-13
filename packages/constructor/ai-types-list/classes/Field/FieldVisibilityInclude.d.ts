// md5:f0b297f426148c8c5df2601e3cb731a9
import { Ref } from 'vue';
/**
 * Class for working with data visualization. This is for working with the password type.
 *
 * Класс для работы с визуализацией данных. Это для работы с типом пароля.
 */
export declare class FieldVisibilityInclude {
    /** Visibility state flag / Флаг состояния видимости */
    readonly item: Ref<boolean, boolean>;
    /**
     * Toggles the values.
     *
     * Переключает значения.
     * @returns current instance / текущий экземпляр
     */
    toggle(): this;
}

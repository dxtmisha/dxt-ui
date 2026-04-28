import { Ref } from 'vue';
/**
 * Class for storing and working with the transition symbol for the active group.
 *
 * Класс для хранения и работы с символом перехода для активной группы.
 */
export declare class MaskRubberTransition {
    /** Transition symbol value/ Значение символа перехода */
    readonly item: Ref<string, string>;
    /**
     * Checks if a transition symbol is set.
     *
     * Проверяет, установлен ли символ перехода.
     */
    is(): boolean;
    /**
     * Checks if provided char equals current transition symbol.
     *
     * Проверяет, совпадает ли символ с текущим символом перехода.
     * @param char candidate char / проверяемый символ
     */
    isChar(char: string): boolean;
    /**
     * Sets new transition symbol.
     *
     * Устанавливает новый символ перехода.
     * @param char transition symbol / символ перехода
     */
    set(char: string): this;
    /**
     * Resets transition symbol to empty.
     *
     * Сбрасывает символ перехода в пустой.
     */
    reset(): this;
}

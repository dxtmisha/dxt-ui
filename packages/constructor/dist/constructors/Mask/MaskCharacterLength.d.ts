import { Ref } from 'vue';
/**
 * Class for storing the length of entered characters.
 *
 * Класс для хранения длины введённых символов.
 */
export declare class MaskCharacterLength {
    /** Current length value/ Текущее значение длины */
    protected length: Ref<number, number>;
    /**
     * Checks if there is at least one entered character.
     *
     * Проверяет, есть ли хотя бы один введённый символ.
     */
    is(): boolean;
    /**
     * Returns current length.
     *
     * Возвращает текущую длину.
     */
    get(): number;
    /**
     * Sets new length value.
     *
     * Устанавливает новое значение длины.
     * @param length new length value / новое значение длины
     */
    set(length: number): this;
}

import { MaskSpecial } from './MaskSpecial';
import { MaskItem } from './MaskItem';
/**
 * Class for working with the character input location.
 *
 * Класс для работы с местом ввода символа.
 */
export declare class MaskSelection {
    protected readonly special: MaskSpecial;
    protected readonly mask: MaskItem;
    /** Selection value/ Значение выделения */
    protected value: number;
    /** Immediate selection value/ Значение непосредственного выделения */
    protected immediate: number;
    /** Shift flag/ Флаг сдвига */
    protected shift: boolean;
    /**
     * Constructor
     * @param special object for working with special characters/ объект для работы со специальными символами
     * @param mask object for managing masks/ объект управления маской
     */
    constructor(special: MaskSpecial, mask: MaskItem);
    /**
     * Getting the selection key number.
     *
     * Получение номера ключа выделения.
     */
    get(): number;
    /**
     * Returns the selection number for the first element that is a special symbol.
     *
     * Возвращает номер выделения для первого элемента, являющегося специальным символом.
     */
    getFirst(): number;
    /**
     * Getting the current key of the selected character.
     *
     * Получение текущего ключа выделенного символа.
     */
    getFocus(): number;
    /**
     * Getting the next key of the selected character.
     *
     * Получение следующего ключа выделенного символа.
     */
    getNext(): number;
    /**
     * Getting the previous key of the selected symbol.
     *
     * Получение предыдущего ключа выделенного символа.
     */
    getPrevious(): number;
    /**
     * Getting the key number of the nearest special character.
     *
     * Получение номера ключа ближайшего специального символа.
     */
    getImmediate(): number;
    /**
     * Getting the number of the key shifted to the left direction.
     *
     * Получение номера ключа, сдвинутого в левом направлении.
     */
    getShift(): number;
    /**
     * Changing the selection key number.
     *
     * Изменение номера ключа выделения.
     * @param selection selection number/ номер выделения
     */
    set(selection: number): this;
    /**
     * Changes the selection key number according to the mask structure.
     *
     * Изменяет номер ключа выделения по структуре маски.
     * @param selection selection number/ номер выделения
     * @param focus is the element in focus/ элемент в фокусе ли
     */
    setByMask(selection: number, focus?: boolean): this;
    /**
     * Changing the selection key for the nearest special character.
     *
     * Изменение ключа выделения для ближайшего специального символа.
     * @param immediate selection key number/ номер ключа выделения
     */
    setImmediate(immediate: number): this;
    /**
     * Turning shift on or off.
     *
     * Включение или отключение сдвига.
     * @param shift value for shift/ значение для сдвига
     */
    setShift(shift: boolean): this;
    /**
     * Resets the selection key for the nearest special character to the selection location.
     *
     * Сбрасывает ключ выделения для ближайшего специального символа до места выделения.
     */
    resetImmediate(): this;
    /**
     * Move the selection location back by 1 step.
     *
     * Передвигаем место выделения назад на 1 шаг.
     */
    goBack(): this;
    /**
     * Move the selection location forward by 1 step.
     *
     * Передвигаем место выделения вперед на 1 шаг.
     */
    goNext(): this;
    /**
     * Getting the key number at the selection location.
     *
     * Получение номера ключа по месту выделения.
     * @param selection selection location/ место выделения
     */
    protected getCharacter(selection: number): number;
}

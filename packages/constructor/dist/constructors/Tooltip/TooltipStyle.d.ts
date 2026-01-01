import { Ref } from 'vue';
/**
 * Style management class.
 *
 * Класс управления стилями.
 */
export declare class TooltipStyle {
    protected readonly element: Ref<HTMLDivElement | undefined>;
    protected readonly className: string;
    /**
     * Constructor
     * @param element instance of the element itself/ экземпляр самого элемента
     * @param className class name/ название класса
     */
    constructor(element: Ref<HTMLDivElement | undefined>, className: string);
    /**
     * Changing styles.
     *
     * Изменение стилей.
     * @param top should the element be placed on top/ нужно ли поместить элемент сверху
     * @param x value of X/ значение X
     * @param y value of Y/ значение Y
     * @param shift value for shift/ значение для сдвига
     */
    set(top: boolean, x: number, y: number, shift: number): void;
    /**
     * Changes the preparation status.
     *
     * Изменяет статус подготовки.
     * @param status the value of the current state/ значение текущего состояния
     */
    setPreparation(status: boolean): void;
    /**
     * Changes the preparation status.
     *
     * Изменяет статус подготовки.
     * @param status the value of the current state/ значение текущего состояния
     */
    setShow(status: boolean): void;
    /**
     * Reset all records to the initial state.
     *
     * Сброс всех записей до начального состояния.
     */
    reset(): void;
    /**
     * Resets the display state.
     *
     * Сбрасывает состояние показа.
     */
    resetShow(): void;
}

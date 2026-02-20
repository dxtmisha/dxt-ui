import { MotionAxisStyles } from './MotionAxisStyles';
import { MotionAxisSelectedValue } from './basicTypes';
import { Ref } from 'vue';
/**
 * Class for managing the previous slide.
 *
 * Класс для управления предыдущим слайдом.
 */
export declare class MotionAxisPrevious {
    protected readonly styles: MotionAxisStyles;
    /**
     * Identifier of the previous slide.
     *
     * Идентификатор предыдущего слайда.
     */
    readonly item: Ref<MotionAxisSelectedValue, MotionAxisSelectedValue>;
    /**
     * Constructor
     * @param styles style management object / объект управления стилями
     */
    constructor(styles: MotionAxisStyles);
    /**
     * Checks if the value matches the previous slide.
     *
     * Проверяет, совпадает ли значение с предыдущим слайдом.
     * @param value value to check / значение для проверки
     */
    is(value: string): boolean;
    /**
     * Returns the previous slide.
     *
     * Возвращает предыдущий слайд.
     */
    get(): MotionAxisSelectedValue | undefined;
    /**
     * Changing the display status.
     *
     * Изменение статуса отображения.
     * @param value values for change / значения для изменения
     */
    set(value?: string): this;
}

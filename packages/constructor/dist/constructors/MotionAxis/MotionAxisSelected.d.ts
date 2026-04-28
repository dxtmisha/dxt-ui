import { MotionAxisSelectedValue } from './basicTypes';
import { MotionAxisProps } from './props';
import { Ref } from 'vue';
/**
 * Class for managing the active element.
 *
 * Класс для управления активным элементом.
 */
export declare class MotionAxisSelected {
    protected props: MotionAxisProps;
    readonly item: Ref<MotionAxisSelectedValue, MotionAxisSelectedValue>;
    /**
     * Constructor
     * @param props input data/ входные данные
     */
    constructor(props: MotionAxisProps);
    /**
     * Checks if the current active value corresponds.
     *
     * Проверяет, соответствует ли текущее активное значение.
     * @param selected selected slide/ выбранный слайд
     */
    is(selected?: string): boolean;
    /**
     * Changes the active slide.
     *
     * Изменяет активный слайд.
     * @param selected selected slide/ выбранный слайд
     */
    set(selected: MotionAxisProps['selected']): this;
}

import { FieldValueInclude } from './FieldValueInclude';
import { FieldAllProps } from '../../types/fieldTypes';
import { ComputedRef } from 'vue';
/**
 * Class for working with input arrows.
 *
 * Класс для работы со стрелками ввода.
 */
export declare class FieldArrowInclude {
    protected readonly props: FieldAllProps;
    protected readonly value: FieldValueInclude;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param value object for working with values/ объект для работы со значениями
     */
    constructor(props: FieldAllProps, value: FieldValueInclude);
    /** Indicates if the previous button is disabled/ Указывает, отключена ли кнопка предыдущего */
    readonly disabledPrevious: ComputedRef<boolean>;
    /** Indicates if the next button is disabled/ Указывает, отключена ли кнопка следующего */
    readonly disabledNext: ComputedRef<boolean>;
    /** Returns the change step/ Возвращает шаг изменения */
    protected readonly step: ComputedRef<number>;
    /** Returns the minimum value/ Возвращает минимальное значение */
    protected readonly min: ComputedRef<number | undefined>;
    /** Returns the maximum value/ Возвращает максимальное значение */
    protected readonly max: ComputedRef<number | undefined>;
    /**
     * Checks if it is possible to decrease the value.
     *
     * Проверяет, можно ли уменьшить значение.
     * @param value values for checking/ значения для проверки
     */
    isPrevious(value: number): boolean;
    /**
     * Checks if it is possible to increase the value.
     *
     * Проверяет, можно ли увеличить значение.
     * @param value values for checking/ значения для проверки
     */
    isNext(value: number): boolean;
    /**
     * Decreases the value.
     *
     * Уменьшает значение.
     */
    previous(): this;
    /**
     * Increases the value.
     *
     * Увеличивает значение.
     */
    next(): this;
    /**
     * Decreases to the minimum value.
     *
     * Уменьшает до минимального значения.
     */
    toMin(): this;
    /**
     * Increases to the maximum value.
     * s
     * Увеличивает до максимального значения.
     */
    toMax(): this;
}

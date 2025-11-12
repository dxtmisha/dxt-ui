import { FieldValueInclude } from './FieldValueInclude';
import { FieldTypeInclude } from './FieldTypeInclude';
import { FieldAllProps, FieldArrowProps } from '../../types/fieldTypes';
import { ComputedRef } from 'vue';
/**
 * Class for working with input arrows.
 *
 * Класс для работы со стрелками ввода.
 */
export declare class FieldArrowInclude {
    protected readonly props: FieldAllProps;
    protected readonly value: FieldValueInclude;
    protected readonly type?: FieldTypeInclude | undefined;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param value object for working with values/ объект для работы со значениями
     * @param type object for working with input type/ объект для работы с типом ввода
     */
    constructor(props: FieldAllProps, value: FieldValueInclude, type?: FieldTypeInclude | undefined);
    /**
     * Indicates if arrows are enabled/ Указывает, включены ли стрелки
     *
     * @return true if arrows are enabled/ true, если стрелки включены
     */
    readonly is: ComputedRef<boolean>;
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
     * Checks if the arrow type is carousel.
     *
     * Проверяет, является ли тип стрелок carousel.
     */
    isCarousel(): boolean;
    /**
     * Checks if the arrow type is stepper.
     *
     * Проверяет, является ли тип стрелок stepper.
     */
    isStepper(): boolean;
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
     * Returns arrow type.
     *
     * Возвращает тип стрелок.
     */
    get(): FieldArrowProps['arrow'] | undefined;
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

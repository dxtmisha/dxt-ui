import { FieldVisibilityInclude } from '../../classes/Field/FieldVisibilityInclude';
import { IconProps } from '../Icon';
import { InputProps } from './props';
import { ComputedRef } from 'vue';
/**
 * Class for retrieving data to manage the password type.
 *
 * Класс для получения данных для управления типом пароля.
 */
export declare class InputPassword {
    protected readonly props: InputProps;
    protected readonly visibility: FieldVisibilityInclude;
    protected visible: boolean;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param visibility object for working with visualization/ объект для работы с визуализацией
     */
    constructor(props: InputProps, visibility: FieldVisibilityInclude);
    /** Checks if the type is a password/ Проверяет, является ли тип паролем. */
    readonly is: ComputedRef<boolean>;
    /** Returns the icon value/ Возвращает значение иконки */
    readonly icon: ComputedRef<IconProps | undefined>;
    /**
     * Toggle value.
     *
     * Переключение значения.
     */
    toggle(): void;
}

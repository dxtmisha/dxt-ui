import { FieldTypeInclude } from './FieldTypeInclude';
import { FieldAllProps } from '../../types/fieldTypes';
import { ComputedRef } from 'vue';
/**
 * Class for getting the type of displayed keyboard.
 *
 * Класс для получения типа отображаемой клавиатуры.
 */
export declare class FieldInputModeInclude {
    protected readonly props: FieldAllProps;
    protected readonly type: FieldTypeInclude;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param type object for working with input type/ объект для работы с типом ввода
     */
    constructor(props: FieldAllProps, type: FieldTypeInclude);
    /** Returns the keyboard name/ Возвращает название клавиатуры */
    readonly item: ComputedRef<string | undefined>;
    readonly autocomplete: ComputedRef<string | undefined>;
}

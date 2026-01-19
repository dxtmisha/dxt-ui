import { FieldVisibilityInclude } from './FieldVisibilityInclude';
import { FieldAllProps, FieldType } from '../../types/fieldTypes';
import { ComputedRef } from 'vue';
/**
 * Class for working with the input type.
 *
 * Класс для работы с типом ввода.
 */
export declare class FieldTypeInclude {
    protected readonly props: FieldAllProps;
    protected readonly visibility?: FieldVisibilityInclude | undefined;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param visibility object for working with visualization/ объект для работы с визуализацией
     */
    constructor(props: FieldAllProps, visibility?: FieldVisibilityInclude | undefined);
    /** Returns the input type/ Возвращает тип ввода */
    readonly item: ComputedRef<FieldType>;
    /**
     * Returns the input type.
     *
     * Возвращает тип ввода.
     */
    get(): FieldType;
}

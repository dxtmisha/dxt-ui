// md5:f499d50c7d2d485196625a7c765b8f18
import { FieldVisibilityInclude } from './FieldVisibilityInclude';
import { FieldAllProps, FieldType } from '../../types/fieldTypes';
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
     *
     * Конструктор
     * @param props input data / входные данные
     * @param visibility object for working with visualization / объект для работы с визуализацией
     */
    constructor(props: FieldAllProps, visibility?: FieldVisibilityInclude | undefined);
    /**
     * Returns the input type.
     *
     * Возвращает тип ввода.
     * @returns type value / значение типа
     */
    get item(): FieldType;
    /**
     * Returns the input type.
     *
     * Возвращает тип ввода.
     * @returns type value / значение типа
     */
    get(): FieldType;
}

import { TextInclude } from '../TextInclude';
import { FieldElementInclude } from './FieldElementInclude';
import { FieldValueInclude } from './FieldValueInclude';
import { FieldAllProps, FieldValidationItem } from '../../types/fieldTypes';
/**
 * Class for checking input value matching with another element
 *
 * Класс для проверки совпадения вводимого значения с другим элементом
 */
export declare class FieldMatchInclude {
    protected readonly props: FieldAllProps;
    protected readonly element: FieldElementInclude;
    protected readonly value: FieldValueInclude;
    protected readonly text?: TextInclude | undefined;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param element object for working with input element/ объект для работы с элементом ввода
     * @param value object for working with value/ объект для работы со значениями
     * @param text object for working with texts/ объект для работы с текстами
     */
    constructor(props: FieldAllProps, element: FieldElementInclude, value: FieldValueInclude, text?: TextInclude | undefined);
    /**
     * Checks whether matching verification is enabled
     *
     * Проверяет, включена ли проверка совпадения
     */
    is(): boolean;
    /**
     * Returns selector used to find external element
     *
     * Возвращает селектор для поиска внешнего элемента
     */
    getSelectors(): string | HTMLInputElement | undefined;
    /**
     * Returns validation error text
     *
     * Возвращает текст ошибки валидации
     */
    getValidationMessage(): string;
    /**
     * Checks value against external element
     *
     * Проверяет совпадение значения с внешним элементом
     */
    check(): FieldValidationItem | undefined;
}

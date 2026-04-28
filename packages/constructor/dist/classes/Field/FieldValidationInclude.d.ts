import { FieldInputCheckInclude } from './FieldInputCheckInclude';
import { FieldAttributesInclude } from './FieldAttributesInclude';
import { FieldChangeInclude } from './FieldChangeInclude';
import { FieldValueInclude } from './FieldValueInclude';
import { FieldCodeInclude } from './FieldCodeInclude';
import { FieldMatchInclude } from './FieldMatchInclude';
import { FieldAllProps, FieldValidationItem } from '../../types/fieldTypes';
import { Ref, ComputedRef } from 'vue';
/**
 * Class for working with validity
 *
 * Класс для работы с валидностью
 */
export declare class FieldValidationInclude {
    protected readonly props: FieldAllProps;
    protected readonly attributes: FieldAttributesInclude;
    protected readonly value: FieldValueInclude;
    protected readonly change?: FieldChangeInclude | undefined;
    protected readonly code?: FieldCodeInclude | undefined;
    protected readonly match?: FieldMatchInclude | undefined;
    /** Internal validation state/ Внутреннее состояние валидации */
    protected readonly validation: Ref<FieldValidationItem | undefined, FieldValidationItem | undefined>;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param attributes object for working with input attributes/ объект для работы с атрибутами ввода
     * @param value object for value work/ объект для работы со значениями
     * @param change object for change state/ объект для состояния изменения
     * @param code object for error codes/ объект для работы с кодами ошибок
     * @param match object for match checking/ объект для проверки совпадений
     */
    constructor(props: FieldAllProps, attributes: FieldAttributesInclude, value: FieldValueInclude, change?: FieldChangeInclude | undefined, code?: FieldCodeInclude | undefined, match?: FieldMatchInclude | undefined);
    /** Hidden input element for native validation/ Скрытый input для нативной валидации */
    protected readonly input: ComputedRef<FieldInputCheckInclude<any>>;
    /** Returns error data/ Возвращает данные об ошибке */
    readonly item: ComputedRef<FieldValidationItem>;
    /** Returns error string/ Возвращает строку об ошибке */
    readonly message: ComputedRef<string>;
    /**
     * Checks if there is an error
     *
     * Проверяет, есть ли ошибка
     */
    isError(): boolean;
    /**
     * Checks whether the element has constraints and satisfies them
     *
     * Проверяет, имеет ли элемент ограничения и удовлетворяет ли им
     */
    readonly checkValidity: () => boolean;
    /**
     * Changes the validity data
     *
     * Изменяет данные о валидности
     * @param validation values for validity/ значения для валидности
     */
    set(validation: Record<string, any> | FieldValidationItem): this;
    /**
     * Returns an empty validation item
     *
     * Возвращает пустой элемент валидации
     */
    protected getValidationItemNone(): FieldValidationItem;
    /**
     * Check for global data
     *
     * Проверка для глобальных данных
     */
    protected checkGlobal(): FieldValidationItem | undefined;
    /**
     * Check for selected data
     *
     * Проверка для выбранных данных
     */
    protected checkItem(): FieldValidationItem | undefined;
    /**
     * Checks the value using hidden input element
     * @param value value to check/ значение для проверки
     *
     * Проверяет значение с помощью скрытого input
     */
    protected checkByInput(value: any): FieldValidationItem;
}

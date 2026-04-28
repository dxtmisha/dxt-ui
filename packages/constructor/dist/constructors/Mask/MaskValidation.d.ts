import { MaskPattern } from './MaskPattern';
import { MaskValue } from './MaskValue';
import { FieldValidationItem } from '../../types/fieldTypes';
import { ComputedRef } from 'vue';
/**
 * Class for working with the validity of entered data.
 *
 * Класс для работы с валидностью введённых данных.
 */
export declare class MaskValidation {
    protected readonly pattern: MaskPattern;
    protected readonly value: MaskValue;
    /**
     * Constructor
     * @param pattern object for working with input data validation/ объект для работы с проверкой введённых данных
     * @param value object for working with entered data/ объект для работы с введёнными данными
     */
    constructor(pattern: MaskPattern, value: MaskValue);
    /** Validation error info or undefined/ Информация об ошибке или undefined */
    readonly item: ComputedRef<FieldValidationItem>;
    /**
     * Checks if the current group has an error.
     *
     * Проверяет, есть ли ошибка у текущей группы.
     * @param groupName group name/ название группы
     */
    isError(groupName: string): boolean;
    /**
     * Checks the correctness of filling in the values.
     *
     * Проверяет корректность заполнения значений.
     */
    checkValidity(): boolean;
    /**
     * Getting global check data.
     *
     * Получение данных глобальной проверки.
     */
    protected getValidationCheck(): FieldValidationItem;
}

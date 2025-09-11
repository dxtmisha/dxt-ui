import { FieldElementDom, FieldPatternElement, FieldPatternItemOrFunction, FieldValidationItem } from '../../types/fieldTypes';
/**
 * The class creates hidden input and runs native validation for pattern
 *
 * Класс создаёт скрытый input и выполняет нативную валидацию по паттерну
 */
export declare class FieldInputCheckInclude<Value = any> {
    readonly pattern: FieldPatternItemOrFunction;
    readonly group: string;
    /** Hidden input element for native validation/ Скрытый input для нативной валидации */
    readonly input: HTMLInputElement | undefined;
    /**
     * Constructor
     * @param pattern property for verification/ свойство для проверки
     * @param group group name/ название группы
     */
    constructor(pattern: FieldPatternItemOrFunction, group?: string);
    /**
     * Runs validation and returns result
     *
     * Выполняет проверку и возвращает результат
     */
    check(value: Value): FieldValidationItem;
    /**
     * Runs validation by input and returns result
     *
     * Выполняет проверку по инпуту и возвращает результат
     * @param input input element/ элемент инпута
     */
    checkByInput(input: FieldElementDom): FieldValidationItem;
    /**
     * Returns attributes for internal input
     *
     * Возвращает атрибуты для внутреннего инпута
     */
    protected getAttributes(): FieldPatternElement;
    /**
     * Returns the default group name
     *
     * Возвращает название группы по умолчанию
     */
    static getGroupDefault(): string;
}

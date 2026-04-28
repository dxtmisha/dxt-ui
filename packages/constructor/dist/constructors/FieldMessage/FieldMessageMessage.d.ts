import { FieldMessageProps } from './props';
import { FieldMessageSlots } from './types';
import { ComputedRef } from 'vue';
/**
 * Class for working with text
 *
 * Класс для работы с текстом
 */
export declare class FieldMessageMessage {
    protected readonly props: Readonly<FieldMessageProps>;
    protected readonly slots?: FieldMessageSlots | undefined;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param slots object for working with slots/ объект для работы со слотами
     */
    constructor(props: Readonly<FieldMessageProps>, slots?: FieldMessageSlots | undefined);
    /** Checks if there is text/ Проверяет, есть ли текст */
    readonly is: ComputedRef<boolean>;
    /** Checks if there is an error/ Проверяет, есть ли ошибка */
    readonly isValidation: ComputedRef<boolean>;
    /** Returns text/ Возвращает текст */
    readonly item: ComputedRef<string>;
}

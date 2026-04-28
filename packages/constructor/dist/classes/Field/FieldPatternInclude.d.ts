import { FieldTypeInclude } from './FieldTypeInclude';
import { FieldAllProps } from '../../types/fieldTypes';
import { ComputedRef } from 'vue';
/**
 * Class for working with checks by regular expressions.
 *
 * Класс для работы с проверкой по регулярным выражениям.
 */
export declare class FieldPatternInclude {
    protected readonly props: FieldAllProps;
    protected readonly type?: FieldTypeInclude | undefined;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param type object for working with input type/ объект для работы с типом ввода
     */
    constructor(props: FieldAllProps, type?: FieldTypeInclude | undefined);
    /** Returns regular expressions/ Возвращает регулярные выражения */
    readonly item: ComputedRef<string | undefined>;
}

import { FieldTypeInclude } from './FieldTypeInclude';
import { FieldPatternInclude } from './FieldPatternInclude';
import { FieldAllProps } from '../../types/fieldTypes';
import { ComputedRef } from 'vue';
/**
 * Class for working with input elements.
 *
 * Класс для работы с элементами ввода.
 */
export declare class FieldAttributesInclude {
    protected readonly props: FieldAllProps;
    protected readonly type?: FieldTypeInclude | undefined;
    protected readonly pattern?: FieldPatternInclude | undefined;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param type object for working with input type/ объект для работы с типом ввода
     * @param pattern object for working with checks by regular expressions/
     * объект для работы с проверкой по регулярным выражениям
     */
    constructor(props: FieldAllProps, type?: FieldTypeInclude | undefined, pattern?: FieldPatternInclude | undefined);
    /** Returns data for verification/ Возвращает данные для проверки */
    readonly list: ComputedRef<Record<string, any>>;
    /** Returns data for verification/ Возвращает данные для проверки */
    readonly listForCheck: ComputedRef<Record<string, any>>;
    /**
     * Returns the list of attributes to be set on the input element.
     *
     * Возвращает список атрибутов, которые нужно установить на элемент ввода.
     */
    protected getAttributes(): (keyof typeof this.props)[];
}

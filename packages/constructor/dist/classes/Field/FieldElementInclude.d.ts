import { Ref } from 'vue';
import { FieldAllProps, FieldElementInput } from '../../types/fieldTypes';
/**
 * Class for working with input elements.
 *
 * Класс для работы с элементами ввода.
 */
export declare class FieldElementInclude {
    protected readonly props: FieldAllProps;
    protected readonly element: Ref<FieldElementInput>;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param element input element/ элемент ввода
     */
    constructor(props: FieldAllProps, element: Ref<FieldElementInput>);
    /**
     * Returns the input element.
     *
     * Возвращает элемент ввода.
     */
    get(): HTMLInputElement | undefined;
    /**
     * Returns a reference to the input element.
     *
     * Возвращает ссылку на элемент ввода.
     */
    getElement(): Ref<FieldElementInput>;
    /**
     * Search for an element by its name inside a group or by selector.
     *
     * Поиск элемента по его названию внутри группы или по селектору.
     * @param nameSelectors element name or selector /<br>название элемента или селектор
     */
    findByName(nameSelectors: string | HTMLInputElement): HTMLInputElement | undefined;
    /**
     * Clear all values to the original ones.
     *
     * Очисти все значения до оригинальных.
     */
    clear(): this;
}

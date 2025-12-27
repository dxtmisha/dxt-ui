import { Ref, ComputedRef } from 'vue';
/**
 * Class for working with the arrow element.
 *
 * Класс для работы с элементом стрелки.
 */
export declare class ArrowElement {
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly className: string;
    /**
     * Constructor
     * @param element input element/ элемент ввода
     * @param className class name/ название класса
     */
    constructor(element: Ref<HTMLElement | undefined>, className: string);
    /** Gets the width of the arrow/ Получает ширину стрелки */
    readonly width: ComputedRef<number>;
    /** Gets the height of the arrow/ Получает высоту стрелки */
    readonly height: ComputedRef<number>;
    /**
     * Checks that the element exists.
     *
     * Проверяет, что элемент существует.
     */
    is(): this is {
        element: Ref<HTMLElement>;
    };
    /**
     * Gets the name of the arrow width variable.
     *
     * Получает имя переменной ширины стрелки.
     */
    protected getNameArrowWidth(): string;
    /**
     * Gets the name of the arrow height variable.
     *
     * Получает имя переменной высоты стрелки.
     * @protected
     */
    protected getNameArrowHeight(): string;
    /**
     * Gets the width of the arrow from styles.
     *
     * Получает ширину стрелки из стилей.
     */
    protected getStyleArrowWidth(): string | undefined;
    /**
     * Gets the size of the arrow from styles.
     *
     * Получает размер стрелки из стилей.
     */
    protected getStyleArrowHeight(): string | undefined;
}

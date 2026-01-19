import { Ref } from 'vue';
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
    /**
     * Checks that the element exists.
     *
     * Проверяет, что элемент существует.
     */
    is(): this is {
        element: Ref<HTMLElement>;
    };
    /**
     * Gets the width of the arrow.
     *
     * Получает ширину стрелки.
     */
    getWidth(): number;
    /**
     * Gets the height of the arrow.
     *
     * Получает высоту стрелки.
     */
    getHeight(): number;
    /**
     * Gets the element's bounding rectangle.
     *
     * Получает ограничивающий прямоугольник элемента.
     */
    getRect(): DOMRect | undefined;
    /**
     * Gets the bounding rectangle of the border element.
     *
     * Получает ограничивающий прямоугольник элемента границы.
     */
    getRectBorder(): DOMRect | undefined;
    /**
     * Gets the bounding rectangle of the border element.
     *
     * Получает ограничивающий прямоугольник элемента границы.
     */
    getRectArrowLine(): DOMRect | undefined;
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

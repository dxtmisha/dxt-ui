import { ArrowProps } from './props';
import { Ref } from 'vue';
/**
 * Class for working with the target element.
 *
 * Класс для работы с целевым элементом.
 */
export declare class ArrowElementTarget {
    protected readonly props: ArrowProps;
    readonly element: Ref<HTMLElement | undefined, HTMLElement | undefined>;
    /**
     * Constructor
     * @param props input properties/ входящие свойства
     */
    constructor(props: ArrowProps);
    /**
     * Checks that the element exists.
     *
     * Проверяет, что элемент существует.
     */
    is(): boolean;
    /**
     * Gets the element's bounding rectangle.
     *
     * Получает ограничивающий прямоугольник элемента.
     */
    getRect(): DOMRect | undefined;
    /**
     * Updates the target element.
     *
     * Обновляет целевой элемент.
     */
    update(): void;
    /**
     * Initializes the target element.
     *
     * Инициализирует целевой элемент.
     */
    protected initElement(): HTMLElement | undefined;
}

import { Ref } from 'vue';
import { RippleProps } from './props';
/**
 * Class for managing the effect element.
 *
 * Класс для управления элементом эффекта.
 */
export declare class RippleItem {
    protected readonly props: RippleProps;
    protected readonly element: Ref<HTMLSpanElement | undefined>;
    protected readonly className: string;
    protected readonly classItem: string;
    protected readonly classEnd: string;
    protected readonly styleX: string;
    protected readonly styleY: string;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param element image element for scaling/ элемент изображения для масштабирования
     * @param className list of available classes/ список доступных классов
     */
    constructor(props: RippleProps, element: Ref<HTMLSpanElement | undefined>, className: string);
    /**
     * Adding a new light element.
     *
     * Добавление нового элемента свечения.
     * @param x x-coordinate/ x-координата
     * @param y y-coordinate/ y-координата
     */
    add(x: number, y: number): void;
}

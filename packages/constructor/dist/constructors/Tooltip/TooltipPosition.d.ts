import { Ref } from 'vue';
import { TooltipClasses } from './TooltipClasses';
import { TooltipStyle } from './TooltipStyle';
import { TooltipProps } from './props';
/**
 * A class for working with position.
 *
 * Класс для работы с позицией.
 */
export declare class TooltipPosition {
    protected readonly props: Readonly<TooltipProps>;
    protected readonly element: Ref<HTMLDivElement | undefined>;
    protected readonly classes: TooltipClasses;
    protected readonly style: TooltipStyle;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param element instance of the element itself/ экземпляр самого элемента
     * @param classes object for working with the class/ объект для работы с классом
     * @param style object for working with styles/ объект для работы со стилями
     */
    constructor(props: Readonly<TooltipProps>, element: Ref<HTMLDivElement | undefined>, classes: TooltipClasses, style: TooltipStyle);
    /**
     * Update all sizes.
     *
     * Обновить все размеры.
     */
    update(): void;
    /**
     * Checks whether the element should be displayed on top.
     *
     * Проверяет, надо ли отображать элемент сверху.
     * @param rect the current position of the control element/ данное положение элемента контроля
     * @param tooltipRect the current position of the element itself/ данное положение самого элемента
     */
    protected isTop(rect: DOMRect, tooltipRect: DOMRect): boolean;
    /**
     * Returns the margins for the element.
     *
     * Возвращает отступы для элемента.
     */
    protected getIndent(): number;
}

import { VNode } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { Tooltip } from './Tooltip';
import { TooltipPropsBasic } from './props';
import { TooltipClasses, TooltipComponents, TooltipEmits, TooltipExpose, TooltipSlots } from './types';
/**
 * TooltipDesign
 */
export declare class TooltipDesign<COMP extends TooltipComponents, EXPOSE extends TooltipExpose, CLASSES extends TooltipClasses, P extends TooltipPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, TooltipEmits, EXPOSE, TooltipSlots, CLASSES, P> {
    protected readonly item: Tooltip;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, TooltipEmits, P>);
    /**
     * Initialization of all the necessary properties for work
     *
     * Инициализация всех необходимых свойств для работы.
     */
    protected initExpose(): EXPOSE;
    /**
     * Improvement of the obtained list of classes.
     *
     * Доработка полученного списка классов.
     */
    protected initClasses(): Partial<CLASSES>;
    /**
     * Refinement of the received list of styles.
     *
     * Доработка полученного списка стилей.
     */
    protected initStyles(): ConstrStyles;
    /**
     * A method for rendering.
     *
     * Метод для рендеринга.
     */
    protected initRender(): VNode[];
    /**
     * Rendering of the control slot.
     *
     * Рендеринг слота управления.
     */
    protected readonly renderControl: () => VNode[];
    /**
     * Rendering of the tooltip.
     *
     * Рендеринг тултипа.
     */
    protected readonly renderTooltip: () => VNode[];
    /**
     * Rendering of the body slot.
     *
     * Рендеринг слота тела.
     */
    protected readonly renderBody: () => VNode[];
}

import { VNode } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { Anchor } from './Anchor';
import { TooltipControl } from '../Tooltip';
import { AnchorPropsBasic } from './props';
import { AnchorClasses, AnchorComponents, AnchorEmits, AnchorExpose, AnchorSlots } from './types';
/**
 * AnchorDesign
 */
export declare class AnchorDesign<COMP extends AnchorComponents, EXPOSE extends AnchorExpose, CLASSES extends AnchorClasses, P extends AnchorPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, AnchorEmits, EXPOSE, AnchorSlots, CLASSES, P> {
    protected readonly item: Anchor;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     * @param ItemConstructor class for working with the anchor/ класс для работы с якорем
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, AnchorEmits, P>, ItemConstructor?: typeof Anchor);
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
    protected initRender(): VNode[] | undefined;
    /**
     * Rendering the tooltip.
     *
     * Рендеринг подсказки.
     */
    readonly renderTooltip: () => VNode[];
    /**
     * Rendering the main item.
     *
     * Рендеринг основного элемента.
     * @param props additional properties/ дополнительные свойства
     */
    readonly renderItem: (props?: TooltipControl) => VNode[];
    /**
     * Rendering the hidden item.
     *
     * Рендеринг скрытого элемента.
     */
    readonly renderItemHide: () => VNode[];
    /**
     * Rendering an icon if it is set.
     *
     * Рендеринг иконки, если она задана.
     */
    readonly renderIcon: () => VNode[];
    /**
     * Rendering children elements.
     *
     * Рендеринг дочерних элементов.
     */
    readonly renderChildren: () => VNode[];
    /**
     * Get main element properties.
     *
     * Получить свойства основного элемента.
     */
    protected getMainProps(): Record<string, any>;
}

import { VNode } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { Block } from './Block';
import { BlockPropsBasic } from './props';
import { BlockClasses, BlockComponents, BlockEmits, BlockExpose, BlockSlots } from './types';
/**
 * BlockDesign
 */
export declare class BlockDesign<COMP extends BlockComponents, EXPOSE extends BlockExpose, CLASSES extends BlockClasses, P extends BlockPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, BlockEmits, EXPOSE, BlockSlots, CLASSES, P> {
    protected readonly item: Block;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, BlockEmits, P>);
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
    protected initRender(): VNode;
    /**
     * Headline rendering.
     *
     * Рендеринг заголовка.
     */
    protected readonly renderHeadline: () => VNode[];
    /**
     * Header rendering.
     *
     * Рендеринг заголовка.
     */
    protected readonly renderHeader: () => VNode[];
    /**
     * Trailing rendering.
     *
     * Рендеринг правого контента.
     */
    protected readonly renderTrailing: () => VNode[];
    /**
     * Body rendering.
     *
     * Рендеринг тела.
     */
    protected readonly renderBody: () => VNode[];
}

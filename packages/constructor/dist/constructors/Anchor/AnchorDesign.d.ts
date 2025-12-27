import { VNode } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { Anchor } from './Anchor';
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
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, AnchorEmits, P>);
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
}

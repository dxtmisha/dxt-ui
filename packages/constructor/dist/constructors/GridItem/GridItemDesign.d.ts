import { VNode } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { GridItem } from './GridItem';
import { GridItemPropsBasic } from './props';
import { GridItemClasses, GridItemComponents, GridItemEmits, GridItemExpose, GridItemSlots } from './types';
/**
 * GridItemDesign
 */
export declare class GridItemDesign<COMP extends GridItemComponents, EXPOSE extends GridItemExpose, CLASSES extends GridItemClasses, P extends GridItemPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, GridItemEmits, EXPOSE, GridItemSlots, CLASSES, P> {
    protected readonly item: GridItem;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     * @param ItemConstructor constructors item class/ класс элемента конструкторов
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, GridItemEmits, P>, ItemConstructor?: typeof GridItem);
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

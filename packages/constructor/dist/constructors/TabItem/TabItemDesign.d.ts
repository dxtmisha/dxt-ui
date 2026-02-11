import { VNode } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { TabItem } from './TabItem';
import { TabItemPropsBasic } from './props';
import { TabItemClasses, TabItemComponents, TabItemEmits, TabItemExpose, TabItemSlots } from './types';
/**
 * TabItemDesign
 */
export declare class TabItemDesign<COMP extends TabItemComponents, EXPOSE extends TabItemExpose, CLASSES extends TabItemClasses, P extends TabItemPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, TabItemEmits, EXPOSE, TabItemSlots, CLASSES, P> {
    protected readonly item: TabItem;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     * @param ItemConstructor constructors item class/ класс элемента конструкторов
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, TabItemEmits, P>, ItemConstructor?: typeof TabItem);
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

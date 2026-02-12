import { VNode } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { TabsNavigation } from './TabsNavigation';
import { TabsNavigationPropsBasic } from './props';
import { TabsNavigationClasses, TabsNavigationComponents, TabsNavigationEmits, TabsNavigationExpose, TabsNavigationSlots } from './types';
/**
 * TabsNavigationDesign
 */
export declare class TabsNavigationDesign<COMP extends TabsNavigationComponents, EXPOSE extends TabsNavigationExpose, CLASSES extends TabsNavigationClasses, P extends TabsNavigationPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, TabsNavigationEmits, EXPOSE, TabsNavigationSlots, CLASSES, P> {
    protected readonly item: TabsNavigation;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     * @param ItemConstructor constructors item class/ класс элемента конструкторов
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, TabsNavigationEmits, P>, ItemConstructor?: typeof TabsNavigation);
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

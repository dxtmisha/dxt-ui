import { VNode } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { Container } from './Container';
import { ContainerPropsBasic } from './props';
import { ContainerClasses, ContainerComponents, ContainerEmits, ContainerExpose, ContainerSlots } from './types';
/**
 * ContainerDesign
 */
export declare class ContainerDesign<COMP extends ContainerComponents, EXPOSE extends ContainerExpose, CLASSES extends ContainerClasses, P extends ContainerPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, ContainerEmits, EXPOSE, ContainerSlots, CLASSES, P> {
    protected readonly item: Container;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     * @param ItemConstructor constructors item class/ класс элемента конструкторов
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, ContainerEmits, P>, ItemConstructor?: typeof Container);
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

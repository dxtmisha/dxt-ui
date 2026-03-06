import { VNode } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { Dummy } from './Dummy';
import { DummyPropsBasic } from './props';
import { DummyClasses, DummyComponents, DummyEmits, DummyExpose, DummySlots } from './types';
/**
 * DummyDesign
 */
export declare class DummyDesign<COMP extends DummyComponents, EXPOSE extends DummyExpose, CLASSES extends DummyClasses, P extends DummyPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, DummyEmits, EXPOSE, DummySlots, CLASSES, P> {
    protected readonly item: Dummy;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     * @param ItemConstructor constructors item class/ класс элемента конструкторов
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, DummyEmits, P>, ItemConstructor?: typeof Dummy);
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

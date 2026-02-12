import { VNode } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { HorizontalScroll } from './HorizontalScroll';
import { HorizontalScrollPropsBasic } from './props';
import { HorizontalScrollClasses, HorizontalScrollComponents, HorizontalScrollEmits, HorizontalScrollExpose, HorizontalScrollSlots } from './types';
/**
 * HorizontalScrollDesign
 */
export declare class HorizontalScrollDesign<COMP extends HorizontalScrollComponents, EXPOSE extends HorizontalScrollExpose, CLASSES extends HorizontalScrollClasses, P extends HorizontalScrollPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, HorizontalScrollEmits, EXPOSE, HorizontalScrollSlots, CLASSES, P> {
    protected readonly item: HorizontalScroll;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     * @param ItemConstructor constructors item class/ класс элемента конструкторов
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, HorizontalScrollEmits, P>, ItemConstructor?: typeof HorizontalScroll);
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

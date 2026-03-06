import { VNode } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { Grid } from './Grid';
import { GridPropsBasic } from './props';
import { GridClasses, GridComponents, GridEmits, GridExpose, GridSlots } from './types';
/**
 * GridDesign
 */
export declare class GridDesign<COMP extends GridComponents, EXPOSE extends GridExpose, CLASSES extends GridClasses, P extends GridPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, GridEmits, EXPOSE, GridSlots, CLASSES, P> {
    protected readonly item: Grid;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     * @param ItemConstructor constructors item class/ класс элемента конструкторов
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, GridEmits, P>, ItemConstructor?: typeof Grid);
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

import { VNode } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { Area } from './Area';
import { AreaPropsBasic } from './props';
import { AreaClasses, AreaComponents, AreaEmits, AreaExpose, AreaSlots } from './types';
/**
 * AreaDesign
 */
export declare class AreaDesign<COMP extends AreaComponents, EXPOSE extends AreaExpose, CLASSES extends AreaClasses, P extends AreaPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, AreaEmits, EXPOSE, AreaSlots, CLASSES, P> {
    protected readonly item: Area;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     * @param ItemConstructor constructors item class/ класс элемента конструкторов
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, AreaEmits, P>, ItemConstructor?: typeof Area);
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
    protected initRender(): VNode | undefined;
}

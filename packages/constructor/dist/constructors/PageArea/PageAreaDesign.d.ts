import { VNode } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { PageArea } from './PageArea';
import { PageAreaPropsBasic } from './props';
import { PageAreaClasses, PageAreaComponents, PageAreaEmits, PageAreaExpose, PageAreaSlots } from './types';
/**
 * PageAreaDesign
 */
export declare class PageAreaDesign<COMP extends PageAreaComponents, EXPOSE extends PageAreaExpose, CLASSES extends PageAreaClasses, P extends PageAreaPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, PageAreaEmits, EXPOSE, PageAreaSlots, CLASSES, P> {
    protected readonly item: PageArea;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     * @param ItemConstructor constructors item class/ класс элемента конструкторов
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, PageAreaEmits, P>, ItemConstructor?: typeof PageArea);
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

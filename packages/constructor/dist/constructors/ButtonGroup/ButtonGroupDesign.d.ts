import { VNode } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { ButtonGroup } from './ButtonGroup';
import { ButtonGroupPropsBasic } from './props';
import { ButtonGroupClasses, ButtonGroupComponents, ButtonGroupEmits, ButtonGroupExpose, ButtonGroupSlots } from './types';
/**
 * ButtonGroupDesign
 */
export declare class ButtonGroupDesign<COMP extends ButtonGroupComponents, EXPOSE extends ButtonGroupExpose, CLASSES extends ButtonGroupClasses, P extends ButtonGroupPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, ButtonGroupEmits, EXPOSE, ButtonGroupSlots, CLASSES, P> {
    protected readonly item: ButtonGroup;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     * @param ItemConstructor constructors item class/ класс элемента конструкторов
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, ButtonGroupEmits, P>, ItemConstructor?: typeof ButtonGroup);
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
    /**
     * List rendering.
     *
     * Рендеринг списка.
     */
    protected readonly renderList: () => VNode[];
}

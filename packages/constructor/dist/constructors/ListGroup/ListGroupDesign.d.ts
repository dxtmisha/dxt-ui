import { VNode } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { ListGroup } from './ListGroup';
import { ListGroupPropsBasic } from './props';
import { ListGroupClasses, ListGroupComponents, ListGroupEmits, ListGroupExpose, ListGroupSlots } from './types';
import { MotionTransformControlItem } from '../MotionTransform';
/**
 * ListGroupDesign
 */
export declare class ListGroupDesign<COMP extends ListGroupComponents, EXPOSE extends ListGroupExpose, CLASSES extends ListGroupClasses, P extends ListGroupPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, ListGroupEmits, EXPOSE, ListGroupSlots, CLASSES, P> {
    protected readonly item: ListGroup;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, ListGroupEmits, P>);
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
     * Render transformation element.
     *
     * Рендер элемента трансформации.
     */
    readonly renderTransform: () => VNode[];
    /**
     * Render title element.
     *
     * Рендер элемента заголовка.
     * @param item motion transform item/ элемент движения трансформации
     */
    readonly renderHead: (item: MotionTransformControlItem) => VNode;
    /**
     * Render list element.
     *
     * Рендер элемента списка.
     */
    readonly renderList: () => VNode;
}

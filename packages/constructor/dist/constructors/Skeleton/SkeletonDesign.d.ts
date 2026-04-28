import { VNode } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { Skeleton } from './Skeleton';
import { SkeletonPropsBasic } from './props';
import { SkeletonClasses, SkeletonComponents, SkeletonEmits, SkeletonExpose, SkeletonSlots } from './types';
/**
 * SkeletonDesign
 */
export declare class SkeletonDesign<COMP extends SkeletonComponents, EXPOSE extends SkeletonExpose, CLASSES extends SkeletonClasses, P extends SkeletonPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, SkeletonEmits, EXPOSE, SkeletonSlots, CLASSES, P> {
    protected readonly item: Skeleton;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     * @param ItemConstructor class for working with the item/ класс для работы с элементом
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, SkeletonEmits, P>, ItemConstructor?: typeof Skeleton);
    /**
     * Initialization of all the necessary properties for work<br>
     * Инициализация всех необходимых свойств для работы.
     */
    protected initExpose(): EXPOSE;
    /**
     * Improvement of the obtained list of classes.<br>
     * Доработка полученного списка классов.
     */
    protected initClasses(): Partial<CLASSES>;
    /**
     * Refinement of the received list of styles.<br>
     * Доработка полученного списка стилей.
     */
    protected initStyles(): ConstrStyles;
    /**
     * A method for rendering.<br>
     * Метод для рендеринга.
     */
    protected initRender(): VNode;
}

import { VNode } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { MotionAxis } from './MotionAxis';
import { MotionAxisPropsBasic } from './props';
import { MotionAxisClasses, MotionAxisComponents, MotionAxisEmits, MotionAxisExpose, MotionAxisSlots } from './types';
/**
 * MotionAxisDesign
 */
export declare class MotionAxisDesign<COMP extends MotionAxisComponents, EXPOSE extends MotionAxisExpose, CLASSES extends MotionAxisClasses, P extends MotionAxisPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, MotionAxisEmits, EXPOSE, MotionAxisSlots, CLASSES, P> {
    protected readonly item: MotionAxis;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     * @param ItemConstructor constructors item class/ класс элемента конструкторов
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, MotionAxisEmits, P>, ItemConstructor?: typeof MotionAxis);
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
     * Rendering the slide.
     *
     * Рендеринг слайда.
     */
    readonly renderSlides: () => VNode[];
}

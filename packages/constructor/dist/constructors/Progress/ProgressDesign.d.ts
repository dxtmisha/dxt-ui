import { VNode, ComputedRef } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { Progress } from './Progress';
import { ProgressPropsBasic } from './props';
import { ProgressClasses, ProgressComponents, ProgressEmits, ProgressExpose, ProgressSlots } from './types';
/**
 * ProgressDesign
 */
export declare class ProgressDesign<COMP extends ProgressComponents, EXPOSE extends ProgressExpose, CLASSES extends ProgressClasses, P extends ProgressPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, ProgressEmits, EXPOSE, ProgressSlots, CLASSES, P> {
    protected readonly item: Progress;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     * @param ItemConstructor progress item class/ класс элемента progress
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, ProgressEmits, P>, ItemConstructor?: typeof Progress);
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
     * Render elements for the circular loader.
     *
     * Рендер элементов для кругового загрузчика.
     */
    readonly renderCircle: () => VNode[];
    /**
     * Render dot at the end.
     *
     * Рендер точки в конце.
     */
    readonly renderPoint: () => VNode[];
    /**
     * Props for the main element/ Свойства для главного элемента
     */
    protected readonly propsMain: ComputedRef<Record<string, any>>;
}

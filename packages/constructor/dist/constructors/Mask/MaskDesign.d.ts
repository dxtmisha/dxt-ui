import { VNode } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { Mask } from './Mask';
import { MaskPropsBasic } from './props';
import { MaskClasses, MaskComponents, MaskEmits, MaskExpose, MaskSlots } from './types';
/**
 * MaskDesign
 */
export declare class MaskDesign<COMP extends MaskComponents, EXPOSE extends MaskExpose, CLASSES extends MaskClasses, P extends MaskPropsBasic> extends DesignConstructorAbstract<HTMLInputElement, COMP, MaskEmits, EXPOSE, MaskSlots, CLASSES, P> {
    protected readonly item: Mask;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, MaskEmits, P>);
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
     * Element for storing the final data.
     *
     * Элемент для хранения конечных данных.
     */
    protected renderData: () => VNode[];
    /**
     * Rendering method for input.
     *
     * Метод рендеринга для ввода.
     */
    protected renderInput: () => VNode[];
    /**
     * Rendering method for displaying the mask and the input data.
     *
     * Метод рендеринга для вывода маски и вводимых данных.
     */
    protected renderView: () => VNode[];
}

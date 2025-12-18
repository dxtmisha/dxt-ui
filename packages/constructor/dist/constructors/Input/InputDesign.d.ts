import { VNode } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { Input } from './Input';
import { FieldControl } from '../Field';
import { InputPropsBasic } from './props';
import { InputClasses, InputComponents, InputEmits, InputExpose, InputSlots } from './types';
/**
 * InputDesign
 */
export declare class InputDesign<COMP extends InputComponents, EXPOSE extends InputExpose, CLASSES extends InputClasses, P extends InputPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, InputEmits, EXPOSE, InputSlots, CLASSES, P> {
    protected readonly item: Input;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, InputEmits, P>);
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
    protected initRender(): VNode[];
    /**
     * Rendering the input element.
     *
     * Рендер элемент input.
     * @param input data for the input element/ данные для элемента ввода
     */
    protected readonly renderInput: (input: FieldControl) => VNode[];
    /**
     * Rendering mask element.
     *
     * Рендеринг элемента маски.
     * @param input data for the input element/ данные для элемента ввода
     */
    protected readonly renderMask: (input: FieldControl) => VNode[];
}

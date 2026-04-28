import { VNode } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { Textarea } from './Textarea';
import { FieldControl } from '../Field';
import { TextareaPropsBasic } from './props';
import { TextareaClasses, TextareaComponents, TextareaEmits, TextareaExpose, TextareaSlots } from './types';
/**
 * TextareaDesign
 */
export declare class TextareaDesign<COMP extends TextareaComponents, EXPOSE extends TextareaExpose, CLASSES extends TextareaClasses, P extends TextareaPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, TextareaEmits, EXPOSE, TextareaSlots, CLASSES, P> {
    protected readonly item: Textarea;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     * @param ItemConstructor constructors item class/ класс элемента конструкторов
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, TextareaEmits, P>, ItemConstructor?: typeof Textarea);
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
}

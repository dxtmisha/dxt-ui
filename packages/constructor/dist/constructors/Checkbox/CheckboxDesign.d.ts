import { VNode } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { Checkbox } from './Checkbox';
import { CheckboxPropsBasic } from './props';
import { CheckboxClasses, CheckboxComponents, CheckboxEmits, CheckboxExpose, CheckboxSlots } from './types';
/**
 * CheckboxDesign
 */
export declare class CheckboxDesign<COMP extends CheckboxComponents, EXPOSE extends CheckboxExpose, CLASSES extends CheckboxClasses, P extends CheckboxPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, CheckboxEmits, EXPOSE, CheckboxSlots, CLASSES, P> {
    protected readonly item: Checkbox;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     * @param ItemConstructor constructors item class/ класс элемента конструкторов
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, CheckboxEmits, P>, ItemConstructor?: typeof Checkbox);
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
     * Rendering of the main body.
     *
     * Рендеринг главного body.
     */
    readonly renderBody: () => VNode;
    /**
     * Rendering of the main input.
     *
     * Рендеринг главного input.
     */
    readonly renderInput: () => VNode;
    /**
     * Rendering of the hidden input.
     *
     * Рендеринг скрытого input.
     */
    readonly renderInputHidden: () => VNode;
    /**
     * Rendering of the checkbox element.
     *
     * Рендеринг элемента checkbox.
     */
    readonly renderChecked: () => VNode[];
    /**
     * Rendering of the informational text element.
     *
     * Рендеринг элемента информационного текста.
     */
    readonly renderInfo: () => VNode[];
}

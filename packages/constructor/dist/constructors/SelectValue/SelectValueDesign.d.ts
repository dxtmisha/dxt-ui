import { VNode } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { SelectValue } from './SelectValue';
import { ChipGroupItem } from '../ChipGroup';
import { SelectValuePropsBasic } from './props';
import { SelectValueClasses, SelectValueComponents, SelectValueEmits, SelectValueExpose, SelectValueSlots } from './types';
/**
 * SelectValueDesign
 */
export declare class SelectValueDesign<COMP extends SelectValueComponents, EXPOSE extends SelectValueExpose, CLASSES extends SelectValueClasses, P extends SelectValuePropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, SelectValueEmits, EXPOSE, SelectValueSlots, CLASSES, P> {
    protected readonly item: SelectValue;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, SelectValueEmits, P>);
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
     * Rendering data.
     *
     * Рендеринг данных.
     */
    protected readonly renderData: () => (VNode | string)[];
    /**
     * List rendering.
     *
     * Рендеринг списка.
     */
    protected readonly renderList: () => VNode[];
    /**
     * Element rendering.
     *
     * Рендеринг элемента.
     * @param item selected element/ выбранный элемент
     */
    protected readonly renderItem: (item: ChipGroupItem) => VNode | undefined;
}

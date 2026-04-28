import { VNode } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { ChipGroup } from './ChipGroup';
import { ChipGroupItem } from './basicTypes';
import { ChipGroupPropsBasic } from './props';
import { ChipGroupClasses, ChipGroupComponents, ChipGroupEmits, ChipGroupExpose, ChipGroupSlots } from './types';
/**
 * ChipGroupDesign
 */
export declare class ChipGroupDesign<COMP extends ChipGroupComponents, EXPOSE extends ChipGroupExpose, CLASSES extends ChipGroupClasses, P extends ChipGroupPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, ChipGroupEmits, EXPOSE, ChipGroupSlots, CLASSES, P> {
    protected readonly item: ChipGroup;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     * @param ItemConstructor class for working with the item/ класс для работы с элементом
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, ChipGroupEmits, P>, ItemConstructor?: typeof ChipGroup);
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
    /**
     * Element rendering.
     *
     * Рендеринг элемента.
     * @param item selected element/ выбранный элемент
     */
    protected readonly renderItem: (item: ChipGroupItem) => VNode | undefined;
}

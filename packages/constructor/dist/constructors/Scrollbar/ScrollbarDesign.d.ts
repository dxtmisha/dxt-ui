import { VNode } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { Scrollbar } from './Scrollbar';
import { ScrollbarPropsBasic } from './props';
import { ScrollbarClasses, ScrollbarComponents, ScrollbarEmits, ScrollbarExpose, ScrollbarSlots } from './types';
/**
 * ScrollbarDesign
 */
export declare class ScrollbarDesign<COMP extends ScrollbarComponents, EXPOSE extends ScrollbarExpose, CLASSES extends ScrollbarClasses, P extends ScrollbarPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, ScrollbarEmits, EXPOSE, ScrollbarSlots, CLASSES, P> {
    protected readonly item: Scrollbar;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     * @param ItemConstructor class for working with the item/ класс для работы с элементом
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, ScrollbarEmits, P>, ItemConstructor?: typeof Scrollbar);
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
    protected initRender(): VNode | undefined;
}

import { VNode } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { Header } from './Header';
import { HeaderPropsBasic } from './props';
import { HeaderClasses, HeaderComponents, HeaderEmits, HeaderExpose, HeaderSlots } from './types';
/**
 * HeaderDesign
 */
export declare class HeaderDesign<COMP extends HeaderComponents, EXPOSE extends HeaderExpose, CLASSES extends HeaderClasses, P extends HeaderPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, HeaderEmits, EXPOSE, HeaderSlots, CLASSES, P> {
    protected readonly item: Header;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     * @param ItemConstructor constructors item class/ класс элемента конструкторов
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, HeaderEmits, P>, ItemConstructor?: typeof Header);
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
     * Trailing rendering.
     *
     * Рендеринг правого контента.
     */
    protected readonly renderTrailing: () => VNode[];
}

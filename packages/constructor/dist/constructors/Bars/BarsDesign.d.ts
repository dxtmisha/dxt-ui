import { VNode } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { Bars } from './Bars';
import { BarsProps, BarsPropsBasic } from './props';
import { BarsClasses, BarsComponents, BarsEmits, BarsExpose, BarsSlots } from './types';
/**
 * BarsDesign
 */
export declare class BarsDesign<COMP extends BarsComponents, EXPOSE extends BarsExpose, CLASSES extends BarsClasses, P extends BarsProps> extends DesignConstructorAbstract<HTMLDivElement, COMP, BarsEmits, EXPOSE, BarsSlots, CLASSES, P> {
    protected readonly item: Bars;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     * @param ItemConstructor bars item class/ класс элемента bars
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, BarsEmits, P>, ItemConstructor?: typeof Bars);
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
     * Rendering the close button.
     *
     * Рендеринг кнопки закрытия.
     */
    readonly renderBackButton: () => VNode[];
    /**
     * Rendering the content.
     *
     * Рендеринг контента.
     */
    readonly renderContext: () => VNode[];
    /**
     * Rendering the control button.
     *
     * Рендеринг кнопки управления.
     */
    readonly renderBars: () => VNode[];
    /**
     * Rendering the control button.
     *
     * Рендеринг кнопки управления.
     */
    readonly renderActionBars: () => VNode[];
    /**
     * Rendering a list of buttons from the list.
     *
     * Рендеринг списка кнопок по списку.
     * @param list list of data for the button/ список данных для кнопки
     */
    readonly renderList: (list: BarsPropsBasic["bars"]) => VNode[];
}

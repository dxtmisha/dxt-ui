import { VNode } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { Tabs } from './Tabs';
import { TabsPropsBasic } from './props';
import { TabsClasses, TabsComponents, TabsEmits, TabsExpose, TabsSlots } from './types';
/**
 * TabsDesign
 */
export declare class TabsDesign<COMP extends TabsComponents, EXPOSE extends TabsExpose, CLASSES extends TabsClasses, P extends TabsPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, TabsEmits, EXPOSE, TabsSlots, CLASSES, P> {
    protected readonly item: Tabs;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     * @param ItemConstructor constructors item class/ класс элемента конструкторов
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, TabsEmits, P>, ItemConstructor?: typeof Tabs);
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
     * Rendering of slides.
     *
     * Рендеринг слайдов.
     */
    readonly slidesRender: () => Record<string, () => any> | undefined;
}

import { VNode, ComputedRef } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { Window } from './Window';
import { WindowPropsBasic } from './props';
import { WindowClasses, WindowComponents, WindowEmits, WindowExpose, WindowSlots } from './types';
/**
 * WindowDesign
 */
export declare class WindowDesign<COMP extends WindowComponents, EXPOSE extends WindowExpose, CLASSES extends WindowClasses, P extends WindowPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, WindowEmits, EXPOSE, WindowSlots, CLASSES, P> {
    protected readonly item: Window;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     * @param ItemConstructor window item class/ класс элемента окна
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, WindowEmits, P>, ItemConstructor?: typeof Window);
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
     * Render main window element.
     *
     * Рендер главного элемента окна.
     */
    readonly renderMain: () => VNode;
    /**
     * Render body element.
     *
     * Рендер элемента тела.
     */
    readonly renderBody: () => VNode;
    /**
     * Generates an element to group the displayed data.
     *
     * Генерирует элемент для группировки выводимых данных.
     */
    readonly renderBodyGroup: () => VNode[];
    /**
     * Render context element.
     *
     * Рендер элемента контекста.
     */
    readonly renderBodyContext: () => VNode[];
    /**
     * Generates an element to display the image.
     *
     * Генерирует элемент для вывода изображения
     */
    readonly renderBodyImage: () => VNode[];
    /**
     * Generates an element to display the close button.
     *
     * Генерирует элемент для вывода кнопки закрытия.
     */
    readonly renderBodyClose: () => VNode[];
    /**
     * Props for the main element.
     *
     * Свойства для главного элемента.
     */
    protected readonly propsMain: ComputedRef<Record<string, any>>;
}

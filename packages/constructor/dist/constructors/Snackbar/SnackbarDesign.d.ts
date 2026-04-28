import { VNode } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { Snackbar } from './Snackbar';
import { SnackbarValue } from './basicTypes';
import { SnackbarPropsBasic } from './props';
import { SnackbarClasses, SnackbarComponents, SnackbarEmits, SnackbarExpose, SnackbarSlots } from './types';
/**
 * SnackbarDesign
 */
export declare class SnackbarDesign<COMP extends SnackbarComponents, EXPOSE extends SnackbarExpose, CLASSES extends SnackbarClasses, P extends SnackbarPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, SnackbarEmits, EXPOSE, SnackbarSlots, CLASSES, P> {
    protected readonly item: Snackbar;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     * @param ItemConstructor constructors item class/ класс элемента конструкторов
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, SnackbarEmits, P>, ItemConstructor?: typeof Snackbar);
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
    /**
     * Rendering a list of elements.
     *
     * Рендер списка элементов.
     */
    protected readonly renderData: () => VNode[];
    /**
     * Element rendering.
     *
     * Рендер элемента.
     * @param item add element / элемент добавления
     */
    protected readonly renderItem: (item: SnackbarValue) => VNode;
    /**
     * Render separators by priority.
     *
     * Рендер разделителей по приоритету.
     */
    protected readonly renderSpace: () => VNode[];
}

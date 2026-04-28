import { VNode } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { SnackbarItem } from './SnackbarItem';
import { SnackbarItemPropsBasic } from './props';
import { SnackbarItemClasses, SnackbarItemComponents, SnackbarItemEmits, SnackbarItemExpose, SnackbarItemSlots } from './types';
/**
 * SnackbarItemDesign
 */
export declare class SnackbarItemDesign<COMP extends SnackbarItemComponents, EXPOSE extends SnackbarItemExpose, CLASSES extends SnackbarItemClasses, P extends SnackbarItemPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, SnackbarItemEmits, EXPOSE, SnackbarItemSlots, CLASSES, P> {
    protected readonly item: SnackbarItem;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     * @param ItemConstructor constructors item class/ класс элемента конструкторов
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, SnackbarItemEmits, P>, ItemConstructor?: typeof SnackbarItem);
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
     * Rendering part of the content.
     *
     * Рендер части содержимого.
     */
    protected readonly renderMain: () => VNode[];
    /**
     * Description area rendering.
     *
     * Рендер зоны описания.
     */
    protected readonly renderContext: () => VNode[];
    /**
     * Rendering of the body content in the body slot.
     *
     * Рендер тела, содержимый в слоте body.
     */
    protected readonly renderBody: () => VNode[];
    /**
     * Generates an element to display the close button.
     *
     * Генерирует элемент для вывода кнопки закрытия.
     */
    readonly renderClose: () => VNode[];
}

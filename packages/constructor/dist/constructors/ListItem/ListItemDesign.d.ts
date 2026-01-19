import { VNode } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { ListItem } from './ListItem';
import { ListItemPropsBasic } from './props';
import { ListItemClasses, ListItemComponents, ListItemEmits, ListItemExpose, ListItemSlots } from './types';
/**
 * ListItemDesign
 */
export declare class ListItemDesign<COMP extends ListItemComponents, EXPOSE extends ListItemExpose, CLASSES extends ListItemClasses, P extends ListItemPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, ListItemEmits, EXPOSE, ListItemSlots, CLASSES, P> {
    protected readonly item: ListItem;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, ListItemEmits, P>);
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
     * Method for rendering the main part of the component.
     *
     * Метод для рендеринга основной части компонента.
     */
    readonly renderBody: () => VNode[];
    /**
     * Method for rendering the context part of the component.
     * This includes prefix, caption, suffix, badge, and label.
     *
     * Метод для рендеринга контекстной части компонента.
     * Включает в себя префикс, подпись, суффикс, значок и метку.
     */
    readonly renderContext: () => VNode[];
}

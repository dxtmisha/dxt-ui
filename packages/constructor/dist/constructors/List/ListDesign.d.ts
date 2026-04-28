import { VNode } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract, ListDataItem, ListList, ListType, ConstrBind } from '@dxtmisha/functional';
import { List } from './List';
import { ListPropsBasic } from './props';
import { ListClasses, ListComponents, ListEmits, ListExpose, ListSlots } from './types';
import { WindowControlItem } from '../Window';
import { ListGroupSlotsPropsInclude } from '../ListGroup';
import { ItemList } from '@dxtmisha/functional-basic';
/**
 * ListDesign
 */
export declare class ListDesign<COMP extends ListComponents, EXPOSE extends ListExpose, CLASSES extends ListClasses, P extends ListPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, ListEmits, EXPOSE, ListSlots, CLASSES, P> {
    protected readonly item: List;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     * @param ItemConstructor class for working with the item/ класс для работы с элементом
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, ListEmits, P>, ItemConstructor?: typeof List);
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
     * Generates all elements from the list.
     *
     * Генерирует все элементы из списка.
     */
    readonly renderData: () => VNode[];
    /**
     * Generates an element.
     *
     * Генерирует элемент.
     * @param type type of list/ тип списка
     * @param item selected element/ выбранный элемент
     */
    readonly renderItem: (type: ListType, item: ListDataItem) => VNode;
    /**
     * Generates a group element.
     *
     * Генерирует групповой элемент.
     * @param item selected element/ выбранный элемент
     * @param props data for working with the group/ данные для работы с группой
     */
    readonly renderItemGroup: (item: ListDataItem, props: ListGroupSlotsPropsInclude) => VNode;
    /**
     * Generates a menu element.
     *
     * Генерирует элемент меню.
     * @param item selected element/ выбранный элемент
     * @param props data for working with the menu/ данные для работы с меню
     */
    readonly renderItemMenu: (item: ListDataItem, props: WindowControlItem) => VNode;
    /**
     * Generates a break between elements.
     *
     * Генерирует разрыв между элементами.
     * @param item selected element/ выбранный элемент
     */
    readonly renderSpace: (item: ListDataItem) => VNode;
    /**
     * Generates a dividing line.
     *
     * Генерирует линию разделения.
     * @param item selected element/ выбранный элемент
     */
    readonly renderLine: (item: ListDataItem) => VNode;
    /**
     * Generates a subtitle.
     *
     * Генерирует подзаголовок.
     * @param item selected element/ выбранный элемент
     */
    readonly renderSubtitle: (item: ListDataItem) => VNode;
    /**
     * Generates HTML code by the slot name or the value of the `label` field.
     *
     * Генерирует HTML-код по названию слота или значению поля `label`.
     * @param item selected element/ выбранный элемент
     */
    readonly renderHtml: (item: ListDataItem) => VNode;
    /**
     * Generates a group of lists.
     *
     * Генерирует группу списков.
     * @param item selected element/ выбранный элемент
     */
    readonly renderGroup: (item: ListDataItem) => VNode;
    /**
     * Generates a menu of lists.
     *
     * Генерирует меню списков.
     * @param item selected element/ выбранный элемент
     * @param first is the first element/ является ли первым элементом
     */
    readonly renderMenu: (item: ListDataItem, first: boolean) => VNode;
    /**
     * Generates all elements from the list.
     *
     * Генерирует все элементы из списка.
     * @param type type of list/ тип списка
     * @param data selected element/ выбранный элемент
     * @param first is the first element/ является ли первым элементом
     */
    protected renderDataByItem(type: ListType, data: ListList, first?: boolean): VNode[];
    /**
     * Determines if highlighting is required.
     *
     * Определяет, требуется ли выделение.
     * @param item selected element/ выбранный элемент
     */
    protected isHighlight(item: ListDataItem): boolean;
    /**
     * Returns binding properties for the item.
     *
     * Возвращает привязочные свойства для элемента.
     * @param type type of list/ тип списка
     * @param item selected element/ выбранный элемент
     */
    protected getItemAttrs(type: ListType, item: ListDataItem): ConstrBind<ItemList>;
}

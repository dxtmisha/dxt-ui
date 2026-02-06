import { Ref, ToRefs, ComputedRef } from 'vue';
import { ConstrBind, ConstrEmit, DesignComp, ListDataRef, ListDataItem, ListList, ConstrClass, ConstrStyles, ListDataFull, ListDataBasic } from '@dxtmisha/functional';
import { EventClickInclude } from '../../classes/EventClickInclude';
import { WindowClassesInclude } from '../Window';
import { ListSearch } from './ListSearch';
import { ListFocus } from './ListFocus';
import { ListGo } from './ListGo';
import { ListControl } from './ListControl';
import { IconValue, IconPropsBasic } from '../Icon';
import { ListGroupSlotsPropsInclude } from '../ListGroup';
import { ListComponents, ListEmits, ListSlots } from './types';
import { ListProps } from './props';
import { NumberOrString, ItemList } from '@dxtmisha/functional-basic';
import { BadgePropsBasic } from '../Badge';
import { ProgressPropsBasic } from '../Progress';
import { RouteLocationRaw } from 'vue-router';
import { EventClickValue, RoleType } from '../../library';
/**
 * List
 */
export declare class List {
    protected readonly props: ListProps;
    protected readonly refs: ToRefs<ListProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<ListComponents, ListProps> | undefined;
    protected readonly slots?: ListSlots | undefined;
    protected readonly emits?: ConstrEmit<ListEmits> | undefined;
    readonly search: ListSearch;
    readonly focus: ListFocus;
    readonly data: ListDataRef;
    readonly event: EventClickInclude;
    readonly go: ListGo;
    readonly control: ListControl;
    readonly windowClasses: WindowClassesInclude;
    /** Unique list identifier/ Уникальный идентификатор списка */
    protected readonly id: number;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
     * @param element input element/ элемент ввода
     * @param classDesign design name/ название дизайна
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param slots object for working with slots/ объект для работы со слотами
     * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
     * @param ListSearchConstructor class for working with search/ класс для работы с поиском
     * @param ListFocusConstructor class for working with focus/ класс для работы с фокусом
     * @param ListDataRefConstructor class for working with data list/ класс для работы со списком данных
     * @param ListGoConstructor class for working with navigation/ класс для работы с навигацией
     * @param ListControlConstructor class for working with control/ класс для работы с управлением
     * @param EventClickIncludeConstructor class for working with click event/ класс для работы с событием клика
     * @param WindowClassesIncludeConstructor class for working with window classes/ класс для работы с классами окна
     */
    constructor(props: ListProps, refs: ToRefs<ListProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<ListComponents, ListProps> | undefined, slots?: ListSlots | undefined, emits?: ConstrEmit<ListEmits> | undefined, ListSearchConstructor?: typeof ListSearch, ListFocusConstructor?: typeof ListFocus, ListDataRefConstructor?: typeof ListDataRef, ListGoConstructor?: typeof ListGo, ListControlConstructor?: typeof ListControl, EventClickIncludeConstructor?: typeof EventClickInclude, WindowClassesIncludeConstructor?: typeof WindowClassesInclude);
    /**
     * Computed list data
     *
     * Вычисляемые данные списка
     * */
    readonly list: ComputedRef<ListList>;
    /**
     * Computed CSS classes for the cell component.
     *
     * Вычисляемые CSS классы для компонента ячейки.
     */
    readonly classes: ComputedRef<ConstrClass>;
    /**
     * Computed binding properties for list items/
     * Вычисляемые привязочные свойства для элементов списка
     * */
    protected readonly itemBinds: ComputedRef<{
        listId: number;
        label?: NumberOrString;
        labelId?: string;
        highlight?: string;
        highlightLengthStart?: number;
        value?: any;
        description?: string | number;
        descriptionId?: string;
        prefix?: string | number;
        caption?: string | number;
        suffix?: string | number;
        icon?: IconValue< IconPropsBasic> | undefined;
        selected?: boolean;
        iconTurn?: boolean;
        iconHide?: boolean;
        iconDir?: boolean;
        iconPalette?: boolean;
        iconAttrs?: ConstrBind< IconPropsBasic> | undefined;
        iconTrailing?: IconValue< IconPropsBasic> | undefined;
        iconTrailingTurnOnly?: boolean;
        iconTrailingDirOnly?: boolean;
        iconTrailingPalette?: boolean;
        badge?: string | number | ConstrBind< BadgePropsBasic> | undefined;
        badgeDot?: boolean;
        loading?: boolean | ConstrBind< ProgressPropsBasic> | undefined;
        isSkeleton?: boolean;
        readonly?: boolean;
        disabled?: boolean;
        to?: string | RouteLocationRaw;
        detail?: EventClickValue["detail"];
        role?: RoleType;
        index?: any;
        href?: string;
        tag: "button" | "a" | "span" | "li" | "div" | string;
        filterMode?: boolean;
        divider: boolean;
        tabindex?: number | string;
        type?: string;
        parent?: string;
        search?: string;
        isMenu?: boolean;
        isItemMenu?: boolean;
        key?: string;
        class?: ConstrClass;
        style?: ConstrStyles;
        onClick: (event: MouseEvent, options?: EventClickValue) => void;
    }>;
    /**
     * Returns information about the opening status of a group item.
     *
     * Возвращает информацию о статусе открытия группового элемента.
     * @param item List item data/ данные элемента списка
     */
    isOpenGroup(item: ConstrBind<ListDataItem>): boolean;
    /**
     * Gets binding properties for a list item
     *
     * Получает привязочные свойства для элемента списка
     * @param item List item data/ данные элемента списка
     */
    getItem(item: ConstrBind<ListDataItem>): ConstrBind< ItemList>;
    /**
     * Gets binding properties for a group item in the list
     *
     * Получает привязочные свойства для группового элемента в списке
     * @param item List item data/ данные элемента списка
     */
    getItemGroup(item: ConstrBind<ListDataItem>): ConstrBind< ItemList>;
    /**
     * Gets binding properties for a menu item in the list
     *
     * Получает привязочные свойства для элемента меню в списке
     * @param item List item data/ данные элемента списка
     */
    getItemMenu(item: ConstrBind<ListDataItem>): ConstrBind< ItemList>;
    /**
     * Gets binding properties for a group management item with down arrow
     *
     * Получает привязочные свойства для элемента управления группой со стрелкой вниз
     * @param item List item data/ данные элемента списка
     * @param props additional properties/ дополнительные свойства
     */
    getItemManagementFormGroup(item: ConstrBind<ListDataItem>, props: ListGroupSlotsPropsInclude): ConstrBind<ListDataItem>;
    /**
     * Gets binding properties for a menu management item with right arrow
     *
     * Получает привязочные свойства для элемента управления меню со стрелкой вправо
     * @param item List item data/ данные элемента списка
     * @param open Whether the menu is open/ открыто ли меню
     */
    getItemManagementFormMenu(item: ConstrBind<ListDataItem>, open: boolean): ConstrBind<ListDataItem>;
    /**
     * Returns a sublist for a group item.
     *
     * Возвращает подсписок для группового элемента.
     * @param item List item data/ данные элемента списка
     */
    getList(item: ConstrBind<ListDataItem>): ListDataFull<ListDataBasic>;
    /**
     * Internal method to create management item binding properties
     *
     * Внутренний метод для создания привязочных свойств элемента управления
     * @param item List item data/ данные элемента списка
     * @param open Whether the item is open/ открыт ли элемент
     * @param icon Icon to display/ иконка для отображения
     */
    protected getItemManagement(item: ConstrBind<ListDataItem>, open: boolean, icon?: IconValue): ConstrBind<ListDataItem>;
}

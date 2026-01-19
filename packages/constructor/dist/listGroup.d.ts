import { ComputedRef } from 'vue';
import { ConstrBind } from '@dxtmisha/functional';
import { ConstrClass } from '@dxtmisha/functional';
import { ConstrEmit } from '@dxtmisha/functional';
import { ConstrOptions } from '@dxtmisha/functional';
import { ConstrStyles } from '@dxtmisha/functional';
import { DesignComp } from '@dxtmisha/functional';
import { DesignConstructorAbstract } from '@dxtmisha/functional';
import { NumberOrString } from '@dxtmisha/functional';
import { Ref } from 'vue';
import { ToRefs } from 'vue';
import { VNode } from 'vue';

/**
 * ARIA props with labelledby and describedby/
 * ARIA пропсы с labelledby и describedby
 */
declare interface AriaByPropsInclude {
    ariaLabelledby?: string;
    ariaDescribedby?: string;
}

/**
 * ARIA haspopup prop/
 * ARIA проп haspopup
 */
declare interface AriaHaspopupPropsInclude {
    ariaHaspopup?: AriaList['aria-haspopup'];
}

/** ARIA list type/ ARIA тип списка */
declare type AriaList = {
    /** Element ID/ ID элемента */
    'id'?: string;
    /** ARIA role type/ Тип ARIA роли */
    'role'?: RoleType;
    /**
     * Tabindex attribute - indicates if the element can be focused/
     * Атрибут Tabindex - указывает, может ли элемент получать фокус
     */
    'tabindex'?: NumberOrString;
    /**
     * ARIA activedescendant attribute - identifies the currently active element/
     * Атрибут ARIA activedescendant - идентифицирует текущий активный элемент
     */
    'aria-activedescendant'?: string;
    /**
     * ARIA atomic attribute - indicates whether assistive technologies will present all or only parts of the changed region/
     * Атрибут ARIA atomic - указывает, будут ли вспомогательные технологии представлять весь или только части измененного региона
     */
    'aria-atomic'?: AriaTrueOrFalse;
    /**
     * ARIA autocomplete attribute - indicates whether inputting text could trigger display of suggestions/
     * Атрибут ARIA autocomplete - указывает, может ли ввод текста вызвать отображение предложений
     */
    'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both';
    /**
     * ARIA busy attribute - indicates an element is being modified/
     * Атрибут ARIA busy - указывает, что элемент изменяется
     */
    'aria-busy'?: AriaTrueOrFalse;
    /**
     * ARIA checked attribute - indicates the current checked state/
     * Атрибут ARIA checked - указывает текущее состояние отметки
     */
    'aria-checked'?: AriaTrueOrFalse | 'mixed';
    /**
     * ARIA colcount attribute - defines the total number of columns/
     * Атрибут ARIA colcount - определяет общее количество столбцов
     */
    'aria-colcount'?: number;
    /**
     * ARIA colindex attribute - defines an element's column index/
     * Атрибут ARIA colindex - определяет индекс столбца элемента
     */
    'aria-colindex'?: number;
    /**
     * ARIA colspan attribute - defines the number of columns spanned by a cell/
     * Атрибут ARIA colspan - определяет количество столбцов, занимаемых ячейкой
     */
    'aria-colspan'?: number;
    /**
     * ARIA controls attribute - identifies controlled element/
     * Атрибут ARIA controls - идентифицирует управляемый элемент
     */
    'aria-controls'?: string;
    /**
     * ARIA current attribute - indicates the current item within a container/
     * Атрибут ARIA current - указывает текущий элемент в контейнере
     */
    'aria-current'?: AriaTrueOrFalse | 'page' | 'step' | 'location' | 'date' | 'time';
    /**
     * ARIA describedby attribute - identifies describing element/
     * Атрибут ARIA describedby - идентифицирует описывающий элемент
     */
    'aria-describedby'?: string;
    /**
     * ARIA details attribute - identifies the element that provides detailed information/
     * Атрибут ARIA details - идентифицирует элемент, предоставляющий подробную информацию
     */
    'aria-details'?: string;
    /**
     * ARIA disabled attribute - indicates that the element is not editable or operable/
     * Атрибут ARIA disabled - указывает, что элемент не редактируется и не работает
     */
    'aria-disabled'?: AriaTrueOrFalse;
    /**
     * ARIA errormessage attribute - identifies the element that provides an error message/
     * Атрибут ARIA errormessage - идентифицирует элемент, предоставляющий сообщение об ошибке
     */
    'aria-errormessage'?: string;
    /**
     * ARIA expanded state attribute/
     * Атрибут ARIA состояния развёрнутости
     */
    'aria-expanded'?: AriaTrueOrFalse;
    /**
     * ARIA flowto attribute - identifies the next element in an alternate reading order/
     * Атрибут ARIA flowto - идентифицирует следующий элемент в альтернативном порядке чтения
     */
    'aria-flowto'?: string;
    /**
     * ARIA grabbed attribute - indicates an element's grabbed state in a drag-and-drop operation/
     * Атрибут ARIA grabbed - указывает состояние захвата элемента в операции перетаскивания
     */
    'aria-grabbed'?: AriaTrueOrFalse;
    /**
     * ARIA haspopup attribute - indicates the availability of a popup element/
     * Атрибут ARIA haspopup - указывает на наличие всплывающего элемента
     */
    'aria-haspopup'?: AriaTrueOrFalse | 'dialog' | 'menu' | 'listbox' | 'tree' | 'grid';
    /**
     * ARIA hidden attribute - indicates whether the element is exposed to an accessibility API/
     * Атрибут ARIA hidden - указывает, открыт ли элемент для API доступности
     */
    'aria-hidden'?: AriaTrueOrFalse;
    /**
     * ARIA invalid attribute - indicates the entered value does not conform to the format expected/
     * Атрибут ARIA invalid - указывает, что введенное значение не соответствует ожидаемому формату
     */
    'aria-invalid'?: AriaTrueOrFalse | 'grammar' | 'spelling';
    /**
     * ARIA keyshortcuts attribute - indicates keyboard shortcuts that an author has implemented/
     * Атрибут ARIA keyshortcuts - указывает сочетания клавиш, реализованные автором
     */
    'aria-keyshortcuts'?: string;
    /**
     * ARIA label attribute - defines a string value that labels the current element/
     * Атрибут ARIA label - определяет строковое значение, которое обозначает текущий элемент
     */
    'aria-label'?: string;
    /**
     * ARIA labelledby attribute - identifies labeling element/
     * Атрибут ARIA labelledby - идентифицирует обозначающий элемент
     */
    'aria-labelledby'?: string;
    /**
     * ARIA level attribute - defines the hierarchical level of an element/
     * Атрибут ARIA level - определяет иерархический уровень элемента
     */
    'aria-level'?: number;
    /**
     * ARIA live attribute - indicates that an element will be updated/
     * Атрибут ARIA live - указывает, что элемент будет обновляться
     */
    'aria-live'?: 'off' | 'polite' | 'assertive';
    /**
     * ARIA modal attribute - indicates modal state/
     * Атрибут ARIA modal - указывает модальное состояние
     */
    'aria-modal'?: AriaTrueOrFalse;
    /**
     * ARIA multiline attribute - indicates whether a text box accepts multiple lines of input/
     * Атрибут ARIA multiline - указывает, принимает ли текстовое поле несколько строк ввода
     */
    'aria-multiline'?: AriaTrueOrFalse;
    /**
     * ARIA multiselectable attribute - indicates that the user may select more than one item/
     * Атрибут ARIA multiselectable - указывает, что пользователь может выбрать более одного элемента
     */
    'aria-multiselectable'?: AriaTrueOrFalse;
    /**
     * ARIA orientation attribute - indicates whether the element's orientation is horizontal, vertical, or unknown/
     * Атрибут ARIA orientation - указывает, является ли ориентация элемента горизонтальной, вертикальной или неизвестной
     */
    'aria-orientation'?: 'horizontal' | 'vertical' | 'undefined';
    /**
     * ARIA owns attribute - identifies an element to define a visual, functional, or contextual parent/
     * Атрибут ARIA owns - идентифицирует элемент для определения визуального, функционального или контекстного родителя
     */
    'aria-owns'?: string;
    /**
     * ARIA placeholder attribute - defines a short hint to help the user with data entry/
     * Атрибут ARIA placeholder - определяет краткую подсказку для помощи пользователю при вводе данных
     */
    'aria-placeholder'?: string;
    /**
     * ARIA posinset attribute - defines an element's number or position in the current set/
     * Атрибут ARIA posinset - определяет номер или позицию элемента в текущем наборе
     */
    'aria-posinset'?: number;
    /**
     * ARIA pressed attribute - indicates the current pressed state of toggle buttons/
     * Атрибут ARIA pressed - указывает текущее состояние нажатия кнопок-переключателей
     */
    'aria-pressed'?: AriaTrueOrFalse | 'mixed';
    /**
     * ARIA readonly attribute - indicates that the element is not editable/
     * Атрибут ARIA readonly - указывает, что элемент не редактируется
     */
    'aria-readonly'?: AriaTrueOrFalse;
    /**
     * ARIA relevant attribute - indicates what notifications the user agent will trigger/
     * Атрибут ARIA relevant - указывает, какие уведомления будет вызывать пользовательский агент
     */
    'aria-relevant'?: 'additions' | 'removals' | 'text' | 'all' | string;
    /**
     * ARIA required attribute - indicates that user input is required/
     * Атрибут ARIA required - указывает, что требуется ввод пользователя
     */
    'aria-required'?: AriaTrueOrFalse;
    /**
     * ARIA roledescription attribute - defines a human-readable description for the role/
     * Атрибут ARIA roledescription - определяет читаемое человеком описание роли
     */
    'aria-roledescription'?: string;
    /**
     * ARIA rowcount attribute - defines the total number of rows/
     * Атрибут ARIA rowcount - определяет общее количество строк
     */
    'aria-rowcount'?: number;
    /**
     * ARIA rowindex attribute - defines an element's row index/
     * Атрибут ARIA rowindex - определяет индекс строки элемента
     */
    'aria-rowindex'?: number;
    /**
     * ARIA rowspan attribute - defines the number of rows spanned by a cell/
     * Атрибут ARIA rowspan - определяет количество строк, занимаемых ячейкой
     */
    'aria-rowspan'?: number;
    /**
     * ARIA selected attribute - indicates the current selected state/
     * Атрибут ARIA selected - указывает текущее состояние выбора
     */
    'aria-selected'?: AriaTrueOrFalse;
    /**
     * ARIA setsize attribute - defines the number of items in the current set/
     * Атрибут ARIA setsize - определяет количество элементов в текущем наборе
     */
    'aria-setsize'?: number;
    /**
     * ARIA sort attribute - indicates if items are sorted/
     * Атрибут ARIA sort - указывает, отсортированы ли элементы
     */
    'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other';
    /**
     * ARIA valuemax attribute - defines the maximum allowed value/
     * Атрибут ARIA valuemax - определяет максимально допустимое значение
     */
    'aria-valuemax'?: string | number;
    /**
     * ARIA valuemin attribute - defines the minimum allowed value/
     * Атрибут ARIA valuemin - определяет минимально допустимое значение
     */
    'aria-valuemin'?: string | number;
    /**
     * ARIA valuenow attribute - defines the current value/
     * Атрибут ARIA valuenow - определяет текущее значение
     */
    'aria-valuenow'?: string | number;
    /**
     * ARIA valuetext attribute - defines the human readable text alternative of aria-valuenow/
     * Атрибут ARIA valuetext - определяет читаемую человеком текстовую альтернативу aria-valuenow
     */
    'aria-valuetext'?: string;
};

/**
 * ARIA role props with labelledby and describedby/
 * ARIA пропсы роли с labelledby и describedby
 */
declare interface AriaRoleByPropsInclude extends AriaRolePropsInclude, AriaByPropsInclude {
}

/**
 * ARIA control role props with controls and expanded/
 * ARIA пропсы роли управления с controls и expanded
 */
declare interface AriaRoleControlPropsInclude extends AriaRolePropsInclude, AriaHaspopupPropsInclude {
    id?: string;
    ariaControls?: string;
    ariaHaspopup?: AriaList['aria-haspopup'];
    ariaExpanded?: string;
}

/** Basic ARIA role props/ Базовые ARIA пропсы роли */
declare interface AriaRolePropsInclude {
    role?: RoleType;
}

/** ARIA true or false type/ ARIA тип true или false */
declare type AriaTrueOrFalse = 'true' | 'false' | boolean;

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsListGroup: {};

/**
 * ListGroup
 */
export declare class ListGroup {
    protected readonly props: ListGroupProps;
    protected readonly refs: ToRefs<ListGroupProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<ListGroupComponents, ListGroupProps> | undefined;
    protected readonly slots?: ListGroupSlots | undefined;
    protected readonly emits?: ConstrEmit<ListGroupEmits> | undefined;
    readonly open: ListGroupOpen<ListGroupProps>;
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
     */
    constructor(props: ListGroupProps, refs: ToRefs<ListGroupProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<ListGroupComponents, ListGroupProps> | undefined, slots?: ListGroupSlots | undefined, emits?: ConstrEmit<ListGroupEmits> | undefined);
    /**
     * Returns the property for the transformation component.
     *
     * Возвращает свойство для компонента трансформации.
     */
    readonly transformBinds: () => ConstrBind<MotionTransformProps>;
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export declare type ListGroupClasses = {
    main: ConstrClass;
    head: string;
    list: string;
};

export declare type ListGroupComponentInclude = {
    listGroup?: object;
};

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export declare type ListGroupComponents = MotionTransformComponentInclude;

/**
 * ListGroupDesign
 */
export declare class ListGroupDesign<COMP extends ListGroupComponents, EXPOSE extends ListGroupExpose, CLASSES extends ListGroupClasses, P extends ListGroupPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, ListGroupEmits, EXPOSE, ListGroupSlots, CLASSES, P> {
    protected readonly item: ListGroup;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, ListGroupEmits, P>);
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
     * Render transformation element.
     *
     * Рендер элемента трансформации.
     */
    readonly renderTransform: () => VNode[];
    /**
     * Render title element.
     *
     * Рендер элемента заголовка.
     * @param item motion transform item/ элемент движения трансформации
     */
    readonly renderHead: (item: MotionTransformControlItem) => VNode;
    /**
     * Render list element.
     *
     * Рендер элемента списка.
     */
    readonly renderList: () => VNode;
}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export declare type ListGroupEmits = {};

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export declare interface ListGroupExpose {
    open: ComputedRef<boolean>;
}

/**
 * Class for managing the open/close state of ListGroup component.
 * Handles the visibility state and provides computed properties and methods
 * for controlling group expansion and collapse.
 *
 * Класс для управления состоянием открытия/закрытия компонента ListGroup.
 * Управляет состоянием видимости и предоставляет вычисляемые свойства и методы
 * для контроля разворачивания и сворачивания группы.
 */
declare class ListGroupOpen<T extends {
    open?: boolean;
}> {
    protected readonly props: T;
    /**
     * Internal reactive state for group open/close status.
     * This state is independent from props and can be controlled programmatically.
     *
     * Внутреннее реактивное состояние для статуса открытия/закрытия группы.
     * Это состояние независимо от пропсов и может контролироваться программно.
     */
    readonly open: Ref<boolean, boolean>;
    /**
     * Constructor initializes the ListGroupOpen with component props.
     *
     * Конструктор инициализирует ListGroupOpen с пропсами компонента.
     * @param props - ListGroup component properties / свойства компонента ListGroup
     */
    constructor(props: T);
    /**
     * Returns information about the opening status.
     *
     * Возвращает информацию о статусе открытия.
     */
    readonly is: ComputedRef<boolean>;
    /**
     * Events for opening the element.
     *
     * События для открытия элемента.
     * @param options event parameters/ параметры события
     */
    readonly onOpen: ({ open }: MotionTransformEmitOptions) => void;
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export declare interface ListGroupProps extends ListGroupPropsBasic, ListGroupPropsToken {
}

export declare interface ListGroupPropsBasic {
    divider?: boolean;
}

declare interface ListGroupPropsToken {
    open?: boolean;
    divider?: boolean;
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export declare interface ListGroupSlots {
    head?(props: ListGroupSlotsPropsInclude): any;
    list?(props: any): any;
}

export declare interface ListGroupSlotsPropsInclude extends MotionTransformControlItem {
    open: boolean;
}

/**
 * List of CSS classes for MotionTransform styling/
 * Список CSS классов для стилизации MotionTransform
 */
declare type MotionTransformClassList = {
    /** Show state class/ Класс состояния видимости */
    show: string;
    /** Open state class/ Класс состояния открытия */
    open: string;
    /** Window mode class/ Класс режима окна */
    window: string;
    /** Click feedback class/ Класс отклика на клик */
    click: string;
    /** Ignore element class/ Класс игнорирования элемента */
    none: string;
    /** Global ignore class/ Глобальный класс игнорирования */
    noneGlobal: string;
    /** Close trigger class/ Класс триггера закрытия */
    close: string;
};

/**
 * Component map for including MotionTransform/
 * Карта компонентов для подключения MotionTransform
 */
declare type MotionTransformComponentInclude = {
    /** MotionTransform component key/ Ключ компонента MotionTransform */
    motionTransform?: object;
};

/**
 * Slot props passed to head/body slots/
 * Параметры слота, передаваемые в head/body
 */
declare type MotionTransformControlItem = {
    /** Reactive open state/ Реактивное состояние открытия */
    isOpen: ComputedRef<boolean>;
    /** Visible or preparing to show/ Видим либо готовится к показу */
    isShow: ComputedRef<boolean>;
    /** Helper CSS classes/ Вспомогательные CSS‑классы */
    classes: MotionTransformClassList;
    /** Helper style variables/ Вспомогательные стилевые переменные */
    idControl: string;
    /** Helper style variables/ Вспомогательные стилевые переменные */
    idBody: string;
    /** Binding attributes for element/ Атрибуты привязки для элемента */
    binds: AriaRoleControlPropsInclude;
};

/**
 * Options for MotionTransform events/
 * Опции для событий MotionTransform
 */
declare type MotionTransformEmitOptions = {
    /** Source area type (head, body, top, script)/ Тип области источника (head, body, top, script) */
    type: 'head' | 'body' | 'top' | 'script';
    /** Open state after transform/ Состояние открытия после трансформации */
    open: boolean;
};

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
declare interface MotionTransformProps extends MotionTransformPropsBasic, MotionTransformPropsToken {
}

declare interface MotionTransformPropsBasic extends AriaRoleByPropsInclude {
    'open'?: boolean;
    'inDom'?: boolean;
    'ignore'?: HTMLElement | string;
    'ignoreSelector'?: string;
    'clickOpen'?: boolean;
    'autoClose'?: boolean;
    'animationShow'?: boolean;
    'tagBody'?: string;
    'modelOpen'?: boolean;
    'onUpdate:open'?: (value: boolean) => void;
    'onUpdate:modelOpen'?: (value: boolean) => void;
}

declare interface MotionTransformPropsToken {
    section?: boolean;
    animationHeadPosition?: 'top' | 'toBottom';
    adaptive?: 'planeAlways';
}

declare type RoleType = string | 'alert' | 'alertdialog' | 'application' | 'article' | 'banner' | 'button' | 'cell' | 'checkbox' | 'columnheader' | 'combobox' | 'command' | 'comment' | 'complementary' | 'composite' | 'contentinfo' | 'definition' | 'dialog' | 'directory' | 'document' | 'feed' | 'figure' | 'form' | 'generic' | 'grid' | 'gridcell' | 'group' | 'heading' | 'img' | 'input' | 'landmark' | 'link' | 'list' | 'listbox' | 'listitem' | 'log' | 'main' | 'mark' | 'marquee' | 'math' | 'menu' | 'menubar' | 'menuitem' | 'menuitemcheckbox' | 'menuitemradio' | 'meter' | 'navigation' | 'none' | 'note' | 'option' | 'presentation' | 'progressbar' | 'radio' | 'radiogroup' | 'range' | 'region' | 'roletype' | 'row' | 'rowgroup' | 'rowheader' | 'scrollbar' | 'search' | 'searchbox' | 'section' | 'sectionhead' | 'select' | 'separator' | 'slider' | 'spinbutton' | 'status' | 'structure' | 'suggestion' | 'switch' | 'tab' | 'table' | 'tablist' | 'tabpanel' | 'term' | 'textbox' | 'timer' | 'toolbar' | 'tooltip' | 'tree' | 'treegrid' | 'treeitem' | 'widget' | 'window';

export { }

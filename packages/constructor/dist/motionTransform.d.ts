import { ComputedRef } from 'vue';
import { ConstrBind } from '@dxtmisha/functional';
import { ConstrClass } from '@dxtmisha/functional';
import { ConstrEmit } from '@dxtmisha/functional';
import { ConstrOptions } from '@dxtmisha/functional';
import { ConstrStyles } from '@dxtmisha/functional';
import { DesignComp } from '@dxtmisha/functional';
import { DesignComponents } from '@dxtmisha/functional';
import { DesignConstructorAbstract } from '@dxtmisha/functional';
import { EventItem } from '@dxtmisha/functional';
import { NumberOrString } from '@dxtmisha/functional';
import { NumberOrString as NumberOrString_2 } from '@dxtmisha/functional-basic';
import { Ref } from 'vue';
import { RefOrNormal } from '@dxtmisha/functional';
import { RendererElement } from 'vue';
import { RendererNode } from 'vue';
import { ToRefs } from 'vue';
import { VNode } from 'vue';

/**
 * CSS variable name for MotionTransform body type/
 * Имя CSS‑переменной для типа тела MotionTransform
 */
export declare const __MOTION_TRANSFORM_TYPE_BODY_NAME = "--sys-type-body";

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

/** ARIA true or false type/ ARIA тип true или false */
declare type AriaTrueOrFalse_2 = 'true' | 'false' | boolean;

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsMotionTransform: {
    animationHeadPosition: string;
    clickOpen: boolean;
    autoClose: boolean;
    animationShow: boolean;
    tagBody: string;
};

/**
 * MotionTransform
 */
export declare class MotionTransform {
    protected readonly props: MotionTransformProps;
    protected readonly refs: ToRefs<MotionTransformProps>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<MotionTransformComponents, MotionTransformProps> | undefined;
    protected readonly slots?: MotionTransformSlots | undefined;
    protected readonly emits?: ConstrEmit<MotionTransformEmits> | undefined;
    /** Reference helper for element interactions/ Вспомогательный класс для работы с элементами */
    readonly element: MotionTransformElement;
    readonly tabIndex: TabIndexInclude<HTMLDivElement>;
    /** Size calculation manager/ Менеджер расчёта размеров */
    readonly size: MotionTransformSize;
    /** State manager/ Менеджер состояния */
    readonly state: MotionTransformState;
    /** Event manager/ Менеджер событий */
    readonly event: MotionTransformEvent;
    /** Control actions manager/ Менеджер действий управления */
    readonly go: MotionTransformGo;
    /** Window esc manager/ Менеджер esc окна */
    readonly esc: WindowEsc;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
     * @param element input element/ элемент ввода
     * @param elementContext substrate element / элемент подложка
     * @param classDesign design name/ название дизайна
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param slots object for working with slots/ объект для работы со слотами
     * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
     */
    constructor(props: MotionTransformProps, refs: ToRefs<MotionTransformProps>, element: Ref<HTMLDivElement | undefined>, elementContext: Ref<HTMLDivElement | undefined>, classDesign: string, className: string, components?: DesignComp<MotionTransformComponents, MotionTransformProps> | undefined, slots?: MotionTransformSlots | undefined, emits?: ConstrEmit<MotionTransformEmits> | undefined);
    /**
     * Computed slot data for managing slots/
     * Вычисляемые данные слотов для управления слотами
     */
    readonly slotData: ComputedRef<MotionTransformControlItem>;
    /**
     * Returns data for managing slot data.
     *
     * Возвращает данные для управления данными слотами.
     */
    getSlotData(): MotionTransformControlItem;
    /**
     * Get the ARIA role.
     *
     * Получить ARIA роль.
     */
    getRole(): RoleType;
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export declare type MotionTransformClasses = {
    main: ConstrClass;
    context: string;
    head: string;
    body: string;
    backdrop: string;
    scrim: string;
    clickNone: string;
};

/**
 * Helper class to access MotionTransform CSS classes by design.
 *
 * Вспомогательный класс для доступа к CSS-классам MotionTransform по дизайну.
 */
export declare class MotionTransformClassesInclude {
    protected readonly design: string;
    /**
     * Constructor
     * @param design design name/ название дизайна
     */
    constructor(design: string);
    /**
     * Returns list of MotionTransform classes for the specified design.
     *
     * Возвращает список классов MotionTransform для указанного дизайна.
     */
    get(): MotionTransformClassList;
    /**
     * Returns an object with MotionTransform classes under classesMotionTransform key.
     *
     * Возвращает объект с классами MotionTransform под ключом classesMotionTransform.
     */
    getObject(): {
        classesMotionTransform: MotionTransformClassList;
    };
}

/**
 * List of CSS classes for MotionTransform styling/
 * Список CSS классов для стилизации MotionTransform
 */
export declare type MotionTransformClassList = {
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
export declare type MotionTransformComponentInclude = {
    /** MotionTransform component key/ Ключ компонента MotionTransform */
    motionTransform?: object;
};

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export declare type MotionTransformComponents = {};

/**
 * Slot props passed to head/body slots/
 * Параметры слота, передаваемые в head/body
 */
export declare type MotionTransformControlItem = {
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
 * MotionTransformDesign
 */
export declare class MotionTransformDesign<COMP extends MotionTransformComponents, EXPOSE extends MotionTransformExpose, CLASSES extends MotionTransformClasses, P extends MotionTransformPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, MotionTransformEmits, EXPOSE, MotionTransformSlots, CLASSES, P> {
    protected elementContext: Ref<HTMLDivElement | undefined, HTMLDivElement | undefined>;
    protected readonly item: MotionTransform;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, MotionTransformEmits, P>);
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
     * Rendering the main element.
     *
     * Рендеринг главного элемента.
     */
    readonly renderMain: () => VNode[];
    /**
     * Rendering the title.
     *
     * Рендеринг заголовка.
     */
    readonly renderHead: () => VNode< RendererNode, RendererElement, {
        [key: string]: any;
    }>[];
    /**
     * Rendering the content.
     *
     * Рендеринг содержимого.
     */
    readonly renderBody: () => VNode< RendererNode, RendererElement, {
        [key: string]: any;
    }>[];
    /**
     * Rendering the background.
     *
     * Рендеринг задника.
     */
    readonly renderScrim: () => VNode[];
    /**
     * Props for the main element.
     *
     * Свойства для главного элемента.
     */
    protected readonly propsMain: ComputedRef<{
        ref: Ref<HTMLDivElement | undefined, HTMLDivElement | undefined>;
        key: string;
        class: ConstrClass | undefined;
        onTransitionend: (event: TransitionEvent) => void;
    }>;
    /**
     * Props for the head element.
     *
     * Свойства для элемента заголовка.
     */
    protected readonly propsHead: ComputedRef<{
        key: string;
        class: string | undefined;
        onClick: (event: Event) => void;
    }>;
    /**
     * Props for the body element.
     *
     * Свойства для элемента тела.
     */
    protected readonly propsBody: ComputedRef<{
        id: string;
        role?: RoleType_2;
        tabindex?: NumberOrString_2;
        'aria-activedescendant'?: string;
        'aria-atomic'?: AriaTrueOrFalse_2;
        'aria-autocomplete'?: "none" | "inline" | "list" | "both";
        'aria-busy'?: AriaTrueOrFalse_2;
        'aria-checked'?: AriaTrueOrFalse_2 | "mixed";
        'aria-colcount'?: number;
        'aria-colindex'?: number;
        'aria-colspan'?: number;
        'aria-controls'?: string;
        'aria-current'?: AriaTrueOrFalse_2 | "page" | "step" | "location" | "date" | "time";
        'aria-describedby'?: string;
        'aria-details'?: string;
        'aria-disabled'?: AriaTrueOrFalse_2;
        'aria-errormessage'?: string;
        'aria-expanded'?: AriaTrueOrFalse_2;
        'aria-flowto'?: string;
        'aria-grabbed'?: AriaTrueOrFalse_2;
        'aria-haspopup'?: AriaTrueOrFalse_2 | "dialog" | "menu" | "listbox" | "tree" | "grid";
        'aria-hidden'?: AriaTrueOrFalse_2;
        'aria-invalid'?: AriaTrueOrFalse_2 | "grammar" | "spelling";
        'aria-keyshortcuts'?: string;
        'aria-label'?: string;
        'aria-labelledby'?: string;
        'aria-level'?: number;
        'aria-live'?: "off" | "polite" | "assertive";
        'aria-modal'?: AriaTrueOrFalse_2;
        'aria-multiline'?: AriaTrueOrFalse_2;
        'aria-multiselectable'?: AriaTrueOrFalse_2;
        'aria-orientation'?: "horizontal" | "vertical" | "undefined";
        'aria-owns'?: string;
        'aria-placeholder'?: string;
        'aria-posinset'?: number;
        'aria-pressed'?: AriaTrueOrFalse_2 | "mixed";
        'aria-readonly'?: AriaTrueOrFalse_2;
        'aria-relevant'?: "additions" | "removals" | "text" | "all" | string;
        'aria-required'?: AriaTrueOrFalse_2;
        'aria-roledescription'?: string;
        'aria-rowcount'?: number;
        'aria-rowindex'?: number;
        'aria-rowspan'?: number;
        'aria-selected'?: AriaTrueOrFalse_2;
        'aria-setsize'?: number;
        'aria-sort'?: "none" | "ascending" | "descending" | "other";
        'aria-valuemax'?: string | number;
        'aria-valuemin'?: string | number;
        'aria-valuenow'?: string | number;
        'aria-valuetext'?: string;
        key: string;
        class: string | undefined;
    }>;
}

/**
 * Class for working with elements and classes.
 *
 * Класс для работы с элементами и классами.
 */
declare class MotionTransformElement {
    protected readonly props: MotionTransformProps;
    readonly element: Ref<HTMLDivElement | undefined>;
    protected readonly elementContext: Ref<HTMLDivElement | undefined>;
    protected readonly className: string;
    readonly id: string;
    readonly idControl: string;
    readonly idBody: string;
    readonly classes: MotionTransformClassList;
    readonly style: MotionTransformStyle;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param element window element/ элемент окна
     * @param elementContext substrate element/ элемент подложка
     * @param className class name/ название класса
     */
    constructor(props: MotionTransformProps, element: Ref<HTMLDivElement | undefined>, elementContext: Ref<HTMLDivElement | undefined>, className: string);
    /** Checks if the element exists/ Проверяет, есть ли элемент */
    readonly is: ComputedRef<boolean>;
    /**
     * Checks if the click event is prohibited.
     *
     * Проверяет, запрещено ли событие клика.
     * @param target selected element/ выбранный элемент
     */
    isClick(target: HTMLElement): boolean;
    /**
     * Checks if the click event is prohibited in the global area.
     *
     * Проверяет, запрещено ли событие клика в глобальной области.
     * @param target selected element/ выбранный элемент
     */
    isClickGlobal(target: HTMLElement): boolean;
    /**
     * Checks if the window needs to be closed on click.
     *
     * Проверяет, нужно ли закрыть окно при клике.
     * @param target selected element/ выбранный элемент
     */
    isClose(target: HTMLElement): boolean;
    /**
     * Checks if the element is outside the body.
     *
     * Проверяет, является ли элемент за предел тела.
     * @param target selected element/ выбранный элемент
     */
    isOutside(target: HTMLElement): boolean;
    /**
     * Checks if the element needs to be ignored.
     *
     * Проверяет, нужно ли игнорировать элемент.
     * @param target selected element/ выбранный элемент
     */
    isIgnore(target: HTMLElement): boolean;
    /**
     * Is the animation for slide changes enabled.
     *
     * Включено ли анимация на изменения слайда.
     */
    isAnimation(): boolean;
    /**
     * Is window mode enabled.
     *
     * Включен ли режим окна.
     */
    isWindow(): boolean;
    /**
     * Checks whether the title needs to be left.
     *
     * Проверяет, надо ли оставить заголовок.
     */
    isSection(): boolean;
    /**
     * Returns the main element.
     *
     * Возвращает главного элемента.
     */
    getElement(): HTMLDivElement | undefined;
    /**
     * Returns the context element.
     *
     * Возвращает элемент контекста.
     */
    getElementContext(): HTMLDivElement | undefined;
    /**
     * Returns the title element.
     *
     * Возвращает элемент заголовка.
     */
    getElementHead(): HTMLDivElement | undefined;
    /**
     * Returns the body element.
     *
     * Возвращает элемент тела.
     */
    getElementBody(): HTMLDivElement | undefined;
    /**
     * Returns the identifier.
     *
     * Возвращает идентификатор.
     */
    getId(): string;
    /**
     * Returns the sizes of elements.
     *
     * Возвращает размеры элементов.
     */
    getRect(): DOMRect | undefined;
    /**
     * Returns the list of available classes.
     *
     * Возвращает список доступных классов.
     * @param className class name/ название класса
     */
    static getClassesList(className: string): MotionTransformClassList;
    /**
     * Returns a list of available classes by design name.
     *
     * Возвращает список доступных классов по названию дизайна.
     * @param design design name/ названия дизайна
     */
    static getClassesListByDesign(design: string): MotionTransformClassList;
}

/**
 * Options for MotionTransform events/
 * Опции для событий MotionTransform
 */
export declare type MotionTransformEmitOptions = {
    /** Source area type (head, body, top, script)/ Тип области источника (head, body, top, script) */
    type: 'head' | 'body' | 'top' | 'script';
    /** Open state after transform/ Состояние открытия после трансформации */
    open: boolean;
};

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export declare type MotionTransformEmits = {
    'transform': [
    event: Event | undefined,
    options: MotionTransformEmitOptions
    ];
    'transformLite': [
    options: MotionTransformEmitOptions
    ];
    'update:open': [value: boolean];
    'update:modelOpen': [value: boolean];
};

/**
 * Event map for MotionTransform include/
 * Карта событий для подключения MotionTransform
 */
export declare type MotionTransformEmitsInclude = {
    /** Transform event with native event and options/ Событие трансформации с нативным событием и опциями */
    transform: MotionTransformEmits['transform'];
    /** Lightweight transform event with options only/ Облегчённое событие трансформации только с опциями */
    transformLite: MotionTransformEmits['transformLite'];
};

/**
 * Class for event management.
 *
 * Класс для управления событиями.
 */
declare class MotionTransformEvent {
    protected readonly props: MotionTransformProps;
    protected readonly element: MotionTransformElement;
    protected readonly state: MotionTransformState;
    protected readonly emits?: ConstrEmit<MotionTransformEmits> | undefined;
    protected readonly item: EventItem<HTMLElement, PointerEvent>;
    /**
     * Constructor.
     *
     * Конструктор.
     * @param props input data/ входные данные
     * @param element class object for managing an element/ объект класса для управления элементом
     * @param state class object for status management/ объект класса для управления статусом
     * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
     */
    constructor(props: MotionTransformProps, element: MotionTransformElement, state: MotionTransformState, emits?: ConstrEmit<MotionTransformEmits> | undefined);
    /**
     * Stopping event listening.
     *
     * Остановка прослушивания события.
     */
    stop(): this;
    /**
     * Click event on the title.
     *
     * Событие клика на заголовок.
     * @param event event object/ объект события
     */
    readonly onClick: (event: Event) => void;
    /**
     * End of animation event.
     *
     * Событие окончания анимации.
     * @param event event object/ объект события
     */
    readonly onTransitionend: (event: TransitionEvent) => void;
    /**
     * Event call.
     *
     * Вызов события.
     * @param event event object/ объект события
     * @param type event type/ тип события
     */
    emit(event: Event | undefined, type: MotionTransformEmitOptions['type']): void;
    protected listener: (event: PointerEvent) => void;
}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export declare interface MotionTransformExpose {
    /** Reactive state of window visibility/ Реактивное состояние видимости окна */
    open: Ref<boolean>;
    /**
     * Computed state indicating if component is shown or being prepared for display/
     * Вычисляемое состояние, указывающее отображается ли компонент или готовится к отображению
     */
    isShow: ComputedRef<boolean>;
    /** Sets open state/ Устанавливает состояние открытия */
    setOpen(open: boolean): void;
    /** Transition to opening state/ Переход в состояние открытия */
    toOpen(): void;
    /** Transition to closing state/ Переход в состояние закрытия */
    toClose(): void;
    /** Toggles open state/ Переключает состояние открытия */
    toggle(): void;
}

/**
 * Interface for MotionTransform expose inclusion/
 * Интерфейс для включения expose MotionTransform
 */
export declare interface MotionTransformExposeInclude extends MotionTransformExpose {
    motionTransformElement: Ref<ConstrBind<MotionTransformExpose> | undefined>;
}

/**
 * Class for managing control actions.
 *
 * Класс для управления действиями управления.
 */
declare class MotionTransformGo {
    protected readonly state: MotionTransformState;
    /**
     * Constructor.
     *
     * Конструктор.
     * @param state class object for status management/ объект класса для управления статусом
     */
    constructor(state: MotionTransformState);
    /**
     * Opens.
     *
     * Открывает.
     */
    readonly open: () => void;
    /**
     * Closes.
     *
     * Закрывает.
     */
    readonly close: () => void;
    /**
     * Switching.
     *
     * Переключение.
     */
    readonly toggle: () => void;
    /**
     * State changes.
     *
     * Изменение состояния.
     * @param open opening status/ статус открытия
     */
    readonly to: (open: boolean) => void;
}

/**
 * The class returns data for working with the MotionTransform component
 *
 * Класс возвращает данные для работы с компонентом MotionTransform
 */
export declare class MotionTransformInclude<Props extends MotionTransformPropsInclude = MotionTransformPropsInclude, PropsExtra extends ConstrBind<MotionTransformProps> = ConstrBind<MotionTransformProps>> {
    protected readonly props: Readonly<Props>;
    protected readonly className: string;
    protected readonly components?: DesignComponents<MotionTransformComponentInclude, Props> | undefined;
    protected readonly emits?: ConstrEmit<MotionTransformEmits> | undefined;
    protected readonly extra?: RefOrNormal<PropsExtra> | undefined;
    protected readonly index?: string | undefined;
    /**
     * Constructor
     * @param props input parameter/ входной параметр
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param emits the function is called when an event is triggered/ функция вызывается при срабатывании события
     * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
     * @param index index identifier/ идентификатор индекса
     */
    constructor(props: Readonly<Props>, className: string, components?: DesignComponents<MotionTransformComponentInclude, Props> | undefined, emits?: ConstrEmit<MotionTransformEmits> | undefined, extra?: RefOrNormal<PropsExtra> | undefined, index?: string | undefined);
    /** Reference to MotionTransform element expose/ Ссылка на expose элемента MotionTransform */
    readonly element: Ref<ConstrBind<MotionTransformExpose> | undefined, ConstrBind<MotionTransformExpose> | undefined>;
    /** Computed bindings for MotionTransform/ Вычисляемые привязки для MotionTransform */
    readonly binds: ComputedRef<PropsExtra>;
    /**
     * Expose helpers for MotionTransform state and actions/
     * Вспомогательные методы expose для состояния и действий MotionTransform
     */
    readonly expose: MotionTransformExposeInclude;
    /**
     * Emits 'transform' event upward/
     * Поднимает событие 'transform' наверх
     * @param event native event/ нативное событие
     * @param options payload/ параметры события
     */
    readonly onTransform: (event: Event | undefined, options: MotionTransformEmitOptions) => void;
    /**
     * Render the MotionTransform component with slots/
     * Рендер компонента MotionTransform со слотами
     * @param slotsChildren slots passed to the component/ слоты, передаваемые компоненту
     * @param attrs additional attributes/ дополнительные атрибуты
     */
    readonly render: (slotsChildren: MotionTransformSlots, attrs?: ConstrBind<MotionTransformProps>) => VNode[];
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export declare interface MotionTransformProps extends MotionTransformPropsBasic, MotionTransformPropsToken {
}

export declare interface MotionTransformPropsBasic extends AriaRoleByPropsInclude {
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

/**
 * Props used to include and configure MotionTransform/
 * Свойства для подключения и настройки MotionTransform
 */
export declare interface MotionTransformPropsInclude<MotionTransform extends MotionTransformProps = MotionTransformProps> {
    /** Open state/ Состояние открытия */
    open?: boolean;
    /** Click on head opens component/ Клик по заголовку открывает компонент */
    clickOpen?: boolean;
    /** Auto close on outside click/ Авто‑закрытие при клике вне */
    autoClose?: boolean;
    /** Additional attributes for MotionTransform/ Дополнительные атрибуты для MotionTransform */
    motionTransformAttrs?: ConstrBind<MotionTransform>;
}

declare interface MotionTransformPropsToken {
    section?: boolean;
    animationHeadPosition?: 'top' | 'toBottom';
    adaptive?: 'planeAlways';
}

/**
 * Class for managing size calculation.
 *
 * Класс для управления вычислением размера.
 */
declare class MotionTransformSize {
    protected element: MotionTransformElement;
    /** Top offset for transform/ Верхнее смещение для трансформации */
    top: string | null;
    /** Left offset for transform/ Левое смещение для трансформации */
    left: string | null;
    /** Head width value/ Ширина шапки */
    headWidth: string | null;
    /** Total height value/ Общая высота */
    height: string | null;
    /** Scale factor/ Коэффициент масштаба */
    scale: string | null;
    /** Context width/ Ширина контекста */
    contextWidth: string | null;
    /** Context height/ Высота контекста */
    contextHeight: string | null;
    /** Head height value/ Высота шапки */
    headHeight: string | null;
    /** Head scale factor/ Коэффициент масштаба шапки */
    headScale: string | null;
    /** Body height value/ Высота тела */
    bodyHeight: string | null;
    /**
     * Constructor
     * @param element class object for managing an element/ объект класса для управления элементом
     */
    constructor(element: MotionTransformElement);
    /**
     * Update all sizes.
     *
     * Обновить все размеры.
     */
    update(): void;
    /**
     * Restores all data to original.
     *
     * Восстанавливает все данные на изначальные.
     */
    reset(): void;
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export declare interface MotionTransformSlots {
    /** Head slot for controls/ Слот шапки для элементов управления */
    head?(props: MotionTransformControlItem): any;
    /** Body slot for content/ Слот тела для содержимого */
    body?(props: MotionTransformControlItem): any;
}

/**
 * State management class.
 *
 * Класс управления состоянием.
 */
declare class MotionTransformState {
    protected element: MotionTransformElement;
    protected tabIndex: TabIndexInclude<HTMLDivElement>;
    protected size: MotionTransformSize;
    /** Open state flag/ Флаг состояния открытия */
    readonly open: Ref<boolean, boolean>;
    /** Temporary show state for animation/ Временный флаг показа для анимации */
    readonly show: Ref<boolean, boolean>;
    /** Teleportation state flag/ Флаг состояния телепортации */
    readonly teleport: Ref<boolean, boolean>;
    /**
     * Constructor.
     *
     * Конструктор.
     * @param props input data/ входные данные
     * @param element class object for managing an element/ объект класса для управления элементом
     * @param tabIndex class object for managing tab indices/ объект класса для управления табуляцией
     * @param size class object for managing sizes/ объект класса для управления размерами
     */
    constructor(props: MotionTransformProps, element: MotionTransformElement, tabIndex: TabIndexInclude<HTMLDivElement>, size: MotionTransformSize);
    /** Computed open flag/ Вычисляемый флаг открытия */
    readonly isOpen: ComputedRef<boolean>;
    /** Checks if the element should be shown/ Проверяет, следует ли показывать элемент */
    readonly isShow: ComputedRef<boolean>;
    /**
     * Checks if teleportation should be disabled.
     *
     * Проверяет, нужно ли отключить телепортацию.
     */
    isTeleportClose(): boolean;
    /**
     * Changes in the state of the open window.
     *
     * Изменения состояния открытого окна.
     * @param open opening status/ статус открытия
     * @param animation opening with animation/ открытие с анимацией
     */
    set(open: boolean, animation?: boolean): void;
    /**
     * Status switching.
     *
     * Переключение статуса.
     */
    toggle(): void;
    /**
     * Resets the data to the initial state.
     *
     * Сбрасывает данные в первичное состояние.
     */
    reset(): this;
    /**
     * Update of the display class.
     *
     * Обновление класса показа.
     */
    protected readonly makeShow: () => void;
    /**
     * Update of the opening class.
     *
     * Обновление класса открытия.
     */
    protected readonly makeOpen: () => void;
    /**
     * Update of the teleport class.
     *
     * Обновление класса телепорта.
     */
    protected readonly makeTeleport: () => void;
    /**
     * Calculations before animation.
     *
     * Вычисления перед анимацией.
     */
    protected calculations(): void;
    /**
     * Animation control.
     *
     * Управление анимацией.
     */
    protected toTeleport(): void;
    /**
     * Updates the list of styles.
     *
     * Обновляет список стилей.
     */
    protected make(): void;
    /**
     * Updates the list of styles for the main element.
     *
     * Обновляет список стилей для главного элемента.
     */
    protected makeMain(): void;
    /**
     * Updates the list of styles for the context element.
     *
     * Обновляет список стилей для элемента контекста.
     */
    protected makeContext(): void;
}

/**
 * Style variable names for MotionTransform layout/
 * Имена стилевых переменных для раскладки MotionTransform
 */
export declare type MotionTransformStyle = {
    /** Context width CSS var/ CSS‑переменная ширины контекста */
    contextWidth: string;
    /** Context height CSS var/ CSS‑переменная высоты контекста */
    contextHeight: string;
    /** Head scale CSS var/ CSS‑переменная масштаба заголовка */
    headScale: string;
    /** Top position CSS var/ CSS‑переменная верхней позиции */
    top: string;
    /** Left position CSS var/ CSS‑переменная левой позиции */
    left: string;
    /** Head width CSS var/ CSS‑переменная ширины заголовка */
    headWidth: string;
    /** Height CSS var/ CSS‑переменная высоты */
    height: string;
    /** Scale CSS var/ CSS‑переменная масштаба */
    scale: string;
    /** Head height CSS var/ CSS‑переменная высоты заголовка */
    headHeight: string;
    /** Body height CSS var/ CSS‑переменная высоты тела */
    bodyHeight: string;
};

declare type RoleType = string | 'alert' | 'alertdialog' | 'application' | 'article' | 'banner' | 'button' | 'cell' | 'checkbox' | 'columnheader' | 'combobox' | 'command' | 'comment' | 'complementary' | 'composite' | 'contentinfo' | 'definition' | 'dialog' | 'directory' | 'document' | 'feed' | 'figure' | 'form' | 'generic' | 'grid' | 'gridcell' | 'group' | 'heading' | 'img' | 'input' | 'landmark' | 'link' | 'list' | 'listbox' | 'listitem' | 'log' | 'main' | 'mark' | 'marquee' | 'math' | 'menu' | 'menubar' | 'menuitem' | 'menuitemcheckbox' | 'menuitemradio' | 'meter' | 'navigation' | 'none' | 'note' | 'option' | 'presentation' | 'progressbar' | 'radio' | 'radiogroup' | 'range' | 'region' | 'roletype' | 'row' | 'rowgroup' | 'rowheader' | 'scrollbar' | 'search' | 'searchbox' | 'section' | 'sectionhead' | 'select' | 'separator' | 'slider' | 'spinbutton' | 'status' | 'structure' | 'suggestion' | 'switch' | 'tab' | 'table' | 'tablist' | 'tabpanel' | 'term' | 'textbox' | 'timer' | 'toolbar' | 'tooltip' | 'tree' | 'treegrid' | 'treeitem' | 'widget' | 'window';

declare type RoleType_2 = string | 'alert' | 'alertdialog' | 'application' | 'article' | 'banner' | 'button' | 'cell' | 'checkbox' | 'columnheader' | 'combobox' | 'command' | 'comment' | 'complementary' | 'composite' | 'contentinfo' | 'definition' | 'dialog' | 'directory' | 'document' | 'feed' | 'figure' | 'form' | 'generic' | 'grid' | 'gridcell' | 'group' | 'heading' | 'img' | 'input' | 'landmark' | 'link' | 'list' | 'listbox' | 'listitem' | 'log' | 'main' | 'mark' | 'marquee' | 'math' | 'menu' | 'menubar' | 'menuitem' | 'menuitemcheckbox' | 'menuitemradio' | 'meter' | 'navigation' | 'none' | 'note' | 'option' | 'presentation' | 'progressbar' | 'radio' | 'radiogroup' | 'range' | 'region' | 'roletype' | 'row' | 'rowgroup' | 'rowheader' | 'scrollbar' | 'search' | 'searchbox' | 'section' | 'sectionhead' | 'select' | 'separator' | 'slider' | 'spinbutton' | 'status' | 'structure' | 'suggestion' | 'switch' | 'tab' | 'table' | 'tablist' | 'tabpanel' | 'term' | 'textbox' | 'timer' | 'toolbar' | 'tooltip' | 'tree' | 'treegrid' | 'treeitem' | 'widget' | 'window';

/**
 * Class for managing focus and tab index of elements
 *
 * Класс для управления фокусом и табиндексом элементов
 */
declare class TabIndexInclude<E extends HTMLElement = HTMLElement> {
    protected readonly element: Ref<E | undefined> | (() => E | undefined);
    /** Previously focused element/ Ранее сфокусированный элемент */
    protected oldElement?: HTMLElement | Element | null;
    /** Event item for focus events/ Элемент события для событий фокуса */
    protected event?: EventItem<HTMLElement, any>;
    /**
     * Сonstructor
     * @param element - Reference to the element/ Ссылка на элемент
     */
    constructor(element: Ref<E | undefined> | (() => E | undefined));
    /**
     * Set focus to the element.
     *
     * Устанавливает фокус на элемент.
     */
    goTo(): this;
    /**
     * Reset focus to the previously focused element.
     *
     * Сбрасывает фокус на ранее сфокусированный элемент.
     */
    reset(): this;
    /**
     * Toggle focus based on status.
     *
     * Переключает фокус в зависимости от статуса.
     * @param status Focus status/ Статус фокуса
     */
    toggle(status: boolean): this;
    /**
     * Check if the element is defined.
     *
     * Проверяет, определен ли элемент.
     */
    protected isElement(): this is {
        element: Ref<E>;
    };
    /**
     * Check if the event is a Tab key event.
     *
     * Проверяет, является ли событие событием клавиши Tab.
     * @param event Keyboard event/ Событие клавиатуры
     */
    protected isTab(event: KeyboardEvent): boolean;
    /**
     * Check if the Shift key is pressed.
     *
     * Проверяет, нажата ли клавиша Shift.
     * @param event Keyboard event/ Событие клавиатуры
     */
    protected isShift(event: KeyboardEvent): boolean;
    /**
     * Get the element.
     *
     * Получает элемент.
     */
    protected getElement(): E | undefined;
    /**
     * Find the first focusable element.
     *
     * Находит первый фокусируемый элемент.
     */
    findFirstElement(): HTMLElement | undefined;
    /**
     * Find the last focusable element.
     *
     * Находит последний фокусируемый элемент.
     */
    findLastElement(): HTMLElement | undefined;
    /**
     * Set focus with temporary tab index modification.
     *
     * Устанавливает фокус с временным изменением табиндекса.
     */
    protected toFocus(): this;
    /**
     * Save the currently focused element.
     *
     * Сохраняет текущий сфокусированный элемент.
     */
    protected updateOldElement(): void;
    /**
     * Event listener for keyboard events.
     *
     * Слушатель событий для событий клавиатуры.
     * @param event Keyboard event/ Событие клавиатуры
     */
    protected listenEvent: (event: KeyboardEvent) => void;
    /**
     * Start the event listener.
     *
     * Запускает слушатель событий.
     */
    protected startEvent(): void;
    /**
     * Stop the event listener.
     *
     * Останавливает слушатель событий.
     */
    protected stopEvent(): void;
}

/**
 * Class for handling Escape key press to close windows.
 *
 * Класс для обработки нажатия клавиши Escape для закрытия окон.
 */
declare class WindowEsc {
    protected readonly open: Ref<boolean>;
    protected readonly on?: (() => void) | undefined;
    protected readonly active: RefOrNormal<boolean | (() => boolean)>;
    /** Event handler instance/ Экземпляр обработчика событий */
    protected event?: EventItem<HTMLElement, any>;
    /**
     * Constructor
     * @param open Reference to the open state/ Ссылка на состояние открытия
     * @param on Optional callback function when Escape is pressed/ Необязательная функция обратного вызова при нажатии Escape
     * @param active Reference to the active state/ Ссылка на состояние активности
     */
    constructor(open: Ref<boolean>, on?: (() => void) | undefined, active?: RefOrNormal<boolean | (() => boolean)>);
    /**
     * Start listening for Escape key press.
     *
     * Начать прослушивание нажатия клавиши Escape.
     */
    start(): this;
    /**
     * Stop listening for Escape key press.
     *
     * Остановить прослушивание нажатия клавиши Escape.
     */
    stop(): this;
    /**
     * Check if the pressed key is Escape.
     *
     * Проверяет, является ли нажатая клавиша Escape.
     * @param event Keyboard event/ Событие клавиатуры
     */
    protected isEsc(event: KeyboardEvent): boolean;
    /**
     * Event listener for keyboard events.
     *
     * Обработчик событий клавиатуры.
     */
    protected readonly listener: (event: KeyboardEvent) => void;
    /**
     * Create and initialize the event handler.
     *
     * Создать и инициализировать обработчик событий.
     */
    protected make(): void;
}

export { }

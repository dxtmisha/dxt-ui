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
import { ItemList } from '@dxtmisha/functional-basic';
import { ListDataBasic } from '@dxtmisha/functional';
import { ListDataFull } from '@dxtmisha/functional';
import { ListDataItem } from '@dxtmisha/functional';
import { ListDataRef } from '@dxtmisha/functional';
import { ListList } from '@dxtmisha/functional';
import { ListNames } from '@dxtmisha/functional';
import { ListRecord } from '@dxtmisha/functional';
import { ListSelectedItem } from '@dxtmisha/functional';
import { ListSelectedList } from '@dxtmisha/functional';
import { ListType } from '@dxtmisha/functional';
import { NumberOrString } from '@dxtmisha/functional';
import { NumberOrString as NumberOrString_2 } from '@dxtmisha/functional-basic';
import { NumberOrStringOrBoolean } from '@dxtmisha/functional-basic';
import { Ref } from 'vue';
import { RefOrNormal } from '@dxtmisha/functional';
import { RouteLocationRaw } from 'vue-router';
import { ToRefs } from 'vue';
import { VNode } from 'vue';

/**
 * ARIA haspopup prop/
 * ARIA проп haspopup
 */
declare interface AriaHaspopupPropsInclude {
    ariaHaspopup?: AriaList['aria-haspopup'];
}

/**
 * ARIA label prop/
 * ARIA проп label
 */
declare interface AriaLabelPropsInclude {
    ariaLabel?: string;
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
 * ARIA live prop/
 * ARIA проп live
 */
declare interface AriaLivePropsInclude {
    ariaLive?: AriaList['aria-live'];
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

declare interface BadgePropsBasic<Icon extends IconPropsBasic = IconPropsBasic> extends IconPropsInclude<Icon>, LabelNumberProps, AriaLabelPropsInclude {
    dot?: boolean;
}

declare interface BadgePropsInclude<Badge extends BadgePropsBasic = BadgePropsBasic> {
    badge?: string | number | ConstrBind<Badge>;
    badgeDot?: boolean;
}

/**
 * Props for caption functionality/ Пропсы для функциональности заголовка
 */
declare interface CaptionProps {
    /** Caption text or number/ Текст или число заголовка */
    caption?: string | number;
}

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsList: {
    axis: string;
    keyLabel: string;
    keyValue: string;
    tag: string;
};

/**
 * Props for description functionality/ Пропсы для функциональности описания
 */
declare interface DescriptionProps {
    /** Description text or number/ Текст или число описания */
    description?: string | number;
}

/**
 * Use to control the activity of the item.
 *
 * Использование для управления активности элемента.
 */
declare class EnabledInclude {
    protected readonly props: EnabledProps;
    protected readonly progress?: ProgressInclude | undefined;
    /**
     * Constructor
     * @param props input property/ входное свойство
     * @param progress object for working with progress/ объект для работы с прогрессами
     */
    constructor(props: EnabledProps, progress?: ProgressInclude | undefined);
    /**
     * Checks if the element is active
     *
     * Проверяет, активен ли элемент
     */
    readonly isEnabled: ComputedRef<boolean>;
    /**
     * checks if the read-only status is enabled/ проверяет, включён ли статус "только для чтения"
     */
    readonly isReadonly: ComputedRef<boolean>;
    /**
     * checks if the element is disabled/ проверяет, отключён ли элемент
     */
    readonly isDisabled: ComputedRef<boolean>;
    /**
     * checks if the element is disabled or the value is empty/
     * проверяет, отключён ли элемент или пустое ли значение
     */
    readonly isDisabledOrUndefined: ComputedRef<boolean | undefined>;
    /**
     * list of aria properties for the enabled state/
     * список aria свойств для состояния активности
     */
    readonly aria: ComputedRef<AriaList>;
}

/**
 * Props for enabled/disabled state functionality/ Пропсы для функциональности состояния включено/выключено
 */
declare interface EnabledProps {
    /** Read-only state/ Состояние только для чтения */
    readonly?: boolean;
    /** Disabled state/ Состояние отключено */
    disabled?: boolean;
}

/**
 * Emits for click event handling/ События для обработки кликов
 */
declare type EventClickEmits = {
    /** Full click event with MouseEvent/ Полное событие клика с MouseEvent */
    click: [
    event: MouseEvent,
    value: EventClickValue
    ];
    /** Lightweight click event/ Упрощённое событие клика */
    clickLite: [
    value: EventClickValue
    ];
};

/**
 * Exposed properties for click functionality/ Экспонируемые свойства для функциональности клика
 */
declare interface EventClickExpose {
    /** Reactive value reference/ Реактивная ссылка на значение */
    value?: Ref<EventClickValue['value']>;
    /** Reactive detail reference/ Реактивная ссылка на детали */
    detail?: Ref<EventClickValue['detail']>;
}

/**
 * Base class for working with button events
 *
 * Базовый класс для работы с событиями кнопки
 */
declare class EventClickInclude {
    protected readonly props?: EventClickProps | undefined;
    protected readonly enabled?: EnabledInclude | undefined;
    protected readonly emits?: ConstrEmit<EventClickEmits> | undefined;
    protected readonly refs?: ToRefs<EventClickProps>;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param enabled Object for working with activity status/ Объект для работы со статусом активности
     * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
     */
    constructor(props?: EventClickProps | undefined, enabled?: EnabledInclude | undefined, emits?: ConstrEmit<EventClickEmits> | undefined);
    /**
     * Exported values
     *
     * Экспортируемые значения
     */
    get expose(): EventClickExpose;
    /**
     * Event trigger function
     *
     * Функция вызова события
     * @param event event object/ объект события
     * @param options data object/ объект с данными
     */
    readonly onClick: (event: MouseEvent, options?: EventClickValue) => void;
    /**
     * Parameters for the event
     *
     * Параметры для события
     */
    protected getOptions(event: MouseEvent): EventClickValue;
    /**
     * Returns the type of the selected item
     *
     * Возвращает тип выбранного элемента
     */
    protected getTargetType(event: MouseEvent): string;
    /**
     * Changing the link through the router
     *
     * Изменение ссылки через router
     */
    protected toRouter(): boolean;
    /**
     * Triggers the click event
     *
     * Вызывает событие клика
     * @param event event object/ объект события
     * @param options data object/ объект с данными
     */
    protected emit(event: MouseEvent, options: EventClickValue): void;
}

/**
 * Props for click event handling/ Пропсы для обработки событий клика
 */
declare interface EventClickProps {
    /** Navigation target (string or route object)/ Цель навигации (строка или объект роута) */
    to?: string | RouteLocationRaw;
    /** Click event value/ Значение события клика */
    value?: EventClickValue['value'];
    /** Additional click event details/ Дополнительные детали события клика */
    detail?: EventClickValue['detail'];
}

/**
 * Value object for click events/ Объект значения для событий клика
 */
declare type EventClickValue = {
    /** Event type/ Тип события */
    type: string;
    /** Event value/ Значение события */
    value: any;
    /** Additional event details/ Дополнительные детали события */
    detail: Record<string, any> | undefined;
};

/**
 * Value object for click events/ Объект значения для событий клика
 */
declare type EventClickValue_2 = {
    /** Event type/ Тип события */
    type: string;
    /** Event value/ Значение события */
    value: any;
    /** Additional event details/ Дополнительные детали события */
    detail: Record<string, any> | undefined;
};

declare interface IconLitePropsInclude<Icon extends IconPropsBasic = IconPropsBasic> {
    icon?: IconValue<Icon>;
}

declare interface IconPropsBasic<Image extends ImagePropsBasic = ImagePropsBasic> extends SkeletonPropsInclude, AriaLabelPropsInclude {
    /** Активное состояние иконки/ Active state of the icon */
    active?: boolean;
    /** Value of the main icon/ Значение основной иконки */
    icon?: ImageValue<Image>;
    /** Value of the active icon/ Значение активной иконки */
    iconActive?: ImageValue<Image>;
    role?: RoleType;
}

declare interface IconPropsInclude<Icon extends IconPropsBasic = IconPropsBasic> extends IconLitePropsInclude<Icon> {
    selected?: boolean;
    iconTurn?: boolean;
    iconHide?: boolean;
    iconDir?: boolean;
    iconPalette?: boolean;
    iconAttrs?: ConstrBind<Icon>;
}

declare interface IconTrailingPropsInclude<Icon extends IconPropsBasic = IconPropsBasic> extends IconPropsInclude<Icon> {
    iconTrailing?: IconValue<Icon>;
    iconTrailingTurnOnly?: boolean;
    iconTrailingDirOnly?: boolean;
    iconTrailingPalette?: boolean;
}

declare type IconValue<Icon extends IconPropsBasic = IconPropsBasic> = string | ConstrBind<Icon> | null;

declare type ImagePicture = Record<string, string> | ImagePictureList;

declare type ImagePictureItem = Record<keyof HTMLSourceElement & 'key', any>;

declare type ImagePictureList = ImagePictureItem[];

declare interface ImagePropsBasic {
    /**
     * Accepts icon name, image URL, File object or PDF link/
     * Принимает название иконки, ссылку на изображение, объект File или ссылку на PDF файл
     */
    value?: string | any;
    /** Image URL/ URL изображения */
    url?: string;
    /**
     * Adaptive group (e.g. for different resolutions)/
     * Группа адаптивности (например, для разных разрешений)
     */
    adaptiveGroup?: string;
    /** Always use adaptivity/ Всегда использовать адаптивность */
    adaptiveAlways?: boolean;
    /** Image object width/ Ширина объекта изображения */
    objectWidth?: string | number;
    /** Image object height/ Высота объекта изображения */
    objectHeight?: string | number;
    /**
     * Image coordinates (e.g. for cropping or positioning)/
     * Координаты изображения (например, для обрезки или позиционирования)
     */
    coordinator?: number[] | any;
    /** X position/ Позиция по оси X */
    x?: string | number;
    /** Y position/ Позиция по оси Y */
    y?: string | number;
    /**
     * Use <img> tag instead of background image/
     * Использовать тег <img> вместо фонового изображения
     */
    tagImg?: boolean;
    /**
     * Image source set for different resolutions/
     * Набор источников изображения для разных разрешений
     */
    srcset?: string | Record<string, string>;
    /**
     * Picture sources for different resolutions using <picture> tag/
     * Источники для разных разрешений с использованием тега <picture>
     */
    picture?: ImagePicture;
    /** Alt text/ Текст alt */
    alt?: string;
    /** Lazy loading/ Ленивя загрузка */
    lazy?: boolean;
    /** Preload offset/ Смещение для предзагрузки */
    preloadOffset?: string;
    /** Image fetch priority (low, high, auto)/ Приоритет загрузки изображения (low, high, auto) */
    fetchPriority?: HTMLImageElement['fetchPriority'];
}

declare type ImageValue<Image extends ImagePropsBasic = ImagePropsBasic> = string | ConstrBind<Image> | null;

/**
 * Properties for highlighted label components/ Свойства для компонентов меток с подсветкой
 */
declare interface LabelHighlightProps extends LabelProps {
    /** Text to highlight/ Текст для подсветки */
    highlight?: string;
    /** Starting length for highlight/ Начальная длина для подсветки */
    highlightLengthStart?: number;
    /** Current value/ Текущее значение */
    value?: any;
}

/**
 * Properties for numeric label components/ Свойства для числовых компонентов меток
 */
declare interface LabelNumberProps extends LabelProps {
    /** Maximum value for the label/ Максимальное значение для метки */
    labelMax?: NumberOrString;
    /** Enable number formatting/ Включить форматирование чисел */
    formatting?: boolean;
}

/**
 * Properties for label components/ Свойства для компонентов меток
 */
declare interface LabelProps {
    /** Label text or number/ Текст или число метки */
    label?: NumberOrString;
    /** Label element ID/ Идентификатор элемента метки */
    labelId?: string;
}

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
     */
    constructor(props: ListProps, refs: ToRefs<ListProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<ListComponents, ListProps> | undefined, slots?: ListSlots | undefined, emits?: ConstrEmit<ListEmits> | undefined);
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
        index?: any;
        href?: string;
        tag: "button" | "a" | "span" | "div" | string;
        filterMode?: boolean;
        divider: boolean;
        tabindex?: number | string;
        type?: string;
        parent?: string;
        search?: string;
        isMenu?: boolean;
        isItemMenu?: boolean;
        highlight?: string;
        highlightLengthStart?: number;
        value?: any;
        label?: NumberOrString_2;
        labelId?: string;
        description?: string | number;
        prefix?: string | number;
        caption?: string | number;
        suffix?: string | number;
        iconTrailing?: IconValue< IconPropsBasic<ImagePropsBasic>> | undefined;
        iconTrailingTurnOnly?: boolean;
        iconTrailingDirOnly?: boolean;
        iconTrailingPalette?: boolean;
        selected?: boolean;
        iconTurn?: boolean;
        iconHide?: boolean;
        iconDir?: boolean;
        iconPalette?: boolean;
        iconAttrs?: ConstrBind< IconPropsBasic<ImagePropsBasic>> | undefined;
        icon?: IconValue< IconPropsBasic<ImagePropsBasic>> | undefined;
        badge?: string | number | ConstrBind< BadgePropsBasic<IconPropsBasic<ImagePropsBasic>>> | undefined;
        badgeDot?: boolean;
        loading?: boolean | ConstrBind< ProgressPropsBasic> | undefined;
        isSkeleton?: boolean;
        readonly?: boolean;
        disabled?: boolean;
        to?: string | RouteLocationRaw;
        detail?: EventClickValue_2["detail"];
        role?: RoleType_2;
        key?: string;
        class?: ConstrClass;
        style?: ConstrStyles;
        onClick: (event: MouseEvent, options?: EventClickValue_2) => void;
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

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export declare type ListClasses = {
    main: ConstrClass;
    space: string;
    line: string;
    subtitle: string;
    html: string;
    management: string;
    group: string;
    menu: string;
    menuGroup: string;
};

export declare type ListComponentInclude = {
    list?: object;
};

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export declare type ListComponents = ListItemComponentInclude & ListGroupComponentInclude & ListMenuComponentInclude;

/**
 * Class for managing keyboard navigation and event handling in list components.
 * Provides keyboard shortcuts, search functionality, and navigation controls.
 *
 * Класс для управления навигацией с клавиатуры и обработкой событий в компонентах списка.
 * Предоставляет клавиатурные сокращения, функциональность поиска и элементы управления навигацией.
 */
declare class ListControl {
    protected readonly props: ListProps;
    protected readonly search: ListSearch;
    protected readonly data: ListDataRef;
    protected readonly go: ListGo;
    protected event?: EventItem<HTMLElement, any>;
    /**
     * Creates an instance of ListControl for managing keyboard navigation and events.
     *
     * Создает экземпляр ListControl для управления навигацией с клавиатуры и событиями.
     * @param props input data/ входные данные
     * @param search search functionality controller / контроллер функциональности поиска
     * @param data list data manager / менеджер данных списка
     * @param go navigation controller / контроллер навигации
     */
    constructor(props: ListProps, search: ListSearch, data: ListDataRef, go: ListGo);
    /**
     * Checks if the menu is active.
     *
     * Проверяет, активное ли меню.
     */
    readonly isActive: ComputedRef<boolean>;
    /**
     * Checks if the event target is not an input.
     *
     * Проверяет, не является ли цель события input.
     * @param target selected element/ выбранный элемент
     */
    protected isNotInput(target: HTMLElement): boolean;
    /**
     * Gets the currently active input element with menu control.
     *
     * Получает текущий активный элемент input с управлением меню.
     * @returns active input element or undefined / активный элемент input или undefined
     */
    protected getActiveElement(): HTMLInputElement | undefined;
    /**
     * Starts the event.
     *
     * Запускает событие.
     */
    protected start(): void;
    /**
     * Stops the event.
     *
     * Останавливает событие.
     */
    protected stop(): void;
    /**
     * Updates the search value based on keyboard input.
     *
     * Обновляет значение поиска на основе ввода с клавиатуры.
     * @param event keyboard event / событие клавиатуры
     */
    protected updateSearch(event: KeyboardEvent): void;
    /**
     * Method for tracking keys when a window is open.
     *
     * Метод для отслеживания нажатий при открытом окне.
     * @param event event object/ объект события
     */
    protected readonly on: (event: KeyboardEvent) => void;
}

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
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, ListEmits, P>);
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

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export declare type ListEmits = EventClickEmits & {
    close: [];
};

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export declare interface ListExpose {
    isSelected: ComputedRef<boolean>;
    selectedList: ComputedRef<ListList>;
    selectedNames: ComputedRef<ListNames>;
    selectedValues: ComputedRef<any[]>;
}

/**
 * Class for working with element focus.
 *
 * Класс для работы с фокусировкой элемента.
 */
declare class ListFocus {
    protected readonly props: ListProps;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly listId: number;
    readonly item: Ref<ListDataItem | undefined, ListDataItem | undefined>;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param element input element/ элемент ввода
     * @param listId unique list identifier/ уникальный идентификатор списка
     */
    constructor(props: ListProps, element: Ref<HTMLElement | undefined>, listId: number);
    /** Returns the value of the selected element/ Возвращает значение выбранного элемента */
    readonly focus: ComputedRef< NumberOrStringOrBoolean | undefined>;
    /**
     * Returns the selected element.
     *
     * Возвращает выбранный элемент.
     * @param index element index/ индекс элемента
     */
    isElement(index?: string): boolean;
    /**
     * Checks if the element is an item.
     *
     * Проверяет, является ли элемент элементом.
     */
    isItem(): boolean;
    /**
     * Checks if the element is a group.
     *
     * Проверяет, является ли элемент группой.
     */
    isGroup(): boolean;
    /**
     * Checks if the element is a menu.
     *
     * Проверяет, является ли элемент меню.
     */
    isMenu(): boolean;
    /**
     * Checks if the group or menu is open.
     *
     * Проверяет, открыта ли группа или меню.
     */
    isOpen(): boolean;
    /**
     * Returns the selected element.
     *
     * Возвращает выбранный элемент.
     */
    get(): ListDataItem | undefined;
    /**
     * Returns the selector for the desired element by its index.
     *
     * Возвращает селектор нужного элемента по его индексу.
     * @param index element index/ индекс элемента
     */
    getSelector(index?: string): string;
    /**
     * Returns the HTML element of the selected item.
     *
     * Возвращает HTML элемент выбранного элемента.
     * @param index element index/ индекс элемента
     */
    getElement(index?: string): HTMLDivElement | undefined;
    /**
     * Changes the selected element.
     *
     * Изменяет выбранный элемент.
     * @param item new value/ новое значение
     */
    set(item: ListDataItem | undefined): this;
    /**
     * Resets the selected element.
     *
     * Сбрасывает выбранный элемент.
     */
    reset(): this;
    /**
     * Performs a click on the selected element.
     *
     * Выполняет клик на выбранном элементе.
     */
    click(): void;
    /**
     * Moves to the value in focus.
     *
     * Перемещает к значению в фокусе.
     */
    toElementFocus(): boolean;
    /**
     * Scrolls to the desired element by its index.
     *
     * Скроллирует к нужному элементу по его индексу.
     * @param index element index/ индекс элемента
     */
    toElementSelected(index: string): this;
    /**
     * Scrolls to the desired element.
     *
     * Скроллирует к нужному элементу.
     * @param element the element to scroll to/ элемент, до которого надо проскроллить
     */
    protected toElement(element?: HTMLElement): void;
}

/**
 * Class for working with element focus.
 *
 * Класс для работы с фокусировкой элемента.
 */
declare class ListGo {
    protected readonly props: ListProps;
    protected readonly focus: ListFocus;
    protected readonly data: ListDataRef;
    protected readonly emits?: ConstrEmit<ListEmits> | undefined;
    protected index: number;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param focus object of the class for working with focus/ объект класса для работы с фокусировкой
     * @param data object of the class for working with the list/ объект класса для работы со списком
     * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
     */
    constructor(props: ListProps, focus: ListFocus, data: ListDataRef, emits?: ConstrEmit<ListEmits> | undefined);
    /**
     * Changing the index in focus by the number in the array.
     *
     * Изменение значения в фокусе по номеру в массиве.
     * @param index number in the array/ номер в массиве
     */
    set(index: number): boolean;
    /**
     * Changes the selected element.
     *
     * Изменяет выбранный элемент.
     * @param value new value/ новое значение
     */
    preparation(value: any): void;
    /**
     * Scrolls the element to the selected element
     *
     * Прокрутить элемент до выбранного элемента
     */
    preparationBySelected(): void;
    /**
     * Moves the selected value back.
     *
     * Перемещает выбранное значение назад.
     */
    previous(): void;
    /**
     * Moves the selected value forward.
     *
     * Перемещает выбранное значение вперед.
     */
    next(): void;
    /**
     * Reset all records to the initial state.
     *
     * Сброс всех записей до начального состояния.
     */
    reset(): void;
    /**
     * Opens the window if the element is in it.
     *
     * Открывает окно, если элемент в нем.
     */
    open(): void;
    /**
     * Closes the window if the element is in it.
     *
     * Закрывает окно, если элемент в нем.
     */
    close(): void;
    /**
     * Stops the event.
     *
     * Останавливает событие.
     */
    stop(): void;
    /**
     * Checks if the next element is in the same window.
     *
     * Проверяет, находится ли следующий элемент в том же окне.
     */
    protected isFirstByParent(): boolean;
    /**
     * Checks if the next element is in the same window.
     *
     * Проверяет, находится ли следующий элемент в том же окне.
     */
    protected isLastByParent(): boolean;
    /**
     * Checks if the element is in a window.
     *
     * Проверяет, находится ли элемент в окне.
     */
    protected getMainItem(): HTMLDivElement | undefined;
    /**
     * Changing the index in focus by the number in the array.
     *
     * Изменение значения в фокусе по номеру в массиве.
     * @param index number in the array/ номер в массиве
     */
    protected setByIndex(index: number): void;
    /**
     * Moves the selected value forward by type.
     *
     * Перемещает выбранное значение вперед по типу.
     */
    protected nextByType(): void;
}

declare type ListGroupComponentInclude = {
    listGroup?: object;
};

declare interface ListGroupSlotsPropsInclude extends MotionTransformControlItem {
    open: boolean;
}

declare type ListItemComponentInclude = {
    listItem?: object;
};

declare interface ListItemPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Badge extends BadgePropsBasic = BadgePropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> extends LabelHighlightProps, DescriptionProps, PrefixProps, CaptionProps, SuffixProps, IconTrailingPropsInclude<Icon>, BadgePropsInclude<Badge>, ProgressPropsInclude<Progress>, SkeletonPropsInclude, EnabledProps, EventClickProps, AriaRolePropsInclude {
    index?: any;
    href?: string;
    tag?: 'button' | 'a' | 'span' | 'div' | string;
    filterMode?: boolean;
    divider?: boolean;
    tabindex?: number | string;
    type?: string;
    parent?: string;
    listId?: number;
    search?: string;
    isMenu?: boolean;
    isItemMenu?: boolean;
}

declare type ListMenuComponentInclude = {
    listMenu?: object;
};

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export declare interface ListProps extends ListPropsBasic, ListPropsToken {
}

export declare interface ListPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, ListItem extends ListItemPropsBasic = ListItemPropsBasic> {
    focus?: ListSelectedItem;
    selected?: ListSelectedList;
    disabled?: boolean;
    lite?: boolean;
    list?: ListRecord<ListItem>;
    liteThreshold?: number;
    highlight?: string;
    highlightLengthStart?: number;
    filterMode?: boolean;
    keyLabel?: string;
    keyValue?: string;
    max?: string | number;
    tag?: 'div' | 'button' | 'a' | 'span' | string;
    axis?: 'x' | 'y';
    divider?: boolean;
    itemAttrs?: ConstrBind<ListItem>;
    itemManagementAttrs?: ConstrBind<ListItem>;
    itemGroupAttrs?: ConstrBind<ListItem>;
    itemMenuAttrs?: ConstrBind<ListItem>;
    iconArrowDown?: IconValue<Icon>;
    iconArrowRight?: IconValue<Icon>;
    roleItem?: RoleType;
    control?: boolean;
}

declare interface ListPropsToken {
    axis?: 'x' | 'y';
    divider?: boolean;
}

/**
 * Class for working with search.
 *
 * Класс для работы с поиском.
 */
declare class ListSearch {
    protected readonly props: ListProps;
    readonly item: Ref<string | undefined, string | undefined>;
    protected timeout?: any;
    /**
     * Constructor
     * @param props input data/ входные данные
     */
    constructor(props: ListProps);
    /** Current search string/ Текущая строка поиска */
    readonly highlight: ComputedRef<string | undefined>;
    /**
     * Adds a new character to the search.
     *
     * Добавляет новый символ к поиску.
     * @param char new character/ новый символ
     */
    add(char: string): void;
    /**
     * Sets the search string.
     *
     * Устанавливает строку поиска.
     * @param value new value/ новое значение
     */
    set(value?: string): void;
    /**
     * Resets the search string.
     *
     * Сбрасывает строку поиска.
     */
    reset(): this;
    /**
     * Returns a processed value.
     *
     * Возвращает обработанное значение.
     * @param value source value/ исходное значение
     */
    protected getValue(value?: string): string | undefined;
    /**
     * Appends a character to the search string.
     *
     * Добавляет символ к строке поиска.
     * @param char new character/ новый символ
     */
    protected addChar(char: string): this;
    /**
     * Schedules reset to the initial state after a delay.
     *
     * Планирует сброс к исходному состоянию после задержки.
     */
    protected makeReset(): this;
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export declare type ListSlots = Record<string, (props: any) => any>;

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
 * Props for prefix functionality/ Пропсы для функциональности префикса
 */
declare interface PrefixProps {
    /** Prefix text or number/ Текст или число префикса */
    prefix?: string | number;
}

declare type ProgressComponentInclude = {
    progress?: object;
};

/**
 * The class returns data for working with the Progress component
 *
 * Класс возвращает данные для работы с компонентом Progress
 */
declare class ProgressInclude {
    protected readonly props: ProgressPropsInclude;
    protected readonly className: string;
    protected readonly components?: DesignComponents<ProgressComponentInclude, ProgressPropsInclude> | undefined;
    protected readonly extra?: RefOrNormal<ConstrBind<ProgressProps>> | undefined;
    /**
     * Constructor
     * @param props input parameter/ входной параметр
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
     */
    constructor(props: ProgressPropsInclude, className: string, components?: DesignComponents<ProgressComponentInclude, ProgressPropsInclude> | undefined, extra?: RefOrNormal<ConstrBind<ProgressProps>> | undefined);
    /**
     * Checks if data is available for the Progress component/
     * Проверяет, есть ли данные для компонента Progress
     */
    readonly is: ComputedRef<boolean>;
    /**
     * list of aria properties for the progress component/
     * список aria свойств для компонента Progress
     */
    readonly aria: ComputedRef<AriaList>;
    /**
     * list of properties for the progress component/ список свойств для компонента Progress
     */
    readonly binds: ComputedRef<ConstrBind< ItemList>>;
    /**
     * Рендер компонента Progress
     */
    readonly render: () => VNode[];
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
declare interface ProgressProps extends ProgressPropsBasic, ProgressPropsToken {
}

declare interface ProgressPropsBasic extends AriaLabelPropsInclude, AriaLivePropsInclude {
    visible?: boolean;
    value?: number | string;
    max?: number | string;
    linear?: boolean;
    circular?: boolean;
    point?: boolean;
    delay?: number | string;
    delayHide?: number | string;
}

declare interface ProgressPropsInclude<Progress extends ProgressPropsBasic = ProgressPropsBasic> {
    loading?: boolean | ConstrBind<Progress>;
}

declare interface ProgressPropsToken {
    point?: boolean;
    linear?: boolean;
    circular?: boolean;
    indeterminate?: 'type1' | 'type2' | 'type3';
    position?: 'top' | 'bottom' | 'static';
    dense?: boolean;
    inverse?: boolean;
}

declare type RoleType = string | 'alert' | 'alertdialog' | 'application' | 'article' | 'banner' | 'button' | 'cell' | 'checkbox' | 'columnheader' | 'combobox' | 'command' | 'comment' | 'complementary' | 'composite' | 'contentinfo' | 'definition' | 'dialog' | 'directory' | 'document' | 'feed' | 'figure' | 'form' | 'generic' | 'grid' | 'gridcell' | 'group' | 'heading' | 'img' | 'input' | 'landmark' | 'link' | 'list' | 'listbox' | 'listitem' | 'log' | 'main' | 'mark' | 'marquee' | 'math' | 'menu' | 'menubar' | 'menuitem' | 'menuitemcheckbox' | 'menuitemradio' | 'meter' | 'navigation' | 'none' | 'note' | 'option' | 'presentation' | 'progressbar' | 'radio' | 'radiogroup' | 'range' | 'region' | 'roletype' | 'row' | 'rowgroup' | 'rowheader' | 'scrollbar' | 'search' | 'searchbox' | 'section' | 'sectionhead' | 'select' | 'separator' | 'slider' | 'spinbutton' | 'status' | 'structure' | 'suggestion' | 'switch' | 'tab' | 'table' | 'tablist' | 'tabpanel' | 'term' | 'textbox' | 'timer' | 'toolbar' | 'tooltip' | 'tree' | 'treegrid' | 'treeitem' | 'widget' | 'window';

declare type RoleType_2 = string | 'alert' | 'alertdialog' | 'application' | 'article' | 'banner' | 'button' | 'cell' | 'checkbox' | 'columnheader' | 'combobox' | 'command' | 'comment' | 'complementary' | 'composite' | 'contentinfo' | 'definition' | 'dialog' | 'directory' | 'document' | 'feed' | 'figure' | 'form' | 'generic' | 'grid' | 'gridcell' | 'group' | 'heading' | 'img' | 'input' | 'landmark' | 'link' | 'list' | 'listbox' | 'listitem' | 'log' | 'main' | 'mark' | 'marquee' | 'math' | 'menu' | 'menubar' | 'menuitem' | 'menuitemcheckbox' | 'menuitemradio' | 'meter' | 'navigation' | 'none' | 'note' | 'option' | 'presentation' | 'progressbar' | 'radio' | 'radiogroup' | 'range' | 'region' | 'roletype' | 'row' | 'rowgroup' | 'rowheader' | 'scrollbar' | 'search' | 'searchbox' | 'section' | 'sectionhead' | 'select' | 'separator' | 'slider' | 'spinbutton' | 'status' | 'structure' | 'suggestion' | 'switch' | 'tab' | 'table' | 'tablist' | 'tabpanel' | 'term' | 'textbox' | 'timer' | 'toolbar' | 'tooltip' | 'tree' | 'treegrid' | 'treeitem' | 'widget' | 'window';

declare interface SkeletonPropsInclude {
    isSkeleton?: boolean;
}

/**
 * Props for suffix functionality/ Пропсы для функциональности суффикса
 */
declare interface SuffixProps {
    /** Suffix text or number/ Текст или число суффикса */
    suffix?: string | number;
}

/**
 * Helper class to access window CSS classes by design.
 *
 * Вспомогательный класс для доступа к CSS-классам окна по дизайну.
 */
declare class WindowClassesInclude {
    protected readonly design: string;
    /**
     * Constructor
     * @param design design name/ название дизайна
     */
    constructor(design: string);
    /**
     * Returns list of window classes for the specified design.
     *
     * Возвращает список классов окна для указанного дизайна.
     */
    get(): WindowClassesList;
    /**
     * Returns an object with window classes under classesWindow key.
     *
     * Возвращает объект с классами окна под ключом classesWindow.
     */
    getObject(): {
        classesWindow: WindowClassesList;
    };
}

/**
 * List of CSS classes for window styling/
 * Список CSS классов для стилизации окна
 */
declare type WindowClassesList = {
    /** Main block class/ Основной класс блока */
    block: string;
    /** Block children class/ Класс дочерних элементов блока */
    blockChildren: string;
    /** Block other windows class/ Класс блокировки других окон */
    blockOther: string;
    /** Close button class/ Класс кнопки закрытия */
    close: string;
    /** Static positioning class/ Класс статического позиционирования */
    static: string;
    /** Control element class/ Класс элемента управления */
    control: string;
    /** Control ID class/ Класс ID управления */
    controlId: string;
    /** Static control class/ Класс статического управления */
    controlStatic: string;
    /** Open-only control class/ Класс управления только для открытого состояния */
    controlOpenOnly: string;
    /** Active control class/ Класс активного управления */
    controlActive: string;
    /** Persistent window class/ Класс постоянного окна */
    persistent: string;
};

/**
 * Interface for window classes inclusion/
 * Интерфейс для включения классов окна
 */
declare type WindowControlBasic = {
    /** Window CSS classes list/ Список CSS классов окна */
    classesWindow: WindowClassesList;
};

/**
 * Control item data for window management/
 * Данные элемента управления для управления окном
 */
declare type WindowControlItem = WindowControlBasic & {
    /** CSS class string/ Строка CSS класса */
    class: string;
    /** Reactive open state/ Реактивное состояние открытия */
    open: Ref<boolean>;
    /** Click event handler/ Обработчик события клика */
    onclick: WindowEventClick;
    /** Context menu event handler/ Обработчик события контекстного меню */
    oncontextmenu: WindowEventClick;
    /** Binding properties/ Свойства привязки */
    binds: AriaList & {
        /** Binding class/ Класс привязки */
        class: string;
        /** Click event handler for binding/ Обработчик события клика для привязки */
        onclick: WindowEventClick;
        /** Context menu event handler for binding/ Обработчик события контекстного меню для привязки */
        oncontextmenu: WindowEventClick;
    };
};

/**
 * Window event click handler/
 * Обработчик события клика окна
 */
declare type WindowEventClick = (event: MouseEvent & TouchEvent) => Promise<void>;

export { }

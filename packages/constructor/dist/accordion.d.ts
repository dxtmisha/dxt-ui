import { ComputedRef } from 'vue';
import { ConstrBind } from '@dxtmisha/functional';
import { ConstrClass } from '@dxtmisha/functional';
import { ConstrEmit } from '@dxtmisha/functional';
import { ConstrOptions } from '@dxtmisha/functional';
import { ConstrStyles } from '@dxtmisha/functional';
import { DesignComp } from '@dxtmisha/functional';
import { DesignComponents } from '@dxtmisha/functional';
import { DesignConstructorAbstract } from '@dxtmisha/functional';
import { ItemList } from '@dxtmisha/functional-basic';
import { NumberOrString } from '@dxtmisha/functional';
import { Ref } from 'vue';
import { RefOrNormal } from '@dxtmisha/functional';
import { RefType } from '@dxtmisha/functional';
import { RouteLocationRaw } from 'vue-router';
import { ToRefs } from 'vue';
import { VNode } from 'vue';

/**
 * Accordion
 */
export declare class Accordion {
    protected readonly props: AccordionProps;
    protected readonly refs: ToRefs<AccordionProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<AccordionComponents, AccordionProps> | undefined;
    protected readonly slots?: AccordionSlots | undefined;
    protected readonly emits?: ConstrEmit<AccordionEmits> | undefined;
    readonly motionTransform: MotionTransformInclude;
    readonly event: EventClickInclude;
    readonly open: Ref<boolean, boolean>;
    readonly model: ModelInclude<boolean>;
    readonly elementHead: Ref<CellExpose | undefined, CellExpose | undefined>;
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
    constructor(props: AccordionProps, refs: ToRefs<AccordionProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<AccordionComponents, AccordionProps> | undefined, slots?: AccordionSlots | undefined, emits?: ConstrEmit<AccordionEmits> | undefined);
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export declare type AccordionClasses = {
    main: ConstrClass;
    head: string;
    body: string;
};

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export declare type AccordionComponents = CellComponentInclude & MotionTransformComponentInclude;

/**
 * AccordionDesign
 */
export declare class AccordionDesign<COMP extends AccordionComponents, EXPOSE extends AccordionExpose, CLASSES extends AccordionClasses, P extends AccordionProps> extends DesignConstructorAbstract<HTMLDivElement, COMP, AccordionEmits, EXPOSE, AccordionSlots, CLASSES, P> {
    protected readonly item: Accordion;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, AccordionEmits, P>);
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
     * Generates data for the header.
     *
     * Генерирует данные для заголовка.
     * @param open open status/ статус открытия
     */
    protected readonly renderHead: ({ isOpen, binds }: MotionTransformControlItem) => VNode | undefined;
    /**
     * Generates data for the body.
     *
     * Генерирует данные для тела.
     */
    protected readonly renderBody: (props: any) => VNode;
}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export declare type AccordionEmits = EventClickEmits & MotionTransformEmitsInclude & {
    'update:open': [value: boolean];
    'update:modelOpen': [value: boolean];
};

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export declare interface AccordionExpose extends MotionTransformExposeInclude {
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export declare interface AccordionProps extends AccordionPropsBasic, AccordionPropsToken {
}

export declare interface AccordionPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Cell extends CellPropsBasic = CellPropsBasic, MotionTransform extends MotionTransformPropsBasic = MotionTransformPropsBasic> extends LabelProps, DescriptionProps, IconLitePropsInclude<Icon>, MotionTransformPropsInclude<MotionTransform> {
    'cellAttrs'?: ConstrBind<Cell>;
    'iconArrowDown'?: IconValue<Icon>;
    'modelOpen'?: boolean;
    'onUpdate:open'?: (value: boolean) => void;
    'onUpdate:modelOpen'?: (value: boolean) => void;
}

declare interface AccordionPropsToken {
    divider?: boolean;
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export declare interface AccordionSlots extends CellSlotsInclude {
    default?(props: MotionTransformControlItem): any;
}

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
 * Props for caption functionality/ Пропсы для функциональности заголовка
 */
declare interface CaptionProps {
    /** Caption text or number/ Текст или число заголовка */
    caption?: string | number;
}

/**
 * Slots for caption functionality/ Слоты для функциональности заголовка
 */
declare interface CaptionSlots {
    /** Caption slot/ Слот заголовка */
    caption?(props: any): any;
}

/**
 * CSS class names for Cell sub-elements/
 * Имена CSS классов для под-элементов Cell
 */
declare type CellClassesSub = {
    /** Label element class/ Класс элемента метки */
    label: string;
    /** Description element class/ Класс элемента описания */
    description: string;
    /** Caption element class/ Класс элемента подписи */
    caption: string;
    /** Trailing element class/ Класс завершающего элемента */
    trailing: string;
};

/**
 * Component map for including Cell/
 * Карта компонентов для подключения Cell
 */
declare type CellComponentInclude = {
    /** Cell component key/ Ключ компонента Cell */
    cell: object;
};

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
declare interface CellExpose extends LabelExpose, DescriptionExpose, EventClickExpose {
}

declare interface CellPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> extends LabelProps, DescriptionProps, CaptionProps, EnabledProps, IconTrailingPropsInclude<Icon>, ProgressPropsInclude<Progress>, SkeletonPropsInclude, EventClickProps, AriaRolePropsInclude {
    tag?: string;
    divider?: boolean;
    dynamic?: boolean;
}

/**
 * Type describing available slots/
 * Тип, описывающий доступные слоты
 */
declare interface CellSlotsInclude extends LabelAlternativeSlots, DescriptionSlots, CaptionSlots {
    trailing?(props: CellClassesSub): any;
    body?(props: CellClassesSub): any;
}

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsAccordion: {
    divider: boolean;
    clickOpen: boolean;
    autoClose: boolean;
};

/**
 * Expose for description functionality/ Экспоз для функциональности описания
 */
declare interface DescriptionExpose {
    /** Description identifier/ Идентификатор описания */
    descriptionId: string;
}

/**
 * Props for description functionality/ Пропсы для функциональности описания
 */
declare interface DescriptionProps {
    /** Description text or number/ Текст или число описания */
    description?: string | number;
}

/**
 * Slots for description functionality/ Слоты для функциональности описания
 */
declare interface DescriptionSlots {
    /** Description slot/ Слот описания */
    description?(props: any): any;
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
 * Alternative slot definitions for label components/ Альтернативные определения слотов для компонентов меток
 */
declare interface LabelAlternativeSlots {
    /** Label slot content/ Содержимое слота метки */
    label?(props: any): any;
}

/**
 * Exposed properties for label components/ Экспонируемые свойства для компонентов меток
 */
declare interface LabelExpose {
    /** Label element ID/ Идентификатор элемента метки */
    labelId: string;
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
 * Class for managing model synchronization and event emission.
 * Handles two-way data binding with reactive values and emits update events.
 *
 * Класс для управления синхронизацией модели и испусканием событий.
 * Обрабатывает двустороннюю привязку данных с реактивными значениями и испускает события обновления.
 */
declare class ModelInclude<Value = string> {
    protected readonly index: string;
    protected readonly emits?: any | undefined;
    protected readonly syncValue?: RefType<Value> | undefined;
    /**
     * Constructor
     * @param index The index key for the model property/ Ключ индекса для свойства модели
     * @param emits Function to emit events/ Функция для испускания событий
     * @param syncValue Reactive value to synchronize/ Реактивное значение для синхронизации
     */
    constructor(index: string, emits?: any | undefined, syncValue?: RefType<Value> | undefined);
    /**
     * Type guard to check if syncValue is a mutable Ref.
     * Returns true if syncValue is a reference and not readonly.
     *
     * Проверка типа, является ли syncValue изменяемым Ref.
     * Возвращает true, если syncValue является ссылкой и не readonly.
     * @returns Type predicate indicating syncValue is a mutable Ref/ Предикат типа, указывающий что syncValue - изменяемый Ref
     */
    isValue(): this is {
        syncValue: Ref<Value>;
    };
    /**
     * Generates binding object for v-model integration.
     * Creates properties for two-way data binding with model and update handlers.
     *
     * Генерирует объект привязок для интеграции v-model.
     * Создает свойства для двусторонней привязки данных с обработчиками модели и обновления.
     * @returns Object with model value and update handlers/ Объект со значением модели и обработчиками обновления
     */
    getBinds(): {
        [x: string]: Value | ((value: Value) => void);
    };
    /**
     * Updates the synchronized value.
     * Sets the value of the reactive reference if it's a mutable Ref.
     *
     * Обновляет синхронизированное значение.
     * Устанавливает значение реактивной ссылки, если это изменяемый Ref.
     * @param value The new value to set/ Новое значение для установки
     */
    readonly update: (value: Value) => void;
    /**
     * Emits an event to update the model value.
     * Triggers the corresponding update event with the new value.
     *
     * Испускает событие для обновления значения модели.
     * Запускает соответствующее событие обновления с новым значением.
     * @param value The new value to set/ Новое значение для установки
     */
    emit(value: Value): void;
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
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
declare type MotionTransformEmits = {
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
declare type MotionTransformEmitsInclude = {
    /** Transform event with native event and options/ Событие трансформации с нативным событием и опциями */
    transform: MotionTransformEmits['transform'];
    /** Lightweight transform event with options only/ Облегчённое событие трансформации только с опциями */
    transformLite: MotionTransformEmits['transformLite'];
};

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
declare interface MotionTransformExpose {
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
declare interface MotionTransformExposeInclude extends MotionTransformExpose {
    motionTransformElement: Ref<ConstrBind<MotionTransformExpose> | undefined>;
}

/**
 * The class returns data for working with the MotionTransform component
 *
 * Класс возвращает данные для работы с компонентом MotionTransform
 */
declare class MotionTransformInclude<Props extends MotionTransformPropsInclude = MotionTransformPropsInclude, PropsExtra extends ConstrBind<MotionTransformProps> = ConstrBind<MotionTransformProps>> {
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

/**
 * Props used to include and configure MotionTransform/
 * Свойства для подключения и настройки MotionTransform
 */
declare interface MotionTransformPropsInclude<MotionTransform extends MotionTransformProps = MotionTransformProps> {
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
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
declare interface MotionTransformSlots {
    /** Head slot for controls/ Слот шапки для элементов управления */
    head?(props: MotionTransformControlItem): any;
    /** Body slot for content/ Слот тела для содержимого */
    body?(props: MotionTransformControlItem): any;
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

declare interface SkeletonPropsInclude {
    isSkeleton?: boolean;
}

export { }

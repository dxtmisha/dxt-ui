import { ApiFetch } from '@dxtmisha/functional';
import { ComputedRef } from 'vue';
import { ConstrBind } from '@dxtmisha/functional';
import { ConstrClass } from '@dxtmisha/functional';
import { ConstrEmit } from '@dxtmisha/functional';
import { ConstrOptions } from '@dxtmisha/functional';
import { ConstrStyles } from '@dxtmisha/functional';
import { DesignComp } from '@dxtmisha/functional';
import { DesignComponents } from '@dxtmisha/functional';
import { DesignConstructorAbstract } from '@dxtmisha/functional';
import { ElementOrString } from '@dxtmisha/functional';
import { ItemList } from '@dxtmisha/functional-basic';
import { ListDataBasic } from '@dxtmisha/functional';
import { ListDataRef } from '@dxtmisha/functional';
import { ListList } from '@dxtmisha/functional';
import { ListNames } from '@dxtmisha/functional';
import { ListRecord } from '@dxtmisha/functional';
import { ListSelectedItem } from '@dxtmisha/functional';
import { ListSelectedList } from '@dxtmisha/functional';
import { NormalOrPromise } from '@dxtmisha/functional';
import { NormalOrPromise as NormalOrPromise_2 } from '@dxtmisha/functional-basic';
import { NumberOrString } from '@dxtmisha/functional';
import { NumberOrStringOrBoolean } from '@dxtmisha/functional';
import { Ref } from 'vue';
import { RefOrNormal } from '@dxtmisha/functional';
import { RouteLocationRaw } from 'vue-router';
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
 * Component map for including the Bars component/
 * Карта компонентов для подключения компонента Bars
 */
declare type BarsComponentInclude = {
    bars?: object;
};

/** Available events for Bars/ Доступные события для Bars */
declare type BarsEmitsInclude = {
    bars: EventClickEmits['click'];
    barsLite: EventClickEmits['clickLite'];
    barsBack: EventClickEmits['clickLite'];
};

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
declare interface BarsExpose extends LabelExpose, DescriptionExpose {
}

/**
 * BarsInclude class provides functionality for conditionally rendering bars components
 * within other components. It manages the logic for determining when to display bars
 * and configures the appropriate properties.
 *
 * Класс BarsInclude предоставляет функциональность для условного рендеринга компонентов
 * панелей действий внутри других компонентов. Он управляет логикой определения необходимости
 * отображения панелей и настраивает соответствующие свойства.
 */
declare class BarsInclude<Props extends BarsPropsInclude = BarsPropsInclude, PropsExtra extends ConstrBind<BarsProps> = ConstrBind<BarsProps>> {
    protected readonly props: Readonly<Props>;
    protected readonly className: string;
    protected readonly components?: DesignComponents<BarsComponentInclude, Props> | undefined;
    protected readonly emits?: ConstrEmit<BarsEmitsInclude> | undefined;
    protected readonly extra?: RefOrNormal<PropsExtra> | undefined;
    protected readonly index?: string | undefined;
    readonly element: Ref<BarsExpose | undefined, BarsExpose | undefined>;
    /**
     * Constructor
     * @param props input parameter/ входной параметр
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
     * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
     * @param index index identifier/ идентификатор индекса
     */
    constructor(props: Readonly<Props>, className: string, components?: DesignComponents<BarsComponentInclude, Props> | undefined, emits?: ConstrEmit<BarsEmitsInclude> | undefined, extra?: RefOrNormal<PropsExtra> | undefined, index?: string | undefined);
    /**
     * Checks whether bars should be displayed/
     * Проверяет, нужно ли отображать панели
     */
    readonly is: ComputedRef<boolean>;
    /** Computed bindings for the bars/ Вычисляемые привязки для панелей */
    readonly binds: ComputedRef<PropsExtra>;
    /**
     * Render the Bars component
     *
     * Рендер компонента панелей
     */
    readonly render: () => VNode[];
    /**
     * Handles click events from Bars and emits related events/
     * Обрабатывает клики по панелям и испускает связанные события
     *
     * @param event native mouse event/ native событие мыши
     * @param value payload with { type, value, detail }/ данные события с { type, value, detail }
     */
    protected readonly onClick: (event: MouseEvent, value: EventClickValue) => void;
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
declare interface BarsProps extends BarsPropsBasic, BarsPropsToken {
}

declare interface BarsPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Button extends ButtonPropsBasic = ButtonPropsBasic> extends LabelProps, DescriptionProps, SkeletonPropsInclude, TextClosePropsInclude {
    'backButton'?: ConstrBind<Button>;
    'backHide'?: boolean;
    'backActionHide'?: boolean;
    'bars'?: ConstrBind<Button>[];
    'actionLabel'?: LabelProps['label'];
    'actionDescription'?: DescriptionProps['description'];
    'actionBars'?: ConstrBind<Button>[];
    'buttonAttrs'?: ConstrBind<Button>;
    'iconBack'?: IconValue<Icon>;
    'iconClose'?: IconValue<Icon>;
    'modelAction'?: boolean;
    'onUpdate:action'?: (value: boolean) => void;
    'onUpdate:modelAction'?: (value: boolean) => void;
}

/**
 * Props used to include and configure the Bars component/
 * Свойства для подключения и настройки компонента Bars
 */
declare interface BarsPropsInclude<Bars extends BarsPropsBasic = BarsPropsBasic> {
    /** Bars label/ Метка панелей */
    barsLabel?: string | number;
    /** Bars description/ Описание панелей */
    barsDescription?: string;
    /** Hide back button/ Скрыть кнопку назад */
    barsBackHide?: boolean;
    /** Hide bars/ Скрыть панели */
    barsHide?: boolean;
    /** List of bar buttons/ Список кнопок панелей */
    barsList?: Bars['bars'];
    /** Additional attributes for Bars component/ Дополнительные атрибуты для компонента Bars */
    barsAttrs?: ConstrBind<Bars>;
}

declare interface BarsPropsToken {
    action?: boolean;
}

declare interface ButtonPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> extends LabelProps, EnabledProps, IconTrailingPropsInclude<Icon>, ProgressPropsInclude<Progress>, SkeletonPropsInclude, EventClickProps, AriaLabelPropsInclude {
    tag?: 'button' | 'a' | 'span' | string;
    type?: 'button' | 'submit' | 'reset' | string;
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
export declare const defaultsMenu: {
    liteThreshold: number;
    barsHide: boolean;
    barsBackHide: boolean;
    tag: string;
    step: number;
    autoClose: boolean;
    roleItem: string;
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

declare interface ImagePropsInclude<Image extends ImagePropsBasic = ImagePropsBasic> {
    image?: string | ConstrBind<Image>;
}

declare type ImageValue<Image extends ImagePropsBasic = ImagePropsBasic> = string | ConstrBind<Image> | null;

/**
 * Exposed properties for label components/ Экспонируемые свойства для компонентов меток
 */
declare interface LabelExpose {
    /** Label element ID/ Идентификатор элемента метки */
    labelId: string;
}

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

declare type ListComponentInclude = {
    list?: object;
};

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
declare interface ListExpose {
    isSelected: ComputedRef<boolean>;
    selectedList: ComputedRef<ListList>;
    selectedNames: ComputedRef<ListNames>;
    selectedValues: ComputedRef<any[]>;
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
declare interface ListItemProps extends ListItemPropsBasic, ListItemPropsToken {
}

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

declare interface ListItemPropsToken {
    focus?: boolean;
    open?: boolean;
    selected?: boolean;
    selectedChild?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    iconTop?: boolean;
    iconAlign?: 'center' | 'edge';
    fill?: string | 'custom';
    divider?: boolean;
}

declare interface ListPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, ListItem extends ListItemPropsBasic = ListItemPropsBasic> {
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

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
declare type ListSlots = Record<string, (props: any) => any>;

/**
 * Menu
 */
export declare class Menu {
    protected readonly props: MenuProps;
    protected readonly refs: ToRefs<MenuProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<MenuComponents, MenuProps> | undefined;
    protected readonly slots?: MenuSlots | undefined;
    protected readonly emits?: ConstrEmit<MenuEmits> | undefined;
    /** Request handler for list data/ Обработчик запросов данных списка */
    readonly request: MenuRequest;
    /** Search helper for menu filtering/ Вспомогательный класс поиска для фильтрации меню */
    readonly search: MenuSearch;
    /** Value manager for selected handling/ Менеджер выбранного значения */
    readonly value: MenuValue;
    /** Data manager for list selection and mapping/ Менеджер данных списка для выбора и сопоставления */
    readonly data: ListDataRef;
    readonly go: MenuGo;
    /** Include for working with the Bars component/ Подключение для работы с компонентом Bars */
    readonly bars: BarsInclude;
    /** Include for working with the Window component/ Подключение для работы с компонентом Window */
    readonly window: WindowInclude;
    /** Window manager for Menu/ Класс управления окном Menu */
    readonly menuWindow: MenuWindow;
    /** Click event helper to unify click emissions/ Вспомогательный класс кликов для унифицированной отправки событий */
    readonly event: EventClickInclude;
    /** Data for binding to controls/ Данные для привязки к контролам */
    readonly slotData: MenuControlBasic;
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
    constructor(props: MenuProps, refs: ToRefs<MenuProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<MenuComponents, MenuProps> | undefined, slots?: MenuSlots | undefined, emits?: ConstrEmit<MenuEmits> | undefined);
    /**
     * Getting data for binding to the List component.
     *
     * Получение данных для привязки к компоненту List.
     */
    readonly binds: ComputedRef<ListPropsBasic< IconPropsBasic<ImagePropsBasic>, ListItemPropsBasic<IconPropsBasic<ImagePropsBasic>, BadgePropsBasic<IconPropsBasic<ImagePropsBasic>>, ProgressPropsBasic>>>;
    /**
     * Getting data for binding to controls.
     *
     * Получение данных для привязки к контролам.
     * @returns data for binding to controls/ данные для привязки к контролам
     */
    getControlBinds(): MenuControlBasic;
    /**
     * Click handler.
     *
     * Обработчик клика.
     * @param event event object/ объект события
     * @param options data object/ объект с данными
     */
    readonly onClick: (event: MouseEvent, options?: EventClickValue) => void;
    /**
     * Click on the slot handler.
     *
     * Обработчик клика по слоту.
     * @param event event object/ объект события
     */
    readonly onClickSlot: (event: Event) => void;
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export declare type MenuClasses = {
    main: ConstrClass;
    bars: string;
    list: string;
};

export declare type MenuComponentInclude = {
    menu?: object;
};

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export declare type MenuComponents = ListComponentInclude & BarsComponentInclude & WindowComponentInclude;

export declare type MenuControlBasic = ListExpose & {
    loading: Ref<boolean>;
    previous(): NumberOrStringOrBoolean | undefined;
    next(): NumberOrStringOrBoolean | undefined;
};

export declare type MenuControlItem = MenuControlBasic & WindowControlItem;

/**
 * MenuDesign
 */
export declare class MenuDesign<COMP extends MenuComponents, EXPOSE extends MenuExpose, CLASSES extends MenuClasses, P extends MenuPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, MenuEmits, EXPOSE, MenuSlots, CLASSES, P> {
    protected readonly item: Menu;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, MenuEmits, P>);
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
     * Generates data for control.
     *
     * Генерирует данные для контроля.
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    readonly renderControl: (props: WindowControlItem) => VNode | undefined;
    /**
     * Render title element.
     *
     * Рендер элемента заголовка.
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    readonly renderTitle: (props: WindowControlItem) => VNode[];
    /**
     * Render list element.
     *
     * Рендер элемента списка.
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    readonly renderList: (props: WindowControlItem) => VNode | undefined;
    /**
     * Render footer element.
     *
     * Рендер элемента футера.
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    readonly renderFooter: (props: WindowControlItem) => VNode | undefined;
    /**
     * Generates data for control.
     *
     * Генерирует данные для контроля.
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    protected getBinds(props: WindowControlItem): MenuControlItem;
}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export declare type MenuEmits = BarsEmitsInclude & EventClickEmits & WindowEmitsInclude & ModelEmitsSelected & {
    updateValue: [value?: NumberOrStringOrBoolean];
    clickSlot: [value?: string];
};

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export declare interface MenuExpose extends WindowExposeInclude, MenuControlBasic {
}

/** Type for menu expose functionality/ Тип для функциональности экспорта меню */
export declare interface MenuExposeInclude {
    open: ComputedRef<boolean>;
    setOpen(open: boolean): Promise<void>;
    toOpen: MenuExpose['toOpen'];
    toClose: MenuExpose['toClose'];
    toggle(): Promise<void>;
    menuElement: Ref<ConstrBind<MenuExpose> | undefined>;
}

/**
 * Navigation manager for Menu component
 *
 * Менеджер навигации для компонента Menu
 */
declare class MenuGo {
    protected readonly props: MenuProps;
    protected readonly value: MenuValue;
    protected readonly data: ListDataRef;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param value value manager/ менеджер значений
     * @param data data manager for list/ менеджер данных списка
     */
    constructor(props: MenuProps, value: MenuValue, data: ListDataRef);
    /**
     * Navigates to the previous item in the menu
     *
     * Переходит к предыдущему элементу меню
     * @returns value of the previous item or undefined/ значение предыдущего элемента или undefined
     */
    readonly previous: () => NumberOrStringOrBoolean | undefined;
    /**
     * Navigates to the next item in the menu
     *
     * Переходит к следующему элементу меню
     * @returns value of the next item or undefined/ значение следующего элемента или undefined
     */
    readonly next: () => NumberOrStringOrBoolean | undefined;
    /**
     * Returns the step value for navigation
     *
     * Возвращает значение шага для навигации
     * @returns step value/ значение шага
     */
    protected getStep(): number;
    /**
     * Navigates through the menu items by the specified direction
     *
     * Перемещается по элементам меню в указанном направлении
     * @param directions direction multiplier (-1 for previous, 1 for next)/ множитель направления (-1 для предыдущего, 1 для следующего)
     * @returns value of the selected item or undefined/ значение выбранного элемента или undefined
     */
    protected go(directions: number): NumberOrStringOrBoolean | undefined;
}

/**
 * MenuInclude class provides functionality for conditionally rendering menu components
 * within other components. It manages the logic for determining when to display menu
 * and configures the appropriate properties.
 *
 * Класс MenuInclude предоставляет функциональность для условного рендеринга компонентов
 * меню внутри других компонентов. Он управляет логикой определения необходимости
 * отображения меню и настраивает соответствующие свойства.
 */
export declare class MenuInclude<Props extends MenuPropsInclude = MenuPropsInclude, PropsExtra extends ConstrBind<MenuProps> = ConstrBind<MenuProps>> {
    protected readonly props: Readonly<Props>;
    protected readonly className: string;
    protected readonly components?: DesignComponents<MenuComponentInclude, Props> | undefined;
    protected readonly extra?: RefOrNormal<PropsExtra> | undefined;
    protected readonly index?: string | undefined;
    /** Reference to menu element/ Ссылка на элемент меню */
    protected readonly element: Ref<ConstrBind<MenuExpose> | undefined, ConstrBind<MenuExpose> | undefined>;
    /**
     * Constructor
     * @param props input parameter/ входной параметр
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
     * @param index index identifier/ идентификатор индекса
     */
    constructor(props: Readonly<Props>, className: string, components?: DesignComponents<MenuComponentInclude, Props> | undefined, extra?: RefOrNormal<PropsExtra> | undefined, index?: string | undefined);
    /**
     * Checks whether menu should be displayed/
     * Проверяет, нужно ли отображать меню
     */
    readonly is: ComputedRef<boolean>;
    /** Computed bindings for the menu/ Вычисляемые привязки для меню */
    readonly binds: ComputedRef<PropsExtra>;
    /** Menu expose functionality/ Функциональность экспорта меню */
    readonly expose: MenuExposeInclude;
    /**
     * Get the menu element
     *
     * Получить элемент меню
     */
    getElement(): ConstrBind<MenuExpose> | undefined;
    /**
     * Render the Menu component
     *
     * Рендер компонента меню
     * @param slotsChildren menu slots/ слоты меню
     * @param attrs additional attributes/ дополнительные атрибуты
     * @returns VNode array/ массив VNode
     */
    readonly render: (slotsChildren?: MenuSlots, attrs?: Record<string, any>) => VNode[];
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export declare interface MenuProps extends MenuPropsBasic, MenuPropsToken {
}

export declare interface MenuPropsBasic<List extends ListPropsBasic = ListPropsBasic, ListItem extends ListItemPropsBasic = ListItemPropsBasic, Bars extends BarsPropsBasic = BarsPropsBasic, Window extends WindowPropsBasic = WindowPropsBasic> extends BarsPropsInclude<Bars>, WindowPropsInclude<Window>, ModelPropsSelected {
    selected?: ListSelectedList;
    hideList?: boolean;
    list?: ListRecord<ListItem>;
    liteThreshold?: number;
    highlight?: string;
    highlightLengthStart?: number;
    filterMode?: boolean;
    ajax?: string | (() => NormalOrPromise<ListRecord<ListItem>>);
    request?: ApiFetch;
    cache?: boolean;
    keyLabel?: string;
    keyValue?: string;
    max?: string | number;
    tag?: ListItemProps['tag'];
    step?: string | number;
    listAttrs?: ConstrBind<List>;
    itemAttrs?: ConstrBind<ListItem>;
    roleItem?: RoleType;
    isSelectedByValue?: boolean;
}

/** Interface for menu include props/ Интерфейс для свойств включения меню */
export declare interface MenuPropsInclude<Menu extends MenuPropsBasic = MenuPropsBasic> {
    disabled?: boolean;
    menuAttrs?: ConstrBind<Menu>;
}

declare interface MenuPropsToken {
    hideList?: boolean;
    barsAdaptive?: 'showAlways';
}

/**
 * Class for working with list data requests.
 *
 * Класс для работы с запросами данных списка.
 */
declare class MenuRequest {
    protected readonly props: MenuProps;
    readonly progress: Ref<boolean, boolean>;
    protected readonly buffer: Ref<ListRecord | undefined, ListRecord | undefined>;
    /**
     * Constructor
     * @param props input data/ входные данные
     */
    constructor(props: MenuProps);
    /**
     * Returns current list data.
     *
     * Возвращает текущие данные списка.
     */
    readonly item: ComputedRef<Record<string, any> | ListList<ListDataBasic> | ListList<ListItemPropsBasic<IconPropsBasic<ImagePropsBasic>, BadgePropsBasic<IconPropsBasic<ImagePropsBasic>>, ProgressPropsBasic>>>;
    /**
     * Checks whether a request is needed.
     *
     * Проверяет, нужно ли делать запрос.
     */
    is(): boolean;
    /**
     * Prepares data.
     *
     * Подготавливает данные.
     */
    preparation(): Promise<boolean>;
    /**
     * Updates data.
     *
     * Обновляет данные.
     */
    update(): Promise<void>;
    /**
     * Returns data from AJAX or request function.
     *
     * Возвращает данные из AJAX или функции запроса.
     */
    protected getAjax(): Promise<ListRecord | undefined>;
    /**
     * Executes a request to retrieve data.
     *
     * Выполняет запрос для получения данных.
     */
    protected read(callback: (data: ListRecord | undefined) => void): Promise<void>;
}

/**
 * Class for working with search.
 *
 * Класс для работы с поиском.
 */
declare class MenuSearch {
    protected readonly props: MenuProps;
    readonly item: Ref<string | undefined, string | undefined>;
    /**
     * Constructor
     * @param props input data/ входные данные
     */
    constructor(props: MenuProps);
    /** Returns the search string/ Возвращает строку поиска */
    readonly value: ComputedRef<string | undefined>;
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
}

export declare type MenuSlotInclude = {
    /** Title slot for window title/ Слот заголовка для заголовка окна */
    title?(props: MenuControlItem): any;
    /** Footer slot for window bottom/ Слот подвала для низа окна */
    footer?(props: MenuControlItem): any;
    /** Context slot for top area / Слот контекстной области сверху */
    contextTop?(props: MenuControlItem): any;
    /** Context slot for bottom area / Слот контекстной области снизу */
    contextBottom?(props: MenuControlItem): any;
};

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export declare type MenuSlots = ListSlots & MenuSlotInclude & {
    /** Control slot for window management / Слот управления для управления окном */
    control?(props: MenuControlItem): any;
};

/**
 * Value manager for Menu
 *
 * Менеджер значения для Menu
 */
declare class MenuValue {
    protected readonly props: MenuProps;
    protected readonly refs: ToRefs<MenuProps>;
    protected readonly emits?: ConstrEmit<MenuEmits> | undefined;
    readonly value: Ref<ListSelectedList | undefined, ListSelectedList | undefined>;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
     * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
     */
    constructor(props: MenuProps, refs: ToRefs<MenuProps>, emits?: ConstrEmit<MenuEmits> | undefined);
    /**
     * Computed selected value
     *
     * Вычисляемое выбранное значение
     */
    readonly selected: ComputedRef<ListSelectedList | undefined>;
    /**
     * Sets a new selected value if it has changed and returns the instance for chaining.
     *
     * Устанавливает новое выбранное значение, если оно изменилось, и возвращает экземпляр для чейнинга.
     * @param value selected list value/ выбранное значение списка
     * @param isEmit whether to emit the update event/ нужно ли вызвать событие обновления
     */
    setValue(value: ListSelectedList, isEmit?: boolean): this;
}

/**
 * Window manager for Menu component
 *
 * Класс управления окном для компонента Menu
 */
declare class MenuWindow {
    protected readonly props: MenuProps;
    protected readonly request: MenuRequest;
    readonly lite: Ref<boolean | undefined, boolean | undefined>;
    readonly control: Ref<boolean | undefined, boolean | undefined>;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param request menu request handler/ обработчик запросов меню
     */
    constructor(props: MenuProps, request: MenuRequest);
    /**
     * Returns extra methods for window management
     *
     * Возвращает дополнительные методы для управления окном
     * @returns object with window management methods/ объект с методами управления окном
     */
    getExtra(): WindowProps;
    /**
     * Preparing data before opening the menu
     *
     * Подготовка данных перед открытием меню
     * @returns Promise that resolves to true when preparation is complete/
     * Promise, который разрешается в true после завершения подготовки
     */
    protected readonly preparation: () => Promise<void>;
    /**
     * Actions performed after opening the window
     *
     * Действия, выполняемые после открытия окна
     * @returns Promise that resolves to true when opening actions are complete/
     * Promise, который разрешается в true после завершения действий открытия
     */
    protected readonly opening: () => Promise<boolean>;
    /**
     * Actions performed when closing the window
     *
     * Действия, выполняемые при закрытии окна
     * @returns Promise that resolves to true when closing actions are complete/
     * Promise, который разрешается в true после завершения действий закрытия
     */
    protected readonly closing: () => Promise<boolean>;
}

declare type ModelEmitsSelected<Value = string> = {
    /** Update value event/ Событие обновления значения */
    'update:selected': [value: Value];
    /** Update model value event/ Событие обновления значения модели */
    'update:modelSelected': [value: Value];
};

declare interface ModelPropsSelected<Value = string> {
    /** Model value prop/ Свойство значения модели */
    'modelSelected'?: Value;
    /** Update value handler/ Обработчик обновления значения */
    'onUpdate:selected'?: (value: Value) => void;
    /** Update model value handler/ Обработчик обновления значения модели */
    'onUpdate:modelSelected'?: (value: Value) => void;
}

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

declare interface ScrollbarPropsBasic {
    tag?: string;
}

/**
 * Interface for describing available properties for scrollbar inclusion/
 * Интерфейс для описания доступных свойств для включения скроллбара
 */
declare interface ScrollbarPropsInclude<Scrollbar extends ScrollbarPropsBasic = ScrollbarPropsBasic> {
    scrollbarAttrs?: ConstrBind<Scrollbar>;
}

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

declare interface TextClosePropsInclude {
    /** Close text/ Текст закрытия */
    textClose?: TextValue;
}

declare type TextValue = string | (() => string) | undefined;

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
 * Component map for including the Window component/
 * Карта компонентов для подключения компонента Window
 */
declare type WindowComponentInclude = {
    window?: object;
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
 * Options for window events/
 * Опции для событий окна
 */
declare type WindowEmitOptions = {
    /** Unique window identifier/ Уникальный идентификатор окна */
    id: string;
    /** Window DOM element/ DOM элемент окна */
    element: HTMLDivElement;
    /** Control DOM element/ DOM элемент управления */
    control: HTMLElement;
    /** Window open state/ Состояние открытия окна */
    open: boolean;
};

/**
 * Event map for Window include/
 * Карта событий для подключения Window
 */
declare type WindowEmitsInclude = {
    window: [options: WindowEmitOptions];
};

/**
 * Window event click handler/
 * Обработчик события клика окна
 */
declare type WindowEventClick = (event: MouseEvent & TouchEvent) => Promise<void>;

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
declare interface WindowExpose {
    /**
     * Unique identifier of the window/
     * Уникальный идентификатор окна
     */
    id: string;
    /**
     * Reactive state of window visibility/
     * Реактивное состояние видимости окна
     */
    open: Ref<boolean>;
    /**
     * Control item data for window management/
     * Данные элемента управления для управления окном
     */
    control: ComputedRef<WindowControlItem>;
    /**
     * Sets window open state/
     * Устанавливает состояние открытия окна
     */
    setOpen(open: boolean): Promise<void>;
    /** Transition to opening state/ Переход в состояние открытия */
    toOpen(): Promise<void>;
    /** Transition to closing state/ Переход в состояние закрытия */
    toClose(): Promise<void>;
    /**
     * Toggles window visibility/
     * Переключает видимость окна
     */
    toggle(): Promise<void>;
}

/**
 * Interface for window expose inclusion/
 * Интерфейс для включения expose окна
 */
declare interface WindowExposeInclude {
    id: ComputedRef<string | undefined>;
    open: ComputedRef<boolean>;
    control: ComputedRef<WindowControlItem | undefined>;
    setOpen: WindowExpose['setOpen'];
    toOpen: WindowExpose['toOpen'];
    toClose: WindowExpose['toClose'];
    toggle: WindowExpose['toggle'];
    windowElement: Ref<ConstrBind<WindowExpose> | undefined>;
}

/**
 * The class returns data for working with the Window component
 *
 * Класс возвращает данные для работы с компонентом Window
 */
declare class WindowInclude<Props extends WindowPropsInclude = WindowPropsInclude, PropsExtra extends ConstrBind<WindowProps> = ConstrBind<WindowProps>> {
    protected readonly props: Readonly<Props>;
    protected readonly className: string;
    protected readonly components?: DesignComponents<WindowComponentInclude, Props> | undefined;
    protected readonly emits?: ConstrEmit<WindowEmitsInclude> | undefined;
    protected readonly extra?: RefOrNormal<PropsExtra> | undefined;
    protected readonly index?: string | undefined;
    /**
     * Constructor
     * @param props input parameter/ входной параметр
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
     * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
     * @param index index identifier/ идентификатор индекса
     */
    constructor(props: Readonly<Props>, className: string, components?: DesignComponents<WindowComponentInclude, Props> | undefined, emits?: ConstrEmit<WindowEmitsInclude> | undefined, extra?: RefOrNormal<PropsExtra> | undefined, index?: string | undefined);
    /** Reference to window element expose/ Ссылка на expose элемента окна */
    readonly element: Ref<ConstrBind<WindowExpose> | undefined, ConstrBind<WindowExpose> | undefined>;
    /** Computed bindings for the window/ Вычисляемые привязки для окна */
    readonly binds: ComputedRef<PropsExtra>;
    /**
     * Expose helpers for window state and actions/
     * Вспомогательные методы expose для состояния и действий окна
     */
    readonly expose: WindowExposeInclude;
    /**
     * Render the Window component with slots/
     * Рендер компонента Window со слотами
     * @param slotsChildren slots passed to the window/ слоты, передаваемые окну
     * @param attrs additional attributes/ дополнительные атрибуты
     */
    readonly render: (slotsChildren: WindowSlots, attrs?: Record<string, any>) => VNode[];
    /** Returns preparation result/ Возвращает результат preparation */
    protected readonly getPreparation: () => NormalOrPromise_2<void>;
    /** Returns opening result/ Возвращает результат opening */
    protected readonly getOpening: () => NormalOrPromise_2<boolean>;
    /** Returns closing result/ Возвращает результат closing */
    protected readonly getClosing: () => NormalOrPromise_2<boolean>;
    /**
     * Emits 'window' event upward/
     * Поднимает событие 'window' наверх
     * @param options event payload/ параметры события
     */
    protected readonly onWindow: (options: WindowEmitOptions) => void;
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
declare interface WindowProps extends WindowPropsBasic, WindowPropsToken {
}

declare interface WindowPropsBasic<Scrollbar extends ScrollbarPropsBasic = ScrollbarPropsBasic, Image extends ImagePropsBasic = ImagePropsBasic> extends ScrollbarPropsInclude<Scrollbar>, ImagePropsInclude<Image>, AriaRoleByPropsInclude, AriaByPropsInclude, AriaHaspopupPropsInclude, TextClosePropsInclude {
    'open'?: boolean;
    'disabled'?: boolean;
    'preparation'?(): NormalOrPromise<void>;
    'beforeOpening'?(): NormalOrPromise<boolean>;
    'opening'?(): NormalOrPromise<boolean>;
    'beforeClosing'?(): NormalOrPromise<boolean>;
    'closing'?(): NormalOrPromise<boolean>;
    'contextmenu'?: boolean;
    'staticMode'?: boolean;
    'overElement'?: ElementOrString<HTMLElement>;
    'autoClose'?: boolean;
    'persistent'?: boolean;
    'flash'?: boolean;
    'inDom'?: boolean;
    'indent'?: number;
    'divider'?: boolean;
    'closeButton'?: boolean;
    'iconClose'?: string;
    'modelOpen'?: boolean;
    'onUpdate:open'?: (value: boolean) => void;
    'onUpdate:modelOpen'?: (value: boolean) => void;
}

/**
 * Props used to include and configure the Window component/
 * Свойства для подключения и настройки компонента Window
 */
declare interface WindowPropsInclude<Window extends WindowPropsBasic = WindowPropsBasic> {
    /** Disabled state/ Отключённое состояние */
    disabled?: boolean;
    /** Enable auto close on outside click/ Включить авто-закрытие при клике вне */
    autoClose?: boolean;
    /** Additional attributes for Window component/ Дополнительные атрибуты для компонента Window */
    windowAttrs?: ConstrBind<Window>;
}

declare interface WindowPropsToken {
    width?: string | 'auto' | 'max' | 'custom';
    height?: string | 'auto' | 'max' | 'custom';
    hide?: boolean;
    axis?: 'x' | 'y' | 'on';
    imagePosition?: 'top' | 'left';
    dense?: boolean;
    alignment?: 'center' | 'top' | 'topRight' | 'topLeft' | 'topFull' | 'right' | 'rightFull' | 'bottom' | 'bottomRight' | 'bottomLeft' | 'bottomFull' | 'left' | 'leftFull';
    origin?: 'center' | 'top' | 'right' | 'bottom' | 'left' | 'topToBottom' | 'rightToLeft' | 'bottomToTop' | 'leftToRight';
    adaptive?: 'menu' | 'menuWindow' | 'modal' | 'modalDynamic' | 'actionSheetRight' | 'actionSheetBottom' | 'static';
    fullscreen?: boolean;
    overscroll?: boolean;
    closeMobileHide?: boolean;
    widthMatch?: boolean;
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
declare interface WindowSlots {
    /**
     * Control slot for window management/
     * Слот управления для управления окном
     */
    control?(props: WindowControlItem): any;
    /**
     * Title slot for window header/
     * Слот заголовка для шапки окна
     */
    title?(props: WindowControlItem): any;
    /**
     * Footer slot for window bottom/
     * Слот подвала для низа окна
     */
    footer?(props: WindowControlItem): any;
    /**
     * Default slot for main content/
     * Основной слот для главного содержимого
     */
    default?(props: WindowControlItem): any;
}

export { }

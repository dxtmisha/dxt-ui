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
import { NormalOrPromise } from '@dxtmisha/functional';
import { NormalOrPromise as NormalOrPromise_2 } from '@dxtmisha/functional-basic';
import { NumberOrString } from '@dxtmisha/functional';
import { Ref } from 'vue';
import { RefOrNormal } from '@dxtmisha/functional';
import { RouteLocationRaw } from 'vue-router';
import { ToRefs } from 'vue';
import { VNode } from 'vue';

/**
 * Component map for including the Actions component/
 * Карта компонентов для подключения компонента Actions
 */
declare type ActionsComponentInclude = {
    actions?: object;
};

/** Available events for Actions/ Доступные события для Actions */
declare type ActionsEmitsInclude = {
    actions: EventClickEmits['click'];
    actionsLite: EventClickEmits['clickLite'];
};

/**
 * ActionSheet
 */
export declare class ActionSheet extends ModalAbstract {
    protected readonly props: ActionSheetProps;
    protected readonly refs: ToRefs<ActionSheetProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<ActionSheetComponents, ActionSheetProps> | undefined;
    protected readonly slots?: ActionSheetSlots | undefined;
    protected readonly emits?: ConstrEmit<ActionSheetEmits> | undefined;
    readonly touchEvent: TouchEventInclude;
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
    constructor(props: ActionSheetProps, refs: ToRefs<ActionSheetProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<ActionSheetComponents, ActionSheetProps> | undefined, slots?: ActionSheetSlots | undefined, emits?: ConstrEmit<ActionSheetEmits> | undefined);
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export declare type ActionSheetClasses = {
    main: ConstrClass;
    title: string;
    header: string;
    body: string;
    footer: string;
    touch: string;
    tab: string;
};

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export declare type ActionSheetComponents = ModalComponents;

/**
 * ActionSheetDesign
 */
export declare class ActionSheetDesign<COMP extends ActionSheetComponents, EXPOSE extends ActionSheetExpose, CLASSES extends ActionSheetClasses, P extends ActionSheetPropsBasic> extends ModalDesignAbstract<COMP, ActionSheetEmits, EXPOSE, ActionSheetSlots, CLASSES, P, ActionSheet> {
    /**
     * Creates an instance of the item class.
     *
     * Создает экземпляр класса элемента.
     */
    protected initItem(): ActionSheet;
    /**
     * Improvement of the obtained list of classes.
     *
     * Доработка полученного списка классов.
     */
    protected initClasses(): Partial<CLASSES>;
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
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    protected readonly renderTitleTouch: (props: WindowControlItem) => VNode[];
}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export declare type ActionSheetEmits = ModalEmits;

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export declare interface ActionSheetExpose extends ModalExpose {
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export declare interface ActionSheetProps extends ActionSheetPropsBasic, ActionSheetPropsToken {
}

export declare interface ActionSheetPropsBasic<Window extends WindowPropsBasic = WindowPropsBasic, Bars extends BarsPropsBasic = BarsPropsBasic, Actions extends ActionsPropsBasic = ActionsPropsBasic> extends WindowPropsInclude<Window>, BarsPropsInclude<Bars>, ActionsPropsInclude<Actions> {
    open?: boolean;
    touchClose?: boolean;
}

declare interface ActionSheetPropsToken {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export declare interface ActionSheetSlots extends ModalSlots {
}

/**
 * ActionsInclude class provides functionality for conditionally rendering actions components
 * within other components. It manages the logic for determining when to display actions
 * and configures the appropriate properties.
 *
 * Класс ActionsInclude предоставляет функциональность для условного рендеринга компонентов
 * действий внутри других компонентов. Он управляет логикой определения необходимости
 * отображения действий и настраивает соответствующие свойства.
 */
declare class ActionsInclude<Props extends ActionsPropsInclude = ActionsPropsInclude, PropsExtra extends ConstrBind<ActionsProps> = ConstrBind<ActionsProps>> {
    protected readonly props: Readonly<Props>;
    protected readonly className: string;
    protected readonly components?: DesignComponents<ActionsComponentInclude, Props> | undefined;
    protected readonly emits?: ConstrEmit<ActionsEmitsInclude> | undefined;
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
    constructor(props: Readonly<Props>, className: string, components?: DesignComponents<ActionsComponentInclude, Props> | undefined, emits?: ConstrEmit<ActionsEmitsInclude> | undefined, extra?: RefOrNormal<PropsExtra> | undefined, index?: string | undefined);
    /**
     * Checks whether actions should be displayed/
     * Проверяет, нужно ли отображать действия
     */
    readonly is: ComputedRef<boolean>;
    /** Computed bindings for the actions/ Вычисляемые привязки для действий */
    readonly binds: ComputedRef<PropsExtra>;
    /**
     * Render the Actions component
     *
     * Рендер компонента действий
     */
    readonly render: () => VNode[];
    /**
     * Handles click events from Actions and emits related events/
     * Обрабатывает клики по действиям и испускает связанные события
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
declare interface ActionsProps extends ActionsPropsBasic, ActionsPropsToken {
}

declare interface ActionsPropsBasic<Button extends ButtonPropsBasic = ButtonPropsBasic> {
    list?: ConstrBind<Button>[];
    listSecondary?: ConstrBind<Button>[];
    buttonAttrs?: ConstrBind<Button>;
    buttonSecondaryAttrs?: ConstrBind<Button>;
}

/**
 * Props used to include and configure the Actions component/
 * Свойства для подключения и настройки компонента Actions
 */
declare interface ActionsPropsInclude<Actions extends ActionsPropsBasic = ActionsPropsBasic> {
    /** Hide actions/ Скрыть действия */
    actionsHide?: boolean;
    /** List of action buttons/ Список кнопок действий */
    actionsList?: ConstrBind<Actions['list']>;
    /** List of secondary action buttons/ Список вторичных кнопок действий */
    actionsSecondary?: ConstrBind<Actions['listSecondary']>;
    /** Additional attributes for Actions component/ Дополнительные атрибуты для компонента Actions */
    actionsAttrs?: ConstrBind<Actions>;
}

declare interface ActionsPropsToken {
    align?: 'none' | 'center' | 'left' | 'right' | 'block' | 'auto';
    flexible?: boolean;
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

/** Basic ARIA role props/ Базовые ARIA пропсы роли */
declare interface AriaRolePropsInclude {
    role?: RoleType;
}

/** ARIA true or false type/ ARIA тип true или false */
declare type AriaTrueOrFalse = 'true' | 'false' | boolean;

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
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsActionSheet: {
    barsBackHide: boolean;
    touchClose: boolean;
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
 * Properties for label components/ Свойства для компонентов меток
 */
declare interface LabelProps {
    /** Label text or number/ Текст или число метки */
    label?: NumberOrString;
    /** Label element ID/ Идентификатор элемента метки */
    labelId?: string;
}

/**
 * ModalAbstract
 */
declare abstract class ModalAbstract {
    protected readonly props: ModalProps;
    protected readonly refs: ToRefs<ModalProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<ModalComponents, ModalProps> | undefined;
    protected readonly slots?: ModalSlots | undefined;
    protected readonly emits?: ConstrEmit<ModalEmits> | undefined;
    protected readonly extraWindow?: RefOrNormal<any> | undefined;
    protected readonly extraBars?: RefOrNormal<any> | undefined;
    protected readonly extraActions?: RefOrNormal<any> | undefined;
    readonly bars: BarsInclude;
    readonly actions: ActionsInclude;
    readonly window: WindowInclude;
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
     * @param extraWindow additional parameters for WindowInclude/ дополнительные параметры для WindowInclude
     * @param extraBars additional parameters for BarsInclude/ дополнительные параметры для BarsInclude
     * @param extraActions additional parameters for ActionsInclude/ дополнительные параметры для ActionsInclude
     */
    protected constructor(props: ModalProps, refs: ToRefs<ModalProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<ModalComponents, ModalProps> | undefined, slots?: ModalSlots | undefined, emits?: ConstrEmit<ModalEmits> | undefined, extraWindow?: RefOrNormal<any> | undefined, extraBars?: RefOrNormal<any> | undefined, extraActions?: RefOrNormal<any> | undefined);
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
declare type ModalClasses = {
    main: ConstrClass;
    title: string;
    header: string;
    body: string;
    footer: string;
};

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
declare type ModalComponents = WindowComponentInclude & BarsComponentInclude & ActionsComponentInclude;

/**
 * ModalDesign
 */
declare abstract class ModalDesignAbstract<COMP extends ModalComponents, EMITS extends ModalEmits, EXPOSE extends ModalExpose, SLOTS extends ModalSlots, CLASSES extends ModalClasses, P extends ModalPropsBasic, ITEM extends ModalAbstract = ModalAbstract> extends DesignConstructorAbstract<HTMLDivElement, COMP, EMITS, EXPOSE, SLOTS, CLASSES, P> {
    protected readonly item: ITEM;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, EMITS, P>);
    /**
     * Initialization of the main item
     *
     * Инициализация основного элемента
     */
    protected abstract initItem(): ITEM;
    /**
     * Initialization of all the necessary properties for work
     *
     * Инициализация всех необходимых свойств для работы.
     */
    protected initExpose(): EXPOSE;
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
     * Generates data for control.<br>
     * Генерирует данные для контроля.
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    protected readonly renderControl: (props: WindowControlItem) => VNode | undefined;
    /**
     * Generates data for the header.
     *
     * Генерирует данные для заголовка.
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    protected readonly renderTitle: (props: WindowControlItem) => VNode[];
    /**
     * Generates bodies.
     *
     * Генерирует тела.
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    protected readonly renderDefault: (props: WindowControlItem) => VNode[];
    /**
     * Generates data for the required part.
     *
     * Генерирует данные для нужной части.
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    protected readonly renderFooter: (props: WindowControlItem) => VNode[];
}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
declare type ModalEmits = WindowEmitsInclude & BarsEmitsInclude & ActionsEmitsInclude;

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
declare interface ModalExpose extends WindowExposeInclude {
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
declare interface ModalProps extends ModalPropsBasic, ModalPropsToken {
}

declare interface ModalPropsBasic<Window extends WindowPropsBasic = WindowPropsBasic, Bars extends BarsPropsBasic = BarsPropsBasic, Actions extends ActionsPropsBasic = ActionsPropsBasic, Image extends ImagePropsBasic = ImagePropsBasic> extends WindowPropsInclude<Window>, BarsPropsInclude<Bars>, ActionsPropsInclude<Actions>, ImagePropsInclude<Image> {
    open?: boolean;
}

declare interface ModalPropsToken {
    imagePosition?: 'top' | 'left';
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
declare interface ModalSlots extends WindowSlots {
    header(props: WindowControlItem): any;
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

declare interface TextClosePropsInclude {
    /** Close text/ Текст закрытия */
    textClose?: TextValue;
}

declare type TextValue = string | (() => string) | undefined;

/**
 * Callback function for touch/mouse event handling
 *
 * Функция обратного вызова для обработки событий касания/мыши
 * @param typeX horizontal direction type/ тип горизонтального направления
 * @param typeY vertical direction type/ тип вертикального направления
 * @param clientX horizontal offset/ горизонтальное смещение
 * @param clientY vertical offset/ вертикальное смещение
 * @param mouse initial mouse position/ начальная позиция мыши
 * @param mouseMove current mouse position/ текущая позиция мыши
 * @param touche initial touch point/ начальная точка касания
 * @param toucheMove current touch point/ текущая точка касания
 */
declare type TouchEventCallback = (typeX: TouchEventTypeX, typeY: TouchEventTypeY, clientX: number, clientY: number, mouse?: TouchEventClient, mouseMove?: TouchEventClient, touche?: Touch, toucheMove?: Touch) => Promise<boolean> | boolean;

/**
 * Client coordinates for touch/mouse events/ Координаты клиента для событий касания/мыши
 */
declare type TouchEventClient = {
    /** Horizontal coordinate/ Горизонтальная координата */
    x: number;
    /** Vertical coordinate/ Вертикальная координата */
    y: number;
};

/**
 * Class for handling touch and mouse events with gesture detection.
 *
 * Класс для обработки событий касания и мыши с определением жестов.
 */
declare class TouchEventInclude {
    private readonly start?;
    private readonly move?;
    private readonly end?;
    private readonly element?;
    /**
     * Current touch point
     *
     * Текущая точка касания
     */
    readonly touche: Ref<Touch | undefined, Touch | undefined>;
    /**
     * Touchpoint during move
     *
     * Точка касания во время движения
     */
    readonly toucheMove: Ref<Touch | undefined, Touch | undefined>;
    /**
     * Current mouse position
     *
     * Текущая позиция мыши
     */
    readonly mouse: Ref<TouchEventClient | undefined, TouchEventClient | undefined>;
    /**
     * Mouse position during move
     *
     * Позиция мыши во время движения
     */
    readonly mouseMove: Ref<TouchEventClient | undefined, TouchEventClient | undefined>;
    /**
     * Constructor
     * @param start callback on touch/mouse start/ колбэк при начале касания/клика
     * @param move callback on touch/mouse move/ колбэк при движении
     * @param end callback on touch/mouse end/ колбэк при завершении
     * @param element optional element reference/ необязательная ссылка на элемент
     */
    constructor(start?: ((mouse: TouchEventClient, touche?: Touch) => void) | undefined, move?: TouchEventCallback | undefined, end?: TouchEventCallback | undefined, element?: Ref<HTMLElement | undefined> | undefined);
    /**
     * Touch event handlers
     *
     * Обработчики событий касания
     */
    readonly onTouch: {
        onTouchstart: (event: TouchEvent) => void;
        onTouchend: (event: TouchEvent) => void;
        onTouchcancel: (event: TouchEvent) => void;
        onTouchmove: (event: TouchEvent) => void;
    };
    /**
     * Mouse event handlers
     *
     * Обработчики событий мыши
     */
    readonly onMouse: {
        onMousedown: (event: MouseEvent) => void;
        onMouseup: (event: MouseEvent) => void;
        onMousemove: (event: MouseEvent) => void;
    };
    /**
     * Gets the target element for touch events.
     *
     * Получает целевой элемент для событий касания.
     * @param target event target element/ целевой элемент события
     */
    private getElement;
    /**
     * Determines horizontal direction type from client X coordinate.
     *
     * Определяет тип горизонтального направления из координаты X.
     * @param clientX horizontal coordinate/ горизонтальная координата
     */
    private getTypeX;
    /**
     * Determines vertical direction type from client Y coordinate.
     *
     * Определяет тип вертикального направления из координаты Y.
     * @param clientY vertical coordinate/ вертикальная координата
     */
    private getTypeY;
    /**
     * Executes callback with calculated movement data.
     *
     * Выполняет колбэк с рассчитанными данными движения.
     * @param callback callback function/ функция обратного вызова
     */
    private callback;
    /**
     * Resets touch/mouse state and CSS properties after interaction ends.
     *
     * Сбрасывает состояние касания/мыши и CSS свойства после завершения взаимодействия.
     * @param target selected item/ выбранный элемент
     */
    private reset;
    /**
     * Resets all touch/mouse state and removes CSS custom properties.
     *
     * Сбрасывает все состояния касания/мыши и удаляет CSS кастомные свойства.
     * @param elementValue target element/ целевой элемент
     */
    private resetData;
    /**
     * Updates initial touch/mouse position and sets CSS custom properties.
     *
     * Обновляет начальную позицию касания/мыши и устанавливает CSS кастомные свойства.
     * @param target selected item/ выбранный элемент
     */
    private update;
    /**
     * Updates touch/mouse position during movement and sets CSS custom properties.
     *
     * Обновляет позицию касания/мыши во время движения и устанавливает CSS кастомные свойства.
     * @param target selected item/ выбранный элемент
     */
    private updateMove;
}

/**
 * Horizontal direction type for touch/mouse gestures/ Тип горизонтального направления для жестов касания/мыши
 */
declare type TouchEventTypeX = 'left' | 'right' | 'none';

/**
 * Vertical direction type for touch/mouse gestures/ Тип вертикального направления для жестов касания/мыши
 */
declare type TouchEventTypeY = 'top' | 'bottom' | 'none';

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

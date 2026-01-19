import { ComputedRef } from 'vue';
import { ConstrBind } from '@dxtmisha/functional';
import { ConstrClass } from '@dxtmisha/functional';
import { ConstrClassObject } from '@dxtmisha/functional';
import { ConstrEmit } from '@dxtmisha/functional';
import { ConstrOptions } from '@dxtmisha/functional';
import { ConstrStyles } from '@dxtmisha/functional';
import { DesignComp } from '@dxtmisha/functional';
import { DesignComponents } from '@dxtmisha/functional';
import { DesignConstructorAbstract } from '@dxtmisha/functional';
import { ItemList } from '@dxtmisha/functional-basic';
import { NumberOrString } from '@dxtmisha/functional';
import { NumberOrString as NumberOrString_2 } from '@dxtmisha/functional-basic';
import { Ref } from 'vue';
import { RefOrNormal } from '@dxtmisha/functional';
import { RouteLocationRaw } from 'vue-router';
import { ShallowRef } from 'vue';
import { ToRefs } from 'vue';
import { VNode } from 'vue';

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

/** ARIA true or false type/ ARIA тип true или false */
declare type AriaTrueOrFalse = 'true' | 'false' | boolean;

/**
 * Bars
 */
export declare class Bars {
    protected readonly props: BarsProps;
    protected readonly refs: ToRefs<BarsProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<BarsComponents, BarsProps> | undefined;
    protected readonly slots?: BarsSlots | undefined;
    protected readonly emits?: ConstrEmit<BarsEmits> | undefined;
    /** Управление action‑режимом */
    readonly action: BarsAction;
    readonly label: LabelInclude;
    readonly description: DescriptionInclude;
    readonly event: EventClickInclude;
    /** Helper for Window CSS classes/ Вспомогательный класс для CSS‑классов Window */
    readonly windowClasses: WindowClassesInclude;
    /** Helper for MotionTransform CSS classes/ Вспомогательный класс для CSS‑классов MotionTransform */
    readonly motionTransformClasses: MotionTransformClassesInclude;
    /** Подключение скелетона для текста/описания */
    readonly skeleton: SkeletonInclude;
    readonly text: TextInclude;
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
    constructor(props: BarsProps, refs: ToRefs<BarsProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<BarsComponents, BarsProps> | undefined, slots?: BarsSlots | undefined, emits?: ConstrEmit<BarsEmits> | undefined);
    /** Returns the button data/ Возвращает данные кнопки */
    readonly backBinds: ComputedRef< ConstrBind<ButtonPropsBasic<IconPropsBasic<ImagePropsBasic>, ProgressPropsBasic>> | undefined>;
    /** Returns the list of control buttons/ Возвращает список кнопок управления */
    readonly barsBinds: ComputedRef< ConstrBind<ButtonPropsBasic<IconPropsBasic<ImagePropsBasic>, ProgressPropsBasic>>[] | undefined>;
    /**
     * Returns the list of active control buttons/
     * Возвращает список активных кнопок управления
     */
    readonly actionBarsBinds: ComputedRef< ConstrBind<ButtonPropsBasic<IconPropsBasic<ImagePropsBasic>, ProgressPropsBasic>>[] | undefined>;
    /** Returns the button name/ Возвращает название кнопки */
    readonly backLabel: ComputedRef<string | number | undefined>;
    /** Binds for label text/ Привязки для текста метки */
    protected readonly labelBinds: {
        label: NumberOrString_2 | undefined;
    };
    /** Binds for description text/ Привязки для текста описания */
    protected readonly descriptionBinds: {
        description: string | number | undefined;
    };
    /**
     * Prepares all parameters for the button.
     *
     * Подготавливает все параметры для кнопки.
     * @param item list of buttons/ список параметры
     * @param key button identifier/ идентификатор кнопки
     * @param isAction is action button/ является ли кнопка действия
     */
    protected initItem(item: BarsProps['buttonAttrs'], key: string | number, isAction?: boolean): BarsProps['buttonAttrs'];
    /**
     * Prepares all parameters for the button.
     *
     * Подготавливает список параметры для кнопки.
     * @param bars list of buttons/ >список кнопок
     * @param isAction is action button/ является ли кнопка действия
     */
    protected initList(bars?: BarsProps['bars'], isAction?: boolean): BarsProps['bars'];
    /**
     * Click handler for the "back" button
     *
     * Обработчик клика по кнопке «назад»: закрывает action‑режим и проксирует событие.
     */
    protected readonly onClickBack: (event: MouseEvent, options?: EventClickValue) => void;
}

/**
 * Управление action‑режимом для Bars.
 *
 * Controls Bars action mode.
 */
declare class BarsAction {
    protected readonly props: BarsProps;
    protected readonly refs: ToRefs<BarsProps>;
    /** Текущее состояние action‑режима / Current action mode state */
    readonly action: Ref<boolean, boolean>;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
     */
    constructor(props: BarsProps, refs: ToRefs<BarsProps>);
    /** Вычисляемый флаг активности action / Computed active flag */
    readonly is: ComputedRef<boolean>;
    /**
     * Включить action‑режим.
     *
     * Enable action mode.
     */
    open(): void;
    /**
     * Выключить action‑режим.
     *
     * Disable action mode.
     */
    close(): void;
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export declare type BarsClasses = {
    main: ConstrClass;
    context: string;
    label: string;
    description: string;
};

/**
 * Component map for including the Bars component/
 * Карта компонентов для подключения компонента Bars
 */
export declare type BarsComponentInclude = {
    bars?: object;
};

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export declare type BarsComponents = ButtonComponentInclude;

/**
 * BarsDesign
 */
export declare class BarsDesign<COMP extends BarsComponents, EXPOSE extends BarsExpose, CLASSES extends BarsClasses, P extends BarsProps> extends DesignConstructorAbstract<HTMLDivElement, COMP, BarsEmits, EXPOSE, BarsSlots, CLASSES, P> {
    protected readonly item: Bars;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, BarsEmits, P>);
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
     * Rendering the close button.
     *
     * Рендеринг кнопки закрытия.
     */
    readonly renderBackButton: () => VNode[];
    /**
     * Rendering the content.
     *
     * Рендеринг контента.
     */
    readonly renderContext: () => VNode[];
    /**
     * Rendering the control button.
     *
     * Рендеринг кнопки управления.
     */
    readonly renderBars: () => VNode[];
    /**
     * Rendering the control button.
     *
     * Рендеринг кнопки управления.
     */
    readonly renderActionBars: () => VNode[];
    /**
     * Rendering a list of buttons from the list.
     *
     * Рендеринг списка кнопок по списку.
     * @param list list of data for the button/ список данных для кнопки
     */
    readonly renderList: (list: BarsPropsBasic["bars"]) => VNode[];
}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export declare type BarsEmits = EventClickEmits & {
    'update:action': [value: boolean];
    'update:modelAction': [value: boolean];
};

/** Available events for Bars/ Доступные события для Bars */
export declare type BarsEmitsInclude = {
    bars: EventClickEmits['click'];
    barsLite: EventClickEmits['clickLite'];
    barsBack: EventClickEmits['clickLite'];
};

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export declare interface BarsExpose extends LabelExpose, DescriptionExpose {
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
export declare class BarsInclude<Props extends BarsPropsInclude = BarsPropsInclude, PropsExtra extends ConstrBind<BarsProps> = ConstrBind<BarsProps>> {
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
export declare interface BarsProps extends BarsPropsBasic, BarsPropsToken {
}

export declare interface BarsPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Button extends ButtonPropsBasic = ButtonPropsBasic> extends LabelProps, DescriptionProps, SkeletonPropsInclude, TextClosePropsInclude {
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
export declare interface BarsPropsInclude<Bars extends BarsPropsBasic = BarsPropsBasic> {
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

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export declare interface BarsSlots extends LabelSlots, DescriptionSlots {
    bars?(props: any): any;
    actionBars?(props: any): any;
}

declare type ButtonComponentInclude = {
    button?: object;
};

declare interface ButtonPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> extends LabelProps, EnabledProps, IconTrailingPropsInclude<Icon>, ProgressPropsInclude<Progress>, SkeletonPropsInclude, EventClickProps, AriaLabelPropsInclude {
    tag?: 'button' | 'a' | 'span' | string;
    type?: 'button' | 'submit' | 'reset' | string;
}

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsBars: {};

/**
 * Expose for description functionality/ Экспоз для функциональности описания
 */
declare interface DescriptionExpose {
    /** Description identifier/ Идентификатор описания */
    descriptionId: string;
}

/**
 * Use for adding description text
 *
 * Использование для добавления описания текста
 */
declare class DescriptionInclude {
    protected readonly props: Readonly<DescriptionProps>;
    protected readonly className: string;
    protected readonly slots?: DescriptionSlots | undefined;
    protected readonly skeleton?: SkeletonInclude | undefined;
    /** Unique identifier/ Уникальный идентификатор */
    protected id: string;
    /**
     * Constructor
     * @param props input property/ входное свойство
     * @param className class name/ название класса
     * @param slots object for working with slots/ объект для работы со слотами
     * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
     */
    constructor(props: Readonly<DescriptionProps>, className: string, slots?: DescriptionSlots | undefined, skeleton?: SkeletonInclude | undefined);
    /**
     * Check for the presence of a description
     *
     * Проверка наличия описания
     */
    readonly is: ComputedRef<boolean>;
    /** Description expose reference/ Ссылка на expose описания */
    readonly expose: DescriptionExpose;
    /**
     * Get description ID
     *
     * Получить ID описания
     */
    getId(): string;
    /**
     * Render the description
     *
     * Рендер описания
     */
    render(): VNode[];
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
 * Use for adding text
 *
 * Использование для добавления текста
 */
declare class LabelInclude {
    protected readonly props: Readonly<LabelProps>;
    protected readonly className: string;
    protected readonly classesExtra?: ConstrClass | undefined;
    protected readonly slots?: (LabelSlots | LabelAlternativeSlots) | undefined;
    protected readonly elementsExtra?: (() => VNode[]) | undefined;
    protected readonly labelReplacing?: Ref<string | number | undefined> | undefined;
    protected readonly alternativeSlots?: boolean | undefined;
    protected readonly skeleton?: SkeletonInclude | undefined;
    protected readonly tag: RefOrNormal<string>;
    /** Unique identifier/ Уникальный идентификатор */
    protected id: string;
    /**
     * Constructor
     * @param props input property/ входное свойство
     * @param className class name/ название класса
     * @param classesExtra additional classes/ дополнительные классы
     * @param slots object for working with slots/ объект для работы со слотами
     * @param elementsExtra additional elements/ дополнительные элементы
     * @param labelReplacing additional elements/ дополнительные элементы
     * @param alternativeSlots alternative slots/ альтернативные слоты
     * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
     * @param tag tag name/ имя тега
     */
    constructor(props: Readonly<LabelProps>, className: string, classesExtra?: ConstrClass | undefined, slots?: (LabelSlots | LabelAlternativeSlots) | undefined, elementsExtra?: (() => VNode[]) | undefined, labelReplacing?: Ref<string | number | undefined> | undefined, alternativeSlots?: boolean | undefined, skeleton?: SkeletonInclude | undefined, tag?: RefOrNormal<string>);
    /** Label presence check/ Проверка наличия метки */
    readonly is: ComputedRef<boolean>;
    /** Identifier for the element/ Идентификатор для элемента */
    readonly idElement: ComputedRef<string | undefined>;
    /**
     * Expose helpers for Label state and actions.
     *
     * Вспомогательные методы expose для состояния и действий Label.
     */
    readonly expose: LabelExpose;
    /**
     * Get the unique identifier.
     *
     * Получение уникального идентификатора.
     */
    getId(): string;
    /**
     * Render the label
     *
     * Рендер метки
     * @param childrenExtra additional children/ дополнительные дочерние элементы
     */
    render(childrenExtra?: any[]): VNode[];
    /**
     * Get the class name for the label
     *
     * Получение имени класса для метки
     */
    protected getClassName(): ConstrClass;
    /**
     * Adds the label text if it exists
     *
     * Добавляет текст метки, если он есть
     */
    protected initLabel(): any[];
    /**
     * Adds alternative label text if it exists
     *
     * Добавляет альтернативный текст метки, если он есть
     */
    protected initLabelReplacing(): any[];
    /**
     * Adds a slot for the label if it exists
     *
     * Добавляет слот для метки, если он есть
     */
    protected initSlot(): any[];
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
 * Slot definitions for label components/ Определения слотов для компонентов меток
 */
declare interface LabelSlots {
    /** Default slot content/ Содержимое слота по умолчанию */
    default?(props: any): any;
}

/**
 * Helper class to access MotionTransform CSS classes by design.
 *
 * Вспомогательный класс для доступа к CSS-классам MotionTransform по дизайну.
 */
declare class MotionTransformClassesInclude {
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

declare type SkeletonClassesList = {
    classText: string;
    classTextVariant: string;
    classBackground: string;
    classBackgroundAfter: string;
    classBackgroundBefore: string;
    classBackgroundVariant: string;
    classBorder: string;
    classBorderVariant: string;
    classNone: string;
};

/**
 * Класс для подключения и работы с компонентом Skeleton.
 *
 * A class for connecting to and working with the Skeleton component.
 */
declare class SkeletonInclude {
    protected readonly props: SkeletonPropsInclude;
    protected readonly classesList?: (keyof SkeletonClassesList)[] | undefined;
    /**
     * Skeleton display states/ Состояния отображения Skeleton
     */
    protected readonly status: ComputedRef<boolean> | undefined;
    /**
     * A list of available classes for the Skeleton/ Список доступных классов для Skeleton
     */
    readonly classesSkeleton: SkeletonClassesList;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param classDesign design name/ название дизайна
     * @param classesList list of available classes/ список доступных классов
     */
    constructor(props: SkeletonPropsInclude, classDesign: string, classesList?: (keyof SkeletonClassesList)[] | undefined);
    /**
     * Indicates whether the Skeleton status is enabled/ Указывает, включён ли статус Skeleton
     */
    readonly isSkeleton: ComputedRef<boolean>;
    /**
     * Returns the available list for the skeleton/ Возвращает доступный список для скелетона
     */
    readonly classes: ComputedRef<ConstrClassObject>;
    /** Values for the skeleton/ Значения для скелетона */
    readonly binds: ComputedRef<{
        isSkeleton: boolean | undefined;
    }>;
}

declare interface SkeletonPropsInclude {
    isSkeleton?: boolean;
}

declare interface TextAllPropsInclude extends TextClosePropsInclude, TextCopiedClipboardPropsInclude, TextEntriesMatchPropsInclude, TextOkPropsInclude {
}

declare interface TextClosePropsInclude {
    /** Close text/ Текст закрытия */
    textClose?: TextValue;
}

declare interface TextCopiedClipboardPropsInclude {
    /** Copied to the clipboard text/ Текст о копировании в буфер обмена */
    textCopiedClipboard?: TextValue;
}

declare interface TextEntriesMatchPropsInclude {
    /** Text entries match/ Текст о несовпадении записей */
    textEntriesMatch?: TextValue;
}

/**
 * TextInclude class for managing text-related properties.
 *
 * Класс TextInclude для управления свойствами, связанными с текстом.
 */
declare class TextInclude {
    protected readonly props: TextAllPropsInclude;
    /**
     * Global list of texts for all components/ Глобальный список текстов для всех компонентов
     */
    static readonly list: ShallowRef<TextList, TextList>;
    /**
     * Initialize global texts.
     *
     * Инициализация глобальных текстов.
     * @param texts List of texts/ Список текстов
     */
    static initText(texts: TextList): void;
    /**
     * Constructor
     * @param props Component properties/ Свойства компонента
     */
    constructor(props: TextAllPropsInclude);
    /** Close text/ Текст закрытия */
    readonly close: ComputedRef<string | undefined>;
    /** Copied to the clipboard text/ Текст о копировании в буфер обмена */
    readonly copiedClipboard: ComputedRef<string | undefined>;
    /** Entries match text/ Текст о несовпадении записей */
    readonly entriesMatch: ComputedRef<string | undefined>;
    /** OK text/ Текст подтверждения */
    readonly ok: ComputedRef<string | undefined>;
    /**
     * Get text by index, with priority to local value.
     *
     * Получение текста по индексу с приоритетом локального значения.
     * @param index Text index/ Индекс текста
     * @param value Local text value/ Локальное значение текста
     */
    protected getText(index: TextIndex, value: TextValue): string | undefined;
    /**
     * Get text from global list.
     *
     * Получение текста из глобального списка.
     * @param index Text index/ Индекс текста
     */
    protected getGlobalText(index: TextIndex): string | undefined;
}

declare type TextIndex = 'close' | 'entriesMatch' | 'ok' | string;

declare type TextList = Record<TextIndex, TextValue>;

declare interface TextOkPropsInclude {
    /** OK text/ Текст подтверждения */
    textOk?: TextValue;
}

declare type TextValue = string | (() => string) | undefined;

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

export { }

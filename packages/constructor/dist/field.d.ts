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
import { EventItem } from '@dxtmisha/functional';
import { ItemList } from '@dxtmisha/functional-basic';
import { NumberOrString } from '@dxtmisha/functional';
import { Ref } from 'vue';
import { RefOrNormal } from '@dxtmisha/functional';
import { RefType } from '@dxtmisha/functional';
import { RouteLocationRaw } from 'vue-router';
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
 * Class for working with caption.
 *
 * Класс для работы с caption.
 */
declare class CaptionInclude {
    protected readonly props: Readonly<CaptionProps>;
    protected readonly className: string;
    protected readonly slots?: CaptionSlots | undefined;
    protected readonly skeleton?: SkeletonInclude | undefined;
    /**
     * Constructor
     * @param props input property/ входное свойство
     * @param className class name/ название класса
     * @param slots object for working with slots/ объект для работы со слотами
     * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
     */
    constructor(props: Readonly<CaptionProps>, className: string, slots?: CaptionSlots | undefined, skeleton?: SkeletonInclude | undefined);
    /**
     * Returns true if caption is filled
     *
     * Возвращает true, если caption заполнен
     */
    readonly is: ComputedRef<boolean>;
    /**
     * Renders caption element with content from props or slots.
     *
     * Отображает элемент caption с содержимым из props или slots.
     */
    render(): VNode[];
}

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
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsField: {
    arrowAlign: string;
    cancel: string;
};

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
 * Field
 */
export declare class Field {
    protected readonly props: FieldProps;
    protected readonly refs: ToRefs<FieldProps>;
    protected readonly element: Ref<HTMLLabelElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<FieldComponents, FieldProps> | undefined;
    protected readonly slots?: FieldSlots | undefined;
    protected readonly emits?: ConstrEmit<FieldEmits> | undefined;
    readonly id: string;
    readonly labelId: string;
    readonly helperId: string;
    readonly validationId: string;
    readonly counterId: string;
    readonly icon: IconTrailingInclude;
    readonly caption: CaptionInclude;
    readonly prefix: PrefixInclude;
    readonly suffix: SuffixInclude;
    readonly fieldLabel: FieldLabelInclude;
    readonly fieldMessage: FieldMessageInclude;
    readonly progress: ProgressInclude;
    readonly enabled: EnabledInclude;
    readonly event: EventClickInclude;
    readonly skeleton: SkeletonInclude;
    readonly icons: FieldIcons;
    readonly size: FieldSize;
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
    constructor(props: FieldProps, refs: ToRefs<FieldProps>, element: Ref<HTMLLabelElement | undefined>, classDesign: string, className: string, components?: DesignComp<FieldComponents, FieldProps> | undefined, slots?: FieldSlots | undefined, emits?: ConstrEmit<FieldEmits> | undefined);
    /** Checks if an error needs to be displayed/ Проверяет, надо ли выводить ошибку */
    readonly isValidation: ComputedRef<boolean>;
    /** Values for the class/ Значения для класса */
    readonly classes: ComputedRef<{
        [x: string]: string | number | boolean | undefined;
    }>;
    /**
     * Returns data for the slot/ Возвращает данные для слота
     */
    readonly control: ComputedRef<FieldControl>;
    /**
     * Get ARIA describedby attribute.
     *
     * Получить атрибут ARIA describedby.
     */
    protected getDescribedby(): string;
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export declare type FieldClasses = {
    main: ConstrClass;
    body: string;
    bodyInput: string;
    bodyTitle: string;
    bodyTitleLabel: string;
    bodyTitleLabelText: string;
    bodyScoreboard: string;
    bodyScoreboardLeft: string;
    bodyScoreboardRight: string;
    bodyScoreboardSpace: string;
    bodyScoreboardInput: string;
    bodyBorder: string;
    required: string;
};

/**
 * Interface for describing which components need to be connected for Field work/
 * Интерфейс для описания, какие компоненты надо подключить для работы Field
 */
export declare type FieldComponentInclude = {
    field: object;
};

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export declare type FieldComponents = IconComponentInclude & FieldLabelComponentInclude & FieldMessageComponentInclude & ProgressComponentInclude;

/**
 * Control data passed to slots and subcomponents/
 * Данные управления, передаваемые в слоты и под-компоненты
 */
export declare type FieldControl = {
    /**
     * Unique element identifier for binding label and input/
     * Уникальный идентификатор элемента для связывания label и input
     */
    id: string;
    /**
     * CSS classes for the visible input area/
     * CSS-классы для видимой зоны ввода
     */
    className: string;
    /**
     * CSS classes for the hidden native input element/
     * CSS-классы для скрытого нативного элемента ввода
     */
    classHidden: string;
    /**
     * CSS classes applied when the field is focused/
     * CSS-классы, применяемые при фокусировке на поле
     */
    classForFocus: string;
    binds: AriaList & {
        id: string;
        className: string;
    };
};

declare interface FieldCounterPropsBasic {
    counter?: string | number;
    maxlength?: string | number;
    template?: string;
    id?: string;
}

/**
 * Properties that can be passed to FieldCounterInclude/
 * Свойства, которые можно передать в FieldCounterInclude
 */
declare interface FieldCounterPropsInclude<FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic> {
    counter?: FieldCounterPropsBasic['counter'];
    counterShow?: boolean;
    counterTemplate?: FieldCounterPropsBasic['template'];
    counterId?: string;
    maxlength?: FieldCounterPropsBasic['maxlength'];
    fieldCounterAttrs?: ConstrBind<FieldCounter>;
}

/**
 * FieldDesign
 */
export declare class FieldDesign<COMP extends FieldComponents, EXPOSE extends FieldExpose, CLASSES extends FieldClasses, P extends FieldPropsBasic> extends DesignConstructorAbstract<HTMLLabelElement, COMP, FieldEmits, EXPOSE, FieldSlots, CLASSES, P> {
    protected readonly item: Field;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, FieldEmits, P>);
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
     * Generates body.
     *
     * Генерирует тело.
     */
    readonly renderBody: () => VNode[];
    /**
     * Generates data for the title.
     *
     * Генерирует данные для заголовка.
     */
    readonly renderBodyLabel: () => VNode;
    /**
     * Generates data for additional controls.
     *
     * Генерирует данные для дополнительных управлений.
     */
    readonly renderBodyScoreboard: () => VNode;
    /**
     * Generates data for the slot.
     *
     * Генерирует данные для слота.
     */
    readonly renderBodyScoreboardSlot: () => VNode[];
    /**
     * Generates all available icons.
     *
     * Генерирует все доступные иконки.
     */
    readonly renderBodyScoreboardIcon: () => VNode[];
    /**
     * Generates separators and additional descriptions.
     *
     * Генерирует разделители и дополнительные описания.
     */
    readonly renderBodyScoreboardSpace: () => VNode[];
    /**
     * Generates border.
     *
     * Генерирует border.
     */
    readonly renderBodyBorder: () => VNode;
    /**
     * Value for focus.
     *
     * Значение для фокуса.
     */
    protected readonly focusValue: () => string;
    /**
     * Length value.
     *
     * Значение длины.
     */
    protected readonly lengthValue: () => string | undefined;
    /**
     * Element for counting characters.
     *
     * Элемент для подсчёта символов.
     */
    protected readonly lengthElement: ComputedRef<HTMLInputElement | undefined>;
    /**
     * Input element.
     *
     * Элемент ввода.
     */
    protected readonly inputElement: ComputedRef<HTMLInputElement | undefined>;
}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export declare type FieldEmits = EventClickEmits;

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export declare interface FieldExpose {
}

/**
 * Class for displaying an icon for arrow control.
 *
 * Класс для вывода иконки для управления стрелками.
 */
declare class FieldIcons {
    protected readonly props: FieldProps;
    protected readonly className: string;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param className class name/ название класса
     */
    constructor(props: FieldProps, className: string);
    /**
     * Determines whether to display arrows.
     *
     * Определяет, требуется ли отображение стрелок.
     */
    readonly isArrow: ComputedRef<boolean>;
    /**
     * Determines whether to display the "Delete" button.
     *
     * Определяет, требуется ли отображение кнопки "Удалить".
     */
    readonly isCancel: ComputedRef<boolean>;
    /**
     * Returns data for the data deletion button.
     *
     * Возвращает данные для кнопки удаления данных.
     */
    readonly cancelBind: ComputedRef<ConstrBind<IconProps>>;
    /**
     * Returns data for the left arrow.
     *
     * Возвращает данные для стрелки слева.
     */
    readonly previousBind: ComputedRef<ConstrBind<IconProps>>;
    /**
     * Returns data for the right arrow.
     *
     * Возвращает данные для стрелки справа.
     */
    readonly nextBind: ComputedRef<ConstrBind<IconProps>>;
}

/**
 * Interface for describing which components need to be connected for FieldLabel work/
 * Интерфейс для описания, какие компоненты надо подключить для работы FieldLabel
 */
declare type FieldLabelComponentInclude = {
    fieldLabel: object;
};

/**
 * The class returns data for working with the FieldLabel component
 *
 * Класс возвращает данные для работы с компонентом FieldLabel
 */
declare class FieldLabelInclude<Props extends FieldLabelPropsInclude = FieldLabelPropsInclude, PropsExtra extends ConstrBind<FieldLabelPropsBasic> = ConstrBind<FieldLabelPropsBasic>> {
    protected readonly props: Readonly<Props>;
    protected readonly className: string;
    protected readonly components?: DesignComponents<FieldLabelComponentInclude, Props> | undefined;
    protected readonly slots?: FieldLabelSlotsInclude | undefined;
    protected readonly isCounter?: RefType<boolean | undefined> | undefined;
    protected readonly labelId?: string | undefined;
    protected readonly counterId?: string | undefined;
    protected readonly extra?: RefOrNormal<PropsExtra> | undefined;
    protected readonly index?: string | undefined;
    /** Field counter include/ Подключение счетчика поля */
    private readonly fieldCounter;
    /**
     * Constructor
     * @param props input parameter/ входной параметр
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param slots object for working with slots/ объект для работы со слотами
     * @param isCounter whether to display the counter/ отображать ли счетчик
     * @param labelId label identifier/ идентификатор метки
     * @param counterId counter identifier/ идентификатор счетчика
     * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
     * @param index index identifier/ идентификатор индекса
     */
    constructor(props: Readonly<Props>, className: string, components?: DesignComponents<FieldLabelComponentInclude, Props> | undefined, slots?: FieldLabelSlotsInclude | undefined, isCounter?: RefType<boolean | undefined> | undefined, labelId?: string | undefined, counterId?: string | undefined, extra?: RefOrNormal<PropsExtra> | undefined, index?: string | undefined);
    /** Checks if label should be displayed/ Проверяет, надо ли отображать метку */
    readonly is: ComputedRef<boolean>;
    /** Computed bindings for FieldLabel/ Вычисляемые привязки для FieldLabel */
    readonly binds: ComputedRef<PropsExtra>;
    /**
     * Render the FieldLabel component/ Рендер компонента FieldLabel
     */
    readonly render: () => VNode[];
}

declare interface FieldLabelPropsBasic<FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> extends LabelProps, FieldCounterPropsInclude<FieldCounter>, ProgressPropsInclude<Progress>, SkeletonPropsInclude {
    required?: boolean;
}

/**
 * Properties that can be passed to FieldLabelInclude/
 * Свойства, которые можно передать в FieldLabelInclude
 */
declare interface FieldLabelPropsInclude<FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic> extends LabelProps, FieldCounterPropsInclude<FieldCounter> {
    required?: boolean;
    fieldLabelAttrs?: ConstrBind<FieldLabel>;
}

/**
 * Slots contract that FieldLabelInclude can expose or map to Label component slots.
 * Extends LabelAlternativeSlots to reuse standard label-related slots (leading, trailing, etc.).
 *
 * Контракт слотов, которые может предоставлять FieldLabelInclude или прокидывать в Label.
 * Расширяет LabelAlternativeSlots, чтобы переиспользовать стандартные слоты лейбла (leading, trailing и др.).
 */
declare interface FieldLabelSlotsInclude extends LabelAlternativeSlots {
}

/**
 * Interface for describing which components need to be connected for FieldMessage work/
 * Интерфейс для описания, какие компоненты надо подключить для работы FieldMessage
 */
declare type FieldMessageComponentInclude = {
    fieldMessage: object;
};

/**
 * The class returns data for working with the FieldMessage component
 *
 * Класс возвращает данные для работы с компонентом FieldMessage
 */
declare class FieldMessageInclude<Props extends FieldMessagePropsInclude = FieldMessagePropsInclude, PropsExtra extends ConstrBind<FieldMessagePropsBasic> = ConstrBind<FieldMessagePropsBasic>> {
    protected readonly props: Readonly<Props>;
    protected readonly className: string;
    protected readonly components?: DesignComponents<FieldMessageComponentInclude, Props> | undefined;
    protected readonly validationMessage?: RefOrNormal<string> | undefined;
    protected readonly isCounter?: RefType<boolean | undefined> | undefined;
    protected readonly helperId?: RefOrNormal<string> | undefined;
    protected readonly validationId?: RefOrNormal<string> | undefined;
    protected readonly counterId?: RefOrNormal<string> | undefined;
    protected readonly extra?: RefOrNormal<PropsExtra> | undefined;
    protected readonly index?: string | undefined;
    /** Field counter include/ Подключение счетчика поля */
    private readonly fieldCounter;
    /**
     * Constructor
     * @param props input parameter/ входной параметр
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param validationMessage error line/ строка ошибки
     * @param isCounter whether to display the counter/ отображать ли счетчик
     * @param helperId helper message identifier/ идентификатор сообщения помощника
     * @param validationId validation message identifier/ идентификатор сообщения проверки
     * @param counterId counter identifier/ идентификатор счетчика
     * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
     * @param index index identifier/ идентификатор индекса
     */
    constructor(props: Readonly<Props>, className: string, components?: DesignComponents<FieldMessageComponentInclude, Props> | undefined, validationMessage?: RefOrNormal<string> | undefined, isCounter?: RefType<boolean | undefined> | undefined, helperId?: RefOrNormal<string> | undefined, validationId?: RefOrNormal<string> | undefined, counterId?: RefOrNormal<string> | undefined, extra?: RefOrNormal<PropsExtra> | undefined, index?: string | undefined);
    /** Validation message computed/ Вычисляемое сообщение валидации */
    readonly validation: ComputedRef<string | undefined>;
    /** Checks if validation message should be displayed/ Проверяет, надо ли отображать сообщение валидации */
    readonly isValidationMessage: ComputedRef<boolean>;
    /** Computed bindings for FieldMessage/ Вычисляемые привязки для FieldMessage */
    readonly binds: ComputedRef<PropsExtra>;
    /**
     * Render the FieldMessage component.
     *
     * Рендер компонента FieldMessage.
     */
    readonly render: () => VNode[];
}

declare interface FieldMessagePropsBasic<FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic> extends FieldCounterPropsInclude<FieldCounter>, SkeletonPropsInclude {
    forceShow?: boolean;
    disabled?: boolean;
    helperMessage?: string;
    validationMessage?: string;
    helperId?: string;
    validationId?: string;
}

/**
 * Properties that can be passed to FieldMessageInclude/
 * Свойства, которые можно передать в FieldMessageInclude
 */
declare interface FieldMessagePropsInclude<FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic> extends FieldCounterPropsInclude<FieldCounter> {
    forceShowMessage?: boolean;
    disabled?: boolean;
    helperMessage?: string;
    validationMessage?: string;
    fieldMessageAttrs?: ConstrBind<FieldMessage>;
    helperId?: string;
    validationId?: string;
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export declare interface FieldProps extends FieldPropsBasic, FieldPropsToken {
}

export declare interface FieldPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> extends IconTrailingPropsInclude<Icon>, PrefixProps, SuffixProps, CaptionProps, FieldLabelPropsInclude<FieldLabel, FieldCounter>, FieldMessagePropsInclude<FieldMessage, FieldCounter>, ProgressPropsInclude<Progress>, EnabledProps, EventClickProps, SkeletonPropsInclude {
    disabledPrevious?: boolean;
    disabledNext?: boolean;
    id?: string | number;
    counterTop?: boolean;
    cancelShow?: boolean;
    iconArrowLeft?: IconValue<Icon>;
    iconArrowRight?: IconValue<Icon>;
    iconPlus?: IconValue<Icon>;
    iconMinus?: IconValue<Icon>;
    iconClose?: IconValue<Icon>;
}

/**
 * Properties that can be passed to FieldInclude/
 * Свойства, которые можно передать в FieldInclude
 */
export declare interface FieldPropsInclude<Icon extends IconPropsBasic = IconPropsBasic, Field extends FieldPropsBasic = FieldPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> extends Omit<FieldPropsBasic<Icon, FieldLabel, FieldMessage, FieldCounter, Progress>, 'disabledPrevious' | 'disabledNext' | 'to' | 'value' | 'maxlength' | 'cancelShow' | 'counter' | 'counterTemplate' | 'counterTop' | 'iconArrowLeft' | 'iconArrowRight' | 'iconPlus' | 'iconMinus' | 'iconClose'> {
    focus?: boolean;
    selected?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    align?: 'center' | 'right' | 'left';
    cancel?: 'auto' | 'always' | 'none';
    fieldAttrs?: ConstrBind<Field>;
}

declare interface FieldPropsToken {
    focus?: boolean;
    disabled?: boolean;
    selected?: boolean;
    readonly?: boolean;
    block?: boolean;
    isValue?: boolean;
    basic?: boolean;
    boxed?: boolean;
    tonal?: boolean;
    filled?: boolean;
    outlined?: boolean;
    classic?: boolean;
    arrowCarousel?: boolean;
    arrowStepper?: boolean;
    arrowAlign?: 'center' | 'right' | 'left';
    cancel?: 'auto' | 'always' | 'none';
    align?: 'center' | 'right' | 'left';
    width?: string | 'custom';
}

/**
 * Input field margin control class.
 *
 * Класс управления отступами для элемента ввода.
 */
declare class FieldSize {
    protected readonly element: Ref<HTMLLabelElement | undefined>;
    protected readonly className: string;
    protected left: number;
    protected right: number;
    protected title: number;
    protected event?: EventItem<Window, Event>;
    /**
     * Constructor
     * @param element main element/ главный элемент
     * @param className class name/ название класса
     */
    constructor(element: Ref<HTMLLabelElement | undefined>, className: string);
    /**
     * Update margins.
     *
     * Обновление отступов.
     */
    readonly update: () => void;
    /**
     * Returns separator elements.
     *
     * Возвращает элементы-разделители.
     */
    protected getElementSpace(): HTMLDivElement | undefined;
    /**
     * Returns element with prefix.
     *
     * Возвращает элемент с префиксом.
     */
    protected getElementPrefix(): HTMLDivElement | undefined;
    /**
     * Update input field margins.
     *
     * Обновление отступов для поля ввода.
     */
    protected make(): void;
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export declare interface FieldSlots extends CaptionSlots, PrefixSlots, SuffixSlots, FieldLabelSlotsInclude {
    leading?(props: FieldControl): any;
    trailing?(props: FieldControl): any;
    default?(props: FieldControl): any;
}

/**
 * Type describing available slots for Field/
 * Тип, описывающий доступные слоты для Field
 */
export declare interface FieldSlotsInclude extends Omit<FieldSlots, 'default'> {
}

declare type IconComponentInclude = {
    icon?: object;
};

/**
 * Class for simplified integration of the icon-handling component
 *
 * Класс для упрощённого внедрения компонента для работы с иконками
 */
declare class IconInclude<Props extends IconPropsInclude = IconPropsInclude> extends IconLiteInclude<Props> {
    protected readonly props: Readonly<Props>;
    protected readonly className: string;
    protected readonly components?: DesignComponents<IconComponentInclude, Props> | undefined;
    protected readonly extra?: RefOrNormal<ConstrBind<IconPropsBasic>> | undefined;
    protected readonly turn?: RefOrNormal<boolean> | undefined;
    protected readonly dir?: RefOrNormal<boolean> | undefined;
    protected readonly start: RefOrNormal<boolean | undefined>;
    protected readonly end: RefOrNormal<boolean | undefined>;
    /**
     * Constructor
     * @param props input parameter/ входной параметр
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param extra additional parameter/ дополнительный параметр
     * @param turn should the icon be flipped/ надо ли перевернуть иконку
     * @param dir should the icon be mirrored/ надо ли зеркально отображать иконка
     * @param start add sorting at the beginning/ добавить сортировку в начале
     * @param end add sorting at the end/ добавить сортировку в конце
     */
    constructor(props: Readonly<Props>, className: string, components?: DesignComponents<IconComponentInclude, Props> | undefined, extra?: RefOrNormal<ConstrBind<IconPropsBasic>> | undefined, turn?: RefOrNormal<boolean> | undefined, dir?: RefOrNormal<boolean> | undefined, start?: RefOrNormal<boolean | undefined>, end?: RefOrNormal<boolean | undefined>);
    /**
     * List of properties for the icon component/ Список свойств для компонента иконки
     */
    readonly iconBind: ComputedRef<ConstrBind< ItemList>>;
}

/**
 * Class for simplified integration of the icon-handling component
 *
 * Класс для упрощённого внедрения компонента для работы с иконками
 */
declare class IconLiteInclude<Props extends IconLitePropsInclude = IconLitePropsInclude> {
    protected readonly props: Readonly<Props>;
    protected readonly className: string;
    protected readonly components?: DesignComponents<IconComponentInclude, Props> | undefined;
    protected readonly extra?: RefOrNormal<ConstrBind<IconPropsBasic>> | undefined;
    /**
     * Constructor
     * @param props input parameter/ входной параметр
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param extra additional parameter/ дополнительный параметр
     */
    constructor(props: Readonly<Props>, className: string, components?: DesignComponents<IconComponentInclude, Props> | undefined, extra?: RefOrNormal<ConstrBind<IconPropsBasic>> | undefined);
    /**
     * Checks whether an icon is specified for rendering the component/
     * Проверяет, указана ли иконка для отображения компонента
     */
    readonly isIcon: ComputedRef<boolean>;
    /**
     * List of properties for the icon component/ Список свойств для компонента иконки
     */
    readonly iconBind: ComputedRef<ConstrBind< ItemList>>;
    /**
     * Render of the Icon component
     *
     * Рендер компонента иконка
     */
    readonly renderIcon: () => VNode[];
    /**
     * Returns an additional property
     *
     * Возвращает дополнительное свойство
     */
    protected getExtra(): ConstrBind<IconPropsBasic< ImagePropsBasic>> | undefined;
    /**
     * Returns a list of classes
     *
     * Возвращает список классов
     * @param classesUser list of additional classes/ список дополнительных классов
     * @param name class name/ название класса
     */
    protected getClasses(classesUser?: ConstrClass, name?: string): {
        class: ConstrClass;
    };
    /**
     * Returns the type used to determine when an event is triggered
     *
     * Возвращает тип для определения при срабатывании события
     * @param type event type/ тип события
     */
    protected getEventType(type?: string): Record<string, string>;
}

declare interface IconLitePropsInclude<Icon extends IconPropsBasic = IconPropsBasic> {
    icon?: IconValue<Icon>;
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
declare interface IconProps extends IconPropsBasic, IconPropsToken {
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

declare interface IconPropsToken {
    turn?: boolean;
    disabled?: boolean;
    hide?: boolean;
    asPalette?: boolean;
    dir?: boolean;
    overlay?: boolean;
    dynamic?: boolean;
    start?: boolean;
    end?: boolean;
    high?: boolean;
    animationType?: 'type1' | 'type2';
    animationShow?: boolean;
}

/**
 * Class for simplified integration of the icon-handling component
 *
 * Класс для упрощённого внедрения компонента для работы с иконками
 */
declare class IconTrailingInclude<Props extends IconTrailingPropsInclude = IconTrailingPropsInclude> extends IconInclude<Props> {
    protected readonly props: Readonly<Props>;
    protected readonly className: string;
    protected readonly components?: DesignComponents<IconComponentInclude, Props> | undefined;
    protected readonly extra?: RefOrNormal<ConstrBind<IconPropsBasic>> | undefined;
    /**
     * Constructor
     * @param props input parameter/ входной параметр
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param extra additional parameter/ дополнительный параметр
     */
    constructor(props: Readonly<Props>, className: string, components?: DesignComponents<IconComponentInclude, Props> | undefined, extra?: RefOrNormal<ConstrBind<IconPropsBasic>> | undefined);
    /**
     * Checks whether an icon is specified for rendering the component/
     * Проверяет, указана ли иконка для отображения компонента
     */
    readonly isIconTrailing: ComputedRef<boolean>;
    /**
     * Checks if there is at least one icon/
     * Проверяет, есть ли хотя бы одна иконка
     */
    readonly hasAtLeastOneIcon: ComputedRef<boolean>;
    /**
     * list of properties for the secondary icon component/ список свойств для вторичного компонента иконки
     */
    readonly trailingBind: ComputedRef<ConstrBind< ItemList>>;
    /**
     * Render of the secondary icon component
     *
     * Рендер вторичного компонента иконки
     */
    readonly renderIconTrailing: () => VNode[];
    /**
     * Method for rendering all icons — first the main ones, then the additional icons
     *
     * Метод для рендеринга всех иконок — сначала основных, затем дополнительных
     */
    readonly render: () => VNode[];
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
 * Properties for label components/ Свойства для компонентов меток
 */
declare interface LabelProps {
    /** Label text or number/ Текст или число метки */
    label?: NumberOrString;
    /** Label element ID/ Идентификатор элемента метки */
    labelId?: string;
}

/**
 * Class for working with prefix.
 *
 * Класс для работы с prefix.
 */
declare class PrefixInclude {
    protected readonly props: Readonly<PrefixProps>;
    protected readonly className: string;
    protected readonly slots?: PrefixSlots | undefined;
    protected readonly skeleton?: SkeletonInclude | undefined;
    /**
     * Constructor
     * @param props input property/ входное свойство
     * @param className class name/ название класса
     * @param slots object for working with slots/ объект для работы со слотами
     * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
     */
    constructor(props: Readonly<PrefixProps>, className: string, slots?: PrefixSlots | undefined, skeleton?: SkeletonInclude | undefined);
    /**
     * Returns true if prefix is filled
     *
     * Возвращает true, если prefix заполнен
     */
    readonly is: ComputedRef<boolean>;
    /**
     * Renders prefix element with content from props or slots.
     *
     * Отображает элемент prefix с содержимым из props или slots.
     */
    render(): VNode[];
}

/**
 * Props for prefix functionality/ Пропсы для функциональности префикса
 */
declare interface PrefixProps {
    /** Prefix text or number/ Текст или число префикса */
    prefix?: string | number;
}

/**
 * Slots for prefix functionality/ Слоты для функциональности префикса
 */
declare interface PrefixSlots {
    /** Prefix slot/ Слот префикса */
    prefix?(props: any): any;
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

/**
 * Class for working with suffix.
 *
 * Класс для работы с suffix.
 */
declare class SuffixInclude {
    protected readonly props: Readonly<SuffixProps>;
    protected readonly className: string;
    protected readonly slots?: SuffixSlots | undefined;
    protected readonly skeleton?: SkeletonInclude | undefined;
    /**
     * Constructor
     * @param props input property/ входное свойство
     * @param className class name/ название класса
     * @param slots object for working with slots/ объект для работы со слотами
     * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
     */
    constructor(props: Readonly<SuffixProps>, className: string, slots?: SuffixSlots | undefined, skeleton?: SkeletonInclude | undefined);
    /**
     * Returns true if suffix is filled
     *
     * Возвращает true, если suffix заполнен
     */
    readonly is: ComputedRef<boolean>;
    /**
     * Renders suffix element with content from props or slots.
     *
     * Отображает элемент suffix с содержимым из props или slots.
     */
    render(): VNode[];
}

/**
 * Props for suffix functionality/ Пропсы для функциональности суффикса
 */
declare interface SuffixProps {
    /** Suffix text or number/ Текст или число суффикса */
    suffix?: string | number;
}

/**
 * Slots for suffix functionality/ Слоты для функциональности суффикса
 */
declare interface SuffixSlots {
    /** Suffix slot/ Слот суффикса */
    suffix?(props: any): any;
}

export { }

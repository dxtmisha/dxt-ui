import { ComputedRef } from 'vue';
import { ConstrBind } from '@dxtmisha/functional';
import { ConstrClass } from '@dxtmisha/functional';
import { ConstrEmit } from '@dxtmisha/functional';
import { ConstrOptions } from '@dxtmisha/functional';
import { ConstrStyles } from '@dxtmisha/functional';
import { DesignComp } from '@dxtmisha/functional';
import { DesignComponents } from '@dxtmisha/functional';
import { DesignConstructorAbstract } from '@dxtmisha/functional';
import { GeoDate } from '@dxtmisha/functional';
import { ListRecord } from '@dxtmisha/functional';
import { NumberOrString } from '@dxtmisha/functional';
import { Ref } from 'vue';
import { RefOrNormal } from '@dxtmisha/functional';
import { RefType } from '@dxtmisha/functional';
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
export declare const defaultsInput: {
    type: string;
    autocomplete: string;
    arrow: string;
    maskVisible: boolean;
};

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
 * All possible field properties combined/
 * Все возможные свойства поля в одном интерфейсе
 */
declare interface FieldAllProps<Value = any> extends FieldInputProps<Value>, FieldInputFileProps<Value>, FieldInputCheckProps<Value>, FieldTextareaProps<Value>, FieldSelectProps<Value> {
}

/**
 * Class for working with input arrows.
 *
 * Класс для работы со стрелками ввода.
 */
declare class FieldArrowInclude {
    protected readonly props: FieldAllProps;
    protected readonly value: FieldValueInclude;
    protected readonly type?: FieldTypeInclude | undefined;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param value object for working with values/ объект для работы со значениями
     * @param type object for working with input type/ объект для работы с типом ввода
     */
    constructor(props: FieldAllProps, value: FieldValueInclude, type?: FieldTypeInclude | undefined);
    /**
     * Indicates if arrows are enabled/ Указывает, включены ли стрелки
     *
     * @return true if arrows are enabled/ true, если стрелки включены
     */
    readonly is: ComputedRef<boolean>;
    /** Indicates if the previous button is disabled/ Указывает, отключена ли кнопка предыдущего */
    readonly disabledPrevious: ComputedRef<boolean>;
    /** Indicates if the next button is disabled/ Указывает, отключена ли кнопка следующего */
    readonly disabledNext: ComputedRef<boolean>;
    /** Returns the change step/ Возвращает шаг изменения */
    protected readonly step: ComputedRef<number>;
    /** Returns the minimum value/ Возвращает минимальное значение */
    protected readonly min: ComputedRef<number | undefined>;
    /** Returns the maximum value/ Возвращает максимальное значение */
    protected readonly max: ComputedRef<number | undefined>;
    /**
     * Checks if the arrow type is carousel.
     *
     * Проверяет, является ли тип стрелок carousel.
     */
    isCarousel(): boolean;
    /**
     * Checks if the arrow type is stepper.
     *
     * Проверяет, является ли тип стрелок stepper.
     */
    isStepper(): boolean;
    /**
     * Checks if it is possible to decrease the value.
     *
     * Проверяет, можно ли уменьшить значение.
     * @param value values for checking/ значения для проверки
     */
    isPrevious(value: number): boolean;
    /**
     * Checks if it is possible to increase the value.
     *
     * Проверяет, можно ли увеличить значение.
     * @param value values for checking/ значения для проверки
     */
    isNext(value: number): boolean;
    /**
     * Returns arrow type.
     *
     * Возвращает тип стрелок.
     */
    get(): FieldArrowProps['arrow'] | undefined;
    /**
     * Returns arrow alignment.
     *
     * Возвращает выравнивание стрелок.
     */
    align(): string | undefined;
    /**
     * Decreases the value.
     *
     * Уменьшает значение.
     */
    previous(): this;
    /**
     * Increases the value.
     *
     * Увеличивает значение.
     */
    next(): this;
    /**
     * Decreases to the minimum value.
     *
     * Уменьшает до минимального значения.
     */
    toMin(): this;
    /**
     * Increases to the maximum value.
     * s
     * Увеличивает до максимального значения.
     */
    toMax(): this;
}

/**
 * Input arrow controls (for type="number")/
 * Управление стрелками ввода (для type="number")
 */
declare interface FieldArrowProps {
    /** Arrow type/ Тип стрелок */
    arrow?: 'auto' | 'carousel' | 'stepper' | 'none';
    /** Step size for input arrows (type="number" only)/ Шаг для стрелок ввода (только для type="number") */
    arrowStep?: NumberOrString;
    /** Arrow alignment/ Выравнивание стрелок */
    arrowAlign?: 'center' | 'right' | 'left';
}

/**
 * Class for working with input elements.
 *
 * Класс для работы с элементами ввода.
 */
declare class FieldAttributesInclude {
    protected readonly props: FieldAllProps;
    protected readonly type?: FieldTypeInclude | undefined;
    protected readonly pattern?: FieldPatternInclude | undefined;
    protected readonly inputMode?: FieldInputModeInclude | undefined;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param type object for working with input type/ объект для работы с типом ввода
     * @param pattern object for working with checks by regular expressions/
     * объект для работы с проверкой по регулярным выражениям
     * @param inputMode object for working with the keyboard/ объект для работы с клавиатурой
     */
    constructor(props: FieldAllProps, type?: FieldTypeInclude | undefined, pattern?: FieldPatternInclude | undefined, inputMode?: FieldInputModeInclude | undefined);
    /** Returns data for verification/ Возвращает данные для проверки */
    readonly list: ComputedRef<Record<string, any>>;
    /** Returns data for verification/ Возвращает данные для проверки */
    readonly listForCheck: ComputedRef<Record<string, any>>;
    /** Returns data for the input element/ Возвращает данные для элемента ввода */
    readonly listForInput: ComputedRef<Record<string, any>>;
    /**
     * Returns the list of attributes to be set on the input element.
     *
     * Возвращает список атрибутов, которые нужно установить на элемент ввода.
     */
    protected getAttributes(): (keyof typeof FieldAttributesInclude.props)[];
    /**
     * Returns the list of attributes to be set on the input element.
     *
     * Возвращает список атрибутов, которые нужно установить на элемент ввода.
     */
    protected getInputAttributes(): (keyof typeof FieldAttributesInclude.props)[];
    /**
     * Returns data for the specified attributes.
     *
     * Возвращает данные для указанных атрибутов.
     * @param attributes list of attributes/ список атрибутов
     */
    protected getData(attributes: (keyof typeof FieldAttributesInclude.props)[]): Record<string, any>;
}

/**
 * Emitted events for field components/
 * Эмитируемые события для компонентов поля
 */
declare type FieldBasicEmits<T = string> = ModelEmits & {
    /**
     * Emitted on input events (every change while typing)/
     * Эмит при вводе (каждое изменение): [event, value]
     */
    input: [event: InputEvent | Event, value: FieldValidationItem<T>];
    /**
     * Lightweight input emit without DOM event/
     * Лёгкий эмит ввода без DOM-события: [value]
     */
    inputLite: [value: FieldValidationItem<T>];
    /**
     * Emitted when value is committed (blur/confirm)/
     * Эмит при подтверждении значения (blur/confirm): [event, value]
     */
    change: [event: InputEvent | Event, value: FieldValidationItem<T>];
    /**
     * Lightweight change emit without DOM event/
     * Лёгкий эмит подтверждения без события: [value]
     */
    changeLite: [value: FieldValidationItem<T>];
};

declare type FieldBasicExpose<T = string> = {
    value: ShallowRef<T | undefined>;
    checkValidity: () => boolean;
    validationMessage: ComputedRef<string>;
};

/**
 * Basic HTML input attributes without value-length specifics/
 * Базовые HTML атрибуты инпута без ограничений длины и multiple
 */
declare interface FieldBasicProps<Value = any> extends Omit<FieldValueProps<Value>, 'multiple' | 'maxlength'> {
    /** Input type/ Тип инпута */
    type?: 'text' | 'search' | 'number' | 'number-format' | 'currency' | 'email' | 'password' | 'datetime' | 'date' | 'year-month' | 'time' | 'hour-minute' | 'tel' | 'url' | 'checkbox' | 'radio';
    /** Input name attribute/ Атрибут name */
    name?: string;
    /** Input id attribute/ Атрибут id */
    id?: string | number;
    /** Required flag/ Обязательное поле */
    required?: boolean;
    /** Readonly state/ Режим только для чтения */
    readonly?: boolean;
    /** Disabled state/ Состояние отключения */
    disabled?: boolean;
    /** Autofocus flag/ Автофокус при загрузке */
    autofocus?: boolean;
    /** Tab index order/ Порядок табуляции */
    tabindex?: number;
    /** Form id this input belongs to/ ID формы, к которой относится инпут */
    form?: string;
    /** Validation error text or map of texts/ Текст ошибки валидации или карта текстов */
    validationCode?: FieldValidityCode;
    /**
     * Standard validation message (overrides default)/
     * Стандартное сообщение валидации (перекрывает дефолтное)
     */
    validationMessage?: string;
    /** Match config to compare with another field/ Конфигурация сравнения со вторым полем */
    match?: FieldMatch;
    /** Additional attributes for the input element/ Дополнительные атрибуты для элемента инпута */
    inputAttrs?: Record<string, any>;
}

/**
 * The class tracks field value change state
 *
 * Класс возвращает состояние изменения значения поля
 */
declare class FieldChangeInclude {
    /** Change state flag/ Флаг состояния изменения */
    readonly item: Ref<boolean, boolean>;
    /**
     * Constructor
     * @param props input data/ входные данные
     */
    constructor(props: FieldAllProps);
    /**
     * Returns whether value was changed
     *
     * Возвращает, было ли значение изменено
     */
    is(): boolean;
    /**
     * Sets change state
     *
     * Устанавливает состояние изменения
     * @param change new state value/ новое значение состояния
     */
    set(change: boolean): void;
    /**
     * Force mark as changed
     *
     * Принудительно помечает как изменённое
     */
    to(): void;
}

/** Base data for validation check/ Базовые данные проверки */
declare type FieldCheckMain = {
    /** Group key/ Ключ группы */
    group?: string;
    /** Related input element/ Связанный элемент ввода */
    input?: FieldElementDom;
    /** Pattern used/ Используемый шаблон */
    pattern?: FieldPatternItemOrFunction;
};

/**
 * Class for processing standard error text
 *
 * Класс для обработки стандартного текста ошибки
 */
declare class FieldCodeInclude {
    protected readonly props: FieldAllProps;
    /**
     * Constructor
     * @param props input data/ входные данные
     */
    constructor(props: FieldAllProps);
    /**
     * Returns error text
     *
     * Возвращает текст ошибки
     * @param state object with validity state/ объект с данными валидности
     */
    get(state?: ValidityState): string | undefined;
    /**
     * Returns error key (first matched)
     *
     * Возвращает ключ ошибки (первый найденный)
     * @param state object with validity state/ объект с данными валидности
     */
    protected getIndex(state: ValidityState): keyof ValidityState | undefined;
}

/**
 * Interface for describing which components need to be connected for Field work/
 * Интерфейс для описания, какие компоненты надо подключить для работы Field
 */
declare type FieldComponentInclude = {
    field: object;
};

/**
 * Control data passed to slots and subcomponents/
 * Данные управления, передаваемые в слоты и под-компоненты
 */
declare type FieldControl = {
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

/** Base input or textarea element/ Базовый элемент input или textarea */
declare type FieldElementDom = HTMLInputElement | HTMLTextAreaElement;

/**
 * Class for working with input elements.
 *
 * Класс для работы с элементами ввода.
 */
declare class FieldElementInclude {
    protected readonly props: FieldAllProps;
    protected readonly element: Ref<FieldElementInput>;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param element input element/ элемент ввода
     */
    constructor(props: FieldAllProps, element: Ref<FieldElementInput>);
    /**
     * Returns the input element.
     *
     * Возвращает элемент ввода.
     */
    get(): HTMLInputElement | undefined;
    /**
     * Returns a reference to the input element.
     *
     * Возвращает ссылку на элемент ввода.
     */
    getElement(): Ref<FieldElementInput>;
    /**
     * Search for an element by its name inside a group or by selector.
     *
     * Поиск элемента по его названию внутри группы или по селектору.
     * @param nameSelectors element name or selector /<br>название элемента или селектор
     */
    findByName(nameSelectors: string | HTMLInputElement): HTMLInputElement | undefined;
    /**
     * Clear all values to the original ones.
     *
     * Очисти все значения до оригинальных.
     */
    clear(): this;
}

/** Any supported field element (native, wrapper, record)/ Любой поддерживаемый элемент поля (нативный, обёртка, объект) */
declare type FieldElementInput = FieldElementDom | HTMLElement | Record<string, any> | undefined;

/**
 * Class for working with events.
 *
 * Класс для работы с событиями.
 */
declare class FieldEventInclude {
    protected readonly props: FieldAllProps;
    protected readonly change: FieldChangeInclude;
    protected readonly value: FieldValueInclude;
    protected readonly validation?: FieldValidationInclude | undefined;
    protected readonly emits?: ConstrEmit<FieldBasicEmits> | undefined;
    protected readonly model: ModelInclude;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param change object for working with data change label/ объект для работы с меткой об изменении данных
     * @param value object for working with values/ объект для работы со значениями
     * @param validation object for working with validity/ объект для работы с валидностью
     * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
     */
    constructor(props: FieldAllProps, change: FieldChangeInclude, value: FieldValueInclude, validation?: FieldValidationInclude | undefined, emits?: ConstrEmit<FieldBasicEmits> | undefined);
    /**
     * Events for losing focus.
     *
     * События для потери фокуса.
     */
    readonly onBlur: () => void;
    /**
     * Call of data change event.
     *
     * Вызов события изменения данных.
     * @param event event object/ объект события
     * @param data object with data/ объект с данными
     */
    readonly onInput: (event: InputEvent, data?: Record<string, any>) => void;
    /**
     * Triggering the change event after losing focus.
     *
     * Вызов события изменения после потери фокуса.
     * @param event event object/ объект события
     */
    readonly onChange: (event?: InputEvent | Event) => void;
    /**
     * Triggering the event for select change.
     *
     * Вызов события для изменения селект.
     * @param event event object/ объект события
     * @param data object with data/ объект с данными
     */
    readonly onSelect: (event: Event, data?: Record<string, any>) => void;
    /**
     * Triggering the event for changes in the checkbox.
     *
     * Вызов события для изменения в checkbox.
     * @param event event object/ объект события
     */
    readonly onChecked: (event: Event) => void;
    /**
     * Triggering the event for changes in the radio.
     *
     * Вызов события для изменения в radio.
     * @param event event object/ объект события
     */
    readonly onRadio: (event: Event) => void;
    /**
     * Triggering the event to delete all values.<br>
     * Вызов события для удаления всех значений.
     * @param event event object/ объект события
     */
    readonly onClear: (event: MouseEvent) => void;
    /**
     * Triggering the event to set a specific value.
     *
     * Вызов события для установки конкретного значения.
     * @param value new value/ новое значение
     */
    readonly onValue: (value: any) => void;
    /**
     * Triggering the event.
     *
     * Вызов события.
     * @param event event object/ объект события
     * @param type event type/ тип события
     */
    readonly on: <E>(event?: E, type?: string & keyof FieldBasicEmits) => this;
    /**
     * Checks whether additional data needs to be generated for the current event.
     *
     * Проверяет, надо ли генерировать дополнительные данные для текущего события.
     * @param type event type/ тип события
     */
    protected isValue(type: string & keyof FieldBasicEmits): boolean;
    /**
     * Checks if it is possible to change the value.
     *
     * Проверяет, возможно ли изменение значения.
     */
    protected isEnabled(): boolean;
    /**
     * Returns input data.
     *
     * Возвращает данные об вводе.
     */
    protected getData(): FieldValidationItem;
    /**
     * Returns validity data.
     *
     * Возвращает данные валидности.
     * @param type event type/ тип события
     */
    protected getValidation(type: string & keyof FieldBasicEmits): FieldValidationItem;
    /**
     * Triggering the event and change event.
     *
     * Вызов события и события изменения.
     * @param event event object/ объект события
     */
    protected onAndChange(event?: InputEvent | Event): this;
}

/**
 * The class returns data for working with the Field framework.
 *
 * Класс возвращает данные для работы с каркасом поля.
 */
declare class FieldInclude<Props extends FieldPropsInclude & FieldArrowProps = FieldPropsInclude, PropsExtra extends ConstrBind<FieldPropsBasic> = ConstrBind<FieldPropsBasic>> {
    protected readonly props: Readonly<Props>;
    protected readonly value: FieldValueInclude;
    protected readonly components?: DesignComponents<FieldComponentInclude, Props> | undefined;
    protected readonly event?: FieldEventInclude | undefined;
    protected readonly arrow?: FieldArrowInclude | undefined;
    protected readonly onIcon?: (() => void) | undefined;
    protected readonly onTrailing?: (() => void) | undefined;
    protected readonly onNext?: (() => void) | undefined;
    protected readonly onPrevious?: (() => void) | undefined;
    protected readonly extra?: RefOrNormal<PropsExtra> | undefined;
    protected readonly index?: string | undefined;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param value object for working with values/ объект для работы со значениями
     * @param components object for working with components/ объект для работы с компонентами
     * @param event object for working with events/ объект для работы с событиями
     * @param arrow object for working with arrows/ объект для работы со стрелками
     * @param onIcon Collection icon click handler/ Обработчик клика по иконке коллекции
     * @param onTrailing Trailing icon click handler/ Обработчик клика по иконке трейлинга
     * @param onNext Next arrow click handler/ Обработчик клика по следующей стрелке
     * @param onPrevious Previous arrow click handler/ Обработчик клика по предыдущей стрелке
     * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
     * @param index index identifier/ идентификатор индекса
     */
    constructor(props: Readonly<Props>, value: FieldValueInclude, components?: DesignComponents<FieldComponentInclude, Props> | undefined, event?: FieldEventInclude | undefined, arrow?: FieldArrowInclude | undefined, onIcon?: (() => void) | undefined, onTrailing?: (() => void) | undefined, onNext?: (() => void) | undefined, onPrevious?: (() => void) | undefined, extra?: RefOrNormal<PropsExtra> | undefined, index?: string | undefined);
    /** Returns properties for the field framework/ Возвращает свойства для каркаса поля */
    readonly binds: ComputedRef<PropsExtra>;
    /**
     * Returns properties for working with the value of the Field framework/
     * Возвращает свойства для работы со значением каркаса поля
     */
    readonly valueBinds: ComputedRef<ConstrBind<PropsExtra>>;
    /**
     * Renders the Field framework.
     *
     * Отрисовывает каркас поля.
     * @param slotsChildren
     * @param attrs
     */
    readonly render: (slotsChildren?: FieldSlots, attrs?: Record<string, any>) => VNode[];
    /**
     * Method for listening to events.
     *
     * Метод для прослушивания событий.
     * @param event event object/ объект события
     * @param type type of the object that was clicked/ тип объекта, который был нажат
     */
    protected readonly on: (event: MouseEvent, { type }: EventClickValue) => void;
}

/**
 * The class creates hidden input and runs native validation for pattern
 *
 * Класс создаёт скрытый input и выполняет нативную валидацию по паттерну
 */
declare class FieldInputCheckInclude<Value = any> {
    readonly pattern: FieldPatternItemOrFunction;
    readonly group: string;
    protected readonly code?: FieldCodeInclude | undefined;
    /** Hidden input element for native validation/ Скрытый input для нативной валидации */
    readonly input: HTMLInputElement | undefined;
    /**
     * Constructor
     * @param pattern property for verification/ свойство для проверки
     * @param group group name/ название группы
     * @param code object for error codes/ объект для работы с кодами ошибок
     */
    constructor(pattern: FieldPatternItemOrFunction, group?: string, code?: FieldCodeInclude | undefined);
    /**
     * Runs validation and returns result
     *
     * Выполняет проверку и возвращает результат
     */
    check(value: Value): FieldValidationItem;
    /**
     * Runs validation by input and returns result
     *
     * Выполняет проверку по инпуту и возвращает результат
     * @param input input element/ элемент инпута
     */
    checkByInput(input: FieldElementDom): FieldValidationItem;
    /**
     * Returns attributes for internal input
     *
     * Возвращает атрибуты для внутреннего инпута
     */
    protected getAttributes(): FieldPatternElement;
    /**
     * Returns the default group name
     *
     * Возвращает название группы по умолчанию
     */
    static getGroupDefault(): string;
}

/**
 * Props for checkbox & radio inputs (excluding type field)/
 * Свойства для инпутов checkbox и radio (без поля type)
 */
declare interface FieldInputCheckProps<Value = any> extends Omit<FieldBasicProps<Value>, 'type'>, FieldUxProps {
    /** Checked state/ Состояние выбора */
    checked?: boolean;
    /** Indeterminate visual state (checkbox only)/ Промежуточное визуальное состояние (только для checkbox) */
    indeterminate?: boolean;
}

/**
 * Props for file input elements (type="file")/
 * Свойства для инпутов выбора файлов (type="file")
 */
declare interface FieldInputFileProps<Value = any> extends Omit<FieldBasicProps<Value>, 'type'>, FieldLengthProps, FieldUxProps {
    /** Multiple files selection flag/ Флаг выбора нескольких файлов */
    multiple?: boolean;
    /** Accept file types list (MIME, extensions)/ Список допустимых типов (MIME, расширения) */
    accept?: string;
    /** Capture mode for media input (mobile)/ Режим захвата для медиа (мобильные устройства) */
    capture?: string | boolean;
}

/**
 * Class for getting the type of displayed keyboard.
 *
 * Класс для получения типа отображаемой клавиатуры.
 */
declare class FieldInputModeInclude {
    protected readonly props: FieldAllProps;
    protected readonly type: FieldTypeInclude;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param type object for working with input type/ объект для работы с типом ввода
     */
    constructor(props: FieldAllProps, type: FieldTypeInclude);
    /** Returns the keyboard name/ Возвращает название клавиатуры */
    readonly item: ComputedRef<string | undefined>;
}

/**
 * Composite props for standard textual / numeric inputs/
 * Составные свойства стандартных текстовых / числовых инпутов
 */
declare interface FieldInputProps<Value = any> extends FieldBasicProps<Value>, FieldStepProps, FieldArrowProps, FieldLengthProps, FieldPatternProps, FieldUxProps {
    /** Datalist id reference/ Ссылка на datalist */
    list?: string;
    iconVisibility?: string;
    iconVisibilityOff?: string;
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
 * Text length constraints (characters, items)/
 * Ограничения длины текста (символы, элементы)
 */
declare interface FieldLengthProps {
    /** Minimum length/ Минимальная длина */
    minlength?: NumberOrString;
    /** Maximum length/ Максимальная длина */
    maxlength?: NumberOrString;
}

/** Single mask fragment meta/ Один фрагмент маски с мета‑данными */
declare type FieldMaskItem = {
    /** Group key/ Ключ группы */
    group: string;
    /** Accumulated value/ Накопленное значение */
    value: string;
    /** Max length for fragment/ Максимальная длина фрагмента */
    maxLength: number;
    /** Fragment filled flag/ Фрагмент заполнен */
    full: boolean;
    /** Caret end flag/ Флаг конца ввода */
    end: boolean;
    /** Characters extracted from value (value split into array)/ Символы извлечённые из value (value разделено на массив символов) */
    chars: string[];
};

/** Masks data split by groups/ Данные маски, разделённые на группы */
declare type FieldMasks = Record<string, FieldMaskItem>;

/** Match definition (string | element | object)/ Описание совпадения (строка | элемент | объект) */
declare type FieldMatch = string | HTMLInputElement | FieldMatchItem;

/**
 * Class for checking input value matching with another element
 *
 * Класс для проверки совпадения вводимого значения с другим элементом
 */
declare class FieldMatchInclude {
    protected readonly props: FieldAllProps;
    protected readonly element: FieldElementInclude;
    protected readonly value: FieldValueInclude;
    protected readonly text?: TextInclude | undefined;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param element object for working with input element/ объект для работы с элементом ввода
     * @param value object for working with value/ объект для работы со значениями
     * @param text object for working with texts/ объект для работы с текстами
     */
    constructor(props: FieldAllProps, element: FieldElementInclude, value: FieldValueInclude, text?: TextInclude | undefined);
    /**
     * Checks whether matching verification is enabled
     *
     * Проверяет, включена ли проверка совпадения
     */
    is(): boolean;
    /**
     * Returns selector used to find external element
     *
     * Возвращает селектор для поиска внешнего элемента
     */
    getSelectors(): string | HTMLInputElement | undefined;
    /**
     * Returns validation error text
     *
     * Возвращает текст ошибки валидации
     */
    getValidationMessage(): string;
    /**
     * Checks value against external element
     *
     * Проверяет совпадение значения с внешним элементом
     */
    check(): FieldValidationItem | undefined;
}

/** Match config object/ Объект конфигурации совпадения */
declare type FieldMatchItem = {
    /** Target name or element/ Имя цели или элемент */
    name?: string | HTMLInputElement;
    /** Custom validation message/ Кастомное сообщение ошибки */
    validationMessage?: string;
};

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

/** Partial input element for pattern/ Частичный элемент для pattern */
declare type FieldPatternElement = Partial<HTMLInputElement>;

/**
 * Class for working with checks by regular expressions.
 *
 * Класс для работы с проверкой по регулярным выражениям.
 */
declare class FieldPatternInclude {
    protected readonly props: FieldAllProps;
    protected readonly type?: FieldTypeInclude | undefined;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param type object for working with input type/ объект для работы с типом ввода
     */
    constructor(props: FieldAllProps, type?: FieldTypeInclude | undefined);
    /** Returns regular expressions/ Возвращает регулярные выражения */
    readonly item: ComputedRef<string | undefined>;
}

/** Pattern string or element/ Строка шаблона или элемент */
declare type FieldPatternItem = string | FieldPatternElement;

/** Pattern or factory function/ Шаблон или функция‑генератор */
declare type FieldPatternItemOrFunction = FieldPatternItem | ((item: FieldMasks) => FieldPatternItem);

/**
 * Validation pattern attribute/
 * Атрибут паттерна валидации
 */
declare interface FieldPatternProps {
    /** Validation pattern (regexp)/ Паттерн валидации (рег. выражение) */
    pattern?: string;
}

declare interface FieldPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> extends IconTrailingPropsInclude<Icon>, PrefixProps, SuffixProps, CaptionProps, FieldLabelPropsInclude<FieldLabel, FieldCounter>, FieldMessagePropsInclude<FieldMessage, FieldCounter>, ProgressPropsInclude<Progress>, EnabledProps, EventClickProps, SkeletonPropsInclude {
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
declare interface FieldPropsInclude<Icon extends IconPropsBasic = IconPropsBasic, Field extends FieldPropsBasic = FieldPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> extends Omit<FieldPropsBasic<Icon, FieldLabel, FieldMessage, FieldCounter, Progress>, 'disabledPrevious' | 'disabledNext' | 'to' | 'value' | 'maxlength' | 'cancelShow' | 'counter' | 'counterTemplate' | 'counterTop' | 'iconArrowLeft' | 'iconArrowRight' | 'iconPlus' | 'iconMinus' | 'iconClose'> {
    focus?: boolean;
    selected?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    align?: 'center' | 'right' | 'left';
    cancel?: 'auto' | 'always' | 'none';
    fieldAttrs?: ConstrBind<Field>;
}

/**
 * Props for select elements (single & multiple)/
 * Свойства для select элементов (одиночный и множественный выбор)
 */
declare interface FieldSelectProps<Value = any> extends Omit<FieldBasicProps<Value>, 'type'>, Omit<FieldStepProps, 'min' | 'step'>, FieldArrowProps, FieldUxProps {
    option?: ListRecord;
    /** Multiple selection mode/ Режим множественного выбора */
    multiple?: boolean;
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
declare interface FieldSlots extends CaptionSlots, PrefixSlots, SuffixSlots, FieldLabelSlotsInclude {
    leading?(props: FieldControl): any;
    trailing?(props: FieldControl): any;
    default?(props: FieldControl): any;
}

/**
 * Type describing available slots for Field/
 * Тип, описывающий доступные слоты для Field
 */
declare interface FieldSlotsInclude extends Omit<FieldSlots, 'default'> {
}

/**
 * Numeric stepping and range constraints/
 * Ограничения шага и диапазона числовых значений
 */
declare interface FieldStepProps {
    /** Step size for numeric inputs/ Шаг для числовых инпутов */
    step?: NumberOrString;
    /** Minimum value/ Минимальное значение */
    min?: NumberOrString;
    /** Maximum value/ Максимальное значение */
    max?: NumberOrString;
}

/**
 * Props for textarea elements with sizing & wrapping/
 * Свойства для textarea с поддержкой размеров и переноса
 */
declare interface FieldTextareaProps<Value = any> extends Omit<FieldBasicProps<Value>, 'type'>, FieldLengthProps, FieldUxProps {
    /** Number of visible text lines/ Количество видимых строк */
    rows?: NumberOrString;
    /** Number of visible columns/ Количество видимых колонок */
    cols?: NumberOrString;
    /** Text wrapping mode/ Режим переноса текста */
    wrap?: 'soft' | 'hard' | 'off' | string;
    /** Automatic field sizing mode (CSS field-sizing)/ Режим автоизменения размера (CSS field-sizing) */
    fieldSizing?: 'content' | 'fixed' | string;
}

/** Supported field types/ Поддерживаемые типы полей */
declare type FieldType = 'text' | 'search' | 'number' | 'number-format' | 'currency' | 'email' | 'password' | 'datetime' | 'date' | 'year-month' | 'time' | 'hour-minute' | 'tel' | 'url' | 'checkbox' | 'radio';

/**
 * Class for working with the input type.
 *
 * Класс для работы с типом ввода.
 */
declare class FieldTypeInclude {
    protected readonly props: FieldAllProps;
    protected readonly visibility?: FieldVisibilityInclude | undefined;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param visibility object for working with visualization/ объект для работы с визуализацией
     */
    constructor(props: FieldAllProps, visibility?: FieldVisibilityInclude | undefined);
    /** Returns the input type/ Возвращает тип ввода */
    readonly item: ComputedRef<FieldType>;
    /**
     * Returns the input type.
     *
     * Возвращает тип ввода.
     */
    get(): FieldType;
}

/**
 * UX input control attributes/
 * Атрибуты управления UX вводом
 */
declare interface FieldUxProps {
    /** Autocomplete hint/ Подсказка автозаполнения */
    autocomplete?: string;
    /** Auto capitalization mode/ Режим авто-капитализации */
    autocapitalize?: 'off' | 'none' | 'sentences' | 'words' | 'characters' | string;
    /** Input mode hint (virtual keyboard)/ Подсказка режима ввода (виртуальная клавиатура) */
    inputMode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url' | string;
    /** Enter key hint/ Подсказка для клавиши Enter */
    enterKeyHint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send' | string;
    /** Spellcheck flag/ Проверка орфографии */
    spellcheck?: boolean | 'true' | 'false';
    /** Autocorrect mode (iOS/Safari)/ Режим автокоррекции (iOS/Safari) */
    autocorrect?: 'on' | 'off' | string;
}

/**
 * Class for working with validity
 *
 * Класс для работы с валидностью
 */
declare class FieldValidationInclude {
    protected readonly props: FieldAllProps;
    protected readonly attributes: FieldAttributesInclude;
    protected readonly value: FieldValueInclude;
    protected readonly change?: FieldChangeInclude | undefined;
    protected readonly code?: FieldCodeInclude | undefined;
    protected readonly match?: FieldMatchInclude | undefined;
    /** Internal validation state/ Внутреннее состояние валидации */
    protected readonly validation: Ref<FieldValidationItem | undefined, FieldValidationItem | undefined>;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param attributes object for working with input attributes/ объект для работы с атрибутами ввода
     * @param value object for value work/ объект для работы со значениями
     * @param change object for change state/ объект для состояния изменения
     * @param code object for error codes/ объект для работы с кодами ошибок
     * @param match object for match checking/ объект для проверки совпадений
     */
    constructor(props: FieldAllProps, attributes: FieldAttributesInclude, value: FieldValueInclude, change?: FieldChangeInclude | undefined, code?: FieldCodeInclude | undefined, match?: FieldMatchInclude | undefined);
    /** Hidden input element for native validation/ Скрытый input для нативной валидации */
    protected readonly input: ComputedRef<FieldInputCheckInclude<any>>;
    /** Returns error data/ Возвращает данные об ошибке */
    readonly item: ComputedRef<FieldValidationItem>;
    /** Returns error string/ Возвращает строку об ошибке */
    readonly message: ComputedRef<string>;
    /**
     * Checks if there is an error
     *
     * Проверяет, есть ли ошибка
     */
    isError(): boolean;
    /**
     * Checks whether the element has constraints and satisfies them
     *
     * Проверяет, имеет ли элемент ограничения и удовлетворяет ли им
     */
    readonly checkValidity: () => boolean;
    /**
     * Changes the validity data
     *
     * Изменяет данные о валидности
     * @param validation values for validity/ значения для валидности
     */
    set(validation: Record<string, any> | FieldValidationItem): this;
    /**
     * Returns an empty validation item
     *
     * Возвращает пустой элемент валидации
     */
    protected getValidationItemNone(): FieldValidationItem;
    /**
     * Check for global data
     *
     * Проверка для глобальных данных
     */
    protected checkGlobal(): FieldValidationItem | undefined;
    /**
     * Check for selected data
     *
     * Проверка для выбранных данных
     */
    protected checkItem(): FieldValidationItem | undefined;
    /**
     * Checks the value using hidden input element
     * @param value value to check/ значение для проверки
     *
     * Проверяет значение с помощью скрытого input
     */
    protected checkByInput(value: any): FieldValidationItem;
}

/** Single validation result/ Результат одной проверки */
declare type FieldValidationItem<Value = any> = FieldCheckMain & {
    /** Custom type marker/ Произвольный тип */
    type?: string;
    /** Pass status/ Статус успешности */
    status?: boolean;
    /** Required flag/ Флаг обязательности */
    required?: boolean;
    /** Full value flag/ Флаг полноты значения */
    isFull?: boolean;
    /** Message text/ Текст сообщения */
    validationMessage?: string;
    /** Native validity state/ Нативное состояние валидности */
    validity?: ValidityState;
    /** Custom validity message (overrides native)/ Кастомное сообщение валидности (перекрывает нативное) */
    validityMessage?: string;
    /** Original value/ Исходное значение */
    value: Value;
    /** Raw input value/ Введённое значение */
    valueInput?: Value;
    /** Extra details/ Дополнительные данные */
    detail?: Record<string, any>;
};

/** Global validation message or map/ Глобальное сообщение или карта сообщений */
declare type FieldValidityCode = string | FieldValidityCodeItem;

/** Map validity flags to custom messages/ Отображение флагов валидности в кастомные сообщения */
declare type FieldValidityCodeItem = {
    [K in keyof ValidityState]?: string;
};

/**
 * Class for working with input values.
 *
 * Класс для работы со значениями инпута.
 */
declare class FieldValueInclude<Value = any> {
    protected readonly props: FieldValueProps<Value>;
    protected readonly refs: ToRefs<FieldValueProps<Value>>;
    protected readonly element?: FieldElementInclude | undefined;
    protected readonly original?: RefOrNormal<Value> | undefined;
    /** Current value/ Текущее значение */
    readonly item: Ref<Value | undefined, Value | undefined>;
    /** Indicates if the value is complete/ Указывает, полное ли значение */
    readonly isFull: Ref<boolean, boolean>;
    /** Indicates if there are temporary values/ Указывает, есть ли временные значения */
    protected readonly hasEdit: Ref<boolean, boolean>;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param refs input data in the form of reactive elements /<br>входные данные в виде реактивных элементов
     * @param element object for working with the input element /<br>объект для работы с элементом ввода
     * @param original original values /<br>оригинальные значения
     */
    constructor(props: FieldValueProps<Value>, refs: ToRefs<FieldValueProps<Value>>, element?: FieldElementInclude | undefined, original?: RefOrNormal<Value> | undefined);
    /** Checks if there are values or temporary values/ Проверяет, есть ли значения или временные значения */
    readonly is: ComputedRef<boolean>;
    /** Checks if there are any values/ Проверяет, есть ли значения */
    readonly isValue: ComputedRef<boolean>;
    /** Returns the current value if isFull is true/ Возвращает текущее значение, если isFull истинно */
    readonly itemByFull: ComputedRef<Value | undefined>;
    /**
     * Returns the current value, converted to a number/
     * Возвращает текущее значение, преобразованное в номер
     */
    readonly number: ComputedRef<number>;
    /** Returns the current value of type string/ Возвращает текущее значение типа string */
    readonly string: ComputedRef<string>;
    /** Returns the current value of type boolean/ Возвращает текущее значение типа boolean */
    readonly boolean: ComputedRef<boolean>;
    /** Returns the length of the entered value/ Возвращает длину введенного значения */
    readonly length: ComputedRef<number>;
    /**
     * Returns the current value.
     *
     * Возвращает текущее значение.
     */
    get(): Value | undefined;
    /**
     * Returns the current value as an array.
     *
     * Возвращает текущее значение в виде массива.
     */
    getToArray(): Value[];
    /**
     * Changes the value.
     *
     * Изменяет значение.
     * @param value changeable value/ изменяемое значение
     */
    set(value: any): this;
    /**
     * Changes the values by the selected element.
     *
     * Изменяет значения по выбранному элементу.
     * @param event event object/ объект события
     */
    setByEvent(event: Event): this;
    setByEvent(value: Record<string, any>): this;
    setByEvent(value: any): this;
    /**
     * Changes the values by the selected element.
     *
     * Изменяет значения по выбранному элементу.
     * @param target selected elements/ выбранные элементы
     */
    setByTarget(target: HTMLInputElement): this;
    /**
     * Changes the value by the checked property.
     *
     * Изменяет значение по свойству checked.
     * @param event event value/ значение события
     */
    setByChecked(event: Event): this;
    /**
     * Changes the value for radio type.
     *
     * Изменяет значение для типа radio.
     * @param event event object/ объект события
     */
    setByRadio(event: Event): this;
    /**
     * Sets the isFull value.
     *
     * Устанавливает значение isFull.
     * @param isFull isFull value/ значение isFull
     */
    setFull(isFull: boolean): void;
    /**
     * Sets the hasEdit value.
     *
     * Устанавливает значение hasEdit.
     * @param hasEdit hasEdit value/ значение hasEdit
     */
    setHasEdit(hasEdit: boolean): void;
    /**
     * Sets the value to the original one.
     *
     * Устанавливает значение на оригинальное.
     */
    setToOriginal(): this;
    /**
     * Clear all values to the original ones.
     *
     * Очисти все значения до оригинальных.
     */
    clear(): this;
    /**
     * Is the selected type a checkbox.
     *
     * Является ли выбранный тип чекбокс.
     * @param target selected elements/ выбранные элементы
     */
    protected isCheckbox(target: HTMLInputElement): boolean;
    /**
     * Checks if the value has actually been changed.
     *
     * Проверяет, было ли значение действительно изменено.
     * @param value value to check/ значение для проверки
     */
    protected isDifference(value?: any): boolean;
    /**
     * Returns the original value.
     *
     * Возвращает оригинальное значение.
     */
    protected getOriginal(): any;
    /**
     * Changes the values to the original ones.
     *
     * Изменяет значения на оригинальные.
     */
    protected readonly update: () => void;
    /**
     * Checks if the value is being edited.
     *
     * Проверяет, редактируется ли значение.
     * @param value value to check/ значение для проверки
     */
    protected isEdit(value?: Value): boolean;
}

/**
 * Properties that describe the value and its handling/
 * Свойства, описывающие значение и работу с ним
 *
 * Used by the ValueInclude class to read/write value and constraints/
 * Используется классом ValueInclude для чтения/записи значения и ограничений
 */
declare interface FieldValueProps<Value = any> extends ModelProps<Value> {
    /** Placeholder text shown when value is empty/ Текст подсказки при пустом значении */
    placeholder?: string;
    /** Multiple selection/value mode/ Режим множественного значения/выбора */
    multiple?: boolean;
    /** Maximum allowed length for value/ Максимальная допустимая длина значения */
    maxlength?: NumberOrString;
    /** Controlled value (without v-model)/ Контролируемое значение (без v-model) */
    value?: Value;
    /** Additional event details/ Дополнительные детали события */
    detail?: Record<string, any> | undefined;
}

/**
 * Class for working with data visualization. This is for working with the password type.
 *
 * Класс для работы с визуализацией данных. Это для работы с типом пароля.
 */
declare class FieldVisibilityInclude {
    readonly item: Ref<boolean, boolean>;
    /**
     * Toggles the values.
     *
     * Переключает значения.
     */
    toggle(): this;
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
 * Input
 */
export declare class Input {
    protected readonly props: InputProps;
    protected readonly refs: ToRefs<InputProps>;
    protected readonly element: Ref<FieldElementInput>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<InputComponents, InputProps> | undefined;
    protected readonly slots?: InputSlots | undefined;
    protected readonly emits?: ConstrEmit<InputEmits> | undefined;
    readonly visibility: FieldVisibilityInclude;
    readonly type: FieldTypeInclude;
    readonly pattern: FieldPatternInclude;
    readonly inputMode: FieldInputModeInclude;
    readonly attributes: FieldAttributesInclude;
    readonly elementItem: FieldElementInclude;
    readonly change: FieldChangeInclude;
    readonly value: FieldValueInclude;
    readonly arrow: FieldArrowInclude;
    readonly password: InputPassword;
    readonly match: FieldMatchInclude;
    readonly code: FieldCodeInclude;
    readonly validation: FieldValidationInclude;
    readonly event: FieldEventInclude;
    readonly field: FieldInclude;
    readonly mask: MaskInclude;
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
    constructor(props: InputProps, refs: ToRefs<InputProps>, element: Ref<FieldElementInput>, classDesign: string, className: string, components?: DesignComp<InputComponents, InputProps> | undefined, slots?: InputSlots | undefined, emits?: ConstrEmit<InputEmits> | undefined);
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export declare type InputClasses = {
    main: ConstrClass;
};

export declare type InputComponentInclude = {
    input?: object;
};

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export declare type InputComponents = MaskComponentInclude & FieldComponentInclude;

/**
 * InputDesign
 */
export declare class InputDesign<COMP extends InputComponents, EXPOSE extends InputExpose, CLASSES extends InputClasses, P extends InputPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, InputEmits, EXPOSE, InputSlots, CLASSES, P> {
    protected readonly item: Input;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, InputEmits, P>);
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
     * Rendering the input element.
     *
     * Рендер элемент input.
     * @param input data for the input element/ данные для элемента ввода
     */
    protected readonly renderInput: (input: FieldControl) => VNode[];
    /**
     * Rendering mask element.
     *
     * Рендеринг элемента маски.
     * @param input data for the input element/ данные для элемента ввода
     */
    protected readonly renderMask: (input: FieldControl) => VNode[];
}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export declare type InputEmits = FieldBasicEmits;

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export declare interface InputExpose extends FieldBasicExpose {
}

/**
 * Class for retrieving data to manage the password type.
 *
 * Класс для получения данных для управления типом пароля.
 */
declare class InputPassword {
    protected readonly props: InputProps;
    protected readonly visibility: FieldVisibilityInclude;
    protected visible: boolean;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param visibility object for working with visualization/ объект для работы с визуализацией
     */
    constructor(props: InputProps, visibility: FieldVisibilityInclude);
    /** Checks if the type is a password/ Проверяет, является ли тип паролем. */
    readonly is: ComputedRef<boolean>;
    /** Returns the icon value/ Возвращает значение иконки */
    readonly icon: ComputedRef<IconProps | undefined>;
    /**
     * Toggle value.
     *
     * Переключение значения.
     */
    toggle(): void;
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export declare interface InputProps extends InputPropsBasic, InputPropsToken {
}

export declare interface InputPropsBasic<Mask extends MaskPropsBasic = MaskPropsBasic, Icon extends IconPropsBasic = IconPropsBasic, Field extends FieldPropsBasic = FieldPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> extends MaskPropsInclude<Mask>, FieldPropsInclude<Icon, Field, FieldLabel, FieldMessage, FieldCounter, Progress>, FieldInputProps<NumberOrString> {
}

declare interface InputPropsToken {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export declare interface InputSlots extends FieldSlotsInclude {
}

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

declare type MaskComponentInclude = {
    mask?: object;
};

declare type MaskFractionItem = string | boolean | number;

/**
 * Mask management class.
 *
 * Класс управления маской.
 */
declare class MaskInclude<Props extends MaskPropsFullInclude = MaskPropsFullInclude, PropsExtra extends ConstrBind<MaskProps> = ConstrBind<MaskProps>> {
    protected readonly props: Props;
    protected readonly className: string;
    protected readonly value: FieldValueInclude;
    protected readonly valueDefault?: RefOrNormal<any> | undefined;
    protected readonly components?: DesignComponents<MaskComponentInclude, Props> | undefined;
    protected readonly type?: FieldTypeInclude | undefined;
    protected readonly extra?: RefOrNormal<PropsExtra> | undefined;
    protected readonly index?: string | undefined;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param className class name/ название класса
     * @param value object for working with values/ объект для работы со значениями
     * @param valueDefault default value/ значение по умолчанию
     * @param components object for working with components/ объект для работы с компонентами
     * @param type object for working with the input type/ объект для работы с типом ввода
     * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
     * @param index index identifier/ идентификатор индекса
     */
    constructor(props: Props, className: string, value: FieldValueInclude, valueDefault?: RefOrNormal<any> | undefined, components?: DesignComponents<MaskComponentInclude, Props> | undefined, type?: FieldTypeInclude | undefined, extra?: RefOrNormal<PropsExtra> | undefined, index?: string | undefined);
    /**
     * Checks if the mask is active.
     *
     * Проверяет, активна ли маска.
     */
    readonly is: ComputedRef<boolean>;
    /**
     * Returns the basic properties for working with a mask.
     *
     * Возвращает базовые свойства для работы с маской.
     */
    readonly bindsStatic: ComputedRef<PropsExtra>;
    /**
     * Returns all properties for working with the mask.
     *
     * Возвращает все свойства для работы с маской.
     */
    readonly binds: ComputedRef<ConstrBind<MaskProps>>;
    /**
     * Returns the rendered mask component.
     *
     * Возвращает отрендеренный компонент маски.
     * @param attrs additional attributes/ дополнительные атрибуты
     */
    readonly render: (attrs?: Record<string, any>) => VNode[];
    /**
     * Checks if the mask is active.
     *
     * Проверяет, активна ли маска.
     */
    isActive(): boolean;
}

declare type MaskList = string | string[];

declare type MaskMatchItem = RegExp | string;

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
declare interface MaskProps extends MaskPropsBasic, MaskPropsToken {
}

declare interface MaskPropsBasic {
    name?: string;
    value?: string | number;
    valueDefault?: string | number;
    currency?: string;
    currencyHide?: boolean;
    fullOnly?: boolean;
    mask?: MaskList;
    special?: MaskSpecialProp;
    match?: MaskMatchItem;
    groupSave?: boolean;
    pattern?: FieldPatternItemOrFunction;
    check?: FieldPatternItemOrFunction;
    fraction?: MaskFractionItem;
    type?: MaskTypeItem;
    view?: string;
    inputAttrs?: Partial<HTMLInputElement>;
    language?: string;
}

declare type MaskPropsFullInclude = MaskPropsInclude & FieldValueProps;

declare type MaskPropsInclude<Mask extends MaskPropsBasic = MaskPropsBasic> = {
    name?: string;
    mask?: string | ConstrBind<Mask>;
    maskVisible?: boolean;
    maskNone?: boolean;
    currency?: string;
    currencyHide?: boolean;
    fraction?: MaskFractionItem;
    maskAttrs?: ConstrBind<Mask>;
};

declare interface MaskPropsToken {
    visible?: boolean;
    visiblePartly?: boolean;
    align?: 'center' | 'left' | 'right';
    dir?: 'ltr' | 'rtl';
}

declare type MaskSpecialItem = {
    defaultValue?: string;
    rubber?: boolean;
    transitionChar?: string | string[];
    minLength?: number;
    maxLength?: number;
    match?: MaskMatchItem;
    pattern?: FieldPatternItemOrFunction;
    view?: string;
};

declare type MaskSpecialList = Record<string, MaskSpecialItem>;

declare type MaskSpecialProp = string | string[] | MaskSpecialList;

declare type MaskTypeItem = GeoDate | 'text' | 'number' | 'number-format' | 'currency';

/**
 * Event signatures for model updates/
 * Сигнатуры событий для обновления модели
 */
declare type ModelEmits<Value = string> = {
    /** Update value event/ Событие обновления значения */
    'update:value': [value: Value];
    /** Update model value event/ Событие обновления значения модели */
    'update:modelValue': [value: Value];
};

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
 * Props for model value used with v-model/
 * Свойства для значения модели, используемого с v-model
 */
declare interface ModelProps<Value = string> {
    /** Model value prop/ Свойство значения модели */
    'modelValue'?: Value;
    /** Update value handler/ Обработчик обновления значения */
    'onUpdate:value'?: (value: Value) => void;
    /** Update model value handler/ Обработчик обновления значения модели */
    'onUpdate:modelValue'?: (value: Value) => void;
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
 * Slots for suffix functionality/ Слоты для функциональности суффикса
 */
declare interface SuffixSlots {
    /** Suffix slot/ Слот суффикса */
    suffix?(props: any): any;
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

export { }

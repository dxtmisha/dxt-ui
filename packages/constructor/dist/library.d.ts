import { ComputedRef } from 'vue';
import { ConstrBind } from '@dxtmisha/functional';
import { ConstrClass } from '@dxtmisha/functional';
import { ConstrClassObject } from '@dxtmisha/functional';
import { ConstrEmit } from '@dxtmisha/functional';
import { DesignComponents } from '@dxtmisha/functional';
import { EventItem } from '@dxtmisha/functional';
import { ItemList } from '@dxtmisha/functional-basic';
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
 * ARIA props with labelledby and describedby/
 * ARIA пропсы с labelledby и describedby
 */
export declare interface AriaByPropsInclude {
    ariaLabelledby?: string;
    ariaDescribedby?: string;
}

/**
 * ARIA description prop/
 * ARIA проп description
 */
export declare interface AriaDescriptionPropsInclude {
    ariaDescription?: string;
}

/**
 * ARIA haspopup prop/
 * ARIA проп haspopup
 */
export declare interface AriaHaspopupPropsInclude {
    ariaHaspopup?: AriaList['aria-haspopup'];
}

/**
 * ARIA label prop/
 * ARIA проп label
 */
export declare interface AriaLabelPropsInclude {
    ariaLabel?: string;
}

/** ARIA list type/ ARIA тип списка */
export declare type AriaList = {
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
export declare interface AriaLivePropsInclude {
    ariaLive?: AriaList['aria-live'];
}

/**
 * ARIA role props with labelledby and describedby/
 * ARIA пропсы роли с labelledby и describedby
 */
export declare interface AriaRoleByPropsInclude extends AriaRolePropsInclude, AriaByPropsInclude {
}

/**
 * ARIA control role props with controls and expanded/
 * ARIA пропсы роли управления с controls и expanded
 */
export declare interface AriaRoleControlPropsInclude extends AriaRolePropsInclude, AriaHaspopupPropsInclude {
    id?: string;
    ariaControls?: string;
    ariaHaspopup?: AriaList['aria-haspopup'];
    ariaExpanded?: string;
}

/** Basic ARIA role props/ Базовые ARIA пропсы роли */
export declare interface AriaRolePropsInclude {
    role?: RoleType;
}

/**
 * The class returns static ARIA attributes.
 *
 * Класс возвращает статические ARIA атрибуты.
 */
export declare class AriaStaticInclude {
    /**
     * Get role by props.
     *
     * Получить роль по пропсам.
     * @param role ARIA role type/ Тип ARIA роли
     */
    static role(role?: RoleType): AriaList;
    /**
     * Get ARIA atomic attribute.
     *
     * Получить атрибут ARIA atomic.
     * @param isAtomic is atomic/ является атомарным
     */
    static atomic(isAtomic?: boolean): AriaList;
    /**
     * Get ARIA checked attribute.
     *
     * Получить атрибут ARIA checked.
     * @param isChecked is checked/ является отмеченным
     */
    static checked(isChecked?: boolean): AriaList;
    /**
     * Get ARIA current attribute.
     *
     * Получить атрибут ARIA current.
     * @param value ARIA current attribute/ Атрибут ARIA current
     */
    static current(value?: AriaList['aria-current']): AriaList;
    /**
     * Get ARIA busy attribute.
     *
     * Получить атрибут ARIA busy.
     * @param isBusy is busy/ является занятым
     */
    static busy(isBusy?: boolean): AriaList;
    /**
     * Get ARIA describedby attribute.
     *
     * Получить атрибут ARIA describedby.
     * @param id Element ID/ Идентификатор элемента
     */
    static describedby(id?: string): AriaList;
    /**
     * Get ARIA disabled attribute.
     *
     * Получить атрибут ARIA disabled.
     * @param isDisabled is disabled/ является отключенным
     */
    static disabled(isDisabled?: boolean): AriaList;
    /**
     * Get ARIA expanded attribute.
     *
     * Получить атрибут ARIA expanded.
     * @param isExpanded is expanded/ является расширенным
     */
    static expanded(isExpanded?: boolean): AriaList;
    /**
     * Get ARIA haspopup attribute.
     *
     * Получить атрибут ARIA haspopup.
     * @param haspopup ARIA haspopup attribute/ Атрибут ARIA haspopup
     */
    static haspopup(haspopup?: AriaList['aria-haspopup']): AriaList;
    /**
     * Get ARIA label.
     *
     * Получить ARIA label.
     * @param label ARIA label/ ARIA метка
     */
    static label(label?: string): AriaList;
    /**
     * Get ARIA labelledby attribute.
     *
     * Получить атрибут ARIA labelledby.
     * @param id Element ID/ Идентификатор элемента
     */
    static labelledby(id?: string): AriaList;
    /**
     * Get ARIA invalid attribute.
     *
     * Получить атрибут ARIA invalid.
     * @param isInvalid is invalid/ является недействительным
     */
    static invalid(isInvalid?: boolean): AriaList;
    /**
     * Get control role.
     *
     * Получить роль управления.
     * @param id Element ID/ Идентификатор элемента
     * @param controls ARIA controls attribute/ Атрибут ARIA controls
     * @param haspopup ARIA haspopup attribute/ Атрибут ARIA haspopup
     * @param expanded ARIA expanded state/ Состояние ARIA expanded
     */
    static control(id?: string, controls?: string, haspopup?: AriaList['aria-haspopup'], expanded?: boolean): AriaList;
    /**
     * Get ARIA hidden attribute.
     *
     * Получить атрибут ARIA hidden.
     * @param isHidden is hidden/ является скрытым
     */
    static hidden(isHidden?: boolean): AriaList;
    /**
     * Get ARIA live attribute.
     *
     * Получить атрибут ARIA live.
     * @param live ARIA live attribute/ Атрибут ARIA live
     */
    static live(live?: AriaList['aria-live']): AriaList;
    /**
     * Get modal role.
     *
     * Получить модальную роль.
     * @param isModal is modal/ является модальным
     * @param ariaLabelledby ARIA labelledby attribute/ Атрибут ARIA labelledby
     * @param ariaDescribedby ARIA describedby attribute/ Атрибут ARIA describedby
     */
    static modal(isModal?: boolean, ariaLabelledby?: string, ariaDescribedby?: string): AriaList;
    /**
     * Returns ARIA value now, min and max.
     *
     * Возвращает ARIA value now, min и max.
     * @param value Current value/ Текущее значение
     * @param min Minimum value/ Минимальное значение
     * @param max Maximum value/ Максимальное значение
     */
    static valueMinMax(value?: string | number, min?: string | number, max?: string | number): AriaList;
    /**
     * Returns 'true' or 'false' based on the boolean value.
     *
     * Возвращает 'true' или 'false' в зависимости от булевого значения.
     * @param value boolean value/ булевое значение
     */
    static isTrueOrFalse(value?: boolean): AriaTrueOrFalse | undefined;
    /**
     * Returns data as ARIA attribute.
     *
     * Возвращает данные в виде ARIA атрибута.
     * @param name attribute name/ имя атрибута
     * @param value attribute value/ значение атрибута
     */
    protected static isDataToData<V>(name: string, value?: V): AriaList;
}

/** ARIA true or false type/ ARIA тип true или false */
export declare type AriaTrueOrFalse = 'true' | 'false' | boolean;

/**
 * Class for working with caption.
 *
 * Класс для работы с caption.
 */
export declare class CaptionInclude {
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
export declare interface CaptionProps {
    /** Caption text or number/ Текст или число заголовка */
    caption?: string | number;
}

/**
 * Slots for caption functionality/ Слоты для функциональности заголовка
 */
export declare interface CaptionSlots {
    /** Caption slot/ Слот заголовка */
    caption?(props: any): any;
}

/**
 * Expose for description functionality/ Экспоз для функциональности описания
 */
export declare interface DescriptionExpose {
    /** Description identifier/ Идентификатор описания */
    descriptionId: string;
}

/**
 * Use for adding description text
 *
 * Использование для добавления описания текста
 */
export declare class DescriptionInclude {
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
export declare interface DescriptionProps {
    /** Description text or number/ Текст или число описания */
    description?: string | number;
}

/**
 * Slots for description functionality/ Слоты для функциональности описания
 */
export declare interface DescriptionSlots {
    /** Description slot/ Слот описания */
    description?(props: any): any;
}

/**
 * Use to control the activity of the item.
 *
 * Использование для управления активности элемента.
 */
export declare class EnabledInclude {
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
export declare interface EnabledProps {
    /** Read-only state/ Состояние только для чтения */
    readonly?: boolean;
    /** Disabled state/ Состояние отключено */
    disabled?: boolean;
}

/**
 * Emits for click event handling/ События для обработки кликов
 */
export declare type EventClickEmits = {
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
export declare interface EventClickExpose {
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
export declare class EventClickInclude {
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
export declare interface EventClickProps {
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
export declare type EventClickValue = {
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
export declare interface FieldAllProps<Value = any> extends FieldInputProps<Value>, FieldInputFileProps<Value>, FieldInputCheckProps<Value>, FieldTextareaProps<Value>, FieldSelectProps<Value> {
}

/**
 * Class for working with input arrows.
 *
 * Класс для работы со стрелками ввода.
 */
export declare class FieldArrowInclude {
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
export declare interface FieldArrowProps {
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
export declare class FieldAttributesInclude {
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
export declare type FieldBasicEmits<T = string> = ModelEmits & {
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

export declare type FieldBasicExpose<T = string> = {
    value: ShallowRef<T | undefined>;
    checkValidity: () => boolean;
    validationMessage: ComputedRef<string>;
};

/**
 * Basic HTML input attributes without value-length specifics/
 * Базовые HTML атрибуты инпута без ограничений длины и multiple
 */
export declare interface FieldBasicProps<Value = any> extends Omit<FieldValueProps<Value>, 'multiple' | 'maxlength'> {
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
export declare class FieldChangeInclude {
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

/** Check item interface/ Элемент проверки */
export declare type FieldCheckItem<Value = any> = FieldCheckMain & {
    /** Run validation for value/ Выполнить проверку значения */
    check(value: Value): FieldValidationItem<Value>;
};

/** Map of check items/ Карта элементов проверки */
export declare type FieldCheckList = Record<string, FieldCheckItem>;

/** Base data for validation check/ Базовые данные проверки */
export declare type FieldCheckMain = {
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
export declare class FieldCodeInclude {
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

/** Base input or textarea element/ Базовый элемент input или textarea */
export declare type FieldElementDom = HTMLInputElement | HTMLTextAreaElement;

/**
 * Class for working with input elements.
 *
 * Класс для работы с элементами ввода.
 */
export declare class FieldElementInclude {
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
export declare type FieldElementInput = FieldElementDom | HTMLElement | Record<string, any> | undefined;

/**
 * Class for working with events.
 *
 * Класс для работы с событиями.
 */
export declare class FieldEventInclude {
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
 * The class creates hidden input and runs native validation for pattern
 *
 * Класс создаёт скрытый input и выполняет нативную валидацию по паттерну
 */
export declare class FieldInputCheckInclude<Value = any> {
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

export declare type FieldInputCheckListInclude = Record<string, FieldInputCheckInclude>;

/**
 * Props for checkbox & radio inputs (excluding type field)/
 * Свойства для инпутов checkbox и radio (без поля type)
 */
export declare interface FieldInputCheckProps<Value = any> extends Omit<FieldBasicProps<Value>, 'type'>, FieldUxProps {
    /** Checked state/ Состояние выбора */
    checked?: boolean;
    /** Indeterminate visual state (checkbox only)/ Промежуточное визуальное состояние (только для checkbox) */
    indeterminate?: boolean;
}

/**
 * Props for file input elements (type="file")/
 * Свойства для инпутов выбора файлов (type="file")
 */
export declare interface FieldInputFileProps<Value = any> extends Omit<FieldBasicProps<Value>, 'type'>, FieldLengthProps, FieldUxProps {
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
export declare class FieldInputModeInclude {
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
export declare interface FieldInputProps<Value = any> extends FieldBasicProps<Value>, FieldStepProps, FieldArrowProps, FieldLengthProps, FieldPatternProps, FieldUxProps {
    /** Datalist id reference/ Ссылка на datalist */
    list?: string;
    iconVisibility?: string;
    iconVisibilityOff?: string;
}

/**
 * Text length constraints (characters, items)/
 * Ограничения длины текста (символы, элементы)
 */
export declare interface FieldLengthProps {
    /** Minimum length/ Минимальная длина */
    minlength?: NumberOrString;
    /** Maximum length/ Максимальная длина */
    maxlength?: NumberOrString;
}

/** Single mask fragment meta/ Один фрагмент маски с мета‑данными */
export declare type FieldMaskItem = {
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
export declare type FieldMasks = Record<string, FieldMaskItem>;

/** Match definition (string | element | object)/ Описание совпадения (строка | элемент | объект) */
export declare type FieldMatch = string | HTMLInputElement | FieldMatchItem;

/**
 * Class for checking input value matching with another element
 *
 * Класс для проверки совпадения вводимого значения с другим элементом
 */
export declare class FieldMatchInclude {
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
export declare type FieldMatchItem = {
    /** Target name or element/ Имя цели или элемент */
    name?: string | HTMLInputElement;
    /** Custom validation message/ Кастомное сообщение ошибки */
    validationMessage?: string;
};

/** Partial input element for pattern/ Частичный элемент для pattern */
export declare type FieldPatternElement = Partial<HTMLInputElement>;

/**
 * Class for working with checks by regular expressions.
 *
 * Класс для работы с проверкой по регулярным выражениям.
 */
export declare class FieldPatternInclude {
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
export declare type FieldPatternItem = string | FieldPatternElement;

/** Pattern or factory function/ Шаблон или функция‑генератор */
export declare type FieldPatternItemOrFunction = FieldPatternItem | ((item: FieldMasks) => FieldPatternItem);

/** Named pattern list/ Список именованных шаблонов */
export declare type FieldPatternList = Record<string, FieldPatternItemOrFunction>;

/**
 * Validation pattern attribute/
 * Атрибут паттерна валидации
 */
export declare interface FieldPatternProps {
    /** Validation pattern (regexp)/ Паттерн валидации (рег. выражение) */
    pattern?: string;
}

/**
 * Props for select elements (single & multiple)/
 * Свойства для select элементов (одиночный и множественный выбор)
 */
export declare interface FieldSelectProps<Value = any> extends Omit<FieldBasicProps<Value>, 'type'>, Omit<FieldStepProps, 'min' | 'step'>, FieldArrowProps, FieldUxProps {
    option?: ListRecord;
    /** Multiple selection mode/ Режим множественного выбора */
    multiple?: boolean;
}

/**
 * Numeric stepping and range constraints/
 * Ограничения шага и диапазона числовых значений
 */
export declare interface FieldStepProps {
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
export declare interface FieldTextareaProps<Value = any> extends Omit<FieldBasicProps<Value>, 'type'>, FieldLengthProps, FieldUxProps {
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
export declare type FieldType = 'text' | 'search' | 'number' | 'number-format' | 'currency' | 'email' | 'password' | 'datetime' | 'date' | 'year-month' | 'time' | 'hour-minute' | 'tel' | 'url' | 'checkbox' | 'radio';

/**
 * Class for working with the input type.
 *
 * Класс для работы с типом ввода.
 */
export declare class FieldTypeInclude {
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
export declare interface FieldUxProps {
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
export declare class FieldValidationInclude {
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
export declare type FieldValidationItem<Value = any> = FieldCheckMain & {
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
export declare type FieldValidityCode = string | FieldValidityCodeItem;

/** Map validity flags to custom messages/ Отображение флагов валидности в кастомные сообщения */
export declare type FieldValidityCodeItem = {
    [K in keyof ValidityState]?: string;
};

/**
 * Class for working with input values.
 *
 * Класс для работы со значениями инпута.
 */
export declare class FieldValueInclude<Value = any> {
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
export declare interface FieldValueProps<Value = any> extends ModelProps<Value> {
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
export declare class FieldVisibilityInclude {
    readonly item: Ref<boolean, boolean>;
    /**
     * Toggles the values.
     *
     * Переключает значения.
     */
    toggle(): this;
}

/**
 * Generates CSS class for tag 'a' without any static styles.
 *
 * Генерирует CSS класс для тега 'a' без каких-либо статических стилей.
 * @param design design system prefix/ префикс дизайн-системы
 * @returns CSS class string/ строка CSS класса
 */
export declare const getClassTagAStatic: (design: string) => string;

/**
 * Alternative slot definitions for label components/ Альтернативные определения слотов для компонентов меток
 */
export declare interface LabelAlternativeSlots {
    /** Label slot content/ Содержимое слота метки */
    label?(props: any): any;
}

/**
 * Exposed properties for label components/ Экспонируемые свойства для компонентов меток
 */
export declare interface LabelExpose {
    /** Label element ID/ Идентификатор элемента метки */
    labelId: string;
}

/**
 * The LabelHighlightInclude class extends LabelInclude to add support for highlighting parts of text.
 * Used to display a label with the ability to highlight specific parts.
 *
 * Класс LabelHighlightInclude расширяет LabelInclude и добавляет поддержку выделения частей текста.
 * Используется для отображения метки с возможностью выделения определённых частей.
 */
export declare class LabelHighlightInclude extends LabelInclude {
    protected readonly props: Readonly<LabelHighlightProps>;
    protected readonly className: string;
    protected readonly classesExtra?: ConstrClass | undefined;
    protected readonly slots?: LabelHighlightSlots | undefined;
    protected readonly elementsExtra?: (() => VNode[]) | undefined;
    protected readonly skeleton?: SkeletonInclude | undefined;
    /**
     * Constructor for the LabelHighlightInclude class.
     *
     * Конструктор для класса LabelHighlightInclude.
     * @param props input property/ входное свойство
     * @param className class name/ название класса
     * @param classesExtra additional classes/ дополнительные классы
     * @param slots object for working with slots/ объект для работы со слотами
     * @param elementsExtra additional elements/ дополнительные элементы
     * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
     */
    constructor(props: Readonly<LabelHighlightProps>, className: string, classesExtra?: ConstrClass | undefined, slots?: LabelHighlightSlots | undefined, elementsExtra?: (() => VNode[]) | undefined, skeleton?: SkeletonInclude | undefined);
    /**
     * Determines if highlighting is required.
     *
     * Определяет, требуется ли выделение.
     */
    isHighlight(): boolean;
    /**
     * Returns a string with highlighted parts.
     * If highlighting is not required, returns the original string.
     *
     * Возвращает строку с выделенными частями.
     * Если выделение не требуется, возвращает исходную строку.
     */
    protected getLabel: () => string | undefined;
    /**
     * Returns the minimum length of the string to start highlighting.
     *
     * Возвращает минимальную длину строки для начала выделения.
     */
    protected getLengthStart(): number;
}

/**
 * Properties for highlighted label components/ Свойства для компонентов меток с подсветкой
 */
export declare interface LabelHighlightProps extends LabelProps {
    /** Text to highlight/ Текст для подсветки */
    highlight?: string;
    /** Starting length for highlight/ Начальная длина для подсветки */
    highlightLengthStart?: number;
    /** Current value/ Текущее значение */
    value?: any;
}

/**
 * Slot definitions for highlighted label components/ Определения слотов для компонентов меток с подсветкой
 */
export declare interface LabelHighlightSlots extends LabelSlots {
}

/**
 * Use for adding text
 *
 * Использование для добавления текста
 */
export declare class LabelInclude {
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
 * The LabelNumberInclude class extends LabelInclude to handle numeric labels.
 * Allows converting and displaying numeric values with respect to maximum constraints.
 *
 * Класс LabelNumberInclude расширяет LabelInclude для работы с числовыми метками.
 * Позволяет преобразовывать и отображать числовые значения с учетом максимальных ограничений.
 */
export declare class LabelNumberInclude extends LabelInclude {
    protected readonly props: Readonly<LabelNumberProps>;
    protected readonly className: string;
    protected readonly classesExtra?: ConstrClass | undefined;
    protected readonly slots?: LabelNumberSlots | undefined;
    protected readonly elementsExtra?: (() => VNode[]) | undefined;
    protected readonly skeleton?: SkeletonInclude | undefined;
    /**
     * Constructor for working with text that has maximum values.
     *
     * Конструктор для работы с текстом, у которого есть максимальные значения.
     * @param props input property/ входное свойство
     * @param className class name/ название класса
     * @param classesExtra additional classes/ дополнительные классы
     * @param slots object for working with slots/ объект для работы со слотами
     * @param elementsExtra additional elements/ дополнительные элементы
     * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
     */
    constructor(props: Readonly<LabelNumberProps>, className: string, classesExtra?: ConstrClass | undefined, slots?: LabelNumberSlots | undefined, elementsExtra?: (() => VNode[]) | undefined, skeleton?: SkeletonInclude | undefined);
    /**
     * Returns text with conversion to maximum values.
     *
     * Возвращает текст с преобразованием в максимальные значения.
     */
    protected getNumber(): string | undefined;
}

/**
 * Properties for numeric label components/ Свойства для числовых компонентов меток
 */
export declare interface LabelNumberProps extends LabelProps {
    /** Maximum value for the label/ Максимальное значение для метки */
    labelMax?: NumberOrString;
    /** Enable number formatting/ Включить форматирование чисел */
    formatting?: boolean;
}

/**
 * Slot definitions for numeric label components/ Определения слотов для числовых компонентов меток
 */
export declare interface LabelNumberSlots extends LabelSlots {
}

/**
 * Properties for label components/ Свойства для компонентов меток
 */
export declare interface LabelProps {
    /** Label text or number/ Текст или число метки */
    label?: NumberOrString;
    /** Label element ID/ Идентификатор элемента метки */
    labelId?: string;
}

/**
 * Slot definitions for label components/ Определения слотов для компонентов меток
 */
export declare interface LabelSlots {
    /** Default slot content/ Содержимое слота по умолчанию */
    default?(props: any): any;
}

/**
 * Event signatures for model updates/
 * Сигнатуры событий для обновления модели
 */
export declare type ModelEmits<Value = string> = {
    /** Update value event/ Событие обновления значения */
    'update:value': [value: Value];
    /** Update model value event/ Событие обновления значения модели */
    'update:modelValue': [value: Value];
};

export declare type ModelEmitsSelected<Value = string> = {
    /** Update value event/ Событие обновления значения */
    'update:selected': [value: Value];
    /** Update model value event/ Событие обновления значения модели */
    'update:modelSelected': [value: Value];
};

/**
 * Class for managing model synchronization and event emission.
 * Handles two-way data binding with reactive values and emits update events.
 *
 * Класс для управления синхронизацией модели и испусканием событий.
 * Обрабатывает двустороннюю привязку данных с реактивными значениями и испускает события обновления.
 */
export declare class ModelInclude<Value = string> {
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
export declare interface ModelProps<Value = string> {
    /** Model value prop/ Свойство значения модели */
    'modelValue'?: Value;
    /** Update value handler/ Обработчик обновления значения */
    'onUpdate:value'?: (value: Value) => void;
    /** Update model value handler/ Обработчик обновления значения модели */
    'onUpdate:modelValue'?: (value: Value) => void;
}

export declare interface ModelPropsSelected<Value = string> {
    /** Model value prop/ Свойство значения модели */
    'modelSelected'?: Value;
    /** Update value handler/ Обработчик обновления значения */
    'onUpdate:selected'?: (value: Value) => void;
    /** Update model value handler/ Обработчик обновления значения модели */
    'onUpdate:modelSelected'?: (value: Value) => void;
}

/**
 * Class for managing model value with reactive reference and click handling.
 *
 * Класс для управления значением модели с реактивной ссылкой и обработкой клика.
 */
export declare class ModelValueInclude<Value = any> {
    protected readonly index: string;
    protected readonly emits?: any | undefined;
    protected readonly event?: EventClickInclude | undefined;
    protected readonly inputValue?: RefType<any> | undefined;
    protected readonly readonly?: RefType<boolean | undefined> | undefined;
    readonly value: Ref<Value | undefined, Value | undefined>;
    /**
     * Constructor
     * @param index identifier/ идентификатор
     * @param emits emits function/ функция эмитов
     * @param event event click handler/ обработчик клика
     * @param inputValue input value reference/ ссылка на входное значение
     * @param readonly readonly flag/ флаг только для чтения
     */
    constructor(index: string, emits?: any | undefined, event?: EventClickInclude | undefined, inputValue?: RefType<any> | undefined, readonly?: RefType<boolean | undefined> | undefined);
    /**
     * Returns the current value.
     *
     * Возвращает текущее значение.
     */
    getValue(): Value | undefined;
    /**
     * Click handler.
     *
     * Обработчик клика.
     * @param event event object/ объект события
     * @param options data object/ объект с данными
     */
    readonly onClick: (event: MouseEvent, options?: EventClickValue) => void;
}

/**
 * Class for working with prefix.
 *
 * Класс для работы с prefix.
 */
export declare class PrefixInclude {
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
export declare interface PrefixProps {
    /** Prefix text or number/ Текст или число префикса */
    prefix?: string | number;
}

/**
 * Slots for prefix functionality/ Слоты для функциональности префикса
 */
export declare interface PrefixSlots {
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

export declare type RoleType = string | 'alert' | 'alertdialog' | 'application' | 'article' | 'banner' | 'button' | 'cell' | 'checkbox' | 'columnheader' | 'combobox' | 'command' | 'comment' | 'complementary' | 'composite' | 'contentinfo' | 'definition' | 'dialog' | 'directory' | 'document' | 'feed' | 'figure' | 'form' | 'generic' | 'grid' | 'gridcell' | 'group' | 'heading' | 'img' | 'input' | 'landmark' | 'link' | 'list' | 'listbox' | 'listitem' | 'log' | 'main' | 'mark' | 'marquee' | 'math' | 'menu' | 'menubar' | 'menuitem' | 'menuitemcheckbox' | 'menuitemradio' | 'meter' | 'navigation' | 'none' | 'note' | 'option' | 'presentation' | 'progressbar' | 'radio' | 'radiogroup' | 'range' | 'region' | 'roletype' | 'row' | 'rowgroup' | 'rowheader' | 'scrollbar' | 'search' | 'searchbox' | 'section' | 'sectionhead' | 'select' | 'separator' | 'slider' | 'spinbutton' | 'status' | 'structure' | 'suggestion' | 'switch' | 'tab' | 'table' | 'tablist' | 'tabpanel' | 'term' | 'textbox' | 'timer' | 'toolbar' | 'tooltip' | 'tree' | 'treegrid' | 'treeitem' | 'widget' | 'window';

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
export declare class SuffixInclude {
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
export declare interface SuffixProps {
    /** Suffix text or number/ Текст или число суффикса */
    suffix?: string | number;
}

/**
 * Slots for suffix functionality/ Слоты для функциональности суффикса
 */
export declare interface SuffixSlots {
    /** Suffix slot/ Слот суффикса */
    suffix?(props: any): any;
}

/**
 * Class for managing focus and tab index of elements
 *
 * Класс для управления фокусом и табиндексом элементов
 */
export declare class TabIndexInclude<E extends HTMLElement = HTMLElement> {
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

export declare interface TextAllPropsInclude extends TextClosePropsInclude, TextCopiedClipboardPropsInclude, TextEntriesMatchPropsInclude, TextOkPropsInclude {
}

export declare interface TextClosePropsInclude {
    /** Close text/ Текст закрытия */
    textClose?: TextValue;
}

export declare interface TextCopiedClipboardPropsInclude {
    /** Copied to the clipboard text/ Текст о копировании в буфер обмена */
    textCopiedClipboard?: TextValue;
}

export declare interface TextEntriesMatchPropsInclude {
    /** Text entries match/ Текст о несовпадении записей */
    textEntriesMatch?: TextValue;
}

/**
 * TextInclude class for managing text-related properties.
 *
 * Класс TextInclude для управления свойствами, связанными с текстом.
 */
export declare class TextInclude {
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

export declare type TextIndex = 'close' | 'entriesMatch' | 'ok' | string;

export declare type TextList = Record<TextIndex, TextValue>;

export declare interface TextOkPropsInclude {
    /** OK text/ Текст подтверждения */
    textOk?: TextValue;
}

export declare type TextValue = string | (() => string) | undefined;

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
export declare type TouchEventCallback = (typeX: TouchEventTypeX, typeY: TouchEventTypeY, clientX: number, clientY: number, mouse?: TouchEventClient, mouseMove?: TouchEventClient, touche?: Touch, toucheMove?: Touch) => Promise<boolean> | boolean;

/**
 * Client coordinates for touch/mouse events/ Координаты клиента для событий касания/мыши
 */
export declare type TouchEventClient = {
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
export declare class TouchEventInclude {
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
export declare type TouchEventTypeX = 'left' | 'right' | 'none';

/**
 * Vertical direction type for touch/mouse gestures/ Тип вертикального направления для жестов касания/мыши
 */
export declare type TouchEventTypeY = 'top' | 'bottom' | 'none';

export { }

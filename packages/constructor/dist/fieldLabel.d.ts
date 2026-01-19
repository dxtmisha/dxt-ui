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
import { Ref } from 'vue';
import { RefOrNormal } from '@dxtmisha/functional';
import { RefType } from '@dxtmisha/functional';
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
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsFieldLabel: {};

/**
 * Interface for describing which components need to be connected for FieldCounter work/
 * Интерфейс для описания, какие компоненты надо подключить для работы FieldCounter
 */
declare type FieldCounterComponentInclude = {
    fieldCounter: object;
};

/**
 * The class returns data for working with the FieldCounter component
 *
 * Класс возвращает данные для работы с компонентом FieldCounter
 */
declare class FieldCounterInclude<Props extends FieldCounterPropsInclude = FieldCounterPropsInclude, PropsExtra extends ConstrBind<FieldCounterProps> = ConstrBind<FieldCounterProps>> {
    protected readonly props: Readonly<Props>;
    protected readonly className: string;
    protected readonly components?: DesignComponents<FieldCounterComponentInclude, Props> | undefined;
    protected readonly extra?: RefOrNormal<PropsExtra> | undefined;
    protected readonly index?: string | undefined;
    /**
     * Constructor
     * @param props input parameter/ входной параметр
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
     * @param index index identifier/ идентификатор индекса
     */
    constructor(props: Readonly<Props>, className: string, components?: DesignComponents<FieldCounterComponentInclude, Props> | undefined, extra?: RefOrNormal<PropsExtra> | undefined, index?: string | undefined);
    /** Checks if counter should be displayed/ Проверяет, надо ли отображать счетчик */
    readonly isCounter: ComputedRef<boolean>;
    /** Computed bindings for FieldCounter/ Вычисляемые привязки для FieldCounter */
    readonly binds: ComputedRef<PropsExtra>;
    /** Intermediate bindings for FieldCounter/ Промежуточные привязки для FieldCounter */
    readonly bindsIntermediary: ComputedRef<FieldCounterPropsInclude< FieldCounterPropsBasic>>;
    /**
     * Render the FieldCounter component/
     * Рендер компонента FieldCounter
     */
    readonly render: () => VNode[];
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
declare interface FieldCounterProps extends FieldCounterPropsBasic, FieldCounterPropsToken {
}

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

declare interface FieldCounterPropsToken {
}

/**
 * FieldLabel
 */
export declare class FieldLabel {
    protected readonly props: FieldLabelProps;
    protected readonly refs: ToRefs<FieldLabelProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<FieldLabelComponents, FieldLabelProps> | undefined;
    protected readonly slots?: FieldLabelSlots | undefined;
    protected readonly emits?: ConstrEmit<FieldLabelEmits> | undefined;
    /** Label include/ Подключение метки */
    readonly label: LabelInclude;
    /** Field counter include/ Подключение счетчика поля */
    readonly fieldCounter: FieldCounterInclude<FieldLabelProps>;
    /** Progress include/ Подключение прогресса */
    readonly progress: ProgressInclude;
    /** Skeleton include/ Подключение скелетона */
    readonly skeleton: SkeletonInclude;
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
    constructor(props: FieldLabelProps, refs: ToRefs<FieldLabelProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<FieldLabelComponents, FieldLabelProps> | undefined, slots?: FieldLabelSlots | undefined, emits?: ConstrEmit<FieldLabelEmits> | undefined);
    /**
     * Values for the class.
     *
     * Значения для класса.
     * Возвращает объект классов, включающий классы скелетона, если он активен.
     */
    readonly classes: ComputedRef<ConstrClassObject>;
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export declare type FieldLabelClasses = {
    main: ConstrClass;
    label: string;
    required: string;
};

/**
 * Interface for describing which components need to be connected for FieldLabel work/
 * Интерфейс для описания, какие компоненты надо подключить для работы FieldLabel
 */
export declare type FieldLabelComponentInclude = {
    fieldLabel: object;
};

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export declare type FieldLabelComponents = FieldCounterComponentInclude & ProgressComponentInclude;

/**
 * FieldLabelDesign
 */
export declare class FieldLabelDesign<COMP extends FieldLabelComponents, EXPOSE extends FieldLabelExpose, CLASSES extends FieldLabelClasses, P extends FieldLabelPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, FieldLabelEmits, EXPOSE, FieldLabelSlots, CLASSES, P> {
    protected readonly item: FieldLabel;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, FieldLabelEmits, P>);
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
    protected initRender(): VNode | undefined;
    /**
     * Display of the asterisk, an indication of required fields.
     *
     * Вывод звездочки, признак обязательного заполнения.
     */
    readonly renderRequired: () => VNode[];
}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export declare type FieldLabelEmits = {};

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export declare interface FieldLabelExpose extends LabelExpose {
}

/**
 * The class returns data for working with the FieldLabel component
 *
 * Класс возвращает данные для работы с компонентом FieldLabel
 */
export declare class FieldLabelInclude<Props extends FieldLabelPropsInclude = FieldLabelPropsInclude, PropsExtra extends ConstrBind<FieldLabelPropsBasic> = ConstrBind<FieldLabelPropsBasic>> {
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

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export declare interface FieldLabelProps extends FieldLabelPropsBasic, FieldLabelPropsToken {
}

export declare interface FieldLabelPropsBasic<FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> extends LabelProps, FieldCounterPropsInclude<FieldCounter>, ProgressPropsInclude<Progress>, SkeletonPropsInclude {
    required?: boolean;
}

/**
 * Properties that can be passed to FieldLabelInclude/
 * Свойства, которые можно передать в FieldLabelInclude
 */
export declare interface FieldLabelPropsInclude<FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic> extends LabelProps, FieldCounterPropsInclude<FieldCounter> {
    required?: boolean;
    fieldLabelAttrs?: ConstrBind<FieldLabel>;
}

declare interface FieldLabelPropsToken {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export declare interface FieldLabelSlots extends LabelAlternativeSlots {
}

/**
 * Slots contract that FieldLabelInclude can expose or map to Label component slots.
 * Extends LabelAlternativeSlots to reuse standard label-related slots (leading, trailing, etc.).
 *
 * Контракт слотов, которые может предоставлять FieldLabelInclude или прокидывать в Label.
 * Расширяет LabelAlternativeSlots, чтобы переиспользовать стандартные слоты лейбла (leading, trailing и др.).
 */
export declare interface FieldLabelSlotsInclude extends LabelAlternativeSlots {
}

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

export { }

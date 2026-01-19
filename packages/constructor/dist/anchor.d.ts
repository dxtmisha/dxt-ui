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
import { NumberOrString } from '@dxtmisha/functional';
import { Ref } from 'vue';
import { RefOrNormal } from '@dxtmisha/functional';
import { ShallowRef } from 'vue';
import { ToRefs } from 'vue';
import { VNode } from 'vue';

/**
 * Anchor
 */
export declare class Anchor {
    protected readonly props: AnchorProps;
    protected readonly refs: ToRefs<AnchorProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<AnchorComponents, AnchorProps> | undefined;
    protected readonly slots?: AnchorSlots | undefined;
    protected readonly emits?: ConstrEmit<AnchorEmits> | undefined;
    protected readonly AnchorHrefConstructor: typeof AnchorHref;
    protected readonly AnchorToConstructor: typeof AnchorTo;
    protected readonly AnchorEventConstructor: typeof AnchorEvent;
    protected readonly AnchorIconConstructor: typeof AnchorIcon;
    protected readonly LabelIncludeConstructor: typeof LabelInclude;
    protected readonly TextIncludeConstructor: typeof TextInclude;
    protected readonly TooltipIncludeConstructor: typeof TooltipInclude;
    readonly label: LabelInclude;
    readonly text: TextInclude;
    readonly tooltip: TooltipInclude;
    readonly href: AnchorHref;
    readonly to: AnchorTo;
    readonly event: AnchorEvent;
    readonly icon: AnchorIcon;
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
     * @param AnchorHrefConstructor class for working with href/ класс для работы с ссылкой
     * @param AnchorToConstructor class for working with scroll/ класс для работы с прокруткой
     * @param AnchorEventConstructor class for working with events/ класс для работы с событиями
     * @param AnchorIconConstructor class for working with icons/ класс для работы с иконками
     * @param LabelIncludeConstructor class for working with label/ класс для работы с меткой
     * @param TextIncludeConstructor class for working with text/ класс для работы с текстом
     * @param TooltipIncludeConstructor class for working with tooltip/ класс для работы с подсказкой
     */
    constructor(props: AnchorProps, refs: ToRefs<AnchorProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<AnchorComponents, AnchorProps> | undefined, slots?: AnchorSlots | undefined, emits?: ConstrEmit<AnchorEmits> | undefined, AnchorHrefConstructor?: typeof AnchorHref, AnchorToConstructor?: typeof AnchorTo, AnchorEventConstructor?: typeof AnchorEvent, AnchorIconConstructor?: typeof AnchorIcon, LabelIncludeConstructor?: typeof LabelInclude, TextIncludeConstructor?: typeof TextInclude, TooltipIncludeConstructor?: typeof TooltipInclude);
    /** Is hide anchor/ Скрыть якорь */
    readonly isHide: ComputedRef<boolean>;
    /**
     * Go if focus on anchor
     *
     * Перейти, если фокус на якоре
     */
    protected readonly goIsFocus: () => void;
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export declare type AnchorClasses = {
    main: ConstrClass;
    label: string;
};

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export declare type AnchorComponents = TooltipComponentInclude & IconComponentInclude;

/**
 * AnchorDesign
 */
export declare class AnchorDesign<COMP extends AnchorComponents, EXPOSE extends AnchorExpose, CLASSES extends AnchorClasses, P extends AnchorPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, AnchorEmits, EXPOSE, AnchorSlots, CLASSES, P> {
    protected readonly item: Anchor;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     * @param ItemConstructor class for working with the anchor/ класс для работы с якорем
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, AnchorEmits, P>, ItemConstructor?: typeof Anchor);
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
    protected initRender(): VNode[] | undefined;
    /**
     * Rendering the tooltip.
     *
     * Рендеринг подсказки.
     */
    readonly renderTooltip: () => VNode[];
    /**
     * Rendering the main item.
     *
     * Рендеринг основного элемента.
     * @param props additional properties/ дополнительные свойства
     */
    readonly renderItem: (props?: TooltipControl) => VNode[];
    /**
     * Rendering the hidden item.
     *
     * Рендеринг скрытого элемента.
     */
    readonly renderItemHide: () => VNode[];
    /**
     * Rendering an icon if it is set.
     *
     * Рендеринг иконки, если она задана.
     */
    readonly renderIcon: () => VNode[];
    /**
     * Rendering children elements.
     *
     * Рендеринг дочерних элементов.
     */
    readonly renderChildren: () => VNode[];
    /**
     * Get main element properties.
     *
     * Получить свойства основного элемента.
     */
    protected getMainProps(): Record<string, any>;
}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export declare type AnchorEmits = {};

/**
 * Anchor event handler
 *
 * Обработчик событий Anchor
 */
declare class AnchorEvent {
    protected readonly props: AnchorProps;
    protected readonly tooltip: TooltipInclude;
    protected readonly href: AnchorHref;
    protected readonly to?: AnchorTo | undefined;
    readonly copy: Ref<boolean | undefined, boolean | undefined>;
    protected timeout: any;
    /**
     * Constructor
     * @param props input data / входные данные
     * @param tooltip tooltip / подсказка
     * @param href href handler / обработчик ссылки
     * @param to scroll handler / обработчик прокрутки
     */
    constructor(props: AnchorProps, tooltip: TooltipInclude, href: AnchorHref, to?: AnchorTo | undefined);
    /**
     * Is copy state
     *
     * Является ли состоянием копирования
     */
    isCopy(): boolean;
    /**
     * On click handler
     *
     * Обработчик нажатия
     */
    readonly onClick: (event: MouseEvent) => void;
    /**
     * Trigger copy state
     *
     * Запустить состояние копирования
     */
    protected toCopy(): void;
}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export declare interface AnchorExpose extends LabelExpose {
    go(): void;
}

/**
 * Anchor href attribute handler
 *
 * Обработчик атрибута href якоря
 */
declare class AnchorHref {
    protected readonly props: AnchorProps;
    /**
     * Constructor
     * @param props input data / входные данные
     */
    constructor(props: AnchorProps);
    /** Computed href attribute/ Вычисляемый атрибут href */
    readonly href: ComputedRef<string | undefined>;
    /**
     * Check if href exists
     *
     * Проверить, существует ли href
     */
    is(): boolean;
    /**
     * Get href value
     *
     * Получить значение href
     */
    get(): string | undefined;
    /**
     * Get full link
     *
     * Получить полную ссылку
     */
    getLink(): string;
}

/**
 * Class for working with the anchor icon
 *
 * Класс для работы с иконкой якоря
 */
declare class AnchorIcon {
    protected readonly props: AnchorProps;
    protected readonly event: AnchorEvent;
    /**
     * Constructor
     * @param props input data / входные данные
     * @param event event handler / обработчик событий
     */
    constructor(props: AnchorProps, event: AnchorEvent);
    /** Icon to display/ Иконка для отображения */
    readonly icon: ComputedRef<string | undefined>;
    /** Binds for the icon/ Привязки для иконки */
    readonly binds: ComputedRef<ConstrBind<IconProps>>;
    /**
     * Check if the icon is set
     *
     * Проверяет, установлена ли иконка
     */
    is(): boolean;
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export declare interface AnchorProps extends AnchorPropsBasic, AnchorPropsToken {
}

export declare interface AnchorPropsBasic<Tooltip extends TooltipProps = TooltipProps> extends LabelProps, TooltipPropsInclude<Tooltip>, TextCopiedClipboardPropsInclude, AnchorScrollProps {
    hide?: boolean;
    name?: string;
    isCopy?: boolean;
    iconLink?: string;
    iconTag?: string;
    iconContentCopy?: string;
    delayHide?: number;
}

declare interface AnchorPropsToken {
}

/** Anchor scroll properties/ Свойства прокрутки якоря */
export declare interface AnchorScrollProps {
    shift?: NumberOrString;
    behavior?: ScrollIntoViewOptions['behavior'];
    block?: ScrollIntoViewOptions['block'];
    inline?: ScrollIntoViewOptions['inline'];
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export declare interface AnchorSlots extends LabelSlots {
}

/**
 * Anchor scroll handler
 *
 * Обработчик прокрутки якоря
 */
declare class AnchorTo {
    protected readonly props: AnchorProps;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly href: AnchorHref;
    /**
     * Constructor
     * @param props input data / входные данные
     * @param element input element / элемент ввода
     * @param href href handler / обработчик ссылки
     */
    constructor(props: AnchorProps, element: Ref<HTMLElement | undefined>, href: AnchorHref);
    /**
     * Scroll to element
     *
     * Прокрутить к элементу
     */
    go(): void;
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

/** ARIA true or false type/ ARIA тип true или false */
declare type AriaTrueOrFalse = 'true' | 'false' | boolean;

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
declare interface ArrowProps extends ArrowPropsBasic, ArrowPropsToken {
}

declare interface ArrowPropsBasic {
    elementTarget?: HTMLElement | string;
}

/**
 * Props used to include and configure the Arrow component/
 * Свойства для подключения и настройки компонента Arrow
 */
declare interface ArrowPropsInclude<Arrow extends ArrowProps = ArrowProps> {
    /** Show arrow/ Показать стрелку */
    arrowShow?: boolean;
    /** Arrow position/ Позиция стрелки */
    arrowPosition?: ArrowProps['position'];
    /** Additional attributes for Arrow component/ Дополнительные атрибуты для компонента Arrow */
    arrowAttrs?: ConstrBind<Arrow>;
}

declare interface ArrowPropsToken {
    position?: 'auto' | 'top' | 'bottom' | 'left' | 'right';
    inverse?: boolean;
}

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsAnchor: {
    shift: number;
    delayHide: number;
};

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

declare type IconComponentInclude = {
    icon?: object;
};

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
 * Component map for including the Tooltip component/
 * Карта компонентов для подключения компонента Tooltip
 */
declare type TooltipComponentInclude = {
    tooltip?: object;
};

declare type TooltipControl = TooltipControlBinds & {
    open: Ref<boolean>;
    binds: TooltipControlBinds;
};

declare type TooltipControlBinds = AriaList & {
    class: string;
    onclick: () => void;
    onmouseover: (event: MouseEvent) => void;
    onmouseout: (event: MouseEvent) => void;
};

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
declare interface TooltipExpose {
    toggle(open: boolean, flash?: boolean): Promise<void>;
}

/**
 * TooltipInclude class provides functionality for conditionally rendering tooltip components
 * within other components. It manages the logic for determining when to display tooltip
 * and configures the appropriate properties.
 *
 * Класс TooltipInclude предоставляет функциональность для условного рендеринга компонентов
 * подсказки внутри других компонентов. Он управляет логикой определения необходимости
 * отображения подсказки и настраивает соответствующие свойства.
 */
declare class TooltipInclude<Props extends TooltipPropsInclude = TooltipPropsInclude, PropsExtra extends ConstrBind<TooltipProps> = ConstrBind<TooltipProps>> {
    protected readonly props: Readonly<Props>;
    protected readonly className: string;
    protected readonly components?: DesignComponents<TooltipComponentInclude, Props> | undefined;
    protected readonly extra?: RefOrNormal<PropsExtra> | undefined;
    protected readonly index?: string | undefined;
    readonly element: Ref<TooltipExpose | undefined, TooltipExpose | undefined>;
    /**
     * Constructor
     * @param props input parameter/ входной параметр
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
     * @param index index identifier/ идентификатор индекса
     */
    constructor(props: Readonly<Props>, className: string, components?: DesignComponents<TooltipComponentInclude, Props> | undefined, extra?: RefOrNormal<PropsExtra> | undefined, index?: string | undefined);
    /** Computed bindings for the tooltip/ Вычисляемые привязки для подсказки */
    readonly binds: ComputedRef<PropsExtra>;
    /**
     * Render the Tooltip component
     *
     * Рендер компонента подсказки
     */
    readonly render: (slotsChildren: TooltipSlots) => VNode[];
    /**
     * Get the tooltip element.
     *
     * Получить элемент подсказки.
     */
    getElement(): TooltipExpose | undefined;
    /**
     * Open the tooltip.
     *
     * Открыть подсказку.
     */
    open(): void;
    /**
     * Close the tooltip.
     *
     * Закрыть подсказку.
     */
    close(): void;
    /**
     * Toggle the tooltip.
     *
     * Переключить подсказку.
     * @param open open status/ статус открытия
     */
    toggle(open: boolean): void;
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
declare interface TooltipProps extends TooltipPropsBasic, TooltipPropsToken {
}

declare interface TooltipPropsBasic<Arrow extends ArrowProps = ArrowProps> extends LabelProps, DescriptionProps, ArrowPropsInclude<Arrow> {
    open?: boolean;
    disabled?: boolean;
    inDom?: boolean;
    top?: boolean;
    indent?: number;
    delay?: number;
    delayHide?: number;
}

/**
 * Props used to include and configure the Tooltip component/
 * Свойства для подключения и настройки компонента Tooltip
 */
declare interface TooltipPropsInclude<Tooltip extends TooltipProps = TooltipProps> {
    /** Additional attributes for Tooltip component/ Дополнительные атрибуты для компонента Tooltip */
    tooltipAttrs?: ConstrBind<Tooltip>;
}

declare interface TooltipPropsToken {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
declare interface TooltipSlots extends LabelSlots, DescriptionSlots {
    control?(props: TooltipControl): any;
    body?(): any;
}

export { }

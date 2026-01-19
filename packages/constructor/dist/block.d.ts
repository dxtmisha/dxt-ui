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
import { ToRefs } from 'vue';
import { VNode } from 'vue';

/**
 * ARIA label prop/
 * ARIA проп label
 */
declare interface AriaLabelPropsInclude {
    ariaLabel?: string;
}

/**
 * Block
 */
export declare class Block {
    protected readonly props: BlockProps;
    protected readonly refs: ToRefs<BlockProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<BlockComponents, BlockProps> | undefined;
    protected readonly slots?: BlockSlots | undefined;
    protected readonly emits?: ConstrEmit<BlockEmits> | undefined;
    protected readonly LabelIncludeConstructor: typeof LabelInclude;
    protected readonly DescriptionIncludeConstructor: typeof DescriptionInclude;
    protected readonly CaptionIncludeConstructor: typeof CaptionInclude;
    protected readonly IconIncludeConstructor: typeof IconInclude;
    /**
     * Object for working with label/
     * Объект для работы с меткой
     */
    readonly label: LabelInclude;
    /**
     * Object for working with description/
     * Объект для работы с описанием
     */
    readonly description: DescriptionInclude;
    /**
     * Object for working with caption/
     * Объект для работы с подписью
     */
    readonly caption: CaptionInclude;
    /**
     * Object for working with icon/
     * Объект для работы с иконкой
     */
    readonly icon: IconInclude;
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
     * @param LabelIncludeConstructor class for working with the label/ класс для работы с меткой
     * @param DescriptionIncludeConstructor class for working with the description/ класс для работы с описанием
     * @param CaptionIncludeConstructor class for working with the caption/ класс для работы с подписью
     * @param IconIncludeConstructor class for working with the icon/ класс для работы с иконкой
     */
    constructor(props: BlockProps, refs: ToRefs<BlockProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<BlockComponents, BlockProps> | undefined, slots?: BlockSlots | undefined, emits?: ConstrEmit<BlockEmits> | undefined, LabelIncludeConstructor?: typeof LabelInclude, DescriptionIncludeConstructor?: typeof DescriptionInclude, CaptionIncludeConstructor?: typeof CaptionInclude, IconIncludeConstructor?: typeof IconInclude);
    /**
     * Checks if the headline exists/
     * Проверяет, существует ли заголовок
     */
    readonly isHeadline: ComputedRef<boolean>;
    /**
     * Checks if the header exists/
     * Проверяет, существует ли шапка
     */
    readonly isHeader: ComputedRef<boolean>;
    /**
     * Tag name/
     * Название тега
     */
    readonly tag: ComputedRef<string>;
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export declare type BlockClasses = {
    main: ConstrClass;
    headline: string;
    header: string;
    label: string;
    description: string;
    caption: string;
    icon: string;
    space: string;
    body: string;
};

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export declare type BlockComponents = IconComponentInclude;

/**
 * BlockDesign
 */
export declare class BlockDesign<COMP extends BlockComponents, EXPOSE extends BlockExpose, CLASSES extends BlockClasses, P extends BlockPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, BlockEmits, EXPOSE, BlockSlots, CLASSES, P> {
    protected readonly item: Block;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     * @param ItemConstructor block item class/ класс элемента блока
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, BlockEmits, P>, ItemConstructor?: typeof Block);
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
     * Headline rendering.
     *
     * Рендеринг заголовка.
     */
    protected readonly renderHeadline: () => VNode[];
    /**
     * Header rendering.
     *
     * Рендеринг заголовка.
     */
    protected readonly renderHeader: () => VNode[];
    /**
     * Trailing rendering.
     *
     * Рендеринг правого контента.
     */
    protected readonly renderTrailing: () => VNode[];
    /**
     * Body rendering.
     *
     * Рендеринг тела.
     */
    protected readonly renderBody: () => VNode[];
}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export declare type BlockEmits = {};

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export declare interface BlockExpose extends LabelExpose, DescriptionExpose {
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export declare interface BlockProps extends BlockPropsBasic, BlockPropsToken {
}

export declare interface BlockPropsBasic<Icon extends IconPropsBasic = IconPropsBasic> extends LabelProps, DescriptionProps, CaptionProps, IconPropsInclude<Icon> {
    headline?: string;
    tag?: string;
    tagHeader?: string;
}

declare interface BlockPropsToken {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export declare interface BlockSlots extends LabelAlternativeSlots, DescriptionSlots, CaptionSlots {
    /** Slot for trailing content/ Слот для правого контента */
    trailing?(props: any): any;
    /** Slot for headline/ Слот для заголовка */
    headline?(props: any): any;
    /** Default slot/ Слот по умолчанию */
    default?(props: any): any;
}

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
export declare const defaultsBlock: {
    tag: string;
    tagHeader: string;
};

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

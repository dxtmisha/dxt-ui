import { ComputedRef } from 'vue';
import { ConstrBind } from '@dxtmisha/functional';
import { ConstrClass } from '@dxtmisha/functional';
import { ConstrClassObject } from '@dxtmisha/functional';
import { ConstrEmit } from '@dxtmisha/functional';
import { ConstrItem } from '@dxtmisha/functional';
import { ConstrOptions } from '@dxtmisha/functional';
import { ConstrStyles } from '@dxtmisha/functional';
import { DesignComp } from '@dxtmisha/functional';
import { DesignComponents } from '@dxtmisha/functional';
import { DesignConstructorAbstract } from '@dxtmisha/functional';
import { ItemList } from '@dxtmisha/functional-basic';
import { Ref } from 'vue';
import { RefOrNormal } from '@dxtmisha/functional';
import { ToRefs } from 'vue';
import { Undefined } from '@dxtmisha/functional';
import { VNode } from 'vue';

/**
 * ARIA label prop/
 * ARIA проп label
 */
declare interface AriaLabelPropsInclude {
    ariaLabel?: string;
}

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsIcon: {
    animationType: string;
};

/**
 * Base class for working with icons.
 *
 * Базовый класс для работы с иконками.
 */
export declare class Icon {
    protected readonly props: IconProps;
    protected readonly refs: ToRefs<IconProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<IconComponents, IconProps> | undefined;
    protected readonly slots?: IconSlots | undefined;
    protected readonly emits?: ConstrEmit<IconEmits> | undefined;
    protected readonly SkeletonIncludeConstructor: typeof SkeletonInclude;
    /**
     * Returns the property for the base icon/ Возвращает свойство для базовой иконки
     */
    readonly iconBind: ComputedRef<IconEventLoad['iconBind']>;
    /**
     * Returns the property for the additional icon/ Возвращает свойство для дополнительной иконки
     */
    readonly iconActiveBind: ComputedRef<IconEventLoad['iconActiveBind']>;
    /**
     * An object for working with the Skeleton/ Объект для работы с Skeleton
     */
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
     * @param SkeletonIncludeConstructor class for working with Skeleton/ класс для работы с Skeleton
     */
    constructor(props: IconProps, refs: ToRefs<IconProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<IconComponents, IconProps> | undefined, slots?: IconSlots | undefined, emits?: ConstrEmit<IconEmits> | undefined, SkeletonIncludeConstructor?: typeof SkeletonInclude);
    /**
     * Checks if the additional icon is active/ Проверяет, активна ли дополнительная иконка
     */
    readonly isActive: ComputedRef<boolean>;
    /**
     * Values for the class/ Значения для класса
     */
    readonly classes: ComputedRef<ConstrClassObject>;
    /**
     * Computed bindings for the icon element.
     *
     * Вычисляемые привязки для элемента иконки.
     */
    readonly binds: ComputedRef<any>;
    /**
     * Get the ARIA role for the icon element.
     *
     * Получить ARIA роль для элемента иконки.
     */
    protected getRole(): string | undefined;
    /**
     * Triggers an event when the image loading is complete.
     *
     * Вызывает событие, когда завершится загрузка картинки.
     * @param event event object/ объект события
     */
    protected readonly onLoad: (event: ImageEventData) => void | undefined;
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export declare type IconClasses = {
    main: ConstrClass;
};

export declare type IconComponentInclude = {
    icon?: object;
};

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export declare type IconComponents = ImageComponentsInclude;

/**
 * IconDesign
 */
export declare class IconDesign<COMP extends IconComponents, EXPOSE extends IconExpose, CLASSES extends IconClasses, P extends IconPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, IconEmits, EXPOSE, IconSlots, CLASSES, P> {
    protected readonly item: Icon;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     * @param ItemConstructor icon item class/ класс элемента иконки
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, IconEmits, P>, ItemConstructor?: typeof Icon);
    /**
     * Initialization of all the necessary properties for work<br>
     * Инициализация всех необходимых свойств для работы.
     */
    protected initExpose(): EXPOSE;
    /**
     * Improvement of the obtained list of classes.<br>
     * Доработка полученного списка классов.
     */
    protected initClasses(): Partial<CLASSES>;
    /**
     * Refinement of the received list of styles.<br>
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
     * Computed properties for the main element.
     *
     * Вычисляемые свойства для главного элемента.
     */
    readonly propsMain: ComputedRef<any>;
    /**
     * Render the main icon.
     *
     * Рендер основной иконки.
     */
    readonly renderIcon: () => VNode | undefined;
    /**
     * Render the secondary icon.
     *
     * Рендер вторичной иконки.
     */
    readonly renderIconActive: () => VNode | undefined;
}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export declare type IconEmits = ImageEmitsInclude;

export declare type IconEventLoad = {
    isActive: boolean;
    iconBind: ConstrItem | undefined;
    iconActiveBind: ConstrItem | undefined;
};

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export declare interface IconExpose {
    isActive: ComputedRef<boolean>;
}

/**
 * Class for simplified integration of the icon-handling component
 *
 * Класс для упрощённого внедрения компонента для работы с иконками
 */
export declare class IconInclude<Props extends IconPropsInclude = IconPropsInclude> extends IconLiteInclude<Props> {
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
export declare class IconLiteInclude<Props extends IconLitePropsInclude = IconLitePropsInclude> {
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

export declare interface IconLitePropsInclude<Icon extends IconPropsBasic = IconPropsBasic> {
    icon?: IconValue<Icon>;
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export declare interface IconProps extends IconPropsBasic, IconPropsToken {
}

export declare interface IconPropsBasic<Image extends ImagePropsBasic = ImagePropsBasic> extends SkeletonPropsInclude, AriaLabelPropsInclude {
    /** Активное состояние иконки/ Active state of the icon */
    active?: boolean;
    /** Value of the main icon/ Значение основной иконки */
    icon?: ImageValue<Image>;
    /** Value of the active icon/ Значение активной иконки */
    iconActive?: ImageValue<Image>;
    role?: RoleType;
}

export declare interface IconPropsInclude<Icon extends IconPropsBasic = IconPropsBasic> extends IconLitePropsInclude<Icon> {
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
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export declare interface IconSlots {
    default?(props: any): any;
}

/**
 * Class for simplified integration of the icon-handling component
 *
 * Класс для упрощённого внедрения компонента для работы с иконками
 */
export declare class IconTrailingInclude<Props extends IconTrailingPropsInclude = IconTrailingPropsInclude> extends IconInclude<Props> {
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

export declare interface IconTrailingPropsInclude<Icon extends IconPropsBasic = IconPropsBasic> extends IconPropsInclude<Icon> {
    iconTrailing?: IconValue<Icon>;
    iconTrailingTurnOnly?: boolean;
    iconTrailingDirOnly?: boolean;
    iconTrailingPalette?: boolean;
}

export declare type IconValue<Icon extends IconPropsBasic = IconPropsBasic> = string | ConstrBind<Icon> | null;

declare type ImageComponentsInclude = {
    image: object;
};

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
declare type ImageEmits = {
    load: [image: ImageEventData];
};

declare type ImageEmitsInclude = ImageEmits;

declare type ImageEventData = ImageEventType & {
    image: ImageEventItem;
};

declare type ImageEventItem = ImageItem | string | undefined;

declare type ImageEventType = {
    type: ImageTypeItem;
};

/**
 * Parameters for the uploaded image or the one available by a direct link.
 *
 * Параметры для загруженного изображения или доступного по прямой ссылке.
 */
declare type ImageItem = ImageSize & {
    image: HTMLImageElement;
    src: string;
};

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

declare type ImageSize<T = number> = {
    width: T;
    height: T;
};

declare type ImageTypeItem = ImageTypeValue | Undefined;

declare enum ImageTypeValue {
    pdf = "pdf",
    file = "file",
    image = "image",
    flag = "flag",
    flagCompressed = "flag-compressed",
    color = "color",
    public = "public",
    filled = "filled",
    outlined = "outlined",
    round = "round",
    sharp = "sharp",
    twoTone = "two-tone",
    material = "material",
    icon = "icon"
}

declare type ImageValue<Image extends ImagePropsBasic = ImagePropsBasic> = string | ConstrBind<Image> | null;

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

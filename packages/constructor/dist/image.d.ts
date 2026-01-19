import { ComputedRef } from 'vue';
import { ConstrBind } from '@dxtmisha/functional';
import { ConstrClass } from '@dxtmisha/functional';
import { ConstrClassObject } from '@dxtmisha/functional';
import { ConstrEmit } from '@dxtmisha/functional';
import { ConstrOptions } from '@dxtmisha/functional';
import { ConstrStyles } from '@dxtmisha/functional';
import { DesignConstructorAbstract } from '@dxtmisha/functional';
import { NumberOrString } from '@dxtmisha/functional';
import { NumberOrString as NumberOrString_2 } from '@dxtmisha/functional-basic';
import { Ref } from 'vue';
import { Undefined } from '@dxtmisha/functional';
import { VNode } from 'vue';
import { WatchHandle } from 'vue';

/** ARIA true or false type/ ARIA тип true или false */
declare type AriaTrueOrFalse = 'true' | 'false' | boolean;

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsImage: {
    adaptiveGroup: string;
    preloadOffset: string;
};

/**
 * Base class for working with images and icons.
 *
 * Базовый класс для работы с изображениями и иконками.
 */
declare class Image_2 {
    protected readonly props: ImageProps;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly className: string;
    protected readonly emits?: ConstrEmit<ImageEmits> | undefined;
    protected readonly ImageTypeConstructor: typeof ImageType;
    protected readonly ImageDataConstructor: typeof ImageData_2;
    protected readonly ImageCoordinatorConstructor: typeof ImageCoordinator;
    protected readonly ImagePositionConstructor: typeof ImagePosition;
    protected readonly ImageAdaptiveItemConstructor: typeof ImageAdaptiveItem;
    protected readonly ImageBackgroundConstructor: typeof ImageBackground;
    protected readonly ImageImgConstructor: typeof ImageImg;
    readonly type: ImageType;
    readonly data: ImageData_2;
    readonly coordinator: ImageCoordinator;
    readonly position: ImagePosition;
    readonly adaptiveItem: ImageAdaptiveItem;
    readonly background: ImageBackground;
    readonly img: ImageImg;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param element input element/ элемент ввода
     * @param className class name/ название класса
     * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
     * @param ImageTypeConstructor class for working with image type/ класс для работы с типом изображения
     * @param ImageDataConstructor class for working with image data/ класс для работы с данными изображения
     * @param ImageCoordinatorConstructor class for working with image coordinates/ класс для работы с координатами изображения
     * @param ImagePositionConstructor class for working with image position/ класс для работы с позицией изображения
     * @param ImageAdaptiveItemConstructor class for working with adaptive image item/ класс для работы с адаптивным элементом изображения
     * @param ImageBackgroundConstructor class for working with image background/ класс для работы с фоном изображения
     * @param ImageImgConstructor class for working with image tag/ класс для работы с тегом изображения
     */
    constructor(props: ImageProps, element: Ref<HTMLElement | undefined>, className: string, emits?: ConstrEmit<ImageEmits> | undefined, ImageTypeConstructor?: typeof ImageType, ImageDataConstructor?: typeof ImageData_2, ImageCoordinatorConstructor?: typeof ImageCoordinator, ImagePositionConstructor?: typeof ImagePosition, ImageAdaptiveItemConstructor?: typeof ImageAdaptiveItem, ImageBackgroundConstructor?: typeof ImageBackground, ImageImgConstructor?: typeof ImageImg);
    /**
     * Determines the tag to use/ Определяет используемый тег
     */
    readonly tag: ComputedRef<string>;
    /**
     * Values for the text. Text is used for the type of icon that works as a background.
     *
     * Значения для текста. Текст используется для типа иконки, который работает как фон.
     */
    readonly text: ComputedRef<string | undefined>;
    /**
     * Values for the class.
     *
     * Значения для класса.
     */
    readonly classes: ComputedRef<ConstrClassObject>;
    /**
     * Calculates all properties for the style of the element/
     * Вычисляет все свойства для стиля элемента
     */
    readonly styles: ComputedRef<ConstrStyles>;
    /**
     * Computed bindings for the image element.
     *
     * Вычисляемые привязки для элемента изображения.
     */
    readonly binds: ComputedRef<{
        id?: string;
        role?: RoleType;
        tabindex?: NumberOrString_2;
        'aria-activedescendant'?: string;
        'aria-atomic'?: AriaTrueOrFalse;
        'aria-autocomplete'?: "none" | "inline" | "list" | "both";
        'aria-busy'?: AriaTrueOrFalse;
        'aria-checked'?: AriaTrueOrFalse | "mixed";
        'aria-colcount'?: number;
        'aria-colindex'?: number;
        'aria-colspan'?: number;
        'aria-controls'?: string;
        'aria-current'?: AriaTrueOrFalse | "page" | "step" | "location" | "date" | "time";
        'aria-describedby'?: string;
        'aria-details'?: string;
        'aria-disabled'?: AriaTrueOrFalse;
        'aria-errormessage'?: string;
        'aria-expanded'?: AriaTrueOrFalse;
        'aria-flowto'?: string;
        'aria-grabbed'?: AriaTrueOrFalse;
        'aria-haspopup'?: AriaTrueOrFalse | "dialog" | "menu" | "listbox" | "tree" | "grid";
        'aria-hidden'?: AriaTrueOrFalse;
        'aria-invalid'?: AriaTrueOrFalse | "grammar" | "spelling";
        'aria-keyshortcuts'?: string;
        'aria-label'?: string;
        'aria-labelledby'?: string;
        'aria-level'?: number;
        'aria-live'?: "off" | "polite" | "assertive";
        'aria-modal'?: AriaTrueOrFalse;
        'aria-multiline'?: AriaTrueOrFalse;
        'aria-multiselectable'?: AriaTrueOrFalse;
        'aria-orientation'?: "horizontal" | "vertical" | "undefined";
        'aria-owns'?: string;
        'aria-placeholder'?: string;
        'aria-posinset'?: number;
        'aria-pressed'?: AriaTrueOrFalse | "mixed";
        'aria-readonly'?: AriaTrueOrFalse;
        'aria-relevant'?: "additions" | "removals" | "text" | "all" | string;
        'aria-required'?: AriaTrueOrFalse;
        'aria-roledescription'?: string;
        'aria-rowcount'?: number;
        'aria-rowindex'?: number;
        'aria-rowspan'?: number;
        'aria-selected'?: AriaTrueOrFalse;
        'aria-setsize'?: number;
        'aria-sort'?: "none" | "ascending" | "descending" | "other";
        'aria-valuemax'?: string | number;
        'aria-valuemin'?: string | number;
        'aria-valuenow'?: string | number;
        'aria-valuetext'?: string;
        translate: string;
    }>;
    /**
     * Bindings for the image value.
     *
     * Привязки для значения изображения.
     */
    readonly valueBinds: ComputedRef<any>;
}
export { Image_2 as Image }

/**
 * A class for managing the adapted scaling of a specific element.
 *
 * Класс для управления адаптированным масштабированием конкретного элемента.
 */
declare class ImageAdaptiveItem {
    protected readonly props: ImageProps;
    protected readonly data: ImageData_2;
    readonly element: Ref<ImageElement>;
    readonly percent: Ref<{
        width: number;
        height: number;
    }, ImageSize | {
        width: number;
        height: number;
    }>;
    protected beyond: boolean;
    protected visible: boolean;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param element image element for scaling/ элемент изображения для масштабирования
     * @param data image data/ данные изображения
     */
    constructor(props: ImageProps, data: ImageData_2, element: Ref<ImageElement>);
    /**
     * Is the element active for size alignment.
     *
     * Активен ли элемент для выравнивания размера.
     */
    readonly active: ComputedRef<boolean>;
    /**
     * Returns the name of the group.
     *
     * Возвращает название группы.
     */
    readonly group: ComputedRef<string>;
    /**
     * Returns the physical width of the object.
     *
     * Возвращает физическую ширину объекта.
     */
    readonly width: ComputedRef<number>;
    /**
     * Returns the physical height of the object.
     *
     * Возвращает физическую высоту объекта.
     */
    readonly height: ComputedRef<number>;
    /**
     * Returns the axis for scaling.
     *
     * Возвращает ось для масштабирования.
     */
    readonly type: ComputedRef<ImageAdaptiveItemType | undefined>;
    /**
     * Calculation of the base size of the image to determine how to scale the image.
     *
     * Вычисление базового размера изображения, чтобы определить, как надо масштабировать изображение.
     */
    readonly size: ComputedRef<number>;
    /**
     * Multiplier for determining the level of image scaling relative to other elements.
     *
     * Множитель для определения уровня масштабирования изображения относительно других элементов.
     */
    readonly factor: ComputedRef<number>;
    /**
     * Checks if the element’s conditions are suitable for scaling.
     *
     * Проверяет, подходить ли у элемента условия для масштабирования.
     */
    is(): boolean;
    /**
     * Checks for compliance with the group.
     *
     * Проверяет на соответствие группе.
     * @param name name of the checked group/ название проверяемой группы
     */
    isGroup(name: string): boolean;
    /**
     * Is it available for calculation.
     *
     * Доступен ли для вычисления.
     */
    isBeyond(): boolean;
    /**
     * Is the element visible.
     *
     * Виден ли элемент.
     */
    isVisible(): boolean;
    /**
     * Returns the identifier of the element.
     *
     * Возвращает идентификатор элемента.
     */
    getId(): string;
    /**
     * Returns values for the background-size property.
     *
     * Возвращает значения для свойства background-size.
     */
    getBackgroundSize(): string | null;
    /**
     * Size change for calculation.
     *
     * Изменение размера для вычисления.
     * @param width width value/ значение ширины
     * @param height height value/ значение высоты
     */
    setPercent(width: number, height: number): this;
    /**
     * Removal of an element from the scaling list.
     *
     * Удаление элемента из списка для масштабирования.
     */
    remove(): void;
    /**
     * Updating the visibility and activity status of the element.
     *
     * Обновление статуса видимости и активности элемента.
     */
    make(): this;
}

declare enum ImageAdaptiveItemType {
    x = "x",
    y = "y"
}

export declare type ImageAttrs = Record<keyof HTMLImageElement, any>;

/**
 * A class for getting the value of background.
 *
 * Класс для получения значения background.
 */
declare class ImageBackground {
    protected readonly props: ImageProps;
    protected readonly data: ImageData_2;
    protected readonly coordinator: ImageCoordinator;
    protected readonly adaptive: ImageAdaptiveItem;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param data image data/ данные изображения
     * @param coordinator object for working with coordinates/ объект для работы с координатами
     * @param adaptive an object for working with adapted scaling/ объект для работы с адаптированным масштабированием
     */
    constructor(props: ImageProps, data: ImageData_2, coordinator: ImageCoordinator, adaptive: ImageAdaptiveItem);
    /**
     * Returns values for the background-image property.
     *
     * Возвращает значения для свойства background-image.
     */
    readonly image: ComputedRef<string | null>;
    /**
     * Returns the image source/ Возвращает источник изображения
     */
    readonly imageSrc: ComputedRef<string | null>;
    /**
     * Returns values for the background property.
     *
     * Возвращает значения для свойства background.
     */
    readonly size: ComputedRef<string | null>;
    /**
     * Checks if the object is an image.
     *
     * Проверяет, является ли объект изображением.
     */
    isImage(): boolean;
    /**
     * Returns the value for the background-size property.
     *
     * Возвращает значение для свойства background-size.
     * @param width width value/ значение ширины
     * @param height height value/ значение высоты
     */
    protected getSize(width: NumberOrString, height: NumberOrString): string | null;
    /**
     * Returns sizes according to the coordinator property.
     *
     * Возвращает размеры по свойству координатора.
     */
    protected getSizeByCoordinator(): string | null;
    /**
     * Returns the scaling sizes.
     *
     * Возвращает размеры масштабирования.
     */
    protected getSizeForItem(): string | null;
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export declare type ImageClasses = {
    main: ConstrClass;
};

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export declare type ImageComponents = {};

export declare type ImageComponentsInclude = {
    image: object;
};

/**
 * A class for calculating the central part of the image by its coordinates.
 *
 * Класс для вычисления центральной части изображения по его координатам.
 */
declare class ImageCoordinator {
    protected readonly props: ImageProps;
    /**
     * Constructor
     * @param props input data/ входные данные
     */
    constructor(props: ImageProps);
    /**
     * Returns coordinates.
     *
     * Возвращает координаты.
     */
    readonly coordinator: ComputedRef<ImageCoordinatorItemFull>;
    /**
     * Returns the sizes for the background-position property by coordinates.
     *
     * Возвращает размеры для свойства background-position по координатам.
     */
    readonly size: ComputedRef<ImageSize>;
    /**
     * Checks if there are coordinates for calculation.
     *
     * Проверяет, есть ли координаты для вычисления.
     */
    is(): this is {
        coordinator: Exclude<ImageCoordinatorItem, Undefined>;
    };
    /**
     * Returns the values for the background property.
     *
     * Возвращает значения для свойства background.
     */
    getSize(): ImageSize<string>;
}

export declare type ImageCoordinatorItem = [number] | [number, number] | [number, number, number] | [number, number, number, number] | Undefined;

declare type ImageCoordinatorItemFull = [number, number, number, number];

/**
 * A class for obtaining image or icon data.
 *
 * Класс для получения данных изображения или иконки.
 */
declare class ImageData_2 {
    protected readonly props: ImageProps;
    protected readonly type: ImageType;
    /**
     * Returns images.
     *
     * Возвращает изображения.
     */
    readonly image: Ref<ImageEventItem, ImageEventItem>;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param type image type/ тип изображения
     */
    constructor(props: ImageProps, type: ImageType);
    /**
     * Checks if there are values.
     *
     * Проверяет, есть ли значения.
     */
    is(): this is {
        image: Exclude<ImageEventItem, Undefined>;
    };
    /**
     * Checks if the value is a link, that is, a type of string.
     *
     * Проверяет, является ли значение ссылкой, то есть видом строки.
     */
    isLink(): this is {
        image: Ref<string>;
    };
    /**
     * Checks if the value is an image object.
     *
     * Проверяет, является ли значение объектом изображения.
     */
    isImage(): this is {
        image: Ref<ImageItem>;
    };
    /**
     * Calculates the image value and returns it.
     *
     * Вычисляет значение изображения и возвращает его.
     */
    protected init(): Promise<ImageEventItem>;
}

/**
 * ImageDesign
 */
export declare class ImageDesign<COMP extends ImageComponents, EXPOSE extends ImageExpose, CLASSES extends ImageClasses, P extends ImagePropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, ImageEmits, EXPOSE, ImageSlots, CLASSES, P> {
    protected readonly item: Image_2;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     * @param ItemConstructor image item class/ класс элемента изображения
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, ImageEmits, P>, ItemConstructor?: typeof Image_2);
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
     * Properties for the image tag.
     *
     * Свойства для тега image.
     */
    readonly propsImage: ComputedRef<any>;
    /**
     * Main properties.
     *
     * Основные свойства.
     */
    readonly propsMain: ComputedRef<any>;
    /**
     * Rendering the picture tag.
     *
     * Рендеринг тега picture.
     */
    readonly renderPicture: () => VNode;
    /**
     * Rendering the img tag.
     *
     * Рендеринг тега img.
     */
    readonly renderImg: () => VNode;
    /**
     * Rendering the img item.
     *
     * Рендеринг элемента img.
     */
    readonly renderImgItem: () => VNode;
    /**
     * Rendering the value for the component.
     *
     * Рендеринг значения для компонента.
     */
    readonly renderValue: () => string | VNode | undefined;
}

export declare type ImageElement = HTMLElement | undefined;

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export declare type ImageEmits = {
    load: [image: ImageEventData];
};

export declare type ImageEmitsInclude = ImageEmits;

export declare type ImageEventData = ImageEventType & {
    image: ImageEventItem;
};

export declare type ImageEventItem = ImageItem | string | undefined;

export declare type ImageEventType = {
    type: ImageTypeItem;
};

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export declare type ImageExpose = {
    type: ComputedRef<ImageTypeItem>;
    data: Ref<ImageEventItem>;
};

/**
 * A class for working with the img tag.
 *
 * Класс для работы с тегом img.
 */
declare class ImageImg {
    protected readonly props: ImageProps;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly type: ImageType;
    protected readonly position: ImagePosition;
    protected readonly background: ImageBackground;
    protected lazyInit: Ref<boolean, boolean>;
    protected lazyStatus?: WatchHandle;
    constructor(props: ImageProps, element: Ref<HTMLElement | undefined>, type: ImageType, position: ImagePosition, background: ImageBackground);
    /**
     * Determines whether to use the img tag/ Определяет, использовать ли тег img
     */
    readonly is: ComputedRef<boolean>;
    /**
     * Determines whether lazy loading is enabled/ Определяет, включена ли ленивя загрузка
     */
    readonly isLazy: ComputedRef<boolean>;
    /**
     * Determines whether to use the picture tag/ Определяет, использовать ли тег picture
     */
    readonly isPicture: ComputedRef<boolean>;
    /**
     * Calculates all properties for binding to the element/
     * Вычисляет все свойства для привязки к элементу
     */
    readonly binds: ComputedRef<ConstrBind<ImageAttrs>>;
    /**
     * Calculates the picture sources for different resolutions/
     * Вычисляет источники picture для разных разрешений
     */
    readonly picture: ComputedRef<ImagePictureList | undefined>;
    /**
     * Calculates styles for binding to the element.
     *
     * Вычисляет стили для привязки к элементу.
     */
    readonly styles: ComputedRef<Record<string, any>>;
    /**
     * Checks if the type is file or image.
     *
     * Проверяет, является ли тип файлом или изображением.
     */
    protected isType(): boolean;
    /**
     * Checks if the size is contained or cover.
     *
     * Проверяет, является ли размер contain или cover.
     */
    protected isSize(): boolean;
    /**
     * Returns the value for the transform scale.
     *
     * Возвращает значение для свойства transform scale.
     */
    protected getSize(): string | undefined;
    /**
     * Returns the srcset attribute value.
     *
     * Возвращает значение атрибута srcset.
     */
    protected getSrcset(): string | undefined;
    /**
     * Converts the srcset key to a string.
     *
     * Преобразует ключ srcset в строку.
     * @param key key/ ключ
     */
    protected toSrcsetKey(key: string | number): string;
    /**
     * Initializes lazy loading.
     *
     * Инициализирует ленивую загрузку.
     */
    protected makeLazy(): void;
}

/**
 * Parameters for the uploaded image or the one available by a direct link.
 *
 * Параметры для загруженного изображения или доступного по прямой ссылке.
 */
export declare type ImageItem = ImageSize & {
    image: HTMLImageElement;
    src: string;
};

export declare type ImagePicture = Record<string, string> | ImagePictureList;

export declare type ImagePictureItem = Record<keyof HTMLSourceElement & 'key', any>;

export declare type ImagePictureList = ImagePictureItem[];

/**
 * A class for obtaining data for the background-position property.
 *
 * Класс для получения данных для свойства background-position.
 */
declare class ImagePosition {
    protected readonly props: ImageProps;
    protected readonly coordinator: ImageCoordinator;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param coordinator coordinates for margins/ координаты для отступов
     */
    constructor(props: ImageProps, coordinator: ImageCoordinator);
    /**
     * Returns the position on the left.
     *
     * Возвращает позицию слева.
     */
    readonly x: ComputedRef<string>;
    /**
     * Returns the position on the top.
     *
     * Возвращает позицию сверху.
     */
    readonly y: ComputedRef<string>;
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export declare interface ImageProps extends ImagePropsBasic, ImagePropsToken {
}

export declare interface ImagePropsBasic {
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

export declare interface ImagePropsInclude<Image extends ImagePropsBasic = ImagePropsBasic> {
    image?: string | ConstrBind<Image>;
}

declare interface ImagePropsToken {
    turn?: boolean;
    disabled?: boolean;
    hide?: boolean;
    adaptive?: boolean;
    size?: 'auto' | 'contain' | 'cover';
}

export declare type ImageSize<T = number> = {
    width: T;
    height: T;
};

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export declare interface ImageSlots {
}

/**
 * Class for working with the image type.
 *
 * Класс для работы с типом изображения.
 */
declare class ImageType {
    protected readonly props: ImageProps;
    /**
     * Constructor
     * @param props input data/ входные данные
     */
    constructor(props: ImageProps);
    /**
     * Get the image type.
     *
     * Получения тип изображения.
     */
    readonly item: ComputedRef<ImageTypeItem>;
}

export declare type ImageTypeItem = ImageTypeValue | Undefined;

export declare enum ImageTypeValue {
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

export declare type ImageValue<Image extends ImagePropsBasic = ImagePropsBasic> = string | ConstrBind<Image> | null;

declare type RoleType = string | 'alert' | 'alertdialog' | 'application' | 'article' | 'banner' | 'button' | 'cell' | 'checkbox' | 'columnheader' | 'combobox' | 'command' | 'comment' | 'complementary' | 'composite' | 'contentinfo' | 'definition' | 'dialog' | 'directory' | 'document' | 'feed' | 'figure' | 'form' | 'generic' | 'grid' | 'gridcell' | 'group' | 'heading' | 'img' | 'input' | 'landmark' | 'link' | 'list' | 'listbox' | 'listitem' | 'log' | 'main' | 'mark' | 'marquee' | 'math' | 'menu' | 'menubar' | 'menuitem' | 'menuitemcheckbox' | 'menuitemradio' | 'meter' | 'navigation' | 'none' | 'note' | 'option' | 'presentation' | 'progressbar' | 'radio' | 'radiogroup' | 'range' | 'region' | 'roletype' | 'row' | 'rowgroup' | 'rowheader' | 'scrollbar' | 'search' | 'searchbox' | 'section' | 'sectionhead' | 'select' | 'separator' | 'slider' | 'spinbutton' | 'status' | 'structure' | 'suggestion' | 'switch' | 'tab' | 'table' | 'tablist' | 'tabpanel' | 'term' | 'textbox' | 'timer' | 'toolbar' | 'tooltip' | 'tree' | 'treegrid' | 'treeitem' | 'widget' | 'window';

export { }

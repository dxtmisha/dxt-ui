import { Undefined } from '@dxtmisha/functional-basic';

/** Error group name for the constructor/ Название группы ошибок для конструктора */
export declare const CONSTRUCTOR_ERROR_GROUP = "constructor";

/**
 * A class for calculating the central part of the image by its coordinates.
 *
 * Класс для вычисления центральной части изображения по его командам.
 */
export declare abstract class ImageCoordinator {
    /**
     * Checks if there are coordinates for calculation.
     *
     * Проверяет, есть ли координаты для вычисления.
     */
    is(): this is {
        getCoordinator: () => Exclude<ImageCoordinatorItem, Undefined>;
    };
    /**
     * Returns the coordinates of the image's center.
     *
     * Возвращает координаты центра изображения.
     */
    abstract get(): ImageCoordinatorItemFull;
    /**
     * Returns the size of the image.
     *
     * Возвращает размер изображения.
     */
    abstract getSize(): ImageSize;
    /**
     * Returns the values for the background property.
     *
     * Возвращает значения для свойства background.
     */
    getBackgroundSize(): ImageSize<string>;
    /**
     * Returns the coordinates of the central part.
     *
     * Возвращает координаты центральной части.
     */
    protected abstract getCoordinator(): number[] | any | undefined;
    /**
     * Normalizes the coordinate values.
     *
     * Нормализует значения координат.
     */
    protected initCoordinator(): ImageCoordinatorItemFull;
    /**
     * Initializes the image size based on the coordinates.
     *
     * Инициализирует размер изображения на основе координат.
     */
    protected initSize(): ImageSize;
}

/** Image coordinator item type / Тип элемента координат изображения */
export declare type ImageCoordinatorItem = [number] | [number, number] | [number, number, number] | [number, number, number, number] | Undefined;

export declare type ImageCoordinatorItemFull = [number, number, number, number];

/**
 * Abstract class for managing image data.
 *
 * Абстрактный класс для управления данными изображения.
 */
declare abstract class ImageData_2 {
    protected readonly type: ImageType;
    /**
     * Constructor
     * @param type image type/ тип изображения
     */
    protected constructor(type: ImageType);
    /**
     * Checks if there are values.
     *
     * Проверяет, есть ли значения.
     */
    is(): boolean;
    /**
     * Checks if the value is a link, that is, a type of string.
     *
     * Проверяет, является ли значение ссылкой, то есть видом строки.
     */
    isLink(): boolean;
    /**
     * Checks if the value is an image object.
     *
     * Проверяет, является ли значение объектом изображения.
     */
    isImage(): boolean;
    /**
     * Returns the image data.
     *
     * Возвращает данные изображения.
     */
    abstract getImage(): ImageEventItem;
    /**
     * Returns the value of the image.
     *
     * Возвращает значение изображения.
     */
    protected abstract getValue(): any;
    /**
     * Returns whether lazy loading is enabled.
     *
     * Возвращает, включена ли отложенная загрузка.
     */
    protected abstract getLazy(): boolean | undefined;
    /**
     * Returns the URL of the image.
     *
     * Возвращает URL изображения.
     */
    protected abstract getUrl(): string | undefined;
    /**
     * Calculates the image value and returns it.
     *
     * Вычисляет значение изображения и возвращает его.
     */
    protected initData(): Promise<ImageEventItem>;
}
export { ImageData_2 as ImageData }

/** Image event data type / Тип данных события изображения */
export declare type ImageEventData = ImageEventType & {
    /** Image event data/ Данные события изображения */
    image: ImageEventItem;
};

/** Image event item type / Тип элемента события изображения */
export declare type ImageEventItem = ImageItem | string | undefined;

/** Image event type / Тип события изображения */
export declare type ImageEventType = {
    /** Event type/ Тип события */
    type: ImageTypeItem;
};

/**
 * Class for working with uploaded images.
 *
 * Класс для работы с загруженными изображениями.
 */
export declare class ImageFile {
    /**
     * Checks if the file is an image.
     *
     * Проверяет, является ли файл изображением.
     * @param file verified file/ проверяемый файл
     */
    static isImage(file: File): boolean;
    /**
     * Creates an image based on a file or a link.
     *
     * Создает изображение на основе файла или ссылки.
     * @param src file or link/ файл или ссылка
     */
    static createImage(src: string | File): Promise<ImageItem | undefined>;
    /**
     * Returns a link to the image.
     *
     * Возвращает ссылку на изображение.
     * @param src file or link/ файл или ссылка
     */
    static getPath(src: string | File): Promise<string>;
    /**
     * Applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer.
     *
     * Асинхронно читать содержимое файлов (или буферы данных), хранящиеся на компьютере пользователя.
     * @param file the Blob or File from which to read/ Blob или File которые следует прочитать
     */
    static getFileResult(file: File): Promise<string>;
    /**
     * Applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer.
     *
     * Асинхронно читать содержимое файлов (или буферы данных), хранящиеся на компьютере пользователя.
     * @param file the Blob or File from which to read/ Blob или File которые следует прочитать
     */
    static getFileReader(file: File): Promise<string>;
    /**
     * Image size adaptation. Checks if the image size is larger than maxSize, reduces it to maxSize.
     *
     * Адаптация размера изображения. Проверяет, если размер изображения больше maxSize, уменьшает его до maxSize.
     * @param image image element/ элемент изображения
     * @param src link to image/ ссылка на изображение
     * @param maxSize maximum allowable image size/ максимальный допустимый размер изображения
     */
    protected static getSRC(image: HTMLImageElement, src?: string | File, maxSize?: number): string;
}

/** Parameters for the uploaded image or the one available by a direct link / Параметры для загруженного изображения или доступного по прямой ссылке */
export declare type ImageItem = ImageSize & {
    /** Image element/ Элемент изображения */
    image: HTMLImageElement;
    /** Source URL/ URL-источник */
    src: string;
};

/**
 * Class for working with PDF files.
 *
 * Класс для работы с PDF-файлами.
 */
export declare class ImagePdf {
    /**
     * Checks if the file is an image.
     *
     * Проверяет, является ли файл PDF.
     * @param file verified file/ проверяемый файл
     */
    static isPdf(file: string | File): boolean;
    /**
     * Applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer.
     *
     * Асинхронно читать содержимое файлов (или буферы данных), хранящиеся на компьютере пользователя.
     * @param file the Blob or File from which to read/ Blob или File которые следует прочитать
     */
    static get(file: string | File): Promise<string>;
}

/**
 * A class for collecting data for the background-position property.
 *
 * Класс для получения данных для свойства background-position.
 */
export declare abstract class ImagePosition {
    protected readonly coordinator: ImageCoordinator;
    /**
     * Constructor
     * @param coordinator coordinates for margins/ координаты для отступов
     */
    protected constructor(coordinator: ImageCoordinator);
    /**
     * Returns the position on the left.
     *
     * Возвращает позицию слева.
     */
    abstract getX(): string;
    /**
     * Returns the position on the top.
     *
     * Возвращает позицию сверху.
     */
    abstract getY(): string;
    /**
     * Returns the position on the left.
     *
     * Возвращает позицию по горизонтали.
     */
    protected abstract getPropX(): string | number | undefined;
    /**
     * Returns the position on the top.
     *
     * Возвращает позицию по вертикали.
     */
    protected abstract getPropY(): string | number | undefined;
    /**
     * Initializes the position on the left.
     *
     * Инициализирует позицию слева.
     */
    protected initX(): string;
    /**
     * Initializes the position on the top.
     *
     * Инициализирует позицию сверху.
     */
    protected initY(): string;
}

/** Image size type / Тип размера изображения */
export declare type ImageSize<T = number> = {
    /** Width/ Ширина */
    width: T;
    /** Height/ Высота */
    height: T;
};

/**
 * Abstract class for defining the image type.
 *
 * Абстрактный класс для определения типа изображения.
 */
export declare abstract class ImageType {
    /**
     * Returns the image type.
     *
     * Возвращает тип изображения.
     */
    abstract getType(): ImageTypeItem;
    /**
     * Returns the value of the image.
     *
     * Возвращает значение изображения.
     */
    protected abstract getValue(): string | any;
    /**
     * Initializes the image type based on the value.
     *
     * Инициализирует тип изображения на основе значения.
     */
    protected initType(): ImageTypeItem;
}

/** Image type item / Элемент типа изображения */
export declare type ImageTypeItem = ImageTypeValue | Undefined;

/** Enumeration of image types / Перечисление типов изображений */
export declare enum ImageTypeValue {
    /** PDF file/ PDF файл */
    pdf = "pdf",
    /** Generic file/ Файл общего вида */
    file = "file",
    /** Array of values/ Массив значений */
    array = "array",
    /** Direct link to an image/ Прямая ссылка на изображение */
    image = "image",
    /** Flag icon/ Иконка флага */
    flag = "flag",
    /** Compressed flag icon/ Сжатая иконка флага */
    flagCompressed = "flag-compressed",
    /** Solid color/ Сплошной цвет */
    color = "color",
    /** Publicly available link/ Публично доступная ссылка */
    public = "public",
    /** Filled style/ Заполненный стиль */
    filled = "filled",
    /** Outlined style/ Контурный стиль */
    outlined = "outlined",
    /** Rounded style/ Закругленный стиль */
    round = "round",
    /** Sharp style/ Острый стиль */
    sharp = "sharp",
    /** Two-tone style/ Двухцветный стиль */
    twoTone = "two-tone",
    /** Material design icon/ Иконка Material Design */
    material = "material",
    /** Generic icon/ Иконка общего вида */
    icon = "icon"
}

/**
 * Class for working with an image in Uint8Array format.
 *
 * Класс для работы с изображением в формате Uint8Array.
 */
export declare class ImageUint8Array {
    /**
     * Check if the value is an image in Uint8Array or ArrayBuffer format.
     *
     * Проверяет, является ли значение изображением в формате Uint8Array или ArrayBuffer.
     * @param value image/ изображение
     */
    static is(value: unknown): value is ImageUint8ArrayType;
    /**
     * Create an image from a Uint8Array or ArrayBuffer.
     *
     * Создает изображение из Uint8Array или ArrayBuffer.
     * @param value image/ изображение
     * @param type image type/ тип изображения
     */
    static createImage(value: ImageUint8ArrayType, type?: string): ImageItem | undefined;
    /**
     * Convert an image to a Uint8Array.
     *
     * Преобразует изображение в Uint8Array.
     * @param value image/ изображение
     */
    static toUint8Array(value: ImageUint8ArrayType): Uint8Array<ArrayBuffer>;
    /**
     * Get cache item.
     *
     * Получает элемент из кэша.
     * @param value image/ изображение
     * @param type image type/ тип изображения
     */
    protected static getCacheItem(value: ImageUint8ArrayType, type: string): ImageUint8ArrayItem | undefined;
    /**
     * Add cache item.
     *
     * Добавляет элемент в кэш.
     * @param value image/ изображение
     * @param type image type/ тип изображения
     * @param src image src/ src изображения
     */
    protected static addCacheItem(value: ImageUint8ArrayType, type: string, src: string): void;
}

/** Image Uint8Array cache / Кэш Image Uint8Array */
export declare type ImageUint8ArrayCache = ImageUint8ArrayItem[];

/** Image Uint8Array item / Элемент Image Uint8Array */
export declare type ImageUint8ArrayItem = {
    /** Data buffer/ Буфер данных */
    item: ImageUint8ArrayType;
    /** MIME type/ MIME-тип */
    type: string;
    /** Source URL/ URL-источник */
    src: string;
};

/** Image Uint8Array type / Тип Image Uint8Array */
export declare type ImageUint8ArrayType = Uint8Array<ArrayBuffer> | ArrayBuffer;

/**
 * Maximum size allowed without conversion/
 * Максимальный размер, допустимый без преобразования
 */
export declare const MAX_SIZE: number;

export { }

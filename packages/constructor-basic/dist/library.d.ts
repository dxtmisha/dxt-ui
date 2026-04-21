import { Undefined } from '@dxtmisha/functional';

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

/** Image size type / Тип размера изображения */
export declare type ImageSize<T = number> = {
    /** Width/ Ширина */
    width: T;
    /** Height/ Высота */
    height: T;
};

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
 * Maximum size allowed without conversion/
 * Максимальный размер, допустимый без преобразования
 */
export declare const MAX_SIZE: number;

export { }

import { ImageItem } from './basicTypes';
/**
 * Maximum size allowed without conversion.
 *
 * Максимальный размер, допустимый без преобразования.
 */
export declare const MAX_SIZE: number;
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

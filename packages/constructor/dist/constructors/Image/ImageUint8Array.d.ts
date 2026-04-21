import { ImageUint8ArrayItem, ImageUint8ArrayType } from './basicTypes';
import { ImageItem } from '@dxtmisha/constructor-basic';
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

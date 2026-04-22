import { ImageData, ImageEventItem, ImageItem } from '@dxtmisha/constructor-basic';
import { ImageTypeRef } from './ImageTypeRef';
import { ImageProps } from './props';
import { ComputedRef } from 'vue';
/**
 * A class for obtaining image or icon data.
 *
 * Класс для получения данных изображения или иконки.
 */
export declare class ImageDataRef extends ImageData {
    protected readonly props: ImageProps;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param type image type/ тип изображения
     */
    constructor(props: ImageProps, type: ImageTypeRef);
    /**
     * Asynchronously calculates and returns the image data/
     * Асинхронно вычисляет и возвращает данные изображения
     */
    readonly image: ComputedRef<string | ImageItem | undefined>;
    /**
     * Returns the image data.
     *
     * Возвращает данные изображения.
     */
    getImage(): ImageEventItem;
    /**
     * Returns the value of the image.
     *
     * Возвращает значение изображения.
     */
    protected getValue(): any;
    /**
     * Returns whether lazy loading is enabled.
     *
     * Возвращает, включена ли отложенная загрузка.
     */
    protected getLazy(): boolean | undefined;
    /**
     * Returns the URL of the image.
     *
     * Возвращает URL изображения.
     */
    protected getUrl(): string | undefined;
}

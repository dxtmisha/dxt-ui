import { Ref } from 'vue';
import { Undefined } from '@dxtmisha/functional';
import { ImageType } from './ImageType';
import { ImageEventItem, ImageItem } from './basicTypes';
import { ImageProps } from './props';
/**
 * A class for obtaining image or icon data.
 *
 * Класс для получения данных изображения или иконки.
 */
export declare class ImageData {
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

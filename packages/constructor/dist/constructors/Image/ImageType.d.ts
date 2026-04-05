import { ImageTypeItem } from './basicTypes';
import { ImageProps } from './props';
import { ComputedRef } from 'vue';
/**
 * Class for working with the image type.
 *
 * Класс для работы с типом изображения.
 */
export declare class ImageType {
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

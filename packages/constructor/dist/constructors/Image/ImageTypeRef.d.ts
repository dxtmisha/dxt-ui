import { ImageType, ImageTypeItem } from '@dxtmisha/constructor-basic';
import { ImageProps } from './props';
import { ComputedRef } from 'vue';
/**
 * Class for working with the image type.
 *
 * Класс для работы с типом изображения.
 */
export declare class ImageTypeRef extends ImageType {
    protected readonly props: ImageProps;
    /**
     * Constructor
     * @param props input data/ входные данные
     */
    constructor(props: ImageProps);
    /** Get the image type/ Получения типа изображения */
    readonly item: ComputedRef<ImageTypeItem>;
    /**
     * Returns the image type.
     *
     * Возвращает тип изображения.
     */
    getType(): ImageTypeItem;
    /**
     * Returns the value of the image.
     *
     * Возвращает значение изображения.
     */
    protected getValue(): string | any | undefined;
}

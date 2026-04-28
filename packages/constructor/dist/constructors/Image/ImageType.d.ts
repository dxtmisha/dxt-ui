import { ClientOnlyInclude } from '../../classes/ClientOnlyInclude';
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
    protected readonly clientOnly: ClientOnlyInclude;
    /**
     * Constructor
     * @param props input data / входные данные
     * @param clientOnly class for working with ClientOnly / класс для работы с ClientOnly
     */
    constructor(props: ImageProps, clientOnly: ClientOnlyInclude);
    /**
     * Get the image type.
     *
     * Получения тип изображения.
     * @returns image type / тип изображения
     */
    readonly item: ComputedRef<ImageTypeItem>;
}

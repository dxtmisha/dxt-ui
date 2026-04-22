import { ImageCoordinator, ImageCoordinatorItemFull, ImageSize } from '@dxtmisha/constructor-basic';
import { ImageProps } from './props';
import { ComputedRef } from 'vue';
/**
 * A class for calculating the central part of the image by its coordinates.
 *
 * Класс для вычисления центральной части изображения по его координатам.
 */
export declare class ImageCoordinatorRef extends ImageCoordinator {
    protected readonly props: ImageProps;
    /**
     * Constructor
     * @param props input data/ входные данные
     */
    constructor(props: ImageProps);
    /** Returns coordinates/ Возвращает координаты */
    readonly coordinator: ComputedRef<ImageCoordinatorItemFull>;
    /**
     * Returns the sizes for the background-position property by coordinates/
     * Возвращает размеры для свойства background-position по координатам
     */
    readonly size: ComputedRef<ImageSize>;
    /**
     * Returns the coordinates of the image's center.
     *
     * Возвращает координаты центра изображения.
     */
    get(): ImageCoordinatorItemFull;
    /**
     * Returns the size of the image.
     *
     * Возвращает размер изображения.
     */
    getSize(): ImageSize;
    /**
     * Returns the coordinates of the central part.
     *
     * Возвращает координаты центральной части.
     */
    protected getCoordinator(): any;
}

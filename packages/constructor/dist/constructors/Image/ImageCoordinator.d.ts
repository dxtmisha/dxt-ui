import { Undefined } from '@dxtmisha/functional';
import { ImageCoordinatorItem, ImageSize } from './basicTypes';
import { ImageProps } from './props';
import { ComputedRef } from 'vue';
type ImageCoordinatorItemFull = [number, number, number, number];
/**
 * A class for calculating the central part of the image by its coordinates.
 *
 * Класс для вычисления центральной части изображения по его координатам.
 */
export declare class ImageCoordinator {
    protected readonly props: ImageProps;
    /**
     * Constructor
     * @param props input data/ входные данные
     */
    constructor(props: ImageProps);
    /**
     * Returns coordinates.
     *
     * Возвращает координаты.
     */
    readonly coordinator: ComputedRef<ImageCoordinatorItemFull>;
    /**
     * Returns the sizes for the background-position property by coordinates.
     *
     * Возвращает размеры для свойства background-position по координатам.
     */
    readonly size: ComputedRef<ImageSize>;
    /**
     * Checks if there are coordinates for calculation.
     *
     * Проверяет, есть ли координаты для вычисления.
     */
    is(): this is {
        coordinator: Exclude<ImageCoordinatorItem, Undefined>;
    };
    /**
     * Returns the values for the background property.
     *
     * Возвращает значения для свойства background.
     */
    getSize(): ImageSize<string>;
}
export {};

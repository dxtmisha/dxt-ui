import { ImageCoordinator } from './ImageCoordinator';
import { ImageProps } from './props';
import { ComputedRef } from 'vue';
/**
 * A class for obtaining data for the background-position property.
 *
 * Класс для получения данных для свойства background-position.
 */
export declare class ImagePosition {
    protected readonly props: ImageProps;
    protected readonly coordinator: ImageCoordinator;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param coordinator coordinates for margins/ координаты для отступов
     */
    constructor(props: ImageProps, coordinator: ImageCoordinator);
    /**
     * Returns the position on the left.
     *
     * Возвращает позицию слева.
     */
    readonly x: ComputedRef<string>;
    /**
     * Returns the position on the top.
     *
     * Возвращает позицию сверху.
     */
    readonly y: ComputedRef<string>;
}

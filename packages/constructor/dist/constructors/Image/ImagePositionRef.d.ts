import { ImagePosition } from '@dxtmisha/constructor-basic';
import { ImageCoordinatorRef } from './ImageCoordinatorRef';
import { ImageProps } from './props';
import { ComputedRef } from 'vue';
/**
 * A class for collecting data for the background-position property.
 *
 * Класс для получения данных для свойства background-position.
 */
export declare class ImagePositionRef extends ImagePosition {
    protected readonly props: ImageProps;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param coordinator coordinates for margins/ координаты для отступов
     */
    constructor(props: ImageProps, coordinator: ImageCoordinatorRef);
    /** Returns the position on the left/ Возвращает позицию слева */
    readonly x: ComputedRef<string>;
    /** Returns the position on the top/ Возвращает позицию сверху */
    readonly y: ComputedRef<string>;
    /**
     * Returns the position on the left.
     *
     * Возвращает позицию слева.
     */
    getX(): string;
    /**
     * Returns the position on the top.
     *
     * Возвращает позицию сверху.
     */
    getY(): string;
    /**
     * Returns the position on the left.
     *
     * Возвращает позицию по горизонтали.
     */
    protected getPropX(): string | number | undefined;
    /**
     * Returns the position on the top.
     *
     * Возвращает позицию по вертикали.
     */
    protected getPropY(): string | number | undefined;
}

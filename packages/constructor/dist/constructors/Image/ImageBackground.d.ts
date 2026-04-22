import { NumberOrString } from '@dxtmisha/functional';
import { ImageData } from './ImageData';
import { ImageCoordinator } from './ImageCoordinator';
import { ImageAdaptiveItem } from './ImageAdaptiveItem';
import { ImageProps } from './props';
import { ComputedRef } from 'vue';
/**
 * A class for getting the value of background.
 *
 * Класс для получения значения background.
 */
export declare class ImageBackground {
    protected readonly props: ImageProps;
    protected readonly data: ImageData;
    protected readonly coordinator: ImageCoordinator;
    protected readonly adaptive: ImageAdaptiveItem;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param data image data/ данные изображения
     * @param coordinator object for working with coordinates/ объект для работы с координатами
     * @param adaptive an object for working with adapted scaling/ объект для работы с адаптированным масштабированием
     */
    constructor(props: ImageProps, data: ImageData, coordinator: ImageCoordinator, adaptive: ImageAdaptiveItem);
    /**
     * Returns values for the background-image property.
     *
     * Возвращает значения для свойства background-image.
     */
    readonly image: ComputedRef<string | null>;
    /**
     * Returns the image source/ Возвращает источник изображения
     */
    readonly imageSrc: ComputedRef<string | null>;
    /**
     * Returns values for the background property.
     *
     * Возвращает значения для свойства background.
     */
    readonly size: ComputedRef<string | null>;
    /**
     * Checks if the object is an image.
     *
     * Проверяет, является ли объект изображением.
     */
    isImage(): boolean;
    /**
     * Returns the value for the background-size property.
     *
     * Возвращает значение для свойства background-size.
     * @param width width value/ значение ширины
     * @param height height value/ значение высоты
     */
    protected getSize(width: NumberOrString, height: NumberOrString): string | null;
    /**
     * Returns sizes according to the coordinator property.
     *
     * Возвращает размеры по свойству координатора.
     */
    protected getSizeByCoordinator(): string | null;
    /**
     * Returns the scaling sizes.
     *
     * Возвращает размеры масштабирования.
     */
    protected getSizeForItem(): string | null;
}

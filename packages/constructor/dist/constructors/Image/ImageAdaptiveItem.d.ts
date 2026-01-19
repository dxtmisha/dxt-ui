import { Ref, ComputedRef } from 'vue';
import { ImageData } from './ImageData';
import { ImageElement, ImageSize } from './basicTypes';
import { ImageProps } from './props';
declare enum ImageAdaptiveItemType {
    x = "x",
    y = "y"
}
/**
 * The value in pixels indicating when an element is still considered active,
 * even if it has gone off the screen.
 *
 * Значение в пикселях, указывающее, когда элемент считается еще активным,
 * даже если он ушел за экран.
 */
export declare const MAX_BEYOND = 512;
/**
 * A class for managing the adapted scaling of a specific element.
 *
 * Класс для управления адаптированным масштабированием конкретного элемента.
 */
export declare class ImageAdaptiveItem {
    protected readonly props: ImageProps;
    protected readonly data: ImageData;
    readonly element: Ref<ImageElement>;
    readonly percent: Ref<{
        width: number;
        height: number;
    }, ImageSize | {
        width: number;
        height: number;
    }>;
    protected beyond: boolean;
    protected visible: boolean;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param element image element for scaling/ элемент изображения для масштабирования
     * @param data image data/ данные изображения
     */
    constructor(props: ImageProps, data: ImageData, element: Ref<ImageElement>);
    /**
     * Is the element active for size alignment.
     *
     * Активен ли элемент для выравнивания размера.
     */
    readonly active: ComputedRef<boolean>;
    /**
     * Returns the name of the group.
     *
     * Возвращает название группы.
     */
    readonly group: ComputedRef<string>;
    /**
     * Returns the physical width of the object.
     *
     * Возвращает физическую ширину объекта.
     */
    readonly width: ComputedRef<number>;
    /**
     * Returns the physical height of the object.
     *
     * Возвращает физическую высоту объекта.
     */
    readonly height: ComputedRef<number>;
    /**
     * Returns the axis for scaling.
     *
     * Возвращает ось для масштабирования.
     */
    readonly type: ComputedRef<ImageAdaptiveItemType | undefined>;
    /**
     * Calculation of the base size of the image to determine how to scale the image.
     *
     * Вычисление базового размера изображения, чтобы определить, как надо масштабировать изображение.
     */
    readonly size: ComputedRef<number>;
    /**
     * Multiplier for determining the level of image scaling relative to other elements.
     *
     * Множитель для определения уровня масштабирования изображения относительно других элементов.
     */
    readonly factor: ComputedRef<number>;
    /**
     * Checks if the element’s conditions are suitable for scaling.
     *
     * Проверяет, подходить ли у элемента условия для масштабирования.
     */
    is(): boolean;
    /**
     * Checks for compliance with the group.
     *
     * Проверяет на соответствие группе.
     * @param name name of the checked group/ название проверяемой группы
     */
    isGroup(name: string): boolean;
    /**
     * Is it available for calculation.
     *
     * Доступен ли для вычисления.
     */
    isBeyond(): boolean;
    /**
     * Is the element visible.
     *
     * Виден ли элемент.
     */
    isVisible(): boolean;
    /**
     * Returns the identifier of the element.
     *
     * Возвращает идентификатор элемента.
     */
    getId(): string;
    /**
     * Returns values for the background-size property.
     *
     * Возвращает значения для свойства background-size.
     */
    getBackgroundSize(): string | null;
    /**
     * Size change for calculation.
     *
     * Изменение размера для вычисления.
     * @param width width value/ значение ширины
     * @param height height value/ значение высоты
     */
    setPercent(width: number, height: number): this;
    /**
     * Removal of an element from the scaling list.
     *
     * Удаление элемента из списка для масштабирования.
     */
    remove(): void;
    /**
     * Updating the visibility and activity status of the element.
     *
     * Обновление статуса видимости и активности элемента.
     */
    make(): this;
}
export {};

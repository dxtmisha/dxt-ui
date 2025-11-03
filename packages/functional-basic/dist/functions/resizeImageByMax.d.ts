/**
 * Resize type for image scaling.
 *
 * Тип изменения размера для масштабирования изображения.
 */
type ResizeImageByMaxType = 'auto' | 'width' | 'height';
/**
 * Resizes an image to fit within a maximum size constraint.
 *
 * Изменяет размер изображения в соответствии с ограничением максимального размера.
 * @param image image element or URL / элемент изображения или URL
 * @param maxSize maximum size for width or height / максимальный размер ширины или высоты
 * @param type resize type (auto, width, height) / тип изменения размера (auto, width, height)
 */
export declare function resizeImageByMax(image: HTMLImageElement | string, maxSize: number, type?: ResizeImageByMaxType): string | undefined;
export {};

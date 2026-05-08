/**
 * Ensures that an image does not exceed the maximum size by resizing it if needed.
 *
 * Гарантирует, что изображение не превышает максимальный размер, изменяя его размер при необходимости.
 * @param file image file as Uint8Array / файл изображения в виде Uint8Array
 * @param compress maximum size as a fraction of the original size / максимальный размер в виде доли от оригинального размера
 * @param type image type / тип изображения
 * @returns promise with the resized image data as base64 / промис с данными измененного изображения в формате base64
 */
export declare function ensureMaxSize(file: Uint8Array, compress?: number, type?: string): Promise<string>;

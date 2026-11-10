// md5:0c4110d01ab73176caf5ce083398bd16
import { type ComputedRef } from 'vue';
import { type UiFigmaFrameStylesMessengerAttributes, type UiFigmaFrameStylesMessengerResponse } from '@dxtmisha/figma';
/**
 * Return type for `useFigmaFrameStyles`.
 *
 * Тип возвращаемого значения для `useFigmaFrameStyles`.
 */
export type UseFigmaFrameStylesReturn = {
    /** Frame styles / Стили фреймов */
    styles: ComputedRef<UiFigmaFrameStylesMessengerResponse>;
    /**
     * Send style update request.
     *
     * Отправить запрос на обновление стилей.
     * @param attributes Attributes / Атрибуты
     */
    send(attributes: UiFigmaFrameStylesMessengerAttributes): void;
};
/**
 * Composable for managing and observing frame styles from Figma.
 *
 * Композабл для управления и наблюдения за стилями фреймов из Figma.
 * @returns An object containing the frame styles and methods for updating /
 * Объект, содержащий стили фреймов и методы для обновления
 */
export declare function useFigmaFrameStyles(): UseFigmaFrameStylesReturn;

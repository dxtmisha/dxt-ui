import { UiFigmaFrameStylesMessengerAttributes, UiFigmaFrameStylesMessengerResponse } from '@dxtmisha/figma';
import { ComputedRef } from 'vue';
/**
 * Composable for managing and observing frame styles from Figma.
 *
 * Композабл для управления и наблюдения за стилями фреймов из Figma.
 * @returns An object containing the frame styles and methods for updating /
 * Объект, содержащий стили фреймов и методы для обновления
 */
export declare function useFigmaFrameStyles(): {
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

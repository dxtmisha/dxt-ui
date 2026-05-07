import { UiFigmaFramesItem } from './framesTypes';
/**
 * Type representing CSS styles for a Figma element.
 *
 * Тип, представляющий CSS-стили для элемента Figma.
 */
export type UiFigmaFrameStylesCssItem = Record<string, string>;
/**
 * List of CSS styles for multiple Figma elements, indexed by ID.
 *
 * Список CSS-стилей для нескольких элементов Figma, индексированный по ID.
 */
export type UiFigmaFrameStylesCssList = Record<string, UiFigmaFrameStylesCssItem>;
/**
 * JSON structure for Figma frame style data.
 *
 * JSON-структура для данных стиля фрейма Figma.
 */
export type UiFigmaFrameStylesJson = {
    /** Node ID / Идентификатор узла */
    id: string;
    /** Node name / Имя узла */
    name: string;
    /** Node type / Тип узла */
    type?: string;
    /** Text content (for text nodes) / Текстовое содержимое (для текстовых узлов) */
    characters?: string;
    /** Style properties / Свойства стиля */
    style?: Record<string, string | number | boolean>;
    /** Map of style IDs / Карта идентификаторов стилей */
    styles?: Record<string, string>;
    /** Child nodes / Дочерние узлы */
    children?: UiFigmaFrameStylesJson[];
};
/**
 * Data structure containing Figma document tree and styles.
 *
 * Структура данных, содержащая дерево документа Figma и стили.
 */
export type UiFigmaFrameStylesData = {
    /** Document node tree / Дерево узлов документа */
    document: UiFigmaFrameStylesJson;
    /** Style definitions / Определения стилей */
    styles: Record<string, any>;
};
/**
 * Represents a Figma frame style item, extending frame information.
 *
 * Представляет элемент стиля фрейма Figma, расширяющий информацию о фрейме.
 */
export type UiFigmaFrameStylesItem = UiFigmaFramesItem & {
    /** Compact JSON data / Компактные данные JSON */
    json?: UiFigmaFrameStylesData;
    /** Text content / Текстовое содержимое */
    text?: string;
    /** CSS styles / CSS-стили */
    styles?: UiFigmaFrameStylesCssItem;
    /** Map of children's CSS styles / Карта CSS-стилей дочерних элементов */
    childrenStyles?: UiFigmaFrameStylesCssList;
};
/**
 * List of frame style items.
 *
 * Список элементов стиля фрейма.
 */
export type UiFigmaFrameStylesList = UiFigmaFrameStylesItem[];
/**
 * Attributes for the messenger request to update frame styles.
 *
 * Атрибуты для запроса через мессенджер на обновление стилей фреймов.
 */
export type UiFigmaFrameStylesMessengerAttributes = {
    /** List of IDs / Список идентификаторов */
    ids: string | string[];
    /** Whether to include child styles / Включать ли стили дочерних элементов */
    children?: boolean;
};
/**
 * Item in the messenger response for frame styles.
 *
 * Элемент в ответе мессенджера для стилей фрейма.
 */
export type UiFigmaFrameStylesMessengerResponseItem = {
    /** Node ID / Идентификатор узла */
    id: string;
    /** Style data / Данные стилей */
    data: UiFigmaFrameStylesList;
};
/**
 * Full response from the messenger for frame styles.
 *
 * Полный ответ от мессенджера для стилей фрейма.
 */
export type UiFigmaFrameStylesMessengerResponse = UiFigmaFrameStylesMessengerResponseItem[];
/**
 * Messenger event name for updating Figma frame styles.
 *
 * Имя события мессенджера для обновления стилей фреймов Figma.
 */
export declare const FIGMA_FRAME_STYLES_MESSENGER_NAME = "ui-figma-styles-update";

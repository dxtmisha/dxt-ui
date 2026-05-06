import { UiFigmaFramesList } from '@dxtmisha/figma';
import { FigmaItem } from './FigmaItem';
import { UiFigmaNode } from '../library';
/**
 * Class for managing and sending the list of top-level frames in the Figma plugin.
 *
 * Класс для управления и отправки списка фреймов верхнего уровня в плагине Figma.
 */
export declare class FigmaTopLevelFrames {
    /** Cached list of top-level frames / Кэшированный список фреймов верхнего уровня */
    protected static frames: UiFigmaFramesList | undefined;
    /**
     * Retrieves and caches the formatted list of top-level frames.
     *
     * Получает и кэширует отформатированный список фреймов верхнего уровня.
     * @returns A promise that resolves to the list of frames / Промис, который разрешается в список фреймов
     */
    static get(): Promise<UiFigmaFramesList>;
    /**
     * Sets up a listener for frame requests and sends the data back using the plugin messenger.
     *
     * Настраивает прослушиватель для запросов фреймов и отправляет данные обратно с помощью мессенджера плагина.
     */
    static send(): void;
    /**
     * Gets the list of main frames from the current Figma page.
     *
     * Получает список основных фреймов с текущей страницы Figma.
     * @returns An array of Figma items / Массив элементов Figma
     */
    protected static getList(): FigmaItem<UiFigmaNode>[];
}

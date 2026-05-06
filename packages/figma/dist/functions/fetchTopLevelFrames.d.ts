import { UiFigmaFramesList } from '../types/framesTypes';
/**
 * Fetches the top-level frames from the Figma plugin.
 *
 * Получает фреймы верхнего уровня из плагина Figma.
 * @param callback The function to call once the frames are received / Функция, вызываемая после получения фреймов
 */
export declare function fetchTopLevelFrames(callback: (frames: UiFigmaFramesList) => void): void;

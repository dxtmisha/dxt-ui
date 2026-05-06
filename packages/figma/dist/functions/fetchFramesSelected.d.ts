/**
 * Fetches the selected frames from the Figma plugin.
 *
 * Получает выбранные фреймы из плагина Figma.
 * @param callback The function to call once the frames are received / Функция, вызываемая после получения выбранных фреймов
 */
export declare function fetchFramesSelected(callback: (selected: string[]) => void): void;

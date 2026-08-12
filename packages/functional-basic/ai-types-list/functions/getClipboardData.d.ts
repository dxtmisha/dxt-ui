// md5:e9aed95f0552fad3e23c211749450ee0
/**
 * The method retrieves drag data (as a string) for the specified type.
 * If the drag operation does not include data, this method returns an empty string.
 *
 * Метод извлекает данные перетаскивания (в виде строки) для указанного типа.
 * @param event the ClipboardEvent interface / интерфейс ClipboardEvent
 * @returns data from the clipboard / данные из буфера обмена
 */
export declare function getClipboardData(event?: ClipboardEvent): Promise<string>;

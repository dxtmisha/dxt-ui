/**
 * Convert a Blob to a Base64 string.
 *
 * Преобразует Blob в строку Base64.
 * @param blob The Blob to convert / Blob для преобразования
 * @param clean if true, removes the data URL prefix / если true, удаляет префикс data URL
 * @returns promise with the base64 string or undefined / промис со строкой base64 или undefined
 */
export declare function blobToBase64(blob: Blob, clean?: boolean): Promise<string | undefined>;

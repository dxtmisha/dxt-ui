import { isString } from './isString'

/**
 * Convert a Blob to a Base64 string.
 *
 * Преобразует Blob в строку Base64.
 * @param blob The Blob to convert / Blob для преобразования
 * @param clean if true, removes the data URL prefix / если true, удаляет префикс data URL
 * @returns promise with the base64 string or ArrayBuffer / промис со строкой base64 или ArrayBuffer
 */
export function blobToBase64(
  blob: Blob,
  clean: boolean = false
): Promise<string | ArrayBuffer | null> {
  return new Promise((resolve, reject) => {
    if (typeof FileReader === 'undefined') {
      return resolve(null)
    }

    const reader = new FileReader()
    const cleanPrefix = () => {
      const text = reader.result

      if (
        clean
        && isString(text)
      ) {
        return text.replace(/^data:.*?,/, '')
      }

      return text
    }

    reader.onloadend = () => resolve(cleanPrefix())
    reader.onerror = reject
    reader.readAsDataURL(blob)
  })
}

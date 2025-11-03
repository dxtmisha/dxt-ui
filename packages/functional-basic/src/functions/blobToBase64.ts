/**
 * Convert a Blob to a Base64 string.
 *
 * Преобразует Blob в строку Base64.
 * @param blob The Blob to convert/ Blob для преобразования
 */
export function blobToBase64(blob: Blob): Promise<string | ArrayBuffer | null> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onloadend = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(blob)
  })
}

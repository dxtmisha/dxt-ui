import { isDomRuntime } from './isDomRuntime'

/**
 * Check if Buffer is available.
 *
 * Проверяет доступность Buffer.
 * @returns true if Buffer is available / true, если Buffer доступен
 */
const isBuffer = (): boolean => typeof getBuffer() !== 'undefined'

/**
 * Get Buffer from globalThis.
 *
 * Получает Buffer из globalThis.
 * @returns Buffer / Буфер
 */
const getBuffer = () => (globalThis as any)?.Buffer

/**
 * Get base64 from Blob using FileReader.
 *
 * Получает base64 из Blob с помощью FileReader.
 * @param blob The blob to convert / Blob для преобразования
 * @returns base64 string / строка base64
 */
const getDataByFileReader = async (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (typeof FileReader !== 'undefined') {
      const reader = new FileReader()

      reader.onloadend = () => {
        if (!reader?.result) {
          reject(new Error('Failed to read blob'))
          return
        }

        const base64: string = (reader.result as string)
          .replace(/^data:.*?,/, '')

        resolve(base64)
      }
      reader.onerror = reject
      reader.readAsDataURL(blob)
    } else {
      reject()
    }
  })
}

/**
 * Get base64 from array buffer using Buffer.
 *
 * Получает base64 из array buffer с помощью Buffer.
 * @param arrayBuffer The array buffer to convert / Array buffer для преобразования
 * @returns base64 string / строка base64
 */
const getDataByBuffer = (arrayBuffer: ArrayBuffer): string => {
  const buffer = (globalThis as any)?.Buffer
  return buffer.from(arrayBuffer).toString('base64')
}

/**
 * Convert a Blob to a Base64 string.
 *
 * Преобразует Blob в строку Base64.
 * @param blob The Blob to convert / Blob для преобразования
 * @param clean if true, removes the data URL prefix / если true, удаляет префикс data URL
 * @returns promise with the base64 string or undefined / промис со строкой base64 или undefined
 */
export async function blobToBase64(
  blob: Blob,
  clean: boolean = false
): Promise<string | undefined> {
  const base64: string | undefined = isDomRuntime()
    ? (await getDataByFileReader(blob))
    : (isBuffer() ? getDataByBuffer(await blob.arrayBuffer()) : undefined)

  if (!base64) {
    return undefined
  }

  if (!clean) {
    return `data:${blob.type};base64,${base64}`
  }

  return base64
}

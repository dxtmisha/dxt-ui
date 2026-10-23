import { isDomRuntime } from './isDomRuntime'

/**
 * Buffer type for converting ArrayBuffer /
 * Тип Buffer для преобразования ArrayBuffer
 */
type BufferType = {
  from(arrayBuffer: ArrayBuffer): { toString(encoding: string): string }
}

/**
 * Matches the Data URL prefix up to base64 content /
 * Регулярное выражение для поиска префикса Data URL до содержимого base64
 */
const REGEXP_DATA_URL_PREFIX = /^data:.*?,/

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
const getBuffer = (): BufferType | undefined => (
  globalThis as unknown as {
    Buffer?: BufferType
  }
)?.Buffer

/**
 * Get base64 from Blob using FileReader.
 *
 * Получает base64 из Blob с помощью FileReader.
 * @param blob The blob to convert / Blob для преобразования
 * @returns Promise with base64 string or undefined / Промис со строкой base64 или undefined
 */
const getDataByFileReader = async (blob: Blob): Promise<string | undefined> => {
  if (typeof FileReader === 'undefined') {
    return undefined
  }

  return new Promise((resolve) => {
    const reader = new FileReader()

    reader.onloadend = () => {
      if (typeof reader.result !== 'string') {
        resolve(undefined)
        return
      }

      const base64: string = reader.result.replace(REGEXP_DATA_URL_PREFIX, '')
      resolve(base64)
    }

    reader.onerror = () => {
      resolve(undefined)
    }

    reader.readAsDataURL(blob)
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
  const buffer = getBuffer()
  return buffer ? buffer.from(arrayBuffer).toString('base64') : ''
}

/**
 * Convert a Blob to a Base64 string.
 * Returns undefined if the Blob is empty or cannot be read.
 *
 * Преобразует Blob в строку Base64.
 * Возвращает undefined, если Blob пустой или не может быть прочитан.
 * @param blob The Blob to convert / Blob для преобразования
 * @param clean If true, removes the data URL prefix / Если true, удаляет префикс data URL
 * @returns Promise with the base64 string or undefined if empty / Промис со строкой base64 или undefined, если Blob пустой
 */
export async function blobToBase64(
  blob: Blob,
  clean: boolean = false
): Promise<string | undefined> {
  try {
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
  } catch {
    return undefined
  }
}

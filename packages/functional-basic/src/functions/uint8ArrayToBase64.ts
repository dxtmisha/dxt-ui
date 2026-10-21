/**
 * Maximum chunk size for String.fromCharCode spread to prevent call stack overflow /
 * Максимальный размер порции для String.fromCharCode для предотвращения переполнения стека
 */
const CHUNK_SIZE = 0x8000

/**
 * Converts a Uint8Array to a base64 encoded string.
 * Supports Node.js (Buffer), modern ECMAScript (Uint8Array.toBase64), and browsers/workers (btoa).
 *
 * Преобразует Uint8Array в строку, закодированную в base64.
 * Поддерживает Node.js (Buffer), современный ECMAScript (Uint8Array.toBase64) и браузеры/воркеры (btoa).
 * @param bytes binary data as Uint8Array / бинарные данные в виде Uint8Array
 * @returns base64 encoded string / строка, закодированная в base64
 *
 * @example
 * uint8ArrayToBase64(new Uint8Array([72, 101, 108, 108, 111])) // "SGVsbG8="
 */
export function uint8ArrayToBase64(bytes?: Uint8Array | null): string {
  if (!bytes || bytes.length === 0) {
    return ''
  }

  const bufferConstructor = (
    globalThis as unknown as {
      Buffer?: {
        from(
          buffer: ArrayBufferLike,
          byteOffset?: number,
          byteLength?: number
        ): { toString(encoding: string): string }
      }
    }
  ).Buffer

  if (typeof bufferConstructor !== 'undefined') {
    return bufferConstructor.from(bytes.buffer, bytes.byteOffset, bytes.byteLength).toString('base64')
  }

  if (typeof (bytes as unknown as { toBase64?: () => string }).toBase64 === 'function') {
    return (bytes as unknown as { toBase64: () => string }).toBase64()
  }

  if (typeof globalThis.btoa === 'function') {
    let binary = ''

    for (let index = 0; index < bytes.length; index += CHUNK_SIZE) {
      const chunk = bytes.subarray(index, index + CHUNK_SIZE)
      binary += String.fromCharCode(...chunk)
    }

    return globalThis.btoa(binary)
  }

  return ''
}

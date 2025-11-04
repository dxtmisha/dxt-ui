import { isDomRuntime } from './isDomRuntime'

/**
 * Converts a Uint8Array to a base64 encoded string.
 *
 * Преобразует Uint8Array в строку, закодированную в base64.
 * @param bytes binary data as Uint8Array / бинарные данные в виде Uint8Array
 * @returns base64 encoded string / строка, закодированная в base64
 */
export function uint8ArrayToBase64(bytes: Uint8Array): string {
  let binary = ''

  for (const byte of bytes) {
    binary += String.fromCharCode(byte)
  }

  if (isDomRuntime()) {
    return window.btoa(binary)
  }

  if (
    globalThis
    && (globalThis as any).Buffer
  ) {
    return (globalThis as any)?.Buffer.from(bytes).toString('base64')
  }

  return ''
}

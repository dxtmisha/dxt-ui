import { describe, it, expect } from 'vitest'
import { uint8ArrayToBase64 } from '../uint8ArrayToBase64'

describe('uint8ArrayToBase64', () => {
  describe('Базовые сценарии кодирования (Standard cases)', () => {
    it('должен конвертировать стандартные ASCII-строки в base64', () => {
      const bytes = new Uint8Array([72, 101, 108, 108, 111]) // "Hello"
      expect(uint8ArrayToBase64(bytes)).toBe('SGVsbG8=')
    })

    it('должен конвертировать массив с непечатными и нулевыми байтами', () => {
      const bytes = new Uint8Array([0, 1, 2, 255, 254])
      expect(uint8ArrayToBase64(bytes)).toBe('AAEC//4=')
    })
  })

  describe('Краевые случаи и валидация (Edge cases & Validation)', () => {
    it('должен возвращать пустую строку для пустого массива', () => {
      expect(uint8ArrayToBase64(new Uint8Array([]))).toBe('')
    })

    it('должен безопасно обрабатывать null и undefined', () => {
      expect(uint8ArrayToBase64(undefined)).toBe('')
      expect(uint8ArrayToBase64(null)).toBe('')
    })

    it('должен корректно работать со срезами (subarray с byteOffset)', () => {
      const full = new Uint8Array([0, 72, 101, 108, 108, 111, 0])
      const slice = full.subarray(1, 6) // "Hello"
      expect(uint8ArrayToBase64(slice)).toBe('SGVsbG8=')
    })
  })

  describe('Большие бинарные данные и чанкование (Large buffers > 32KB)', () => {
    it('должен корректно кодировать бинарный буфер размером 65 КБ без переполнения стека', () => {
      const size = 65536 // 64 KB
      const largeArray = new Uint8Array(size)

      for (let i = 0; i < size; i++) {
        largeArray[i] = i % 256
      }

      const globalBuffer = (
        globalThis as unknown as {
          Buffer: {
            from(array: Uint8Array): { toString(encoding: string): string }
          }
        }
      ).Buffer
      const expectedBase64 = globalBuffer.from(largeArray).toString('base64')
      expect(uint8ArrayToBase64(largeArray)).toBe(expectedBase64)
    })
  })
})

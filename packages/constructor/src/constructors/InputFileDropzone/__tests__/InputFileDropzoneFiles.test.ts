// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'

import { InputFileDropzoneFiles } from '../InputFileDropzoneFiles'
import type { InputFileDropzoneProps } from '../props'

describe('InputFileDropzoneFiles', () => {
  const createMockFile = (name: string, size: number, type = 'text/plain'): File => {
    const file = new File(['x'.repeat(size)], name, { type })
    Object.defineProperty(file, 'size', { value: size })
    return file
  }

  it('should return empty array and not emit when files is undefined', () => {
    const emits = vi.fn()
    const filesManager = new InputFileDropzoneFiles({} as InputFileDropzoneProps, emits)

    const result = filesManager.setFiles(undefined)

    expect(result).toEqual([])
    expect(emits).not.toHaveBeenCalled()
  })

  it('should return empty array and not emit when files array is empty', () => {
    const emits = vi.fn()
    const filesManager = new InputFileDropzoneFiles({} as InputFileDropzoneProps, emits)

    const result = filesManager.setFiles([])

    expect(result).toEqual([])
    expect(emits).not.toHaveBeenCalled()
  })

  it('should process all files and emit add when maxFileSize is not set', () => {
    const emits = vi.fn()
    const filesManager = new InputFileDropzoneFiles({} as InputFileDropzoneProps, emits)

    const file1 = createMockFile('file1.txt', 100)
    const file2 = createMockFile('file2.txt', 200)

    const result = filesManager.setFiles([file1, file2])

    expect(result).toEqual([file1, file2])
    expect(emits).toHaveBeenCalledTimes(1)
    expect(emits).toHaveBeenCalledWith('add', [file1, file2])
  })

  it('should filter files by maxFileSize and emit add with valid files only', () => {
    const emits = vi.fn()
    const props = { maxFileSize: 500 } as InputFileDropzoneProps
    const filesManager = new InputFileDropzoneFiles(props, emits)

    const fileValid1 = createMockFile('small.txt', 100)
    const fileValid2 = createMockFile('exact.txt', 500)
    const fileInvalid = createMockFile('large.txt', 501)

    const result = filesManager.setFiles([fileValid1, fileInvalid, fileValid2])

    expect(result).toEqual([fileValid1, fileValid2])
    expect(emits).toHaveBeenCalledTimes(1)
    expect(emits).toHaveBeenCalledWith('add', [fileValid1, fileValid2])
  })

  it('should return empty array and not emit if all files exceed maxFileSize', () => {
    const emits = vi.fn()
    const props = { maxFileSize: 100 } as InputFileDropzoneProps
    const filesManager = new InputFileDropzoneFiles(props, emits)

    const fileLarge1 = createMockFile('large1.txt', 200)
    const fileLarge2 = createMockFile('large2.txt', 300)

    const result = filesManager.setFiles([fileLarge1, fileLarge2])

    expect(result).toEqual([])
    expect(emits).not.toHaveBeenCalled()
  })

  it('should not throw when emits callback is not provided', () => {
    const filesManager = new InputFileDropzoneFiles({} as InputFileDropzoneProps)
    const file = createMockFile('test.txt', 50)

    expect(() => {
      const result = filesManager.setFiles([file])
      expect(result).toEqual([file])
    }).not.toThrow()
  })
})

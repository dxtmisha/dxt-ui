import { afterEach, describe, expect, it, vi } from 'vitest'
import type { ConstrEmit } from '@dxtmisha/functional'

import { ModelInclude } from '../../../classes/ModelInclude'
import { DropzoneFiles } from '../DropzoneFiles'
import type { DropzoneEmits } from '../types'

const createMockFileList = (count: number): FileList => {
  const files = Array.from({ length: count }, (_, index) => ({
    name: `file-${index}.txt`,
    size: 128 * (index + 1),
    type: 'text/plain'
  }))

  return {
    length: files.length,
    item: (index: number) => (files[index] ?? null) as unknown as File,
    [Symbol.iterator]: function* () {
      for (const file of files) {
        yield file as unknown as File
      }
    }
  } as unknown as FileList
}

describe('DropzoneFiles', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Initial state and lazy model access', () => {
    it('should initialize with undefined item and not call model getter eagerly', () => {
      const modelGetter = vi.fn(() => new ModelInclude<FileList | undefined>('files'))
      const files = new DropzoneFiles(modelGetter)

      expect(files.get()).toBeUndefined()
      expect(files.item.value).toBeUndefined()
      expect(modelGetter).not.toHaveBeenCalled()
    })
  })

  describe('Setting files and emitting events', () => {
    it('should store FileList, emit full and lite events when DOM event is provided, and sync model', () => {
      const emits = vi.fn()
      const model = new ModelInclude<FileList | undefined>('files', emits)
      const files = new DropzoneFiles(
        () => model,
        emits as unknown as ConstrEmit<DropzoneEmits>
      )
      const fileList = createMockFileList(2)
      const domEvent = new Event('change')

      files.set(fileList, domEvent)

      expect(files.get()).toBe(fileList)
      expect(files.item.value).toBe(fileList)

      const expectedPayload = {
        status: true,
        isFull: true,
        value: fileList,
        valueInput: fileList
      }

      expect(emits).toHaveBeenCalledWith('input', domEvent, expectedPayload)
      expect(emits).toHaveBeenCalledWith('change', domEvent, expectedPayload)
      expect(emits).toHaveBeenCalledWith('inputLite', expectedPayload)
      expect(emits).toHaveBeenCalledWith('changeLite', expectedPayload)
      expect(emits).toHaveBeenCalledWith('update:files', fileList)
      expect(emits).toHaveBeenCalledWith('update:modelFiles', fileList)
    })

    it('should emit only lite and model events when no DOM event is passed', () => {
      const emits = vi.fn()
      const model = new ModelInclude<FileList | undefined>('files', emits)
      const files = new DropzoneFiles(
        () => model,
        emits as unknown as ConstrEmit<DropzoneEmits>
      )
      const fileList = createMockFileList(1)

      files.set(fileList)

      expect(emits).not.toHaveBeenCalledWith('input', expect.anything(), expect.anything())
      expect(emits).not.toHaveBeenCalledWith('change', expect.anything(), expect.anything())
      expect(emits).toHaveBeenCalledWith('inputLite', {
        status: true,
        isFull: true,
        value: fileList,
        valueInput: fileList
      })
      expect(emits).toHaveBeenCalledWith('changeLite', {
        status: true,
        isFull: true,
        value: fileList,
        valueInput: fileList
      })
      expect(emits).toHaveBeenCalledWith('update:files', fileList)
      expect(emits).toHaveBeenCalledWith('update:modelFiles', fileList)
    })

    it('should report isFull as false for an empty FileList with length 0', () => {
      const emits = vi.fn()
      const files = new DropzoneFiles(
        undefined,
        emits as unknown as ConstrEmit<DropzoneEmits>
      )
      const emptyFileList = createMockFileList(0)

      files.set(emptyFileList)

      expect(files.get()).toBe(emptyFileList)
      expect(emits).toHaveBeenCalledWith('inputLite', {
        status: true,
        isFull: false,
        value: emptyFileList,
        valueInput: emptyFileList
      })
    })

    it('should skip redundant model emission when setting the exact same FileList reference', () => {
      const emits = vi.fn()
      const model = new ModelInclude<FileList | undefined>('files', emits)
      const modelEmitSpy = vi.spyOn(model, 'emit')
      const files = new DropzoneFiles(
        () => model,
        emits as unknown as ConstrEmit<DropzoneEmits>
      )
      const fileList = createMockFileList(1)

      files.set(fileList)
      expect(modelEmitSpy).toHaveBeenCalledTimes(1)

      files.set(fileList)
      expect(modelEmitSpy).toHaveBeenCalledTimes(1)
    })
  })

  describe('Clearing files and optional collaborators', () => {
    it('should reset files to undefined and emit cleared payload and model update', () => {
      const emits = vi.fn()
      const model = new ModelInclude<FileList | undefined>('files', emits)
      const files = new DropzoneFiles(
        () => model,
        emits as unknown as ConstrEmit<DropzoneEmits>
      )
      const fileList = createMockFileList(1)

      files.set(fileList)
      emits.mockClear()

      files.clear()

      expect(files.get()).toBeUndefined()
      expect(emits).toHaveBeenCalledWith('inputLite', {
        status: true,
        isFull: false,
        value: undefined,
        valueInput: undefined
      })
      expect(emits).toHaveBeenCalledWith('changeLite', {
        status: true,
        isFull: false,
        value: undefined,
        valueInput: undefined
      })
      expect(emits).toHaveBeenCalledWith('update:files', undefined)
      expect(emits).toHaveBeenCalledWith('update:modelFiles', undefined)
    })

    it('should not emit model update when clearing already empty files', () => {
      const modelEmit = vi.fn()
      const modelGetter = vi.fn(() => ({ emit: modelEmit } as unknown as ModelInclude<FileList | undefined>))
      const emits = vi.fn()
      const files = new DropzoneFiles(
        modelGetter,
        emits as unknown as ConstrEmit<DropzoneEmits>
      )

      files.clear()

      expect(modelGetter).not.toHaveBeenCalled()
      expect(modelEmit).not.toHaveBeenCalled()
      expect(emits).toHaveBeenCalledWith('inputLite', expect.objectContaining({ isFull: false, value: undefined }))
    })

    it('should operate safely without model or emits callbacks', () => {
      const files = new DropzoneFiles()
      const fileList = createMockFileList(1)

      expect(() => files.set(fileList, new Event('change'))).not.toThrow()
      expect(files.get()).toBe(fileList)
      expect(() => files.clear()).not.toThrow()
      expect(files.get()).toBeUndefined()
    })
  })

  describe('Instance isolation', () => {
    it('should keep file lists isolated between separate instances', () => {
      const first = new DropzoneFiles()
      const second = new DropzoneFiles()
      const fileList = createMockFileList(1)

      first.set(fileList)

      expect(first.get()).toBe(fileList)
      expect(second.get()).toBeUndefined()
    })
  })
})

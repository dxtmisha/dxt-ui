// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'

import { InputFileDropzoneEvent } from '../InputFileDropzoneEvent'
import type { InputFileDropzoneFiles } from '../InputFileDropzoneFiles'
import type { DropzoneInclude } from '../../Dropzone'
import type { FieldValidationItem } from '../../../types/fieldTypes'

describe('InputFileDropzoneEvent', () => {
  it('should call dropzone expose open on open()', () => {
    const mockOpen = vi.fn()
    const mockFiles = {
      setFiles: vi.fn()
    } as unknown as InputFileDropzoneFiles

    const mockDropzone = {
      expose: {
        open: mockOpen
      }
    } as unknown as DropzoneInclude

    const eventHandler = new InputFileDropzoneEvent(mockFiles, mockDropzone)

    eventHandler.open()

    expect(mockOpen).toHaveBeenCalledTimes(1)
  })

  it('should not throw on open() if expose.open is undefined', () => {
    const mockFiles = {
      setFiles: vi.fn()
    } as unknown as InputFileDropzoneFiles

    const mockDropzone = {
      expose: {}
    } as unknown as DropzoneInclude

    const eventHandler = new InputFileDropzoneEvent(mockFiles, mockDropzone)

    expect(() => eventHandler.open()).not.toThrow()
  })

  it('should call files.setFiles with validation value on onDropzoneInput()', () => {
    const mockSetFiles = vi.fn()
    const mockFiles = {
      setFiles: mockSetFiles
    } as unknown as InputFileDropzoneFiles

    const mockDropzone = {
      expose: {
        open: vi.fn()
      }
    } as unknown as DropzoneInclude

    const eventHandler = new InputFileDropzoneEvent(mockFiles, mockDropzone)

    const mockFileList = [new File(['content'], 'test.txt')] as unknown as FileList
    const validationData = {
      value: mockFileList
    } as FieldValidationItem<FileList | undefined>

    const event = new Event('input')

    eventHandler.onDropzoneInput(event, validationData)

    expect(mockSetFiles).toHaveBeenCalledTimes(1)
    expect(mockSetFiles).toHaveBeenCalledWith(mockFileList)
  })
})

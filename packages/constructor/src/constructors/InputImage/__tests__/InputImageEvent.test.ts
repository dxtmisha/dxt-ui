// @vitest-environment jsdom
import { describe, expect, it, vi, beforeEach } from 'vitest'
import { InputImageEvent } from '../InputImageEvent'
import type { FieldEventInclude } from '../../../classes/Field/FieldEventInclude'
import type { DropzoneInclude } from '../../Dropzone'
import type { InputImageFiles } from '../InputImageFiles'
import type { CropAreaEventParameters } from '../../CropArea'

describe('InputImageEvent', () => {
  let filesMock: InputImageFiles
  let dropzoneMock: DropzoneInclude
  let eventMock: FieldEventInclude

  beforeEach(() => {
    filesMock = {
      setCrop: vi.fn(),
      setFiles: vi.fn().mockResolvedValue('image-data-url')
    } as unknown as InputImageFiles

    dropzoneMock = {
      expose: {
        open: vi.fn()
      }
    } as unknown as DropzoneInclude

    eventMock = {
      onValue: vi.fn(),
      onAndChange: vi.fn()
    } as unknown as FieldEventInclude
  })

  it('should call dropzone.expose.open on open', () => {
    const inputImageEvent = new InputImageEvent(filesMock, dropzoneMock, eventMock)
    inputImageEvent.open()

    expect(dropzoneMock.expose.open).toHaveBeenCalledTimes(1)
  })

  it('should not throw when dropzone.expose.open is undefined', () => {
    const dropzoneNoOpen = {
      expose: {}
    } as unknown as DropzoneInclude

    const inputImageEvent = new InputImageEvent(filesMock, dropzoneNoOpen, eventMock)

    expect(() => inputImageEvent.open()).not.toThrow()
  })

  it('should update crop and trigger onValue on onCropResize', () => {
    const inputImageEvent = new InputImageEvent(filesMock, dropzoneMock, eventMock)
    const mockParameters: CropAreaEventParameters = {
      coordinator: [10, 20, 100, 200]
    } as unknown as CropAreaEventParameters

    inputImageEvent.onCropResize(mockParameters)

    expect(filesMock.setCrop).toHaveBeenCalledWith([10, 20, 100, 200])
    expect(eventMock.onValue).toHaveBeenCalledTimes(1)
  })

  it('should process files and trigger onAndChange on onDropzoneInput', async () => {
    const inputImageEvent = new InputImageEvent(filesMock, dropzoneMock, eventMock)
    const mockEvent = new Event('input')
    const mockFileList = { length: 1 } as unknown as FileList

    await inputImageEvent.onDropzoneInput(mockEvent, { value: mockFileList } as any)

    expect(filesMock.setFiles).toHaveBeenCalledWith(mockFileList)
    expect(eventMock.onAndChange).toHaveBeenCalledWith(mockEvent)
  })
})

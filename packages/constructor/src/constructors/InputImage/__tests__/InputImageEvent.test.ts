// @vitest-environment jsdom
import { describe, expect, it, vi, beforeEach, type Mock } from 'vitest'

import { InputImageEvent } from '../InputImageEvent'

import type { FieldEventInclude } from '../../../classes/Field/FieldEventInclude'
import type { FieldValidationItem } from '../../../types/fieldTypes'
import type { CropAreaEventParameters } from '../../CropArea'
import type { DropzoneInclude } from '../../Dropzone'
import type { InputImageFiles } from '../InputImageFiles'

describe('InputImageEvent', () => {
  let setCrop: Mock<InputImageFiles['setCrop']>
  let setFiles: Mock<InputImageFiles['setFiles']>
  let open: Mock<() => void>
  let onValue: Mock<FieldEventInclude['onValue']>
  let onAndChange: Mock<FieldEventInclude['onAndChange']>

  /**
   * Creates an InputImageEvent instance with mocked collaborators.
   *
   * Создаёт экземпляр InputImageEvent с замоканными зависимостями.
   * @param expose dropzone expose object / объект expose дропзоны
   * @returns InputImageEvent instance / экземпляр InputImageEvent
   */
  const createEvent = (
    expose: { open?: () => void } = { open }
  ): InputImageEvent => new InputImageEvent(
    { setCrop, setFiles } as unknown as InputImageFiles,
    { expose } as unknown as DropzoneInclude,
    { onValue, onAndChange } as unknown as FieldEventInclude
  )

  /**
   * Creates a FileList-like object.
   *
   * Создаёт объект, подобный FileList.
   * @returns FileList-like object / объект, подобный FileList
   */
  const createFileList = (): FileList => ({
    0: new File(['1'], 'image.png', { type: 'image/png' }),
    length: 1
  }) as unknown as FileList

  beforeEach(() => {
    setCrop = vi.fn<InputImageFiles['setCrop']>()
    setFiles = vi.fn<InputImageFiles['setFiles']>().mockResolvedValue('data:image/png;base64,bW9jaw==')
    open = vi.fn<() => void>()
    onValue = vi.fn<FieldEventInclude['onValue']>()
    onAndChange = vi.fn<FieldEventInclude['onAndChange']>()
  })

  describe('open', () => {
    it('opens the dropzone file dialog', () => {
      createEvent().open()

      expect(open).toHaveBeenCalledTimes(1)
    })

    it('does not throw when the dropzone exposes no open method', () => {
      expect(() => createEvent({}).open()).not.toThrow()
    })

    it('keeps the context when used as a detached callback', () => {
      const { open: detached } = createEvent()

      detached()

      expect(open).toHaveBeenCalledTimes(1)
    })
  })

  describe('onCropResize', () => {
    it('stores the crop coordinates and emits value events', () => {
      const parameters: CropAreaEventParameters = {
        direction: 'center',
        value: 0,
        coordinator: [10, 20, 100, 200]
      }

      createEvent().onCropResize(parameters)

      expect(setCrop).toHaveBeenCalledWith([10, 20, 100, 200])
      expect(onValue).toHaveBeenCalledTimes(1)
      expect(onValue).toHaveBeenCalledWith()
      expect(setCrop.mock.invocationCallOrder[0]).toBeLessThan(onValue.mock.invocationCallOrder[0])
    })
  })

  describe('onDropzoneInput', () => {
    it('processes files before emitting input and change events', async () => {
      const event = new Event('input')
      const fileList = createFileList()
      const data: FieldValidationItem<FileList | undefined> = { value: fileList }

      await createEvent().onDropzoneInput(event, data)

      expect(setFiles).toHaveBeenCalledWith(fileList)
      expect(onAndChange).toHaveBeenCalledWith(event)
      expect(setFiles.mock.invocationCallOrder[0]).toBeLessThan(onAndChange.mock.invocationCallOrder[0])
    })

    it('waits for asynchronous file processing before emitting', async () => {
      let resolveFiles: (value: string) => void = () => undefined
      setFiles.mockReturnValue(new Promise<string>((resolve) => {
        resolveFiles = resolve
      }))

      const pending = createEvent().onDropzoneInput(new Event('input'), { value: createFileList() })

      await Promise.resolve()
      expect(onAndChange).not.toHaveBeenCalled()

      resolveFiles('data:image/png;base64,bW9jaw==')
      await pending

      expect(onAndChange).toHaveBeenCalledTimes(1)
    })

    it('forwards an empty selection and still emits events', async () => {
      const event = new Event('input')

      await createEvent().onDropzoneInput(event, { value: undefined })

      expect(setFiles).toHaveBeenCalledWith(undefined)
      expect(onAndChange).toHaveBeenCalledWith(event)
    })
  })
})

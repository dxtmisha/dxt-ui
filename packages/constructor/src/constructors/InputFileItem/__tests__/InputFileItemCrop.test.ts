// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'

import { TextInclude } from '../../../classes/TextInclude'
import { InputFileItemCrop } from '../InputFileItemCrop'
import { InputFileItemEvent } from '../InputFileItemEvent'
import { InputFileItemFile } from '../InputFileItemFile'
import type { CropAreaCoordinator, CropAreaEventParameters } from '../../CropArea'
import type { InputFileItemPropsBasic } from '../props'

class TestInputFileItemCrop extends InputFileItemCrop {
  public get currentRef() {
    return this.current
  }

  public get valueRef() {
    return this.value
  }

  public override updateCoordinator(crop?: CropAreaCoordinator): this {
    return super.updateCoordinator(crop)
  }

  public callReset(): void {
    this.reset()
  }

  public callOnSave(): void {
    this.onSave()
  }
}

describe('InputFileItemCrop', () => {
  const createHelper = (props: Partial<InputFileItemPropsBasic> = {}) => {
    const fullProps = props as InputFileItemPropsBasic
    const file = new InputFileItemFile(fullProps)
    const emits = vi.fn()
    const eventHandler = new InputFileItemEvent(fullProps, file, emits)
    const text = new TextInclude(fullProps)
    const cropHelper = new TestInputFileItemCrop(fullProps, file, eventHandler, text)

    return { cropHelper, emits, eventHandler, file, text }
  }

  describe('is', () => {
    it('returns true when crop is enabled and file is an image', () => {
      const mockFile = new File([''], 'photo.jpg', { type: 'image/jpeg' })
      const { cropHelper } = createHelper({ crop: true, file: mockFile })

      expect(cropHelper.is()).toBe(true)
    })

    it('returns false when crop is false', () => {
      const mockFile = new File([''], 'photo.jpg', { type: 'image/jpeg' })
      const { cropHelper } = createHelper({ crop: false, file: mockFile })

      expect(cropHelper.is()).toBe(false)
    })

    it('returns false when file is not an image', () => {
      const mockFile = new File([''], 'document.pdf', { type: 'application/pdf' })
      const { cropHelper } = createHelper({ crop: true, file: mockFile })

      expect(cropHelper.is()).toBe(false)
    })
  })

  describe('coordinator', () => {
    it('returns undefined if no crop coordinates are set', () => {
      const { cropHelper } = createHelper()

      expect(cropHelper.coordinator).toBeUndefined()
    })

    it('returns initial crop coordinates from props.value', () => {
      const initialCrop: CropAreaCoordinator = [10, 20, 30, 40]
      const { cropHelper } = createHelper({
        value: {
          id: '1',
          name: 'photo.png',
          crop: initialCrop
        }
      })

      expect(cropHelper.coordinator).toEqual(initialCrop)
    })
  })

  describe('updateCoordinator', () => {
    it('sets coordinates to both value and current', () => {
      const { cropHelper } = createHelper()
      const newCrop: CropAreaCoordinator = [12, 24, 36, 48]

      cropHelper.updateCoordinator(newCrop)

      expect(cropHelper.valueRef.value).toEqual(newCrop)
      expect(cropHelper.currentRef.value).toEqual(newCrop)
    })

    it('defaults to props.value.crop when called without arguments', () => {
      const initialCrop: CropAreaCoordinator = [1, 2, 3, 4]
      const { cropHelper } = createHelper({
        value: {
          id: '1',
          name: 'photo.png',
          crop: initialCrop
        }
      })

      cropHelper.updateCoordinator([10, 20, 30, 40])
      cropHelper.updateCoordinator()

      expect(cropHelper.valueRef.value).toEqual(initialCrop)
      expect(cropHelper.currentRef.value).toEqual(initialCrop)
    })
  })

  describe('onResize and reset', () => {
    it('updates current coordinates on onResize', () => {
      const initialCrop: CropAreaCoordinator = [0, 10, 20, 30]
      const { cropHelper } = createHelper({
        value: {
          id: '1',
          name: 'photo.png',
          crop: initialCrop
        }
      })

      const newCoordinates: CropAreaCoordinator = [15, 25, 35, 45]
      const resizeParameters: CropAreaEventParameters = {
        coordinator: newCoordinates
      } as unknown as CropAreaEventParameters

      cropHelper.onResize(resizeParameters)
      expect(cropHelper.currentRef.value).toEqual(newCoordinates)
      expect(cropHelper.valueRef.value).toEqual(initialCrop)
    })

    it('resets current coordinates back to saved value', () => {
      const initialCrop: CropAreaCoordinator = [0, 10, 20, 30]
      const { cropHelper } = createHelper({
        value: {
          id: '1',
          name: 'photo.png',
          crop: initialCrop
        }
      })

      const resizeParameters: CropAreaEventParameters = {
        coordinator: [50, 60, 70, 80]
      } as unknown as CropAreaEventParameters

      cropHelper.onResize(resizeParameters)
      expect(cropHelper.currentRef.value).toEqual([50, 60, 70, 80])

      cropHelper.callReset()
      expect(cropHelper.currentRef.value).toEqual(initialCrop)
    })
  })

  describe('onSave', () => {
    it('updates value and emits crop event with updated coordinates', () => {
      const mockFile = new File([''], 'photo.png', { type: 'image/png' })
      const { cropHelper, emits } = createHelper({
        crop: true,
        file: mockFile
      })

      const newCoordinates: CropAreaCoordinator = [5, 10, 15, 20]
      const resizeParameters: CropAreaEventParameters = {
        coordinator: newCoordinates
      } as unknown as CropAreaEventParameters

      cropHelper.onResize(resizeParameters)
      cropHelper.callOnSave()

      expect(cropHelper.valueRef.value).toEqual(newCoordinates)
      expect(cropHelper.coordinator).toEqual(newCoordinates)
      expect(emits).toHaveBeenCalledWith('crop', expect.objectContaining({
        crop: newCoordinates
      }))
    })
  })

  describe('dialog', () => {
    it('returns dialog configuration object', () => {
      const { cropHelper } = createHelper()
      const dialogConfig = cropHelper.dialog

      expect(dialogConfig).toBeDefined()
      expect(dialogConfig?.closeButton).toBe(true)
      expect(dialogConfig?.clickOkAndClose).toBe(true)
      expect(typeof dialogConfig?.beforeOpening).toBe('function')
      expect(dialogConfig?.beforeOpening?.()).toBe(true)
      expect(typeof dialogConfig?.onOk).toBe('function')
    })
  })
})

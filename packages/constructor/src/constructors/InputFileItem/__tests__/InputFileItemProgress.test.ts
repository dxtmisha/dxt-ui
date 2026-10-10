// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'

import { TextInclude } from '../../../classes/TextInclude'
import { InputFileItemAppearance } from '../InputFileItemAppearance'
import { InputFileItemFile } from '../InputFileItemFile'
import { InputFileItemProgress } from '../InputFileItemProgress'
import { InputFileItemStatus } from '../InputFileItemStatus'
import type { InputFileItemCrop } from '../InputFileItemCrop'
import type { InputFileItemProps } from '../props'

describe('InputFileItemProgress', () => {
  const createHelper = (props: Partial<InputFileItemProps> = {}) => {
    const fullProps = { ...props } as InputFileItemProps
    const text = new TextInclude(fullProps)
    const mockCrop = { coordinator: undefined } as unknown as InputFileItemCrop
    const file = new InputFileItemFile(fullProps, mockCrop)
    const appearance = new InputFileItemAppearance(fullProps)
    const status = new InputFileItemStatus(fullProps, file, text)
    const progress = new InputFileItemProgress(fullProps, file, appearance, status)

    return { appearance, file, progress, status }
  }

  describe('value', () => {
    it('returns 0 as default progress value', () => {
      const { progress } = createHelper({})
      expect(progress.value).toBe(0)
    })

    it('returns value from loading object', () => {
      const { progress } = createHelper({
        loading: { value: 45 }
      })
      expect(progress.value).toBe(45)
    })
  })

  describe('max', () => {
    it('returns file size in bytes as max', () => {
      const { progress } = createHelper({
        value: { size: 10_485_760 }
      })
      expect(progress.max).toBe(10_485_760)
    })

    it('defaults to 0 when no file size is present', () => {
      const { progress } = createHelper({})
      expect(progress.max).toBe(0)
    })
  })

  describe('isDeterminate', () => {
    it('returns false when loading is not an object with value', () => {
      const { progress } = createHelper({})
      expect(progress.isDeterminate()).toBe(false)
    })

    it('returns true when loading has value', () => {
      const { progress } = createHelper({
        loading: { value: 50 }
      })
      expect(progress.isDeterminate()).toBe(true)
    })
  })

  describe('progressProps', () => {
    it('returns default progress configuration for non-tile linear progress', () => {
      const { progress } = createHelper({})
      expect(progress.progressProps).toEqual({
        visible: false,
        position: 'static',
        linear: true
      })
    })

    it('sets visible to true when uploading', () => {
      const { progress } = createHelper({
        loading: true
      })
      expect(progress.progressProps.visible).toBe(true)
    })

    it('omits position static when appearance is tile', () => {
      const { progress } = createHelper({
        appearance: 'tile'
      })
      expect(progress.progressProps.position).toBeUndefined()
    })

    it('returns circular progress when appearance is circular', () => {
      const { progress } = createHelper({
        appearance: 'compact'
      })
      expect(progress.progressProps.circular).toBe(true)
      expect(progress.progressProps.linear).toBeUndefined()
    })

    it('includes value and max when determinate', () => {
      const { progress } = createHelper({
        loading: { value: 75 },
        value: { size: 100 }
      })
      expect(progress.progressProps.value).toBe(75)
      expect(progress.progressProps.max).toBe(100)
    })
  })
})

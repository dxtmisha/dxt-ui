// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'

import { InputFileItemFile } from '../InputFileItemFile'
import { InputFileItemProgress } from '../InputFileItemProgress'
import type { InputFileItemPropsBasic } from '../props'

describe('InputFileItemProgress', () => {
  const createHelper = (props: Partial<InputFileItemPropsBasic> = {}) => {
    const fullProps = { ...props } as InputFileItemPropsBasic
    const file = new InputFileItemFile(fullProps)
    const progress = new InputFileItemProgress(fullProps, file)

    return { file, progress }
  }

  describe('value', () => {
    it('returns raw numeric progress value without clamping to 100', () => {
      const { progress } = createHelper({ loading: { value: 500_000 } })
      expect(progress.value).toBe(500_000)
    })

    it('parses string values correctly', () => {
      const { progress } = createHelper({ loading: { value: '250000' } })
      expect(progress.value).toBe(250_000)
    })

    it('returns 0 when loading is boolean true', () => {
      const { progress } = createHelper({ loading: true })
      expect(progress.value).toBe(0)
    })

    it('returns 0 when loading is not provided', () => {
      const { progress } = createHelper({})
      expect(progress.value).toBe(0)
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
    it('returns true when loading object contains value property', () => {
      const { progress } = createHelper({ loading: { value: 0 } })
      expect(progress.isDeterminate()).toBe(true)
    })

    it('returns false when loading is boolean', () => {
      const { progress } = createHelper({ loading: true })
      expect(progress.isDeterminate()).toBe(false)
    })

    it('returns false when loading is undefined', () => {
      const { progress } = createHelper({})
      expect(progress.isDeterminate()).toBe(false)
    })
  })
})

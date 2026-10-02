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
    it('returns 0 as default progress value', () => {
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
    it('returns false', () => {
      const { progress } = createHelper({})
      expect(progress.isDeterminate()).toBe(false)
    })
  })
})

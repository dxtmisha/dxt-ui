import { describe, it, expect } from 'vitest'
import { reactive } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { InputFileItemInclude } from '../InputFileItemInclude'
import type { InputFileItemPropsInclude } from '../basicTypes'

describe('InputFileItemInclude', () => {
  it('should return is=false when neither file nor value is defined, even when keys exist as undefined', () => {
    const props = reactive<InputFileItemPropsInclude>({
      inputFileItemAttrs: {
        file: undefined,
        value: undefined
      }
    })

    const include = new InputFileItemInclude(props, new DesignName('d1.test'))
    expect(include.is).toBe(false)

    props.inputFileItemAttrs = {
      file: new File(['abc'], 'doc.pdf', { type: 'application/pdf' })
    }
    expect(include.is).toBe(true)

    props.inputFileItemAttrs = {
      value: { id: '1', name: 'saved.png' }
    }
    expect(include.is).toBe(true)
  })
})

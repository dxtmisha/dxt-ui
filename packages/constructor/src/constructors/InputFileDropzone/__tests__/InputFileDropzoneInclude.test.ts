import { describe, it, expect, vi } from 'vitest'
import { computed, h, reactive } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { InputFileDropzoneInclude } from '../InputFileDropzoneInclude'
import type { InputFileDropzonePropsInclude } from '../basicTypes'

describe('InputFileDropzoneInclude', () => {
  it('should compute binds filtering undefined values and preserving inputFileDropzoneAttrs', () => {
    const props = reactive<InputFileDropzonePropsInclude>({
      accept: 'image/*',
      multiple: undefined,
      maxFileSize: 1024,
      inputFileDropzoneAttrs: {
        multiple: true,
        textDropzone: 'Custom attr dropzone'
      }
    })

    const include = new InputFileDropzoneInclude(
      props,
      new DesignName('d1.test')
    )

    expect(include.binds.value.accept).toBe('image/*')
    expect(include.binds.value.maxFileSize).toBe(1024)
    expect(include.binds.value.multiple).toBe(true)
    expect(include.binds.value.textDropzone).toBe('Custom attr dropzone')
  })

  it('should proxy exposed open method to mounted element', () => {
    const openSpy = vi.fn()
    const props = reactive<InputFileDropzonePropsInclude>({})

    const include = new InputFileDropzoneInclude(
      props,
      new DesignName('d1.test'),
      {
        is: () => true,
        render: () => [h('div')]
      } as never
    )

    const node = include.render()[0]
    expect(node).toBeDefined()

    const exposed = include.expose
    expect(typeof exposed.open).toBe('function')

    const elementRef = computed(() => ({ open: openSpy }))
    Object.defineProperty(include, 'element', { value: elementRef })
    exposed.open()
    expect(openSpy).toHaveBeenCalledTimes(1)
  })
})

// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { effectScope, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { InputFileDropzone } from '../InputFileDropzone'
import type { InputFileDropzoneProps } from '../props'

describe('InputFileDropzone (Unit)', () => {
  it('should lazily skip label and message when label/message props and slot are absent', () => {
    const props = reactive<InputFileDropzoneProps>({
      accept: '.pdf'
    })

    const scope = effectScope()
    let instance!: InputFileDropzone

    scope.run(() => {
      instance = new InputFileDropzone(
        props,
        ref<HTMLDivElement | undefined>(),
        new DesignName('d1.inputFileDropzone')
      )
    })

    expect(instance.hasInstance('label')).toBe(false)
    expect(instance.hasInstance('message')).toBe(false)
    expect(instance.aria).toEqual({})
    expect(instance.hasInstance('label')).toBe(false)
    expect(instance.hasInstance('message')).toBe(false)

    scope.stop()
  })

  it('should instantiate label (by prop or slot) and message, expose aria and open()', () => {
    const openSpy = vi.fn()
    const emitSpy = vi.fn()

    class StubDropzoneInclude {
      expose = { open: openSpy }
      render = () => []
    }

    const props = reactive<InputFileDropzoneProps>({
      label: 'Documents',
      validationMessage: 'File required',
      maxFileSize: 500
    })

    const scope = effectScope()
    let instance!: InputFileDropzone

    scope.run(() => {
      instance = new InputFileDropzone(
        props,
        ref<HTMLDivElement | undefined>(),
        new DesignName('d1.inputFileDropzone'),
        undefined,
        { label: () => [] },
        emitSpy as never,
        {
          dropzone: StubDropzoneInclude as never
        }
      )
    })

    const aria = instance.aria
    expect(instance.hasInstance('label')).toBe(true)
    expect(instance.hasInstance('message')).toBe(true)
    expect(aria['aria-describedby']).toBeTruthy()

    instance.expose.open()
    expect(openSpy).toHaveBeenCalledTimes(1)

    const validFile = new File(['abc'], 'small.txt', { type: 'text/plain' })
    const largeFile = new File(['x'.repeat(600)], 'big.txt', { type: 'text/plain' })
    instance.i('files').setFiles([validFile, largeFile])
    expect(emitSpy).toHaveBeenCalledWith('add', [validFile])
    expect(emitSpy).toHaveBeenCalledWith('reject', [largeFile])

    scope.stop()
  })
})

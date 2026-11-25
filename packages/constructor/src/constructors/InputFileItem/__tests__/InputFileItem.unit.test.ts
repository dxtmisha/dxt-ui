// @vitest-environment jsdom
import { describe, it, expect, vi, afterEach } from 'vitest'
import { createApp, defineComponent, effectScope, h, nextTick, reactive, ref, type App } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { InputFileItem } from '../InputFileItem'
import type { InputFileItemProps } from '../props'

describe('InputFileItem (Unit)', () => {
  const mountedApps: Array<{ app: App, container: HTMLElement }> = []

  afterEach(() => {
    while (mountedApps.length > 0) {
      const entry = mountedApps.pop()
      entry?.app.unmount()
      entry?.container.remove()
    }
    vi.restoreAllMocks()
  })

  it('should lazily skip conditional subcomponents and not set aria-disabled when disabled is omitted', () => {
    const props = reactive<InputFileItemProps>({
      readonly: true,
      crop: false,
      status: 'idle',
      value: { name: 'report.pdf', size: 1024 }
    })

    const scope = effectScope()
    let instance!: InputFileItem

    scope.run(() => {
      instance = new InputFileItem(
        props,
        ref<HTMLDivElement | undefined>(),
        new DesignName('d1.inputFileItem')
      )
    })

    expect(instance.aria).toEqual({
      'aria-busy': 'false'
    })
    expect(instance.classes).toEqual({})
    expect(instance.hasInstance('buttonCrop')).toBe(false)
    expect(instance.hasInstance('buttonDelete')).toBe(false)
    expect(instance.hasInstance('buttonRetry')).toBe(false)
    expect(instance.hasInstance('iconStatus')).toBe(false)
    expect(instance.hasInstance('imageCrop')).toBe(false)
    expect(instance.hasInstance('progress')).toBe(false)
    expect(instance.hasInstance('skeleton')).toBe(false)

    scope.stop()
  })

  it('should compute aria-disabled=true when disabled, expose skeleton classes, and emit crop/delete/retry', () => {
    const emitSpy = vi.fn()
    const file = new File(['data'], 'photo.png', { type: 'image/png' })
    const props = reactive<InputFileItemProps>({
      file,
      disabled: true,
      isSkeleton: true,
      status: 'error',
      crop: true,
      value: {
        name: 'photo.png',
        size: 100,
        crop: [10, 20, 10, 20]
      }
    })

    const scope = effectScope()
    let instance!: InputFileItem

    scope.run(() => {
      instance = new InputFileItem(
        props,
        ref<HTMLDivElement | undefined>(),
        new DesignName('d1.inputFileItem'),
        undefined,
        undefined,
        emitSpy as never
      )
    })

    expect(instance.aria).toEqual({
      'aria-disabled': 'true',
      'aria-busy': 'false'
    })
    expect(instance.classes).toHaveProperty('d1-skeleton__background')
    expect(instance.hasInstance('skeleton')).toBe(true)

    expect(instance.expose.getFile()).toBe(file)
    expect(instance.expose.getStatus()).toBe('error')
    expect(instance.expose.getCrop()).toEqual([10, 20, 10, 20])

    instance.expose.delete()
    expect(emitSpy).toHaveBeenLastCalledWith('delete', expect.objectContaining({ file, name: 'photo.png' }))

    instance.expose.retry()
    expect(emitSpy).toHaveBeenLastCalledWith('retry', expect.objectContaining({ file, name: 'photo.png' }))

    const cropItem = instance.i('crop')
    cropItem.onResize({ coordinator: [5, 5, 5, 5] } as never)
    cropItem.dialog?.onOk?.()
    expect(emitSpy).toHaveBeenLastCalledWith('crop', expect.objectContaining({ crop: [5, 5, 5, 5] }))

    scope.stop()
  })

  it('should watch value.crop on mount and dispose watcher cleanly on unmount', async () => {
    const cropRef = ref<[number, number, number, number]>([1, 2, 3, 4])
    let capturedItem!: InputFileItem

    const Host = defineComponent({
      props: {
        cropCoords: { type: Array, required: true }
      },
      setup(props) {
        const element = ref<HTMLDivElement | undefined>()
        const itemProps = reactive<InputFileItemProps>({
          get value() {
            return {
              name: 'img.png',
              crop: props.cropCoords as [number, number, number, number]
            }
          }
        })
        capturedItem = new InputFileItem(
          itemProps,
          element,
          new DesignName('d1.inputFileItem')
        )
        capturedItem.i('crop')
        return () => h('div', { ref: element })
      }
    })

    const container = document.createElement('div')
    document.body.appendChild(container)
    const app = createApp({
      render: () => h(Host as never, { cropCoords: cropRef.value })
    })

    app.mount(container)
    mountedApps.push({ app, container })
    await nextTick()
    expect(capturedItem.expose.getCrop()).toEqual([1, 2, 3, 4])

    cropRef.value = [15, 25, 35, 45]
    await nextTick()
    expect(capturedItem.expose.getCrop()).toEqual([15, 25, 35, 45])

    app.unmount()
    cropRef.value = [9, 9, 9, 9]
    await nextTick()
    expect(capturedItem.expose.getCrop()).toEqual([15, 25, 35, 45])
  })
})

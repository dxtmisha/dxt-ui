// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, effectScope, h, nextTick, reactive, ref, type App } from 'vue'
import { DesignLifecycleAbstract, DesignName } from '@dxtmisha/functional'

import { InputImage } from '../InputImage'
import type { InputImageProps } from '../props'

describe('InputImage (Unit)', () => {
  const mountedApps: Array<{ app: App, container: HTMLElement }> = []

  afterEach(() => {
    while (mountedApps.length > 0) {
      const entry = mountedApps.pop()
      entry?.app.unmount()
      entry?.container.remove()
    }
    vi.restoreAllMocks()
  })

  it('keeps actions, imageCrop, and form lazy when disabled/empty and computes classes & aria', () => {
    const props = reactive<InputImageProps>({})
    const scope = effectScope()
    let instance!: InputImage

    scope.run(() => {
      instance = new InputImage(
        props,
        ref<HTMLDivElement | undefined>(),
        new DesignName('d1.inputImage')
      )
    })

    expect(instance.hasInstance('event')).toBe(true)
    expect(instance.hasInstance('validation')).toBe(true)
    expect(instance.hasInstance('form')).toBe(false)
    expect(instance.hasInstance('actions')).toBe(false)
    expect(instance.hasInstance('imageCrop')).toBe(false)
    expect(instance.hasInstance('size')).toBe(false)

    expect(instance.classes).toEqual({
      'd1-inputImage--hasImage': false
    })
    expect(instance.hasInstance('files')).toBe(true)
    expect(instance.hasInstance('actions')).toBe(false)
    expect(instance.hasInstance('imageCrop')).toBe(false)

    expect(instance.aria).toEqual({})
    expect(instance.hasInstance('label')).toBe(true)
    expect(instance.hasInstance('message')).toBe(true)
    expect(instance.hasInstance('size')).toBe(true)

    scope.stop()
  })

  it('respects canCreate guards for actions, imageCrop, and form', () => {
    const props = reactive<InputImageProps>({
      name: 'avatar',
      value: 'https://example.com/photo.png'
    })
    const scope = effectScope()
    let instance!: InputImage

    scope.run(() => {
      instance = new InputImage(
        props,
        ref<HTMLDivElement | undefined>(),
        new DesignName('d1.inputImage')
      )
    })

    expect(instance.hasInstance('form')).toBe(true)
    expect(instance.classes).toEqual({
      'd1-inputImage--hasImage': true
    })

    const hasCrop = instance.callInstance('imageCrop', () => true, false)
    const hasActions = instance.callInstance('actions', () => true, false)
    expect(hasCrop).toBe(true)
    expect(hasActions).toBe(true)
    expect(instance.hasInstance('imageCrop')).toBe(true)
    expect(instance.hasInstance('actions')).toBe(true)

    scope.stop()
  })

  it('supports dependency injection overrides and mount/unmount lifecycle cleanup', async () => {
    const onMountedSpy = vi.fn()
    const onUnmountedSpy = vi.fn()
    const valueModel = ref<string | undefined>('https://example.com/initial.png')

    class StubSize extends DesignLifecycleAbstract {
      fileSize = ref<number | undefined>()
      item = ref<number | undefined>(500)
      override readonly onMounted = onMountedSpy
      override readonly onUnmounted = onUnmountedSpy
      getExtra = () => ({ counter: 500, maxlength: 1000, counterShow: true })
      isCounter = () => true
    }

    const Host = defineComponent({
      props: {
        value: { type: String, default: undefined },
        maxPixel: { type: Number, default: 1000 }
      },
      setup(props) {
        const element = ref<HTMLDivElement | undefined>()
        const instance = new InputImage(
          props as InputImageProps,
          element,
          new DesignName('d1.inputImage'),
          undefined,
          undefined,
          undefined,
          {
            size: StubSize as never
          }
        )
        instance.i('size')

        return () => h('div', { ref: element, ...instance.aria })
      }
    })

    const container = document.createElement('div')
    document.body.appendChild(container)
    const app = createApp({
      render: () => h(Host as never, { value: valueModel.value })
    })

    app.mount(container)
    mountedApps.push({ app, container })
    await nextTick()

    expect(onMountedSpy).toHaveBeenCalledTimes(1)

    app.unmount()
    expect(onUnmountedSpy).toHaveBeenCalledTimes(1)
  })
})

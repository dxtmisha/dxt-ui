// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, effectScope, h, nextTick, reactive, ref, type App } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { InputSearch } from '../InputSearch'
import type { InputSearchProps } from '../props'

describe('InputSearch (Unit)', () => {
  const mountedApps: Array<{ app: App, container: HTMLElement }> = []

  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    while (mountedApps.length > 0) {
      const entry = mountedApps.pop()
      entry?.app.unmount()
      entry?.container.remove()
    }
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  it('initializes required lifecycle dependencies lazily skips form and query until needed', () => {
    const props = reactive<InputSearchProps>({
      delay: 300,
      minQuery: 2
    })

    const scope = effectScope()
    let instance!: InputSearch

    scope.run(() => {
      instance = new InputSearch(
        props,
        ref<HTMLElement | undefined>(),
        new DesignName('d1.inputSearch')
      )
    })

    expect(instance.hasInstance('event')).toBe(true)
    expect(instance.hasInstance('validation')).toBe(true)
    expect(instance.hasInstance('form')).toBe(false)
    expect(instance.hasInstance('query')).toBe(false)

    const binds = instance.binds
    expect(instance.hasInstance('query')).toBe(true)
    expect(binds).toMatchObject({
      type: 'search'
    })
    expect(typeof binds.onInput).toBe('function')
    expect(typeof binds.onChange).toBe('function')
    expect(typeof binds.onKeydown).toBe('function')

    scope.stop()
  })

  it('uses textSearch as placeholder fallback when placeholder is explicit undefined', () => {
    const props = reactive<InputSearchProps>({
      placeholder: undefined,
      textSearch: 'Find items'
    })
    const scope = effectScope()
    let instance!: InputSearch

    scope.run(() => {
      instance = new InputSearch(
        props,
        ref<HTMLElement | undefined>(),
        new DesignName('d1.inputSearch')
      )
    })

    expect(instance.binds.placeholder).toBe('Find items')
    props.placeholder = 'Explicit placeholder'
    expect(instance.binds.placeholder).toBe('Explicit placeholder')

    scope.stop()
  })

  it('cancels active debounce timer when unmounted', async () => {
    const emitsSpy = vi.fn()
    let capturedInstance!: InputSearch

    const Host = defineComponent({
      setup() {
        const element = ref<HTMLElement | undefined>()
        capturedInstance = new InputSearch(
          { delay: 400 } as InputSearchProps,
          element,
          new DesignName('d1.inputSearch'),
          undefined,
          undefined,
          emitsSpy as never
        )

        return () => h('input', { ...capturedInstance.binds, ref: element })
      }
    })

    const container = document.createElement('div')
    document.body.appendChild(container)
    const app = createApp({ render: () => h(Host) })
    app.mount(container)
    mountedApps.push({ app, container })
    await nextTick()

    const input = container.querySelector('input')!
    input.value = 'laptop'
    input.dispatchEvent(new InputEvent('input'))

    expect(capturedInstance.i('query').loading.value).toBe(true)
    expect(emitsSpy).not.toHaveBeenCalled()

    app.unmount()
    vi.advanceTimersByTime(400)

    expect(capturedInstance.i('query').loading.value).toBe(false)
    expect(emitsSpy).not.toHaveBeenCalled()
  })
})

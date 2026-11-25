// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive, type App } from 'vue'
import { DesignName } from '@dxtmisha/functional'
import { HeadroomDesign } from '../HeadroomDesign'
import { defaultsHeadroom, type HeadroomProps } from '../props'
import type {
  HeadroomClasses,
  HeadroomComponents,
  HeadroomExpose
} from '../types'

const HeadroomComponent = defineComponent({
  name: 'DHeadroom',
  props: {
    tag: {
      type: String,
      default: defaultsHeadroom.tag
    },
    disappears: Boolean,
    transformThreshold: {
      type: Number,
      default: defaultsHeadroom.transformThreshold
    },
    scrollElement: [String, Object]
  },
  emits: ['headroomScroll', 'headroomSticky'],
  setup(props, { emit, expose }) {
    const design = new HeadroomDesign<
      HeadroomComponents,
      HeadroomExpose,
      HeadroomClasses,
      HeadroomProps
    >(
      'd-headroom',
      props as Readonly<HeadroomProps>,
      { emits: emit }
    )

    expose(design.expose())
    return design.render()
  }
})

describe('Headroom (Integration)', () => {
  const naming = new DesignName('d-headroom')
  const originalScrollY = window.scrollY
  const mountedApps: Array<{ app: App, container: HTMLElement }> = []

  const mountHeadroom = (initialProps: Record<string, unknown>) => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    const state = reactive({ ...initialProps })

    const app = createApp({
      render: () => h(HeadroomComponent, state)
    })
    app.mount(container)
    mountedApps.push({ app, container })

    return {
      state,
      app,
      container,
      element: container.firstElementChild as HTMLDivElement
    }
  }

  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', {
      value: 0,
      writable: true,
      configurable: true
    })
  })

  afterEach(() => {
    while (mountedApps.length > 0) {
      const entry = mountedApps.pop()
      entry?.app.unmount()
      entry?.container.remove()
    }
    document.body.innerHTML = ''
    Object.defineProperty(window, 'scrollY', {
      value: originalScrollY,
      writable: true,
      configurable: true
    })
    vi.restoreAllMocks()
  })

  it('has accurate defaultsHeadroom values', () => {
    expect(defaultsHeadroom.tag).toBe('div')
    expect(defaultsHeadroom.transformThreshold).toBe(0)
  })

  it('activates scroll tracking on mount, emits headroomScroll/headroomSticky, and updates DOM attributes & CSS vars', async () => {
    const onHeadroomScroll = vi.fn()
    const onHeadroomSticky = vi.fn()

    const { element } = mountHeadroom({
      disappears: true,
      transformThreshold: 100,
      onHeadroomScroll,
      onHeadroomSticky
    })

    expect(element.dataset.headroom).toBe('none')
    expect(element.dataset.headroomTransform).toBe('100')

    Object.defineProperty(window, 'scrollY', { value: 60, writable: true, configurable: true })
    window.dispatchEvent(new Event('scroll'))
    await nextTick()

    expect(element.dataset.headroom).toBe('sticky')
    expect(element.dataset.headroomDirection).toBe('down')
    expect(element.style.getPropertyValue(naming.getStyle('value'))).toBe('60px')
    expect(element.style.getPropertyValue(naming.getStyle('percent'))).toBe('0.6')

    expect(onHeadroomScroll).toHaveBeenCalledTimes(1)
    expect(onHeadroomSticky).toHaveBeenCalledWith(
      expect.objectContaining({
        value: 60,
        isSticky: true,
        transformValue: 60,
        transformPercent: 0.6
      })
    )
  })

  it('cleans up disappears inline style and stops listening when props toggle off', async () => {
    const onHeadroomScroll = vi.fn()

    const { state, element } = mountHeadroom({
      disappears: true,
      transformThreshold: 0,
      onHeadroomScroll
    })

    expect(element.style.getPropertyValue(naming.getStyle('top'))).toBe('0px')

    state.disappears = false
    await nextTick()

    expect(element.style.getPropertyValue(naming.getStyle('top'))).toBe('')

    Object.defineProperty(window, 'scrollY', { value: 90, writable: true, configurable: true })
    window.dispatchEvent(new Event('scroll'))
    await nextTick()

    expect(onHeadroomScroll).not.toHaveBeenCalled()
  })

  it('removes listeners cleanly on unmount', async () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const onHeadroomScroll = vi.fn()

    const { app, container } = mountHeadroom({
      transformThreshold: 50,
      onHeadroomScroll
    })

    app.unmount()
    container.remove()
    mountedApps.pop()

    expect(removeSpy).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function),
      { passive: true }
    )

    Object.defineProperty(window, 'scrollY', { value: 120, writable: true, configurable: true })
    window.dispatchEvent(new Event('scroll'))
    await nextTick()

    expect(onHeadroomScroll).not.toHaveBeenCalled()
  })
})

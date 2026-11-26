// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'
import { MotionStickyDesign } from '../MotionStickyDesign'
import type { MotionStickyPropsBasic } from '../props'
import type {
  MotionStickyClasses,
  MotionStickyComponents,
  MotionStickyExpose
} from '../types'

const MotionStickyComponent = defineComponent({
  name: 'D1MotionSticky',
  props: {
    elementScroll: [String, Object] as unknown as () => MotionStickyPropsBasic['elementScroll'],
    classActivity: String,
    tag: String
  },
  emits: ['sticky'],
  setup(props, { emit, expose }) {
    const design = new MotionStickyDesign<
      MotionStickyComponents,
      MotionStickyExpose,
      MotionStickyClasses,
      MotionStickyPropsBasic
    >(
      'd1.motion-sticky',
      props,
      {
        emits: emit as never,
        classes: ref({ main: 'd1-motion-sticky' })
      }
    )

    expose(design.expose())
    return design.render()
  }
})

describe('MotionSticky (integration)', () => {
  let activeApp: ReturnType<typeof createApp> | undefined
  let activeHost: HTMLElement | undefined

  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    activeApp?.unmount()
    activeApp = undefined
    activeHost?.remove()
    activeHost = undefined
    vi.useRealTimers()
    vi.restoreAllMocks()
    document.body.innerHTML = ''
  })

  it('should integrate MotionStickyDesign, MotionSticky, MotionStickyElement, and MotionStickyScroll on scroll', async () => {
    const scrollContainer = document.createElement('div')
    document.body.appendChild(scrollContainer)

    vi.spyOn(scrollContainer, 'getBoundingClientRect').mockReturnValue({
      top: 0,
      bottom: 600,
      left: 0,
      right: 400,
      width: 400,
      height: 600,
      x: 0,
      y: 0,
      toJSON: () => ({})
    })

    Object.defineProperty(window, 'innerHeight', { configurable: true, value: 800 })

    const onSticky = vi.fn()

    vi.spyOn(window, 'getComputedStyle').mockReturnValue({
      position: 'sticky',
      top: '0px',
      bottom: '0px'
    } as CSSStyleDeclaration)

    const protoRectSpy = vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(function (this: HTMLElement) {
      if (this === scrollContainer) {
        return {
          top: 0,
          bottom: 600,
          left: 0,
          right: 400,
          width: 400,
          height: 600,
          x: 0,
          y: 0,
          toJSON: () => ({})
        }
      }

      return {
        top: 0,
        bottom: 50,
        left: 0,
        right: 400,
        width: 400,
        height: 50,
        x: 0,
        y: 0,
        toJSON: () => ({})
      }
    })

    activeApp = createApp({
      render: () => h(
        MotionStickyComponent,
        {
          elementScroll: scrollContainer,
          classActivity: 'is-sticky',
          tag: 'section',
          onSticky
        },
        { default: () => h('div', 'Header') }
      )
    })
    activeApp.mount(scrollContainer)

    const rootElement = scrollContainer.firstElementChild as HTMLElement

    vi.runAllTimers()
    await nextTick()

    expect(rootElement.tagName).toBe('SECTION')
    expect(rootElement.classList.contains('d1-motion-sticky')).toBe(true)
    expect(rootElement.classList.contains('is-sticky')).toBe(true)
    expect(rootElement.dataset.sticky).toBe('sticky')
    expect(rootElement.dataset.stickyScroll).toBe('zero')
    expect(onSticky).toHaveBeenCalledWith(true)

    Object.defineProperty(scrollContainer, 'scrollTop', { configurable: true, value: 150 })
    protoRectSpy.mockImplementation(function (this: HTMLElement) {
      if (this === scrollContainer) {
        return {
          top: 0,
          bottom: 600,
          left: 0,
          right: 400,
          width: 400,
          height: 600,
          x: 0,
          y: 0,
          toJSON: () => ({})
        }
      }

      return {
        top: 80,
        bottom: 130,
        left: 0,
        right: 400,
        width: 400,
        height: 50,
        x: 0,
        y: 80,
        toJSON: () => ({})
      }
    })

    scrollContainer.dispatchEvent(new Event('scroll'))
    await nextTick()

    expect(rootElement.classList.contains('is-sticky')).toBe(false)
    expect(rootElement.dataset.sticky).toBe('none')
    expect(rootElement.dataset.stickyScroll).toBe('active')
    expect(onSticky).toHaveBeenCalledTimes(2)
    expect(onSticky).toHaveBeenLastCalledWith(false)
  })

  it('should update tag and rebind scroll listeners reactively when props change', async () => {
    const containerA = document.createElement('div')
    const containerB = document.createElement('div')
    document.body.append(containerA, containerB)

    const removeASpy = vi.spyOn(containerA, 'removeEventListener')
    const addBSpy = vi.spyOn(containerB, 'addEventListener')

    const state = reactive<{ elementScroll: HTMLElement, tag: string }>({
      elementScroll: containerA,
      tag: 'div'
    })

    activeHost = document.createElement('div')
    document.body.appendChild(activeHost)
    activeApp = createApp({
      render: () => h(MotionStickyComponent, {
        elementScroll: state.elementScroll,
        tag: state.tag
      })
    })
    activeApp.mount(activeHost)

    expect(activeHost.firstElementChild?.tagName).toBe('DIV')

    state.elementScroll = containerB
    state.tag = 'aside'
    await nextTick()

    expect(activeHost.firstElementChild?.tagName).toBe('ASIDE')
    expect(removeASpy).toHaveBeenCalledWith('scroll', expect.any(Function), { passive: true })
    expect(addBSpy).toHaveBeenCalledWith('scroll', expect.any(Function), { passive: true })
  })

  it('should remove scroll listeners and cancel animation frames on unmount', () => {
    const container = document.createElement('div')
    document.body.appendChild(container)

    const removeSpy = vi.spyOn(container, 'removeEventListener')
    const cancelFrameSpy = vi.spyOn(window, 'cancelAnimationFrame')

    activeHost = document.createElement('div')
    document.body.appendChild(activeHost)
    activeApp = createApp({
      render: () => h(MotionStickyComponent, {
        elementScroll: container
      })
    })
    activeApp.mount(activeHost)

    activeApp.unmount()
    activeApp = undefined

    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function), { passive: true })
    expect(cancelFrameSpy).toHaveBeenCalled()
  })
})

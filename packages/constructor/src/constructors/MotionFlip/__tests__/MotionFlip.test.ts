// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, ref } from 'vue'

import { MotionFlip } from '../MotionFlip'
import { MotionFlipDesign } from '../MotionFlipDesign'
import type { MotionFlipPropsBasic } from '../props'
import type {
  MotionFlipClasses,
  MotionFlipComponents,
  MotionFlipExpose
} from '../types'

const createRect = (top: number, left: number, width: number, height: number): DOMRect => ({
  top,
  left,
  width,
  height,
  right: left + width,
  bottom: top + height,
  x: left,
  y: top,
  toJSON: () => ({})
})

describe('MotionFlip (Full Component Integration)', () => {
  let rafCallbacks: Map<number, FrameRequestCallback>
  let nextFrameId: number
  let observeSpy: ReturnType<typeof vi.fn>
  let disconnectSpy: ReturnType<typeof vi.fn>
  let mutationCallback: MutationCallback | undefined
  const containers: HTMLElement[] = []

  const flushNextFrame = () => {
    const entries = Array.from(rafCallbacks.entries())
    rafCallbacks.clear()
    for (const [, callback] of entries) {
      callback(performance.now())
    }
  }

  beforeEach(() => {
    vi.useFakeTimers()
    rafCallbacks = new Map()
    nextFrameId = 1
    observeSpy = vi.fn()
    disconnectSpy = vi.fn()
    mutationCallback = undefined

    vi.stubGlobal('requestAnimationFrame', vi.fn((callback: FrameRequestCallback) => {
      const id = nextFrameId++
      rafCallbacks.set(id, callback)
      return id
    }))

    vi.stubGlobal('cancelAnimationFrame', vi.fn((id: number) => {
      rafCallbacks.delete(id)
    }))

    class MockMutationObserver {
      constructor(callback: MutationCallback) {
        mutationCallback = callback
      }

      observe = observeSpy
      disconnect = disconnectSpy
      takeRecords = vi.fn(() => [])
    }

    vi.stubGlobal('MutationObserver', MockMutationObserver)
  })

  afterEach(() => {
    while (containers.length > 0) {
      containers.pop()?.remove()
    }
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  const mountFlipHost = (initialProps: MotionFlipPropsBasic = {}) => {
    let createdLogic: MotionFlip | undefined
    const registerLogic = (instance: MotionFlip) => {
      createdLogic = instance
    }

    class TrackedMotionFlip extends MotionFlip {
      constructor(...args: ConstructorParameters<typeof MotionFlip>) {
        super(...args)
        registerLogic(this)
      }
    }

    const FlipComponent = defineComponent({
      name: 'D1MotionFlip',
      props: {
        auto: {
          type: Boolean,
          default: initialProps.auto ?? true
        },
        disabled: {
          type: Boolean,
          default: initialProps.disabled ?? false
        }
      },
      setup(props, context) {
        const design = new MotionFlipDesign<
          MotionFlipComponents,
          MotionFlipExpose,
          MotionFlipClasses,
          MotionFlipPropsBasic
        >(
          'd1.motion-flip',
          props,
          undefined,
          TrackedMotionFlip
        )

        context.expose(design.expose())
        return design.render()
      }
    })

    const flipRef = ref<MotionFlipExpose | undefined>(undefined)
    const auto = ref(initialProps.auto ?? true)
    const disabled = ref(initialProps.disabled ?? false)
    const items = ref(['A', 'B'])

    const container = document.createElement('div')
    document.body.appendChild(container)
    containers.push(container)

    const app = createApp({
      render: () => h(
        FlipComponent,
        {
          ref: flipRef,
          auto: auto.value,
          disabled: disabled.value
        },
        {
          default: () => items.value.map(label => (
            h('div', { key: label, class: 'flip-item' }, [
              h('span', { class: 'flip-inner' }, label)
            ])
          ))
        }
      )
    })

    app.mount(container)

    return {
      rootElement: container.firstElementChild as HTMLElement,
      auto,
      disabled,
      items,
      unmount: () => app.unmount(),
      getLogic: () => createdLogic!,
      getExpose: () => flipRef.value!
    }
  }

  it('should execute full manual FLIP animation cycle and clean up on transitionend', async () => {
    const { rootElement, items, unmount, getExpose } = mountFlipHost({ auto: false })
    const itemElements = Array.from(rootElement.querySelectorAll('.flip-item')) as HTMLElement[]

    vi.spyOn(itemElements[0]!, 'getBoundingClientRect')
      .mockReturnValueOnce(createRect(0, 0, 100, 40))
      .mockReturnValueOnce(createRect(60, 0, 100, 40))
    vi.spyOn(itemElements[1]!, 'getBoundingClientRect')
      .mockReturnValueOnce(createRect(60, 0, 100, 40))
      .mockReturnValueOnce(createRect(0, 0, 100, 40))

    await getExpose().update(async () => {
      items.value = ['B', 'A']
      await nextTick()
    })

    // Frame 1: freeze + CSS vars
    flushNextFrame()
    expect(rootElement.classList.contains('d1-motionFlip--freeze')).toBe(true)
    expect(itemElements[0]!.classList.contains('d1-motionFlip__item')).toBe(true)
    expect(itemElements[0]!.style.getPropertyValue('--d1-motionFlip-sys-top')).toBe('-60px')

    // Frame 2: go class
    flushNextFrame()
    expect(rootElement.classList.contains('d1-motionFlip--go')).toBe(true)

    // Dispatch transform transitionend on inner span (child of __item)
    const innerSpan = itemElements[0]!.querySelector('.flip-inner')!
    const transitionEvent = new Event('transitionend', { bubbles: true })
    Object.defineProperty(transitionEvent, 'propertyName', { value: 'transform' })
    innerSpan.dispatchEvent(transitionEvent)

    expect(itemElements[0]!.classList.contains('d1-motionFlip__item')).toBe(false)

    // Next RAF completes reset
    flushNextFrame()
    expect(rootElement.classList.contains('d1-motionFlip--freeze')).toBe(false)
    expect(rootElement.classList.contains('d1-motionFlip--go')).toBe(false)

    unmount()
  })

  it('should reset FLIP animation via 1024ms fallback timeout when transitionend does not fire', async () => {
    const { rootElement, items, unmount, getExpose } = mountFlipHost({ auto: false })
    const itemElements = Array.from(rootElement.querySelectorAll('.flip-item')) as HTMLElement[]

    vi.spyOn(itemElements[0]!, 'getBoundingClientRect')
      .mockReturnValueOnce(createRect(0, 0, 100, 40))
      .mockReturnValueOnce(createRect(40, 0, 100, 40))
    vi.spyOn(itemElements[1]!, 'getBoundingClientRect')
      .mockReturnValueOnce(createRect(40, 0, 100, 40))
      .mockReturnValueOnce(createRect(0, 0, 100, 40))

    await getExpose().update(async () => {
      items.value = ['B', 'A']
      await nextTick()
    })

    flushNextFrame()
    flushNextFrame()
    expect(rootElement.classList.contains('d1-motionFlip--go')).toBe(true)

    vi.advanceTimersByTime(1024)
    flushNextFrame()

    expect(rootElement.classList.contains('d1-motionFlip--freeze')).toBe(false)
    expect(rootElement.classList.contains('d1-motionFlip--go')).toBe(false)
    expect(itemElements[0]!.classList.contains('d1-motionFlip__item')).toBe(false)

    unmount()
  })

  it('should keep observer lazy when auto is false and activate it reactively when toggled to true', async () => {
    const { rootElement, auto, unmount, getLogic } = mountFlipHost({ auto: false })
    const logic = getLogic()

    expect(logic.hasInstance('observer')).toBe(false)
    expect(logic.hasInstance('action')).toBe(false)
    expect(observeSpy).not.toHaveBeenCalled()

    auto.value = true
    await nextTick()

    expect(logic.hasInstance('observer')).toBe(true)
    expect(observeSpy).toHaveBeenCalledWith(rootElement, { childList: true })

    // Trigger DOM mutation callback
    mutationCallback?.([], {} as MutationObserver)
    expect(logic.hasInstance('action')).toBe(true)
    expect(rafCallbacks.size).toBe(1)

    // Unmount cleans up observer and active RAF
    unmount()
    expect(disconnectSpy).toHaveBeenCalled()
    expect(rafCallbacks.size).toBe(0)
  })

  it('should abort animation immediately via exposed stop() and respect disabled prop', async () => {
    const { rootElement, disabled, unmount, getExpose, getLogic } = mountFlipHost({ auto: false, disabled: true })
    const logic = getLogic()

    const callback = vi.fn()
    await getExpose().update(callback)
    expect(callback).toHaveBeenCalledTimes(1)
    expect(logic.hasInstance('action')).toBe(false)

    disabled.value = false
    await nextTick()

    await getExpose().update(callback)
    expect(callback).toHaveBeenCalledTimes(2)
    expect(logic.hasInstance('action')).toBe(true)
    expect(rafCallbacks.size).toBe(1)

    getExpose().stop()
    expect(rafCallbacks.size).toBe(0)
    expect(rootElement.classList.contains('d1-motionFlip--freeze')).toBe(false)

    unmount()
  })
})

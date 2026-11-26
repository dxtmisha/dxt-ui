// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  computed,
  createApp,
  defineComponent,
  h,
  nextTick,
  reactive
} from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { MotionAxisDesign } from '../MotionAxisDesign'
import type { MotionAxisProps } from '../props'
import type {
  MotionAxisClasses,
  MotionAxisComponents,
  MotionAxisEmits,
  MotionAxisExpose
} from '../types'

const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.useRealTimers()
  vi.restoreAllMocks()
})

async function mountMotionAxis(
  initialProps: MotionAxisProps = {},
  initialSlots: Record<string, () => unknown> = {
    'slide-1': () => h('div', 'Slide 1'),
    'slide-2': () => h('div', 'Slide 2'),
    'slide-3': () => h('div', 'Slide 3')
  }
) {
  const container = document.createElement('div')
  const scrollWrapper = document.createElement('div')
  scrollWrapper.className = 'd1-motionAxis__scroll'
  scrollWrapper.appendChild(container)
  document.body.appendChild(scrollWrapper)
  mountedCleanups.push(() => scrollWrapper.remove())

  const props = reactive<MotionAxisProps>({
    axis: 'x',
    direction: 'auto',
    ...initialProps
  })
  const slotsRef = reactive<Record<string, () => unknown>>({ ...initialSlots })
  const emitted: Array<{ event: keyof MotionAxisEmits, args: unknown[] }> = []
  let exposed!: MotionAxisExpose

  const Host = defineComponent({
    inheritAttrs: false,
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-motion-axis': true
        }
      }))

      const design = new MotionAxisDesign<
        MotionAxisComponents,
        MotionAxisExpose,
        MotionAxisClasses,
        MotionAxisProps
      >(
        'd1.motion-axis',
        props,
        {
          classes: classesToken,
          emits: ((event: keyof MotionAxisEmits, ...args: unknown[]) => {
            emitted.push({ event, args })
          }) as never
        }
      )

      exposed = design.expose()
      return design.render()
    }
  })

  const app = createApp({
    render() {
      return h(Host, null, { ...slotsRef })
    }
  })
  app.mount(container)
  mountedCleanups.push(() => app.unmount())
  await nextTick()

  return {
    container,
    scrollWrapper,
    props,
    slotsRef,
    emitted,
    exposed
  }
}

describe('MotionAxis (integration)', () => {
  it('should render active, inDom, and inDomSlide slides accurately', async () => {
    const { container, props } = await mountMotionAxis({
      selected: 'slide-1',
      inDomSlide: ['slide-3']
    })

    const getKeys = () => Array.from(container.querySelectorAll('[data-key]')).map(el => el.getAttribute('data-key'))

    expect(getKeys()).toEqual(['slide-1', 'slide-3'])

    props.inDom = true
    await nextTick()
    expect(getKeys()).toEqual(['slide-1', 'slide-2', 'slide-3'])
  })

  it('should run full animated transition on reactive selected update and emit start/end/model events', async () => {
    vi.useFakeTimers()
    const rafQueue: FrameRequestCallback[] = []
    vi.spyOn(globalThis, 'requestAnimationFrame').mockImplementation((callback) => {
      rafQueue.push(callback)
      return rafQueue.length
    })
    vi.spyOn(globalThis, 'cancelAnimationFrame').mockImplementation(() => {})

    const { container, scrollWrapper, props, emitted } = await mountMotionAxis({
      selected: 'slide-1',
      animationHeight: true
    })

    props.selected = 'slide-2'
    await nextTick()

    const root = container.firstElementChild as HTMLElement
    const prepSlide = container.querySelector('[data-key="slide-2"]') as HTMLElement
    const prevSlide = container.querySelector('[data-key="slide-1"]') as HTMLElement

    expect(prevSlide.classList.contains('d1-motionAxis__slide--previous')).toBe(true)
    expect(prepSlide.classList.contains('d1-motionAxis__slide--preparation')).toBe(true)
    expect(scrollWrapper.classList.contains('d1-motionAxis__scroll--hidden')).toBe(true)
    expect(root.classList.contains('d1-motionAxis--start')).toBe(true)
    expect(root.classList.contains('d1-motionAxis--direction--next')).toBe(true)

    Object.defineProperty(prepSlide, 'offsetHeight', { configurable: true, get: () => 180 })
    vi.spyOn(prepSlide, 'getBoundingClientRect').mockReturnValue({
      top: 0,
      left: 0,
      width: 300,
      height: 180,
      right: 300,
      bottom: 180,
      x: 0,
      y: 0,
      toJSON: () => ({})
    })

    // Flush Frame 1 & Frame 2
    rafQueue.shift()!(0)
    await nextTick()
    expect(root.style.getPropertyValue('--d1-motionAxis-sys-next-height')).toBe('180px')

    rafQueue.shift()!(16)
    await nextTick()

    expect(root.classList.contains('d1-motionAxis--start')).toBe(false)
    expect(root.classList.contains('d1-motionAxis--move')).toBe(true)
    expect(prepSlide.classList.contains('d1-motionAxis__slide--active')).toBe(true)
    expect(emitted.some(item => item.event === 'start' && item.args[0] === 'slide-2')).toBe(true)

    // Complete transition via fallback timeout
    vi.advanceTimersByTime(1024)
    await nextTick()

    expect(scrollWrapper.classList.contains('d1-motionAxis__scroll--hidden')).toBe(false)
    expect(emitted.some(item => item.event === 'end' && item.args[0] === 'slide-2')).toBe(true)
    expect(emitted.some(item => item.event === 'update:selected' && item.args[0] === 'slide-2')).toBe(true)
    expect(container.querySelector('[data-key="slide-1"]')).toBeNull()
  })

  it('should support exposed imperative navigation and dynamic slot updates via onUpdated', async () => {
    const rafQueue: FrameRequestCallback[] = []
    vi.spyOn(globalThis, 'requestAnimationFrame').mockImplementation((callback) => {
      rafQueue.push(callback)
      return rafQueue.length
    })
    vi.spyOn(globalThis, 'cancelAnimationFrame').mockImplementation(() => {})

    const { container, exposed, slotsRef } = await mountMotionAxis({
      selected: 'slide-1'
    })

    // Add a new slide dynamically and trigger component update
    slotsRef['slide-4'] = () => h('div', 'Slide 4')
    await nextTick()

    exposed.up('slide-4')
    await nextTick()

    const root = container.firstElementChild as HTMLElement
    expect(root.classList.contains('d1-motionAxis--axis--z')).toBe(true)
    expect(root.classList.contains('d1-motionAxis--direction--next')).toBe(true)

    exposed.to('slide-2')
    await nextTick()
    expect(root.classList.contains('d1-motionAxis--direction--back')).toBe(true)
  })
})

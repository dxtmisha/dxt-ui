import { describe, it, expect, vi } from 'vitest'
import { ref, toRefs, reactive } from 'vue'
import { ScrollbarBorder } from '../ScrollbarBorder'
import type { ScrollbarProps } from '../props'

vi.mock('vue', async () => {
  const actual = await vi.importActual<typeof import('vue')>('vue')
  return {
    ...actual,
    onMounted: (fn: () => void) => fn(),
    onUnmounted: (fn: () => void) => fn()
  }
})

describe('ScrollbarBorder', () => {
  it('should initialize and watch changes correctly', () => {
    const props = reactive<ScrollbarProps>({
      divider: true,
      dividerTop: false,
      dividerBottom: false
    })
    const refs = toRefs(props)

    const element = document.createElement('div')
    const child = document.createElement('div')
    element.appendChild(child)

    const elementRef = ref(element)
    const emits = vi.fn()

    const border = new ScrollbarBorder(props, refs, elementRef, 'd1-scrollbar', emits)

    expect(border).toBeDefined()
  })

  it('should toggle start and stop monitoring depending on divider props', () => {
    const props = reactive<ScrollbarProps>({
      divider: false,
      dividerTop: false,
      dividerBottom: false
    })
    const refs = toRefs(props)

    const element = document.createElement('div')
    const child = document.createElement('div')
    element.appendChild(child)
    const elementRef = ref(element)

    const border = new ScrollbarBorder(props, refs, elementRef, 'd1-scrollbar')

    const startSpy = vi.spyOn(border, 'start')
    const stopSpy = vi.spyOn(border, 'stop')

    border.toggle()
    expect(stopSpy).toHaveBeenCalled()

    props.divider = true
    border.toggle()
    expect(startSpy).toHaveBeenCalled()
  })

  it('should update classes and data attributes on scroll boundary checks', () => {
    const props = reactive<ScrollbarProps>({
      divider: true,
      dividerTop: false,
      dividerBottom: false
    })
    const refs = toRefs(props)

    const element = document.createElement('div')
    const child = document.createElement('div')
    element.appendChild(child)
    const elementRef = ref(element)
    const emits = vi.fn()

    const border = new ScrollbarBorder(props, refs, elementRef, 'd1-scrollbar', emits)

    Object.defineProperty(element, 'scrollTop', { value: 10, writable: true, configurable: true })
    Object.defineProperty(element, 'scrollHeight', { value: 100, writable: true, configurable: true })
    Object.defineProperty(element, 'clientHeight', { value: 50, writable: true, configurable: true })

    // Call protected 'on' method
    // @ts-expect-error accessing protected method
    border.on()

    expect(element.dataset.top).toBe('top')
    expect(element.dataset.bottom).toBe('bottom')
    expect(element.dataset.scrollbarDivider).toBe('divider')

    expect(emits).toHaveBeenCalledWith('top', false)
    expect(emits).toHaveBeenCalledWith('leaveTop')

    // Set scrollTop to 0 (user reaches top)
    element.scrollTop = 0
    emits.mockClear()
    // @ts-expect-error accessing protected method
    border.on()

    expect(element.dataset.top).toBe('none')
    expect(element.dataset.bottom).toBe('bottom')
    expect(emits).toHaveBeenCalledWith('top', true)
    expect(emits).toHaveBeenCalledWith('edge', true, false, 'top')
    expect(emits).toHaveBeenCalledWith('reachTop')

    // Set scrollTop to 50 (user reaches bottom)
    element.scrollTop = 50
    emits.mockClear()
    // @ts-expect-error accessing protected method
    border.on()

    expect(element.dataset.top).toBe('top')
    expect(element.dataset.bottom).toBe('none')
    expect(emits).toHaveBeenCalledWith('bottom', true)
    expect(emits).toHaveBeenCalledWith('edge', false, true, 'bottom')
    expect(emits).toHaveBeenCalledWith('reachBottom')

    // Scroll back up to 10 (user leaves bottom)
    element.scrollTop = 10
    emits.mockClear()
    // @ts-expect-error accessing protected method
    border.on()

    expect(element.dataset.top).toBe('top')
    expect(element.dataset.bottom).toBe('bottom')
    expect(emits).toHaveBeenCalledWith('bottom', false)
    expect(emits).toHaveBeenCalledWith('edge', false, false, 'bottom')
    expect(emits).toHaveBeenCalledWith('leaveBottom')
  })
})

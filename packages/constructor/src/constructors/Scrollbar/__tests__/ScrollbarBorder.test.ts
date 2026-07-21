// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { ref, toRefs, reactive } from 'vue'
import { ScrollbarBorder } from '../ScrollbarBorder'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onMounted: (fn: () => void) => fn(),
    onUnmounted: (fn: () => void) => fn(),
    watch: (_src: any, cb: any) => {
      cb()
    }
  }
})

describe('ScrollbarBorder', () => {
  it('should initialize and watch changes correctly', () => {
    const props = reactive({
      divider: true,
      dividerTop: false,
      dividerBottom: false
    }) as any
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
    const props = reactive({
      divider: false,
      dividerTop: false,
      dividerBottom: false
    }) as any
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
    const props = reactive({
      divider: true,
      dividerTop: false,
      dividerBottom: false
    }) as any
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

    expect(element.classList.contains('d1-scrollbar--divider--top')).toBe(true)
    expect(element.classList.contains('d1-scrollbar--divider--bottom')).toBe(true)
    expect(element.dataset.scrollbarDivider).toBe('divider')

    expect(emits).toHaveBeenCalledWith('top', true)
    expect(emits).toHaveBeenCalledWith('bottom', true)

    // Set scrollTop to 0 (top should be false, bottom true)
    element.scrollTop = 0
    emits.mockClear()
    // @ts-expect-error accessing protected method
    border.on()

    expect(element.classList.contains('d1-scrollbar--divider--top')).toBe(false)
    expect(element.classList.contains('d1-scrollbar--divider--bottom')).toBe(true)
    expect(emits).toHaveBeenCalledWith('top', false)
    expect(emits).toHaveBeenCalledWith('edge', false, true, 'top')
    expect(emits).toHaveBeenCalledWith('leaveTop')
  })
})

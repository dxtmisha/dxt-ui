// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'
import { ArrowParent } from '../ArrowParent'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onMounted: (fn: () => void) => fn(),
    onUnmounted: (fn: () => void) => fn()
  }
})

describe('ArrowParent', () => {
  let parentElement: HTMLElement
  let element: HTMLElement
  let mockElementItem: any

  beforeEach(() => {
    parentElement = document.createElement('div')
    element = document.createElement('div')
    parentElement.appendChild(element)
    document.body.appendChild(parentElement)

    mockElementItem = { height: 16 }

    vi.spyOn(window, 'getComputedStyle').mockImplementation((el: Element) => {
      if (el === parentElement) {
        return {
          backgroundColor: 'rgb(255, 0, 0)',
          borderWidth: '2px',
          borderColor: 'rgb(0, 255, 0)',
          borderRadius: '8px'
        } as any
      }
      return {} as any
    })
  })

  afterEach(() => {
    document.body.removeChild(parentElement)
    vi.restoreAllMocks()
  })

  it('should initialize parent parameters and set styling variables on make()', async () => {
    const parent = new ArrowParent(ref(element), new DesignName('my.arrow'), () => mockElementItem)
    parent.onMounted()

    await new Promise(resolve => requestAnimationFrame(resolve))

    expect(parent.elementParent).toBe(parentElement)
    expect(parent.background).toBe('rgb(255, 0, 0)')
    expect(parent.borderWidth).toBe('2px')
    expect(parent.borderColor).toBe('rgb(0, 255, 0)')
    expect(parent.borderRadius).toBe('8px')
    expect(parent.borderRadiusNumber).toBe(8)
    expect(parent.isBorder()).toBe(true)

    expect(parentElement.classList.contains('my-arrow__parent')).toBe(true)
    expect(parentElement.style.getPropertyValue('--my-arrow-sys-height')).toBe('16')
    expect(parentElement.dataset.arrow).toBe('border')

    parent.onUnmounted()
    expect(parentElement.classList.contains('my-arrow__parent')).toBe(false)
    expect(parentElement.style.getPropertyValue('--my-arrow-sys-height')).toBe('')
    expect(parentElement.dataset.arrow).toBeUndefined()
  })

  it('should clean up parent styles on unmount even when element is detached before onUnmounted', async () => {
    const elementRef = ref<HTMLElement | undefined>(element)
    const parent = new ArrowParent(elementRef, new DesignName('my.arrow'), () => mockElementItem)
    parent.onMounted()

    await new Promise(resolve => requestAnimationFrame(resolve))

    expect(parentElement.classList.contains('my-arrow__parent')).toBe(true)
    expect(parentElement.dataset.arrow).toBe('border')

    // Simulate Vue 3 unmount order: ref cleared and DOM detached before onUnmounted
    elementRef.value = undefined
    element.remove()

    expect(elementRef.value?.parentElement).toBeUndefined()

    parent.onUnmounted()

    expect(parentElement.classList.contains('my-arrow__parent')).toBe(false)
    expect(parentElement.style.getPropertyValue('--my-arrow-sys-height')).toBe('')
    expect(parentElement.dataset.arrow).toBeUndefined()
  })

  it('should cancel pending animation frame if unmounted before make() executes', () => {
    const cancelSpy = vi.spyOn(window, 'cancelAnimationFrame')
    const parent = new ArrowParent(ref(element), new DesignName('my.arrow'), () => mockElementItem)

    parent.onMounted()
    parent.onUnmounted()

    expect(cancelSpy).toHaveBeenCalled()
    expect(parentElement.classList.contains('my-arrow__parent')).toBe(false)
  })
})

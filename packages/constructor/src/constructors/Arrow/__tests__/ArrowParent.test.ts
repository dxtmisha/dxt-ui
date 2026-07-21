// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ref } from 'vue'
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
    const parent = new ArrowParent(ref(element), 'my-arrow', mockElementItem)

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
  })
})

// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ref } from 'vue'
import { WindowStyles } from '../WindowStyles'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onMounted: (callback: () => void) => callback()
  }
})

describe('WindowStyles', () => {
  let mockElement: any
  let mockCoordinates: any
  let mockPosition: any
  let mockOrigin: any
  let mainElement: HTMLDivElement
  let parentElement: HTMLDivElement
  let elementRef: any

  beforeEach(() => {
    mainElement = document.createElement('div')
    parentElement = document.createElement('div')
    parentElement.dataset.windowTeleport = 'window-123'
    parentElement.appendChild(mainElement)

    elementRef = ref(mainElement)

    mockElement = {
      element: elementRef,
      getMain: vi.fn().mockReturnValue(mainElement)
    }
    mockCoordinates = {
      getControlWidth: vi.fn().mockReturnValue(120),
      getControlHeight: vi.fn().mockReturnValue(50),
      getLocation: vi.fn().mockReturnValue('15px')
    }
    mockPosition = {
      getStyleX: vi.fn().mockReturnValue('30px'),
      getStyleY: vi.fn().mockReturnValue('40px')
    }
    mockOrigin = {
      getStyleX: vi.fn().mockReturnValue('50px'),
      getStyleY: vi.fn().mockReturnValue('60px')
    }
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should set style properties on update()', () => {
    const styles = new WindowStyles(mockElement, mockCoordinates, mockPosition, mockOrigin, 'd1-window')
    styles.update()

    expect(mainElement.style.getPropertyValue('--d1-window-sys-inset-x')).toBe('30px')
    expect(mainElement.style.getPropertyValue('--d1-window-sys-inset-y')).toBe('40px')
    expect(mainElement.style.getPropertyValue('--d1-window-origin-x')).toBe('50px')
    expect(mainElement.style.getPropertyValue('--d1-window-origin-y')).toBe('60px')
    expect(mainElement.style.getPropertyValue('--d1-window-sys-control-width')).toBe('120px')
    expect(mainElement.style.getPropertyValue('--d1-window-sys-control-height')).toBe('50px')
    expect(mainElement.style.getPropertyValue('--d1-window-sys-location')).toBe('15px')
  })

  it('should update window type datasets', () => {
    const styles = new WindowStyles(mockElement, mockCoordinates, mockPosition, mockOrigin, 'd1-window')

    // Initial state setup to trigger update
    mainElement.dataset.windowMenu = 'modal'

    styles.updateType(true) // isMenu = true

    expect(mainElement.dataset.windowMenu).toBe('menu')
    expect(parentElement.dataset.windowMenu).toBe('menu')

    styles.updateType(false) // isMenu = false

    expect(mainElement.dataset.windowMenu).toBe('modal')
    expect(parentElement.dataset.windowMenu).toBe('modal')
  })
})

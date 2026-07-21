// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ref, nextTick } from 'vue'
import { WindowHidden } from '../WindowHidden'
import type { WindowProps } from '../props'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onMounted: (callback: () => void) => callback()
  }
})

describe('WindowHidden', () => {
  let mockProps: Partial<WindowProps>
  let mockClasses: any
  let mockStatic: any
  let mockOpen: any
  let mockTeleport: any

  let siblingElement: HTMLDivElement
  let windowElement: HTMLDivElement

  beforeEach(() => {
    mockProps = {
      inert: true,
      embedded: false,
      autoTabIndex: true
    }
    mockClasses = {
      getId: vi.fn().mockReturnValue('window-123'),
      isWindowOrTeleport: vi.fn().mockImplementation((element: HTMLElement) => {
        return element.classList.contains('d1-window')
      })
    }
    mockStatic = {
      item: ref(false)
    }
    mockOpen = {
      openEnd: ref(false)
    }
    mockTeleport = {
      isTeleportElement: vi.fn().mockReturnValue(false)
    }

    // Set up elements in document body
    siblingElement = document.createElement('div')
    siblingElement.id = 'sibling'

    windowElement = document.createElement('div')
    windowElement.className = 'd1-window window-123'

    document.body.appendChild(siblingElement)
    document.body.appendChild(windowElement)
  })

  afterEach(() => {
    document.body.innerHTML = ''
    vi.restoreAllMocks()
  })

  it('should set inert and aria-hidden on siblings when window is opened and openEnd is true', async () => {
    const windowHidden = new WindowHidden(
      mockProps as WindowProps,
      mockClasses,
      mockStatic,
      mockOpen,
      mockTeleport
    )

    mockOpen.openEnd.value = true
    await nextTick()

    expect(siblingElement.getAttribute('aria-hidden')).toBe('true')
    expect(siblingElement.getAttribute('data-window-block')).toBe('true')
    expect(siblingElement.hasAttribute('inert')).toBe(true)
  })

  it('should remove inert and aria-hidden on siblings when window is closed and openEnd is false', async () => {
    const windowHidden = new WindowHidden(
      mockProps as WindowProps,
      mockClasses,
      mockStatic,
      mockOpen,
      mockTeleport
    )

    // Open first to apply attributes
    mockOpen.openEnd.value = true
    await nextTick()

    expect(siblingElement.hasAttribute('inert')).toBe(true)

    // Close
    mockOpen.openEnd.value = false
    await nextTick()

    expect(siblingElement.getAttribute('aria-hidden')).toBeNull()
    expect(siblingElement.getAttribute('data-window-block')).toBeNull()
    expect(siblingElement.hasAttribute('inert')).toBe(false)
  })

  it('should do nothing when opening if props.inert is false', async () => {
    mockProps.inert = false
    const windowHidden = new WindowHidden(
      mockProps as WindowProps,
      mockClasses,
      mockStatic,
      mockOpen,
      mockTeleport
    )

    mockOpen.openEnd.value = true
    await nextTick()

    expect(siblingElement.hasAttribute('inert')).toBe(false)
  })
})

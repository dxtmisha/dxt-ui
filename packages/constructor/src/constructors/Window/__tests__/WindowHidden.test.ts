// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ref, nextTick } from 'vue'
import { WindowHidden } from '../WindowHidden'
import type { WindowProps } from '../props'

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
      openEnd: ref(false),
      isMenu: ref(false)
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
    const hidden = new WindowHidden(
      mockProps as WindowProps,
      () => mockClasses,
      () => mockOpen,
      () => mockStatic,
      () => mockTeleport
    )
    hidden.onMounted()

    mockOpen.openEnd.value = true
    await nextTick()

    expect(siblingElement.getAttribute('aria-hidden')).toBe('true')
    expect(siblingElement.getAttribute('data-window-block')).toBe('true')
    expect(siblingElement.hasAttribute('inert')).toBe(true)
  })

  it('should remove inert and aria-hidden on siblings when window is closed and openEnd is false', async () => {
    const hidden = new WindowHidden(
      mockProps as WindowProps,
      () => mockClasses,
      () => mockOpen,
      () => mockStatic,
      () => mockTeleport
    )
    hidden.onMounted()

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
    const hidden = new WindowHidden(
      mockProps as WindowProps,
      () => mockClasses,
      () => mockOpen,
      () => mockStatic,
      () => mockTeleport
    )
    hidden.onMounted()

    mockOpen.openEnd.value = true
    await nextTick()

    expect(siblingElement.hasAttribute('inert')).toBe(false)
  })

  it('should keep background inert when nested or unopened window closes or unmounts', async () => {
    const windowAElement = document.createElement('div')
    windowAElement.className = 'd1-window window-a'
    const windowBElement = document.createElement('div')
    windowBElement.className = 'd1-window window-b'
    document.body.appendChild(windowAElement)
    document.body.appendChild(windowBElement)

    const openA = { openEnd: ref(false) }
    const openB = { openEnd: ref(false) }
    const openC = { openEnd: ref(false) }

    const classesA = {
      getId: () => 'window-a',
      isWindowOrTeleport: (element: HTMLElement) => element.classList.contains('d1-window')
    }
    const classesB = {
      getId: () => 'window-b',
      isWindowOrTeleport: (element: HTMLElement) => element.classList.contains('d1-window')
    }
    const classesC = {
      getId: () => 'window-c',
      isWindowOrTeleport: (element: HTMLElement) => element.classList.contains('d1-window')
    }

    const hiddenA = new WindowHidden(
      mockProps as WindowProps,
      () => classesA as any,
      () => openA as any,
      () => mockStatic,
      () => mockTeleport
    )
    const hiddenB = new WindowHidden(
      mockProps as WindowProps,
      () => classesB as any,
      () => openB as any,
      () => mockStatic,
      () => mockTeleport
    )
    const hiddenC = new WindowHidden(
      mockProps as WindowProps,
      () => classesC as any,
      () => openC as any,
      () => mockStatic,
      () => mockTeleport
    )

    hiddenA.onMounted()
    hiddenB.onMounted()
    hiddenC.onMounted()

    // Open Window A
    openA.openEnd.value = true
    await nextTick()
    expect(siblingElement.hasAttribute('inert')).toBe(true)
    expect(siblingElement.getAttribute('aria-hidden')).toBe('true')

    // Open Window B on top of Window A (hides Window A for SR, keeps sibling blocked)
    openB.openEnd.value = true
    await nextTick()
    expect(windowAElement.getAttribute('aria-hidden')).toBe('true')

    // Unmount unopened Window C -> must NOT unlock sibling or Window A
    hiddenC.onUnmounted()
    expect(siblingElement.hasAttribute('inert')).toBe(true)
    expect(siblingElement.getAttribute('aria-hidden')).toBe('true')

    // Close Window B -> sibling remains inert for Window A, while Window A regains aria visibility
    openB.openEnd.value = false
    await nextTick()
    expect(siblingElement.hasAttribute('inert')).toBe(true)
    expect(siblingElement.getAttribute('aria-hidden')).toBe('true')
    expect(windowAElement.getAttribute('aria-hidden')).toBeNull()

    // Close Window A -> sibling is finally unblocked
    openA.openEnd.value = false
    await nextTick()
    expect(siblingElement.hasAttribute('inert')).toBe(false)
    expect(siblingElement.getAttribute('aria-hidden')).toBeNull()
    expect(siblingElement.getAttribute('data-window-block')).toBeNull()

    hiddenA.onUnmounted()
    hiddenB.onUnmounted()
  })

  it('should not apply inert or aria-hidden when isMenu is true and should react to menu mode transitions', async () => {
    mockOpen.isMenu.value = true

    const hidden = new WindowHidden(
      mockProps as WindowProps,
      () => mockClasses,
      () => mockOpen,
      () => mockStatic,
      () => mockTeleport
    )
    hidden.onMounted()

    // Open in --MENU-- mode -> background must stay interactive
    mockOpen.openEnd.value = true
    await nextTick()

    expect(siblingElement.hasAttribute('inert')).toBe(false)
    expect(siblingElement.getAttribute('aria-hidden')).toBeNull()
    expect(siblingElement.getAttribute('data-window-block')).toBeNull()

    // Switch to modal mode while open -> background becomes inert
    mockOpen.isMenu.value = false
    await nextTick()

    expect(siblingElement.hasAttribute('inert')).toBe(true)
    expect(siblingElement.getAttribute('aria-hidden')).toBe('true')
    expect(siblingElement.getAttribute('data-window-block')).toBe('true')

    // Switch back to --MENU-- mode -> background becomes interactive again
    mockOpen.isMenu.value = true
    await nextTick()

    expect(siblingElement.hasAttribute('inert')).toBe(false)
    expect(siblingElement.getAttribute('aria-hidden')).toBeNull()
    expect(siblingElement.getAttribute('data-window-block')).toBeNull()

    hidden.onUnmounted()
  })
})

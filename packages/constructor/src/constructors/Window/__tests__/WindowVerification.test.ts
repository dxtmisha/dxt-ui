// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ref } from 'vue'
import { WindowVerification } from '../WindowVerification'
import type { WindowProps } from '../props'

describe('WindowVerification', () => {
  let mockProps: Partial<WindowProps>
  let isMountedRef: any
  let mockPersistent: any
  let mockClasses: any
  let mockElement: any
  let mockStatic: any
  let mockOpen: any

  let targetElement: HTMLDivElement

  beforeEach(() => {
    targetElement = document.createElement('div')
    document.body.appendChild(targetElement)

    mockProps = {
      disabled: false,
      contextmenu: false
    }
    isMountedRef = ref(true)
    mockPersistent = {
      on: vi.fn().mockReturnValue(false)
    }
    mockClasses = {
      findMain: vi.fn(),
      findControl: vi.fn(),
      findControlByElement: vi.fn(),
      findBody: vi.fn(),
      findBodyOther: vi.fn(),
      getSelectorControl: vi.fn().mockReturnValue('.d1-window__control'),
      list: {
        controlStatic: 'd1-window--control-static',
        controlOpenOnly: 'd1-window--control-open-only',
        persistent: 'd1-window--persistent',
        static: 'd1-window--static',
        close: 'd1-window--close',
        control: 'd1-window__control'
      },
      getId: vi.fn().mockReturnValue('window-123')
    }
    mockElement = {
      getMain: vi.fn().mockReturnValue(document.createElement('div'))
    }
    mockStatic = {
      item: ref(false)
    }
    mockOpen = {
      isClicks: vi.fn().mockReturnValue(false),
      pressed: vi.fn(),
      item: ref(false),
      toggle: vi.fn().mockResolvedValue(undefined)
    }
  })

  afterEach(() => {
    document.body.innerHTML = ''
    vi.restoreAllMocks()
  })

  it('should call toggle() if window is closed and enabled', async () => {
    const verification = new WindowVerification(
      mockProps as WindowProps,
      () => mockClasses,
      () => mockElement,
      () => mockOpen,
      () => mockPersistent,
      () => mockStatic,
      isMountedRef
    )

    await verification.update(targetElement)

    expect(mockOpen.pressed).toHaveBeenCalled()
    expect(mockOpen.toggle).toHaveBeenCalled()
  })

  it('should ignore verification updates if target is not in body', async () => {
    const verification = new WindowVerification(
      mockProps as WindowProps,
      () => mockClasses,
      () => mockElement,
      () => mockOpen,
      () => mockPersistent,
      () => mockStatic,
      isMountedRef
    )

    const orphanElement = document.createElement('div')
    await verification.update(orphanElement)

    expect(mockOpen.pressed).not.toHaveBeenCalled()
  })

  it('should ignore verification updates if disabled option is true', async () => {
    mockProps.disabled = true
    const verification = new WindowVerification(
      mockProps as WindowProps,
      () => mockClasses,
      () => mockElement,
      () => mockOpen,
      () => mockPersistent,
      () => mockStatic,
      isMountedRef
    )

    await verification.update(targetElement)

    expect(mockOpen.toggle).not.toHaveBeenCalled()
  })

  it('should not reopen a closed window or run pending child timer after unmount', async () => {
    vi.useFakeTimers()
    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
      callback(0)
      return 1
    })

    const parentWindow = document.createElement('div')
    parentWindow.className = 'd1-window'
    parentWindow.dataset.window = 'window-123'
    const childControl = document.createElement('button')
    parentWindow.appendChild(childControl)
    document.body.appendChild(parentWindow)

    const childWindow = document.createElement('div')
    childWindow.className = 'd1-window'
    childWindow.dataset.window = 'child-id'
    childWindow.dataset.status = 'close'
    targetElement.appendChild(childWindow)

    mockOpen.item.value = true
    mockClasses.findMain.mockImplementation((element?: HTMLElement) => {
      if (element === childControl) {
        return parentWindow
      }
      if (element === targetElement || element === childWindow) {
        return childWindow
      }
      return undefined
    })
    mockClasses.findControlByElement.mockReturnValue(childControl)
    mockElement.getMain.mockReturnValue(document.createElement('div'))

    const verification = new WindowVerification(
      mockProps as WindowProps,
      () => mockClasses,
      () => mockElement,
      () => mockOpen,
      () => mockPersistent,
      () => mockStatic,
      isMountedRef
    )

    await verification.update(targetElement)

    // Window closes before 40ms child check executes
    mockOpen.item.value = false
    vi.advanceTimersByTime(100)
    await Promise.resolve()

    expect(mockOpen.toggle).not.toHaveBeenCalled()

    // Also verify cleanup on unmount
    mockOpen.item.value = true
    mockOpen.resetClicks = undefined
    mockOpen.isClicks.mockReturnValue(false)
    await verification.update(targetElement)
    verification.onUnmounted()

    vi.advanceTimersByTime(100)
    await Promise.resolve()
    expect(mockOpen.toggle).not.toHaveBeenCalled()

    vi.unstubAllGlobals()
    vi.useRealTimers()
  })
})

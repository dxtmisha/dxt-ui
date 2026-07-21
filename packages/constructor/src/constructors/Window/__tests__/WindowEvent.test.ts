// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ref } from 'vue'
import { WindowEvent } from '../WindowEvent'
import type { WindowProps } from '../props'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onMounted: (callback: () => void) => callback()
  }
})

describe('WindowEvent', () => {
  let mockProps: Partial<WindowProps>
  let mockTabIndex: any
  let mockStatus: any
  let mockClient: any
  let mockFlash: any
  let mockOpen: any
  let mockVerification: any
  let windowEvent: WindowEvent

  beforeEach(() => {
    mockProps = {
      contextmenu: false,
      openOnArrowDown: true,
      embedded: false
    }
    mockTabIndex = {
      updateOldElement: vi.fn()
    }
    mockStatus = {
      item: ref('closed'),
      isOpen: vi.fn().mockReturnValue(false)
    }
    mockClient = {
      set: vi.fn()
    }
    mockFlash = {
      setControl: vi.fn()
    }
    mockOpen = {
      item: ref(false),
      closeForEvent: vi.fn()
    }
    mockVerification = {
      update: vi.fn()
    }

    windowEvent = new WindowEvent(
      mockProps as WindowProps,
      mockTabIndex,
      mockStatus,
      mockClient,
      mockFlash,
      mockOpen,
      mockVerification
    )
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should call verify and set coordinates on click if contextmenu option is false', async () => {
    const mouseEvent = {
      preventDefault: vi.fn(),
      clientX: 120,
      clientY: 240,
      target: document.createElement('div')
    } as unknown as MouseEvent

    await windowEvent.onClick(mouseEvent)

    expect(mockTabIndex.updateOldElement).toHaveBeenCalled()
    expect(mockClient.set).toHaveBeenCalledWith(120, 240)
    expect(mockVerification.update).toHaveBeenCalledWith(mouseEvent.target)
  })

  it('should not perform operations on click if contextmenu option is true', async () => {
    mockProps.contextmenu = true
    const mouseEvent = {
      clientX: 120,
      clientY: 240
    } as unknown as MouseEvent

    await windowEvent.onClick(mouseEvent)

    expect(mockClient.set).not.toHaveBeenCalled()
  })

  it('should call verify and set coordinates on contextmenu if contextmenu option is true', async () => {
    mockProps.contextmenu = true
    const contextEvent = {
      preventDefault: vi.fn(),
      clientX: 150,
      clientY: 250,
      target: document.createElement('div')
    } as unknown as MouseEvent

    await windowEvent.onContextmenu(contextEvent)

    expect(contextEvent.preventDefault).toHaveBeenCalled()
    expect(mockClient.set).toHaveBeenCalledWith(150, 250)
  })

  it('should handle enter keydown by triggering click when window is closed', async () => {
    const keydownEvent = {
      key: 'Enter',
      preventDefault: vi.fn(),
      clientX: 10,
      clientY: 20
    } as unknown as KeyboardEvent

    await windowEvent.onKeydown(keydownEvent)

    expect(keydownEvent.preventDefault).toHaveBeenCalled()
    expect(mockClient.set).toHaveBeenCalledWith(10, 20)
  })

  it('should trigger close on transitionend', () => {
    windowEvent.onTransition()
    expect(mockOpen.closeForEvent).toHaveBeenCalled()
  })

  it('should start and stop global listeners based on open toggle', () => {
    mockOpen.item.value = true
    mockStatus.isOpen.mockReturnValue(true)

    // Spy on start and stop
    const startSpy = vi.spyOn(windowEvent, 'start')
    const stopSpy = vi.spyOn(windowEvent, 'stop')

    windowEvent.toggle()
    expect(startSpy).toHaveBeenCalled()

    mockOpen.item.value = false
    windowEvent.toggle()
    expect(stopSpy).toHaveBeenCalled()
  })
})

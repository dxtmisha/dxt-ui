// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { WindowOpen } from '../WindowOpen'
import type { WindowProps } from '../props'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onMounted: (callback: () => void) => callback()
  }
})

vi.mock('@dxtmisha/functional', async () => {
  const actual = await vi.importActual('@dxtmisha/functional') as any
  return {
    ...actual,
    frame: (callback: () => void) => callback()
  }
})

describe('WindowOpen', () => {
  let mockProps: Partial<WindowProps>
  let mockClientOnly: any
  let mockClient: any
  let mockHook: any
  let mockElement: any
  let mockTabIndex: any
  let mockStatus: any
  let mockFlash: any
  let mockCoordinates: any
  let mockPosition: any
  let mockOrigin: any
  let mockEmit: any
  let mockStyles: any

  let windowOpen: WindowOpen

  let mainElement: HTMLDivElement

  beforeEach(() => {
    vi.useFakeTimers()
    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => callback(0))

    mainElement = document.createElement('div')
    document.body.appendChild(mainElement)

    mockProps = {
      staticMode: false,
      inDom: false,
      embedded: false
    }
    mockClientOnly = {
      isRender: vi.fn().mockReturnValue(true)
    }
    mockClient = {
      reset: vi.fn()
    }
    mockHook = {
      before: vi.fn().mockResolvedValue(true),
      preparation: vi.fn().mockResolvedValue(undefined),
      opening: vi.fn().mockResolvedValue(undefined),
      closing: vi.fn().mockResolvedValue(undefined)
    }
    mockElement = {
      getMain: vi.fn().mockReturnValue(mainElement),
      isMain: vi.fn().mockReturnValue(true)
    }
    mockTabIndex = {
      goTo: vi.fn(),
      reset: vi.fn()
    }
    mockStatus = {
      toDisplay: vi.fn(),
      update: vi.fn(),
      toPreparation: vi.fn(),
      toFlash: vi.fn(),
      toOpen: vi.fn(),
      toHide: vi.fn(),
      toClose: vi.fn(),
      isHide: vi.fn().mockReturnValue(false),
      isOpen: vi.fn().mockReturnValue(true)
    }
    mockFlash = {
      isClose: vi.fn().mockReturnValue(true),
      isOpen: vi.fn().mockReturnValue(false)
    }
    mockCoordinates = {
      reset: vi.fn()
    }
    mockPosition = {
      updateScroll: vi.fn(),
      updateBody: vi.fn(),
      update: vi.fn()
    }
    mockOrigin = {
      reset: vi.fn(),
      update: vi.fn()
    }
    mockEmit = {
      on: vi.fn()
    }
    mockStyles = {
      updateType: vi.fn(),
      update: vi.fn()
    }

    windowOpen = new WindowOpen(
      mockProps as WindowProps,
      mockClientOnly,
      mockClient,
      mockHook,
      mockElement,
      mockTabIndex,
      mockStatus,
      mockFlash,
      mockCoordinates,
      mockPosition,
      mockOrigin,
      mockEmit,
      mockStyles
    )
  })

  afterEach(() => {
    document.body.innerHTML = ''
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  it('should compute inDom based on open item state and props', async () => {
    expect(windowOpen.inDom).toBe(false)

    // open item state is set to true
    await windowOpen.setOpen(true)
    expect(windowOpen.inDom).toBe(true)

    // Reset open
    await windowOpen.setOpen(false)
    mockProps.staticMode = true
    expect(windowOpen.inDom).toBe(true)
  })

  it('should toggle window to open and trigger state functions and positioning updates', async () => {
    // Initially closed
    expect(windowOpen.item.value).toBe(false)

    await windowOpen.toggle()
    for (let index = 0; index < 10; index++) {
      await Promise.resolve()
    }

    expect(mockHook.before).toHaveBeenCalledWith(true)
    expect(windowOpen.item.value).toBe(true)
    expect(mockStatus.toDisplay).toHaveBeenCalled()
    expect(mockPosition.updateScroll).toHaveBeenCalled()
    expect(mockStatus.toPreparation).toHaveBeenCalled()
    expect(mockStatus.toFlash).toHaveBeenCalled()
    expect(mockEmit.on).toHaveBeenCalledWith(true)
  })

  it('should toggle window to close', async () => {
    // Open window first
    await windowOpen.setOpen(true)

    // Trigger close via toggle
    await windowOpen.toggle()

    expect(mockClient.reset).toHaveBeenCalled()
    // It should request close animation frame to set hide status
    expect(mockStatus.toHide).toHaveBeenCalled()
  })

  it('should handle checkInDom and auto close if element is missing from document body', async () => {
    // Opened
    await windowOpen.setOpen(true)

    // mock main element is NOT in document body
    mockElement.getMain.mockReturnValue(document.createElement('div'))

    const isPresent = await windowOpen.checkInDom()
    expect(isPresent).toBe(false)
    expect(windowOpen.item.value).toBe(false)
    expect(windowOpen.openEnd.value).toBe(false)
  })

  it('should increment clicks via pressed() and reset via resetClicks()', () => {
    expect(windowOpen.isClicks()).toBe(false)

    windowOpen.pressed()
    expect(windowOpen.isClicks()).toBe(true)

    windowOpen.resetClicks()
    expect(windowOpen.isClicks()).toBe(false)
  })
})

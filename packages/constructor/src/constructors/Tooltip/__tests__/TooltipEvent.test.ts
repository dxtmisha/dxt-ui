// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ref } from 'vue'
import { TooltipEvent } from '../TooltipEvent'
import type { TooltipClassesData } from '../TooltipClassesData'
import type { TooltipOpen } from '../TooltipOpen'
import type { TooltipStatus } from '../TooltipStatus'
import type { TooltipStyle } from '../TooltipStyle'
import type { TooltipProps } from '../props'

describe('TooltipEvent', () => {
  let mockProps: Partial<TooltipProps>
  let mockClasses: { findControlByTarget: ReturnType<typeof vi.fn> }
  let mockStyle: { setMove: ReturnType<typeof vi.fn> }
  let mockStatus: { open: ReturnType<typeof ref<boolean>> }
  let mockOpen: { toggle: ReturnType<typeof vi.fn>, noHide: ReturnType<typeof vi.fn> }
  let tooltipEvent: TooltipEvent

  beforeEach(() => {
    vi.useFakeTimers()
    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
      callback(0)
      return 1
    })
    vi.stubGlobal('cancelAnimationFrame', vi.fn())

    mockProps = {
      embedded: false
    }
    mockClasses = {
      findControlByTarget: vi.fn()
    }
    mockStyle = {
      setMove: vi.fn()
    }
    mockStatus = {
      open: ref(false)
    }
    mockOpen = {
      toggle: vi.fn().mockResolvedValue(undefined),
      noHide: vi.fn()
    }

    tooltipEvent = new TooltipEvent(
      mockProps as Readonly<TooltipProps>,
      () => mockClasses as unknown as TooltipClassesData,
      () => mockOpen as unknown as TooltipOpen,
      () => mockStatus as unknown as TooltipStatus,
      () => mockStyle as unknown as TooltipStyle
    )
    tooltipEvent.onMounted()
  })

  afterEach(() => {
    tooltipEvent.onUnmounted()
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  describe('onClick', () => {
    it('should toggle tooltip open and close states when clicking', () => {
      mockStatus.open.value = false
      tooltipEvent.onClick()
      expect(mockOpen.toggle).toHaveBeenCalledWith(true, true)

      mockStatus.open.value = true
      tooltipEvent.onClick()
      expect(mockOpen.toggle).toHaveBeenCalledWith(false, true)
    })

    it('should do nothing on click if component is embedded', () => {
      mockProps.embedded = true
      tooltipEvent.onClick()
      expect(mockOpen.toggle).not.toHaveBeenCalled()
    })

    it('should ignore click during mouseover debounce window and re-enable after 640ms', async () => {
      const mockElement = document.createElement('div')
      mockClasses.findControlByTarget.mockReturnValue(mockElement)

      tooltipEvent.onMouseover({ target: mockElement } as unknown as MouseEvent)
      await Promise.resolve()
      mockOpen.toggle.mockClear()

      tooltipEvent.onClick()
      expect(mockOpen.toggle).not.toHaveBeenCalled()

      vi.advanceTimersByTime(640)
      tooltipEvent.onClick()
      expect(mockOpen.toggle).toHaveBeenCalledWith(true, true)
    })
  })

  describe('onMouseover', () => {
    it('should call open toggle with true if mouse target is control and false otherwise', () => {
      const mockElement = document.createElement('div')
      mockClasses.findControlByTarget.mockReturnValue(mockElement)

      tooltipEvent.onMouseover({ target: mockElement } as unknown as MouseEvent)
      expect(mockClasses.findControlByTarget).toHaveBeenCalledWith(mockElement)
      expect(mockOpen.toggle).toHaveBeenCalledWith(true)

      mockClasses.findControlByTarget.mockReturnValue(undefined)
      tooltipEvent.onMouseover({ target: mockElement } as unknown as MouseEvent)
      expect(mockOpen.toggle).toHaveBeenCalledWith(false)
    })

    it('should do nothing on mouseover if component is embedded', () => {
      mockProps.embedded = true
      tooltipEvent.onMouseover({ target: document.createElement('div') } as unknown as MouseEvent)
      expect(mockOpen.toggle).not.toHaveBeenCalled()
    })
  })

  describe('onMouseoverTooltip', () => {
    it('should prevent hiding by calling noHide()', () => {
      tooltipEvent.onMouseoverTooltip()
      expect(mockOpen.noHide).toHaveBeenCalled()
    })
  })

  describe('onMouseout', () => {
    it('should toggle tooltip state based on relatedTarget control check', () => {
      const mockElement = document.createElement('div')
      mockClasses.findControlByTarget.mockReturnValue(mockElement)

      tooltipEvent.onMouseout({ relatedTarget: mockElement } as unknown as MouseEvent)
      expect(mockClasses.findControlByTarget).toHaveBeenCalledWith(mockElement)
      expect(mockOpen.toggle).toHaveBeenCalledWith(true)
    })

    it('should do nothing on mouseout if relatedTarget is missing or embedded is true', () => {
      tooltipEvent.onMouseout({ relatedTarget: null } as unknown as MouseEvent)
      expect(mockOpen.toggle).not.toHaveBeenCalled()

      mockProps.embedded = true
      tooltipEvent.onMouseout({ relatedTarget: document.createElement('div') } as unknown as MouseEvent)
      expect(mockOpen.toggle).not.toHaveBeenCalled()
    })
  })

  describe('onTransitionend', () => {
    it('should set style move status to true only when propertyName is transform and open is true', () => {
      mockStatus.open.value = true
      tooltipEvent.onTransitionend({ propertyName: 'transform' } as TransitionEvent)
      expect(mockStyle.setMove).toHaveBeenCalledWith(true)

      mockStyle.setMove.mockClear()
      tooltipEvent.onTransitionend({ propertyName: 'opacity' } as TransitionEvent)
      expect(mockStyle.setMove).not.toHaveBeenCalled()

      mockStatus.open.value = false
      tooltipEvent.onTransitionend({ propertyName: 'transform' } as TransitionEvent)
      expect(mockStyle.setMove).not.toHaveBeenCalled()
    })
  })

  describe('lifecycle cleanup', () => {
    it('should ignore events and clear pending frames/timers after onUnmounted', () => {
      tooltipEvent.onUnmounted()

      tooltipEvent.onClick()
      tooltipEvent.onMouseover({ target: document.createElement('div') } as unknown as MouseEvent)
      tooltipEvent.onMouseout({ relatedTarget: document.createElement('div') } as unknown as MouseEvent)
      tooltipEvent.onMouseoverTooltip()

      expect(mockOpen.toggle).not.toHaveBeenCalled()
      expect(mockOpen.noHide).not.toHaveBeenCalled()
    })
  })
})

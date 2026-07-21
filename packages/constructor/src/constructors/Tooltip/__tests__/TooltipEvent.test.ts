// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ref } from 'vue'
import { TooltipEvent } from '../TooltipEvent'
import type { TooltipProps } from '../props'

describe('TooltipEvent', () => {
  let mockProps: Partial<TooltipProps>
  let mockClasses: any
  let mockStyle: any
  let mockStatus: any
  let mockOpen: any
  let tooltipEvent: TooltipEvent

  beforeEach(() => {
    vi.useFakeTimers()
    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => callback(0))

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
      mockProps as TooltipProps,
      mockClasses,
      mockStyle,
      mockStatus,
      mockOpen
    )
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  describe('onClick', () => {
    it('should toggle tooltip open state when clicking', () => {
      mockStatus.open.value = false
      tooltipEvent.onClick()

      expect(mockOpen.toggle).toHaveBeenCalledWith(true, true)
    })

    it('should toggle tooltip close state when clicking and open is true', () => {
      mockStatus.open.value = true
      tooltipEvent.onClick()

      expect(mockOpen.toggle).toHaveBeenCalledWith(false, true)
    })

    it('should do nothing on click if component is embedded', () => {
      mockProps.embedded = true
      tooltipEvent.onClick()

      expect(mockOpen.toggle).not.toHaveBeenCalled()
    })
  })

  describe('onMouseover', () => {
    it('should call open toggle with true if mouse target is control', () => {
      const mockElement = document.createElement('div')
      const mouseEvent = { target: mockElement } as unknown as MouseEvent
      mockClasses.findControlByTarget.mockReturnValue(mockElement)

      tooltipEvent.onMouseover(mouseEvent)

      expect(mockClasses.findControlByTarget).toHaveBeenCalledWith(mockElement)
      expect(mockOpen.toggle).toHaveBeenCalledWith(true)
    })

    it('should call open toggle with false if mouse target is not control', () => {
      const mockElement = document.createElement('div')
      const mouseEvent = { target: mockElement } as unknown as MouseEvent
      mockClasses.findControlByTarget.mockReturnValue(undefined)

      tooltipEvent.onMouseover(mouseEvent)

      expect(mockClasses.findControlByTarget).toHaveBeenCalledWith(mockElement)
      expect(mockOpen.toggle).toHaveBeenCalledWith(false)
    })

    it('should do nothing on mouseover if component is embedded', () => {
      mockProps.embedded = true
      const mockElement = document.createElement('div')
      const mouseEvent = { target: mockElement } as unknown as MouseEvent

      tooltipEvent.onMouseover(mouseEvent)

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
      const mouseEvent = { relatedTarget: mockElement } as unknown as MouseEvent
      mockClasses.findControlByTarget.mockReturnValue(mockElement)

      tooltipEvent.onMouseout(mouseEvent)

      expect(mockClasses.findControlByTarget).toHaveBeenCalledWith(mockElement)
      expect(mockOpen.toggle).toHaveBeenCalledWith(true)
    })

    it('should do nothing on mouseout if relatedTarget is missing', () => {
      const mouseEvent = { relatedTarget: null } as unknown as MouseEvent

      tooltipEvent.onMouseout(mouseEvent)

      expect(mockOpen.toggle).not.toHaveBeenCalled()
    })

    it('should do nothing on mouseout if component is embedded', () => {
      mockProps.embedded = true
      const mockElement = document.createElement('div')
      const mouseEvent = { relatedTarget: mockElement } as unknown as MouseEvent

      tooltipEvent.onMouseout(mouseEvent)

      expect(mockOpen.toggle).not.toHaveBeenCalled()
    })
  })

  describe('onTransitionend', () => {
    it('should set style move status to true if transition property is transform and tooltip is open', () => {
      mockStatus.open.value = true
      const transitionEvent = { propertyName: 'transform' } as unknown as TransitionEvent

      tooltipEvent.onTransitionend(transitionEvent)

      expect(mockStyle.setMove).toHaveBeenCalledWith(true)
    })

    it('should not set style move status if transition property is not transform', () => {
      mockStatus.open.value = true
      const transitionEvent = { propertyName: 'opacity' } as unknown as TransitionEvent

      tooltipEvent.onTransitionend(transitionEvent)

      expect(mockStyle.setMove).not.toHaveBeenCalled()
    })

    it('should not set style move status if tooltip is closed', () => {
      mockStatus.open.value = false
      const transitionEvent = { propertyName: 'transform' } as unknown as TransitionEvent

      tooltipEvent.onTransitionend(transitionEvent)

      expect(mockStyle.setMove).not.toHaveBeenCalled()
    })
  })
})

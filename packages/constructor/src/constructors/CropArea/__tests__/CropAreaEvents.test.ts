// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { ModelInclude } from '../../../classes/ModelInclude'
import { CropAreaCoordinates } from '../CropAreaCoordinates'
import { CropAreaElement } from '../CropAreaElement'
import { CropAreaEmit } from '../CropAreaEmit'
import { CropAreaEvents } from '../CropAreaEvents'
import { CropAreaPosition } from '../CropAreaPosition'
import { CropAreaStyle } from '../CropAreaStyle'
import type { CropAreaCoordinator } from '../basicTypes'
import type { CropAreaProps } from '../props'

describe('CropAreaEvents', () => {
  const activeEvents: CropAreaEvents[] = []

  afterEach(() => {
    activeEvents.splice(0).forEach(events => events.onUnmounted())
    document.body.className = ''
    vi.restoreAllMocks()
  })

  const createInstances = (propsInit: Partial<CropAreaProps> = {}) => {
    const element = document.createElement('div')
    const elementRef = ref<HTMLElement | undefined>(element)
    const props = reactive<CropAreaProps>({
      value: [10, 10, 10, 10],
      min: 8,
      ...propsInit
    })

    const emits = vi.fn()
    const model = new ModelInclude<CropAreaCoordinator>('value', emits)
    const elementItem = new CropAreaElement(elementRef, new DesignName('d1.crop-area'))
    const style = new CropAreaStyle(elementRef, new DesignName('d1.crop-area'))
    const position = new CropAreaPosition(props, () => model, () => style)
    const emit = new CropAreaEmit(() => position, emits)
    const coordinates = new CropAreaCoordinates(
      () => elementItem,
      () => emit,
      () => position
    )
    const events = new CropAreaEvents(
      props,
      () => coordinates,
      () => elementItem
    )

    activeEvents.push(events)

    vi.spyOn(element, 'getBoundingClientRect').mockReturnValue({
      width: 200,
      height: 200,
      top: 0,
      left: 0,
      right: 200,
      bottom: 200,
      x: 0,
      y: 0,
      toJSON: () => ({})
    })

    return { coordinates, element, elementItem, emit, emits, events, model, position, props, style }
  }

  const startDrag = (events: CropAreaEvents, direction = 'top', clientX = 50, clientY = 50) => {
    const handle = document.createElement('div')
    handle.dataset.value = direction

    const startEvent = new MouseEvent('mousedown', {
      bubbles: true,
      cancelable: true,
      clientX,
      clientY,
      buttons: 1
    })
    Object.defineProperty(startEvent, 'target', { value: handle })
    events.onMousedown(startEvent)

    return startEvent
  }

  describe('Bindings and tabindex', () => {
    it('should provide binds with tabindex, mouse, touch, and keyboard handlers', () => {
      const { events } = createInstances()

      expect(events.binds).toMatchObject({
        tabindex: 0,
        onMousedown: events.onMousedown,
        onTouchstart: events.onMousedown,
        onKeydown: events.onKeydown
      })
    })

    it('should support custom tabindex and omit tabindex when disabled', () => {
      const { events: custom } = createInstances({ tabindex: 2 })
      expect(custom.tabindex).toBe(2)

      const { events: disabled } = createInstances({ disabled: true, tabindex: 2 })
      expect(disabled.tabindex).toBeUndefined()
    })
  })

  describe('Keyboard navigation and IME composition guard', () => {
    const createKeyEvent = (key: string, options: KeyboardEventInit = {}) => {
      const event = new KeyboardEvent('keydown', { key, cancelable: true, ...options })
      vi.spyOn(event, 'preventDefault')
      return event
    }

    it('should move with arrow keys and multiply step by 10 with altKey', () => {
      const { coordinates, events } = createInstances({ step: 2 })
      const moveByStepSpy = vi.spyOn(coordinates, 'moveByStep')

      const up = createKeyEvent('ArrowUp')
      events.onKeydown(up)
      expect(up.preventDefault).toHaveBeenCalled()
      expect(moveByStepSpy).toHaveBeenCalledWith(0, -2)

      const down = createKeyEvent('ArrowDown')
      events.onKeydown(down)
      expect(moveByStepSpy).toHaveBeenCalledWith(0, 2)

      const left = createKeyEvent('ArrowLeft')
      events.onKeydown(left)
      expect(moveByStepSpy).toHaveBeenCalledWith(-2, 0)

      const rightAlt = createKeyEvent('ArrowRight', { altKey: true })
      events.onKeydown(rightAlt)
      expect(moveByStepSpy).toHaveBeenCalledWith(20, 0)
    })

    it('should resize primary edges with Shift and opposite edges with Ctrl/Meta', () => {
      const { coordinates, events } = createInstances({ step: 1 })
      const resizeByStepSpy = vi.spyOn(coordinates, 'resizeByStep')

      events.onKeydown(createKeyEvent('ArrowRight', { shiftKey: true }))
      expect(resizeByStepSpy).toHaveBeenCalledWith(1, 0, false)

      events.onKeydown(createKeyEvent('ArrowDown', { shiftKey: true }))
      expect(resizeByStepSpy).toHaveBeenCalledWith(0, 1, false)

      events.onKeydown(createKeyEvent('ArrowLeft', { ctrlKey: true }))
      expect(resizeByStepSpy).toHaveBeenCalledWith(-1, 0, true)

      events.onKeydown(createKeyEvent('ArrowUp', { metaKey: true }))
      expect(resizeByStepSpy).toHaveBeenCalledWith(0, -1, true)
    })

    it('should ignore keydown when disabled, during IME composition, or for unhandled keys', () => {
      const { coordinates, events } = createInstances()
      const moveByStepSpy = vi.spyOn(coordinates, 'moveByStep')

      const composingEvent = createKeyEvent('ArrowUp', { isComposing: true })
      events.onKeydown(composingEvent)
      expect(composingEvent.preventDefault).not.toHaveBeenCalled()
      expect(moveByStepSpy).not.toHaveBeenCalled()

      const enterEvent = createKeyEvent('Enter')
      events.onKeydown(enterEvent)
      expect(enterEvent.preventDefault).not.toHaveBeenCalled()
      expect(moveByStepSpy).not.toHaveBeenCalled()

      const { coordinates: disabledCoords, events: disabledEvents } = createInstances({ disabled: true })
      const disabledSpy = vi.spyOn(disabledCoords, 'moveByStep')
      const arrowDisabled = createKeyEvent('ArrowUp')
      disabledEvents.onKeydown(arrowDisabled)
      expect(arrowDisabled.preventDefault).not.toHaveBeenCalled()
      expect(disabledSpy).not.toHaveBeenCalled()
    })

    it('should safely fall back to step 1 when step prop is invalid or non-positive', () => {
      const { coordinates, events } = createInstances({ step: 'invalid' })
      const moveByStepSpy = vi.spyOn(coordinates, 'moveByStep')

      events.onKeydown(createKeyEvent('ArrowRight'))
      expect(moveByStepSpy).toHaveBeenCalledWith(1, 0)
    })
  })

  describe('Pointer drag, gesture cancellation, and resource cleanup', () => {
    it('should start drag, process mousemove, and clean up on mouseup or no-buttons mousemove', () => {
      const addSpy = vi.spyOn(window, 'addEventListener')
      const removeSpy = vi.spyOn(window, 'removeEventListener')
      const { events, position } = createInstances()

      startDrag(events, 'top', 50, 50)
      expect(document.body.classList.contains('d1-cropArea__blockSelection')).toBe(true)
      expect(addSpy).toHaveBeenCalledWith('mousemove', events.onMousemove)
      expect(addSpy).toHaveBeenCalledWith('pointercancel', events.onMousemove)
      expect(addSpy).toHaveBeenCalledWith('blur', expect.any(Function))

      window.dispatchEvent(new MouseEvent('mousemove', { clientX: 50, clientY: 70, buttons: 1 }))
      expect(position.get()[0]).toBe(20)

      window.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, cancelable: true }))
      expect(document.body.classList.contains('d1-cropArea__blockSelection')).toBe(false)
      expect(removeSpy).toHaveBeenCalledWith('mousemove', events.onMousemove)
      expect(removeSpy).toHaveBeenCalledWith('pointercancel', events.onMousemove)
      expect(removeSpy).toHaveBeenCalledWith('blur', expect.any(Function))

      // Mousemove with buttons === 0 terminates active drag cleanly
      startDrag(events, 'top', 50, 50)
      expect(document.body.classList.contains('d1-cropArea__blockSelection')).toBe(true)
      window.dispatchEvent(new MouseEvent('mousemove', { clientX: 50, clientY: 60, buttons: 0 }))
      expect(document.body.classList.contains('d1-cropArea__blockSelection')).toBe(false)
    })

    it('should cancel active drag and remove listeners on pointercancel and window blur', () => {
      const removeSpy = vi.spyOn(window, 'removeEventListener')
      const { coordinates, events } = createInstances()
      const resetSpy = vi.spyOn(coordinates, 'reset')

      // pointercancel
      startDrag(events, 'left')
      expect(document.body.classList.contains('d1-cropArea__blockSelection')).toBe(true)
      window.dispatchEvent(new Event('pointercancel'))
      expect(document.body.classList.contains('d1-cropArea__blockSelection')).toBe(false)
      expect(resetSpy).toHaveBeenCalledTimes(1)
      expect(removeSpy).toHaveBeenCalledWith('pointercancel', events.onMousemove)

      // window blur
      startDrag(events, 'right')
      expect(document.body.classList.contains('d1-cropArea__blockSelection')).toBe(true)
      window.dispatchEvent(new Event('blur'))
      expect(document.body.classList.contains('d1-cropArea__blockSelection')).toBe(false)
      expect(resetSpy).toHaveBeenCalledTimes(2)
      expect(removeSpy).toHaveBeenCalledWith('blur', expect.any(Function))
    })

    it('should recognize all terminating events in isEnd()', () => {
      const { events } = createInstances()

      expect(events.isEnd(new Event('mouseup'))).toBe(true)
      expect(events.isEnd(new Event('contextmenu'))).toBe(true)
      expect(events.isEnd(new Event('touchend'))).toBe(true)
      expect(events.isEnd(new Event('touchcancel'))).toBe(true)
      expect(events.isEnd(new Event('pointercancel'))).toBe(true)
      expect(events.isEnd(new Event('blur'))).toBe(true)
      expect(events.isEnd(new Event('mousemove'))).toBe(false)
    })

    it('should ignore mousedown when disabled or when target has no direction dataset value', () => {
      const { events: disabledEvents } = createInstances({ disabled: true })
      startDrag(disabledEvents, 'top')
      expect(document.body.classList.contains('d1-cropArea__blockSelection')).toBe(false)

      const { events } = createInstances()
      const plainDiv = document.createElement('div')
      const event = new MouseEvent('mousedown', { bubbles: true })
      Object.defineProperty(event, 'target', { value: plainDiv })
      events.onMousedown(event)
      expect(document.body.classList.contains('d1-cropArea__blockSelection')).toBe(false)
    })

    it('should clean up body selection lock, coordinates, and global listeners on unmount mid-drag', () => {
      const removeSpy = vi.spyOn(window, 'removeEventListener')
      const { coordinates, events } = createInstances()
      const resetSpy = vi.spyOn(coordinates, 'reset')

      startDrag(events, 'bottom')
      expect(document.body.classList.contains('d1-cropArea__blockSelection')).toBe(true)

      events.onUnmounted()

      expect(document.body.classList.contains('d1-cropArea__blockSelection')).toBe(false)
      expect(resetSpy).toHaveBeenCalledTimes(1)
      expect(removeSpy).toHaveBeenCalledWith('mousemove', events.onMousemove)
      expect(removeSpy).toHaveBeenCalledWith('touchmove', events.onMousemove)
    })

    it('should not instantiate lazy dependencies during onUnmounted if no drag ever started', () => {
      const coordinatesGetter = vi.fn()
      const elementGetter = vi.fn()
      const events = new CropAreaEvents(
        reactive<CropAreaProps>({}),
        coordinatesGetter,
        elementGetter
      )

      events.onUnmounted()

      expect(coordinatesGetter).not.toHaveBeenCalled()
      expect(elementGetter).not.toHaveBeenCalled()
    })
  })
})

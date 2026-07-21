// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { AlertEvent } from '../AlertEvent'
import { AlertHide } from '../AlertHide'

describe('AlertEvent', () => {
  let mockHide: AlertHide
  let emitsSpy: any

  beforeEach(() => {
    mockHide = new AlertHide('my-alert')
    emitsSpy = vi.fn()
  })

  it('should trigger close hide state on onClose', () => {
    const event = new AlertEvent(mockHide, emitsSpy)

    event.onClose()
    expect(mockHide.isHide).toBe(true)
  })

  it('should handle transitionend for opacity and trigger destroy when hide is active', () => {
    const event = new AlertEvent(mockHide, emitsSpy)
    const transitionEvent = new TransitionEvent('transitionend', { propertyName: 'opacity' })

    event.onTransition(transitionEvent)
    expect(mockHide.destroy.value).toBe(false)
    expect(emitsSpy).not.toHaveBeenCalled()

    mockHide.setHide(true)
    event.onTransition(transitionEvent)

    expect(mockHide.destroy.value).toBe(true)
    expect(emitsSpy).toHaveBeenCalledWith('close')
  })

  it('should ignore transitionend if propertyName is not opacity', () => {
    const event = new AlertEvent(mockHide, emitsSpy)
    const transitionEvent = new TransitionEvent('transitionend', { propertyName: 'width' })

    mockHide.setHide(true)
    event.onTransition(transitionEvent)

    expect(mockHide.destroy.value).toBe(false)
    expect(emitsSpy).not.toHaveBeenCalled()
  })
})

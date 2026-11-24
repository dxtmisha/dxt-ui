// @vitest-environment jsdom
import './testWarnings'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { type ConstrEmit, DesignName } from '@dxtmisha/functional'
import { AlertEvent } from '../AlertEvent'
import { AlertHide } from '../AlertHide'
import type { AlertEmits } from '../types'

describe('AlertEvent', () => {
  let mockHide: AlertHide
  let hideGetter: () => AlertHide
  let emitsSpy: ReturnType<typeof vi.fn>
  let emitsCallback: ConstrEmit<AlertEmits>

  beforeEach(() => {
    mockHide = new AlertHide(new DesignName('my.alert'))
    hideGetter = vi.fn(() => mockHide)
    emitsSpy = vi.fn()
    emitsCallback = emitsSpy as unknown as ConstrEmit<AlertEmits>
  })

  it('should remain lazy in constructor and trigger hide on onClose', () => {
    const event = new AlertEvent(hideGetter, emitsCallback)
    expect(hideGetter).not.toHaveBeenCalled()

    event.onClose()
    expect(hideGetter).toHaveBeenCalledTimes(1)
    expect(mockHide.isHide).toBe(true)
  })

  it('should destroy and emit close once when opacity transition ends while hidden', () => {
    const event = new AlertEvent(hideGetter, emitsCallback)
    const transitionEvent = new TransitionEvent('transitionend', { propertyName: 'opacity' })

    event.onTransition(transitionEvent)
    expect(mockHide.destroy.value).toBe(false)
    expect(emitsSpy).not.toHaveBeenCalled()

    mockHide.setHide(true)
    event.onTransition(transitionEvent)
    expect(mockHide.destroy.value).toBe(true)
    expect(emitsSpy).toHaveBeenCalledTimes(1)
    expect(emitsSpy).toHaveBeenCalledWith('close')

    // Duplicate transitionend after already destroyed must not emit close again
    event.onTransition(transitionEvent)
    expect(emitsSpy).toHaveBeenCalledTimes(1)
  })

  it('should ignore non-opacity transitions and bubbled child transitionend events', () => {
    const event = new AlertEvent(hideGetter, emitsCallback)
    mockHide.setHide(true)

    const widthEvent = new TransitionEvent('transitionend', { propertyName: 'width' })
    event.onTransition(widthEvent)
    expect(mockHide.destroy.value).toBe(false)
    expect(emitsSpy).not.toHaveBeenCalled()

    const parentElement = document.createElement('div')
    const childElement = document.createElement('button')
    parentElement.appendChild(childElement)

    const bubbledEvent = new TransitionEvent('transitionend', { propertyName: 'opacity', bubbles: true })
    Object.defineProperty(bubbledEvent, 'target', { value: childElement })
    Object.defineProperty(bubbledEvent, 'currentTarget', { value: parentElement })

    event.onTransition(bubbledEvent)
    expect(mockHide.destroy.value).toBe(false)
    expect(emitsSpy).not.toHaveBeenCalled()
  })

  it('should work safely when emits callback is omitted', () => {
    const event = new AlertEvent(hideGetter)
    mockHide.setHide(true)

    const transitionEvent = new TransitionEvent('transitionend', { propertyName: 'opacity' })
    expect(() => event.onTransition(transitionEvent)).not.toThrow()
    expect(mockHide.destroy.value).toBe(true)
  })
})

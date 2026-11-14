// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, nextTick, ref } from 'vue'
import { MotionTransformEvent } from '../MotionTransformEvent'

describe('MotionTransformEvent', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should handle click, keydown (with IME guard), transitionend, and document auto-close', async () => {
    const scope = effectScope()
    const mainElement = document.createElement('div')
    const childElement = document.createElement('span')
    mainElement.appendChild(childElement)
    document.body.appendChild(mainElement)

    const stateMock = {
      open: ref(false),
      set: vi.fn(),
      toggle: vi.fn(),
      reset: vi.fn()
    } as any

    const elementMock = {
      getElement: () => mainElement,
      isClick: vi.fn().mockReturnValue(true),
      isClickGlobal: vi.fn().mockReturnValue(true),
      isClose: vi.fn().mockReturnValue(false),
      isOutside: vi.fn().mockReturnValue(true),
      isIgnore: vi.fn().mockReturnValue(true)
    } as any

    const emits = vi.fn()

    const eventHandler = scope.run(() => new MotionTransformEvent(
      { clickOpen: true, autoClose: true },
      () => elementMock,
      () => stateMock,
      emits
    ))!

    eventHandler.onMounted()

    // Click when clickOpen is true
    const clickEvent = new MouseEvent('click', { bubbles: true })
    Object.defineProperty(clickEvent, 'target', { value: childElement })
    eventHandler.onClick(clickEvent)
    expect(emits).toHaveBeenCalledWith('transform', clickEvent, { type: 'head', open: true })
    expect(emits).toHaveBeenCalledWith('transformLite', { type: 'head', open: true })
    expect(stateMock.toggle).toHaveBeenCalledTimes(1)

    // Keydown Enter ignored during IME composition
    const composingKeyEvent = new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter' })
    Object.defineProperty(composingKeyEvent, 'isComposing', { value: true })
    Object.defineProperty(composingKeyEvent, 'target', { value: childElement })
    eventHandler.onKeydown(composingKeyEvent)
    expect(stateMock.toggle).toHaveBeenCalledTimes(1)

    // Regular Enter toggles state
    const enterKeyEvent = new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter' })
    Object.defineProperty(enterKeyEvent, 'target', { value: childElement })
    eventHandler.onKeydown(enterKeyEvent)
    expect(stateMock.toggle).toHaveBeenCalledTimes(2)

    // Transitionend only resets when target is main element and propertyName is height
    eventHandler.onTransitionend({ target: childElement, propertyName: 'height' } as unknown as TransitionEvent)
    eventHandler.onTransitionend({ target: mainElement, propertyName: 'opacity' } as unknown as TransitionEvent)
    expect(stateMock.reset).not.toHaveBeenCalled()

    eventHandler.onTransitionend({ target: mainElement, propertyName: 'height' } as unknown as TransitionEvent)
    expect(stateMock.reset).toHaveBeenCalledTimes(1)

    // Document outside click closes when open becomes true
    stateMock.open.value = true
    await nextTick()

    const outsideElement = document.createElement('button')
    document.body.appendChild(outsideElement)
    outsideElement.click()
    expect(stateMock.set).toHaveBeenCalledWith(false)

    // Unmount stops listener and avoids memory leak
    stateMock.set.mockClear()
    eventHandler.onUnmounted()
    outsideElement.click()
    expect(stateMock.set).not.toHaveBeenCalled()

    mainElement.remove()
    outsideElement.remove()
    scope.stop()
  })

  it('should ignore click and keydown when clickOpen is false', () => {
    const stateMock = {
      open: ref(false),
      toggle: vi.fn()
    } as any

    const elementMock = {
      isClick: vi.fn().mockReturnValue(true)
    } as any

    const eventHandler = new MotionTransformEvent(
      { clickOpen: false },
      () => elementMock,
      () => stateMock
    )

    const clickEvent = new MouseEvent('click')
    Object.defineProperty(clickEvent, 'target', { value: document.createElement('div') })
    eventHandler.onClick(clickEvent)

    const enterEvent = new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter' })
    Object.defineProperty(enterEvent, 'target', { value: document.createElement('div') })
    eventHandler.onKeydown(enterEvent)

    expect(stateMock.toggle).not.toHaveBeenCalled()
  })
})

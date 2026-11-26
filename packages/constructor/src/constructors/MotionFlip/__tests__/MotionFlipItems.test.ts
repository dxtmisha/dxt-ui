// @vitest-environment jsdom
import { describe, it, expect, vi, afterEach } from 'vitest'
import type { MotionFlipElement } from '../MotionFlipElement'
import { MotionFlipItems } from '../MotionFlipItems'

const createRect = (top: number, left: number, width: number, height: number): DOMRect => ({
  top,
  left,
  width,
  height,
  right: left + width,
  bottom: top + height,
  x: left,
  y: top,
  toJSON: () => ({})
})

describe('MotionFlipItems', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should not invoke elementManager getter in constructor', () => {
    const managerGetter = vi.fn(() => ({
      getClassName: () => 'd1-motion-flip',
      getElement: () => undefined
    } as unknown as MotionFlipElement))

    new MotionFlipItems(managerGetter)

    expect(managerGetter).not.toHaveBeenCalled()
  })

  it('should clear items cleanly when element is unavailable on init', () => {
    const manager = {
      getClassName: () => 'd1-motion-flip',
      getElement: () => undefined
    } as unknown as MotionFlipElement

    const items = new MotionFlipItems(() => manager)

    expect(() => {
      items.init()
      items.update()
      items.reset()
    }).not.toThrow()
  })

  it('should batch all DOM rectangle reads before writing styles during update', () => {
    const container = document.createElement('div')
    const first = document.createElement('div')
    const second = document.createElement('div')
    container.append(first, second)

    const events: string[] = []

    vi.spyOn(first, 'getBoundingClientRect')
      .mockImplementationOnce(() => createRect(0, 0, 100, 40))
      .mockImplementationOnce(() => {
        events.push('read-first')
        return createRect(50, 0, 100, 40)
      })
    vi.spyOn(second, 'getBoundingClientRect')
      .mockImplementationOnce(() => createRect(50, 0, 100, 40))
      .mockImplementationOnce(() => {
        events.push('read-second')
        return createRect(0, 0, 100, 40)
      })

    const originalSetFirst = first.style.setProperty.bind(first.style)
    vi.spyOn(first.style, 'setProperty').mockImplementation((name, value) => {
      if (name.endsWith('-top')) events.push('write-first')
      originalSetFirst(name, value)
    })

    const originalSetSecond = second.style.setProperty.bind(second.style)
    vi.spyOn(second.style, 'setProperty').mockImplementation((name, value) => {
      if (name.endsWith('-top')) events.push('write-second')
      originalSetSecond(name, value)
    })

    const manager = {
      getClassName: () => 'd1-motion-flip',
      getElement: () => container
    } as unknown as MotionFlipElement

    const items = new MotionFlipItems(() => manager)
    items.init()
    items.update()

    expect(events).toEqual(['read-first', 'read-second', 'write-first', 'write-second'])
    expect(first.style.getPropertyValue('--d1-motion-flip-sys-top')).toBe('-50px')
    expect(second.style.getPropertyValue('--d1-motion-flip-sys-top')).toBe('50px')
  })

  it('should re-capture original sizes on initOriginalSize and reset all items on reset', () => {
    const container = document.createElement('div')
    const child = document.createElement('div')
    container.append(child)

    vi.spyOn(child, 'getBoundingClientRect')
      .mockReturnValueOnce(createRect(0, 0, 100, 40))
      .mockReturnValueOnce(createRect(20, 10, 120, 60))
      .mockReturnValueOnce(createRect(40, 20, 120, 60))

    const manager = {
      getClassName: () => 'd1-motion-flip',
      getElement: () => container
    } as unknown as MotionFlipElement

    const items = new MotionFlipItems(() => manager)
    items.init()
    items.initOriginalSize()
    items.update()

    expect(child.style.getPropertyValue('--d1-motion-flip-sys-top')).toBe('-20px')
    expect(child.classList.contains('d1-motion-flip__item')).toBe(true)

    items.reset()
    expect(child.style.getPropertyValue('--d1-motion-flip-sys-top')).toBe('')
    expect(child.classList.contains('d1-motion-flip__item')).toBe(false)
  })

  it('should reset only the matching item when transform transitionend fires on its direct child', () => {
    const container = document.createElement('div')
    const itemElement = document.createElement('div')
    const innerContent = document.createElement('div')
    const unrelatedElement = document.createElement('div')
    itemElement.append(innerContent)
    container.append(itemElement)

    vi.spyOn(itemElement, 'getBoundingClientRect').mockReturnValue(createRect(10, 10, 80, 40))

    const manager = {
      getClassName: () => 'd1-motion-flip',
      getElement: () => container
    } as unknown as MotionFlipElement

    const items = new MotionFlipItems(() => manager)
    items.init()
    items.update()

    expect(items.resetItem({
      propertyName: 'opacity',
      target: innerContent
    } as unknown as TransitionEvent)).toBe(false)
    expect(itemElement.classList.contains('d1-motion-flip__item')).toBe(true)

    expect(items.resetItem({
      propertyName: 'transform',
      target: unrelatedElement
    } as unknown as TransitionEvent)).toBe(false)
    expect(itemElement.classList.contains('d1-motion-flip__item')).toBe(true)

    expect(items.resetItem({
      propertyName: 'transform',
      target: null
    } as unknown as TransitionEvent)).toBe(false)

    expect(items.resetItem({
      propertyName: 'transform',
      target: innerContent
    } as unknown as TransitionEvent)).toBe(true)
    expect(itemElement.classList.contains('d1-motion-flip__item')).toBe(false)
  })
})

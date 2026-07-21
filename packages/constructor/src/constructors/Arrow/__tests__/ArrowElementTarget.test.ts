// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { ArrowElementTarget } from '../ArrowElementTarget'

describe('ArrowElementTarget', () => {
  let targetElement: HTMLElement

  beforeEach(() => {
    targetElement = document.createElement('div')
    targetElement.id = 'target-id'
    document.body.appendChild(targetElement)
  })

  afterEach(() => {
    document.body.removeChild(targetElement)
  })

  it('should initialize and return element from DOM selector when position is auto', () => {
    const target = new ArrowElementTarget({ position: 'auto', elementTarget: '#target-id' })
    target.update()

    expect(target.is()).toBe(true)
    expect(target.element.value).toBe(targetElement)
  })

  it('should return element object directly when passed directly and position is auto', () => {
    // Add dummy property so isFilled(targetElement) returns true (since isFilled checks Object.keys)
    ;(targetElement as any).dummy = true

    const target = new ArrowElementTarget({ position: 'auto', elementTarget: targetElement })
    target.update()

    expect(target.is()).toBe(true)
    expect(target.element.value).toBe(targetElement)
  })

  it('should return undefined if position is not auto', () => {
    const target = new ArrowElementTarget({ position: 'top', elementTarget: targetElement })
    target.update()

    expect(target.is()).toBe(false)
    expect(target.element.value).toBeUndefined()
  })

  it('should return bounding rect correctly', () => {
    ;(targetElement as any).dummy = true

    const target = new ArrowElementTarget({ position: 'auto', elementTarget: targetElement })
    target.update()

    const mockRect = { top: 100, bottom: 150, left: 100, right: 200 } as any
    targetElement.getBoundingClientRect = () => mockRect

    expect(target.getRect()).toBe(mockRect)
  })
})

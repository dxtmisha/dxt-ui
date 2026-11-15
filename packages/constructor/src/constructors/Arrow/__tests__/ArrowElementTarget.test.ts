// @vitest-environment jsdom
import './testWarnings'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { reactive } from 'vue'
import { ArrowElementTarget } from '../ArrowElementTarget'
import type { ArrowProps } from '../props'

describe('ArrowElementTarget', () => {
  let targetElement: HTMLElement

  beforeEach(() => {
    targetElement = document.createElement('div')
    targetElement.id = 'target-id'
    document.body.appendChild(targetElement)
  })

  afterEach(() => {
    targetElement.remove()
  })

  it('should initialize and return element from DOM selector when position is auto', () => {
    const target = new ArrowElementTarget({ position: 'auto', elementTarget: '#target-id' })
    target.update()

    expect(target.is()).toBe(true)
    expect(target.element.value).toBe(targetElement)
  })

  it('should return element object directly when passed directly and position is auto', () => {
    const target = new ArrowElementTarget({ position: 'auto', elementTarget: targetElement })
    target.update()

    expect(target.is()).toBe(true)
    expect(target.element.value).toBe(targetElement)
  })

  it('should return undefined if position is not auto or selector is missing', () => {
    const targetStatic = new ArrowElementTarget({ position: 'top', elementTarget: targetElement })
    targetStatic.update()

    expect(targetStatic.is()).toBe(false)
    expect(targetStatic.element.value).toBeUndefined()

    const targetMissing = new ArrowElementTarget({ position: 'auto', elementTarget: '#missing-id' })
    targetMissing.update()

    expect(targetMissing.is()).toBe(false)
    expect(targetMissing.element.value).toBeUndefined()
    expect(targetMissing.getRect()).toBeUndefined()
  })

  it('should clear resolved element when position switches from auto to static', () => {
    const props = reactive<ArrowProps>({ position: 'auto', elementTarget: targetElement })
    const target = new ArrowElementTarget(props)
    target.update()
    expect(target.is()).toBe(true)

    props.position = 'bottom'
    target.update()
    expect(target.is()).toBe(false)
    expect(target.element.value).toBeUndefined()
  })

  it('should return false for is when elementTarget is empty string or undefined', () => {
    expect(ArrowElementTarget.is({ position: 'auto', elementTarget: '' })).toBe(false)
    expect(ArrowElementTarget.is({ position: 'auto', elementTarget: '   ' })).toBe(false)
    expect(ArrowElementTarget.is({ position: 'auto', elementTarget: undefined })).toBe(false)
    expect(ArrowElementTarget.is({ position: 'auto', elementTarget: targetElement })).toBe(true)
    expect(ArrowElementTarget.is({ position: 'auto', elementTarget: '#target-id' })).toBe(true)
  })

  it('should evaluate static isAuto() properly', () => {
    expect(ArrowElementTarget.isAuto({ position: 'auto' })).toBe(true)
    expect(ArrowElementTarget.isAuto({ position: 'top' })).toBe(false)
    expect(ArrowElementTarget.isAuto({ position: undefined })).toBe(false)
    expect(ArrowElementTarget.isAuto(undefined)).toBe(false)
  })

  it('should return bounding rect correctly', () => {
    const target = new ArrowElementTarget({ position: 'auto', elementTarget: targetElement })
    target.update()

    const mockRect = { top: 100, bottom: 150, left: 100, right: 200 } as DOMRect
    targetElement.getBoundingClientRect = () => mockRect

    expect(target.getRect()).toBe(mockRect)
  })
})

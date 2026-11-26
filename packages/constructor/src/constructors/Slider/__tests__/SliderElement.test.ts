// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { SliderFocusType } from '../basicTypes'
import { SliderElement } from '../SliderElement'
import type { SliderThumbMax } from '../SliderThumbMax'
import type { SliderThumbMin } from '../SliderThumbMin'
import type { SliderPropsBasic } from '../props'

describe('SliderElement', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should return rectangle from element reference', () => {
    const props = { vertical: false } as SliderPropsBasic
    const elementRef = ref<HTMLElement | undefined>(undefined)
    const mockMax = {} as SliderThumbMax
    const mockMin = {} as SliderThumbMin

    const sliderElement = new SliderElement(props, elementRef, () => mockMax, () => mockMin)

    expect(sliderElement.rectangle).toBeUndefined()

    const divElement = document.createElement('div')
    vi.spyOn(divElement, 'getBoundingClientRect').mockReturnValue({
      width: 200,
      height: 20,
      top: 0,
      left: 100,
      right: 300,
      bottom: 20
    } as DOMRect)

    elementRef.value = divElement

    expect(sliderElement.rectangle?.width).toBe(200)
    expect(sliderElement.rectangle?.left).toBe(100)
  })

  it('should calculate move percent horizontally and handle zero width', () => {
    const props = { vertical: false } as SliderPropsBasic
    const elementRef = ref<HTMLElement | undefined>(undefined)
    const sliderElement = new SliderElement(
      props,
      elementRef,
      () => ({} as SliderThumbMax),
      () => ({} as SliderThumbMin)
    )

    const rectangle = {
      left: 100,
      width: 200,
      top: 0,
      height: 20,
      right: 300,
      bottom: 20
    } as DOMRect

    expect(sliderElement.getMovePercent(100, rectangle, false)).toBe(0)
    expect(sliderElement.getMovePercent(200, rectangle, false)).toBe(50)
    expect(sliderElement.getMovePercent(300, rectangle, false)).toBe(100)
    expect(sliderElement.getMovePercent(200, rectangle)).toBe(50)

    expect(sliderElement.getMovePercent(150, { width: 0 } as DOMRect, false)).toBe(0)
    expect(sliderElement.getMovePercent(150, { width: -10 } as DOMRect, false)).toBe(0)
  })

  it('should invert horizontal move percent in RTL direction', () => {
    const props = { vertical: false } as SliderPropsBasic
    const rtlDiv = document.createElement('div')
    rtlDiv.setAttribute('dir', 'rtl')
    const elementRef = ref<HTMLElement | undefined>(rtlDiv)
    const sliderElement = new SliderElement(
      props,
      elementRef,
      () => ({} as SliderThumbMax),
      () => ({} as SliderThumbMin)
    )

    const rectangle = {
      left: 100,
      width: 200,
      top: 0,
      height: 20,
      right: 300,
      bottom: 20
    } as DOMRect

    expect(sliderElement.isRtl()).toBe(true)
    expect(sliderElement.getMovePercent(300, rectangle, false)).toBe(0)
    expect(sliderElement.getMovePercent(200, rectangle, false)).toBe(50)
    expect(sliderElement.getMovePercent(100, rectangle, false)).toBe(100)
  })

  it('should calculate move percent vertically and handle zero height', () => {
    const props = { vertical: true } as SliderPropsBasic
    const elementRef = ref<HTMLElement | undefined>(undefined)
    const sliderElement = new SliderElement(
      props,
      elementRef,
      () => ({} as SliderThumbMax),
      () => ({} as SliderThumbMin)
    )

    const rectangle = {
      left: 0,
      width: 20,
      top: 100,
      height: 200,
      right: 20,
      bottom: 300
    } as DOMRect

    expect(sliderElement.getMovePercent(300, rectangle, true)).toBe(0)
    expect(sliderElement.getMovePercent(200, rectangle, true)).toBe(50)
    expect(sliderElement.getMovePercent(100, rectangle, true)).toBe(100)
    expect(sliderElement.getMovePercent(200, rectangle)).toBe(50)

    expect(sliderElement.getMovePercent(150, { height: 0 } as DOMRect, true)).toBe(0)
  })

  it('should return max focus type in single mode without accessing thumbs', () => {
    const props = { multiple: false, vertical: false } as SliderPropsBasic
    const elementRef = ref<HTMLElement | undefined>(undefined)
    const maxSpy = vi.fn(() => ({} as SliderThumbMax))
    const minSpy = vi.fn(() => ({} as SliderThumbMin))

    const sliderElement = new SliderElement(props, elementRef, maxSpy, minSpy)

    expect(sliderElement.getTypeByCoordinate(50)).toBe(SliderFocusType.max)
    expect(maxSpy).not.toHaveBeenCalled()
    expect(minSpy).not.toHaveBeenCalled()
  })

  it('should return closest focus type horizontally and vertically in multiple mode', () => {
    const props = { multiple: true, vertical: false } as SliderPropsBasic
    const elementRef = ref<HTMLElement | undefined>(undefined)

    const mockMin = {
      rectangle: { left: 100, width: 20, top: 280, height: 20 } as DOMRect
    } as SliderThumbMin
    const mockMax = {
      rectangle: { left: 300, width: 20, top: 80, height: 20 } as DOMRect
    } as SliderThumbMax

    const sliderElement = new SliderElement(props, elementRef, () => mockMax, () => mockMin)

    expect(sliderElement.getTypeByCoordinate(120, false)).toBe(SliderFocusType.min)
    expect(sliderElement.getTypeByCoordinate(280, false)).toBe(SliderFocusType.max)

    expect(sliderElement.getTypeByCoordinate(270, true)).toBe(SliderFocusType.min)
    expect(sliderElement.getTypeByCoordinate(100, true)).toBe(SliderFocusType.max)
  })

  it('should fallback to max focus type if thumb rectangles are unavailable', () => {
    const props = { multiple: true, vertical: false } as SliderPropsBasic
    const elementRef = ref<HTMLElement | undefined>(undefined)
    const sliderElement = new SliderElement(
      props,
      elementRef,
      () => ({ rectangle: undefined } as SliderThumbMax),
      () => ({ rectangle: undefined } as SliderThumbMin)
    )

    expect(sliderElement.getTypeByCoordinate(100, false)).toBe(SliderFocusType.max)
  })
})

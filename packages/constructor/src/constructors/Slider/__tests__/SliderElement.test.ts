// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { ref } from 'vue'
import { SliderFocusType } from '../basicTypes'
import { SliderElement } from '../SliderElement'
import type { SliderThumbMax } from '../SliderThumbMax'
import type { SliderThumbMin } from '../SliderThumbMin'
import type { SliderPropsBasic } from '../props'

describe('SliderElement', () => {
  it('should return rectangle from element reference', () => {
    const props = { vertical: false } as SliderPropsBasic
    const elementRef = ref<HTMLElement | undefined>(undefined)

    const mockMax = {} as SliderThumbMax
    const mockMin = {} as SliderThumbMin

    const sliderElement = new SliderElement(props, elementRef, mockMax, mockMin)

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

  it('should calculate move percent horizontally', () => {
    const props = { vertical: false } as SliderPropsBasic
    const elementRef = ref<HTMLElement | undefined>(undefined)
    const mockMax = {} as SliderThumbMax
    const mockMin = {} as SliderThumbMin

    const sliderElement = new SliderElement(props, elementRef, mockMax, mockMin)

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

    const emptyRectangle = { width: 0 } as DOMRect
    expect(sliderElement.getMovePercent(150, emptyRectangle, false)).toBe(0)
  })

  it('should calculate move percent vertically', () => {
    const props = { vertical: true } as SliderPropsBasic
    const elementRef = ref<HTMLElement | undefined>(undefined)
    const mockMax = {} as SliderThumbMax
    const mockMin = {} as SliderThumbMin

    const sliderElement = new SliderElement(props, elementRef, mockMax, mockMin)

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

    const emptyRectangle = { height: 0 } as DOMRect
    expect(sliderElement.getMovePercent(150, emptyRectangle, true)).toBe(0)
  })

  it('should return max focus type in single mode', () => {
    const props = { multiple: false, vertical: false } as SliderPropsBasic
    const elementRef = ref<HTMLElement | undefined>(undefined)
    const mockMax = {} as SliderThumbMax
    const mockMin = {} as SliderThumbMin

    const sliderElement = new SliderElement(props, elementRef, mockMax, mockMin)

    expect(sliderElement.getTypeByCoordinate(50)).toBe(SliderFocusType.max)
  })

  it('should return closest focus type (min or max) based on coordinate in multiple mode', () => {
    const props = { multiple: true, vertical: false } as SliderPropsBasic
    const elementRef = ref<HTMLElement | undefined>(undefined)

    const mockMin = {
      rectangle: { left: 100, top: 10 } as DOMRect
    } as SliderThumbMin

    const mockMax = {
      rectangle: { left: 300, top: 10 } as DOMRect
    } as SliderThumbMax

    const sliderElement = new SliderElement(props, elementRef, mockMax, mockMin)

    // Coordinate 120 is closer to min (100) than max (300)
    expect(sliderElement.getTypeByCoordinate(120, false)).toBe(SliderFocusType.min)

    // Coordinate 280 is closer to max (300) than min (100)
    expect(sliderElement.getTypeByCoordinate(280, false)).toBe(SliderFocusType.max)
  })
})

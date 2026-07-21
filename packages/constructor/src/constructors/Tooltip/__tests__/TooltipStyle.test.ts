// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest'
import { ref } from 'vue'
import { TooltipStyle } from '../TooltipStyle'

describe('TooltipStyle', () => {
  let element: HTMLDivElement
  let tooltipStyle: TooltipStyle
  const baseClassName = 'd1-tooltip'

  beforeEach(() => {
    element = document.createElement('div')
    tooltipStyle = new TooltipStyle(ref(element), baseClassName)
  })

  it('should set style properties and class when calling set()', () => {
    tooltipStyle.set(true, 10, 20, 5)

    expect(element.classList.contains(`${baseClassName}--top`)).toBe(true)
    expect(element.style.getPropertyValue(`--${baseClassName}-sys-x`)).toBe('10px')
    expect(element.style.getPropertyValue(`--${baseClassName}-sys-y`)).toBe('20px')
    expect(element.style.getPropertyValue(`--${baseClassName}-sys-shift`)).toBe('5px')

    tooltipStyle.set(false, 30, 40, -5)

    expect(element.classList.contains(`${baseClassName}--top`)).toBe(false)
    expect(element.style.getPropertyValue(`--${baseClassName}-sys-x`)).toBe('30px')
    expect(element.style.getPropertyValue(`--${baseClassName}-sys-y`)).toBe('40px')
    expect(element.style.getPropertyValue(`--${baseClassName}-sys-shift`)).toBe('-5px')
  })

  it('should toggle preparation class via setPreparation()', () => {
    tooltipStyle.setPreparation(true)
    expect(element.classList.contains(`${baseClassName}--preparation`)).toBe(true)

    tooltipStyle.setPreparation(false)
    expect(element.classList.contains(`${baseClassName}--preparation`)).toBe(false)
  })

  it('should toggle show class and turn off move class when hiding via setShow()', () => {
    tooltipStyle.setShow(true)
    expect(element.classList.contains(`${baseClassName}--show`)).toBe(true)

    // Turning on move separately to verify it turns off on setShow(false)
    tooltipStyle.setMove(true)
    expect(element.classList.contains(`${baseClassName}--move`)).toBe(true)

    tooltipStyle.setShow(false)
    expect(element.classList.contains(`${baseClassName}--show`)).toBe(false)
    expect(element.classList.contains(`${baseClassName}--move`)).toBe(false)
  })

  it('should toggle move class via setMove()', () => {
    tooltipStyle.setMove(true)
    expect(element.classList.contains(`${baseClassName}--move`)).toBe(true)

    tooltipStyle.setMove(false)
    expect(element.classList.contains(`${baseClassName}--move`)).toBe(false)
  })

  it('should reset classes and properties via reset()', () => {
    tooltipStyle.set(true, 10, 20, 5)
    tooltipStyle.setPreparation(true)
    tooltipStyle.setShow(true)

    tooltipStyle.reset()

    expect(element.classList.contains(`${baseClassName}--top`)).toBe(false)
    expect(element.classList.contains(`${baseClassName}--preparation`)).toBe(false)
    expect(element.classList.contains(`${baseClassName}--show`)).toBe(false)
    expect(element.style.getPropertyValue(`--${baseClassName}-sys-x`)).toBe('')
    expect(element.style.getPropertyValue(`--${baseClassName}-sys-y`)).toBe('')
    expect(element.style.getPropertyValue(`--${baseClassName}-sys-shift`)).toBe('')
  })

  it('should reset only preparation and show classes via resetShow()', () => {
    tooltipStyle.set(true, 10, 20, 5)
    tooltipStyle.setPreparation(true)
    tooltipStyle.setShow(true)

    tooltipStyle.resetShow()

    // top class and styles should remain
    expect(element.classList.contains(`${baseClassName}--top`)).toBe(true)
    expect(element.style.getPropertyValue(`--${baseClassName}-sys-x`)).toBe('10px')

    // preparation and show classes should be removed
    expect(element.classList.contains(`${baseClassName}--preparation`)).toBe(false)
    expect(element.classList.contains(`${baseClassName}--show`)).toBe(false)
  })
})

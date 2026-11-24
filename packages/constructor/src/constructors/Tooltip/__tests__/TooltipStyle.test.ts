// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest'
import { ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'
import { TooltipStyle } from '../TooltipStyle'

describe('TooltipStyle', () => {
  let element: HTMLDivElement
  let tooltipStyle: TooltipStyle
  const naming = new DesignName('d1.tooltip')

  beforeEach(() => {
    element = document.createElement('div')
    tooltipStyle = new TooltipStyle(ref(element), naming)
  })

  it('should set style properties and top class when calling set()', () => {
    tooltipStyle.set(true, 10, 20, 5)

    expect(element.classList.contains(`${naming.getName()}--top`)).toBe(true)
    expect(element.style.getPropertyValue(`--${naming.getName()}-sys-x`)).toBe('10px')
    expect(element.style.getPropertyValue(`--${naming.getName()}-sys-y`)).toBe('20px')
    expect(element.style.getPropertyValue(`--${naming.getName()}-sys-shift`)).toBe('5px')

    tooltipStyle.set(false, 30, 40, -5)

    expect(element.classList.contains(`${naming.getName()}--top`)).toBe(false)
    expect(element.style.getPropertyValue(`--${naming.getName()}-sys-x`)).toBe('30px')
    expect(element.style.getPropertyValue(`--${naming.getName()}-sys-y`)).toBe('40px')
    expect(element.style.getPropertyValue(`--${naming.getName()}-sys-shift`)).toBe('-5px')
  })

  it('should toggle preparation, show, and move classes correctly', () => {
    tooltipStyle.setPreparation(true)
    expect(element.classList.contains(`${naming.getName()}--preparation`)).toBe(true)

    tooltipStyle.setShow(true)
    expect(element.classList.contains(`${naming.getName()}--show`)).toBe(true)

    tooltipStyle.setMove(true)
    expect(element.classList.contains(`${naming.getName()}--move`)).toBe(true)

    tooltipStyle.setShow(false)
    expect(element.classList.contains(`${naming.getName()}--show`)).toBe(false)
    expect(element.classList.contains(`${naming.getName()}--move`)).toBe(false)

    tooltipStyle.setPreparation(false)
    expect(element.classList.contains(`${naming.getName()}--preparation`)).toBe(false)
  })

  it('should reset all classes including move and CSS variables via reset()', () => {
    tooltipStyle.set(true, 10, 20, 5)
    tooltipStyle.setPreparation(true)
    tooltipStyle.setShow(true)
    tooltipStyle.setMove(true)

    tooltipStyle.reset()

    expect(element.classList.contains(`${naming.getName()}--top`)).toBe(false)
    expect(element.classList.contains(`${naming.getName()}--preparation`)).toBe(false)
    expect(element.classList.contains(`${naming.getName()}--show`)).toBe(false)
    expect(element.classList.contains(`${naming.getName()}--move`)).toBe(false)
    expect(element.style.getPropertyValue(`--${naming.getName()}-sys-x`)).toBe('')
    expect(element.style.getPropertyValue(`--${naming.getName()}-sys-y`)).toBe('')
    expect(element.style.getPropertyValue(`--${naming.getName()}-sys-shift`)).toBe('')
  })

  it('should reset preparation, show, and move classes while keeping top/coordinates via resetShow()', () => {
    tooltipStyle.set(true, 10, 20, 5)
    tooltipStyle.setPreparation(true)
    tooltipStyle.setShow(true)
    tooltipStyle.setMove(true)

    tooltipStyle.resetShow()

    expect(element.classList.contains(`${naming.getName()}--top`)).toBe(true)
    expect(element.style.getPropertyValue(`--${naming.getName()}-sys-x`)).toBe('10px')
    expect(element.classList.contains(`${naming.getName()}--preparation`)).toBe(false)
    expect(element.classList.contains(`${naming.getName()}--show`)).toBe(false)
    expect(element.classList.contains(`${naming.getName()}--move`)).toBe(false)
  })

  it('should safely no-op when element ref is undefined', () => {
    const emptyStyle = new TooltipStyle(ref(undefined), naming)
    expect(() => {
      emptyStyle.set(true, 0, 0, 0)
      emptyStyle.setPreparation(true)
      emptyStyle.setShow(true)
      emptyStyle.setMove(true)
      emptyStyle.resetShow()
      emptyStyle.reset()
    }).not.toThrow()
  })
})

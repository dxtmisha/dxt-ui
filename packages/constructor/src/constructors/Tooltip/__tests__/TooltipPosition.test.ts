// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'
import { TooltipPosition } from '../TooltipPosition'
import { TooltipClassesData } from '../TooltipClassesData'
import { TooltipStyle } from '../TooltipStyle'
import type { TooltipProps } from '../props'

describe('TooltipPosition', () => {
  let tooltipElement: HTMLDivElement
  let controlElement: HTMLDivElement
  let classesData: TooltipClassesData
  let tooltipStyle: TooltipStyle
  let mockProps: Partial<TooltipProps>

  beforeEach(() => {
    tooltipElement = document.createElement('div')
    controlElement = document.createElement('div')

    classesData = new TooltipClassesData(new DesignName('d1.tooltip'))
    tooltipStyle = new TooltipStyle(ref(tooltipElement), new DesignName('d1.tooltip'))

    mockProps = {
      top: false,
      indent: 4
    }

    vi.stubGlobal('innerWidth', 1024)
    vi.stubGlobal('innerHeight', 768)

    vi.spyOn(classesData, 'findControl').mockReturnValue(controlElement)
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  function createPosition(): TooltipPosition {
    return new TooltipPosition(
      mockProps as Readonly<TooltipProps>,
      ref(tooltipElement),
      () => classesData,
      () => tooltipStyle
    )
  }

  it('should position at the bottom when top is false and there is enough room at the bottom', () => {
    vi.spyOn(controlElement, 'getBoundingClientRect').mockReturnValue({
      top: 100,
      bottom: 150,
      left: 200,
      right: 300,
      width: 100,
      height: 50
    } as DOMRect)

    vi.spyOn(tooltipElement, 'getBoundingClientRect').mockReturnValue({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 200,
      height: 80
    } as DOMRect)

    createPosition().update()

    expect(tooltipElement.classList.contains('d1-tooltip--top')).toBe(false)
    expect(tooltipElement.style.getPropertyValue('--d1-tooltip-sys-x')).toBe('150px')
    expect(tooltipElement.style.getPropertyValue('--d1-tooltip-sys-y')).toBe('154px')
    expect(tooltipElement.style.getPropertyValue('--d1-tooltip-sys-shift')).toBe('0px')
  })

  it('should position at the top when top is true and there is enough room at the top', () => {
    mockProps.top = true

    vi.spyOn(controlElement, 'getBoundingClientRect').mockReturnValue({
      top: 100,
      bottom: 150,
      left: 200,
      right: 300,
      width: 100,
      height: 50
    } as DOMRect)

    vi.spyOn(tooltipElement, 'getBoundingClientRect').mockReturnValue({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 200,
      height: 80
    } as DOMRect)

    createPosition().update()

    expect(tooltipElement.classList.contains('d1-tooltip--top')).toBe(true)
    expect(tooltipElement.style.getPropertyValue('--d1-tooltip-sys-x')).toBe('150px')
    expect(tooltipElement.style.getPropertyValue('--d1-tooltip-sys-y')).toBe('16px')
  })

  it('should flip to bottom when top is true but there is insufficient space above', () => {
    mockProps.top = true

    vi.spyOn(controlElement, 'getBoundingClientRect').mockReturnValue({
      top: 20,
      bottom: 70,
      left: 200,
      right: 300,
      width: 100,
      height: 50
    } as DOMRect)

    vi.spyOn(tooltipElement, 'getBoundingClientRect').mockReturnValue({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 200,
      height: 80
    } as DOMRect)

    createPosition().update()

    expect(tooltipElement.classList.contains('d1-tooltip--top')).toBe(false)
    expect(tooltipElement.style.getPropertyValue('--d1-tooltip-sys-y')).toBe('74px')
  })

  it('should flip to the top when top is false but there is not enough room at the bottom', () => {
    vi.spyOn(controlElement, 'getBoundingClientRect').mockReturnValue({
      top: 600,
      bottom: 650,
      left: 200,
      right: 300,
      width: 100,
      height: 50
    } as DOMRect)

    vi.spyOn(tooltipElement, 'getBoundingClientRect').mockReturnValue({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 200,
      height: 120
    } as DOMRect)

    createPosition().update()

    expect(tooltipElement.classList.contains('d1-tooltip--top')).toBe(true)
  })

  it('should handle indent of 0 and undefined safely', () => {
    mockProps.indent = 0

    vi.spyOn(controlElement, 'getBoundingClientRect').mockReturnValue({
      top: 100,
      bottom: 150,
      left: 200,
      right: 300,
      width: 100,
      height: 50
    } as DOMRect)

    vi.spyOn(tooltipElement, 'getBoundingClientRect').mockReturnValue({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 200,
      height: 80
    } as DOMRect)

    createPosition().update()
    expect(tooltipElement.style.getPropertyValue('--d1-tooltip-sys-y')).toBe('150px')
  })

  it('should shift right when x is less than 0', () => {
    vi.spyOn(controlElement, 'getBoundingClientRect').mockReturnValue({
      top: 100,
      bottom: 150,
      left: 40,
      right: 140,
      width: 100,
      height: 50
    } as DOMRect)

    vi.spyOn(tooltipElement, 'getBoundingClientRect').mockReturnValue({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 200,
      height: 80
    } as DOMRect)

    createPosition().update()

    expect(tooltipElement.style.getPropertyValue('--d1-tooltip-sys-shift')).toBe('10px')
  })

  it('should shift left when x + width is greater than window.innerWidth', () => {
    vi.spyOn(controlElement, 'getBoundingClientRect').mockReturnValue({
      top: 100,
      bottom: 150,
      left: 900,
      right: 1000,
      width: 100,
      height: 50
    } as DOMRect)

    vi.spyOn(tooltipElement, 'getBoundingClientRect').mockReturnValue({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 200,
      height: 80
    } as DOMRect)

    createPosition().update()

    expect(tooltipElement.style.getPropertyValue('--d1-tooltip-sys-shift')).toBe('-26px')
  })

  it('should no-op when element or control is missing', () => {
    const setSpy = vi.spyOn(tooltipStyle, 'set')
    vi.spyOn(classesData, 'findControl').mockReturnValue(undefined)

    createPosition().update()
    expect(setSpy).not.toHaveBeenCalled()
  })
})

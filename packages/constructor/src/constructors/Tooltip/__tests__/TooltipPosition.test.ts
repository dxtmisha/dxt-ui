// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { ref } from 'vue'
import { TooltipPosition } from '../TooltipPosition'
import { TooltipClassesData } from '../TooltipClassesData'
import { TooltipStyle } from '../TooltipStyle'
import type { TooltipProps } from '../props'

describe('TooltipPosition', () => {
  let textareaElement: HTMLDivElement
  let controlElement: HTMLDivElement
  let classesData: TooltipClassesData
  let tooltipStyle: TooltipStyle
  let mockProps: Partial<TooltipProps>

  beforeEach(() => {
    textareaElement = document.createElement('div')
    controlElement = document.createElement('div')

    classesData = new TooltipClassesData('d1-tooltip')
    tooltipStyle = new TooltipStyle(ref(textareaElement), 'd1-tooltip')

    mockProps = {
      top: false,
      indent: 4
    }

    vi.stubGlobal('innerWidth', 1024)
    vi.stubGlobal('innerHeight', 768)

    // Mock querySelector for findControl
    vi.spyOn(classesData, 'findControl').mockReturnValue(controlElement)
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  it('should position at the bottom when top is false and there is enough room at the bottom', () => {
    // Mock getBoundingClientRect
    vi.spyOn(controlElement, 'getBoundingClientRect').mockReturnValue({
      top: 100,
      bottom: 150,
      left: 200,
      right: 300,
      width: 100,
      height: 50
    } as DOMRect)

    vi.spyOn(textareaElement, 'getBoundingClientRect').mockReturnValue({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 200,
      height: 80
    } as DOMRect)

    const tooltipPosition = new TooltipPosition(
      mockProps as TooltipProps,
      ref(textareaElement),
      classesData,
      tooltipStyle
    )

    tooltipPosition.update()

    // top is false, so it should be at bottom
    // x = left + width/2 - tooltipWidth/2 = 200 + 50 - 100 = 150
    // y = bottom + indent = 150 + 4 = 154
    // shift = 0
    expect(textareaElement.classList.contains('d1-tooltip--top')).toBe(false)
    expect(textareaElement.style.getPropertyValue('--d1-tooltip-sys-x')).toBe('150px')
    expect(textareaElement.style.getPropertyValue('--d1-tooltip-sys-y')).toBe('154px')
    expect(textareaElement.style.getPropertyValue('--d1-tooltip-sys-shift')).toBe('0px')
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

    vi.spyOn(textareaElement, 'getBoundingClientRect').mockReturnValue({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 200,
      height: 80
    } as DOMRect)

    const tooltipPosition = new TooltipPosition(
      mockProps as TooltipProps,
      ref(textareaElement),
      classesData,
      tooltipStyle
    )

    tooltipPosition.update()

    // top is true and rect.top - height - indent = 100 - 80 - 4 = 16 >= 0
    // x = 150
    // y = top - height - indent = 100 - 80 - 4 = 16
    expect(textareaElement.classList.contains('d1-tooltip--top')).toBe(true)
    expect(textareaElement.style.getPropertyValue('--d1-tooltip-sys-x')).toBe('150px')
    expect(textareaElement.style.getPropertyValue('--d1-tooltip-sys-y')).toBe('16px')
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

    vi.spyOn(textareaElement, 'getBoundingClientRect').mockReturnValue({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 200,
      height: 120
    } as DOMRect)

    const tooltipPosition = new TooltipPosition(
      mockProps as TooltipProps,
      ref(textareaElement),
      classesData,
      tooltipStyle
    )

    tooltipPosition.update()

    // bottom room needed = bottom + height + indent = 650 + 120 + 4 = 774 > window.innerHeight (768)
    // so it should flip to top
    expect(textareaElement.classList.contains('d1-tooltip--top')).toBe(true)
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

    vi.spyOn(textareaElement, 'getBoundingClientRect').mockReturnValue({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 200,
      height: 80
    } as DOMRect)

    const tooltipPosition = new TooltipPosition(
      mockProps as TooltipProps,
      ref(textareaElement),
      classesData,
      tooltipStyle
    )

    tooltipPosition.update()

    // x = left + width/2 - tooltipWidth/2 = 40 + 50 - 100 = -10
    // shift = 0 - (-10) = 10
    expect(textareaElement.style.getPropertyValue('--d1-tooltip-sys-shift')).toBe('10px')
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

    vi.spyOn(textareaElement, 'getBoundingClientRect').mockReturnValue({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 200,
      height: 80
    } as DOMRect)

    const tooltipPosition = new TooltipPosition(
      mockProps as TooltipProps,
      ref(textareaElement),
      classesData,
      tooltipStyle
    )

    tooltipPosition.update()

    // x = left + width/2 - tooltipWidth/2 = 900 + 50 - 100 = 850
    // x + width = 850 + 200 = 1050 > innerWidth (1024)
    // shift = innerWidth - (x + width) = 1024 - 1050 = -26
    expect(textareaElement.style.getPropertyValue('--d1-tooltip-sys-shift')).toBe('-26px')
  })
})

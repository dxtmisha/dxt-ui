// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { TooltipInclude } from '../TooltipInclude'
import type { TooltipPropsInclude } from '../basicTypes'

describe('TooltipInclude', () => {
  let mockTooltipElement: { toggle: any }
  let mockProps: Partial<TooltipPropsInclude>
  let mockExtra: any
  let tooltipInclude: TooltipInclude

  beforeEach(() => {
    mockTooltipElement = {
      toggle: vi.fn()
    }
    mockProps = {
      tooltipLabel: 'prop label',
      tooltipDescription: 'prop description'
    }
    mockExtra = {
      label: 'extra label',
      description: 'extra description'
    }

    tooltipInclude = new TooltipInclude(
      'd1-button',
      () => mockProps as TooltipPropsInclude,
      undefined, // design components
      () => mockExtra // extra properties
    )

    // Manually set the protected ref value for testing
    ;(tooltipInclude as any).element.value = mockTooltipElement
  })

  it('should call toggle(true) on open()', () => {
    tooltipInclude.open()
    expect(mockTooltipElement.toggle).toHaveBeenCalledWith(true)
  })

  it('should call toggle(false) on close()', () => {
    tooltipInclude.close()
    expect(mockTooltipElement.toggle).toHaveBeenCalledWith(false)
  })

  it('should delegate toggle(open) to element toggle', () => {
    tooltipInclude.toggle(true)
    expect(mockTooltipElement.toggle).toHaveBeenCalledWith(true)

    tooltipInclude.toggle(false)
    expect(mockTooltipElement.toggle).toHaveBeenCalledWith(false)
  })

  it('should retrieve label and description from props if available', () => {
    const bindings = tooltipInclude.binds.value

    expect(bindings.label).toBe('prop label')
    expect(bindings.description).toBe('prop description')
  })

  it('should fallback to extra properties if props label or description is missing', () => {
    mockProps.tooltipLabel = undefined
    mockProps.tooltipDescription = undefined

    const bindings = tooltipInclude.binds.value

    expect(bindings.label).toBe('extra label')
    expect(bindings.description).toBe('extra description')
  })
})

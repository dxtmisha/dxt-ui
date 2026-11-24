// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { DesignComponents, DesignName } from '@dxtmisha/functional'
import { TooltipInclude } from '../TooltipInclude'
import type { TooltipComponentInclude, TooltipPropsInclude } from '../basicTypes'
import type { TooltipProps } from '../props'

describe('TooltipInclude', () => {
  let mockTooltipElement: { toggle: ReturnType<typeof vi.fn> }
  let mockProps: Partial<TooltipPropsInclude>
  let mockExtra: Partial<TooltipProps>
  let mockRender: ReturnType<typeof vi.fn>
  let components: DesignComponents<TooltipComponentInclude, TooltipPropsInclude>
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
    components = new DesignComponents({ tooltip: {} })
    mockRender = vi.spyOn(components, 'render').mockReturnValue([])

    tooltipInclude = new TooltipInclude(
      () => mockProps as TooltipPropsInclude,
      new DesignName('d1.button'),
      components,
      undefined,
      () => mockExtra
    )

    ;(tooltipInclude as unknown as { element: { value: unknown } }).element.value = mockTooltipElement
  })

  it('should evaluate static is() across props, slots, and extra', () => {
    expect(TooltipInclude.is()).toBe(false)
    expect(TooltipInclude.is({ tooltipLabel: 'Tip' })).toBe(true)
    expect(TooltipInclude.is({ tooltipDescription: 'Desc' })).toBe(true)
    expect(TooltipInclude.is({}, { tooltip: () => [] })).toBe(true)
    expect(TooltipInclude.is({}, undefined, { label: 'Extra' })).toBe(true)
    expect(TooltipInclude.is({}, undefined, { description: 'Extra desc' })).toBe(true)
  })

  it('should delegate open(), close(), and toggle(open, flash)', () => {
    tooltipInclude.open()
    expect(mockTooltipElement.toggle).toHaveBeenCalledWith(true, undefined)

    tooltipInclude.close()
    expect(mockTooltipElement.toggle).toHaveBeenCalledWith(false, undefined)

    tooltipInclude.toggle(true, true)
    expect(mockTooltipElement.toggle).toHaveBeenCalledWith(true, true)
  })

  it('should retrieve label and description from props with fallback to extra', () => {
    expect(tooltipInclude.binds.value.label).toBe('prop label')
    expect(tooltipInclude.binds.value.description).toBe('prop description')

    mockProps.tooltipLabel = undefined
    mockProps.tooltipDescription = undefined

    const fallbackInclude = new TooltipInclude(
      () => mockProps as TooltipPropsInclude,
      new DesignName('d1.button'),
      components,
      undefined,
      () => mockExtra
    )

    expect(fallbackInclude.binds.value.label).toBe('extra label')
    expect(fallbackInclude.binds.value.description).toBe('extra description')
  })

  it('should not inject undefined body key into rendered slots when tooltip slot is absent', () => {
    const controlSlot = () => []
    tooltipInclude.render({ control: controlSlot })

    expect(mockRender).toHaveBeenCalledTimes(1)
    const passedSlots = mockRender.mock.calls[0]?.[2] as Record<string, unknown>
    expect(passedSlots.control).toBe(controlSlot)
    expect('body' in passedSlots).toBe(false)
  })

  it('should map parent tooltip slot to body slot when present', () => {
    const tooltipSlot = () => []
    const withSlot = new TooltipInclude(
      () => ({}),
      new DesignName('d1.button'),
      components,
      { tooltip: tooltipSlot }
    )

    expect(withSlot.is).toBe(true)
    withSlot.render({ control: () => [] })

    const passedSlots = mockRender.mock.calls[0]?.[2] as Record<string, unknown>
    expect(passedSlots.body).toBe(tooltipSlot)
  })
})

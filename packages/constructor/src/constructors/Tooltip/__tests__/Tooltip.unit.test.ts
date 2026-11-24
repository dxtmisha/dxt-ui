// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { effectScope, reactive, ref, type EffectScope } from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { Tooltip } from '../Tooltip'
import type { TooltipProps } from '../props'
import type { TooltipComponents, TooltipSlots } from '../types'

describe('Tooltip (unit)', () => {
  let scope: EffectScope

  beforeEach(() => {
    scope = effectScope()
  })

  afterEach(() => {
    scope.stop()
  })

  function createTooltip(
    initialProps: Partial<TooltipProps> = {},
    slots?: TooltipSlots
  ): { tooltip: Tooltip, props: TooltipProps } {
    const props = reactive<TooltipProps>({
      interactive: true,
      ...initialProps
    })
    const element = ref<HTMLDivElement | undefined>()
    const naming = new DesignName('d1.tooltip')
    const components = new DesignComponents<TooltipComponents, TooltipProps>({
      arrow: {}
    })

    let tooltip!: Tooltip
    scope.run(() => {
      tooltip = new Tooltip(props, element, naming, components, slots)
    })

    return { tooltip, props }
  }

  it('should keep all subordinate helpers lazily uninstantiated upon construction', () => {
    const { tooltip } = createTooltip({ label: 'Hint' })

    expect(tooltip.hasInstance('arrow')).toBe(false)
    expect(tooltip.hasInstance('classesData')).toBe(false)
    expect(tooltip.hasInstance('description')).toBe(false)
    expect(tooltip.hasInstance('event')).toBe(false)
    expect(tooltip.hasInstance('label')).toBe(false)
    expect(tooltip.hasInstance('open')).toBe(false)
    expect(tooltip.hasInstance('position')).toBe(false)
    expect(tooltip.hasInstance('status')).toBe(false)
    expect(tooltip.hasInstance('style')).toBe(false)
    expect(tooltip.hasInstance('teleport')).toBe(false)
  })

  it('should resolve role as region when interactive and tooltip when non-interactive', () => {
    const { tooltip, props } = createTooltip({ interactive: true })
    expect(tooltip.role).toBe('region')

    props.interactive = false
    expect(tooltip.role).toBe('tooltip')
  })

  it('should compute aria attributes without instantiating absent label/description helpers', () => {
    const { tooltip } = createTooltip({ interactive: false })

    expect(tooltip.aria).toEqual({ role: 'tooltip' })
    expect(tooltip.hasInstance('label')).toBe(false)
    expect(tooltip.hasInstance('description')).toBe(false)
  })

  it('should include aria-labelledby and aria-describedby when label and description are provided', () => {
    const { tooltip } = createTooltip({
      label: 'Title',
      description: 'Details',
      labelId: 'custom-label-id',
      descriptionId: 'custom-desc-id'
    })

    expect(tooltip.aria).toEqual({
      'role': 'region',
      'aria-labelledby': 'custom-label-id',
      'aria-describedby': 'custom-desc-id'
    })
    expect(tooltip.hasInstance('label')).toBe(true)
    expect(tooltip.hasInstance('description')).toBe(true)
  })

  it('should compute bindsControl with expanded/controls when interactive and describedby otherwise', () => {
    const { tooltip, props } = createTooltip({ interactive: true })
    const interactiveBinds = tooltip.bindsControl
    const idItem = tooltip.i('classesData').getIdItem()

    expect(interactiveBinds['aria-expanded']).toBe('false')
    expect(interactiveBinds['aria-controls']).toBe(idItem)
    expect(interactiveBinds['aria-describedby']).toBeUndefined()
    expect(tooltip.hasInstance('open')).toBe(false)

    props.interactive = false
    const nonInteractiveBinds = tooltip.bindsControl
    expect(nonInteractiveBinds['aria-describedby']).toBe(idItem)
    expect(nonInteractiveBinds['aria-expanded']).toBeUndefined()
  })

  it('should expose slotData with open ref and binds without creating open/position/style', () => {
    const { tooltip } = createTooltip({ label: 'Hint' })
    const slotData = tooltip.slotData

    expect(slotData.open.value).toBe(false)
    expect(slotData.binds.class).toBe(slotData.class)
    expect(tooltip.hasInstance('open')).toBe(false)
    expect(tooltip.hasInstance('position')).toBe(false)
    expect(tooltip.hasInstance('style')).toBe(false)
  })

  it('should evaluate isShow() and isArrow() lazily', () => {
    const { tooltip } = createTooltip({ label: 'Hint', arrowShow: true })

    expect(tooltip.isShow()).toBe(false)
    expect(tooltip.isArrow()).toBe(false)
    expect(tooltip.hasInstance('arrow')).toBe(false)

    tooltip.i('status').setOpen(true)
    tooltip.i('status').setPreparation(true)

    expect(tooltip.isShow()).toBe(true)
    expect(tooltip.isArrow()).toBe(true)
  })
})

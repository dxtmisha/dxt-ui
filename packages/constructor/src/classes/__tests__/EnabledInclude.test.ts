import { describe, it, expect } from 'vitest'
import { EnabledInclude } from '../EnabledInclude'

describe('EnabledInclude', () => {
  it('should be enabled by default', () => {
    const enabled = new EnabledInclude({})
    expect(enabled.isEnabled).toBe(true)
    expect(enabled.isDisabled).toBe(false)
    expect(enabled.isReadonly).toBe(false)
    expect(enabled.isDisabledOrUndefined).toBeUndefined()
    expect(enabled.aria).toEqual({})
  })

  it('should respect disabled prop', () => {
    const enabled = new EnabledInclude({ disabled: true })
    expect(enabled.isEnabled).toBe(false)
    expect(enabled.isDisabled).toBe(true)
    expect(enabled.isDisabledOrUndefined).toBe(true)
    expect(enabled.aria).toEqual({ 'aria-disabled': 'true' })
  })

  it('should respect readonly prop', () => {
    const enabled = new EnabledInclude({ readonly: true })
    expect(enabled.isEnabled).toBe(false)
    expect(enabled.isReadonly).toBe(true)
    expect(enabled.aria).toEqual({ 'aria-disabled': 'true' })
  })

  it('should respect progress state', () => {
    const mockProgressActive = { is: true } as any
    const enabledActive = new EnabledInclude({}, mockProgressActive)
    expect(enabledActive.isEnabled).toBe(false)

    const mockProgressInactive = { is: false } as any
    const enabledInactive = new EnabledInclude({}, mockProgressInactive)
    expect(enabledInactive.isEnabled).toBe(true)
  })

  it('should respect dynamic prop if present', () => {
    const enabledDynamicTrue = new EnabledInclude({ dynamic: true } as any)
    expect(enabledDynamicTrue.isEnabled).toBe(true)

    const enabledDynamicFalse = new EnabledInclude({ dynamic: false } as any)
    expect(enabledDynamicFalse.isEnabled).toBe(false)
  })
})

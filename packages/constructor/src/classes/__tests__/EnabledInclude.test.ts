import { describe, it, expect, vi } from 'vitest'
import { reactive } from 'vue'

import { EnabledInclude } from '../EnabledInclude'
import type { ProgressInclude } from '../../constructors/Progress'

describe('EnabledInclude', () => {
  describe('Default and basic states', () => {
    it('should be enabled by default when props are empty', () => {
      const enabled = new EnabledInclude({})

      expect(enabled.isEnabled).toBe(true)
      expect(enabled.isDisabled).toBe(false)
      expect(enabled.isReadonly).toBe(false)
      expect(enabled.isDisabledOrUndefined).toBeUndefined()
      expect(enabled.aria).toEqual({})
    })

    it('should disable element and set aria-disabled when disabled is true', () => {
      const enabled = new EnabledInclude({ disabled: true })

      expect(enabled.isEnabled).toBe(false)
      expect(enabled.isDisabled).toBe(true)
      expect(enabled.isReadonly).toBe(false)
      expect(enabled.isDisabledOrUndefined).toBe(true)
      expect(enabled.aria).toEqual({ 'aria-disabled': 'true' })
    })

    it('should mark element as not enabled and set aria-disabled when readonly is true', () => {
      const enabled = new EnabledInclude({ readonly: true })

      expect(enabled.isEnabled).toBe(false)
      expect(enabled.isDisabled).toBe(false)
      expect(enabled.isReadonly).toBe(true)
      expect(enabled.isDisabledOrUndefined).toBeUndefined()
      expect(enabled.aria).toEqual({ 'aria-disabled': 'true' })
    })
  })

  describe('Progress state integration (lazy getter)', () => {
    it('should respect progress.is state via lazy getter callback', () => {
      const activeProgress = { is: true } as Pick<ProgressInclude, 'is'> as ProgressInclude
      const enabledWithActiveProgress = new EnabledInclude({}, () => activeProgress)

      expect(enabledWithActiveProgress.isEnabled).toBe(false)
      expect(enabledWithActiveProgress.isDisabled).toBe(false)
      expect(enabledWithActiveProgress.aria).toEqual({ 'aria-disabled': 'true' })

      const inactiveProgress = { is: false } as Pick<ProgressInclude, 'is'> as ProgressInclude
      const enabledWithInactiveProgress = new EnabledInclude({}, () => inactiveProgress)

      expect(enabledWithInactiveProgress.isEnabled).toBe(true)
      expect(enabledWithInactiveProgress.aria).toEqual({})
    })

    it('should not invoke progress getter when disabled or readonly is already true', () => {
      const progressGetter = vi.fn(() => undefined)
      const disabledEnabled = new EnabledInclude({ disabled: true }, progressGetter)
      const readonlyEnabled = new EnabledInclude({ readonly: true }, progressGetter)

      expect(disabledEnabled.isEnabled).toBe(false)
      expect(readonlyEnabled.isEnabled).toBe(false)
      expect(progressGetter).not.toHaveBeenCalled()
    })
  })

  describe('Dynamic prop handling', () => {
    it('should require dynamic to be truthy when the dynamic key is present in props', () => {
      const enabledDynamicTrue = new EnabledInclude({ dynamic: true })
      expect(enabledDynamicTrue.isEnabled).toBe(true)
      expect(enabledDynamicTrue.aria).toEqual({})

      const enabledDynamicFalse = new EnabledInclude({ dynamic: false })
      expect(enabledDynamicFalse.isEnabled).toBe(false)
      expect(enabledDynamicFalse.isDisabled).toBe(false)
      expect(enabledDynamicFalse.aria).toEqual({ 'aria-disabled': 'true' })
    })

    it('should remain disabled when dynamic is true but disabled or readonly is also true', () => {
      const disabledDynamic = new EnabledInclude({ dynamic: true, disabled: true })
      expect(disabledDynamic.isEnabled).toBe(false)
      expect(disabledDynamic.isDisabled).toBe(true)

      const readonlyDynamic = new EnabledInclude({ dynamic: true, readonly: true })
      expect(readonlyDynamic.isEnabled).toBe(false)
      expect(readonlyDynamic.isReadonly).toBe(true)
    })
  })

  describe('Vue reactivity integration', () => {
    it('should reactively update getters when reactive props mutate', () => {
      const props = reactive({
        disabled: false,
        readonly: false,
        dynamic: true
      })
      const enabled = new EnabledInclude(props)

      expect(enabled.isEnabled).toBe(true)
      expect(enabled.aria).toEqual({})

      props.disabled = true
      expect(enabled.isEnabled).toBe(false)
      expect(enabled.isDisabled).toBe(true)
      expect(enabled.isDisabledOrUndefined).toBe(true)
      expect(enabled.aria).toEqual({ 'aria-disabled': 'true' })

      props.disabled = false
      props.readonly = true
      expect(enabled.isEnabled).toBe(false)
      expect(enabled.isReadonly).toBe(true)
      expect(enabled.isDisabledOrUndefined).toBeUndefined()

      props.readonly = false
      props.dynamic = false
      expect(enabled.isEnabled).toBe(false)
    })
  })
})

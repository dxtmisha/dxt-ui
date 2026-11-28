import { afterEach, describe, expect, expectTypeOf, it, vi } from 'vitest'
import { reactive, ref } from 'vue'

import { EnabledInclude } from '../EnabledInclude'
import type { AriaList } from '../../types/ariaTypes'
import type { ProgressInclude } from '../../constructors/Progress'

describe('EnabledInclude', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path & Type contracts)', () => {
    it('should be enabled by default when props are empty and match exact getter types', () => {
      const enabled = new EnabledInclude({})

      expect(enabled.isEnabled).toBe(true)
      expect(enabled.isDynamic).toBe(true)
      expect(enabled.isDisabled).toBe(false)
      expect(enabled.isReadonly).toBe(false)
      expect(enabled.isDisabledOrUndefined).toBeUndefined()
      expect(enabled.aria).toEqual({})

      expectTypeOf(enabled.isEnabled).toEqualTypeOf<boolean>()
      expectTypeOf(enabled.isDynamic).toEqualTypeOf<boolean>()
      expectTypeOf(enabled.isDisabled).toEqualTypeOf<boolean>()
      expectTypeOf(enabled.isReadonly).toEqualTypeOf<boolean>()
      expectTypeOf(enabled.isDisabledOrUndefined).toEqualTypeOf<boolean | undefined>()
      expectTypeOf(enabled.aria).toEqualTypeOf<AriaList>()
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
    it('should respect progress.is state and undefined progress return via lazy getter callback', () => {
      const activeProgress = { is: true } as Pick<ProgressInclude, 'is'> as ProgressInclude
      const enabledWithActiveProgress = new EnabledInclude({}, () => activeProgress)

      expect(enabledWithActiveProgress.isEnabled).toBe(false)
      expect(enabledWithActiveProgress.isDisabled).toBe(false)
      expect(enabledWithActiveProgress.isReadonly).toBe(false)
      expect(enabledWithActiveProgress.isDynamic).toBe(true)
      expect(enabledWithActiveProgress.isDisabledOrUndefined).toBeUndefined()
      expect(enabledWithActiveProgress.aria).toEqual({ 'aria-disabled': 'true' })

      const inactiveProgress = { is: false } as Pick<ProgressInclude, 'is'> as ProgressInclude
      const enabledWithInactiveProgress = new EnabledInclude({}, () => inactiveProgress)

      expect(enabledWithInactiveProgress.isEnabled).toBe(true)
      expect(enabledWithInactiveProgress.aria).toEqual({})

      const enabledWithUndefinedProgress = new EnabledInclude({}, () => undefined)
      expect(enabledWithUndefinedProgress.isEnabled).toBe(true)
      expect(enabledWithUndefinedProgress.aria).toEqual({})
    })

    it('should not invoke progress getter when disabled or readonly is already true', () => {
      const progressGetter = vi.fn(() => undefined)
      const disabledEnabled = new EnabledInclude({ disabled: true }, progressGetter)
      const readonlyEnabled = new EnabledInclude({ readonly: true }, progressGetter)

      expect(disabledEnabled.isEnabled).toBe(false)
      expect(readonlyEnabled.isEnabled).toBe(false)
      expect(progressGetter).not.toHaveBeenCalled()
    })

    it('should short-circuit progress check when progress is inactive and dynamic is false', () => {
      const progressState = reactive({ is: false })
      const progress = progressState as Pick<ProgressInclude, 'is'> as ProgressInclude
      const enabled = new EnabledInclude({ dynamic: false }, () => progress)

      expect(enabled.isEnabled).toBe(false)

      progressState.is = true
      expect(enabled.isEnabled).toBe(false)
    })
  })

  describe('Boundary values and dynamic prop handling', () => {
    it('should evaluate isDynamic based on dynamic key presence and truthiness', () => {
      const omittedDynamic = new EnabledInclude({})
      expect(omittedDynamic.isDynamic).toBe(true)
      expect(omittedDynamic.isEnabled).toBe(true)

      const undefinedDynamic = new EnabledInclude({ dynamic: undefined })
      expect(undefinedDynamic.isDynamic).toBe(false)
      expect(undefinedDynamic.isEnabled).toBe(false)
      expect(undefinedDynamic.aria).toEqual({ 'aria-disabled': 'true' })

      const enabledDynamicTrue = new EnabledInclude({ dynamic: true })
      expect(enabledDynamicTrue.isDynamic).toBe(true)
      expect(enabledDynamicTrue.isEnabled).toBe(true)
      expect(enabledDynamicTrue.aria).toEqual({})

      const enabledDynamicFalse = new EnabledInclude({ dynamic: false })
      expect(enabledDynamicFalse.isDynamic).toBe(false)
      expect(enabledDynamicFalse.isEnabled).toBe(false)
      expect(enabledDynamicFalse.isDisabled).toBe(false)
      expect(enabledDynamicFalse.isDisabledOrUndefined).toBeUndefined()
      expect(enabledDynamicFalse.aria).toEqual({ 'aria-disabled': 'true' })
    })

    it('should remain disabled when dynamic is true but disabled, readonly, or progress is active', () => {
      const disabledDynamic = new EnabledInclude({ dynamic: true, disabled: true })
      expect(disabledDynamic.isDynamic).toBe(true)
      expect(disabledDynamic.isEnabled).toBe(false)
      expect(disabledDynamic.isDisabled).toBe(true)

      const readonlyDynamic = new EnabledInclude({ dynamic: true, readonly: true })
      expect(readonlyDynamic.isDynamic).toBe(true)
      expect(readonlyDynamic.isEnabled).toBe(false)
      expect(readonlyDynamic.isReadonly).toBe(true)

      const progressDynamic = new EnabledInclude(
        { dynamic: true },
        () => ({ is: true }) as Pick<ProgressInclude, 'is'> as ProgressInclude
      )
      expect(progressDynamic.isDynamic).toBe(true)
      expect(progressDynamic.isEnabled).toBe(false)
    })
  })

  describe('Reactivity, instance isolation, and SSR safety', () => {
    it('should reactively update getters when reactive props and progress state mutate', () => {
      const props = reactive({
        disabled: false,
        readonly: false,
        dynamic: true
      })
      const progressVisible = ref(false)
      const progressMock = {
        get is(): boolean {
          return progressVisible.value
        }
      } as Pick<ProgressInclude, 'is'> as ProgressInclude

      const enabled = new EnabledInclude(props, () => progressMock)

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
      progressVisible.value = true
      expect(enabled.isEnabled).toBe(false)
      expect(enabled.aria).toEqual({ 'aria-disabled': 'true' })

      progressVisible.value = false
      expect(enabled.isEnabled).toBe(true)

      props.dynamic = false
      expect(enabled.isDynamic).toBe(false)
      expect(enabled.isEnabled).toBe(false)
    })

    it('should isolate state across multiple instances and run cleanly without DOM globals', () => {
      expect(typeof window).toBe('undefined')
      expect(typeof document).toBe('undefined')

      const firstProps = reactive({ disabled: true })
      const secondProps = reactive({ disabled: false })

      const first = new EnabledInclude(firstProps)
      const second = new EnabledInclude(secondProps)

      expect(first.isEnabled).toBe(false)
      expect(second.isEnabled).toBe(true)

      firstProps.disabled = false
      expect(first.isEnabled).toBe(true)
      expect(second.isEnabled).toBe(true)
    })
  })
})

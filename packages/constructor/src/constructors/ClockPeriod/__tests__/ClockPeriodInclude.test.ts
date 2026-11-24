// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { reactive, ref, type VNode } from 'vue'
import { type DesignComponents, DesignName } from '@dxtmisha/functional'

import { ClockPeriodInclude } from '../ClockPeriodInclude'
import { ClockPeriodType, type ClockPeriodPropsInclude } from '../basicTypes'

describe('ClockPeriodInclude (isolated class)', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Bindings and disabled prop forwarding', () => {
    it('should resolve BEM class, omit ref (hasInitElement = false), and forward clockPeriodAttrs', () => {
      const props = reactive<ClockPeriodPropsInclude>({
        clockPeriodAttrs: {
          value: ClockPeriodType.pm,
          textAm: 'AM',
          textPm: 'PM'
        }
      })
      const naming = new DesignName('d1.timePicker')
      const include = new ClockPeriodInclude(props, naming)

      expect(include.is).toBe(true)
      expect(include.binds.value).toEqual({
        class: 'd1-timePicker__clockPeriod',
        value: ClockPeriodType.pm,
        textAm: 'AM',
        textPm: 'PM'
      })
      expect(include.binds.value.ref).toBeUndefined()
    })

    it('should forward parent disabled prop unless explicitly overridden in clockPeriodAttrs or extra', () => {
      const props = reactive<ClockPeriodPropsInclude>({
        disabled: true
      })
      const naming = new DesignName('d1.timePicker')
      const include = new ClockPeriodInclude(props, naming)

      expect(include.binds.value).toEqual({
        class: 'd1-timePicker__clockPeriod',
        disabled: true
      })

      props.clockPeriodAttrs = { disabled: false }
      expect(include.binds.value.disabled).toBe(false)

      const extraOverride = new ClockPeriodInclude(
        { disabled: true },
        naming,
        undefined,
        () => ({ disabled: false })
      )
      expect(extraOverride.binds.value.disabled).toBe(false)

      const falseParent = new ClockPeriodInclude({ disabled: false }, naming)
      expect(falseParent.binds.value.disabled).toBe(false)
    })

    it('should support reactive getter functions for props and extra', () => {
      const period = ref<ClockPeriodType>(ClockPeriodType.am)
      const isDisabled = ref(false)
      const naming = new DesignName('d1.timePicker')

      const include = new ClockPeriodInclude(
        () => ({ disabled: isDisabled.value }),
        naming,
        undefined,
        () => ({ value: period.value })
      )

      expect(include.binds.value).toEqual({
        class: 'd1-timePicker__clockPeriod',
        disabled: false,
        value: ClockPeriodType.am
      })

      period.value = ClockPeriodType.pm
      isDisabled.value = true

      expect(include.binds.value).toEqual({
        class: 'd1-timePicker__clockPeriod',
        disabled: true,
        value: ClockPeriodType.pm
      })
    })
  })

  describe('Rendering delegation and edge cases', () => {
    it('should delegate render to DesignComponents with merged attrs and index', () => {
      const mockedVNode = { type: 'div' } as unknown as VNode
      const renderMock = vi.fn().mockReturnValue([mockedVNode])
      const componentsMock = {
        render: renderMock
      } as unknown as DesignComponents<Record<string, object>, ClockPeriodPropsInclude>

      const naming = new DesignName('d1.timePicker')
      const include = new ClockPeriodInclude(
        { disabled: true, clockPeriodAttrs: { textAm: 'Утро' } },
        naming,
        componentsMock,
        undefined,
        'period-key'
      )

      const result = include.render(undefined, { textPm: 'Вечер' })

      expect(result).toEqual([mockedVNode])
      expect(renderMock).toHaveBeenCalledWith(
        'clockPeriod',
        expect.objectContaining({
          class: 'd1-timePicker__clockPeriod',
          disabled: true,
          textAm: 'Утро',
          textPm: 'Вечер'
        }),
        undefined,
        'period-key'
      )
    })

    it('should return empty array when components are missing or isShow returns false', () => {
      const renderMock = vi.fn().mockReturnValue([])
      const componentsMock = {
        render: renderMock
      } as unknown as DesignComponents<Record<string, object>, ClockPeriodPropsInclude>
      const naming = new DesignName('d1.timePicker')

      const withoutComponents = new ClockPeriodInclude(undefined, naming)
      expect(withoutComponents.binds.value).toEqual({ class: 'd1-timePicker__clockPeriod' })
      expect(withoutComponents.render()).toEqual([])

      const hidden = new ClockPeriodInclude({}, naming, componentsMock)
      expect(hidden.render(undefined, undefined, () => false)).toEqual([])
      expect(renderMock).not.toHaveBeenCalled()
    })
  })
})

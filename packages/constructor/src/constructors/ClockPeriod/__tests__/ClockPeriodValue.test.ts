// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { nextTick, reactive } from 'vue'
import { ModelInclude } from '../../../classes/ModelInclude'
import { ClockPeriodValue } from '../ClockPeriodValue'
import { ClockPeriodType } from '../basicTypes'
import type { ClockPeriodProps } from '../props'

describe('ClockPeriodValue', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should initialize from props.value and props.modelValue with modelValue precedence', () => {
      const fromValue = new ClockPeriodValue({ value: ClockPeriodType.pm })
      expect(fromValue.get()).toBe(ClockPeriodType.pm)
      expect(fromValue.value.value).toBe(ClockPeriodType.pm)
      expect(fromValue.isPm()).toBe(true)
      expect(fromValue.isAm()).toBe(false)
      expect(fromValue.isSelected(ClockPeriodType.pm)).toBe(true)
      expect(fromValue.isSelected(ClockPeriodType.am)).toBe(false)

      const fromModel = new ClockPeriodValue({
        value: ClockPeriodType.am,
        modelValue: ClockPeriodType.pm
      })
      expect(fromModel.get()).toBe(ClockPeriodType.pm)
    })

    it('should default to am when value and modelValue are not provided', () => {
      const periodValue = new ClockPeriodValue({})

      expect(periodValue.get()).toBe(ClockPeriodType.am)
      expect(periodValue.isAm()).toBe(true)
      expect(periodValue.isPm()).toBe(false)
    })

    it('should set am, pm, toggle, and reset via set(undefined)', () => {
      const emits = vi.fn()
      const model = new ModelInclude<ClockPeriodType>('value', emits)
      const periodValue = new ClockPeriodValue({ value: ClockPeriodType.am }, () => model)

      periodValue.setPm()
      expect(periodValue.get()).toBe(ClockPeriodType.pm)
      expect(emits).toHaveBeenCalledWith('update:value', ClockPeriodType.pm)
      expect(emits).toHaveBeenCalledWith('update:modelValue', ClockPeriodType.pm)

      emits.mockClear()
      periodValue.setPm()
      expect(emits).not.toHaveBeenCalled()

      periodValue.toggle()
      expect(periodValue.get()).toBe(ClockPeriodType.am)
      expect(emits).toHaveBeenCalledWith('update:value', ClockPeriodType.am)

      periodValue.set(ClockPeriodType.pm)
      periodValue.set(undefined)
      expect(periodValue.get()).toBe(ClockPeriodType.am)

      periodValue.setAm()
      expect(periodValue.isAm()).toBe(true)
    })

    it('should set period value by hour including boundary hours 0, 11, 12, and 23', () => {
      const periodValue = new ClockPeriodValue({})

      periodValue.setByHour(14)
      expect(periodValue.get()).toBe(ClockPeriodType.pm)

      periodValue.setByHour(0)
      expect(periodValue.get()).toBe(ClockPeriodType.am)

      periodValue.setByHour(11)
      expect(periodValue.get()).toBe(ClockPeriodType.am)

      periodValue.setByHour(12)
      expect(periodValue.get()).toBe(ClockPeriodType.pm)

      periodValue.setByHour(23)
      expect(periodValue.get()).toBe(ClockPeriodType.pm)

      periodValue.setByHour('9')
      expect(periodValue.get()).toBe(ClockPeriodType.am)

      periodValue.setByHour('18')
      expect(periodValue.get()).toBe(ClockPeriodType.pm)
    })
  })

  describe('Boundary values, normalization, and invalid inputs', () => {
    it('should normalize case and whitespace and safely fall back to am for invalid values', () => {
      const uppercasePm = new ClockPeriodValue({ value: ' PM ' as ClockPeriodType })
      expect(uppercasePm.get()).toBe(ClockPeriodType.pm)

      const invalidValue = new ClockPeriodValue({ value: 'invalid' as ClockPeriodType })
      expect(invalidValue.get()).toBe(ClockPeriodType.am)

      invalidValue.set('PM')
      expect(invalidValue.get()).toBe(ClockPeriodType.pm)

      invalidValue.set('unknown')
      expect(invalidValue.get()).toBe(ClockPeriodType.am)
    })

    it('should ignore undefined, NaN, Infinity, and non-numeric strings in setByHour', () => {
      const periodValue = new ClockPeriodValue({ value: ClockPeriodType.pm })

      periodValue.setByHour(undefined)
      expect(periodValue.get()).toBe(ClockPeriodType.pm)

      periodValue.setByHour(Number.NaN)
      expect(periodValue.get()).toBe(ClockPeriodType.pm)

      periodValue.setByHour(Number.POSITIVE_INFINITY)
      expect(periodValue.get()).toBe(ClockPeriodType.pm)

      periodValue.setByHour('not-a-number')
      expect(periodValue.get()).toBe(ClockPeriodType.pm)

      periodValue.setByHour(-1)
      expect(periodValue.get()).toBe(ClockPeriodType.am)
    })

    it('should isolate state between separate instances', () => {
      const first = new ClockPeriodValue({ value: ClockPeriodType.am })
      const second = new ClockPeriodValue({ value: ClockPeriodType.am })

      first.setPm()

      expect(first.get()).toBe(ClockPeriodType.pm)
      expect(second.get()).toBe(ClockPeriodType.am)
    })
  })

  describe('Lifecycle reactivity and watcher cleanup', () => {
    it('should not watch props before onMounted and should sync cleanly after onMounted without feedback emits', async () => {
      const emits = vi.fn()
      const model = new ModelInclude<ClockPeriodType>('value', emits)
      const props = reactive<ClockPeriodProps>({ value: ClockPeriodType.am })
      const periodValue = new ClockPeriodValue(props, () => model)

      props.value = ClockPeriodType.pm
      await nextTick()
      expect(periodValue.get()).toBe(ClockPeriodType.am)

      periodValue.onMounted()

      props.value = ClockPeriodType.am
      await nextTick()
      expect(periodValue.get()).toBe(ClockPeriodType.am)

      props.value = ClockPeriodType.pm
      await nextTick()
      expect(periodValue.get()).toBe(ClockPeriodType.pm)
      expect(emits).not.toHaveBeenCalled()

      props.modelValue = ClockPeriodType.am
      await nextTick()
      expect(periodValue.get()).toBe(ClockPeriodType.am)
      expect(emits).not.toHaveBeenCalled()

      props.modelValue = undefined
      await nextTick()
      expect(periodValue.get()).toBe(ClockPeriodType.pm)

      periodValue.onUnmounted()

      props.value = ClockPeriodType.am
      await nextTick()
      expect(periodValue.get()).toBe(ClockPeriodType.pm)
    })

    it('should preserve pre-mount programmatic value when onMounted runs and replace previous watcher on re-mount', async () => {
      const props = reactive<ClockPeriodProps>({})
      const periodValue = new ClockPeriodValue(props)

      periodValue.setPm()
      periodValue.onMounted()
      expect(periodValue.get()).toBe(ClockPeriodType.pm)

      periodValue.onMounted()
      props.value = ClockPeriodType.am
      await nextTick()
      expect(periodValue.get()).toBe(ClockPeriodType.am)

      periodValue.onUnmounted()
    })
  })
})

// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import type { FieldValueInclude } from '../../../classes/Field/FieldValueInclude'
import type { SliderValueType } from '../../Slider'
import { SliderFieldLabel } from '../SliderFieldLabel'
import { SliderFieldValue } from '../SliderFieldValue'
import type { SliderFieldProps } from '../props'

describe('SliderFieldLabel', () => {
  const createLabel = (
    props: Readonly<SliderFieldProps>,
    value: SliderValueType | undefined
  ) => {
    const valueInclude = {
      item: ref(value)
    } as unknown as FieldValueInclude<SliderValueType>
    const valueItem = new SliderFieldValue(props, () => valueInclude)
    const valueItemGetter = vi.fn(() => valueItem)
    const labelItem = new SliderFieldLabel(props, valueItemGetter)

    return { labelItem, valueItemGetter }
  }

  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should format min, max, and text labels for single value mode', () => {
      const { labelItem, valueItemGetter } = createLabel(
        { min: 10, max: 200, multiple: false },
        50
      )

      expect(valueItemGetter).not.toHaveBeenCalled()
      expect(labelItem.min).toBe('10')
      expect(labelItem.max).toBe('50')
      expect(labelItem.label).toBe('50')
    })

    it('should format min, max, and text labels for multiple range mode', () => {
      const { labelItem } = createLabel(
        { min: 0, max: 100, multiple: true },
        [20, 80]
      )

      expect(labelItem.min).toBe('20')
      expect(labelItem.max).toBe('80')
      expect(labelItem.label).toBe('20 - 80')
    })

    it('should build labelProps with and without showValueInLabel and custom separator', () => {
      const { labelItem: plainLabel } = createLabel(
        { label: 'Volume', showValueInLabel: false, required: true },
        45
      )
      expect(plainLabel.labelProps.label).toBe('Volume')
      expect(plainLabel.labelProps.required).toBe(true)

      const { labelItem: defaultSepLabel } = createLabel(
        { label: 'Volume', showValueInLabel: true },
        45
      )
      expect(defaultSepLabel.labelProps.label).toBe('Volume: 45')

      const { labelItem: customSepLabel } = createLabel(
        { label: 'Price', labelSeparator: ' = ', showValueInLabel: true, multiple: true },
        [10, 90]
      )
      expect(customSepLabel.labelProps.label).toBe('Price = 10 - 90')
    })
  })

  describe('Boundary values, zero/falsy traps, and empty label inputs', () => {
    it('should render value alone in labelProps when showValueInLabel is true and label is omitted or empty', () => {
      const { labelItem: omitted } = createLabel(
        { showValueInLabel: true },
        30
      )
      const { labelItem: empty } = createLabel(
        { label: '', showValueInLabel: true },
        30
      )

      expect(omitted.labelProps.label).toBe('30')
      expect(empty.labelProps.label).toBe('30')
    })

    it('should preserve falsy numeric 0 for both value and label', () => {
      const { labelItem } = createLabel(
        { label: 0, min: -50, max: 50, showValueInLabel: true },
        0
      )

      expect(labelItem.min).toBe('-50')
      expect(labelItem.max).toBe('0')
      expect(labelItem.label).toBe('0')
      expect(labelItem.labelProps.label).toBe('0: 0')
    })

    it('should preserve empty labelSeparator string when explicitly passed', () => {
      const { labelItem } = createLabel(
        { label: 'Level', labelSeparator: '', showValueInLabel: true },
        5
      )

      expect(labelItem.labelProps.label).toBe('Level5')
    })
  })

  describe('Multilingual and Unicode handling', () => {
    it('should format Cyrillic, Vietnamese, and Emoji labels cleanly', () => {
      const { labelItem } = createLabel(
        { label: 'Громкость Tiếng Việt 🔊', showValueInLabel: true },
        75
      )

      expect(labelItem.labelProps.label).toBe('Громкость Tiếng Việt 🔊: 75')
    })
  })
})

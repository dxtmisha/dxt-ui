// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { effectScope, reactive, ref, nextTick } from 'vue'
import { FieldValueInclude } from '../FieldValueInclude'
import type { FieldElementInclude } from '../FieldElementInclude'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as Record<string, unknown>
  return {
    ...actual,
    onMounted: (fn: () => void) => fn()
  }
})

describe('FieldValueInclude', () => {
  describe('Initialization and reactive prop tracking', () => {
    it.each(['value', 'modelValue'] as const)('tracks %s added after initialization without a refs map', async (property) => {
      const scope = effectScope()
      const props = reactive<{ value?: string, modelValue?: string }>({})
      const value = scope.run(() => {
        const item = new FieldValueInclude<string>(props)
        item.onMounted()
        return item
      })!

      try {
        expect(value.get()).toBeUndefined()
        props[property] = 'first'
        await nextTick()
        expect(value.get()).toBe('first')

        props[property] = 'second'
        await nextTick()
        expect(value.get()).toBe('second')

        scope.stop()
        props[property] = 'after disposal'
        await nextTick()
        expect(value.get()).toBe('second')
      } finally {
        scope.stop()
      }
    })

    it('should initialize from original ref when value and modelValue are absent', () => {
      const original = ref('fallback-val')
      const valueInclude = new FieldValueInclude({}, undefined, original)

      expect(valueInclude.get()).toBe('fallback-val')
    })

    it('should initialize and return formatted value string, number, and boolean', () => {
      const props = { value: '123', modelValue: undefined }
      const valueInclude = new FieldValueInclude(props)

      expect(valueInclude.get()).toBe('123')
      expect(valueInclude.string).toBe('123')
      expect(valueInclude.number).toBe(123)
      expect(valueInclude.boolean).toBe(true)
      expect(valueInclude.length).toBe(3)
    })

    it('should return 0 for number when value is empty', () => {
      const valueInclude = new FieldValueInclude({})
      expect(valueInclude.boolean).toBe(false)
      expect(valueInclude.number).toBe(0)
      expect(valueInclude.string).toBe('')
      expect(valueInclude.length).toBe(0)
    })

    it('should format values into arrays via getToArray()', () => {
      const valueInclude = new FieldValueInclude({ value: 'a' })
      expect(valueInclude.getToArray()).toEqual(['a'])
    })

    it('should update value on props modification', async () => {
      const reactiveProps = ref({ value: 'init', modelValue: undefined })
      const valueInclude = new FieldValueInclude(reactiveProps.value)
      valueInclude.onMounted()

      expect(valueInclude.get()).toBe('init')

      reactiveProps.value.value = 'updated'
      await nextTick()
      expect(valueInclude.get()).toBe('updated')
    })
  })

  describe('itemByFull, is(), and isValue()', () => {
    it('should return undefined from itemByFull when isFull is false', () => {
      const valueInclude = new FieldValueInclude({ value: '123' })
      expect(valueInclude.itemByFull.value).toBe('123')

      valueInclude.setFull(false)
      expect(valueInclude.itemByFull.value).toBeUndefined()
    })

    it('should resolve valueVariant in itemByFull when isValueVariant is true', () => {
      const valueInclude = new FieldValueInclude<boolean>(
        { value: true, valueVariant: 'option-a' },
        undefined,
        undefined,
        false,
        true
      )

      expect(valueInclude.itemByFull.value).toBe('option-a')

      valueInclude.set(false)
      expect(valueInclude.itemByFull.value).toBeUndefined()
    })

    it('should evaluate is() and isValue() with placeholder and hasEdit', () => {
      const valueInclude = new FieldValueInclude({ placeholder: 'Type here...' })

      expect(valueInclude.is()).toBe(true)
      expect(valueInclude.isValue()).toBe(false)

      valueInclude.setHasEdit(true)
      expect(valueInclude.isValue()).toBe(true)
    })
  })

  describe('Setting and clearing values', () => {
    it('should clear value and reset states on clear()', () => {
      const clearSpy = vi.fn()
      const elementMock = {
        clear: clearSpy,
        getElement: () => undefined
      } as unknown as FieldElementInclude

      const valueInclude = new FieldValueInclude({ value: 'init' }, () => elementMock)

      valueInclude.set('new-val')
      valueInclude.setHasEdit(true)
      valueInclude.setFull(false)
      expect(valueInclude.get()).toBe('new-val')

      valueInclude.clear()
      expect(valueInclude.get()).toBeUndefined()
      expect(valueInclude.is()).toBe(false)
      expect(valueInclude.isFull.value).toBe(true)
      expect(clearSpy).toHaveBeenCalledTimes(1)
    })

    it('should forward setValue to element ref when present', () => {
      const setValueSpy = vi.fn()
      const elementMock = {
        getElement: () => ref({ setValue: setValueSpy })
      } as unknown as FieldElementInclude

      const valueInclude = new FieldValueInclude({}, () => elementMock)
      valueInclude.set('synced-value')

      expect(setValueSpy).toHaveBeenCalledWith('synced-value')
    })

    it('should set value by event object client target (text and checkbox)', () => {
      const valueInclude = new FieldValueInclude({})

      const targetInput = document.createElement('input')
      targetInput.type = 'text'
      targetInput.value = 'event-input'

      valueInclude.setByEvent({ target: targetInput, hasEdit: true, isFull: false })
      expect(valueInclude.get()).toBe('event-input')
      expect(valueInclude.isValue()).toBe(true)
      expect(valueInclude.isFull.value).toBe(false)

      const checkboxInput = document.createElement('input')
      checkboxInput.type = 'checkbox'
      checkboxInput.checked = true

      valueInclude.setByTarget(checkboxInput)
      expect(valueInclude.get()).toBe(true)
    })

    it('should set value by event object with explicit value property or primitive', () => {
      const valueInclude = new FieldValueInclude({})

      valueInclude.setByEvent({ value: 'from-object' })
      expect(valueInclude.get()).toBe('from-object')

      valueInclude.setByEvent('from-primitive')
      expect(valueInclude.get()).toBe('from-primitive')
    })

    it('should handle setByChecked, setByRadio, setValueByRadio, and setToOriginal', () => {
      const valueInclude = new FieldValueInclude({ value: 'orig', valueVariant: 'v1' })

      const checkboxEvent = { target: { checked: true } } as unknown as Event
      valueInclude.setByChecked(checkboxEvent)
      expect(valueInclude.get()).toBe(true)

      const radioCheckedEvent = { target: { checked: true, value: 'radio-1' } } as unknown as Event
      valueInclude.setByRadio(radioCheckedEvent)
      expect(valueInclude.get()).toBe('radio-1')

      const radioUncheckedEvent = { target: { checked: false, value: 'radio-1' } } as unknown as Event
      valueInclude.setByRadio(radioUncheckedEvent)
      expect(valueInclude.get()).toBe('')

      valueInclude.setValueByRadio('v1')
      expect(valueInclude.get()).toBe(true)

      valueInclude.setToOriginal()
      expect(valueInclude.get()).toBe('orig')
    })
  })

  describe('Expose API', () => {
    it('should set and clear value via expose()', () => {
      const valueInclude = new FieldValueInclude({ value: 'init' })
      const exposed = valueInclude.expose()

      exposed.setValue('via-expose')
      expect(valueInclude.get()).toBe('via-expose')
      expect(exposed.getValue()).toBe('via-expose')

      exposed.clear()
      expect(valueInclude.get()).toBeUndefined()
    })

    it('should delegate expose().setValue() to setValueByRadio when isValueVariant is true', () => {
      const valueInclude = new FieldValueInclude(
        { valueVariant: 'target-variant' },
        undefined,
        undefined,
        false,
        true
      )
      const exposed = valueInclude.expose()

      exposed.setValue('target-variant')
      expect(valueInclude.get()).toBe(true)
      expect(exposed.getValue()).toBe('target-variant')

      exposed.setValue('other')
      expect(valueInclude.get()).toBe(false)
      expect(exposed.getValue()).toBeUndefined()
    })
  })
})

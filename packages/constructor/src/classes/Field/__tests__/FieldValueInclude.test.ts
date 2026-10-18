// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { effectScope, reactive, ref, nextTick } from 'vue'
import { FieldValueInclude } from '../FieldValueInclude'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onMounted: (fn: () => void) => fn()
  }
})

describe('FieldValueInclude', () => {
  it.each(['value', 'modelValue'] as const)('tracks %s added after initialization without a refs map', async (property) => {
    const scope = effectScope()
    const props = reactive<{ value?: string, modelValue?: string }>({})
    const value = scope.run(() => new FieldValueInclude<string>(props))!

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

  it('should initialize and return formatted value string, number, and boolean', () => {
    const props = { value: '123', modelValue: undefined }

    const valueInclude = new FieldValueInclude(props)

    expect(valueInclude.get()).toBe('123')
    expect(valueInclude.string).toBe('123')
    expect(valueInclude.number).toBe(123)
    expect(valueInclude.boolean).toBe(true)
    expect(valueInclude.length).toBe(3)
  })

  it('should format values into arrays', () => {
    const props = { value: 'a', modelValue: undefined }

    const valueInclude = new FieldValueInclude(props)

    expect(valueInclude.getToArray()).toEqual(['a'])
  })

  it('should update value on props modification', async () => {
    const reactiveProps = ref({ value: 'init', modelValue: undefined })

    const valueInclude = new FieldValueInclude(reactiveProps.value)

    expect(valueInclude.get()).toBe('init')

    reactiveProps.value.value = 'updated'
    await nextTick()
    expect(valueInclude.get()).toBe('updated')
  })

  it('should clear value and reset states on clear()', () => {
    const props = { value: 'init', modelValue: undefined }

    const valueInclude = new FieldValueInclude(props, undefined, undefined)

    valueInclude.set('new-val')
    valueInclude.setHasEdit(true)
    expect(valueInclude.get()).toBe('new-val')

    valueInclude.clear()
    expect(valueInclude.get()).toBeUndefined()
    expect(valueInclude.is()).toBe(false)
  })

  it('should set value by event object client target', () => {
    const props = { value: undefined, modelValue: undefined }

    const valueInclude = new FieldValueInclude(props)

    const targetInput = document.createElement('input')
    targetInput.value = 'event-input'

    valueInclude.setByEvent({ target: targetInput })
    expect(valueInclude.get()).toBe('event-input')
  })

  it('should set value via expose().setValue()', () => {
    const props = { value: 'init', modelValue: undefined }

    const valueInclude = new FieldValueInclude(props)

    const exposed = valueInclude.expose()
    expect(typeof exposed.setValue).toBe('function')
    exposed.setValue('via-expose')
    expect(valueInclude.get()).toBe('via-expose')
    expect(exposed.getValue()).toBe('via-expose')
  })

  it('should clear value via expose().clear()', () => {
    const props = { value: 'init', modelValue: undefined }

    const valueInclude = new FieldValueInclude(props)

    const exposed = valueInclude.expose()
    expect(typeof exposed.clear).toBe('function')
    exposed.setValue('test')
    expect(valueInclude.get()).toBe('test')
    exposed.clear()
    expect(valueInclude.get()).toBeUndefined()
  })
})

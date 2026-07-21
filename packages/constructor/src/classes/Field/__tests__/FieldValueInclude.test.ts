// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { ref, toRefs, nextTick } from 'vue'
import { FieldValueInclude } from '../FieldValueInclude'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onMounted: (fn: () => void) => fn()
  }
})

describe('FieldValueInclude', () => {
  it('should initialize and return formatted value string, number, and boolean', () => {
    const props = { value: '123', modelValue: undefined }
    const refs = toRefs(ref(props).value)
    const valueInclude = new FieldValueInclude(props, refs)

    expect(valueInclude.get()).toBe('123')
    expect(valueInclude.string).toBe('123')
    expect(valueInclude.number).toBe(123)
    expect(valueInclude.boolean).toBe(true)
    expect(valueInclude.length).toBe(3)
  })

  it('should format values into arrays', () => {
    const props = { value: 'a', modelValue: undefined }
    const refs = toRefs(ref(props).value)
    const valueInclude = new FieldValueInclude(props, refs)

    expect(valueInclude.getToArray()).toEqual(['a'])
  })

  it('should update value on props modification', async () => {
    const reactiveProps = ref({ value: 'init', modelValue: undefined })
    const refs = toRefs(reactiveProps.value)
    const valueInclude = new FieldValueInclude(reactiveProps.value, refs)

    expect(valueInclude.get()).toBe('init')

    reactiveProps.value.value = 'updated'
    await nextTick()
    expect(valueInclude.get()).toBe('updated')
  })

  it('should clear value and reset states on clear()', () => {
    const props = { value: 'init', modelValue: undefined }
    const refs = toRefs(ref(props).value)
    const valueInclude = new FieldValueInclude(props, refs, undefined, undefined)

    valueInclude.set('new-val')
    valueInclude.setHasEdit(true)
    expect(valueInclude.get()).toBe('new-val')

    valueInclude.clear()
    expect(valueInclude.get()).toBeUndefined()
    expect(valueInclude.is()).toBe(false)
  })

  it('should set value by event object client target', () => {
    const props = { value: undefined, modelValue: undefined }
    const refs = toRefs(ref(props).value)
    const valueInclude = new FieldValueInclude(props, refs)

    const targetInput = document.createElement('input')
    targetInput.value = 'event-input'

    valueInclude.setByEvent({ target: targetInput })
    expect(valueInclude.get()).toBe('event-input')
  })
})

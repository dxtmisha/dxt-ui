// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { ref, toRefs, nextTick } from 'vue'
import type { ToRefs } from 'vue'
import { CheckboxSelected } from '../CheckboxSelected'
import type { CheckboxProps } from '../props'
import { FieldValueInclude } from '../../../classes/Field/FieldValueInclude'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onMounted: (fn: () => void) => fn()
  }
})

function createCheckboxSelected(
  initialProps: Partial<CheckboxProps>,
  mockValueItem = ref<any>(undefined)
) {
  const reactiveProperties = ref({
    selected: undefined,
    valueVariant: undefined,
    ...initialProps
  })
  const references = toRefs(reactiveProperties.value as any) as unknown as ToRefs<CheckboxProps>

  const mockValue = {
    item: mockValueItem,
    set: vi.fn((val: any) => {
      mockValueItem.value = val
    })
  } as unknown as FieldValueInclude

  const emits = vi.fn()

  const checkboxSelected = new CheckboxSelected(
    reactiveProperties.value as unknown as CheckboxProps,
    references,
    mockValue,
    emits
  )

  return { checkboxSelected, reactiveProperties, mockValue, emits }
}

describe('CheckboxSelected', () => {
  it('should initialize and run update on creation', () => {
    const { checkboxSelected, mockValue } = createCheckboxSelected({
      selected: undefined,
      valueVariant: 'yes'
    })
    expect(mockValue.set).not.toHaveBeenCalled()
    expect((checkboxSelected as any).selected.value).toBeUndefined()
  })

  it('should set value as true if selected matches valueVariant', () => {
    const { checkboxSelected, mockValue } = createCheckboxSelected({
      selected: 'yes',
      valueVariant: 'yes'
    })
    expect(mockValue.set).toHaveBeenCalledWith(true)
    expect((checkboxSelected as any).selected.value).toBe('yes')
  })

  it('should set value as false if selected does not match valueVariant', () => {
    const { checkboxSelected, mockValue } = createCheckboxSelected({
      selected: 'no',
      valueVariant: 'yes'
    })
    expect(mockValue.set).toHaveBeenCalledWith(false)
    expect((checkboxSelected as any).selected.value).toBe('no')
  })

  it('should watch refs.selected and update state when it changes', async () => {
    const { checkboxSelected, reactiveProperties, mockValue } = createCheckboxSelected({
      selected: 'no',
      valueVariant: 'yes'
    })
    expect(mockValue.set).toHaveBeenLastCalledWith(false)
    expect((checkboxSelected as any).selected.value).toBe('no')

    reactiveProperties.value.selected = 'yes'
    await nextTick()

    expect(mockValue.set).toHaveBeenLastCalledWith(true)
    expect((checkboxSelected as any).selected.value).toBe('yes')
  })

  it('should watch value.item and update selected state when it becomes truthy', async () => {
    const valueItem = ref<any>(false)
    const { checkboxSelected } = createCheckboxSelected({
      selected: undefined,
      valueVariant: 'yes'
    }, valueItem)

    expect((checkboxSelected as any).selected.value).toBeUndefined()

    valueItem.value = true
    await nextTick()

    expect((checkboxSelected as any).selected.value).toBe('yes')
  })
})

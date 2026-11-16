// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, nextTick, reactive, ref } from 'vue'

import { CheckboxSelected } from '../CheckboxSelected'
import type { FieldValueInclude } from '../../../classes/Field/FieldValueInclude'
import type { ModelInclude } from '../../../classes/ModelInclude'
import type { CheckboxProps } from '../props'

/**
 * Creates a CheckboxSelected instance inside an effectScope for testing lifecycle and watchers.
 *
 * Создаёт экземпляр CheckboxSelected внутри effectScope для тестирования жизненного цикла и наблюдателей.
 * @param initialProps initial checkbox properties / начальные свойства флажка
 * @param mockValueItem reactive value ref / реактивная ссылка значения
 * @returns instance, reactive props, mocks, and scope cleanup / экземпляр, реактивные свойства, моки и очистка области
 */
function createCheckboxSelected(
  initialProps: Partial<CheckboxProps>,
  mockValueItem = ref<boolean>(false)
) {
  const scope = effectScope()
  const props = reactive<CheckboxProps>({
    selected: undefined,
    valueVariant: undefined,
    ...initialProps
  })

  const mockValue = {
    item: mockValueItem,
    set: vi.fn((value: boolean) => {
      mockValueItem.value = value
    })
  } as unknown as FieldValueInclude<boolean>

  const mockModel = {
    emit: vi.fn()
  } as unknown as ModelInclude<string | undefined>

  let checkboxSelected!: CheckboxSelected

  scope.run(() => {
    checkboxSelected = new CheckboxSelected(
      props,
      () => mockValue,
      () => mockModel
    )
  })

  return {
    checkboxSelected,
    props,
    mockValue,
    mockModel,
    mount: () => {
      scope.run(() => {
        checkboxSelected.onMounted()
      })
    },
    stop: () => scope.stop()
  }
}

describe('CheckboxSelected', () => {
  const cleanups: Array<() => void> = []

  afterEach(() => {
    cleanups.splice(0).reverse().forEach(stop => stop())
    vi.restoreAllMocks()
  })

  describe('Static predicate', () => {
    it('should return true when selected or valueVariant is defined and false otherwise', () => {
      expect(CheckboxSelected.is()).toBe(false)
      expect(CheckboxSelected.is({})).toBe(false)
      expect(CheckboxSelected.is({ selected: '' })).toBe(true)
      expect(CheckboxSelected.is({ valueVariant: '' })).toBe(true)
      expect(CheckboxSelected.is({ valueVariant: 0 })).toBe(true)
      expect(CheckboxSelected.is({ selected: 'yes', valueVariant: 'yes' })).toBe(true)
    })
  })

  describe('Initialization and synchronous setup', () => {
    it('should not mutate value when selected is undefined on creation', () => {
      const { mockValue, mockModel, stop } = createCheckboxSelected({
        selected: undefined,
        valueVariant: 'yes'
      })
      cleanups.push(stop)

      expect(mockValue.set).not.toHaveBeenCalled()
      expect(mockModel.emit).not.toHaveBeenCalled()
    })

    it('should set value to true synchronously when selected matches valueVariant', () => {
      const { mockValue, mockModel, stop } = createCheckboxSelected({
        selected: 'yes',
        valueVariant: 'yes'
      })
      cleanups.push(stop)

      expect(mockValue.set).toHaveBeenCalledWith(true)
      expect(mockModel.emit).not.toHaveBeenCalled()
    })

    it('should set value to false synchronously when selected does not match valueVariant', () => {
      const { mockValue, stop } = createCheckboxSelected({
        selected: 'no',
        valueVariant: 'yes'
      })
      cleanups.push(stop)

      expect(mockValue.set).toHaveBeenCalledWith(false)
    })
  })

  describe('Lifecycle watchers and model emission', () => {
    it('should not watch changes before onMounted and should sync after onMounted', async () => {
      const { props, mockValue, mockModel, mount, stop } = createCheckboxSelected({
        selected: 'no',
        valueVariant: 'yes'
      })
      cleanups.push(stop)

      props.selected = 'yes'
      await nextTick()
      expect(mockValue.set).toHaveBeenLastCalledWith(false)
      expect(mockModel.emit).not.toHaveBeenCalled()

      props.selected = 'no'
      mount()

      props.selected = 'yes'
      await nextTick()
      expect(mockValue.set).toHaveBeenLastCalledWith(true)
      expect(mockModel.emit).toHaveBeenCalledWith('yes')
    })

    it('should emit selected variant when value.item becomes truthy after mount', async () => {
      const valueItem = ref<boolean>(false)
      const { mockModel, mount, stop } = createCheckboxSelected({
        selected: undefined,
        valueVariant: 'option-a'
      }, valueItem)
      cleanups.push(stop)

      mount()
      valueItem.value = true
      await nextTick()

      expect(mockModel.emit).toHaveBeenCalledTimes(1)
      expect(mockModel.emit).toHaveBeenCalledWith('option-a')
    })

    it('should handle numeric 0 valueVariant properly when checked', async () => {
      const valueItem = ref<boolean>(false)
      const { mockModel, mount, stop } = createCheckboxSelected({
        selected: undefined,
        valueVariant: 0
      }, valueItem)
      cleanups.push(stop)

      mount()
      valueItem.value = true
      await nextTick()

      expect(mockModel.emit).toHaveBeenCalledWith('0')
    })

    it('should stop reacting after effectScope disposal', async () => {
      const valueItem = ref<boolean>(false)
      const { props, mockValue, mockModel, mount, stop } = createCheckboxSelected({
        selected: 'no',
        valueVariant: 'yes'
      }, valueItem)

      mount()
      stop()

      props.selected = 'yes'
      valueItem.value = true
      await nextTick()

      expect(mockValue.set).toHaveBeenCalledTimes(1)
      expect(mockModel.emit).not.toHaveBeenCalled()
    })
  })
})

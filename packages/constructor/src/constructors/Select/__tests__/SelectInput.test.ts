import './testWarnings'
import { describe, expect, it, vi } from 'vitest'
import { reactive } from 'vue'

import { FieldAttributesInclude } from '../../../classes/Field/FieldAttributesInclude'
import { FieldChangeInclude } from '../../../classes/Field/FieldChangeInclude'
import { FieldEventInclude } from '../../../classes/Field/FieldEventInclude'
import { FieldValueInclude } from '../../../classes/Field/FieldValueInclude'

import { SelectInput } from '../SelectInput'
import type { SelectProps } from '../props'

/**
 * Creates a configured SelectInput instance with real Field helpers.
 *
 * Создает настроенный экземпляр SelectInput с реальными помощниками Field.
 * @param properties select input properties / свойства поля выбора
 * @returns object containing selectInput, event, and attributes / объект с selectInput, event и attributes
 */
function createSelectInput(properties: SelectProps = {}) {
  const props = reactive<SelectProps>({ ...properties })
  const attributes = new FieldAttributesInclude(props)
  const change = new FieldChangeInclude(props)
  const value = new FieldValueInclude(props)
  const event = new FieldEventInclude(
    props,
    () => change,
    () => value
  )

  const selectInput = new SelectInput(
    props,
    () => attributes,
    () => event
  )

  return {
    props,
    attributes,
    event,
    selectInput
  }
}

describe('SelectInput', () => {
  describe('Edit Mode Resolution (isEdit)', () => {
    it('should return false by default when editValue is omitted or false', () => {
      const { selectInput } = createSelectInput()
      expect(selectInput.isEdit()).toBe(false)
    })

    it('should return true when editValue is enabled in single-select mode', () => {
      const { selectInput } = createSelectInput({ editValue: true })
      expect(selectInput.isEdit()).toBe(true)
    })

    it('should force false when multiple is enabled even if editValue is true', () => {
      const { selectInput } = createSelectInput({ editValue: true, multiple: true })
      expect(selectInput.isEdit()).toBe(false)
    })

    it('should react dynamically to runtime changes of editValue and multiple', () => {
      const { props, selectInput } = createSelectInput({ editValue: false, multiple: false })
      expect(selectInput.isEdit()).toBe(false)

      props.editValue = true
      expect(selectInput.isEdit()).toBe(true)

      props.multiple = true
      expect(selectInput.isEdit()).toBe(false)
    })
  })

  describe('ARIA Encapsulation (aria)', () => {
    it('should expose combobox ARIA role via aria getter', () => {
      const { selectInput } = createSelectInput()
      expect(selectInput.aria).toEqual({ role: 'combobox' })
    })
  })

  describe('Input Bindings (binds)', () => {
    it('should produce readonly bindings with onSelect handler in non-edit mode', () => {
      const { event, selectInput } = createSelectInput({
        name: 'country',
        required: true,
        placeholder: 'Choose country'
      })

      const bindings = selectInput.binds

      expect(bindings.name).toBe('country')
      expect(bindings.type).toBe('text')
      expect(bindings.required).toBe(true)
      expect(bindings.readonly).toBe(true)
      expect(bindings.placeholder).toBe('Choose country')
      expect(bindings['data-menu-control']).toBe('1')
      expect(bindings.role).toBe('combobox')
      expect(bindings.onFocus).toBe(event.onFocus)
      expect(bindings.onBlur).toBe(event.onBlur)
      expect(bindings.onInput).toBe(event.onSelect)
    })

    it('should switch readonly to false and bind onInput when editValue is active', () => {
      const { event, selectInput } = createSelectInput({ editValue: true })
      const bindings = selectInput.binds

      expect(bindings.readonly).toBe(false)
      expect(bindings.onInput).toBe(event.onInput)
    })

    it('should merge custom inputAttrs from FieldAttributesInclude without losing defaults', () => {
      const { selectInput } = createSelectInput({
        inputAttrs: {
          'aria-label': 'Custom search select',
          'maxLength': 32
        }
      })

      const bindings = selectInput.binds

      expect(bindings['aria-label']).toBe('Custom search select')
      expect(bindings.maxLength).toBe(32)
      expect(bindings.role).toBe('combobox')
      expect(bindings['data-menu-control']).toBe('1')
    })

    it('should invoke lazy dependency getters only when binds is accessed', () => {
      const props = reactive<SelectProps>({ editValue: true })
      const attributesInstance = new FieldAttributesInclude(props)
      const changeInstance = new FieldChangeInclude(props)
      const valueInstance = new FieldValueInclude(props)
      const eventInstance = new FieldEventInclude(props, () => changeInstance, () => valueInstance)

      const attributesGetter = vi.fn(() => attributesInstance)
      const eventGetter = vi.fn(() => eventInstance)

      const selectInput = new SelectInput(props, attributesGetter, eventGetter)

      expect(attributesGetter).not.toHaveBeenCalled()
      expect(eventGetter).not.toHaveBeenCalled()

      void selectInput.binds

      expect(attributesGetter).toHaveBeenCalledTimes(1)
      expect(eventGetter).toHaveBeenCalledTimes(1)
    })
  })
})

// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, effectScope, h, nextTick, provide, reactive, ref } from 'vue'
import { type ConstrEmit, DesignName } from '@dxtmisha/functional'

import { FORM_NAME_ELEMENT, type FormElementRegistration } from '../../Form/basicTypes'
import { SliderField } from '../SliderField'
import { SliderFieldLabel } from '../SliderFieldLabel'
import type { SliderFieldProps } from '../props'
import type { SliderFieldEmits } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
})

describe('SliderField (Orchestrator Unit)', () => {
  const naming = new DesignName('d1.sliderField')

  it('should initialize required setup helpers and keep optional/interaction helpers lazy', () => {
    const scope = effectScope()
    const props = reactive<SliderFieldProps>({ min: 0, max: 100, value: 40 })
    const element = ref<HTMLDivElement | undefined>(undefined)

    scope.run(() => {
      const sliderField = new SliderField(props, element, naming)

      // Setup-required helpers
      expect(sliderField.hasInstance('value')).toBe(true)
      expect(sliderField.hasInstance('event')).toBe(true)
      expect(sliderField.hasInstance('validation')).toBe(true)

      // Optional and interaction helpers remain lazy
      expect(sliderField.hasInstance('attributes')).toBe(false)
      expect(sliderField.hasInstance('change')).toBe(false)
      expect(sliderField.hasInstance('code')).toBe(false)
      expect(sliderField.hasInstance('fieldLabel')).toBe(false)
      expect(sliderField.hasInstance('fieldMessage')).toBe(false)
      expect(sliderField.hasInstance('form')).toBe(false)
      expect(sliderField.hasInstance('icon')).toBe(false)
      expect(sliderField.hasInstance('label')).toBe(false)
      expect(sliderField.hasInstance('sliderEvent')).toBe(false)
      expect(sliderField.hasInstance('valueItem')).toBe(false)
    })

    scope.stop()
  })

  it('should enforce canCreate guards for fieldLabel, icon, and form', () => {
    const scope = effectScope()
    const props = reactive<SliderFieldProps>({ min: 0, max: 100, value: 25 })
    const element = ref<HTMLDivElement | undefined>(undefined)

    scope.run(() => {
      const sliderField = new SliderField(props, element, naming)

      expect(sliderField.callInstance('fieldLabel', item => item.render(), [])).toEqual([])
      expect(sliderField.hasInstance('fieldLabel')).toBe(false)

      expect(sliderField.callInstance('icon', item => item.render(), [])).toEqual([])
      expect(sliderField.hasInstance('icon')).toBe(false)

      expect(sliderField.callInstance('form', item => item)).toBeUndefined()
      expect(sliderField.hasInstance('form')).toBe(false)

      // Enabling showValueInLabel unlocks fieldLabel even without props.label
      props.showValueInLabel = true
      expect(sliderField.callInstance('fieldLabel', item => item.is, false)).toBe(true)
      expect(sliderField.hasInstance('fieldLabel')).toBe(true)

      // Enabling iconTrailing unlocks icon
      props.iconTrailing = 'volume_up'
      expect(sliderField.callInstance('icon', item => item.isIconTrailing(), false)).toBe(true)
      expect(sliderField.hasInstance('icon')).toBe(true)
    })

    scope.stop()
  })

  it('should preserve falsy numeric 0 in FieldValueInclude (isZeroTrue = true)', () => {
    const scope = effectScope()
    const props = reactive<SliderFieldProps>({ min: -50, max: 50, value: 0 })
    const element = ref<HTMLDivElement | undefined>(undefined)

    scope.run(() => {
      const sliderField = new SliderField(props, element, naming)

      expect(sliderField.i('value').item.value).toBe(0)
      expect(sliderField.i('value').boolean).toBe(true)
      expect(sliderField.i('value').isValue()).toBe(true)
      expect(sliderField.i('valueItem').max).toBe(0)
    })

    scope.stop()
  })

  it('should return formatted input names with or without suffix in getName()', () => {
    const scope = effectScope()
    const props = reactive<SliderFieldProps>({})
    const element = ref<HTMLDivElement | undefined>(undefined)

    scope.run(() => {
      const sliderField = new SliderField(props, element, naming)

      expect(sliderField.getName()).toBeUndefined()
      expect(sliderField.getName('min')).toBeUndefined()

      props.name = 'price'
      expect(sliderField.getName()).toBe('price')
      expect(sliderField.getName('min')).toBe('price-min')
      expect(sliderField.getName('max')).toBe('price-max')
    })

    scope.stop()
  })

  it('should delegate onSliderInput and onSliderChange lazily and support DI constructor overrides', () => {
    const scope = effectScope()
    const props = reactive<SliderFieldProps>({ min: 0, max: 100, value: 20 })
    const element = ref<HTMLDivElement | undefined>(undefined)
    const emitsSpy = vi.fn()

    class CustomSliderFieldLabel extends SliderFieldLabel {
      override get label(): string {
        return `CUSTOM:${super.label}`
      }
    }

    scope.run(() => {
      const sliderField = new SliderField(
        props,
        element,
        naming,
        undefined,
        undefined,
        emitsSpy as unknown as ConstrEmit<SliderFieldEmits>,
        { label: CustomSliderFieldLabel }
      )

      expect(sliderField.i('label').label).toBe('CUSTOM:20')
      expect(sliderField.hasInstance('sliderEvent')).toBe(false)

      sliderField.onSliderInput(60)
      expect(sliderField.hasInstance('sliderEvent')).toBe(true)
      expect(sliderField.i('value').item.value).toBe(60)
      expect(emitsSpy).toHaveBeenCalledWith('update:value', 60)
      expect(emitsSpy).toHaveBeenCalledWith('update:modelValue', 60)
      expect(emitsSpy).toHaveBeenCalledWith('inputLite', expect.objectContaining({ value: 60 }))

      sliderField.onSliderChange()
      expect(emitsSpy).toHaveBeenCalledWith('changeLite', expect.objectContaining({ value: 60 }))
    })

    scope.stop()
  })

  it('should coordinate lifecycle watchers and Form registration/unregistration on mount and unmount', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    const registerSpy = vi.fn()
    const unregisterSpy = vi.fn()
    const updateDataSpy = vi.fn()
    const emitsSpy = vi.fn()
    const props = reactive<SliderFieldProps>({
      name: 'range',
      min: 0,
      max: 100,
      modelValue: 30
    })

    let sliderField!: SliderField

    const ChildComponent = defineComponent({
      setup() {
        const element = ref<HTMLDivElement | undefined>(undefined)
        sliderField = new SliderField(
          props,
          element,
          naming,
          undefined,
          undefined,
          emitsSpy as unknown as ConstrEmit<SliderFieldEmits>
        )
        return () => h('div', { ref: element })
      }
    })

    const ParentForm = defineComponent({
      setup() {
        const formRegistration: FormElementRegistration = {
          register: registerSpy,
          unregister: unregisterSpy,
          updateData: updateDataSpy,
          getValue: vi.fn()
        }
        provide(FORM_NAME_ELEMENT, formRegistration)
        return () => h(ChildComponent)
      }
    })

    const app = createApp(ParentForm)
    app.mount(container)
    await nextTick()

    expect(sliderField.hasInstance('form')).toBe(true)
    expect(registerSpy).toHaveBeenCalledTimes(1)

    // External modelValue prop update triggers FieldValueInclude.onMounted watcher
    props.modelValue = 70
    await nextTick()
    expect(sliderField.i('value').item.value).toBe(70)

    // Internal value mutation triggers FieldEventInclude.onMounted watcher
    sliderField.i('value').set(85)
    await nextTick()
    expect(emitsSpy).toHaveBeenCalledWith('update:modelValue', 85)

    // Slider input updates parent Form
    sliderField.onSliderInput(90)
    expect(updateDataSpy).toHaveBeenCalledTimes(1)

    // Unmount cleans up Form registration and event watcher
    app.unmount()
    expect(unregisterSpy).toHaveBeenCalledTimes(1)
  })
})

// @vitest-environment node
import { describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, effectScope, h, reactive, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { type ConstrClasses, DesignName, ServerStorage } from '@dxtmisha/functional'

import { SliderDesign } from '../../Slider/SliderDesign'
import type { SliderProps } from '../../Slider/props'
import type { SliderClasses, SliderComponents, SliderExpose } from '../../Slider/types'

import { SliderField } from '../SliderField'
import { SliderFieldDesign } from '../SliderFieldDesign'
import type { SliderFieldProps } from '../props'
import type { SliderFieldClasses, SliderFieldComponents, SliderFieldExpose } from '../types'

const SsrSliderComponent = defineComponent({
  name: 'SsrSliderComponent',
  inheritAttrs: false,
  props: {
    readonly: { type: Boolean, default: undefined },
    disabled: { type: Boolean, default: undefined },
    selected: { type: Boolean, default: undefined },
    name: { type: String, default: undefined },
    marks: { type: [Array, Object], default: undefined },
    magnet: { type: Boolean, default: undefined },
    keyLabel: { type: String, default: 'label' },
    keyValue: { type: String, default: 'value' },
    required: { type: Boolean, default: undefined },
    step: { type: [Number, String], default: 1 },
    min: { type: [Number, String], default: 0 },
    max: { type: [Number, String], default: 100 },
    multiple: { type: Boolean, default: undefined },
    minimumDistance: { type: [Number, String], default: 1 },
    showThumbLabel: { type: Boolean, default: true },
    vertical: { type: Boolean, default: undefined },
    isSkeleton: { type: Boolean, default: undefined },
    inputAttrs: { type: Object, default: undefined },
    value: { type: [Number, String, Array], default: undefined }
  },
  setup(props) {
    const design = new SliderDesign<SliderComponents, SliderExpose, SliderClasses, SliderProps>(
      'd1.slider',
      props as Readonly<SliderProps>
    )
    const render = design.render()
    return () => h(render)
  }
})

const SsrFieldLabelStub = defineComponent({
  name: 'SsrFieldLabelStub',
  props: { label: { type: [String, Number], default: undefined } },
  setup(props) {
    return () => h('label', { class: 'd1-fieldLabel' }, String(props.label ?? ''))
  }
})

const SsrFieldMessageStub = defineComponent({
  name: 'SsrFieldMessageStub',
  props: {
    helperMessage: { type: String, default: undefined },
    validationMessage: { type: String, default: undefined }
  },
  setup(props) {
    return () => h('div', { class: 'd1-fieldMessage' }, props.validationMessage || props.helperMessage || '')
  }
})

const SsrIconStub = defineComponent({
  name: 'SsrIconStub',
  props: { icon: { type: [String, Object], default: undefined } },
  setup(props) {
    return () => h('span', { class: 'd1-icon' }, String(props.icon ?? ''))
  }
})

describe('SliderField (SSR)', () => {
  const naming = new DesignName('d1.sliderField')

  it('initializes orchestrator cleanly in Node SSR without DOM globals', () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const storage: Record<string, unknown> = {}
    ServerStorage.reset()
    ServerStorage.init(() => storage)

    const scope = effectScope()
    const element = ref<HTMLDivElement>()
    const props = reactive<SliderFieldProps>({
      min: -50,
      max: 50,
      value: 0
    })

    scope.run(() => {
      const sliderField = new SliderField(props, element, naming)

      expect(sliderField.getName()).toBeUndefined()
      props.name = 'volume'
      expect(sliderField.getName()).toBe('volume')
      expect(sliderField.getName('min')).toBe('volume-min')
      expect(sliderField.i('valueItem').max).toBe(0)

      expect(sliderField.hasInstance('sliderEvent')).toBe(false)
      expect(sliderField.hasInstance('icon')).toBe(false)
      expect(sliderField.hasInstance('fieldLabel')).toBe(false)
      expect(sliderField.hasInstance('fieldMessage')).toBe(false)
      expect(sliderField.hasInstance('form')).toBe(false)
    })

    scope.stop()
    ServerStorage.reset()
  })

  it('renders full SliderFieldDesign to deterministic HTML string in SSR with lazy helpers unallocated', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    let logicInstance!: SliderField

    const captureLogic = (instance: SliderField) => {
      logicInstance = instance
    }

    class InspectableSliderField extends SliderField {
      constructor(...args: ConstructorParameters<typeof SliderField>) {
        super(...args)
        captureLogic(this)
      }
    }

    const createAppForProps = (props: SliderFieldProps) => {
      const TestComponent = defineComponent({
        setup() {
          const classesToken = computed<ConstrClasses>(() => ({
            main: { 'd1-sliderField': true }
          }))

          const design = new SliderFieldDesign<SliderFieldComponents, SliderFieldExpose, SliderFieldClasses, SliderFieldProps>(
            'd1.sliderField',
            props,
            {
              classes: classesToken,
              components: {
                fieldLabel: SsrFieldLabelStub,
                fieldMessage: SsrFieldMessageStub,
                icon: SsrIconStub,
                slider: SsrSliderComponent
              }
            },
            InspectableSliderField
          )

          const render = design.render()
          return () => h(render)
        }
      })

      const storage: Record<string, unknown> = {}
      ServerStorage.reset()
      ServerStorage.init(() => storage)

      return createSSRApp(TestComponent)
    }

    const props: SliderFieldProps = {
      min: 0,
      max: 100,
      value: 40,
      showValue: true
    }

    const htmlFirst = await renderToString(createAppForProps(props))
    const htmlSecond = await renderToString(createAppForProps(props))
    ServerStorage.reset()

    // Deterministic output across repeated SSR renders
    expect(htmlFirst).toBe(htmlSecond)
    expect(htmlFirst).toContain('d1-sliderField')
    expect(htmlFirst).toContain('d1-sliderField__body')
    expect(htmlFirst).toContain('d1-sliderField__valueMax')
    expect(htmlFirst).toContain('>40<')
    expect(htmlFirst).toContain('role="slider"')
    expect(htmlFirst).toContain('aria-valuenow="40"')

    // Optional helpers remain unallocated in SSR
    expect(logicInstance.hasInstance('sliderEvent')).toBe(false)
    expect(logicInstance.hasInstance('icon')).toBe(false)
    expect(logicInstance.hasInstance('fieldLabel')).toBe(false)
    expect(logicInstance.hasInstance('form')).toBe(false)
  })

  it('renders all SliderField variants cleanly in SSR without browser leaks', async () => {
    const variants: SliderFieldProps[] = [
      { min: -50, max: 50, value: 0, label: 'Offset', showValueInLabel: true, showValue: true },
      { min: 0, max: 100, multiple: true, value: [20, 80], showInput: true, name: 'range' },
      { min: 0, max: 100, multiple: true, value: [10, 90], showValue: true },
      { min: 0, max: 100, vertical: true, value: 60, labelLeading: 'Min', labelTrailing: 'Max' },
      { min: 0, max: 100, value: 30, disabled: true, readonly: true, showInput: true },
      { min: 0, max: 100, value: 50, icon: 'volume_down', iconTrailing: 'volume_up', helperMessage: 'Help' },
      { min: 0, max: 100, value: 50, isSkeleton: true, showInput: true }
    ]

    for (const props of variants) {
      const TestComponent = defineComponent({
        setup() {
          const design = new SliderFieldDesign<SliderFieldComponents, SliderFieldExpose, SliderFieldClasses, SliderFieldProps>(
            'd1.sliderField',
            props,
            {
              components: {
                fieldLabel: SsrFieldLabelStub,
                fieldMessage: SsrFieldMessageStub,
                icon: SsrIconStub,
                slider: SsrSliderComponent
              }
            }
          )
          const render = design.render()
          return () => h(render)
        }
      })

      const storage: Record<string, unknown> = {}
      ServerStorage.reset()
      ServerStorage.init(() => storage)

      const html = await renderToString(createSSRApp(TestComponent))
      ServerStorage.reset()

      expect(typeof html).toBe('string')
      expect(html).toContain('d1-sliderField__body')
      expect(html).toContain('role="slider"')

      if (props.value === 0) {
        expect(html).toContain('Offset: 0')
        expect(html).toContain('aria-valuenow="0"')
      }

      if (props.showInput && props.multiple) {
        expect(html).toContain('name="range-min"')
        expect(html).toContain('name="range-max"')
      }

      if (props.disabled && props.showInput) {
        expect(html).toContain('disabled')
        expect(html).toContain('readonly')
      }

      if (props.labelLeading) {
        expect(html).toContain('d1-sliderField__labelLeading')
      }

      if (props.icon) {
        expect(html).toContain('d1-icon')
      }
    }
  })
})

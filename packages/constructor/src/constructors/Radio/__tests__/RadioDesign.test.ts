// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { Radio } from '../Radio'
import { RadioDesign } from '../RadioDesign'
import { defaultsRadio, type RadioProps } from '../props'
import type {
  RadioClasses,
  RadioComponents,
  RadioEmits,
  RadioExpose,
  RadioSlots
} from '../types'

const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
})

const MockImage = defineComponent({
  name: 'MockImage',
  props: {
    value: [String, Object],
    active: Boolean
  },
  setup(componentProps) {
    return () => h('span', {
      'class': 'mock-image',
      'data-value': typeof componentProps.value === 'string'
        ? componentProps.value
        : (componentProps.value as Record<string, unknown>)?.value ?? ''
    })
  }
})

const MockFieldMessage = defineComponent({
  name: 'MockFieldMessage',
  props: {
    helperMessage: String,
    validationMessage: String
  },
  setup(componentProps) {
    return () => {
      if (!componentProps.helperMessage && !componentProps.validationMessage) {
        return null
      }

      return h('div', { class: 'mock-field-message' }, componentProps.validationMessage || componentProps.helperMessage)
    }
  }
})

const MockProgress = defineComponent({
  name: 'MockProgress',
  props: {
    visible: Boolean
  },
  setup(componentProps, { attrs }) {
    return () => componentProps.visible
      ? h('span', { class: ['mock-progress', attrs.class] })
      : null
  }
})

const MockRipple = defineComponent({
  name: 'MockRipple',
  setup(_, { attrs }) {
    return () => h('span', { class: ['mock-ripple', attrs.class] })
  }
})

/**
 * Mounts RadioDesign with mocked child components for isolated design-layer testing.
 *
 * Монтирует RadioDesign с моками дочерних компонентов для изолированного тестирования слоя дизайна.
 * @param initialProps initial component properties / начальные свойства компонента
 * @param slots component slots / слоты компонента
 * @param extraAttrs extra host attributes / дополнительные внешние атрибуты
 * @param ItemConstructor optional custom Radio logic constructor / необязательный пользовательский конструктор логики Radio
 * @returns mounted wrapper helpers / вспомогательные методы смонтированного компонента
 */
function mountRadioDesign(
  initialProps: Partial<RadioProps> = {},
  slots: RadioSlots = {},
  extraAttrs: Record<string, unknown> = {},
  ItemConstructor: typeof Radio = Radio
) {
  const props = reactive<RadioProps>({
    ...(defaultsRadio as RadioProps),
    iconCheckbox: 'radio_button_unchecked',
    iconIndeterminate: 'remove',
    ...initialProps
  })

  const emitted: Array<[string, ...unknown[]]> = []
  let exposed!: RadioExpose

  const Host = defineComponent({
    inheritAttrs: false,
    setup(_, { attrs }) {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-radio': true,
          'd1-radio--disabled': Boolean(props.disabled)
        }
      }))

      const design = new RadioDesign<
        RadioComponents,
        RadioExpose,
        RadioClasses,
        RadioProps
      >(
        'd1.radio',
        props,
        {
          emits: ((type: keyof RadioEmits, ...args: unknown[]) => {
            emitted.push([String(type), ...args])
          }) as (type: keyof RadioEmits, ...args: unknown[]) => void,
          classes: classesToken,
          components: {
            image: MockImage,
            fieldMessage: MockFieldMessage,
            progress: MockProgress,
            ripple: MockRipple
          }
        },
        ItemConstructor
      )

      exposed = design.expose()
      const render = design.render()
      return () => h(render, attrs)
    }
  })

  const container = document.createElement('div')
  document.body.appendChild(container)
  const app = createApp({
    render: () => h(Host, extraAttrs, slots as Record<string, () => unknown>)
  })
  app.mount(container)

  mountedCleanups.push(() => {
    app.unmount()
    container.remove()
  })

  return {
    container,
    props,
    emitted,
    exposed
  }
}

describe('RadioDesign', () => {
  it('should render root label, hidden input, native radio input, icon, and ripple without info wrapper when no label or description', () => {
    const { container } = mountRadioDesign({
      name: 'plan'
    }, {}, {
      'class': 'custom-host',
      'data-testid': 'radio-root'
    })

    const root = container.querySelector('label') as HTMLLabelElement
    const hidden = container.querySelector('input[type="hidden"]') as HTMLInputElement
    const input = container.querySelector('input[type="radio"]') as HTMLInputElement

    expect(root).not.toBeNull()
    expect(root.classList.contains('d1-radio')).toBe(true)
    expect(root.classList.contains('custom-host')).toBe(true)
    expect(root.getAttribute('data-testid')).toBe('radio-root')
    expect(root.hasAttribute('aria-labelledby')).toBe(false)
    expect(root.hasAttribute('aria-describedby')).toBe(false)

    expect(hidden.name).toBe('plan')
    expect(hidden.value).toBe('0')

    expect(input).not.toBeNull()
    expect(input.type).toBe('radio')
    expect(input.classList.contains('d1-radio__input')).toBe(true)
    expect(container.querySelector('.d1-radio__info')).toBeNull()
    expect(container.querySelector('.mock-ripple')).not.toBeNull()
    expect(container.querySelector('.d1-skeleton__background')).not.toBeNull()
  })

  it('should bind aria-labelledby, aria-describedby, and render label, description, and validation message', () => {
    const { container } = mountRadioDesign({
      label: 'Space Exploration',
      labelId: 'radio-lbl',
      description: 'Journey to the edge',
      descriptionId: 'radio-desc',
      validationMessage: 'Must select option'
    })

    const root = container.querySelector('label') as HTMLLabelElement
    const input = container.querySelector('input[type="radio"]') as HTMLInputElement

    expect(root.getAttribute('aria-labelledby')).toBe('radio-lbl')
    expect(root.getAttribute('aria-describedby')).toBe('radio-desc')
    expect(input.getAttribute('aria-invalid')).toBe('true')
    expect(container.querySelector('#radio-lbl')?.textContent).toContain('Space Exploration')
    expect(container.querySelector('#radio-desc')?.textContent).toContain('Journey to the edge')
    expect(container.querySelector('.mock-field-message')?.textContent).toBe('Must select option')
  })

  it('should compose inputAttrs class and onInput via mergeProps without overwriting internal bindings', () => {
    const externalOnInput = vi.fn()
    const { container, emitted } = mountRadioDesign({
      label: 'Merge test',
      inputAttrs: {
        class: 'external-radio-input',
        onInput: externalOnInput
      }
    })

    const input = container.querySelector('input[type="radio"]') as HTMLInputElement
    expect(input.classList.contains('d1-radio__input')).toBe(true)
    expect(input.classList.contains('external-radio-input')).toBe(true)

    input.checked = true
    input.dispatchEvent(new Event('input'))

    const eventCalls = externalOnInput.mock.calls.filter(([event]) => event instanceof Event)
    expect(eventCalls).toHaveLength(1)
    expect(emitted.some(([name]) => name === 'update:modelValue')).toBe(true)
  })

  it('should switch icon between checked, indeterminate, and loading, and hide ripple when disabled or loading', async () => {
    const { container, props } = mountRadioDesign({
      modelValue: true,
      label: 'States'
    })

    expect(container.querySelector('.mock-image')?.getAttribute('data-value')).toBe('radio_button_unchecked')

    props.indeterminate = true
    await nextTick()
    expect(container.querySelector('.mock-image')?.getAttribute('data-value')).toBe('remove')

    props.loading = true
    await nextTick()
    expect(container.querySelector('.mock-image')?.getAttribute('data-value')).toBe('')
    expect(container.querySelector('.mock-progress')).not.toBeNull()
    expect(container.querySelector('.mock-ripple')).toBeNull()

    props.loading = false
    props.disabled = true
    await nextTick()
    expect(container.querySelector('.mock-ripple')).toBeNull()
  })

  it('should expose value, getValue, setValue, clear, checkValidity, and getValidationMessage', async () => {
    const { exposed } = mountRadioDesign({
      label: 'Exposed',
      required: true,
      modelValue: false
    })

    expect(exposed.value.value).toBe(false)
    expect(exposed.getValue()).toBe(false)
    expect(exposed.checkValidity()).toBe(false)
    expect(exposed.getValidationMessage()).toBe('')

    exposed.setValue(true)
    await nextTick()
    expect(exposed.getValue()).toBe(true)
    expect(exposed.checkValidity()).toBe(true)

    exposed.clear()
    await nextTick()
    expect(exposed.getValue()).toBeUndefined()
  })

  it('should apply valueVariant and valueVariantHide in exposed getValue and hidden input', () => {
    const { container, exposed } = mountRadioDesign({
      name: 'choice',
      valueVariant: 'space',
      valueVariantHide: 'none',
      modelValue: true
    })

    const hidden = container.querySelector('input[type="hidden"]') as HTMLInputElement
    const input = container.querySelector('input[type="radio"]') as HTMLInputElement

    expect(hidden.value).toBe('none')
    expect(input.value).toBe('space')
    expect(exposed.getValue()).toBe('space')
  })

  it('should support injecting a custom Radio constructor subclass', () => {
    const spy = vi.fn()

    class TrackedRadio extends Radio {
      override readonly onClick = (event: MouseEvent): void => {
        spy()
        if (this.props.readonly) {
          event.preventDefault()
        }
      }
    }

    const { container } = mountRadioDesign({ label: 'DI', readonly: true }, {}, {}, TrackedRadio)
    const input = container.querySelector('input[type="radio"]') as HTMLInputElement
    const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true })
    input.dispatchEvent(clickEvent)

    expect(spy).toHaveBeenCalledTimes(1)
    expect(clickEvent.defaultPrevented).toBe(true)
  })
})

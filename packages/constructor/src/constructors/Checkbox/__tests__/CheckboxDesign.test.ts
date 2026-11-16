// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { CheckboxDesign } from '../CheckboxDesign'
import { defaultsCheckbox, type CheckboxProps } from '../props'
import type {
  CheckboxClasses,
  CheckboxComponents,
  CheckboxEmits,
  CheckboxExpose,
  CheckboxSlots
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
 * Mounts CheckboxDesign with mocked child components for isolated design-layer testing.
 *
 * Монтирует CheckboxDesign с моками дочерних компонентов для изолированного тестирования слоя дизайна.
 * @param initialProps initial component properties / начальные свойства компонента
 * @param slots component slots / слоты компонента
 * @param extraAttrs extra host attributes / дополнительные внешние атрибуты
 * @returns mounted wrapper helpers / вспомогательные методы смонтированного компонента
 */
function mountCheckboxDesign(
  initialProps: Partial<CheckboxProps> = {},
  slots: CheckboxSlots = {},
  extraAttrs: Record<string, unknown> = {}
) {
  const props = reactive<CheckboxProps>({
    ...(defaultsCheckbox as CheckboxProps),
    iconCheckbox: 'check',
    iconIndeterminate: 'remove',
    ...initialProps
  })

  const emitted: Array<[string, ...unknown[]]> = []
  let exposed!: CheckboxExpose

  const Host = defineComponent({
    inheritAttrs: false,
    setup(_, { attrs }) {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-checkbox': true,
          'd1-checkbox--disabled': Boolean(props.disabled)
        }
      }))

      const design = new CheckboxDesign<
        CheckboxComponents,
        CheckboxExpose,
        CheckboxClasses,
        CheckboxProps
      >(
        'd1.checkbox',
        props,
        {
          emits: ((type: keyof CheckboxEmits, ...args: unknown[]) => {
            emitted.push([String(type), ...args])
          }) as (type: keyof CheckboxEmits, ...args: unknown[]) => void,
          classes: classesToken,
          components: {
            image: MockImage,
            fieldMessage: MockFieldMessage,
            progress: MockProgress,
            ripple: MockRipple
          }
        }
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

describe('CheckboxDesign', () => {
  it('should render root label, hidden input, native checkbox, icon, and ripple without info wrapper when no label or description', () => {
    const { container } = mountCheckboxDesign({
      name: 'terms'
    }, {}, {
      'class': 'custom-host',
      'data-testid': 'cb-root'
    })

    const root = container.querySelector('label') as HTMLLabelElement
    const hidden = container.querySelector('input[type="hidden"]') as HTMLInputElement
    const input = container.querySelector('input[type="checkbox"]') as HTMLInputElement

    expect(root).not.toBeNull()
    expect(root.classList.contains('d1-checkbox')).toBe(true)
    expect(root.classList.contains('custom-host')).toBe(true)
    expect(root.getAttribute('data-testid')).toBe('cb-root')
    expect(root.hasAttribute('aria-labelledby')).toBe(false)
    expect(root.hasAttribute('aria-describedby')).toBe(false)

    expect(hidden.name).toBe('terms')
    expect(hidden.value).toBe('0')

    expect(input.type).toBe('checkbox')
    expect(input.classList.contains('d1-checkbox__input')).toBe(true)
    expect(container.querySelector('.d1-checkbox__info')).toBeNull()
    expect(container.querySelector('.mock-ripple')).not.toBeNull()
    expect(container.querySelector('.d1-skeleton__background')).not.toBeNull()
  })

  it('should bind aria-labelledby, aria-describedby, and render label, description, and validation message', () => {
    const { container } = mountCheckboxDesign({
      label: 'Subscribe',
      labelId: 'cb-lbl',
      description: 'Weekly digest',
      descriptionId: 'cb-desc',
      validationMessage: 'Must accept'
    })

    const root = container.querySelector('label') as HTMLLabelElement
    const input = container.querySelector('input[type="checkbox"]') as HTMLInputElement

    expect(root.getAttribute('aria-labelledby')).toBe('cb-lbl')
    expect(root.getAttribute('aria-describedby')).toBe('cb-desc')
    expect(input.getAttribute('aria-invalid')).toBe('true')
    expect(container.querySelector('#cb-lbl')?.textContent).toContain('Subscribe')
    expect(container.querySelector('#cb-desc')?.textContent).toContain('Weekly digest')
    expect(container.querySelector('.mock-field-message')?.textContent).toBe('Must accept')
  })

  it('should compose inputAttrs class and onInput via mergeProps without overwriting internal bindings', () => {
    const externalOnInput = vi.fn()
    const { container, emitted } = mountCheckboxDesign({
      label: 'Merge test',
      inputAttrs: {
        class: 'external-input',
        onInput: externalOnInput
      }
    })

    const input = container.querySelector('input[type="checkbox"]') as HTMLInputElement
    expect(input.classList.contains('d1-checkbox__input')).toBe(true)
    expect(input.classList.contains('external-input')).toBe(true)

    input.checked = true
    input.dispatchEvent(new Event('input'))

    const eventCalls = externalOnInput.mock.calls.filter(([event]) => event instanceof Event)
    expect(eventCalls).toHaveLength(1)
    expect(emitted.some(([name]) => name === 'update:modelValue')).toBe(true)
  })

  it('should switch icon between checked, indeterminate, and loading, and hide ripple when disabled or loading', async () => {
    const { container, props } = mountCheckboxDesign({
      modelValue: true,
      label: 'States'
    })

    expect(container.querySelector('.mock-image')?.getAttribute('data-value')).toBe('check')

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
    const { exposed } = mountCheckboxDesign({
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
    const { container, exposed } = mountCheckboxDesign({
      name: 'choice',
      valueVariant: 'accepted',
      valueVariantHide: 'declined',
      modelValue: true
    })

    const hidden = container.querySelector('input[type="hidden"]') as HTMLInputElement
    const input = container.querySelector('input[type="checkbox"]') as HTMLInputElement

    expect(hidden.value).toBe('declined')
    expect(input.value).toBe('accepted')
    expect(exposed.getValue()).toBe('accepted')
  })
})

// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { Switch } from '../Switch'
import { SwitchDesign } from '../SwitchDesign'
import { defaultsSwitch, type SwitchProps } from '../props'
import type {
  SwitchClasses,
  SwitchComponents,
  SwitchEmits,
  SwitchExpose,
  SwitchSlots
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
 * Mounts SwitchDesign with mocked child components for isolated design-layer testing.
 *
 * Монтирует SwitchDesign с моками дочерних компонентов для изолированного тестирования слоя дизайна.
 * @param initialProps initial component properties / начальные свойства компонента
 * @param slots component slots / слоты компонента
 * @param extraAttrs extra host attributes / дополнительные внешние атрибуты
 * @param ItemConstructor optional custom Switch logic constructor / необязательный пользовательский конструктор логики Switch
 * @returns mounted wrapper helpers / вспомогательные методы смонтированного компонента
 */
function mountSwitchDesign(
  initialProps: Partial<SwitchProps> = {},
  slots: SwitchSlots = {},
  extraAttrs: Record<string, unknown> = {},
  ItemConstructor: typeof Switch = Switch
) {
  const props = reactive<SwitchProps>({
    ...(defaultsSwitch as SwitchProps),
    iconCheckbox: 'check',
    iconIndeterminate: 'remove',
    ...initialProps
  })

  const emitted: Array<[string, ...unknown[]]> = []
  let exposed!: SwitchExpose
  let designInstance!: SwitchDesign<SwitchComponents, SwitchExpose, SwitchClasses, SwitchProps>

  const Host = defineComponent({
    inheritAttrs: false,
    setup(_, { attrs }) {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-switch': true,
          'd1-switch--disabled': Boolean(props.disabled)
        }
      }))

      designInstance = new SwitchDesign<
        SwitchComponents,
        SwitchExpose,
        SwitchClasses,
        SwitchProps
      >(
        'd1.switch',
        props,
        {
          emits: ((type: keyof SwitchEmits, ...args: unknown[]) => {
            emitted.push([String(type), ...args])
          }) as (type: keyof SwitchEmits, ...args: unknown[]) => void,
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

      exposed = designInstance.expose()
      const render = designInstance.render()
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
    exposed,
    designInstance
  }
}

describe('SwitchDesign', () => {
  it('should render root label, hidden input, native checkbox, track wrapping item, icon, and ripple without info wrapper when no label or description', () => {
    const { container, designInstance } = mountSwitchDesign({
      name: 'notifications'
    }, {}, {
      'class': 'custom-host',
      'data-testid': 'switch-root'
    })

    const root = container.querySelector('label') as HTMLLabelElement
    const hidden = container.querySelector('input[type="hidden"]') as HTMLInputElement
    const input = container.querySelector('input[type="checkbox"]') as HTMLInputElement
    const track = container.querySelector('.d1-switch__track') as HTMLSpanElement
    const item = track?.querySelector('.d1-switch__item') as HTMLSpanElement
    const icon = item?.querySelector('.d1-switch__icon') as HTMLSpanElement

    expect(root).not.toBeNull()
    expect(root.classList.contains('d1-switch')).toBe(true)
    expect(root.classList.contains('custom-host')).toBe(true)
    expect(root.getAttribute('data-testid')).toBe('switch-root')
    expect(root.hasAttribute('aria-labelledby')).toBe(false)
    expect(root.hasAttribute('aria-describedby')).toBe(false)

    expect(hidden.name).toBe('notifications')
    expect(hidden.value).toBe('0')

    expect(input).not.toBeNull()
    expect(input.type).toBe('checkbox')
    expect(input.getAttribute('role')).toBe('switch')
    expect(input.classList.contains('d1-switch__input')).toBe(true)

    expect(track).not.toBeNull()
    expect(track.classList.contains('d1-skeleton__background')).toBe(true)
    expect(item).not.toBeNull()
    expect(item.getAttribute('aria-hidden')).toBe('true')
    expect(icon).not.toBeNull()
    expect(icon.classList.contains('d1-skeleton__background')).toBe(true)

    expect(container.querySelector('.d1-switch__info')).toBeNull()
    expect(container.querySelector('.mock-ripple')).not.toBeNull()
    expect(designInstance.renderChecked()).toHaveLength(1)
  })

  it('should bind aria-labelledby, aria-describedby, and render label, description, and validation message', () => {
    const { container } = mountSwitchDesign({
      label: 'Enable alerts',
      labelId: 'switch-lbl',
      description: 'Receive instant notifications',
      descriptionId: 'switch-desc',
      validationMessage: 'Must confirm setting'
    })

    const root = container.querySelector('label') as HTMLLabelElement
    const input = container.querySelector('input[type="checkbox"]') as HTMLInputElement

    expect(root.getAttribute('aria-labelledby')).toBe('switch-lbl')
    expect(root.getAttribute('aria-describedby')).toBe('switch-desc')
    expect(input.getAttribute('aria-invalid')).toBe('true')
    expect(container.querySelector('#switch-lbl')?.textContent).toContain('Enable alerts')
    expect(container.querySelector('#switch-desc')?.textContent).toContain('Receive instant notifications')
    expect(container.querySelector('.mock-field-message')?.textContent).toBe('Must confirm setting')
  })

  it('should compose inputAttrs class and onInput via mergeProps without overwriting internal bindings', () => {
    const externalOnInput = vi.fn()
    const { container, emitted } = mountSwitchDesign({
      label: 'Merge test',
      inputAttrs: {
        class: 'external-switch-input',
        onInput: externalOnInput
      }
    })

    const input = container.querySelector('input[type="checkbox"]') as HTMLInputElement
    expect(input.classList.contains('d1-switch__input')).toBe(true)
    expect(input.classList.contains('external-switch-input')).toBe(true)

    input.checked = true
    input.dispatchEvent(new Event('input'))

    const eventCalls = externalOnInput.mock.calls.filter(([event]) => event instanceof Event)
    expect(eventCalls).toHaveLength(1)
    expect(emitted.some(([name]) => name === 'update:modelValue')).toBe(true)
  })

  it('should apply skeleton background class on track and icon when isSkeleton toggles', async () => {
    const { container, props } = mountSwitchDesign({
      label: 'Skeleton switch',
      isSkeleton: false
    })

    const track = container.querySelector('.d1-switch__track') as HTMLSpanElement
    const icon = container.querySelector('.d1-switch__icon') as HTMLSpanElement
    expect(track.classList.contains('d1-skeleton__background')).toBe(true)
    expect(icon.classList.contains('d1-skeleton__background')).toBe(true)
    expect(container.querySelector('.d1-switch__label')?.className).not.toContain('d1-skeleton__text')

    props.isSkeleton = true
    await nextTick()

    expect(track.classList.contains('d1-skeleton__background')).toBe(true)
    expect(icon.classList.contains('d1-skeleton__background')).toBe(true)
    expect(container.querySelector('.d1-switch__label')?.className).toContain('d1-skeleton__text')
  })

  it('should switch icon between checked, indeterminate, and loading, and hide ripple when disabled or loading', async () => {
    const { container, props } = mountSwitchDesign({
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
    const { exposed } = mountSwitchDesign({
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
    const { container, exposed } = mountSwitchDesign({
      name: 'mode',
      valueVariant: 'dark',
      valueVariantHide: 'light',
      modelValue: true
    })

    const hidden = container.querySelector('input[type="hidden"]') as HTMLInputElement
    const input = container.querySelector('input[type="checkbox"]') as HTMLInputElement

    expect(hidden.value).toBe('light')
    expect(input.value).toBe('dark')
    expect(exposed.getValue()).toBe('dark')
  })

  it('should support injecting a custom Switch constructor subclass', () => {
    const spy = vi.fn()

    class TrackedSwitch extends Switch {
      override readonly onClick = (event: MouseEvent): void => {
        spy()
        if (this.props.readonly) {
          event.preventDefault()
        }
      }
    }

    const { container } = mountSwitchDesign({ label: 'DI', readonly: true }, {}, {}, TrackedSwitch)
    const input = container.querySelector('input[type="checkbox"]') as HTMLInputElement
    const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true })
    input.dispatchEvent(clickEvent)

    expect(spy).toHaveBeenCalledTimes(1)
    expect(clickEvent.defaultPrevented).toBe(true)
  })
})

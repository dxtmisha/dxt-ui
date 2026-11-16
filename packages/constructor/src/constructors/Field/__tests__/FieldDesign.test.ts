// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, mergeProps, nextTick, reactive } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { FieldDesign } from '../FieldDesign'
import { defaultsField, type FieldProps } from '../props'
import type {
  FieldClasses,
  FieldComponents,
  FieldExpose,
  FieldSlots
} from '../types'

const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
})

const MockIcon = defineComponent({
  name: 'MockIcon',
  props: {
    icon: [String, Object],
    ariaLabel: String
  },
  setup(componentProps, { attrs }) {
    return () => h('button', mergeProps({
      'type': 'button',
      'class': 'mock-icon',
      'aria-label': componentProps.ariaLabel
    }, attrs), String(componentProps.icon ?? 'icon'))
  }
})

const MockFieldLabel = defineComponent({
  name: 'MockFieldLabel',
  props: {
    label: [String, Number],
    required: Boolean,
    for: String
  },
  setup(componentProps) {
    return () => h('label', {
      class: 'mock-field-label',
      for: componentProps.for
    }, String(componentProps.label ?? ''))
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

      return h('div', {
        class: 'mock-field-message'
      }, componentProps.validationMessage || componentProps.helperMessage)
    }
  }
})

const MockProgress = defineComponent({
  name: 'MockProgress',
  props: {
    visible: Boolean
  },
  setup(componentProps) {
    return () => componentProps.visible
      ? h('span', { class: 'mock-progress' }, 'loading')
      : null
  }
})

/**
 * Mounts FieldDesign inside a test Vue app.
 *
 * Монтирует FieldDesign внутри тестового приложения Vue.
 * @param initialProps initial component properties / начальные свойства компонента
 * @param customSlots slot renderers / функции рендеринга слотов
 * @param extraAttrs external HTML attributes / внешние HTML-атрибуты
 * @returns container, reactive props, and exposed API / контейнер, реактивные свойства и экспонированный API
 */
async function mountFieldDesign(
  initialProps: FieldProps = {},
  customSlots: FieldSlots = {},
  extraAttrs: Record<string, unknown> = {}
) {
  const props = reactive<FieldProps>({
    ...(defaultsField as FieldProps),
    ...initialProps
  })

  let exposed!: FieldExpose & { elementHtml: { value: HTMLLabelElement | undefined } }

  const Inner = defineComponent({
    inheritAttrs: false,
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-field': true,
          'd1-field--classic': props.classic && !props.outlined,
          'd1-field--outlined': props.outlined
        }
      }))

      const design = new FieldDesign<
        FieldComponents,
        FieldExpose,
        FieldClasses,
        FieldProps
      >('d1.field', props, {
        classes: classesToken,
        components: {
          icon: MockIcon,
          fieldLabel: MockFieldLabel,
          fieldMessage: MockFieldMessage,
          progress: MockProgress
        }
      })

      exposed = design.expose() as unknown as FieldExpose & { elementHtml: { value: HTMLLabelElement | undefined } }
      return design.render()
    }
  })

  const Wrapper = defineComponent({
    setup() {
      return () => h(Inner, extraAttrs, customSlots as Record<string, () => unknown>)
    }
  })

  const container = document.createElement('div')
  const app = createApp(Wrapper)
  app.mount(container)
  mountedCleanups.push(() => app.unmount())
  await nextTick()

  return { container, props, exposed }
}

describe('FieldDesign', () => {
  it('should render classic div container with FieldLabel, body, border, and exposed elementHtml', async () => {
    const { container, exposed } = await mountFieldDesign({
      classic: true,
      id: 'classic-id',
      label: 'Classic Label',
      required: true
    })

    const root = container.firstElementChild as HTMLElement
    expect(root.tagName).toBe('DIV')
    expect(root.getAttribute('for')).toBeNull()
    expect(exposed.elementHtml.value).toBe(root)

    expect(root.querySelector('.mock-field-label')?.textContent).toBe('Classic Label')
    expect(root.querySelector('.mock-field-label')?.getAttribute('for')).toBe('classic-id')
    expect(root.querySelector('.d1-field__body')).not.toBeNull()
    expect(root.querySelector('.d1-field__required')).not.toBeNull()
    expect(root.querySelector('.d1-field__body__border')).not.toBeNull()
  })

  it('should render non-classic label container with for attribute and merge external attrs/classes/styles', async () => {
    const { container } = await mountFieldDesign(
      {
        classic: false,
        outlined: true,
        id: 'outlined-id',
        label: 'Outlined Label'
      },
      {},
      {
        'class': 'external-class',
        'style': { marginTop: '8px' },
        'data-test': 'field-attr'
      }
    )

    const root = container.firstElementChild as HTMLElement
    expect(root.tagName).toBe('LABEL')
    expect(root.getAttribute('for')).toBe('outlined-id')
    expect(root.classList.contains('d1-field')).toBe(true)
    expect(root.classList.contains('d1-field--outlined')).toBe(true)
    expect(root.classList.contains('external-class')).toBe(true)
    expect(root.style.marginTop).toBe('8px')
    expect(root.getAttribute('data-test')).toBe('field-attr')
    expect(root.querySelector('.mock-field-label')).toBeNull()
  })

  it('should omit invalid min-width inline style when inputElement is absent for caption space', async () => {
    const { container } = await mountFieldDesign({
      classic: true,
      caption: 'Optional',
      value: 'typed'
    })

    const spaceInput = container.querySelector('.d1-field__body__scoreboard__input') as HTMLElement
    expect(spaceInput).not.toBeNull()
    expect(spaceInput.textContent).toBe('typed')
    expect(spaceInput.getAttribute('style')).toBeNull()
  })

  it('should render cancel, arrow, leading/trailing slots, prefix, suffix, progress, and message', async () => {
    const { container } = await mountFieldDesign(
      {
        classic: true,
        icon: 'search',
        cancel: 'always',
        iconClose: 'close',
        prefix: '$',
        suffix: 'USD',
        loading: true,
        helperMessage: 'Amount in USD'
      },
      {
        leading: () => h('span', { class: 'slot-leading' }, 'L'),
        trailing: () => h('span', { class: 'slot-trailing' }, 'T'),
        default: control => h('input', { ...control.binds, 'data-length': '1' })
      }
    )

    expect(container.querySelector('.slot-leading')?.textContent).toBe('L')
    expect(container.querySelector('.slot-trailing')?.textContent).toBe('T')
    expect(container.querySelector('.d1-field__prefix')?.textContent).toBe('$')
    expect(container.querySelector('.d1-field__suffix')?.textContent).toBe('USD')
    expect(container.querySelector('.mock-progress')).not.toBeNull()
    expect(container.querySelector('.mock-field-message')?.textContent).toBe('Amount in USD')
    expect(container.querySelectorAll('.mock-icon')).toHaveLength(2)
  })
})

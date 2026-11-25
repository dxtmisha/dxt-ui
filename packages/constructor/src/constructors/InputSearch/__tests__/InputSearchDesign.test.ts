// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, ref, type App } from 'vue'

import { InputSearchDesign } from '../InputSearchDesign'
import type { InputSearchProps } from '../props'
import type { InputSearchClasses, InputSearchComponents, InputSearchExpose } from '../types'

const FieldStub = defineComponent({
  props: {
    loading: { type: Boolean, default: false },
    validationMessage: { type: String, default: undefined },
    value: { type: String, default: undefined }
  },
  setup(props, { slots }) {
    return () => h(
      'div',
      {
        'class': 'd1-field',
        'data-loading': String(props.loading),
        'data-validation': props.validationMessage
      },
      [
        slots.label ? h('div', { class: 'slot-label' }, slots.label({})) : null,
        slots.default ? slots.default({ className: 'd1-field__input', binds: { 'data-input': true } }) : null
      ]
    )
  }
})

describe('InputSearchDesign', () => {
  const mountedApps: Array<{ app: App, container: HTMLElement }> = []

  afterEach(() => {
    while (mountedApps.length > 0) {
      const entry = mountedApps.pop()
      entry?.app.unmount()
      entry?.container.remove()
    }
    vi.restoreAllMocks()
  })

  it('renders Field with search input, forwards custom slots, and exposes value/validation API', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    const exposedRef = ref<InputSearchExpose | undefined>()

    const Component = defineComponent({
      props: {
        value: { type: String, default: 'shoes' },
        validationMessage: { type: String, default: 'Required field' },
        type: { type: String, default: 'search' }
      },
      setup(props, { expose }) {
        const design = new InputSearchDesign<
          InputSearchComponents,
          InputSearchExpose,
          InputSearchClasses,
          InputSearchProps
        >(
          'd1.inputSearch',
          props as Readonly<InputSearchProps>,
          {
            classes: computed(() => ({
              main: { 'd1-inputSearch': true }
            })),
            components: {
              field: FieldStub as never
            }
          } as never
        )

        expose(design.expose())
        return design.render()
      }
    })

    const app = createApp({
      render: () => h(Component as never, { ref: exposedRef }, {
        label: () => h('span', 'Search label')
      })
    })
    app.mount(container)
    mountedApps.push({ app, container })
    await nextTick()

    expect(container.querySelector('.slot-label')?.textContent).toBe('Search label')
    const input = container.querySelector<HTMLInputElement>('input[data-input="true"]')
    expect(input).not.toBeNull()
    expect(input?.getAttribute('type')).toBe('search')
    expect(input?.value).toBe('shoes')
    expect(exposedRef.value?.getValue()).toBe('shoes')
  })
})

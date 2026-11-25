// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, ref, type App } from 'vue'

import { InputSearchDesign } from '../InputSearchDesign'
import type { InputSearchProps } from '../props'
import type { InputSearchClasses, InputSearchComponents, InputSearchExpose } from '../types'

const FieldInteractiveStub = defineComponent({
  props: {
    loading: { type: Boolean, default: false },
    cancelShow: { type: Boolean, default: true },
    value: { type: [String, Number], default: '' }
  },
  emits: ['click'],
  setup(props, { emit, slots }) {
    return () => h(
      'div',
      {
        'class': 'd1-field',
        'data-loading': String(props.loading),
        'data-scoreboard': true
      },
      [
        h(
          'div',
          { 'data-element': 'scoreboard' },
          [
            slots.default ? slots.default({ className: 'd1-field__input', binds: { 'data-input': true } }) : null,
            h('button', {
              type: 'button',
              class: 'test-cancel',
              onClick: (event: MouseEvent) => emit('click', event, { type: 'cancel' })
            }, 'Clear')
          ]
        )
      ]
    )
  }
})

describe('InputSearch (Integration)', () => {
  const mountedApps: Array<{ app: App, container: HTMLElement }> = []

  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    while (mountedApps.length > 0) {
      const entry = mountedApps.pop()
      entry?.app.unmount()
      entry?.container.remove()
    }
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  const mountInputSearch = (props: InputSearchProps = {}) => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    const exposedRef = ref<InputSearchExpose | undefined>()
    const emitted: Record<string, unknown[][]> = {}
    const recordEmit = (name: string, ...args: unknown[]) => {
      if (!emitted[name]) {
        emitted[name] = []
      }
      emitted[name].push(args)
    }

    const Component = defineComponent({
      inheritAttrs: false,
      props: {
        value: { type: String, default: '' },
        modelValue: { type: String, default: undefined },
        type: { type: String, default: 'search' },
        delay: { type: Number, default: 320 },
        minQuery: { type: Number, default: 2 },
        disabled: { type: Boolean, default: false }
      },
      emits: ['update:value', 'update:modelValue', 'input', 'inputLite', 'change', 'changeLite'],
      setup(componentProps, { expose }) {
        const design = new InputSearchDesign<
          InputSearchComponents,
          InputSearchExpose,
          InputSearchClasses,
          InputSearchProps
        >(
          'd1.inputSearch',
          componentProps as Readonly<InputSearchProps>,
          {
            emits: recordEmit as never,
            classes: computed(() => ({
              main: { 'd1-inputSearch': true }
            })),
            components: {
              field: FieldInteractiveStub as never
            }
          }
        )

        expose(design.expose())
        return design.render()
      }
    })

    const app = createApp({
      render: () => h(Component as never, { ...props, ref: exposedRef })
    })
    app.mount(container)
    mountedApps.push({ app, container })

    return {
      container,
      exposed: exposedRef,
      emitted
    }
  }

  it('debounces typing, flushes on Enter, ignores minQuery violations, and stops pending timer on cancel', async () => {
    const { container, exposed, emitted } = mountInputSearch({
      delay: 300,
      minQuery: 2,
      value: 'start'
    })
    await nextTick()

    const field = container.querySelector('.d1-field')!
    const input = container.querySelector<HTMLInputElement>('input')!

    input.value = 'a'
    input.dispatchEvent(new InputEvent('input'))
    await nextTick()
    expect(field.getAttribute('data-loading')).toBe('false')
    vi.advanceTimersByTime(300)
    expect(emitted.input).toBeUndefined()

    input.value = 'vue'
    input.dispatchEvent(new InputEvent('input'))
    await nextTick()
    expect(field.getAttribute('data-loading')).toBe('true')
    expect(emitted.input).toBeUndefined()

    vi.advanceTimersByTime(300)
    await nextTick()
    expect(field.getAttribute('data-loading')).toBe('false')
    expect(exposed.value?.getValue()).toBe('vue')
    expect(emitted['update:modelValue']?.at(-1)).toEqual(['vue'])

    input.value = 'updated'
    input.dispatchEvent(new InputEvent('input'))
    await nextTick()
    expect(field.getAttribute('data-loading')).toBe('true')

    container.querySelector<HTMLButtonElement>('.test-cancel')?.click()
    await nextTick()
    expect(field.getAttribute('data-loading')).toBe('false')
    expect(exposed.value?.getValue()).toBeUndefined()

    vi.advanceTimersByTime(300)
    await nextTick()
    expect(exposed.value?.getValue()).toBeUndefined()
  })
})

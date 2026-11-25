// @vitest-environment jsdom
import { describe, it, expect, vi, afterEach } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, ref, type App } from 'vue'

import { InputCodeItemDesign } from '../InputCodeItemDesign'
import type { InputCodeItemProps } from '../props'
import type { InputCodeItemClasses, InputCodeItemComponents, InputCodeItemExpose } from '../types'

describe('InputCodeItem (Integration)', () => {
  const mountedApps: Array<{ app: App, container: HTMLElement }> = []

  afterEach(() => {
    while (mountedApps.length > 0) {
      const entry = mountedApps.pop()
      entry?.app.unmount()
      entry?.container.remove()
    }
    vi.restoreAllMocks()
  })

  const mountInputCodeItem = (
    props: InputCodeItemProps = {},
    attrs: Record<string, unknown> = {}
  ) => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    const exposedRef = ref<InputCodeItemExpose | undefined>()
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
        disabled: { type: Boolean, default: false },
        success: { type: Boolean, default: false },
        error: { type: Boolean, default: false },
        hide: { type: Boolean, default: false },
        isSkeleton: { type: Boolean, default: false },
        move: { type: Boolean, default: true },
        name: { type: String, default: 'item-code' },
        index: { type: [Number, String], default: 0 },
        autocomplete: { type: String, default: 'one-time-code' },
        match: { type: RegExp, default: () => /[0-9]/ },
        inputMode: { type: String, default: 'numeric' },
        placeholder: { type: String, default: ' ' },
        tabindex: { type: [Number, String], default: undefined },
        textSymbol: { type: String, default: undefined }
      },
      emits: ['focus', 'input', 'paste', 'backspace'],
      setup(componentProps, { expose }) {
        const design = new InputCodeItemDesign<
          InputCodeItemComponents,
          InputCodeItemExpose,
          InputCodeItemClasses,
          InputCodeItemProps
        >(
          'd1.inputCodeItem',
          componentProps as Readonly<InputCodeItemProps>,
          {
            emits: recordEmit as never,
            classes: computed(() => ({ main: { 'd1-inputCodeItem': true } }))
          }
        )

        expose(design.expose())
        return design.render()
      }
    })

    const app = createApp({
      render: () => h(Component as never, { ...props, ...attrs, ref: exposedRef })
    })

    app.mount(container)
    mountedApps.push({ app, container })

    return {
      container,
      rootElement: container.firstElementChild as HTMLElement,
      exposed: exposedRef,
      emitted
    }
  }

  it('should render input, handle character input, and emit input event', async () => {
    const { rootElement, exposed, emitted } = mountInputCodeItem({
      index: 1,
      textSymbol: 'Symbol [index]'
    })
    const input = rootElement.querySelector('input') as HTMLInputElement

    expect(input).not.toBeNull()
    expect(input.getAttribute('name')).toBe('item-code__1')
    expect(input.getAttribute('aria-label')).toBe('Symbol 2')
    expect(rootElement.querySelector('.d1-inputCodeItem__sub')).toBeNull()

    input.value = '7'
    input.dispatchEvent(new InputEvent('input', { bubbles: true }))
    await nextTick()

    expect(emitted.input?.[0]).toEqual([1, '7'])
    expect(exposed.value?.getValue()).toBe('7')

    exposed.value?.reset()
    expect(exposed.value?.getValue()).toBe('')
  })

  it('should render mask sub element when hide is true and support skeleton/disabled/error states', () => {
    const { rootElement } = mountInputCodeItem(
      {
        hide: true,
        disabled: true,
        error: true,
        isSkeleton: true
      },
      { class: 'extra-cell' }
    )

    expect(rootElement.classList.contains('d1-inputCodeItem')).toBe(true)
    expect(rootElement.classList.contains('extra-cell')).toBe(true)
    expect(rootElement.classList.contains('d1-skeleton__background')).toBe(true)
    expect(rootElement.querySelector('.d1-inputCodeItem__sub')).not.toBeNull()

    const input = rootElement.querySelector('input') as HTMLInputElement
    expect(input.getAttribute('aria-disabled')).toBe('true')
    expect(input.getAttribute('aria-invalid')).toBe('true')
    expect(input.disabled).toBe(true)
  })
})

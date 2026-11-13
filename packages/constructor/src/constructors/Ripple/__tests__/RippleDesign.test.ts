// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, createSSRApp, defineComponent, h, nextTick, reactive } from 'vue'
import { renderToString } from 'vue/server-renderer'
import type { ConstrClasses } from '@dxtmisha/functional'

import { Ripple } from '../Ripple'
import { RippleDesign } from '../RippleDesign'
import type { RippleProps } from '../props'
import type { RippleClasses, RippleComponents, RippleExpose } from '../types'

describe('RippleDesign', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders the decorative root and delegates pointer events and exposed methods', () => {
    const pointerHandler = vi.fn()
    /** Ripple with an observable event handler / Ripple с отслеживаемым обработчиком события */
    class TestRipple extends Ripple {
      override readonly onPointerdown = pointerHandler
    }

    const host = document.createElement('div')
    document.body.appendChild(host)
    let exposed!: RippleExpose
    const component = defineComponent({
      setup() {
        const design = new RippleDesign<RippleComponents, RippleExpose, RippleClasses, RippleProps>(
          'd1.ripple',
          {},
          { classes: computed<ConstrClasses>(() => ({ main: { 'd1-ripple': true } })) },
          TestRipple
        )
        exposed = design.expose()
        return design.render()
      }
    })
    const app = createApp(component)

    try {
      app.mount(host)
      const root = host.querySelector('span.d1-ripple')
      expect(root?.getAttribute('aria-hidden')).toBe('true')
      root?.dispatchEvent(new Event('pointerdown'))
      expect(pointerHandler).toHaveBeenCalledOnce()

      exposed.add({ x: 4, y: 8 })
      const wave = root?.querySelector<HTMLElement>('.d1-ripple__item')
      expect(wave?.style.getPropertyValue('--d1-ripple-sys-x')).toBe('4px')
      expect(wave?.style.getPropertyValue('--d1-ripple-sys-y')).toBe('8px')
    } finally {
      app.unmount()
      host.remove()
    }
  })

  it('applies reactive disabled state to the exposed wave methods', async () => {
    const props = reactive<RippleProps>({ disabled: true })
    const host = document.createElement('div')
    document.body.appendChild(host)
    let exposed!: RippleExpose
    const component = defineComponent({
      setup() {
        const design = new RippleDesign<RippleComponents, RippleExpose, RippleClasses, RippleProps>(
          'd1.ripple', props
        )
        exposed = design.expose()
        return design.render()
      }
    })
    const app = createApp(component)

    try {
      app.mount(host)
      const root = host.querySelector('span')
      exposed.addCenter()
      expect(root?.children).toHaveLength(0)

      props.disabled = false
      await nextTick()
      exposed.addCenter()
      expect(root?.children).toHaveLength(1)
    } finally {
      app.unmount()
      host.remove()
    }
  })

  it('forwards attributes and preserves both pointer handlers', async () => {
    const listener = vi.fn()
    const attributes = reactive({ 'id': 'first', 'data-testid': 'ripple', 'aria-hidden': 'false' })
    const component = defineComponent({
      inheritAttrs: false,
      setup() {
        const design = new RippleDesign<RippleComponents, RippleExpose, RippleClasses, RippleProps>('d1.ripple', {})
        return design.render()
      }
    })
    const host = document.createElement('div')
    document.body.appendChild(host)
    const app = createApp(defineComponent({
      setup: () => () => h(component, { ...attributes, onPointerdown: listener })
    }))

    try {
      app.mount(host)
      const root = host.querySelector('span')
      expect(root?.getAttribute('data-testid')).toBe('ripple')
      expect(root?.id).toBe('first')
      expect(root?.getAttribute('aria-hidden')).toBe('true')

      const event = new MouseEvent('pointerdown', { button: 0 })
      Object.defineProperty(event, 'isPrimary', { value: true })
      root?.dispatchEvent(event)
      expect(listener).toHaveBeenCalledOnce()
      expect(root?.children).toHaveLength(1)

      attributes.id = 'updated'
      await nextTick()
      expect(root?.id).toBe('updated')
    } finally {
      app.unmount()
      host.remove()
    }
  })

  it.each(['direct', 'wrapper'] as const)(
    'hydrates the %s render with an explicit aria-hidden attribute without mismatch',
    async (mode) => {
      const component = defineComponent({
        setup() {
          const design = new RippleDesign<RippleComponents, RippleExpose, RippleClasses, RippleProps>('d1.ripple', {})
          const render = design.render()
          return mode === 'direct' ? render : () => h(render)
        }
      })
      const root = defineComponent({
        setup: () => () => h(component, { 'data-testid': 'ripple-hydration', 'aria-hidden': 'false' })
      })
      const html = await renderToString(createSSRApp(root))
      const expectedAriaHidden = mode === 'direct' ? 'false' : 'true'
      const host = document.createElement('div')
      host.innerHTML = html
      document.body.appendChild(host)
      const existing = host.firstElementChild
      const app = createSSRApp(root)

      try {
        expect(existing?.getAttribute('aria-hidden')).toBe(expectedAriaHidden)
        app.mount(host)
        await nextTick()
        expect(host.firstElementChild).toBe(existing)
        expect(host.querySelector('span')?.getAttribute('data-testid')).toBe('ripple-hydration')
        expect(host.querySelector('span')?.getAttribute('aria-hidden')).toBe(expectedAriaHidden)
      } finally {
        app.unmount()
        host.remove()
      }
    }
  )
})

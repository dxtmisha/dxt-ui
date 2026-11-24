// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive } from 'vue'

import { ClientOnly } from '../ClientOnly'
import { ClientOnlyDesign } from '../ClientOnlyDesign'
import type { ClientOnlyPropsBasic } from '../props'
import type { ClientOnlyClasses, ClientOnlyComponents, ClientOnlyExpose } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

describe('ClientOnlyDesign (isolated class)', () => {
  it('should defer default slot invocation until mounted when clientOnly is true and render without wrapper', async () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const props = reactive<ClientOnlyPropsBasic>({ clientOnly: true })
    const slotSpy = vi.fn(() => [h('span', { class: 'client-content' }, 'Mounted Content')])
    let exposed: ClientOnlyExpose & { elementHtml?: { value?: HTMLDivElement } } = {}

    const Inner = defineComponent({
      setup() {
        const design = new ClientOnlyDesign<
          ClientOnlyComponents,
          ClientOnlyExpose,
          ClientOnlyClasses,
          ClientOnlyPropsBasic
        >(
          'd1.clientOnly',
          props
        )

        exposed = design.expose() as ClientOnlyExpose & { elementHtml?: { value?: HTMLDivElement } }
        return design.render()
      }
    })

    const Wrapper = defineComponent({
      setup() {
        return () => h(Inner, null, {
          default: slotSpy
        })
      }
    })

    const host = document.createElement('div')
    const app = createApp(Wrapper)
    app.mount(host)
    cleanups.push(() => app.unmount())

    // Slot was not invoked on the initial pre-mount render pass
    expect(slotSpy).toHaveBeenCalledTimes(0)
    expect(host.querySelector('.client-content')).toBeNull()

    await nextTick()

    expect(slotSpy).toHaveBeenCalledTimes(1)
    expect(host.children.length).toBe(1)
    expect(host.firstElementChild?.tagName).toBe('SPAN')
    expect(host.firstElementChild?.classList.contains('client-content')).toBe(true)
    expect(host.textContent).toBe('Mounted Content')
    expect(exposed.elementHtml?.value).toBeUndefined()
    expect(warnSpy).not.toHaveBeenCalled()
  })

  it('should render default slot synchronously on initial render when clientOnly is false', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const props = reactive<ClientOnlyPropsBasic>({ clientOnly: false })
    const slotSpy = vi.fn(() => [h('p', { class: 'immediate-content' }, 'Immediate')])

    const Inner = defineComponent({
      setup() {
        const design = new ClientOnlyDesign<
          ClientOnlyComponents,
          ClientOnlyExpose,
          ClientOnlyClasses,
          ClientOnlyPropsBasic
        >(
          'd1.clientOnly',
          props
        )

        return design.render()
      }
    })

    const Wrapper = defineComponent({
      setup() {
        return () => h(Inner, null, {
          default: slotSpy
        })
      }
    })

    const host = document.createElement('div')
    const app = createApp(Wrapper)
    app.mount(host)
    cleanups.push(() => app.unmount())

    expect(slotSpy).toHaveBeenCalledTimes(1)
    expect(host.querySelector('.immediate-content')?.textContent).toBe('Immediate')
    expect(warnSpy).not.toHaveBeenCalled()
  })

  it('should render cleanly as empty when default slot is omitted', async () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

    const Inner = defineComponent({
      setup() {
        const design = new ClientOnlyDesign<
          ClientOnlyComponents,
          ClientOnlyExpose,
          ClientOnlyClasses,
          ClientOnlyPropsBasic
        >(
          'd1.clientOnly',
          reactive<ClientOnlyPropsBasic>({ clientOnly: true })
        )

        return design.render()
      }
    })

    const host = document.createElement('div')
    const app = createApp(Inner)
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()

    expect(host.children.length).toBe(0)
    expect(host.textContent).toBe('')
    expect(warnSpy).not.toHaveBeenCalled()
  })

  it('should support custom ItemConstructor dependency injection', async () => {
    class NeverRenderClientOnly extends ClientOnly {
      override isRender(): boolean {
        return false
      }
    }

    const slotSpy = vi.fn(() => [h('span', 'Blocked')])

    const Inner = defineComponent({
      setup() {
        const design = new ClientOnlyDesign<
          ClientOnlyComponents,
          ClientOnlyExpose,
          ClientOnlyClasses,
          ClientOnlyPropsBasic
        >(
          'd1.clientOnly',
          reactive<ClientOnlyPropsBasic>({ clientOnly: false }),
          {},
          NeverRenderClientOnly
        )

        return design.render()
      }
    })

    const Wrapper = defineComponent({
      setup() {
        return () => h(Inner, null, {
          default: slotSpy
        })
      }
    })

    const host = document.createElement('div')
    const app = createApp(Wrapper)
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()

    expect(slotSpy).not.toHaveBeenCalled()
    expect(host.children.length).toBe(0)
  })
})

// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, createSSRApp, defineComponent, h, nextTick, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import type { ConstrClasses, ConstrStyles } from '@dxtmisha/functional'

import { ClientOnlyDesign } from '../ClientOnlyDesign'
import { defaultsClientOnly, type ClientOnlyPropsBasic } from '../props'
import type { ClientOnlyClasses, ClientOnlyComponents, ClientOnlyExpose } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

const TestClientOnly = defineComponent({
  name: 'TestClientOnly',
  props: {
    clientOnly: {
      type: Boolean,
      default: defaultsClientOnly.clientOnly
    }
  },
  setup(props, { expose }) {
    const classes = computed<ConstrClasses>(() => ({
      main: { 'd1-clientOnly': true }
    }))
    const styles = computed<ConstrStyles>(() => ({}))
    const design = new ClientOnlyDesign<
      ClientOnlyComponents,
      ClientOnlyExpose,
      ClientOnlyClasses,
      ClientOnlyPropsBasic
    >(
      'd1.clientOnly',
      props,
      {
        classes,
        styles
      }
    )

    expose(design.expose())
    return design.render()
  }
})

describe('ClientOnly (integration)', () => {
  it('should default to client-only rendering, mount multiple children, and support Unicode content', async () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const text = ref('Привет • Tiếng Việt • 🚀')

    const Host = defineComponent({
      setup() {
        return () => h(
          TestClientOnly,
          null,
          {
            default: () => [
              h('div', { class: 'first' }, text.value),
              h('span', { class: 'second' }, 'Client Badge')
            ]
          }
        )
      }
    })

    const container = document.createElement('div')
    const app = createApp(Host)
    app.mount(container)
    cleanups.push(() => app.unmount())

    expect(container.querySelector('.first')).toBeNull()

    await nextTick()

    expect(container.querySelector('.first')?.textContent).toBe('Привет • Tiếng Việt • 🚀')
    expect(container.querySelector('.second')?.textContent).toBe('Client Badge')

    text.value = 'Updated Client Text'
    await nextTick()

    expect(container.querySelector('.first')?.textContent).toBe('Updated Client Text')
    expect(warnSpy).not.toHaveBeenCalled()
  })

  it('should render immediately when clientOnly is false and stay rendered on prop toggle after mount', async () => {
    const clientOnly = ref(false)

    const Host = defineComponent({
      setup() {
        return () => h(
          TestClientOnly,
          { clientOnly: clientOnly.value },
          {
            default: () => h('section', { class: 'body' }, 'Always Visible')
          }
        )
      }
    })

    const container = document.createElement('div')
    const app = createApp(Host)
    app.mount(container)
    cleanups.push(() => app.unmount())

    expect(container.querySelector('.body')?.textContent).toBe('Always Visible')

    clientOnly.value = true
    await nextTick()

    expect(container.querySelector('.body')?.textContent).toBe('Always Visible')
  })

  it('should hydrate SSR placeholder cleanly without hydration mismatch warnings and then mount client content', async () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

    const Host = defineComponent({
      setup() {
        return () => h(
          TestClientOnly,
          { clientOnly: true },
          {
            default: () => h('div', { class: 'hydrated-client' }, 'Hydrated Content')
          }
        )
      }
    })

    const serverHtml = await renderToString(createSSRApp(Host))
    expect(serverHtml).toBe('<!---->')

    const container = document.createElement('div')
    container.innerHTML = serverHtml

    const app = createSSRApp(Host)
    app.mount(container)
    cleanups.push(() => app.unmount())

    await nextTick()

    expect(container.querySelector('.hydrated-client')?.textContent).toBe('Hydrated Content')
    expect(warnSpy).not.toHaveBeenCalled()
  })

  it('should hydrate SSR content cleanly without warnings when clientOnly is false', async () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

    const Host = defineComponent({
      setup() {
        return () => h(
          TestClientOnly,
          { clientOnly: false },
          {
            default: () => h('div', { class: 'ssr-child' }, 'Shared SSR Content')
          }
        )
      }
    })

    const serverHtml = await renderToString(createSSRApp(Host))
    expect(serverHtml).toContain('<div class="ssr-child">Shared SSR Content</div>')

    const container = document.createElement('div')
    container.innerHTML = serverHtml

    const app = createSSRApp(Host)
    app.mount(container)
    cleanups.push(() => app.unmount())

    await nextTick()

    expect(container.querySelector('.ssr-child')?.textContent).toBe('Shared SSR Content')
    expect(warnSpy).not.toHaveBeenCalled()
  })
})

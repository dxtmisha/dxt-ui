// @vitest-environment node
import './testWarnings'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h, provide, reactive } from 'vue'
import { renderToString, type SSRContext } from 'vue/server-renderer'
import {
  type ConstrClasses,
  type ConstrStyles,
  ServerStorage
} from '@dxtmisha/functional'

import { SnackbarDesign } from '../SnackbarDesign'
import type { SnackbarProps } from '../props'
import type { SnackbarClasses, SnackbarComponents, SnackbarExpose } from '../types'

beforeEach(() => {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
})

afterEach(() => {
  ServerStorage.reset()
})

const SnackbarItemMock = defineComponent({
  props: {
    label: String,
    description: String,
    value: String
  },
  setup(props) {
    return () => h(
      'div',
      { 'class': 'ssr-snackbar-item', 'data-value': props.value },
      [
        h('span', { class: 'ssr-label' }, props.label ?? ''),
        props.description ? h('span', { class: 'ssr-desc' }, props.description) : null
      ]
    )
  }
})

describe('Snackbar SSR (Server-Side Rendering)', () => {
  it('should render empty snackbar cleanly in SSR without browser API leaks', async () => {
    const TestComponent = defineComponent({
      setup() {
        const props = reactive<SnackbarProps>({
          full: true,
          delay: 5000
        })
        const classesToken = computed<ConstrClasses>(() => ({
          main: { 'd1-snackbar': true, 'd1-snackbar--full': true }
        }))
        const stylesToken = computed<ConstrStyles>(() => ({
          '--d1-snackbar-padding': '16px'
        }))

        const design = new SnackbarDesign<
          SnackbarComponents,
          SnackbarExpose,
          SnackbarClasses,
          SnackbarProps
        >('d1.snackbar', props, {
          classes: classesToken,
          styles: stylesToken,
          components: { snackbarItem: SnackbarItemMock }
        })

        return design.render()
      }
    })

    const ssrContext: SSRContext = {}
    const html = await renderToString(createSSRApp(TestComponent), ssrContext)

    expect(html).toBe('<!--[--><!--]-->')
    expect(ssrContext.teleports).toBeUndefined()
  })

  it('should render pre-populated normal, high-priority, and custom component notifications into SSR teleport body', async () => {
    const FunctionalToast = (props: { label?: string }) => h('em', { class: 'ssr-fn-toast' }, props.label)

    const TestComponent = defineComponent({
      setup() {
        const props = reactive<SnackbarProps>({
          textNotifications: 'Server Notifications'
        })
        const classesToken = computed<ConstrClasses>(() => ({
          main: { 'd1-snackbar': true }
        }))

        const design = new SnackbarDesign<
          SnackbarComponents,
          SnackbarExpose,
          SnackbarClasses,
          SnackbarProps
        >('d1.snackbar', props, {
          classes: classesToken,
          components: { snackbarItem: SnackbarItemMock }
        })

        const exposed = design.expose()
        exposed.add({
          value: 'ssr-1',
          delay: 3000,
          data: { label: 'Normal SSR', description: 'Details' }
        })
        exposed.add({
          value: 'ssr-2',
          highPriority: true,
          delay: -1,
          data: { label: 'Critical SSR' }
        })
        exposed.add({
          value: 'ssr-3',
          delay: 0,
          component: FunctionalToast,
          data: { label: 'Functional SSR' }
        })

        return design.render()
      }
    })

    const ssrContext: SSRContext = {}
    await renderToString(createSSRApp(TestComponent), ssrContext)

    const teleported = ssrContext.teleports?.body ?? ''
    expect(teleported).toContain('class="d1-snackbar"')
    expect(teleported).toContain('role="region"')
    expect(teleported).toContain('aria-label="Server Notifications"')
    expect(teleported).toContain('data-snackbar-item="ssr-1"')
    expect(teleported).toContain('Normal SSR')
    expect(teleported).toContain('<aside class="d1-snackbar__item d1-snackbar__priority" data-snackbar-item="ssr-2">')
    expect(teleported).toContain('Critical SSR')
    expect(teleported).toContain('class="d1-snackbar__space"')
    expect(teleported).toContain('<em class="ssr-fn-toast">Functional SSR</em>')
  })

  it('should escape XSS payloads and render Unicode safely in SSR with custom injected teleport target', async () => {
    const SnackbarHost = defineComponent({
      setup() {
        const props = reactive<SnackbarProps>({})
        const design = new SnackbarDesign<
          SnackbarComponents,
          SnackbarExpose,
          SnackbarClasses,
          SnackbarProps
        >('d1.snackbar', props, {
          components: { snackbarItem: SnackbarItemMock }
        })

        design.expose().add({
          value: 'unicode-1',
          delay: -1,
          data: {
            label: '<script>alert("xss")</script>',
            description: 'Học tiếng Việt • Уведомление 🚀'
          }
        })

        return design.render()
      }
    })

    const Wrapper = defineComponent({
      setup() {
        provide('__ui-teleport-ssr-body__', '#ssr-teleports')
        return () => h(SnackbarHost)
      }
    })

    const ssrContext: SSRContext = {}
    await renderToString(createSSRApp(Wrapper), ssrContext)

    const teleported = ssrContext.teleports?.['#ssr-teleports'] ?? ''
    expect(teleported).not.toBe('')
    expect(teleported).not.toContain('<script>alert("xss")</script>')
    expect(teleported).toContain('&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;')
    expect(teleported).toContain('Học tiếng Việt • Уведомление 🚀')
  })
})

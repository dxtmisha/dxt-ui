// @vitest-environment node
import './testWarnings'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h, reactive } from 'vue'
import { renderToString } from 'vue/server-renderer'
import {
  type ConstrClasses,
  type ConstrStyles,
  ServerStorage
} from '@dxtmisha/functional'

import { AlertDesign } from '../AlertDesign'
import type { AlertProps } from '../props'
import type { AlertClasses, AlertComponents, AlertExpose } from '../types'

beforeEach(() => {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
})

afterEach(() => {
  ServerStorage.reset()
})

const IconMock = defineComponent({
  props: { icon: [String, Object], class: [String, Array, Object] },
  setup(props) {
    return () => h('span', { 'class': props.class, 'data-icon': String(props.icon ?? '') })
  }
})

const ButtonMock = defineComponent({
  props: { label: [String, Number], icon: [String, Object], class: [String, Array, Object] },
  setup(props, { attrs }) {
    return () => h('button', { ...attrs, class: props.class }, props.label !== undefined ? String(props.label) : '')
  }
})

const AlertLinkMock = defineComponent({
  props: { label: [String, Number], href: String, class: [String, Array, Object] },
  setup(props) {
    return () => h('a', { class: props.class, href: props.href }, props.label !== undefined ? String(props.label) : '')
  }
})

const ActionsMock = defineComponent({
  props: { list: Array, class: [String, Array, Object] },
  setup(props) {
    return () => h('div', { class: props.class }, (props.list as Array<{ label?: string }> | undefined)?.map(item => h('button', item.label)))
  }
})

describe('Alert SSR (Server-Side Rendering)', () => {
  it('should render full alert markup with ARIA, icons, links, actions, button, and closeButton in SSR', async () => {
    const TestComponent = defineComponent({
      setup() {
        const props = reactive<AlertProps>({
          role: 'alert',
          ariaLive: 'polite',
          icon: 'info',
          label: 'SSR Notice',
          labelId: 'ssr-alert-title',
          description: 'Rendered cleanly on the server.',
          descriptionId: 'ssr-alert-desc',
          button: 'Undo',
          closeButton: true,
          iconClose: 'close',
          textClose: 'Close alert',
          links: [{ label: 'Help', href: '#help' }],
          actionsList: [{ label: 'Accept' }]
        })

        const classesToken = computed<ConstrClasses>(() => ({
          main: { 'd1-alert': true, 'd1-alert--itemCenter': true }
        }))
        const stylesToken = computed<ConstrStyles>(() => ({
          '--d1-alert-linkGap': '8px'
        }))

        const design = new AlertDesign<
          AlertComponents,
          AlertExpose,
          AlertClasses,
          AlertProps
        >('d1.alert', props, {
          classes: classesToken,
          styles: stylesToken,
          components: {
            actions: ActionsMock,
            alertLink: AlertLinkMock,
            button: ButtonMock,
            icon: IconMock
          }
        })

        return design.render()
      }
    })

    const html = await renderToString(createSSRApp(TestComponent))

    expect(html).toContain('role="alert"')
    expect(html).toContain('aria-live="polite"')
    expect(html).toContain('aria-labelledby="ssr-alert-title"')
    expect(html).toContain('aria-describedby="ssr-alert-desc"')
    expect(html).toContain('d1-alert--itemCenter')
    expect(html).toContain('--d1-alert-linkGap:8px')
    expect(html).toContain('SSR Notice')
    expect(html).toContain('Rendered cleanly on the server.')
    expect(html).toContain('Undo')
    expect(html).toContain('aria-label="Close alert"')
    expect(html).toContain('Help')
    expect(html).toContain('Accept')
  })

  it('should render body, trailing, default, and description slots in SSR', async () => {
    const AlertHost = defineComponent({
      setup() {
        const props = reactive<AlertProps>({ role: 'status' })
        const design = new AlertDesign('d1.alert', props)
        return design.render()
      }
    })

    const Wrapper = defineComponent({
      setup() {
        return () => h(AlertHost, null, {
          default: () => [h('span', { class: 'ssr-label' }, 'Slot Title')],
          description: () => [h('span', { class: 'ssr-desc' }, 'Slot Desc')],
          body: () => [h('div', { class: 'ssr-body' }, 'Slot Body')],
          trailing: () => [h('div', { class: 'ssr-trailing' }, 'Slot Trailing')]
        })
      }
    })

    const html = await renderToString(createSSRApp(Wrapper))

    expect(html).toContain('Slot Title')
    expect(html).toContain('Slot Desc')
    expect(html).toContain('Slot Body')
    expect(html).toContain('Slot Trailing')
  })

  it('should escape XSS payloads and render numeric 0 and Unicode safely in SSR', async () => {
    const TestComponent = defineComponent({
      setup() {
        const props = reactive<AlertProps>({
          role: 'alert',
          label: '<script>alert("xss")</script>',
          description: 'Học tiếng Việt • Оповещение • 0'
        })
        const design = new AlertDesign('d1.alert', props)
        return design.render()
      }
    })

    const html = await renderToString(createSSRApp(TestComponent))

    expect(html).not.toContain('<script>alert("xss")</script>')
    expect(html).toContain('&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;')
    expect(html).toContain('Học tiếng Việt • Оповещение • 0')
  })
})

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

import { AlertLinkDesign } from '../AlertLinkDesign'
import type { AlertLinkProps, AlertLinkPropsBasic } from '../props'
import type { AlertLinkClasses, AlertLinkComponents, AlertLinkExpose } from '../types'

beforeEach(() => {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
})

afterEach(() => {
  ServerStorage.reset()
})

describe('AlertLink SSR (Server-Side Rendering)', () => {
  it('should render anchor with label, href, classes, and styles in SSR mode', async () => {
    const TestComponent = defineComponent({
      setup() {
        const props = reactive<AlertLinkProps>({
          label: 'SSR Documentation',
          labelId: 'ssr-alert-link-label',
          href: 'https://example.com/ssr',
          divider: true
        })

        const classesToken = computed<ConstrClasses>(() => ({
          main: {
            'd1-alertLink': true,
            'd1-alertLink--divider': props.divider
          }
        }))
        const stylesToken = computed<ConstrStyles>(() => ({
          '--d1-alertLink-linkGap': '6px'
        }))

        const design = new AlertLinkDesign<
          AlertLinkComponents,
          AlertLinkExpose,
          AlertLinkClasses,
          AlertLinkProps
        >('d1.alertLink', props, {
          classes: classesToken,
          styles: stylesToken
        })

        return design.render()
      }
    })

    const html = await renderToString(createSSRApp(TestComponent))

    expect(html).toContain('<a')
    expect(html).toContain('href="https://example.com/ssr"')
    expect(html).toContain('class="d1-a--static d1-alertLink d1-alertLink--divider"')
    expect(html).toContain('--d1-alertLink-linkGap:6px')
    expect(html).toContain('id="ssr-alert-link-label"')
    expect(html).toContain('SSR Documentation')
  })

  it('should render numeric 0 label, default slot, and empty link safely in SSR', async () => {
    const SlotAlertLink = defineComponent({
      setup() {
        const props = reactive<AlertLinkPropsBasic>({})
        const design = new AlertLinkDesign('d1.alertLink', props)
        return design.render()
      }
    })

    const Host = defineComponent({
      setup() {
        return () => h(SlotAlertLink, null, {
          default: () => [h('span', { class: 'ssr-slot' }, 'SSR Slot Content')]
        })
      }
    })

    const slotHtml = await renderToString(createSSRApp(Host))
    expect(slotHtml).toContain('ssr-slot')
    expect(slotHtml).toContain('SSR Slot Content')

    const ZeroAlertLink = defineComponent({
      setup() {
        const props = reactive<AlertLinkPropsBasic>({ label: 0 })
        const design = new AlertLinkDesign('d1.alertLink', props)
        return design.render()
      }
    })

    const zeroHtml = await renderToString(createSSRApp(ZeroAlertLink))
    expect(zeroHtml).toContain('>0</span>')

    const EmptyAlertLink = defineComponent({
      setup() {
        const props = reactive<AlertLinkPropsBasic>({})
        const design = new AlertLinkDesign('d1.alertLink', props)
        return design.render()
      }
    })

    const emptyHtml = await renderToString(createSSRApp(EmptyAlertLink))
    expect(emptyHtml).toContain('<a')
    expect(emptyHtml).toContain('tabindex="0"')
    expect(emptyHtml).toContain('role="button"')
    expect(emptyHtml).not.toContain('<span')
  })

  it('should escape XSS payloads and render Unicode/Vietnamese/Cyrillic labels safely in SSR', async () => {
    const TestComponent = defineComponent({
      setup() {
        const props = reactive<AlertLinkPropsBasic>({
          label: '<script>alert("xss")</script> Học tiếng Việt & Подробнее'
        })
        const design = new AlertLinkDesign('d1.alertLink', props)
        return design.render()
      }
    })

    const html = await renderToString(createSSRApp(TestComponent))

    expect(html).not.toContain('<script>alert("xss")</script>')
    expect(html).toContain('&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;')
    expect(html).toContain('Học tiếng Việt &amp; Подробнее')
  })

  it('should generate deterministic markup across separate SSR requests', async () => {
    const createTestApp = (label: string, labelId: string) => defineComponent({
      setup() {
        const props = reactive<AlertLinkPropsBasic>({ label, labelId })
        const design = new AlertLinkDesign('d1.alertLink', props)
        return design.render()
      }
    })

    ServerStorage.init(() => ({ id: 'req-1' }))
    const html1 = await renderToString(createSSRApp(createTestApp('First Request', 'id-1')))

    ServerStorage.reset()
    ServerStorage.init(() => ({ id: 'req-2' }))
    const html2 = await renderToString(createSSRApp(createTestApp('Second Request', 'id-2')))

    expect(html1).toContain('First Request')
    expect(html1).not.toContain('Second Request')
    expect(html2).toContain('Second Request')
    expect(html2).not.toContain('First Request')
  })
})

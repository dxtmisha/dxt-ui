// @vitest-environment node
import './testWarnings'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h, inject, reactive, type Ref } from 'vue'
import { renderToString } from 'vue/server-renderer'
import {
  type ConstrClasses,
  type ConstrStyles,
  ServerStorage
} from '@dxtmisha/functional'

import { AREA_PROP_NAME } from '../../../types/areaTypes'
import { SnackbarItemDesign } from '../SnackbarItemDesign'
import type { SnackbarItemProps } from '../props'
import type { SnackbarItemClasses, SnackbarItemComponents, SnackbarItemExpose } from '../types'

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

const ActionsMock = defineComponent({
  props: { align: String, list: Array, class: [String, Array, Object] },
  setup(props) {
    return () => h(
      'div',
      { 'class': props.class, 'data-align': props.align },
      (props.list as Array<{ label?: string }> | undefined)?.map(item => h('button', item.label))
    )
  }
})

describe('SnackbarItem SSR (Server-Side Rendering)', () => {
  it('should render full snackbar item markup with ARIA, icons, label, description, html, component, button, closeButton, and actions in SSR', async () => {
    const CustomInner = defineComponent({
      props: { info: String },
      setup(props) {
        return () => h('span', { class: 'ssr-component' }, props.info)
      }
    })

    const TestComponent = defineComponent({
      setup() {
        const props = reactive<SnackbarItemProps>({
          area: 'snackbar',
          error: true,
          icon: 'error',
          label: 'SSR Error Notice',
          description: 'Rendered cleanly on the server.',
          html: '<b>Trusted HTML</b>',
          component: CustomInner,
          componentProps: { info: 'Server Component' },
          button: 'Retry',
          closeButton: true,
          iconClose: 'close',
          textClose: 'Close notification',
          actionsList: [{ label: 'Details' }]
        })

        const classesToken = computed<ConstrClasses>(() => ({
          main: { 'd1-snackbarItem': true, 'd1-snackbarItem--error': true }
        }))
        const stylesToken = computed<ConstrStyles>(() => ({
          '--d1-snackbarItem-gap': '12px'
        }))

        const design = new SnackbarItemDesign<
          SnackbarItemComponents,
          SnackbarItemExpose,
          SnackbarItemClasses,
          SnackbarItemProps
        >('d1.snackbarItem', props, {
          classes: classesToken,
          styles: stylesToken,
          components: {
            actions: ActionsMock,
            button: ButtonMock,
            icon: IconMock
          }
        })

        return design.render()
      }
    })

    const html = await renderToString(createSSRApp(TestComponent))

    expect(html).toContain('role="alert"')
    expect(html).toContain('aria-live="assertive"')
    expect(html).toContain('aria-atomic="true"')
    expect(html).toContain('d1-snackbarItem--error')
    expect(html).toContain('--d1-snackbarItem-gap:12px')
    expect(html).toContain('SSR Error Notice')
    expect(html).toContain('Rendered cleanly on the server.')
    expect(html).toContain('<b>Trusted HTML</b>')
    expect(html).toContain('Server Component')
    expect(html).toContain('Retry')
    expect(html).toContain('aria-label="Close notification"')
    expect(html).toContain('data-align="left"')
    expect(html).toContain('Details')
  })

  it('should render default, description, and body slots and propagate area via provide/inject in SSR', async () => {
    const AreaReader = defineComponent({
      setup() {
        const area = inject<Ref<string | undefined>>(AREA_PROP_NAME)
        return () => h('span', { class: 'ssr-area' }, area?.value ?? '')
      }
    })

    const SnackbarItemHost = defineComponent({
      setup() {
        const props = reactive<SnackbarItemProps>({ area: 'snackbar', success: true })
        const design = new SnackbarItemDesign('d1.snackbarItem', props)
        return design.render()
      }
    })

    const Wrapper = defineComponent({
      setup() {
        return () => h(SnackbarItemHost, null, {
          default: () => [h('span', { class: 'ssr-label' }, 'Slot Title')],
          description: () => [h('span', { class: 'ssr-desc' }, 'Slot Desc')],
          body: () => [h(AreaReader)]
        })
      }
    })

    const html = await renderToString(createSSRApp(Wrapper))

    expect(html).toContain('role="status"')
    expect(html).toContain('aria-live="polite"')
    expect(html).toContain('Slot Title')
    expect(html).toContain('Slot Desc')
    expect(html).toContain('<span class="ssr-area">snackbar</span>')
  })

  it('should escape XSS payloads in label/description and render numeric 0 and Unicode safely in SSR', async () => {
    const TestComponent = defineComponent({
      setup() {
        const props = reactive<SnackbarItemProps>({
          label: '<script>alert("xss")</script>',
          description: 'Học tiếng Việt • Уведомление • 0 🚀'
        })
        const design = new SnackbarItemDesign('d1.snackbarItem', props)
        return design.render()
      }
    })

    const html = await renderToString(createSSRApp(TestComponent))

    expect(html).not.toContain('<script>alert("xss")</script>')
    expect(html).toContain('&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;')
    expect(html).toContain('Học tiếng Việt • Уведомление • 0 🚀')
  })
})

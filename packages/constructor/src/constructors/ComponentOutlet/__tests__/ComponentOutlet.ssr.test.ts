// @vitest-environment node
import './testWarnings'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h, reactive, type VNode } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { ComponentStorage, ServerStorage, type ConstrItem } from '@dxtmisha/functional'

import { ComponentOutletDesign } from '../ComponentOutletDesign'
import { defaultsComponentOutlet, type ComponentOutletProps } from '../props'
import type {
  ComponentOutletClasses,
  ComponentOutletComponents,
  ComponentOutletExpose
} from '../types'

/**
 * Clears all registered components in the shared ComponentStorage instance.
 *
 * Очищает все зарегистрированные компоненты в общем экземпляре ComponentStorage.
 */
function clearComponentStorage(): void {
  ;(ComponentStorage.getItem() as unknown as { items: Map<string, unknown> }).items.clear()
}

beforeEach(() => {
  clearComponentStorage()
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
})

afterEach(() => {
  clearComponentStorage()
  ServerStorage.reset()
})

/**
 * Renders the complete ComponentOutlet component in a pure Node SSR environment without browser globals.
 *
 * Рендерит полный компонент ComponentOutlet в чистом серверном окружении Node без браузерных глобальных объектов.
 * @param properties component properties / свойства компонента
 * @param attrs fallthrough attributes / пробрасываемые атрибуты
 * @param slots named slots map / карта именованных слотов
 * @returns rendered server HTML string / отрендеренная серверная HTML-строка
 */
async function renderOutletSsr(
  properties: ComponentOutletProps,
  attrs?: ConstrItem,
  slots?: Record<string, (slotProps: ConstrItem) => VNode[]>
): Promise<string> {
  const props = reactive<ComponentOutletProps>({
    ...defaultsComponentOutlet,
    ...properties
  })

  const classes = computed<ComponentOutletClasses>(() => ({
    main: { 'd1-component-outlet': true }
  }))
  const styles = computed(() => ({
    '--d1-outlet-ssr': '1'
  }))

  const InnerOutlet = defineComponent({
    setup() {
      const design = new ComponentOutletDesign<
        ComponentOutletComponents,
        ComponentOutletExpose,
        ComponentOutletClasses,
        ComponentOutletProps
      >(
        'd1.componentOutlet',
        props,
        {
          classes,
          styles
        }
      )

      return design.render()
    }
  })

  const RootComponent = defineComponent({
    setup() {
      return () => h(InnerOutlet, attrs ?? null, slots)
    }
  })

  return renderToString(createSSRApp(RootComponent))
}

describe('ComponentOutlet (SSR)', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should render registered component without wrapper element and without accessing browser globals', async () => {
      expect(typeof window).toBe('undefined')
      expect(typeof document).toBe('undefined')

      const SsrButton = defineComponent({
        name: 'SsrButton',
        props: {
          type: { type: String, default: 'button' },
          variant: { type: String, default: 'primary' },
          label: { type: String, default: '' }
        },
        setup(buttonProps) {
          return () => h(
            'button',
            {
              'type': buttonProps.type,
              'data-variant': buttonProps.variant
            },
            buttonProps.label
          )
        }
      })

      ComponentStorage.add('ssr-button', SsrButton, {
        type: 'submit',
        variant: 'primary',
        class: 'storage-btn',
        style: { '--btn-radius': '4px' }
      })

      const html = await renderOutletSsr(
        {
          name: 'ssr-button',
          props: {
            variant: 'secondary',
            label: 'Confirm Action',
            class: 'prop-btn',
            style: { '--btn-padding': '12px' }
          }
        },
        {
          'id': 'ssr-confirm',
          'data-testid': 'ssr-btn',
          'class': 'attr-btn',
          'style': { '--btn-border': '1px' }
        }
      )

      expect(html).toContain('<button')
      expect(html).toContain('id="ssr-confirm"')
      expect(html).toContain('data-testid="ssr-btn"')
      expect(html).toContain('type="submit"')
      expect(html).toContain('data-variant="secondary"')
      expect(html).toContain('d1-component-outlet')
      expect(html).toContain('attr-btn')
      expect(html).toContain('storage-btn')
      expect(html).toContain('prop-btn')
      expect(html).toContain('--d1-outlet-ssr:1')
      expect(html).toContain('--btn-border:1px')
      expect(html).toContain('--btn-radius:4px')
      expect(html).toContain('--btn-padding:12px')
      expect(html).toContain('>Confirm Action</button>')
    })

    it('should forward default, named, and scoped slots to the resolved component in SSR', async () => {
      const SsrPanel = defineComponent({
        name: 'SsrPanel',
        props: {
          sectionId: { type: String, default: '' }
        },
        setup(panelProps, { slots }) {
          return () => h('section', { 'data-section': panelProps.sectionId }, [
            h('header', { class: 'panel-header' }, slots.header?.({ id: panelProps.sectionId })),
            h('div', { class: 'panel-body' }, slots.default?.({ id: panelProps.sectionId })),
            h('footer', { class: 'panel-footer' }, slots.footer?.({ id: panelProps.sectionId }))
          ])
        }
      })

      ComponentStorage.add('ssr-panel', SsrPanel, {
        sectionId: 'sec-42'
      })

      const html = await renderOutletSsr(
        { name: 'ssr-panel' },
        undefined,
        {
          header: ({ id }) => [h('h1', `Header ${String(id)}`)],
          default: ({ id }) => [h('p', `Body ${String(id)}`)],
          footer: ({ id }) => [h('small', `Footer ${String(id)}`)]
        }
      )

      expect(html).toContain('data-section="sec-42"')
      expect(html).toContain('<header class="panel-header"><h1>Header sec-42</h1></header>')
      expect(html).toContain('<div class="panel-body"><p>Body sec-42</p></div>')
      expect(html).toContain('<footer class="panel-footer"><small>Footer sec-42</small></footer>')
    })

    it('should render nested ComponentOutlet instances recursively in SSR', async () => {
      const LeafBadge = defineComponent({
        props: { text: { type: String, default: '' } },
        setup(badgeProps) {
          return () => h('span', { class: 'leaf-badge' }, badgeProps.text)
        }
      })

      const OuterCard = defineComponent({
        setup(_cardProps, { slots }) {
          return () => h('div', { class: 'outer-card' }, slots.default?.())
        }
      })

      ComponentStorage.addList([
        { name: 'leaf-badge', component: LeafBadge, props: { text: 'Default Badge' } },
        { name: 'outer-card', component: OuterCard }
      ])

      const NestedInnerOutlet = defineComponent({
        setup() {
          const props = reactive<ComponentOutletProps>({
            name: 'leaf-badge',
            props: { text: 'Nested SSR Badge' }
          })
          const design = new ComponentOutletDesign('d1.componentOutlet', props)
          return design.render()
        }
      })

      const html = await renderOutletSsr(
        { name: 'outer-card' },
        undefined,
        {
          default: () => [h(NestedInnerOutlet)]
        }
      )

      expect(html).toContain('<div class="outer-card d1-component-outlet"')
      expect(html).toContain('class="leaf-badge"')
      expect(html).toContain('>Nested SSR Badge</span>')
    })
  })

  describe('Empty, whitespace-only, and nullish inputs', () => {
    it.each([
      undefined,
      '',
      'missing-component',
      '   '
    ])('should render fallback default slot in SSR when name is %j', async (name) => {
      const html = await renderOutletSsr(
        { name },
        undefined,
        {
          default: () => [h('div', { class: 'ssr-fallback' }, 'Fallback SSR Slot')]
        }
      )

      expect(html).toContain('<div class="ssr-fallback">Fallback SSR Slot</div>')
    })

    it.each([
      undefined,
      '',
      'missing-component'
    ])('should render empty comment node in SSR when name is %j and no default slot is provided', async (name) => {
      const html = await renderOutletSsr({ name })

      expect(html).toBe('<!---->')
    })
  })

  describe('Metacharacters, escaping, Unicode, and security in SSR', () => {
    it('should safely escape HTML/XSS payloads in props and render multilingual Unicode in SSR', async () => {
      const SafeBanner = defineComponent({
        props: {
          title: { type: String, default: '' },
          caption: { type: String, default: '' }
        },
        setup(bannerProps) {
          return () => h(
            'div',
            { 'data-caption': bannerProps.caption },
            bannerProps.title
          )
        }
      })

      ComponentStorage.add('safe-banner', SafeBanner, {
        title: 'Привет 🇻🇳 Tiếng Việt 你好 🚀'
      })

      const html = await renderOutletSsr({
        name: 'safe-banner',
        props: {
          caption: '"><script>alert("xss")</script>'
        }
      })

      expect(html).toContain('Привет 🇻🇳 Tiếng Việt 你好 🚀')
      expect(html).toContain('data-caption="&quot;&gt;&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;"')
      expect(html).not.toContain('<script>alert("xss")</script>')
    })
  })
})

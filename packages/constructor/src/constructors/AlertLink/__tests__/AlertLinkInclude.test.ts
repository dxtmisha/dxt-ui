// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { AlertLinkInclude } from '../AlertLinkInclude'
import type { AlertLinkComponentInclude, AlertLinkEmitsInclude, AlertLinkPropsInclude } from '../basicTypes'

/** Active DOM and app cleanup callbacks / Колбэки очистки DOM и приложений */
const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

describe('AlertLinkInclude', () => {
  const naming = new DesignName('d1.alert')

  describe('Static predicate and visibility getter (is)', () => {
    it('should return false for undefined, missing links, or empty links array', () => {
      expect(AlertLinkInclude.is(undefined)).toBe(false)
      expect(AlertLinkInclude.is({})).toBe(false)
      expect(AlertLinkInclude.is({ links: [] })).toBe(false)

      const emptyInclude = new AlertLinkInclude({ links: [] }, naming)
      expect(emptyInclude.is).toBe(false)
    })

    it('should return true when links array has at least one item', () => {
      const props: AlertLinkPropsInclude = {
        links: [{ label: 'Read more', href: '#more' }]
      }

      expect(AlertLinkInclude.is(props)).toBe(true)

      const include = new AlertLinkInclude(props, naming)
      expect(include.is).toBe(true)
    })

    it('should reactively evaluate visibility when props are passed as getter function', async () => {
      const linksRef = ref<AlertLinkPropsInclude['links']>([])
      const include = new AlertLinkInclude(() => ({ links: linksRef.value }), naming)

      expect(include.is).toBe(false)

      linksRef.value = [{ label: 'Details' }]
      await nextTick()
      expect(include.is).toBe(true)

      linksRef.value = []
      await nextTick()
      expect(include.is).toBe(false)
    })
  })

  describe('Rendering and mergeProps binding composition', () => {
    it('should return empty array when components are missing or links are empty', () => {
      const withoutComponents = new AlertLinkInclude(
        { links: [{ label: 'Link' }] },
        naming
      )
      expect(withoutComponents.render()).toEqual([])

      const components = new DesignComponents<AlertLinkComponentInclude, AlertLinkPropsInclude>({
        alertLink: defineComponent({ render: () => h('a') })
      })
      const emptyLinks = new AlertLinkInclude({ links: [] }, naming, components)
      expect(emptyLinks.render()).toEqual([])
    })

    it('should render links wrapper with unique keys even when links share identical hrefs', async () => {
      const capturedProps: Array<Record<string, unknown>> = []
      const MockAlertLink = defineComponent({
        name: 'MockAlertLink',
        inheritAttrs: false,
        props: {
          label: [String, Number],
          href: String,
          divider: Boolean,
          class: [String, Array, Object],
          onClick: [Function, Array]
        },
        setup(props, { attrs }) {
          capturedProps.push({ ...props, ...attrs })
          return () => h('a', { class: props.class, href: props.href }, props.label)
        }
      })

      const host = document.createElement('div')
      document.body.appendChild(host)
      cleanups.push(() => host.remove())

      const sharedClick = vi.fn()
      const firstItemClick = vi.fn()
      const emitSpy = vi.fn()

      const props = reactive<AlertLinkPropsInclude>({
        linksAttrs: {
          class: 'shared-link-class',
          divider: false,
          onClick: sharedClick
        },
        links: [
          {
            label: 'First',
            href: '#',
            value: 'first',
            class: 'first-custom',
            onClick: firstItemClick
          },
          {
            label: 'Second',
            href: '#',
            value: 'second',
            divider: true
          }
        ]
      })

      const components = new DesignComponents<AlertLinkComponentInclude, AlertLinkPropsInclude>({
        alertLink: MockAlertLink
      })
      const include = new AlertLinkInclude(
        props,
        naming,
        components,
        (type: keyof AlertLinkEmitsInclude, ...args: any[]) => emitSpy(type, ...args)
      )

      const Host = defineComponent({
        setup() {
          return () => h('div', include.render(undefined, { class: 'custom-links-wrap' } as any))
        }
      })

      const app = createApp(Host)
      app.mount(host)
      cleanups.push(() => app.unmount())

      await nextTick()

      const wrapper = host.querySelector('.d1-alert__links') as HTMLElement
      expect(wrapper).not.toBeNull()
      expect(wrapper.classList.contains('custom-links-wrap')).toBe(true)

      const anchors = wrapper.querySelectorAll('a')
      expect(anchors).toHaveLength(2)
      expect(anchors[0]?.classList.contains('d1-alert__links__item')).toBe(true)
      expect(anchors[0]?.classList.contains('shared-link-class')).toBe(true)
      expect(anchors[0]?.classList.contains('first-custom')).toBe(true)
      expect(anchors[1]?.classList.contains('d1-alert__links__item')).toBe(true)
      expect(anchors[1]?.classList.contains('shared-link-class')).toBe(true)

      // Per-item divider override must win over linksAttrs.divider while keeping linksAttrs.divider for first item
      expect(capturedProps[0]?.divider).toBe(false)
      expect(capturedProps[1]?.divider).toBe(true)

      // Invoking composed onClick handler must call parent onLink, linksAttrs.onClick, and item onClick
      const mouseEvent = new MouseEvent('click')
      const payload = { type: 'click', value: 'first', detail: undefined }
      const handlers = capturedProps[0]?.onClick as Array<(event: MouseEvent, value: typeof payload) => void>

      expect(Array.isArray(handlers)).toBe(true)
      handlers.forEach(handler => handler(mouseEvent, payload))

      expect(sharedClick).toHaveBeenCalledWith(mouseEvent, payload)
      expect(firstItemClick).toHaveBeenCalledWith(mouseEvent, payload)
      expect(emitSpy).toHaveBeenCalledWith('link', mouseEvent, payload)
      expect(emitSpy).toHaveBeenCalledWith('linkLite', payload)
    })
  })

  describe('Event forwarding (onLink)', () => {
    it('should emit link and linkLite events and handle missing emits safely', () => {
      const emitSpy = vi.fn()
      const includeWithEmits = new AlertLinkInclude(
        {},
        naming,
        undefined,
        (type: keyof AlertLinkEmitsInclude, ...args: any[]) => emitSpy(type, ...args)
      )

      const event = new MouseEvent('click')
      const value = { type: 'click', value: 'help', detail: { section: 'docs' } }
      includeWithEmits.onLink(event, value)

      expect(emitSpy).toHaveBeenCalledTimes(2)
      expect(emitSpy).toHaveBeenNthCalledWith(1, 'link', event, value)
      expect(emitSpy).toHaveBeenNthCalledWith(2, 'linkLite', value)

      const includeWithoutEmits = new AlertLinkInclude({}, naming)
      expect(() => includeWithoutEmits.onLink(event, value)).not.toThrow()
    })
  })
})

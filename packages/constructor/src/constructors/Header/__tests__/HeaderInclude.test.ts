// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive } from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { HeaderInclude } from '../HeaderInclude'
import type { HeaderPropsInclude, HeaderSlotsInclude } from '../basicTypes'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

describe('HeaderInclude (isolated class)', () => {
  describe('Visibility checks: static is() and instance is getter', () => {
    it('should accurately detect presence of props, numeric 0, headerAttrs, and header slots', () => {
      expect(HeaderInclude.is()).toBe(false)
      expect(HeaderInclude.is({})).toBe(false)
      expect(HeaderInclude.is({ label: '   ', caption: '   ' })).toBe(false)
      expect(HeaderInclude.is({ headerAttrs: {} })).toBe(false)

      expect(HeaderInclude.is({ label: 'Title' })).toBe(true)
      expect(HeaderInclude.is({ label: 0 })).toBe(true)
      expect(HeaderInclude.is({ caption: 0 })).toBe(true)
      expect(HeaderInclude.is({ icon: 'home' })).toBe(true)
      expect(HeaderInclude.is({ headerAttrs: { label: 'From attrs' } })).toBe(true)

      expect(HeaderInclude.is({}, { label: () => [h('span', 'Label')] })).toBe(true)
      expect(HeaderInclude.is({}, { caption: () => [h('span', 'Caption')] })).toBe(true)
      expect(HeaderInclude.is({}, { trailing: () => [h('span', 'Trailing')] })).toBe(true)
      expect(HeaderInclude.is({}, { default: () => [h('span', 'Body')] } as unknown as HeaderSlotsInclude)).toBe(false)
    })
  })

  describe('Non-destructive binds resolution', () => {
    it('should preserve headerAttrs properties when top-level optional props are undefined', () => {
      const naming = new DesignName('d1.block')
      const props = reactive<HeaderPropsInclude>({
        headerAttrs: {
          label: 'Header from attrs',
          caption: 'Caption from attrs',
          icon: 'settings',
          class: 'custom-hdr'
        }
      })

      const include = new HeaderInclude(props, naming, undefined, undefined, undefined, 'block-lbl-1')

      expect(include.binds.value).toMatchObject({
        label: 'Header from attrs',
        caption: 'Caption from attrs',
        icon: 'settings',
        labelId: 'block-lbl-1'
      })
      expect(String(include.binds.value.class)).toContain('custom-hdr')
      expect(String(include.binds.value.class)).toContain('d1-block__header')
    })

    it('should map top-level tagHeader, label, caption, and icon properties cleanly', () => {
      const naming = new DesignName('d1.block')
      const props = reactive<HeaderPropsInclude>({
        tagHeader: 'h2',
        label: 'Section Title',
        caption: 'Optional',
        captionDecorative: true,
        icon: 'info',
        iconTurn: true,
        iconHide: false,
        iconDir: true,
        iconPalette: true,
        iconAttrs: { 'data-icon-extra': 'yes' } as Record<string, unknown>
      })

      const include = new HeaderInclude(props, naming, undefined, undefined, undefined, 'lbl-2')

      expect(include.binds.value).toMatchObject({
        tag: 'h2',
        label: 'Section Title',
        labelId: 'lbl-2',
        caption: 'Optional',
        captionDecorative: true,
        icon: 'info',
        iconTurn: true,
        iconHide: false,
        iconDir: true,
        iconPalette: true,
        iconAttrs: { 'data-icon-extra': 'yes' }
      })
    })
  })

  describe('Slot remapping and Vue component rendering', () => {
    it('should render included Header when only slots (label, caption, trailing) are supplied without props', async () => {
      const state = reactive<HeaderPropsInclude>({})
      const naming = new DesignName('d1.block')

      const MockHeader = defineComponent({
        name: 'MockHeader',
        props: {
          label: [String, Number],
          caption: [String, Number],
          tag: String,
          labelId: String
        },
        setup(componentProps, { attrs, slots }) {
          return () => h('div', {
            'class': attrs.class,
            'data-tag': componentProps.tag,
            'data-label-id': componentProps.labelId
          }, [
            h('div', { class: 'slot-default' }, slots.default ? slots.default() : componentProps.label),
            h('div', { class: 'slot-caption' }, slots.caption ? slots.caption() : componentProps.caption),
            h('div', { class: 'slot-trailing' }, slots.trailing ? slots.trailing() : [])
          ])
        }
      })

      const components = new DesignComponents({ header: MockHeader })
      const slots: HeaderSlotsInclude = {
        label: () => [h('strong', 'Slot Label')],
        caption: () => [h('em', 'Slot Caption')],
        trailing: () => [h('button', 'Edit')]
      }

      const Host = defineComponent({
        setup() {
          const include = new HeaderInclude(
            () => ({ ...state }),
            naming,
            components,
            undefined,
            undefined,
            'hdr-id-99',
            slots
          )
          return () => h('section', include.render())
        }
      })

      const container = document.createElement('div')
      const app = createApp(Host)
      app.mount(container)
      cleanups.push(() => app.unmount())

      expect(container.querySelector('.d1-block__header')).not.toBeNull()
      expect(container.querySelector('[data-label-id="hdr-id-99"]')).not.toBeNull()
      expect(container.querySelector('.slot-default')?.textContent).toBe('Slot Label')
      expect(container.querySelector('.slot-caption')?.textContent).toBe('Slot Caption')
      expect(container.querySelector('.slot-trailing')?.textContent).toBe('Edit')

      state.tagHeader = 'h1'
      await nextTick()
      expect(container.querySelector('[data-tag="h1"]')).not.toBeNull()
    })
  })
})
